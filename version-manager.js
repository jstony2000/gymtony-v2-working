#!/usr/bin/env node

/**
 * 🎯 GYMTONY V2 - SISTEMA DE VERSIONADO AUTOMÁTICO
 * 
 * Este script gestiona automáticamente las versiones de la aplicación
 * y actualiza todos los archivos relacionados.
 */

const fs = require('fs');
const path = require('path');

// 🗂️ Configuración de archivos que se actualizan automáticamente
const FILES_TO_UPDATE = {
  'manifest.json': 'name',
  'index.html': 'title',
  'assets/index-FnI7mOub.js': 'app_version', // Buscar y reemplazar en el JS minificado
  'package.json': 'version' // Si existe
};

// 🎨 Tipos de incremento disponibles
const INCREMENT_TYPES = {
  'major': 'Cambios importantes (nueva funcionalidad mayor)',
  'minor': 'Nuevas características (compatibilidad mantenida)',
  'patch': 'Correcciones de bugs (compatibilidad mantenida)',
  'build': 'Incremento de build (cambios menores)'
};

/**
 * 📊 Carga la configuración de versión actual
 */
function loadVersion() {
  try {
    const versionData = fs.readFileSync('version.json', 'utf8');
    return JSON.parse(versionData);
  } catch (error) {
    console.error('❌ Error cargando version.json:', error.message);
    return null;
  }
}

/**
 * 💾 Guarda la configuración de versión
 */
function saveVersion(versionData) {
  try {
    fs.writeFileSync('version.json', JSON.stringify(versionData, null, 2));
    return true;
  } catch (error) {
    console.error('❌ Error guardando version.json:', error.message);
    return false;
  }
}

/**
 * 🔄 Incrementa la versión según el tipo especificado
 */
function incrementVersion(currentVersion, type) {
  const [major, minor, patch] = currentVersion.semantic;
  let newVersion = { ...currentVersion };

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
      newVersion.build = currentVersion.build + 1;
      newVersion.codeName = 'build_increment';
      break;
    
    default:
      throw new Error(`Tipo de incremento no válido: ${type}`);
  }

  // 🔢 Generar nueva versión como string
  const versionString = `${newVersion.semantic.major}.${newVersion.semantic.minor}.${newVersion.semantic.patch}`;
  newVersion.version = versionString;
  
  // 📅 Actualizar fecha
  newVersion.date = new Date().toISOString().split('T')[0];
  
  return newVersion;
}

/**
 * 🌍 Actualiza todos los archivos con la nueva versión
 */
function updateFiles(newVersion) {
  const versionString = newVersion.version;
  const results = [];

  // 📄 Actualizar manifest.json
  try {
    const manifestPath = 'manifest.json';
    const manifestContent = fs.readFileSync(manifestPath, 'utf8');
    const manifest = JSON.parse(manifestContent);
    
    manifest.name = `GymTony V${versionString}`;
    manifest.version = versionString;
    
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    results.push({ file: manifestPath, status: '✅ Actualizado' });
  } catch (error) {
    results.push({ file: 'manifest.json', status: `❌ Error: ${error.message}` });
  }

  // 📄 Actualizar index.html
  try {
    const indexPath = 'index.html';
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    
    indexContent = indexContent.replace(
      /<title>GymTony V[^<]*<\/title>/,
      `<title>GymTony V${versionString}</title>`
    );
    
    indexContent = indexContent.replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="GymTony V${versionString} - Tu aplicacion de entrenamiento personalizada"`
    );
    
    fs.writeFileSync(indexPath, indexContent);
    results.push({ file: indexPath, status: '✅ Actualizado' });
  } catch (error) {
    results.push({ file: 'index.html', status: `❌ Error: ${error.message}` });
  }

  // 📄 Buscar y actualizar en JavaScript minificado (opcional)
  try {
    const jsFiles = ['assets/index-FnI7mOub.js'];
    jsFiles.forEach(jsFile => {
      if (fs.existsSync(jsFile)) {
        const jsContent = fs.readFileSync(jsFile, 'utf8');
        // Buscar versiones en el código y actualizar (si existe)
        if (jsContent.includes('2.4.') || jsContent.includes('GymTony V')) {
          // No actualizar directamente para evitar romper la funcionalidad minificada
          results.push({ file: jsFile, status: '⚠️  JavaScript minificado - No actualizado' });
        }
      }
    });
  } catch (error) {
    results.push({ file: 'assets/', status: `⚠️  JavaScript: ${error.message}` });
  }

  return results;
}

/**
 * 📝 Añadir entrada al changelog
 */
function addToChangelog(newVersion, changeDescription) {
  if (!newVersion.changelog) {
    newVersion.changelog = [];
  }
  
  const timestamp = new Date().toLocaleString('es-ES');
  newVersion.changelog.unshift(`📅 ${timestamp}: ${changeDescription}`);
  
  // Limitar a 10 entradas para mantener el archivo conciso
  if (newVersion.changelog.length > 10) {
    newVersion.changelog = newVersion.changelog.slice(0, 10);
  }
}

/**
 * 🚀 Función principal de incremento de versión
 */
function incrementVersionAndDeploy(incrementType, description) {
  console.log('🎯 GYMTONY V2 - SISTEMA DE VERSIONADO');
  console.log('=====================================\n');

  // 📊 Cargar versión actual
  const currentVersion = loadVersion();
  if (!currentVersion) {
    console.error('❌ No se pudo cargar la versión actual. Abortando...');
    process.exit(1);
  }

  console.log(`📍 Versión actual: ${currentVersion.version} (Build ${currentVersion.build})`);
  console.log(`📋 Descripción: ${currentVersion.description}\n`);

  // 🔄 Incrementar versión
  let newVersion;
  try {
    newVersion = incrementVersion(currentVersion, incrementType);
  } catch (error) {
    console.error(`❌ ${error.message}\n`);
    console.log('💡 Tipos de incremento disponibles:');
    Object.entries(INCREMENT_TYPES).forEach(([type, desc]) => {
      console.log(`   - ${type}: ${desc}`);
    });
    process.exit(1);
  }

  // 📝 Añadir descripción del cambio
  if (description) {
    addToChangelog(newVersion, description);
  } else {
    addToChangelog(newVersion, INCREMENT_TYPES[incrementType]);
  }

  // 💾 Guardar nueva versión
  if (!saveVersion(newVersion)) {
    console.error('❌ Error guardando la nueva versión. Abortando...');
    process.exit(1);
  }

  // 🌍 Actualizar archivos
  const results = updateFiles(newVersion);

  // 📊 Mostrar resumen
  console.log(`🎉 ¡Versión actualizada!`);
  console.log(`   Nueva versión: ${newVersion.version} (Build ${newVersion.build})`);
  console.log(`   Código: ${newVersion.codeName}\n`);

  console.log('📁 Archivos actualizados:');
  results.forEach(result => {
    console.log(`   ${result.status} ${result.file}`);
  });

  console.log(`\n✅ Sistema de versionado completado exitosamente.`);
  console.log(`🚀 ¡Listo para deployment!\n`);
}

// 📖 Mostrar ayuda
function showHelp() {
  console.log('🎯 GYMTONY V2 - SISTEMA DE VERSIONADO AUTOMÁTICO');
  console.log('=================================================\n');
  
  console.log('📋 Uso:');
  console.log('   node version-manager.js <tipo> [descripción]\n');
  
  console.log('🔄 Tipos de incremento:');
  Object.entries(INCREMENT_TYPES).forEach(([type, desc]) => {
    console.log(`   ${type.padEnd(8)} - ${desc}`);
  });
  
  console.log('\n📝 Ejemplos:');
  console.log('   node version-manager.js minor "Nuevas funciones de backup"');
  console.log('   node version-manager.js patch "Corrección de navegación"');
  console.log('   node version-manager.js build "Optimización de rendimiento"');
  
  console.log('\n📊 Versión actual:');
  const current = loadVersion();
  if (current) {
    console.log(`   ${current.version} (Build ${current.build})`);
    console.log(`   ${current.description}`);
  }
  
  console.log('\n💡 Tip: Ejecuta sin argumentos para ver la versión actual');
}

// 🚦 Función principal
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    // 🎯 Mostrar versión actual
    const current = loadVersion();
    if (current) {
      console.log('📍 Versión actual de GymTony V2:');
      console.log(`   Versión: ${current.version}`);
      console.log(`   Build: ${current.build}`);
      console.log(`   Código: ${current.codeName}`);
      console.log(`   Fecha: ${current.date}`);
      console.log(`   Descripción: ${current.description}`);
      if (current.changelog && current.changelog.length > 0) {
        console.log('\n📋 Últimos cambios:');
        current.changelog.slice(0, 3).forEach((change, index) => {
          console.log(`   ${index + 1}. ${change}`);
        });
      }
    } else {
      console.log('❌ No se pudo cargar la versión actual');
    }
    return;
  }
  
  if (args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    showHelp();
    return;
  }
  
  const incrementType = args[0];
  const description = args.slice(1).join(' ');
  
  if (!INCREMENT_TYPES[incrementType]) {
    console.error(`❌ Tipo de incremento no válido: ${incrementType}`);
    showHelp();
    process.exit(1);
  }
  
  incrementVersionAndDeploy(incrementType, description);
}

// 🎯 Ejecutar
if (require.main === module) {
  main();
}

module.exports = {
  loadVersion,
  incrementVersion,
  updateFiles,
  addToChangelog
};