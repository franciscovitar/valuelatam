/* Value Cuotas - Service Worker
   Versión: bumpear este número para forzar actualización del cache */
const VERSION = 'vlcuotas-v1';
const CACHE_NAME = `vlcuotas-cache-${VERSION}`;

// Archivos críticos del shell (todo lo que necesitamos para funcionar offline)
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

// INSTALL: precachear el shell
self.addEventListener('install', event => {
  console.log('[SW] Install', VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE: limpiar caches viejos
self.addEventListener('activate', event => {
  console.log('[SW] Activate', VERSION);
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys
          .filter(key => key.startsWith('vlcuotas-cache-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH: estrategia
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Solo manejamos GETs del mismo origen
  if (request.method !== 'GET') return;
  if (!request.url.startsWith(self.location.origin)) return;
  
  // No cachear las APIs externas (data912, ArgentinaDatos)
  if (request.url.includes('data912.com') || 
      request.url.includes('argentinadatos.com') ||
      request.url.includes('api.')) {
    return; // dejar pasar al network normal
  }
  
  // Network-first para HTML (siempre intentamos versión fresca)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cachear copia para offline
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then(r => r || caches.match('./index.html')))
    );
    return;
  }
  
  // Cache-first para el resto (íconos, manifest, etc.)
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        // Solo cachear respuestas exitosas del mismo origen
        if (!response || response.status !== 200) return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      }).catch(() => {
        // Sin red y sin cache: error genérico
        return new Response('Sin conexión', { status: 503 });
      });
    })
  );
});

// MESSAGE: para forzar update desde la app
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
