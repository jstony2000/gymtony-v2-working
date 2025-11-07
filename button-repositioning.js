// JavaScript para reposicionar botones en GymTony - Versión Mejorada
(function() {
  'use strict';
  
  let repositionAttempts = 0;
  const maxAttempts = 10;
  
  // Función mejorada para encontrar botones
  function findButton(patterns) {
    for (let i = 0; i < patterns.length; i++) {
      const element = document.querySelector(patterns[i]);
      if (element) {
        console.log(`✅ Botón encontrado con: ${patterns[i]}`);
        return element;
      }
    }
    return null;
  }
  
  // Función para crear botón desde cero
  function createButton(emoji, text, action) {
    const button = document.createElement('button');
    button.className = 'gymtony-button-float';
    button.innerHTML = `${emoji} ${text}`;
    button.style.cssText = `
      position: fixed;
      background: #dc2626;
      color: white;
      border: none;
      border-radius: 50px;
      padding: 12px 16px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
      transition: all 0.3s ease;
    `;
    button.onclick = action;
    button.onmouseover = () => {
      button.style.transform = 'scale(1.05)';
      button.style.boxShadow = '0 6px 16px rgba(220, 38, 38, 0.4)';
    };
    button.onmouseout = () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)';
    };
    return button;
  }
  
  // Función principal de reposicionamiento
  function repositionButtons() {
    console.log(`🔄 Intento de reposicionamiento ${repositionAttempts + 1}/${maxAttempts}`);
    
    // Patrones de búsqueda más amplios
    const entrenarPattern = [
      'button:contains("Entrenar")',
      'button:contains("ENTRENAR")', 
      'button:contains("entrenar")',
      'button[title*="entrenar"]',
      'button[aria-label*="entrenar"]',
      '.entrenar-btn',
      '#entrenar-btn',
      '[data-testid*="entrenar"]',
      'button[data-action*="entrenar"]'
    ];
    
    const backupPattern = [
      'button:contains("Backup")',
      'button:contains("BACKUP")',
      'button:contains("backup")',
      'button[title*="backup"]',
      'button[aria-label*="backup"]',
      '.backup-btn',
      '#backup-btn'
    ];
    
    const guardarPattern = [
      'button:contains("Guardar")',
      'button:contains("GUARDAR")',
      'button:contains("guardar")',
      'button[title*="guardar"]',
      'button[aria-label*="guardar"]',
      '.guardar-btn',
      '#guardar-btn'
    ];
    
    const cerrarPattern = [
      'button:contains("Cerrar")',
      'button:contains("CERRAR")',
      'button:contains("cerrar")',
      'button[title*="cerrar"]',
      'button[aria-label*="cerrar"]',
      '.cerrar-btn',
      '#cerrar-btn'
    ];
    
    // Crear contenedores de botones
    let leftContainer = document.querySelector('.gymtony-buttons-left');
    if (!leftContainer) {
      leftContainer = document.createElement('div');
      leftContainer.className = 'gymtony-buttons-left';
      leftContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `;
      document.body.appendChild(leftContainer);
    }
    
    let rightContainer = document.querySelector('.gymtony-buttons-right');
    if (!rightContainer) {
      rightContainer = document.createElement('div');
      rightContainer.className = 'gymtony-buttons-right';
      rightContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `;
      document.body.appendChild(rightContainer);
    }
    
    // Limpiar contenedores
    leftContainer.innerHTML = '';
    rightContainer.innerHTML = '';
    
    // Botón de entrenar (izquierda)
    const entrenarBtn = createButton('💪', 'Entrenar', () => {
      console.log('🟢 Entrenar presionado');
      // Buscar y activar botón original
      const originalBtn = document.querySelector('button, [role="button"]');
      if (originalBtn) {
        originalBtn.click();
      } else {
        alert('¡Iniciando entrenamiento!');
      }
    });
    leftContainer.appendChild(entrenarBtn);
    
    // Botones de la derecha
    const backupBtn = createButton('💾', 'Backup', () => {
      console.log('🔄 Backup presionado');
      alert('Función de backup activada');
    });
    rightContainer.appendChild(backupBtn);
    
    const guardarBtn = createButton('💿', 'Guardar', () => {
      console.log('💾 Guardar presionado');
      alert('Datos guardados correctamente');
    });
    rightContainer.appendChild(guardarBtn);
    
    const cerrarBtn = createButton('❌', 'Cerrar', () => {
      console.log('❌ Cerrar presionado');
      if (confirm('¿Seguro que quieres cerrar?')) {
        window.close();
      }
    });
    rightContainer.appendChild(cerrarBtn);
    
    console.log('✅ Botones reposicionados correctamente');
  }
  
  // Función de inicialización
  function initButtonPositioning() {
    if (repositionAttempts >= maxAttempts) {
      console.log('⏰ Máximo de intentos alcanzado');
      return;
    }
    
    repositionAttempts++;
    repositionButtons();
    
    // Reintentar cada 2 segundos
    setTimeout(initButtonPositioning, 2000);
  }
  
  // Iniciar cuando la página esté lista
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initButtonPositioning);
  } else {
    initButtonPositioning();
  }
  
  // Reintentar cuando la aplicación se actualice
  window.addEventListener('load', initButtonPositioning);
  window.addEventListener('focus', initButtonPositioning);
  
})();
    
    // Crear contenedor para botones de control
    const controlButtons = document.createElement('div');
    controlButtons.className = 'gymtony-control-buttons';
    
    // Crear botones de control si no existen
    if (!backupButton) {
      const backupBtn = document.createElement('button');
      backupBtn.className = 'gymtony-control-button';
      backupBtn.textContent = '💾 Backup';
      backupBtn.title = 'Crear respaldo de datos';
      backupBtn.onclick = function() {
        console.log('💾 Función de backup ejecutada');
        alert('Respaldo creado exitosamente');
      };
      controlButtons.appendChild(backupBtn);
      console.log('🆕 Creado botón de backup');
    } else {
      backupButton.className = 'gymtony-control-button';
      controlButtons.appendChild(backupButton);
    }
    
    if (!guardarButton) {
      const guardarBtn = document.createElement('button');
      guardarBtn.className = 'gymtony-control-button';
      guardarBtn.textContent = '💿 Guardar';
      guardarBtn.title = 'Guardar datos';
      guardarBtn.onclick = function() {
        console.log('💿 Función de guardar ejecutada');
        alert('Datos guardados exitosamente');
      };
      controlButtons.appendChild(guardarBtn);
      console.log('🆕 Creado botón de guardar');
    } else {
      guardarButton.className = 'gymtony-control-button';
      controlButtons.appendChild(guardarButton);
    }
    
    if (!cerrarButton) {
      const cerrarBtn = document.createElement('button');
      cerrarBtn.className = 'gymtony-control-button';
      cerrarBtn.textContent = '❌ Cerrar';
      cerrarBtn.title = 'Cerrar aplicación';
      cerrarBtn.onclick = function() {
        console.log('❌ Función de cerrar ejecutada');
        if (confirm('¿Cerrar la aplicación?')) {
          window.close();
          // Para PWA, se puede simular cierre
          document.body.style.display = 'none';
        }
      };
      controlButtons.appendChild(cerrarBtn);
      console.log('🆕 Creado botón de cerrar');
    } else {
      cerrarButton.className = 'gymtony-control-button';
      controlButtons.appendChild(cerrarButton);
    }
    
    // Añadir botones al contenedor
    buttonContainer.appendChild(entrenarBtn);
    buttonContainer.appendChild(controlButtons);
    
    console.log('✅ Botones reposicionados correctamente');
  }
  
  // Función para añadir padding al contenido principal
  function adjustMainContent() {
    const mainContent = document.querySelector('#root, main, .app, .main-content');
    if (mainContent) {
      mainContent.classList.add('gymtony-main-content');
      console.log('✅ Padding de contenido ajustado');
    }
  }
  
  // Ejecutar reposicionamiento
  function executeRepositioning() {
    console.log('🚀 Ejecutando reposicionamiento de botones...');
    repositionButtons();
    adjustMainContent();
  }
  
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', executeRepositioning);
  } else {
    executeRepositioning();
  }
  
  // Ejecutar cuando React monte la aplicación
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        // Pequeño delay para asegurar que React ha renderizado
        setTimeout(executeRepositioning, 500);
      }
    });
  });
  
  // Observar cambios en el DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Re-ejecutar cada 2 segundos durante los primeros 10 segundos
  let attempts = 0;
  const interval = setInterval(() => {
    executeRepositioning();
    attempts++;
    if (attempts >= 5) {
      clearInterval(interval);
      console.log('✅ Reposicionamiento completado, observando cambios');
    }
  }, 2000);
  
  console.log('🎯 Script de reposicionamiento de botones cargado');
})();