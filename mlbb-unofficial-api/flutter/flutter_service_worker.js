'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "a9fa2ca37b87c3656e04ee9ec2373069",
"/": "a9fa2ca37b87c3656e04ee9ec2373069",
"main.dart.js": "7ab1e5802bf6e0d7ad93c390971f6dd4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "41855d12beb6f286caa83c6e21244f7b",
"assets/LICENSE": "ead1729054a126c096c37eda89069ca8",
"assets/AssetManifest.json": "8bb9abecbcf9f31afcc7f4c696c999a2",
"assets/FontManifest.json": "c2bda6a94f740d8ff15572813eca3c7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/lib/font/a.ttf": "159cb67fc3bc762a8c3232f0a0c6728e",
"assets/lib/assets/mlbb_logo.png": "0c2c8e756c66d4d47e226a83d33f4efa",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
