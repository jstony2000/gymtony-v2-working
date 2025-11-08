/**
 * Script para limpiar cache y recargar GymTony V2.4.3
 * Ejecutar este script en la consola del navegador si hay problemas de navegación o imágenes
 */

(function() {
    console.log('🧹 Limpiando cache de GymTony V2.4.3...');
    
    // Limpiar localStorage
    const keys = Object.keys(localStorage);
    console.log(`📋 Limpiando ${keys.length} elementos de localStorage...`);
    keys.forEach(key => {
        if (key.includes('gymtony') || key.includes('darkMode') || key.includes('first_time')) {
            console.log(`🗑️  Eliminando: ${key}`);
            localStorage.removeItem(key);
        }
    });
    
    // Limpiar service worker cache si existe
    if ('serviceWorker' in navigator) {
        console.log('🔄 Registrando service worker...');
        navigator.serviceWorker.getRegistrations().then(registrations => {
            registrations.forEach(registration => {
                console.log('🔄 Desregistrando service worker...');
                registration.unregister();
            });
        });
    }
    
    // Limpiar sessionStorage
    const sessionKeys = Object.keys(sessionStorage);
    sessionKeys.forEach(key => {
        if (key.includes('gymtony') || key.includes('react')) {
            console.log(`🗑️  Eliminando de sessionStorage: ${key}`);
            sessionStorage.removeItem(key);
        }
    });
    
    console.log('✅ Cache limpiado. La aplicación se recargará en 2 segundos...');
    
    // Recargar la página después de 2 segundos
    setTimeout(() => {
        console.log('🔄 Recargando aplicación...');
        window.location.reload(true); // Forzar recarga desde el servidor
    }, 2000);
})();