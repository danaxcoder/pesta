'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/assets/lib/ripple/bower.json": "62374128953120fd3ef5f8f4626f32dd",
"assets/assets/assets/lib/ripple/VERSION": "ea9495d53d78b5a6cd250a78ead42aa0",
"assets/assets/assets/lib/ripple/README.md": "9f652c09c6cc342a049bc2ef89b719db",
"assets/assets/assets/lib/ripple/LICENSE.md": "338de5eeae31dce9ce87661917410707",
"assets/assets/assets/lib/ripple/dist/ripple.css": "4e810853667c498ad2c07b219865a871",
"assets/assets/assets/lib/ripple/dist/ripple.min.css": "ec2741198c2e4803c063f448e6ddfca5",
"assets/assets/assets/lib/ripple/gulpfile.js": "5b5269b69a7e01e3887403c30eb7d4d6",
"assets/assets/assets/lib/ripple/package.json": "7e137b581532265c19531a34379c48fc",
"assets/assets/assets/common/css/global.css": "e9876497e3165fb3d444cd7fbdbe8f54",
"assets/assets/assets/common/css/card.css": "1208f9c090a8d774e145c29693cf488a",
"assets/assets/assets/common/css/home.css": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/assets/common/css/otp.css": "ae0e9e4a28cc06c3ace7fa2d2add277e",
"assets/assets/assets/common/js/otp.js": "24ae93e456d8c45b93b86049c4e480f1",
"assets/assets/assets/common/js/home.js": "60cb86bf4bd2c4530e1fb1e2c5a4efcb",
"assets/assets/assets/common/js/jquery.js": "2c872dbe60f4ba70fb85356113d8b35e",
"assets/assets/assets/common/js/splash.js": "b8d918487036509e9952091d02b7d6a7",
"assets/assets/assets/common/js/card.js": "e2e671964a08a9d79c0c80fde093df96",
"assets/assets/assets/common/img/splash.png": "1fd1d51a9fefdea86d1ccabc4e4cfd6a",
"assets/assets/assets/common/img/img4.png": "f614011cfb0dd5f0a0b1cc3fb556ba5e",
"assets/assets/assets/common/img/img3.png": "e3fc1bf1056098a10d38a6abb56ac2d5",
"assets/assets/assets/common/img/icon2.png": "7d758b692a7e1c4421bc6e8b716c7a67",
"assets/assets/assets/common/img/logo.png": "fda96bfbb837d69bdc20161302122afa",
"assets/assets/assets/common/img/card-back.png": "d04572a5427147ced780a62165dee2fa",
"assets/assets/assets/common/img/img2.png": "3926f2c9a59d7ebbba94f58c189fd13a",
"assets/assets/assets/common/img/img1.png": "ee432b45ec1461a0e79f732b2e65c15f",
"assets/assets/assets/common/img/card.png": "7671687d7a347287b97e77ad519fffcb",
"assets/assets/assets/common/img/chip.png": "9bc46aa03b96b4e2b914cfb854a6d8f5",
"assets/assets/assets/common/img/icon1.png": "9df3482b9bb42f3e0b3dd4bde16fa1e1",
"assets/assets/splash.html": "fa9050d37f25548be90f06655113df15",
"assets/assets/otp.html": "a6ed948b84238d41ac9f661683794575",
"assets/assets/home.html": "84be22d029032be19587bacb355d071b",
"assets/assets/card.html": "7b3d5cfd3a6aa3722593370ddfbfab10",
"assets/assets/index.php": "0c1c101b866fd36e48b70eb676d47c12",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "7861d1c8d89b2e92d922d4b525d2afe6",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "e83cd33da4624b9be0083a28393456e5",
"assets/AssetManifest.bin": "d35107599831e66f6f69e92edaaa2592",
"assets/AssetManifest.bin.json": "17542ee02c7f6d61e57a1a498760c68a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "629f55768a1339a220f9424fab4e5ebb",
"version.json": "a83184e2be2b6181307457ac25a64746",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"index.html": "6ee16adab53b0a8c27d59590eae17f48",
"/": "6ee16adab53b0a8c27d59590eae17f48",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "6c3feb16489d781608166fcdbe9e26ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
