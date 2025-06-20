
// Define o nome e a versão do cache
const CACHE_NAME = 'camarinha-obori-cache-v1';
// Lista de ficheiros essenciais para guardar em cache
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icone-obori.jpg'
];

// Evento de instalação: guarda os ficheiros em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto e a guardar ficheiros...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de fetch: serve os ficheiros do cache se estiverem disponíveis
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Se o ficheiro estiver em cache, retorna-o. Senão, busca na rede.
        return response || fetch(event.request);
      })
  );
});

// Evento de ativação: limpa caches antigos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('A apagar cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
