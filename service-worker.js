self.addEventListener(
"install",
event => {

event.waitUntil(

caches.open("stern-v1")
.then(cache => {

return cache.addAll([
"./",
"./index.html",
"./app.js",
"./styles.css",
"./manifest.json"
]);

})

);

});

self.addEventListener(
"fetch",
event => {

event.respondWith(

caches.match(
event.request
)
.then(response => {

return response || fetch(event.request);

})

);

});
