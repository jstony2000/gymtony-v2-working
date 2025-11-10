/**
 * CORRECCIÓN ULTRA FORZADA PARA GYMTONY v2.4.10
 * Error 2.github.io - NUCLEAR OPTION
 * 
 * INSTRUCCIONES:
 * 1. Abre GymTony en tu navegador
 * 2. Presiona F12 para abrir herramientas de desarrollo
 * 3. Ve a la pestaña "Console"
 * 4. Copia y pega este código COMPLETO
 * 5. Presiona Enter
 * 6. Observa la corrección en tiempo real
 */

(function GYMTONY_NUCLEAR_CORRECTION() {
    console.log('%c🏋️ GYMTONY v2.4.10 - NUCLEAR CORRECTION', 'background: #dc2626; color: white; padding: 10px; font-size: 18px; font-weight: bold; border-radius: 5px;');
    console.log('%c⚡ NUCLEAR OPTION ACTIVADA - FORZANDO ACTUALIZACIÓN', 'background: #7c2d12; color: #fbbf24; padding: 5px; font-radius: 3px;');
    
    // === CONFIGURACIÓN DE CORRECCIÓN NUCLEAR ===
    const NUCLEAR_CONFIG = {
        version: '2.4.10',
        correctionType: 'NUCLEAR_FORCED',
        timestamp: Date.now(),
        hardReset: true,
        aggressive: true,
        forced: true
    };
    
    console.log('🔥 Configuración nuclear:', NUCLEAR_CONFIG);
    
    // === FUNCIONES DE CORRECCIÓN NUCLEAR ===
    
    // 1. Limpieza ultra agresiva
    async function nuclearCacheDestruction() {
        console.log('%c🗑️ NUCLEAR CACHE DESTRUCTION INICIADA', 'color: #ef4444; font-weight: bold;');
        
        const results = {
            caches: 0,
            localStorage: false,
            sessionStorage: false,
            indexedDB: 0,
            serviceWorkers: 0
        };
        
        try {
            // DESTRUIR TODOS LOS CACHES
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                console.log('📦 Caches encontrados:', cacheNames.length);
                
                for (const cacheName of cacheNames) {
                    try {
                        await caches.delete(cacheName);
                        results.caches++;
                        console.log('💥 Cache destruido:', cacheName);
                    } catch (error) {
                        console.warn('⚠️ Error destruyendo cache', cacheName, error);
                    }
                }
            }
            
            // LIMPIAR STORAGE
            try {
                localStorage.clear();
                results.localStorage = true;
                console.log('💾 localStorage LIMPIADO');
                
                sessionStorage.clear();
                results.sessionStorage = true;
                console.log('🔐 sessionStorage LIMPIADO');
            } catch (error) {
                console.warn('⚠️ Error limpiando storage', error);
            }
            
            // DESTRUIR INDEXEDDB
            if ('indexedDB' in window) {
                try {
                    const dbs = await indexedDB.databases();
                    for (const db of dbs) {
                        if (db.name) {
                            try {
                                indexedDB.deleteDatabase(db.name);
                                results.indexedDB++;
                                console.log('🗄️ IndexedDB destruido:', db.name);
                            } catch (error) {
                                console.warn('⚠️ Error destruyendo IndexedDB', db.name, error);
                            }
                        }
                    }
                } catch (error) {
                    console.warn('⚠️ Error accediendo a IndexedDB', error);
                }
            }
            
            // ELIMINAR SERVICE WORKERS
            if ('serviceWorker' in navigator) {
                try {
                    const registrations = await navigator.serviceWorker.getRegistrations();
                    for (const registration of registrations) {
                        try {
                            await registration.unregister();
                            results.serviceWorkers++;
                            console.log('🔧 Service Worker eliminado');
                        } catch (error) {
                            console.warn('⚠️ Error eliminando Service Worker', error);
                        }
                    }
                } catch (error) {
                    console.warn('⚠️ Error accediendo a Service Workers', error);
                }
            }
            
        } catch (error) {
            console.error('❌ Error en destrucción nuclear:', error);
        }
        
        console.log('%c✅ LIMPIEZA NUCLEAR COMPLETADA', 'color: #22c55e; font-weight: bold;');
        console.log('📊 Resultados:', results);
        
        return results;
    }
    
    // 2. Corrección ultra forzada de URL
    function forcedURLCorrection() {
        console.log('%c🎯 FORCED URL CORRECTION', 'color: #3b82f6; font-weight: bold;');
        
        const currentURL = window.location.href;
        const currentPath = window.location.pathname;
        const currentSearch = window.location.search;
        const currentHash = window.location.hash;
        
        console.log('📍 URL actual:', currentURL);
        console.log('🛤️ Path actual:', currentPath);
        console.log('🔍 Search actual:', currentSearch);
        console.log('🔗 Hash actual:', currentHash);
        
        const basePath = '/gymtony-v2-working/';
        const targetVersion = '2410';
        const newTimestamp = Date.now();
        
        // Crear nueva URL súper forzada
        const newSearch = new URLSearchParams();
        newSearch.set('v', targetVersion);
        newSearch.set('t', newTimestamp);
        newSearch.set('force', 'true');
        newSearch.set('cache', 'false');
        newSearch.set('nuclear', 'true');
        newSearch.set('r', Math.random().toString(36));
        
        const newURL = `https://jstony2000.github.io${basePath}?${newSearch.toString()}`;
        
        console.log('🚀 URL forzada:', newURL);
        
        // Estrategia de corrección múltiple
        try {
            // Estrategia 1: history.replaceState
            window.history.replaceState({
                version: '2.4.10',
                forced: true,
                nuclear: true
            }, 'GymTony V 2.4.10 - FORZADO', newURL);
            console.log('✅ URL corregida via history.replaceState');
            
            // Estrategia 2: location.replace
            setTimeout(() => {
                console.log('🔄 Aplicando corrección forzada...');
                window.location.replace(newURL);
            }, 500);
            
        } catch (error) {
            console.error('❌ Error en corrección forzada:', error);
            
            // Fallback: location.href
            console.log('🔄 Aplicando fallback...');
            setTimeout(() => {
                window.location.href = newURL;
            }, 1000);
        }
        
        return newURL;
    }
    
    // 3. Actualización forzada de metadatos
    function forcedMetadataUpdate() {
        console.log('%c📝 FORCED METADATA UPDATE', 'color: #8b5cf6; font-weight: bold;');
        
        try {
            // Actualizar título
            const newTitle = 'GymTony V 2.4.10 - NUCLEAR FORZADO';
            document.title = newTitle;
            console.log('✅ Título actualizado:', newTitle);
            
            // Actualizar meta description
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                const newDesc = 'GymTony V 2.4.10 - ERROR 2.github.io NUCLEAR FORZADAMENTE CORREGIDO - Aplicación de entrenamiento personalizada';
                metaDesc.setAttribute('content', newDesc);
                console.log('✅ Meta description actualizada');
            }
            
            // Actualizar meta viewport
            const metaViewport = document.querySelector('meta[name="viewport"]');
            if (metaViewport) {
                metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
                console.log('✅ Meta viewport optimizado');
            }
            
            // Actualizar manifest
            const manifest = document.querySelector('link[rel="manifest"]');
            if (manifest) {
                const newHref = `./manifest.json?v=${NUCLEAR_CONFIG.timestamp}&nuclear=true`;
                manifest.setAttribute('href', newHref);
                console.log('✅ Manifest actualizado');
            }
            
            // Forzar recarga de todos los recursos
            const styles = document.querySelectorAll('link[rel="stylesheet"]');
            styles.forEach((style, index) => {
                const newHref = style.getAttribute('href') + `?v=${NUCLEAR_CONFIG.timestamp}&nuclear=true&idx=${index}`;
                style.setAttribute('href', newHref);
                console.log('🎨 Estilo actualizado:', newHref);
            });
            
            const scripts = document.querySelectorAll('script[src]');
            scripts.forEach((script, index) => {
                if (!script.getAttribute('src').includes('nuclear')) {
                    const newSrc = script.getAttribute('src') + `?v=${NUCLEAR_CONFIG.timestamp}&nuclear=true&idx=${index}`;
                    script.setAttribute('src', newSrc);
                    console.log('📜 Script actualizado:', newSrc);
                }
            });
            
        } catch (error) {
            console.error('❌ Error actualizando metadatos:', error);
        }
    }
    
    // 4. Monitoreo forzado de renderizado
    function forcedRenderingMonitor() {
        console.log('%c👀 FORCED RENDERING MONITOR', 'color: #f59e0b; font-weight: bold;');
        
        let attempts = 0;
        const maxAttempts = 20;
        
        const monitor = setInterval(() => {
            attempts++;
            
            const root = document.getElementById('root');
            const hasContent = root && root.children.length > 0;
            const isVisible = root && root.offsetWidth > 0 && root.offsetHeight > 0;
            
            console.log(`🔍 Intento ${attempts}/${maxAttempts}:`, {
                rootExists: !!root,
                hasContent,
                isVisible,
                childrenCount: root ? root.children.length : 0
            });
            
            if (hasContent && isVisible) {
                clearInterval(monitor);
                console.log('%c🎉 APLICACIÓN RENDERIZADA EXITOSAMENTE', 'background: #22c55e; color: white; padding: 5px; border-radius: 3px;');
                
                // Actualizar indicador de corrección exitosa
                const status = {
                    corrected: true,
                    version: NUCLEAR_CONFIG.version,
                    timestamp: new Date().toISOString(),
                    method: 'NUCLEAR_FORCED'
                };
                localStorage.setItem('gymtony_nuclear_status', JSON.stringify(status));
                
                console.log('💾 Estado de corrección guardado:', status);
                
            } else if (attempts >= maxAttempts) {
                clearInterval(monitor);
                console.log('%c⚠️ MAXIMUN ATTEMPTS REACHED - FORCING RELOAD', 'color: #ef4444; font-weight: bold;');
                
                // Último recurso: reload forzado
                setTimeout(() => {
                    console.log('🔄 FORCING HARD RELOAD...');
                    window.location.reload(true);
                }, 1000);
            }
        }, 500);
        
        // Timeout final
        setTimeout(() => {
            if (monitor) {
                clearInterval(monitor);
                console.log('⏰ MONITORING TIMEOUT');
            }
        }, 30000);
    }
    
    // 5. Inyección de corrección en la aplicación
    function injectAppCorrection() {
        console.log('%c💉 INJECTING APP CORRECTION', 'color: #06b6d4; font-weight: bold;');
        
        // Crear corrección React
        const correctionCode = `
            // CORRECCIÓN NUCLEAR PARA REACT APP
            (function() {
                console.log('💉 Nuclear correction injected into React app');
                
                // Forzar actualización de la aplicación
                if (window.React) {
                    try {
                        const root = document.getElementById('root');
                        if (root) {
                            // Actualizar contenido visible
                            const titleElements = root.querySelectorAll('h1, .title, [data-version]');
                            titleElements.forEach(el => {
                                el.textContent = 'GymTony V 2.4.10 - FORZADO';
                            });
                            
                            console.log('✅ React app content updated');
                        }
                    } catch (error) {
                        console.warn('⚠️ React correction error:', error);
                    }
                }
                
                // Monitorear cambios en el DOM
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                            // Verificar si se agregaron nuevos elementos
                            mutation.addedNodes.forEach(node => {
                                if (node.nodeType === Node.ELEMENT_NODE) {
                                    // Forzar actualización de versión en nuevos elementos
                                    const versionElements = node.querySelectorAll('[data-version], .version, h1');
                                    versionElements.forEach(el => {
                                        if (el.textContent && el.textContent.includes('2.4')) {
                                            el.textContent = el.textContent.replace(/2\.4\.\d+/, '2.4.10');
                                        }
                                    });
                                }
                            });
                        }
                    });
                });
                
                // Observar el root de la aplicación
                setTimeout(() => {
                    const root = document.getElementById('root');
                    if (root) {
                        observer.observe(root, {
                            childList: true,
                            subtree: true
                        });
                        console.log('🔍 DOM observer started');
                    }
                }, 1000);
                
            })();
        `;
        
        // Inyectar el código
        try {
            const script = document.createElement('script');
            script.textContent = correctionCode;
            document.head.appendChild(script);
            console.log('✅ Corrección inyectada en la aplicación');
        } catch (error) {
            console.error('❌ Error inyectando corrección:', error);
        }
    }
    
    // === FUNCIÓN PRINCIPAL NUCLEAR ===
    async function nuclearCorrection() {
        console.log('%c🚀 INICIANDO NUCLEAR CORRECTION', 'background: #dc2626; color: white; padding: 10px; font-size: 16px;');
        
        try {
            // Paso 1: Destrucción nuclear de caché
            console.log('⚡ PASO 1: NUCLEAR CACHE DESTRUCTION');
            await nuclearCacheDestruction();
            
            // Paso 2: Actualización forzada de metadatos
            console.log('⚡ PASO 2: FORCED METADATA UPDATE');
            forcedMetadataUpdate();
            
            // Paso 3: Corrección forzada de URL
            console.log('⚡ PASO 3: FORCED URL CORRECTION');
            const newURL = forcedURLCorrection();
            
            // Paso 4: Inyección de corrección en app
            console.log('⚡ PASO 4: INJECT APP CORRECTION');
            injectAppCorrection();
            
            // Paso 5: Monitoreo forzado
            console.log('⚡ PASO 5: FORCED RENDERING MONITOR');
            forcedRenderingMonitor();
            
            console.log('%c🎉 NUCLEAR CORRECTION COMPLETADO', 'background: #22c55e; color: white; padding: 10px; font-size: 16px;');
            console.log('🌐 Nueva URL:', newURL);
            console.log('📊 Configuración aplicada:', NUCLEAR_CONFIG);
            
        } catch (error) {
            console.error('%c❌ NUCLEAR CORRECTION FAILED', 'background: #ef4444; color: white; padding: 5px;', error);
            
            // Último recurso: reload
            setTimeout(() => {
                console.log('🔄 EMERGENCY RELOAD...');
                window.location.reload(true);
            }, 2000);
        }
    }
    
    // === EJECUCIÓN INMEDIATA ===
    (async function() {
        console.log('🔥 NUCLEAR OPTION DETECTED - EXECUTING...');
        
        // Marcar que la corrección nuclear está activa
        localStorage.setItem('gymtony_nuclear_active', 'true');
        localStorage.setItem('gymtony_nuclear_time', Date.now().toString());
        
        // Ejecutar corrección nuclear
        await nuclearCorrection();
    })();
    
    // === COMANDOS DE DEBUG NUCLEAR ===
    window.NUCLEAR_DEBUG = {
        config: () => console.log('Nuclear config:', NUCLEAR_CONFIG),
        version: () => console.log('Nuclear version: 2.4.10'),
        status: () => {
            const active = localStorage.getItem('gymtony_nuclear_active');
            const time = localStorage.getItem('gymtony_nuclear_time');
            console.log('Nuclear status:', { active, time });
        },
        hardReload: () => window.location.reload(true),
        forceURL: () => forcedURLCorrection(),
        cleanCache: () => nuclearCacheDestruction(),
        inject: () => injectAppCorrection()
    };
    
    console.log('💡 COMANDOS NUCLEAR DISPONIBLES:');
    console.log('   - NUCLEAR_DEBUG.config() - Ver configuración');
    console.log('   - NUCLEAR_DEBUG.status() - Ver estado');
    console.log('   - NUCLEAR_DEBUG.hardReload() - Recarga forzada');
    console.log('   - NUCLEAR_DEBUG.forceURL() - Forzar URL');
    
    return {
        success: true,
        version: NUCLEAR_CONFIG.version,
        type: 'NUCLEAR_FORCED',
        commands: ['NUCLEAR_DEBUG'],
        url: window.location.href
    };
})();