// Script para forzar la limpieza del cache y recargar GymTony V2.4.6
(function() {
    console.log('🧹 GymTony V2.4.6 - Forzando limpieza de cache...');
    
    // Limpiar localStorage de versiones anteriores
    const versionKeys = ['gymtony_version', 'gymtony_first_time'];
    versionKeys.forEach(key => {
        localStorage.removeItem(key);
        console.log(`✅ Limpiado localStorage: ${key}`);
    });
    
    // Limpiar sessionStorage
    sessionStorage.clear();
    console.log('✅ Limpiado sessionStorage');
    
    // Forzar recarga de la página en 2 segundos
    setTimeout(() => {
        console.log('🔄 Recargando página con cache limpio...');
        window.location.reload(true); // true = force reload bypassing cache
    }, 2000);
    
    // Mostrar mensaje al usuario
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #dc2626, #b91c1c);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 14px;
        font-weight: 500;
        z-index: 99999;
        box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
        animation: slideIn 0.3s ease-out;
    `;
    message.innerHTML = '🧹 Limpiando cache... La página se recargará automáticamente';
    
    // Agregar animación CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(message);
    
    // Remover mensaje después de 3 segundos
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 3000);
})();