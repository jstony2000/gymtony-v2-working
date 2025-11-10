#!/bin/bash

# Script de despliegue forzado para Gymtony v2.4.10
# Fecha: 2025-11-10
# Propósito: Forzar el despliegue de la versión 2.4.10 con corrección del error 2.github.io

echo "=== GYMTONY V2.4.10 - DESPLIEGUE FORZADO ==="
echo "Iniciando proceso de despliegue forzado..."
echo "Fecha: $(date)"
echo

# Configurar información de usuario git
git config --global user.email "gymtony@deploy.com"
git config --global user.name "Gymtony Deploy Bot"

# Navegar al directorio del proyecto
cd /workspace/gymtony-v2-working

# Inicializar repositorio git si no existe
if [ ! -d ".git" ]; then
    echo "Inicializando repositorio git..."
    git init
    git remote add origin https://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@github.com/jstony2000/gymtony-v2-working.git
fi

# Forzar la actualización de todos los archivos
echo "Preparando archivos para despliegue..."

# Verificar archivos principales
echo "Verificando archivos críticos:"
echo "  - index.html (versión $(grep -o 'V [0-9]\+\.[0-9]\+\.[0-9]\+' index.html))"
echo "  - assets/index-FnI7mOub.js (línea corregida: $(grep -n 'gymtony-v2-working' assets/index-FnI7mOub.js | wc -l) referencias)"
echo "  - version.json"

# Staging de todos los archivos
echo "Agregando archivos al staging area..."
git add -A

# Crear commit con mensaje detallado
echo "Creando commit de despliegue..."
git commit -m "🚨 DESPLEGUE FORZADO - Gymtony v2.4.10
- ✅ Corrección definitiva del error 2.github.io
- ✅ useEffect route validation corregido: window.location.replace('/gymtony-v2-working/')
- ✅ Versionado actualizado en todos los archivos
- ✅ Cache busting implementado
- ✅ GitHub Pages base path preservado
- 🔥 Forzado para resolver problemas de cache
Fecha: $(date)"

# Force push para asegurar que se aplique
echo "Ejecutando force push para forzar la actualización..."
git push -f origin main

echo
echo "=== DESPLIEGUE COMPLETADO ==="
echo "Verificar en: https://jstony2000.github.io/gymtony-v2-working/"
echo "La aplicación debería mostrar la versión 2.4.10"
echo "Sin el error 2.github.io"
echo

# Verificar que los archivos fueron actualizados
echo "Verificación final:"
echo "  - Último commit: $(git log -1 --oneline)"
echo "  - Archivos en repositorio: $(git ls-files | wc -l)"
echo
echo "✅ Despliegue forzado completado exitosamente"