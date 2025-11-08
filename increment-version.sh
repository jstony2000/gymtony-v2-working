#!/bin/bash

# 🎯 GYMTONY V2 - SCRIPT DE INCREMENTO AUTOMÁTICO
# ===============================================
# 
# Este script incrementa automáticamente la versión y despliega
# Uso: ./increment-version.sh [patch|minor|major|build] [mensaje]

# 🎨 Colores para la salida
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 📍 Configuración
VERSION_FILE="version.json"
REPO_NAME="gymtony-v2-working"
GITHUB_USER="jstony2000"

# 🔍 Verificar que existe el archivo de versión
if [ ! -f "$VERSION_FILE" ]; then
    echo -e "${RED}❌ Error: No se encuentra $VERSION_FILE${NC}"
    exit 1
fi

# 📊 Cargar versión actual
CURRENT_VERSION=$(cat $VERSION_FILE | grep '"version"' | cut -d'"' -f4)
CURRENT_BUILD=$(cat $VERSION_FILE | grep '"build"' | cut -d':' -f2 | tr -d ' ,')
echo -e "${BLUE}📍 Versión actual: $CURRENT_VERSION (Build $CURRENT_BUILD)${NC}"

# 🎯 Procesar argumentos
INCREMENT_TYPE=${1:-"patch"}
DESCRIPTION=${2:-"Actualización automática del sistema"}
MESSAGE=${3:-"🔄 Auto-increment: $DESCRIPTION (v$CURRENT_VERSION → "}

# ✅ Validar tipo de incremento
case $INCREMENT_TYPE in
    "patch"|"minor"|"major"|"build")
        echo -e "${GREEN}🔄 Tipo de incremento: $INCREMENT_TYPE${NC}"
        ;;
    *)
        echo -e "${RED}❌ Tipo de incremento no válido. Use: patch, minor, major, build${NC}"
        exit 1
        ;;
esac

# 🔄 Usar Node.js para incrementar versión (si está disponible)
if command -v node >/dev/null 2>&1; then
    echo -e "${BLUE}🖥️  Usando Node.js para incrementar versión...${NC}"
    
    # Crear script temporal de JavaScript
    cat > temp_version_script.js << 'EOF'
const fs = require('fs');

// Cargar versión
const versionData = JSON.parse(fs.readFileSync('version.json', 'utf8'));
const args = process.argv.slice(2);
const type = args[0] || 'patch';
const description = args[1] || 'Actualización automática';

console.log('📊 Versión actual:', versionData.version);
console.log('🔄 Incremento:', type);

// Incrementar versión
const [major, minor, patch] = versionData.semantic;
let newVersion = { ...versionData };

switch (type) {
    case 'major':
        newVersion.semantic.major = major + 1;
        newVersion.semantic.minor = 0;
        newVersion.semantic.patch = 0;
        newVersion.build = 1;
        newVersion.codeName = 'major_release';
        break;
    case 'minor':
        newVersion.semantic.minor = minor + 1;
        newVersion.semantic.patch = 0;
        newVersion.build = 1;
        newVersion.codeName = 'feature_release';
        break;
    case 'patch':
        newVersion.semantic.patch = patch + 1;
        newVersion.build = 1;
        newVersion.codeName = 'patch_release';
        break;
    case 'build':
        newVersion.build = versionData.build + 1;
        newVersion.codeName = 'build_increment';
        break;
}

const versionString = `${newVersion.semantic.major}.${newVersion.semantic.minor}.${newVersion.semantic.patch}`;
newVersion.version = versionString;
newVersion.date = new Date().toISOString().split('T')[0];

// Añadir al changelog
if (!newVersion.changelog) newVersion.changelog = [];
const timestamp = new Date().toLocaleString('es-ES');
newVersion.changelog.unshift(`📅 ${timestamp}: ${description}`);

// Guardar
fs.writeFileSync('version.json', JSON.stringify(newVersion, null, 2));

// Actualizar manifest.json
const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
manifest.name = `GymTony V${versionString}`;
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2));

// Actualizar index.html
const indexContent = fs.readFileSync('index.html', 'utf8')
    .replace(/<title>GymTony V[^<]*<\/title>/, `<title>GymTony V${versionString}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, 
        `<meta name="description" content="GymTony V${versionString} - Tu aplicacion de entrenamiento personalizada"`);
fs.writeFileSync('index.html', indexContent);

console.log('✅ Nueva versión:', versionString);
console.log('🏷️  Build:', newVersion.build);
EOF

    # Ejecutar script
    node temp_version_script.js "$INCREMENT_TYPE" "$DESCRIPTION"
    rm temp_version_script.js
    
else
    echo -e "${YELLOW}⚠️  Node.js no disponible, usando método alternativo...${NC}"
    
    # 🔄 Método alternativo - incremento simple
    case $INCREMENT_TYPE in
        "patch")
            NEW_PATCH=$((CURRENT_PATCH + 1))
            NEW_VERSION="${MAJOR}.${MINOR}.${NEW_PATCH}"
            NEW_BUILD=1
            ;;
        "minor")
            NEW_MINOR=$((MINOR + 1))
            NEW_PATCH=0
            NEW_VERSION="${MAJOR}.${NEW_MINOR}.${NEW_PATCH}"
            NEW_BUILD=1
            ;;
        "major")
            NEW_MAJOR=$((MAJOR + 1))
            NEW_MINOR=0
            NEW_PATCH=0
            NEW_VERSION="${NEW_MAJOR}.${NEW_MINOR}.${NEW_PATCH}"
            NEW_BUILD=1
            ;;
        "build")
            NEW_VERSION=$CURRENT_VERSION
            NEW_BUILD=$((CURRENT_BUILD + 1))
            ;;
    esac
    
    echo -e "${GREEN}✅ Versión incrementada: $NEW_VERSION (Build $NEW_BUILD)${NC}"
fi

# 📋 Añadir entrada al changelog
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
echo -e "${BLUE}📝 Añadiendo al changelog...${NC}"

# 🔄 Git add, commit y push
echo -e "${BLUE}🔄 Preparando commit...${NC}"

# Obtener nueva versión
NEW_VERSION=$(cat $VERSION_FILE | grep '"version"' | cut -d'"' -f4)
NEW_BUILD=$(cat $VERSION_FILE | grep '"build"' | cut -d':' -f2 | tr -d ' ,')
COMMIT_MESSAGE="🔖 v$NEW_VERSION (Build $NEW_BUILD): $DESCRIPTION"

echo -e "${GREEN}📝 Commit: $COMMIT_MESSAGE${NC}"

# Git operations
git add .
git commit -m "$COMMIT_MESSAGE"
git push origin main

# 🎉 Mostrar resultado final
echo -e "\n${GREEN}🎉 ¡VERSIONADO COMPLETADO!${NC}"
echo -e "${BLUE}=======================================${NC}"
echo -e "📍 Nueva versión: $NEW_VERSION"
echo -e "🏷️  Build: $NEW_BUILD"
echo -e "💻 Repositorio: https://github.com/$GITHUB_USER/$REPO_NAME"
echo -e "🌐 URL: https://$GITHUB_USER.github.io/$REPO_NAME/"
echo -e "📝 Commit: $COMMIT_MESSAGE"
echo -e "\n${YELLOW}⏰ GitHub Pages puede tardar 1-2 minutos en actualizarse${NC}"
echo -e "${GREEN}✅ ¡Sistema de versionado automático completado!${NC}\n"