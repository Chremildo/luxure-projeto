const CACHE_NAME = "james-lennan-estates-v2";
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
  "./js/portal.js",
  "./assets/images/james-lennan-developer.jpeg",
  "./assets/images/james-lennan-profile-square.jpeg",
  "./assets/images/james-lennan-profile-portrait.jpeg",
  "./assets/images/james-lennan-app-icon.jpeg",
  "./assets/images/james-lennan-mobile-app-mockup.png",
  "./manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(
      names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).catch(() => caches.match("./index.html")));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
