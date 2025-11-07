// SOLUCIÓN ULTRA AGRESIVA: Forzar tema rojo definitivo en GymTony
(function() {
  'use strict';
  
  console.log('🔴 GYMTONY ULTRA THEME ACTIVADO');
  
  // Configuración de colores rojos
  const RED_PRIMARY = '#dc2626';
  const RED_SECONDARY = '#b91c1c';
  const RED_LIGHT = '#f87171';
  const WHITE = 'white';
  
  // Función para crear estilos ultra agresivos
  function createUltraStyles() {
    const style = document.createElement('style');
    style.id = 'gymtony-ultra-red-theme';
    style.textContent = `
      /* ULTRA AGRESIVO - DOMINAR TODOS LOS ESTILOS */
      html, body, #root, .App, [data-testid*="app"], main, * {
        background-color: ${RED_PRIMARY} !important;
        background: linear-gradient(135deg, ${RED_PRIMARY} 0%, ${RED_SECONDARY} 100%) !important;
        color: ${WHITE} !important;
        border-color: ${RED_SECONDARY} !important;
      }
      
      /* Forzar todos los textos */
      *, p, h1, h2, h3, h4, h5, h6, span, div, a, button, label, li {
        color: ${WHITE} !important;
        text-shadow: none !important;
      }
      
      /* Botones - TODOS */
      button, .button, .btn, [role="button"], [data-testid*="button"] {
        background-color: ${RED_PRIMARY} !important;
        border: 2px solid ${RED_LIGHT} !important;
        color: ${WHITE} !important;
        border-radius: 8px !important;
        font-weight: bold !important;
      }
      
      button:hover, .button:hover, .btn:hover, [role="button"]:hover {
        background-color: ${RED_SECONDARY} !important;
        border-color: ${WHITE} !important;
        color: ${WHITE} !important;
        transform: scale(1.05) !important;
      }
      
      /* Cards y containers */
      .card, .container, .box, [role="region"], section {
        background-color: ${RED_SECONDARY} !important;
        border: 1px solid ${RED_LIGHT} !important;
        border-radius: 12px !important;
        color: ${WHITE} !important;
      }
      
      /* Headers y navigation */
      header, nav, .header, .navbar {
        background-color: ${RED_PRIMARY} !important;
        color: ${WHITE} !important;
        border-bottom: 3px solid ${RED_LIGHT} !important;
      }
      
      /* Inputs */
      input, textarea, select {
        background-color: ${WHITE} !important;
        color: ${RED_PRIMARY} !important;
        border: 2px solid ${RED_LIGHT} !important;
        border-radius: 6px !important;
      }
      
      input:focus, textarea:focus, select:focus {
        border-color: ${RED_LIGHT} !important;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.3) !important;
      }
      
      /* FORZAR LOGOS - TODAS LAS FORMAS POSIBLES */
      img[src*="logo"], img[src*="icon"], img[src*="vite"], 
      .logo, .icon, [role="img"], [data-testid*="logo"],
      svg, canvas, video, picture {
        filter: none !important;
        mix-blend-mode: normal !important;
        background: transparent !important;
      }
      
      /* Sobrescribir imágenes de logo */
      img[src*="vite.svg"] {
        display: none !important;
      }
      
      /* Links */
      a, a:visited, a:hover, a:active {
        color: ${RED_LIGHT} !important;
        text-decoration: none !important;
      }
      
      a:hover {
        color: ${WHITE} !important;
        text-decoration: underline !important;
      }
      
      /* Eliminar sombras y efectos oscuros */
      *, *::before, *::after {
        box-shadow: none !important;
        text-shadow: none !important;
        filter: none !important;
      }
      
      /* FORZAR MANIFEST TEMA */
      meta[name="theme-color"] {
        content: ${RED_PRIMARY} !important;
      }
    `;
    return style;
  }
  
  // Función para crear botones flotantes
  function createFloatingButtons() {
    // Remover botones existentes
    const existingButtons = document.querySelectorAll('.gymtony-floating-button');
    existingButtons.forEach(btn => btn.remove());
    
    const buttons = [
      { emoji: '💪', text: 'ENTRENAR', color: RED_PRIMARY, action: 'entrenar' },
      { emoji: '💾', text: 'BACKUP', color: RED_SECONDARY, action: 'backup' },
      { emoji: '⚙️', text: 'CONFIG', color: RED_LIGHT, action: 'config' }
    ];
    
    buttons.forEach((btn, index) => {
      const button = document.createElement('div');
      button.className = 'gymtony-floating-button';
      button.style.cssText = `
        position: fixed !important;
        bottom: ${20 + (index * 70)}px !important;
        right: 20px !important;
        background: ${btn.color} !important;
        color: ${WHITE} !important;
        padding: 12px 16px !important;
        border-radius: 25px !important;
        border: 2px solid ${WHITE} !important;
        font-weight: bold !important;
        font-size: 14px !important;
        cursor: pointer !important;
        z-index: 10000 !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3) !important;
        transition: all 0.3s ease !important;
        user-select: none !important;
      `;
      
      button.innerHTML = `${btn.emoji} ${btn.text}`;
      
      // Efecto hover
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1) translateY(-2px)';
        button.style.boxShadow = '0 6px 25px rgba(0,0,0,0.4)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1) translateY(0)';
        button.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      });
      
      // Acción al hacer click
      button.addEventListener('click', () => {
        console.log(`🎮 Botón ${btn.action} clickeado`);
        
        // Mostrar mensaje
        const msg = document.createElement('div');
        msg.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: ${RED_PRIMARY};
          color: white;
          padding: 20px;
          border-radius: 10px;
          font-weight: bold;
          z-index: 10001;
          border: 2px solid white;
        `;
        msg.textContent = `${btn.emoji} Función ${btn.text} activada`;
        
        document.body.appendChild(msg);
        
        setTimeout(() => {
          msg.remove();
        }, 2000);
      });
      
      document.body.appendChild(button);
    });
  }
  
  // Función principal de aplicación
  function applyUltraRedTheme() {
    console.log('🔴 Aplicando tema ultra rojo...');
    
    // Remover estilos previos
    const oldStyle = document.getElementById('gymtony-ultra-red-theme');
    if (oldStyle) oldStyle.remove();
    
    // Aplicar nuevos estilos
    document.head.appendChild(createUltraStyles());
    
    // Crear botones flotantes
    createFloatingButtons();
    
    console.log('✅ Tema ultra rojo aplicado correctamente');
  }
  
  // Función para observar cambios en el DOM
  function setupObserver() {
    const observer = new MutationObserver(function(mutations) {
      let shouldRefresh = false;
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          // Verificar si se agregaron nodos de React
          if (mutation.addedNodes.length > 0) {
            for (let node of mutation.addedNodes) {
              if (node.nodeType === 1) { // ELEMENT_NODE
                shouldRefresh = true;
                break;
              }
            }
          }
        }
      });
      
      if (shouldRefresh) {
        setTimeout(applyUltraRedTheme, 100);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  // Función para reemplazar logos
  function replaceLogos() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src') || '';
      if (src.includes('logo') || src.includes('icon') || src.includes('vite')) {
        console.log(`🔄 Reemplazando logo: ${src}`);
        img.setAttribute('src', '/logo-red-512x512.png');
        img.style.filter = 'none';
        img.style.background = 'transparent';
      }
    });
  }
  
  // Aplicación inmediata
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      applyUltraRedTheme();
      setupObserver();
      replaceLogos();
    });
  } else {
    applyUltraRedTheme();
    setupObserver();
    replaceLogos();
  }
  
  // Aplicación periódica cada 2 segundos
  setInterval(function() {
    applyUltraRedTheme();
    replaceLogos();
  }, 2000);
  
  // Aplicación cuando la ventana obtiene foco
  window.addEventListener('focus', applyUltraRedTheme);
  
  // Aplicación después de cambios de tamaño
  window.addEventListener('resize', applyUltraRedTheme);
  
  console.log('🚀 GYMTONY ULTRA THEME INICIADO - Aplicación aggressiva cada 2 segundos');
  
})();