// Service Worker para GymTony PWA - Versión React V2.4.1
const CACHE_NAME = 'gymtony-v2.4.1-react';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/PECHO.png',
  '/logos/BRAZO.png',
  '/logos/BRAZO_transparente.png',
  '/logos/PECHO.png',
  '/logos/PIERNA.png',
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