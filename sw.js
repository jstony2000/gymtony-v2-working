// Service Worker para GymTony PWA - Tema Rojo
const CACHE_NAME = 'gymtony-v2.4.3-red-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/PECHO.png',
  '/red-theme.css',
  '/red-theme.js',
  '/button-repositioning.js',
  '/button-positioning.css',
  '/logo-red-72x72.png',
  '/logo-red-96x96.png',
  '/logo-red-128x128.png',
  '/logo-red-144x144.png',
  '/logo-red-152x152.png',
  '/logo-red-192x192.png',
  '/logo-red-384x384.png',
  '/logo-red-512x512.png',
  '/assets/index-Dz4_iI-q.css',
  '/assets/index-FnI7mOub.js'
];

// Instalar Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event - Cache First Strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devolver desde cache si existe
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activar Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Forzar actualización inmediata
  self.clients.claim();
});

// Listener para actualizaciones
self.addEventListener('updatefound', event => {
  const newWorker = event.target;
  newWorker.addEventListener('statechange', () => {
    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
      // Nueva versión disponible
      console.log('Nueva versión de GymTony disponible');
    }
  });
});