'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "49a6502681e49769db2f81071a8930ac",
"assets/assets/icons/android.png": "a6894b393a70e3afd2b5824654101786",
"assets/assets/icons/app-store.png": "671cd61a346b8e679de2d8a6d4d44f4a",
"assets/assets/icons/cv.png": "750f686b829a309df53e5a22fd8f892e",
"assets/assets/icons/flutter.png": "e038d7f55d1c679d7b74a87b6787b6ea",
"assets/assets/icons/github.png": "63de5479e8eb4676570c49e2579cab01",
"assets/assets/icons/gmail.png": "025a33addbe6efac5731132a1723f031",
"assets/assets/icons/google-play.png": "88c54782480ce9d6136328e6c501fd6c",
"assets/assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/images/cfb/1.png": "f98051d330ea01f9e3d8fa1f77e24c3c",
"assets/assets/images/cfb/2.png": "c66da06385bf32873e539615425a1b55",
"assets/assets/images/cfb/3.png": "ae6656a16a6bdcbcc837233a34f41927",
"assets/assets/images/cfb/4.png": "a60e7d37712b5dc35eef482113941ea7",
"assets/assets/images/cfb/5.png": "24e1b3bdc02b98ca8ef8430846f3979d",
"assets/assets/images/cfb/6.png": "f150e4f60e8b8ab3641db9dba0efd882",
"assets/assets/images/cfb/7.png": "4fe25f64e05e90e1dae267e492056edf",
"assets/assets/images/LCD/1.png": "879fea8b8ffd52779bad19f0b21e3424",
"assets/assets/images/LCD/2.png": "b18cc8cb45ad8951e4f99d93efdc86af",
"assets/assets/images/LCD/3.png": "2c52ec57fe80c0438f2a2421efbf20e9",
"assets/assets/images/LCD/4.png": "30f80379c1294eb47f25d20177c280ab",
"assets/assets/images/LCD/5.png": "d1177f63b10af6628d6751f749f328de",
"assets/assets/images/LCD/6.png": "4b1018e5f55c94cd8141fe25dacaf315",
"assets/assets/images/mac/1.png": "2aa28b445cb68a437c1b860deba7cc3d",
"assets/assets/images/mac/2.png": "d111e793faa13b7040c61c186a9cb954",
"assets/assets/images/mac/3.png": "bdfa8efbb807e3f62e7874e47650efe5",
"assets/assets/images/mac/4.png": "de341152cbf6a4129d1d6584f6bc184e",
"assets/assets/images/mac/5.png": "852667987f1561c9149ff416b234a085",
"assets/assets/images/mac/6.png": "41c66f706d11cbbe39c7917af75b9a60",
"assets/assets/images/mac/7.png": "d4f3b79212d5f034ba71d28bc98d66b0",
"assets/assets/images/momken/1.png": "d71f4365e8bbca003f357645d3ca87c8",
"assets/assets/images/momken/2.jpeg": "9f27bf91a07cad74ad2e572da82a560a",
"assets/assets/images/momken/3.jpeg": "9f7a9cf9a4cec4987f6570af24fcf73e",
"assets/assets/images/momken/4.jpeg": "a240b303243b764176246d71cf6698c2",
"assets/assets/images/momken/5.jpeg": "01d61c2c6bc59d7b5069ff92c9be877d",
"assets/assets/images/momken/6.jpeg": "5c970b54f6f62b6a8e359741daebd246",
"assets/assets/images/momken/7.jpeg": "c5e3b1168e344ad6ef072fd6c35c6553",
"assets/assets/images/momken/8.png": "a5fd12081473554e3a3c04f75cefc822",
"assets/assets/images/pierre.jpeg": "055caf3e002f5533b578086aa0074772",
"assets/assets/images/vapesio/1.png": "1b5eeeb0b02b5d362db6a4ad5eb23fbb",
"assets/assets/images/vapesio/10.png": "ae6187f92e3aa0c5fd9e0481e238e4e0",
"assets/assets/images/vapesio/11.png": "b3ea13cc30e2d5c61c4657814201ce90",
"assets/assets/images/vapesio/12.png": "6ec976d04640a04223866185ad67de80",
"assets/assets/images/vapesio/2.png": "ec013fc14fbe19b47cbb8395674391ce",
"assets/assets/images/vapesio/3.png": "29c8b6084c4b8126a8f6726b5c86d40d",
"assets/assets/images/vapesio/4.png": "4282204e37c7bd86d0df3f69034c2154",
"assets/assets/images/vapesio/5.png": "3e1e4aa0631999280513db82409d6f59",
"assets/assets/images/vapesio/6.png": "29cd1eb5947be8eb80e312651f2b2212",
"assets/assets/images/vapesio/7.png": "9dfac033647ba8cbc902ffa4f50f478a",
"assets/assets/images/vapesio/8.png": "8fb2ad2d10b9db5e99338eda62d9cf2b",
"assets/assets/images/vapesio/9.png": "8b5638979630343f1f965a3313e3ceae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ce937c7a9a906226c5b6a388b188629b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc176efdfcd202a3640ef16a1959a389",
"/": "cc176efdfcd202a3640ef16a1959a389",
"main.dart.js": "63c5a8d3310d9b01a03a88dc7d0bd4fd",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"version.json": "a3322b2f035e5345663b567001345585"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
