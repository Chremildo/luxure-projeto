const CACHE_NAME = "james-lennan-estates-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./css/components.css",
  "./css/animations.css",
  "./css/responsive.css",
  "./js/app.js",
  "./js/translations.js",
  "./js/chatbot.js",
  "./js/filters.js",
  "./js/forms.js",
  "./js/modal.js",
  "./js/carousel.js",
  "./js/theme.js",
  "./assets/images/james-lennan-developer.jpeg",
  "./assets/images/james-lennan-profile-square.jpeg",
  "./assets/images/james-lennan-profile-portrait.jpeg",
  "./assets/images/james-lennan-app-icon.jpeg",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
