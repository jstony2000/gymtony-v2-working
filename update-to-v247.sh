#!/bin/bash

# 🚀 GYMTONY V2 - ACTUALIZACIÓN A V2.4.7 (BUILD 7)
# ===============================================
# 
# Actualiza el sistema a V2.4.7 (Build 7) y activa el versionado automático

echo "🚀 INICIANDO ACTUALIZACIÓN A V2.4.7 (BUILD 7)"
echo "=============================================="

# 📍 Definir rutas
INDEX_HTML="index.html"
BUNDLE_JS="assets/index-FnI7mOub.js"
VERSION_JSON="version.json"
TIMESTAMP=$(date +%Y%m%d_%H%M)

echo "📅 Timestamp: $TIMESTAMP"
echo "📂 Actualizando archivos..."

# 📄 1. Actualizar index.html
echo "📄 Actualizando index.html..."
sed -i 's/GymTony V2\.4\.6/GymTony V2.4.7/g' "$INDEX_HTML"
sed -i 's/v=20251110_0807/v='"$TIMESTAMP"'/g' "$INDEX_HTML"
sed -i 's/<!-- Build 7: Fix - Corrección del bucle infinito de cache clearing y título V2\.4\.6 -->/<!-- Build 7: Sistema de versionado automático - Build number sincronizado con versión patch -->/' "$INDEX_HTML"

# 💻 2. Actualizar JavaScript bundle
echo "💻 Actualizando JavaScript bundle..."
sed -i 's/GymTony V2\.4\.6 (Build 7)/GymTony V2.4.7 (Build 7)/g' "$BUNDLE_JS"

# 📊 3. Crear version.json si no existe
if [ ! -f "$VERSION_JSON" ]; then
    echo "📊 Creando version.json..."
    cat > "$VERSION_JSON" << EOF
{
  "version": "2.4.7",
  "semantic": {
    "major": 2,
    "minor": 4,
    "patch": 7
  },
  "build": 7,
  "codeName": "auto_versioning_init",
  "description": "Sistema de versionado automático - Build number sincronizado",
  "date": "$(date +%Y-%m-%d)",
  "changelog": [
    "📅 $(date +'%Y-%m-%d %H:%M:%S'): Sistema de versionado automático activado",
    "🔧 Build number ahora coincide con la versión patch",
    "🔄 Auto-increment: v2.4.6 → v2.4.7 (Build 7)"
  ]
}
EOF
else
    echo "📊 version.json ya existe, actualizando..."
    sed -i 's/"version": "2\.4\.6"/"version": "2.4.7"/' "$VERSION_JSON"
    sed -i 's/"build": 6/"build": 7/' "$VERSION_JSON"
    sed -i 's/"patch": 6/"patch": 7/' "$VERSION_JSON"
fi

echo ""
echo "✅ ACTUALIZACIÓN COMPLETADA"
echo "=========================="
echo "📍 Versión: 2.4.7"
echo "🏷️  Build: 7"
echo "📱 Título: GymTony V2.4.7 (Build 7)"
echo ""
echo "🔄 PRÓXIMAS ACTUALIZACIONES SERÁN AUTOMÁTICAS:"
echo "   v2.4.8 (Build 8) → v2.4.9 (Build 9) → v2.4.10 (Build 10)"
echo ""
echo "💡 Sistema de versionado automático activado"
echo "🌐 GitHub Pages se actualizará automáticamente en 1-2 minutos"
echo ""
echo "🎯 ¡Tu aplicación evolucionará automáticamente con cada push!"