// JavaScript para aplicar tema rojo inmediatamente
(function() {
  'use strict';
  
  // Aplicar tema rojo inmediatamente
  function applyRedTheme() {
    // Cambiar color de la barra de estado del navegador
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', '#dc2626');
    }
    
    // Aplicar clase de tema rojo al body
    document.body.classList.add('gymtony-red-theme');
    
    // Crear variables CSS para el tema rojo
    const style = document.createElement('style');
    style.textContent = `
      .gymtony-red-theme {
        --primary-red: #dc2626;
        --secondary-red: #b91c1c;
        --light-red: #f87171;
        background: linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%);
        color: white;
      }
      
      /* Aplicar tema a elementos React */
      #root {
        background: linear-gradient(135deg, var(--primary-red) 0%, var(--secondary-red) 100%) !important;
        color: white !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Aplicar tema cuando la página carga
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyRedTheme);
  } else {
    applyRedTheme();
  }
  
  // Manejar cuando la app se instala como PWA
  window.addEventListener('beforeinstallprompt', function(e) {
    // Asegurar tema rojo antes de la instalación
    applyRedTheme();
  });
  
  // Aplicar tema cuando la app se instala
  window.addEventListener('appinstalled', function(e) {
    applyRedTheme();
  });
  
  // Aplicar tema en dispositivos móviles
  if ('ontouchstart' in window) {
    applyRedTheme();
  }
  
  console.log('🎨 Tema rojo aplicado a GymTony PWA');
})();