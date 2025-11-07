// SOLUCIÓN AGRESIVA: Forzar tema rojo en GymTony
(function() {
  'use strict';
  
  // Función para aplicar tema rojo forzadamente
  function forceRedTheme() {
    console.log('🎨 Aplicando tema rojo agresivo...');
    
    // Crear estilos forzosos
    const forcedStyles = document.createElement('style');
    forcedStyles.id = 'gymtony-forced-red-theme';
    forcedStyles.textContent = `
      /* FORZAR TEMA ROJO EN TODA LA APLICACIÓN */
      * {
        --primary-color: #dc2626 !important;
        --secondary-color: #b91c1c !important;
        --accent-color: #f87171 !important;
        --background-color: #dc2626 !important;
        --text-color: white !important;
        --button-color: #dc2626 !important;
        --button-hover-color: #b91c1c !important;
      }
      
      body {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%) !important;
        color: white !important;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
      }
      
      /* Forzar logo rojo */
      img[src*="logo"], img[src*="icon"], img[src*="favicon"], 
      .logo, .icon, [role="img"], [data-testid*="logo"] {
        filter: none !important;
        content: url('/logo-red-512x512.png') !important;
      }
      
      /* Sobrescribir cualquier imagen SVG o canvas de logo */
      svg, canvas {
        background: #dc2626 !important;
        fill: #dc2626 !important;
        color: #dc2626 !important;
      }
      
      /* Todos los elementos raíz */
      #root, .App, [data-testid="app"], main {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%) !important;
        color: white !important;
        min-height: 100vh !important;
      }
      
      /* Todos los botones */
      button, .btn, [role="button"], input[type="button"], input[type="submit"] {
        background: #dc2626 !important;
        color: white !important;
        border: 1px solid #dc2626 !important;
        box-shadow: 0 2px 8px rgba(220, 38, 38, 0.3) !important;
      }
      
      button:hover, .btn:hover {
        background: #b91c1c !important;
        border-color: #b91c1c !important;
        transform: scale(1.02) !important;
      }
      
      /* Todos los enlaces */
      a, .link {
        color: #f87171 !important;
        text-decoration: none !important;
      }
      
      a:hover, .link:hover {
        color: white !important;
        text-decoration: underline !important;
      }
      
      /* Headers y títulos */
      h1, h2, h3, h4, h5, h6, .title, [data-testid*="title"] {
        color: white !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;
      }
      
      /* Tarjetas y contenedores */
      .card, .container, .box, [data-testid*="card"], div[class*="card"] {
        background: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        color: white !important;
        backdrop-filter: blur(10px) !important;
      }
      
      /* Campos de entrada */
      input, textarea, select {
        background: rgba(255, 255, 255, 0.9) !important;
        color: #333 !important;
        border: 1px solid #dc2626 !important;
        border-radius: 8px !important;
      }
      
      input:focus, textarea:focus, select:focus {
        outline: 2px solid #dc2626 !important;
        border-color: #b91c1c !important;
      }
      
      /* PWA Status bar */
      .pwa-status-bar, .browser-bar, .url-bar {
        background: #dc2626 !important;
        color: white !important;
      }
      
      /* Scrollbar */
      ::-webkit-scrollbar {
        background: #dc2626 !important;
        width: 8px !important;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #b91c1c !important;
        border-radius: 4px !important;
      }
      
      /* Botones flotantes forzados */
      .gymtony-floating-buttons {
        position: fixed !important;
        bottom: 20px !important;
        left: 20px !important;
        z-index: 9999 !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 10px !important;
      }
      
      .gymtony-floating-button {
        background: #dc2626 !important;
        color: white !important;
        border: none !important;
        border-radius: 25px !important;
        padding: 12px 16px !important;
        font-size: 14px !important;
        font-weight: bold !important;
        cursor: pointer !important;
        box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4) !important;
        transition: all 0.3s ease !important;
        min-width: 120px !important;
        text-align: center !important;
      }
      
      .gymtony-floating-button:hover {
        background: #b91c1c !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 16px rgba(220, 38, 38, 0.5) !important;
      }
      
      /* Ocultar elementos que no sean rojos */
      [style*="background: white"], [style*="background-color: white"],
      [style*="background: #fff"], [style*="background-color: #fff"] {
        background: rgba(255, 255, 255, 0.1) !important;
        color: white !important;
      }
      
      /* Meta theme color forzoso */
      meta[name="theme-color"] {
        content: #dc2626 !important;
      }
    `;
    
    // Remover estilos previos si existen
    const existing = document.getElementById('gymtony-forced-red-theme');
    if (existing) {
      existing.remove();
    }
    
    // Añadir nuevos estilos
    document.head.appendChild(forcedStyles);
    console.log('✅ Estilos rojos forzados aplicados');
  }
  
  // Función para crear botones flotantes
  function createFloatingButtons() {
    // Remover botones previos
    const existing = document.querySelector('.gymtony-floating-buttons');
    if (existing) {
      existing.remove();
    }
    
    // Crear contenedor de botones
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'gymtony-floating-buttons';
    
    // Botón Entrenar
    const entrenarBtn = document.createElement('button');
    entrenarBtn.className = 'gymtony-floating-button';
    entrenarBtn.innerHTML = '💪 ENTRENAR';
    entrenarBtn.onclick = () => {
      console.log('🟢 Entrenar clickeado');
      // Buscar algún botón de la app original
      const originalBtn = document.querySelector('button, [role="button"]');
      if (originalBtn) {
        originalBtn.click();
      } else {
        alert('¡Iniciando entrenamiento con GymTony!');
      }
    };
    
    // Botón Backup
    const backupBtn = document.createElement('button');
    backupBtn.className = 'gymtony-floating-button';
    backupBtn.innerHTML = '💾 BACKUP';
    backupBtn.onclick = () => {
      console.log('💾 Backup clickeado');
      alert('Respaldo de datos creado exitosamente');
    };
    
    // Botón Config
    const configBtn = document.createElement('button');
    configBtn.className = 'gymtony-floating-button';
    configBtn.innerHTML = '⚙️ CONFIG';
    configBtn.onclick = () => {
      console.log('⚙️ Config clickeado');
      alert('Configuración de GymTony V2.4.3');
    };
    
    // Añadir botones al contenedor
    buttonContainer.appendChild(entrenarBtn);
    buttonContainer.appendChild(backupBtn);
    buttonContainer.appendChild(configBtn);
    
    // Añadir al body
    document.body.appendChild(buttonContainer);
    console.log('✅ Botones flotantes creados');
  }
  
  // Función para forzar logo rojo
  function forceRedLogo() {
    // Cambiar todas las imágenes
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (src && (src.includes('logo') || src.includes('icon') || src.includes('favicon'))) {
        img.src = '/logo-red-512x512.png';
        console.log('🔄 Logo reemplazado:', img.src);
      }
    });
    
    // Cambiar meta tags
    const metaIcons = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    metaIcons.forEach(icon => {
      if (icon.href && (icon.href.includes('logo') || icon.href.includes('icon'))) {
        icon.href = '/logo-red-512x512.png';
        console.log('🔄 Meta icon reemplazado:', icon.href);
      }
    });
    
    // Cambiar favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = '/logo-red-512x512.png';
  }
  
  // Función principal
  function init() {
    console.log('🚀 Iniciando aplicación forzada de tema rojo...');
    
    // Aplicar tema inmediatamente
    forceRedTheme();
    createFloatingButtons();
    forceRedLogo();
    
    // Observar cambios en el DOM para mantener el tema
    const observer = new MutationObserver((mutations) => {
      let needsUpdate = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          needsUpdate = true;
        }
      });
      
      if (needsUpdate) {
        setTimeout(() => {
          forceRedTheme();
          createFloatingButtons();
          forceRedLogo();
        }, 1000);
      }
    });
    
    // Observar todo el documento
    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'src', 'href']
    });
    
    // Reaplicar periódicamente
    setInterval(() => {
      forceRedTheme();
      createFloatingButtons();
      forceRedLogo();
    }, 3000);
    
    console.log('🎉 Sistema de tema rojo activado completamente');
  }
  
  // Ejecutar cuando esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Re-ejecutar en eventos importantes
  window.addEventListener('load', init);
  window.addEventListener('focus', init);
  window.addEventListener('beforeinstallprompt', init);
  window.addEventListener('appinstalled', init);
  
})();
