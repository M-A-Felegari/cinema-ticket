const cacheData = "cacheV1";
const cacheAssets = [
    '/static/js/bundle.js',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap',
    '/static/media/Joker-banner.250f2107124ba195735a.jpg',
    '/static/media/sahne-zani-poster2.266ae6b373d9765ac9aa.jpg',
    '/static/media/sahne-zani-poster.2a5d87f6832df3fcbc23.jpg\n',
    '/static/media/sahne-zani-mini-poster.04c236be013328c62200.jpg',
    '/static/media/JokerMiniPoster.8a5ba32dcb6feabae353.webp',
    '/static/media/suspect-x-mini-poster.d8bbbd1175d8ec1edf68.jpg',
    '/static/media/login_character.329499102f74e48a3e9fd70ed181889b.svg',
    '/index.html',
    '/',
    '/tickets',
    '/profile',
    'manifest.json',
    '/logo-192.png',
    '/favicon.ico'
]
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData)
            .then((cache) => {
                console.log("cache opened")
                cache.addAll(cacheAssets)
            })
            .catch((err)=>console.error("sw cant cache the assets",err))
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request)
                .then((response) => {
                        return response || event.request;
                })
        )
    }
})