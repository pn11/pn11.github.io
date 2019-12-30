self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('video-store').then(function(cache) {
        return cache.addAll([
          '/hue/',
          '/hue/index.html',
          '/hue/index.js',
          '/style.css'
        ]);
      })
    );
});

self.addEventListener('fetch', function(e) {});
