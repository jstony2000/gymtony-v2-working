#!/bin/bash

echo "🚀 Deployment v2.4.10 - Corrección Error 2.github.io"
echo "================================================="

# Configuración
REPO_URL="https://github.com/jstony2000/gymtony-v2-working.git"
BRANCH="main"
COMMIT_MESSAGE="🚀 v2.4.10: Error 2.github.io corregido - Redirección automática corregida para GitHub Pages

✅ PROBLEMA CORREGIDO:
- Error HTTP 404 '2.github.io' eliminado
- useEffect problemático actualizado: window.location.replace('/') → window.location.replace('/gymtony-v2-working/')
- Corrección específica para el manejo de base path en GitHub Pages
- Las redirecciones automáticas ahora respetan el dominio completo

📋 CAMBIOS:
- assets/index-FnI7mOub.js: Línea de redirección corregida
- index.html: Versión actualizada a 2.4.10
- version.json: Documentación de la corrección
- CORRECCION_2_GITHUBIO_V2_4_10.md: Documentación completa

🔧 DETALLES TÉCNICOS:
- Versión: 2.4.10 (Build 10)
- Fecha: 2025-11-10 09:50:00
- Error corregido: HTTP 404 '2.github.io'
- Cambio crítico: Preservar base path en GitHub Pages"

# Ir al directorio
cd /workspace/gymtony-v2-working

# Verificar estado git
echo "📊 Verificando estado del repositorio..."
git status

# Configurar git si no está configurado
git config --global user.email "agent@minimax.com"
git config --global user.name "MiniMax Agent"

# Agregar todos los archivos
echo "📁 Agregando archivos al commit..."
git add .

# Hacer commit
echo "💾 Haciendo commit..."
git commit -m "$COMMIT_MESSAGE"

# Push al repositorio
echo "🔄 Haciendo push al repositorio..."
git push origin $BRANCH

echo "✅ Deployment completado exitosamente!"
echo "🌐 La aplicación estará disponible en: https://jstony2000.github.io/gymtony-v2-working/"
echo "🔍 Verificar que el error '2.github.io' ya no aparece"

# Mostrar la última línea del changelog para confirmación
echo ""
echo "📋 Última entrada del changelog:"
tail -1 version.json | grep -o '"[^"]*":' | head -1