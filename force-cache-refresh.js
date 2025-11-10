// Script para forzar la limpieza del cache para GymTony V2.4.6
(function() {
    const CURRENT_VERSION = '2.4.6';
    const CACHE_CLEARED_KEY = 'gymtony_cache_cleared_v2_4_6';
    
    // Verificar si ya se ejecutó el cache clearing para esta versión
    if (localStorage.getItem(CACHE_CLEARED_KEY) === 'true') {
        console.log('✅ Cache ya fue limpiado para versión', CURRENT_VERSION);
        return; // No ejecutar nuevamente
    }
    
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
    
    // Marcar que el cache fue limpiado para esta versión
    localStorage.setItem(CACHE_CLEARED_KEY, 'true');
    console.log('✅ Marcado cache como limpiado para versión', CURRENT_VERSION);
    
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
    message.innerHTML = '🧹 Cache limpiado para GymTony V2.4.6';
    
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