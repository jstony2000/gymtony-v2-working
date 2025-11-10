/**
 * CORRECCIÓN ULTRA AGRESSIVA PARA GYMTONY v2.4.10
 * Error 2.github.io - FORCED UPDATE
 * 
 * INSTRUCCIONES:
 * 1. Abre la aplicación en tu navegador
 * 2. Presiona F12 para abrir las herramientas de desarrollo
 * 3. Ve a la pestaña "Console" 
 * 4. Pega este código completo
 * 5. Presiona Enter
 * 6. La aplicación se corregirá automáticamente
 */

(function GYMTONY_ULTRA_CORRECTION() {
    console.log('%c🏋️ GYMTONY v2.4.10 - ULTRA CORRECCIÓN ACTIVADA', 'background: #dc2626; color: white; padding: 5px; font-size: 16px; font-weight: bold;');
    console.log('%c⏰ Timestamp: ' + new Date().toLocaleString(), 'color: #059669; font-weight: bold;');
    
    // === 1. INFORMACIÓN DEL ENTORNO ===
    const env = {
        version: '2.4.10',
        correctionType: 'ULTRA AGRESSIVE',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        path: window.location.pathname
    };
    
    console.log('🔍 Información del entorno:', env);
    
    // === 2. LIMPIEZA AGRESIVA DE CACHÉ ===
    async function ultraAggressiveCacheClear() {
        console.log('🗑️ INICIANDO LIMPIEZA ULTRA AGRESSIVA DE CACHÉ...');
        
        try {
            // Limpiar Cache API
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                for (const cacheName of cacheNames) {
                    await caches.delete(cacheName);
                    console.log('✅ Cache eliminado:', cacheName);
                }
            }
            
            // Limpiar localStorage y sessionStorage
            localStorage.clear();
            sessionStorage.clear();
            console.log('✅ Almacenamiento local limpiado');
            
            // Limpiar IndexedDB
            if ('indexedDB' in window) {
                const dbs = await indexedDB.databases();
                for (const db of dbs) {
                    if (db.name) {
                        indexedDB.deleteDatabase(db.name);
                        console.log('🗄️ IndexedDB eliminado:', db.name);
                    }
                }
            }
            
            // Unregister all service workers
            if ('serviceWorker' in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (const registration of registrations) {
                    await registration.unregister();
                    console.log('🔧 Service Worker eliminado');
                }
            }
            
            console.log('🎯 LIMPIEZA COMPLETADA - Caché completamente limpio');
        } catch (error) {
            console.error('❌ Error en limpieza de caché:', error);
        }
    }
    
    // === 3. CORRECCIÓN DE URL Y RUTA ===
    function correctURLAndPath() {
        console.log('🔧 CORRIGIENDO URL Y RUTA...');
        
        const currentPath = window.location.pathname;
        const basePath = '/gymtony-v2-working/';
        const currentURL = window.location.href;
        
        console.log('📍 URL actual:', currentURL);
        console.log('🛤️ Ruta actual:', currentPath);
        console.log('🎯 Base path esperada:', basePath);
        
        // Verificar y corregir URL
        if (currentPath !== '/' && !currentPath.startsWith(basePath)) {
            console.log('⚠️ URL malformada detectada:', currentPath);
            console.log('🔄 Corrigiendo a:', basePath);
            
            // Usar replaceState para cambiar la URL sin recargar
            window.history.replaceState(null, '', basePath);
            
            // Force redirect con timestamp único
            setTimeout(() => {
                const timestamp = Date.now();
                const correctedURL = `https://jstony2000.github.io${basePath}?v=${timestamp}`;
                console.log('🚀 Redirigiendo a URL corregida:', correctedURL);
                window.location.replace(correctedURL);
            }, 500);
            
            return false; // No continuar con el resto
        } else {
            console.log('✅ URL ya está en formato correcto');
            return true;
        }
    }
    
    // === 4. ACTUALIZACIÓN DE METADATOS ===
    function updateMetadata() {
        console.log('📝 ACTUALIZANDO METADATOS...');
        
        // Actualizar título
        const newTitle = 'GymTony V 2.4.10 - ULTRA CORREGIDO';
        document.title = newTitle;
        console.log('✅ Título actualizado:', newTitle);
        
        // Actualizar meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'GymTony V 2.4.10 - ERROR 2.github.io ULTRA CORREGIDO - Aplicación de entrenamiento');
            console.log('✅ Meta description actualizada');
        }
        
        // Actualizar manifest
        const manifest = document.querySelector('link[rel="manifest"]');
        if (manifest) {
            manifest.setAttribute('href', './manifest.json?v=' + env.timestamp);
            console.log('✅ Manifest actualizado con timestamp');
        }
        
        // Forzar recarga de estilos
        const styles = document.querySelectorAll('link[rel="stylesheet"]');
        styles.forEach(style => {
            const newHref = style.getAttribute('href') + '?v=' + env.timestamp;
            style.setAttribute('href', newHref);
            console.log('🎨 Estilo actualizado:', newHref);
        });
    }
    
    // === 5. MONITOREO DE RENDERIZADO ===
    function monitorRendering() {
        console.log('👀 MONITOREANDO RENDERIZADO...');
        
        const checkInterval = setInterval(() => {
            const root = document.getElementById('root');
            const hasContent = root && root.children.length > 0;
            
            if (hasContent) {
                clearInterval(checkInterval);
                console.log('✅ APLICACIÓN RENDERIZADA CORRECTAMENTE');
                updateStatus('🎉 ¡GymTony v2.4.10 funcionando perfectamente!');
                
                // Intentar actualizar el título de la aplicación
                const appTitle = document.querySelector('h1, .title, [data-testid="title"]');
                if (appTitle) {
                    console.log('📱 Título de aplicación encontrado, actualizando...');
                }
            }
        }, 500);
        
        // Timeout después de 10 segundos
        setTimeout(() => {
            clearInterval(checkInterval);
            const root = document.getElementById('root');
            if (!root || root.children.length === 0) {
                console.log('⚠️ Aplicación no se ha renderizado - forzando recarga...');
                updateStatus('🔄 Recargando aplicación...', 'loading');
                window.location.reload(true);
            }
        }, 10000);
    }
    
    // === 6. FUNCIÓN DE STATUS ===
    function updateStatus(message, type = 'success') {
        const color = type === 'loading' ? '#f59e0b' : 
                     type === 'error' ? '#ef4444' : '#22c55e';
        
        console.log('%c📊 STATUS: ' + message, `color: ${color}; font-weight: bold;`);
        
        // Si existe un elemento de status, actualizarlo
        const statusElement = document.getElementById('status') || 
                             document.querySelector('.status') ||
                             document.querySelector('[data-testid="status"]');
        
        if (statusElement) {
            statusElement.textContent = message;
            statusElement.className = `status ${type}`;
        }
    }
    
    // === 7. FUNCIÓN PRINCIPAL ===
    async function main() {
        console.log('🚀 INICIANDO CORRECCIÓN ULTRA AGRESSIVA...');
        updateStatus('🏋️ Iniciando corrección ultra agresiva...', 'loading');
        
        // Paso 1: Limpiar caché
        await ultraAggressiveCacheClear();
        
        // Paso 2: Actualizar metadatos
        updateMetadata();
        
        // Paso 3: Corregir URL
        const urlCorrected = correctURLAndPath();
        
        if (urlCorrected) {
            // Paso 4: Monitorear renderizado
            monitorRendering();
            
            // Paso 5: Finalización
            console.log('%c🎉 CORRECCIÓN ULTRA AGRESSIVA COMPLETADA', 'background: #22c55e; color: white; padding: 5px;');
            updateStatus('🎉 ¡GymTony v2.4.10 funcionando perfectamente!');
        }
    }
    
    // === 8. EJECUCIÓN ===
    main().catch(error => {
        console.error('❌ Error en corrección ultra agressiva:', error);
        updateStatus('❌ Error en corrección: ' + error.message, 'error');
    });
    
    // === 9. COMANDOS DE VERIFICACIÓN ===
    window.GYMTONY_DEBUG = {
        version: () => console.log('Versión actual:', env.version),
        cache: () => caches.keys().then(names => console.log('Caches activos:', names)),
        localStorage: () => console.log('localStorage:', Object.keys(localStorage)),
        url: () => console.log('URL actual:', window.location.href),
        reload: () => window.location.reload(true)
    };
    
    console.log('💡 COMANDOS DE DEBUG DISPONIBLES:');
    console.log('   - GYMTONY_DEBUG.version() - Ver versión');
    console.log('   - GYMTONY_DEBUG.cache() - Ver caches');
    console.log('   - GYMTONY_DEBUG.reload() - Recargar');
    
    return {
        success: true,
        version: env.version,
        timestamp: env.timestamp,
        commands: ['GYMTONY_DEBUG']
    };
})();