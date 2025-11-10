// CORRECCIÓN INMEDIATA PARA ERROR 2.GITHUB.IO
// Gymtony v2.4.10 - Solución Temporal
// Fecha: 2025-11-10

(function() {
    'use strict';
    
    console.log('🏋️ GYMTONY V2.4.10 - CORRECCIÓN ERROR 2.GITHUB.IO');
    console.log('⏰ Iniciando corrección:', new Date().toISOString());
    
    // Función principal de corrección
    function fixGithubPagesError() {
        const currentPath = window.location.pathname;
        const basePath = '/gymtony-v2-working/';
        const currentURL = window.location.href;
        
        // Verificar si hay problema 2.github.io
        if (currentURL.includes('2.github.io') || 
            (currentPath !== '/' && !currentPath.startsWith(basePath))) {
            
            console.log('🔧 Problema detectado:', currentURL);
            console.log('📍 Path actual:', currentPath);
            
            // Corregir la URL
            const correctURL = window.location.origin + basePath;
            console.log('✅ Corrigiendo a:', correctURL);
            
            // Aplicar corrección
            window.history.replaceState(null, "", basePath);
            window.location.replace(basePath);
            
            return true;
        }
        
        return false;
    }
    
    // Función para verificar estado de la aplicación
    function checkAppStatus() {
        const appContainer = document.getElementById('root');
        const hasContent = appContainer && appContainer.children.length > 0;
        
        console.log('📊 Estado de la aplicación:');
        console.log('  - Contenedor root:', appContainer ? '✅' : '❌');
        console.log('  - Contenido cargado:', hasContent ? '✅' : '❌');
        console.log('  - URL actual:', window.location.href);
        console.log('  - Path actual:', window.location.pathname);
        
        return hasContent;
    }
    
    // Función para forzar recarga si es necesario
    function forceReloadIfNeeded() {
        if (!checkAppStatus()) {
            console.log('🔄 Forzando recarga de la aplicación...');
            setTimeout(() => {
                window.location.reload(true);
            }, 1000);
        }
    }
    
    // Ejecutar corrección inmediatamente
    console.log('🚀 Ejecutando corrección inmediata...');
    const corrected = fixGithubPagesError();
    
    if (corrected) {
        console.log('✅ Corrección aplicada exitosamente');
    } else {
        console.log('ℹ️ No se detectaron problemas de URL');
    }
    
    // Verificar estado después de un momento
    setTimeout(() => {
        checkAppStatus();
        forceReloadIfNeeded();
    }, 2000);
    
    // Configurar verificación periódica
    setInterval(() => {
        const needsFix = fixGithubPagesError();
        if (needsFix) {
            console.log('⚠️ Error 2.github.io detectado nuevamente - aplicando corrección');
        }
    }, 5000);
    
    // Crear función global para acceso manual
    window.fixGymtonyError = function() {
        console.log('🏋️ Ejecutando corrección manual...');
        fixGithubPagesError();
        checkAppStatus();
        return true;
    };
    
    console.log('✅ CORRECCIÓN CARGADA - Usar fixGymtonyError() para ejecutar manualmente');
    console.log('🔗 Acceso directo: https://jstony2000.github.io/gymtony-v2-working/fijar-error-2githubio.html');
})();