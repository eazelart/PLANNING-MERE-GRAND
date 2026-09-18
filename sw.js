// Service worker minimal.
// Il ne met rien en cache : il existe uniquement parce que Chrome exige
// un gestionnaire "fetch" pour proposer l'installation de la page.

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});
