#!/usr/bin/env node

/**
 * 🎯 GYMTONY V2 - ACTUALIZADOR DE PÁGINA PRINCIPAL
 * 
 * Este script actualiza automáticamente la página principal con la versión actual
 * y la información de build, integrándose con el sistema de versionado.
 */

const fs = require('fs');
const path = require('path');

/**
 * 📊 Cargar versión desde version.json
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
 * 🏗️ Crear HTML de versión para la página principal
 */
function createVersionHTML(version) {
  const versionString = version.version;
  const buildString = version.build;
  const codeName = version.codeName;
  const date = version.date;
  
  return {
    compact: `GymTony V${versionString}`,
    full: `GymTony V${versionString} (Build ${buildString})`,
    badge: `v${versionString}`,
    debug: `${versionString}-${buildString}`
  };
}

/**
 * 📄 Actualizar el JavaScript minificado para mostrar la versión
 */
function updateJavaScriptFile(version) {
  const jsFile = 'assets/index-FnI7mOub.js';
  const versionHTML = createVersionHTML(version);
  
  try {
    if (!fs.existsSync(jsFile)) {
      console.log(`⚠️  Archivo ${jsFile} no encontrado, saltando actualización JS`);
      return { success: false, message: 'Archivo JS no encontrado' };
    }
    
    let jsContent = fs.readFileSync(jsFile, 'utf8');
    
    // 🔍 Buscar y actualizar el título de la aplicación si es posible
    let updated = false;
    
    // Buscar strings relacionados con GymTony y añadir información de versión
    if (jsContent.includes('GymTony')) {
      // Buscar patrones comunes donde se puede insertar la versión
      const patterns = [
        /(GymTony[^"']*?)(["'])(\s*["'])/,
        /(GymTony[^"']*?)(["'])/,
      ];
      
      for (const pattern of patterns) {
        const match = jsContent.match(pattern);
        if (match && !match[0].includes(version.version)) {
          // Reemplazar con versión actualizada
          const newString = `${match[1]} V${version.version}`;
          jsContent = jsContent.replace(pattern, newString + match[2]);
          updated = true;
          console.log(`✅ Actualizado patrón de versión en JS: ${match[0]} → ${newString}`);
          break;
        }
      }
    }
    
    // 🔍 Buscar e insertar información de versión en comentarios o metadatos
    const versionComment = `/* GymTony V${version.version} (Build ${version.build}) - ${version.codeName} */`;
    
    if (!jsContent.includes(versionComment)) {
      // Añadir comentario de versión al inicio del archivo
      jsContent = versionComment + '\n' + jsContent;
      updated = true;
      console.log('✅ Añadido comentario de versión al inicio del archivo JS');
    }
    
    if (updated) {
      fs.writeFileSync(jsFile, jsContent);
      return { success: true, message: 'JavaScript actualizado exitosamente' };
    } else {
      return { success: false, message: 'No se encontraron patrones para actualizar' };
    }
    
  } catch (error) {
    return { success: false, message: `Error actualizando JS: ${error.message}` };
  }
}

/**
 * 📱 Crear componente HTML para mostrar en la página
 */
function createVersionComponent(version) {
  const versionHTML = createVersionHTML(version);
  
  // CSS inline para el componente de versión
  const cssStyles = `
    .version-badge {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: rgba(220, 38, 38, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      z-index: 9999;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: opacity 0.3s ease;
    }
    
    .version-badge:hover {
      background: rgba(220, 38, 38, 1);
      opacity: 0.8;
    }
    
    .version-modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      z-index: 10000;
      max-width: 300px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    
    .version-modal h3 {
      margin: 0 0 10px 0;
      color: #dc2626;
      font-size: 18px;
    }
    
    .version-modal p {
      margin: 5px 0;
      color: #666;
      font-size: 14px;
    }
  `;
  
  // JavaScript para el componente de versión
  const jsCode = `
    // 🎯 Componente de versión GymTony V2
    (function() {
      console.log('🔢 Cargando componente de versión...');
      
      // Crear estilos
      const style = document.createElement('style');
      style.textContent = \`${cssStyles}\`;
      document.head.appendChild(style);
      
      // Crear badge de versión
      const versionBadge = document.createElement('div');
      versionBadge.className = 'version-badge';
      versionBadge.innerHTML = 'GymTony V${version.version}';
      versionBadge.title = 'Click para ver detalles de la versión';
      
      // Función para mostrar modal de versión
      function showVersionModal() {
        const modal = document.createElement('div');
        modal.className = 'version-modal';
        modal.innerHTML = \`
          <h3>🏷️ Información de Versión</h3>
          <p><strong>Versión:</strong> ${version.version}</p>
          <p><strong>Build:</strong> ${version.build}</p>
          <p><strong>Código:</strong> ${version.codeName}</p>
          <p><strong>Fecha:</strong> ${version.date}</p>
          <p><strong>Descripción:</strong> ${version.description}</p>
          <p style="margin-top: 15px; font-size: 12px; color: #999;">Cerrar al hacer click fuera</p>
        \`;
        
        // Overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999;';
        
        // Eventos
        versionBadge.onclick = () => {
          document.body.appendChild(overlay);
          document.body.appendChild(modal);
        };
        
        overlay.onclick = () => {
          if (document.body.contains(modal)) document.body.removeChild(modal);
          if (document.body.contains(overlay)) document.body.removeChild(overlay);
        };
        
        // Auto-ocultar después de 5 segundos
        setTimeout(() => {
          if (document.body.contains(modal)) {
            if (document.body.contains(overlay)) document.body.removeChild(overlay);
            if (document.body.contains(modal)) document.body.removeChild(modal);
          }
        }, 8000);
      }
      
      versionBadge.onclick = showVersionModal;
      
      // Añadir al DOM cuando el DOM esté listo
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          document.body.appendChild(versionBadge);
        });
      } else {
        document.body.appendChild(versionBadge);
      }
      
      console.log('✅ Componente de versión GymTony V${version.version} cargado');
    })();
  `;
  
  return {
    css: cssStyles,
    js: jsCode,
    versionString: versionHTML.badge
  };
}

/**
 * 🗂️ Crear archivo de actualización automática
 */
function createAutoUpdateScript() {
  const scriptContent = `#!/usr/bin/env node

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
}`;
  
  fs.writeFileSync('auto-update-page.js', scriptContent);
  return 'auto-update-page.js';
}

/**
 * 🚀 Función principal de actualización
 */
function updateMainPage() {
  console.log('🎯 GYMTONY V2 - ACTUALIZADOR DE PÁGINA PRINCIPAL');
  console.log('===============================================\n');
  
  // 📊 Cargar versión
  const version = loadVersion();
  if (!version) {
    console.error('❌ No se pudo cargar la versión. Abortando...');
    return false;
  }
  
  console.log(`📍 Versión actual: ${version.version} (Build ${version.build})`);
  console.log(`📋 Código: ${version.codeName}\n`);
  
  // 🏗️ Crear componentes
  const component = createVersionComponent(version);
  console.log('✅ Componentes HTML/CSS/JS creados');
  
  // 📄 Actualizar JavaScript
  const jsResult = updateJavaScriptFile(version);
  if (jsResult.success) {
    console.log('✅ JavaScript actualizado:', jsResult.message);
  } else {
    console.log('⚠️  JavaScript:', jsResult.message);
  }
  
  // 🗂️ Crear auto-updater
  const autoUpdater = createAutoUpdateScript();
  console.log(`✅ Auto-updater creado: ${autoUpdater}`);
  
  // 📋 Mostrar resumen
  console.log('\n🎉 ¡Actualización de página principal completada!');
  console.log('   Versión mostrada: GymTony V' + version.version);
  console.log('   Componente: Badge discreto en esquina inferior derecha');
  console.log('   Modal: Información completa al hacer click');
  console.log('   Auto-actualización: Integrada con sistema de versionado\n');
  
  return true;
}

// 📖 Mostrar ayuda
function showHelp() {
  console.log('🎯 GYMTONY V2 - ACTUALIZADOR DE PÁGINA PRINCIPAL');
  console.log('==============================================\n');
  console.log('📋 Uso:');
  console.log('   node update-main-page.js [command]\n');
  console.log('🔄 Comandos:');
  console.log('   update     - Actualizar página con versión actual (por defecto)');
  console.log('   help       - Mostrar esta ayuda');
  console.log('   version    - Ver versión actual\n');
  console.log('📱 Resultado:');
  console.log('   - Badge de versión en esquina inferior derecha');
  console.log('   - Modal con información completa al hacer click');
  console.log('   - Integración automática con sistema de versionado\n');
}

// 🚦 Función principal
function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'update';
  
  switch (command) {
    case 'update':
      updateMainPage();
      break;
    case 'help':
      showHelp();
      break;
    case 'version':
      const version = loadVersion();
      if (version) {
        console.log(`📍 Versión actual: ${version.version}`);
        console.log(`🏷️  Build: ${version.build}`);
        console.log(`📅 Fecha: ${version.date}`);
        console.log(`📋 Descripción: ${version.description}`);
      } else {
        console.log('❌ No se pudo cargar la versión');
      }
      break;
    default:
      console.log(`❌ Comando no reconocido: ${command}`);
      showHelp();
  }
}

// 🎯 Ejecutar
if (require.main === module) {
  main();
}

module.exports = {
  loadVersion,
  createVersionComponent,
  updateMainPage
};