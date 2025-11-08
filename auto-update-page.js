#!/usr/bin/env node

// 🎯 Auto-updater para la página principal
const fs = require('fs');

// Ejecutar actualización automáticamente
console.log('🔄 Auto-actualizando página principal con versión...');

try {
  const versionData = JSON.parse(fs.readFileSync('version.json', 'utf8'));
  console.log('📍 Versión actual:', versionData.version);
  
  // El script principal se ejecuta desde update-main-page.js
  // Este es un wrapper para facilitar la integración
  console.log('✅ Auto-actualización completada');
} catch (error) {
  console.error('❌ Error en auto-actualización:', error.message);
  process.exit(1);
}