#!/usr/bin/env node

/**
 * 🎯 GYMTONY V2 - DEMOSTRACIÓN DEL SISTEMA DE VERSIONADO
 * 
 * Este script demuestra cómo funciona el sistema completo:
 * - Versionado automático
 * - Actualización de página principal 
 * - Visualización de versión en la app
 */

const fs = require('fs');
const { execSync } = require('child_process');

/**
 * 🎮 Demostración interactiva
 */
function demoVersioning() {
  console.log('🎯 GYMTONY V2 - DEMOSTRACIÓN DEL SISTEMA DE VERSIONADO');
  console.log('====================================================\n');
  
  // 📊 Mostrar versión actual
  const currentVersion = JSON.parse(fs.readFileSync('version.json', 'utf8'));
  console.log(`📍 Versión actual: ${currentVersion.version} (Build ${currentVersion.build})`);
  console.log(`📋 Descripción: ${currentVersion.description}\n`);
  
  // 🛠️ Mostrar archivos del sistema
  console.log('🗂️ Archivos del sistema:');
  const systemFiles = [
    'version.json',
    'version-manager.js', 
    'update-main-page.js',
    'increment-version.sh',
    'version-display.html'
  ];
  
  systemFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`   ✅ ${file}`);
    } else {
      console.log(`   ❌ ${file} (no encontrado)`);
    }
  });
  
  console.log('\n🚀 ¿Qué hace el sistema?');
  console.log('1. 🔢 Incrementa versión automáticamente');
  console.log('2. 📄 Actualiza manifest.json, index.html, etc.');
  console.log('3. 📱 Actualiza página principal con nueva versión');
  console.log('4. 🏷️  Muestra badge de versión en la app');
  console.log('5. 💬 Modal con información al hacer click');
  console.log('6. 📊 Mantiene historial de cambios');
  console.log('7. 🚀 Deploy automático a GitHub Pages\n');
  
  // 📱 Componentes de la página principal
  console.log('📱 Componentes en la página principal:');
  console.log('   • Badge discreto en esquina inferior derecha');
  console.log('   • Click para ver información completa');
  console.log('   • Auto-ocultado después de 10 segundos');
  console.log('   • Integrado con sistema de versionado\n');
  
  // 🎯 Ejemplos de uso
  console.log('🎯 Ejemplos de uso:');
  console.log('   # Corrección de bug (más común)');
  console.log('   ./increment-version.sh patch "Corrección de navegación"');
  console.log('   # Nueva funcionalidad');
  console.log('   ./increment-version.sh minor "Sistema de backup mejorado"');
  console.log('   # Optimización');
  console.log('   ./increment-version.sh build "Rendimiento mejorado"\n');
  
  // 🔧 Ver sistema actual
  console.log('🔧 Estado del sistema:');
  const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
  console.log(`   📦 Manifest: ${manifest.name}`);
  console.log(`   🌐 App URL: https://jstony2000.github.io/gymtony-v2-working/`);
  
  // Verificar si ya hay componente en index.html
  if (fs.existsSync('index.html')) {
    const indexContent = fs.readFileSync('index.html', 'utf8');
    if (indexContent.includes('GymTony V')) {
      console.log('   ✅ Componente de versión ya integrado');
    } else {
      console.log('   ⚠️  Componente de versión no encontrado en index.html');
    }
  }
  
  console.log('\n🎉 ¡Sistema de versionado completamente operativo!');
  console.log('   Cada vez que ejecutes un script de incremento:');
  console.log('   1. Se incrementa la versión');
  console.log('   2. Se actualizan todos los archivos');
  console.log('   3. Se actualiza la página principal');
  console.log('   4. Los usuarios ven la nueva versión en la app\n');
}

/**
 * 🧪 Prueba del incremento de versión
 */
function testVersionIncrement() {
  console.log('\n🧪 ¿Quieres probar el sistema?');
  console.log('Esto incrementará la versión y actualizará la página principal.\n');
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('¿Continuar con incremento de versión? (s/n): ', (answer) => {
    if (answer.toLowerCase() === 's' || answer.toLowerCase() === 'si' || answer.toLowerCase() === 'y') {
      console.log('\n🚀 Ejecutando incremento de versión...');
      
      try {
        // Simular incremento (sin hacer commit real)
        const currentVersion = JSON.parse(fs.readFileSync('version.json', 'utf8'));
        const newVersion = { ...currentVersion };
        newVersion.semantic.patch += 1;
        newVersion.version = `${newVersion.semantic.major}.${newVersion.semantic.minor}.${newVersion.semantic.patch}`;
        newVersion.build = 1;
        newVersion.codeName = 'demo_increment';
        newVersion.date = new Date().toISOString().split('T')[0];
        
        // Actualizar página principal
        const updateResult = require('./update-main-page.js');
        updateResult.updateMainPage();
        
        // Actualizar con nueva versión
        newVersion.changelog = newVersion.changelog || [];
        const timestamp = new Date().toLocaleString('es-ES');
        newVersion.changelog.unshift(`🧪 ${timestamp}: Demostración del sistema de versionado`);
        
        fs.writeFileSync('version.json', JSON.stringify(newVersion, null, 2));
        
        console.log(`\n✅ ¡Incremento de prueba completado!`);
        console.log(`   Nueva versión: ${newVersion.version} (Build ${newVersion.build})`);
        console.log(`   Componente de versión actualizado en la página principal`);
        console.log(`\n🎯 Para hacer el cambio permanente, ejecuta:`);
        console.log(`   git add . && git commit -m "🔖 v${newVersion.version}: ${newVersion.description}" && git push origin master`);
        
      } catch (error) {
        console.error('❌ Error en la prueba:', error.message);
      }
    } else {
      console.log('🤔 Prueba cancelada. El sistema está listo para usar.');
    }
    
    readline.close();
  });
}

// 🎯 Función principal
function main() {
  const args = process.argv.slice(2);
  
  if (args[0] === 'test') {
    testVersionIncrement();
  } else {
    demoVersioning();
  }
}

// Ejecutar
if (require.main === module) {
  main();
}

module.exports = {
  demoVersioning,
  testVersionIncrement
};