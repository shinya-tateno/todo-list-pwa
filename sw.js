const CACHE_NAME = 'cha-todo-pwa-v1';

// インストール時にキャッシュするファイル
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html'
      ]);
    })
  );
});

// リクエストが来たらキャッシュから返す（オフライン対応の準備）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
