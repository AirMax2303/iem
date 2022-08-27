'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "af39900e5fc2c377aee2602ab8526f50",
"assets/assets/0406202210_895b7656-5e0c-42c8-9034-533a2a3f6b3d-450x450.jpg": "fe792330b56112c72cb0175c4f053697",
"assets/assets/0406202210_895b7656-5e0c-42c8-9034-533a2a3f6b3d-600x500.jpg": "fb9cdf1e2ef119084c4f222772edc7d6",
"assets/assets/0406202211_099c4169-7136-4750-a568-78693f756656-450x450%2520(1).jpg": "7ce88870c767b3c68dd86eb234cb8186",
"assets/assets/0406202211_099c4169-7136-4750-a568-78693f756656-450x450.jpg": "7ce88870c767b3c68dd86eb234cb8186",
"assets/assets/0406202211_099c4169-7136-4750-a568-78693f756656-600x500.jpg": "64e8127310f5280fdfade6d054fd22e0",
"assets/assets/0406202211_41ed504f-6c7d-4b0f-95e0-f2e9749096d6-450x450.jpg": "b98609a59cb223c3910beb54cf9bc19b",
"assets/assets/0406202211_41ed504f-6c7d-4b0f-95e0-f2e9749096d6-600x500.jpg": "045146cbce2ffb14bb92cc0e4701339c",
"assets/assets/0406202211_85477d63-5fb4-4f7e-a912-2012310fed47-450x450.jpg": "2891890a6a2b7cc2f3204b0373f56ea2",
"assets/assets/0406202211_85477d63-5fb4-4f7e-a912-2012310fed47-600x500.jpg": "be9441e08f657fbabcca909da27840f9",
"assets/assets/0406202211_fb497616-7909-4f15-b9dc-301ebcbfe98d-450x450.jpg": "d85a49e32edbfbc434e890839eb9ff85",
"assets/assets/0406202211_fb497616-7909-4f15-b9dc-301ebcbfe98d-600x500.jpg": "cb00fae46e548baf96ad13759a52a3f6",
"assets/assets/1211202001_fyudzhi--450x450.jpg": "f7853e3089d1287bbf1ed81316a7b88f",
"assets/assets/1211202001_fyudzhi-.jpg": "f7853e3089d1287bbf1ed81316a7b88f",
"assets/assets/1211202001_fyudzhi-450x450.jpg": "f7853e3089d1287bbf1ed81316a7b88f",
"assets/assets/1211202001_fyudzhi-600x500.jpg": "cd2e7f4903c498784ca5c16cb651d263",
"assets/assets/1211202001_fyudzhi450x450.jpg": "f7853e3089d1287bbf1ed81316a7b88f",
"assets/assets/1211202001__deljuks-450x450.jpg": "36ad2225780e25fe30d6903658c93030",
"assets/assets/1211202001__deljuks-600x500.jpg": "d528b48b270e7a364a1d72f571860297",
"assets/assets/1211202001__fila-450x450.jpg": "81b5c3a2bfa711893b262f95d81b1dd1",
"assets/assets/1211202001__fila-600x500.jpg": "b59c37466816682dca5ee4b6129418ef",
"assets/assets/1211202001__tempura-450x450.jpg": "ba5e31e40142ce880cc2b62935d88a75",
"assets/assets/1211202001__tempura-600x500.jpg": "d84621f184c7bce6021a634f89d4a5e6",
"assets/assets/1211202001__tempura2-450x450.jpg": "210b90fd6b3cc757d0d92f7ca3b88f62",
"assets/assets/1211202001__tempura2-600x500.jpg": "40c3b462bdbc15aea1492ac4292cae44",
"assets/assets/1211202002_-450x450.jpg": "e24e69302cc624e9542aec6f774ac3b3",
"assets/assets/1211202002_-600x500.jpg": "9c6523795c46ae5630526a908573a7e9",
"assets/assets/1211202002_4_syra-450x450.jpg": "91213e2398c1582ccea4797f3ba5bac9",
"assets/assets/1211202002_4_syra-600x500.jpg": "8c67cb87209a13401907e2652e9cd2aa",
"assets/assets/1211202002_mayami-450x450.jpg": "9eabe4527bd6b3419d6f590f2dd31449",
"assets/assets/1211202002_mayami-600x500%2520.jpg": "8da9a376ea31d35092e17ca35d4e4af5",
"assets/assets/1211202002_slivoch-450x450.jpg": "03478e4168b195a1bff18d68a5062225",
"assets/assets/1211202002_slivoch-600x500.jpg": "fdcb80a810fd8163f787f5f6f35d7c47",
"assets/assets/1211202010_japan-450x450.jpg": "e47c3cd825ef2d8bc0d8694af475bbb9",
"assets/assets/1211202010_japan-600x500.jpg": "794f605b3701bea8797f4c28c2e7c7c2",
"assets/assets/1311202003_-450x450.jpg": "ada711f2e55bd17efe83b354ead748a7",
"assets/assets/1311202003_-600x500.jpg": "ed13a63bd10da7f10906b0a332e3ac49",
"assets/assets/1311202003__grin-450x450.jpg": "d96a574b25bd770d9d59f458c0d519e4",
"assets/assets/1311202003__grin-600x500.jpg": "d53b9933543479d7b504df2d3fac24aa",
"assets/assets/1311202003__lososem-450x450.jpg": "00fbfe9bbbb4552502093d026c251ed2",
"assets/assets/1311202003__lososem-600x500.jpg": "287fcc3ca14295d0ca744695139d5213",
"assets/assets/1311202003__midijami-450x450.jpg": "92bd5df4dc66ac87461dd9a74a9dc187",
"assets/assets/1311202003__midijami-600x500.jpg": "7971f17750f53d9154db1ddd9c7e4086",
"assets/assets/1311202003__roll-450x450.jpg": "76f83df9e7d7ccd4878bace8f2dc4b89",
"assets/assets/1311202003__roll-600x500.jpg": "740c478649091c76c14bf20d01acc0db",
"assets/assets/1311202004_-450x450%2520(1).jpg": "9e99bd6c5ff2ef7e9f9971affcc1ca40",
"assets/assets/1311202004_-450x450.jpg": "9e99bd6c5ff2ef7e9f9971affcc1ca40",
"assets/assets/1311202004_-600x500.jpg": "e2cc14c0e59c0fb1d926ed06a5cad59d",
"assets/assets/1311202004_aliaska-450x450.jpg": "a48289af11e8ea7707b7efa37fc6668b",
"assets/assets/1311202004_aliaska-600x500.jpg": "83d617cf165574ddf88017a13d744ea1",
"assets/assets/1311202004_mexica-450x450.jpg": "c43c0f64ad99f64bac4199f832eb29c1",
"assets/assets/1311202004_mexica-600x500.jpg": "cd638b8fd346eddd024bd02f8cafc3c5",
"assets/assets/1311202004__avokado-450x450.jpg": "c72b87b4ae77bdd85380f06de7b49e6c",
"assets/assets/1311202004__avokado-600x500.jpg": "c4cd656f85d3fda70b4fee5498031e97",
"assets/assets/1311202004__maki-450x450.jpg": "48d71103181f58eb7dcc9d57f06079a0",
"assets/assets/1311202004__maki-600x500.jpg": "b8cdf6631d86c9e67c8b64d07dd23bdb",
"assets/assets/1311202004__spajjsi_(1)-450x450.jpg": "0bfbb5767724f605e145626a8ca2d886",
"assets/assets/1311202004__spajjsi_(1)-600x500.jpg": "d4aff7b9d5f33cd90192b8f5ff1df1b0",
"assets/assets/1311202004__speshl-450x450.jpg": "4fb5117eb52474ac45212f6e4da8e233",
"assets/assets/1311202004__speshl-600x500.jpg": "984147cbe2db0e6bd7f90f85bd4497e0",
"assets/assets/1311202004__s_krvetkojj-450x450.jpg": "118c90e27175109c43a63a96bf9d350b",
"assets/assets/1311202004__s_krvetkojj-600x500.jpg": "d287c7843ece571e95d3e33c94daf60d",
"assets/assets/1311202004__s_ogurcom-450x450.jpg": "10a541b2c568b1898c1a6139a200e332",
"assets/assets/1311202004__s_ogurcom-600x500.jpg": "8f16c78cfd7e282257a1ca811f35570e",
"assets/assets/1311202004__s_tuncom-450x450.jpg": "6137ad6551480e15d255ee26db50696b",
"assets/assets/1311202004__s_tuncom-600x500.jpg": "99521df0f1ec05e7bd73bfb641f0880a",
"assets/assets/1311202004__v_kljare-450x450.jpg": "a5eb2015e2848238e290b45f68870496",
"assets/assets/1411202006__bol_shaja_kompanija-450x450.jpg": "c215bc606dbb1aea81f2cb2dbb06931e",
"assets/assets/1411202006__bol_shaja_kompanija-600x500.jpg": "11770803c82d5194ed34f370ab256a86",
"assets/assets/2808202001_OstrieSushi-450x450.png": "f2db72ed973ccfb5f8a206c41c7a71fb",
"assets/assets/2808202001_OstrieSushi-600x500.png": "0f3ef506975f6b06f8ad46d05963095d",
"assets/assets/2808202001_SushiChuko-450x450.png": "bc0a2e448d356ddf6da262555cb287b2",
"assets/assets/2808202001_SushiChuko-600x500.png": "40492c713c88fbdf0dc5e28b2ded570d",
"assets/assets/2808202001_SushiKrevetka-450x450.jpeg": "0c0c6d374c289560cbf74909f17e3de2",
"assets/assets/2808202001_SushiKrevetka-600x500.jpeg": "2c0925f13cc1b166a07cf513d403f888",
"assets/assets/2808202001_SushiLosos-450x450.jpeg": "68f3c9cfa8e39039666459e399e9c9fd",
"assets/assets/2808202001_SushiLosos-600x500.jpeg": "7b823a5f16eb3b8ed2bf1fcde7595967",
"assets/assets/2808202001_SushiTobiko-450x450.png": "a8ae1a55f296c0e456fcf7caf309169b",
"assets/assets/2808202001_SushiTobiko-600x500.png": "281525d6a0e1aba959c485de2bba13e4",
"assets/assets/2808202001_SushiTunets-450x450.png": "77cac14cbec081372fea147ae379eaa2",
"assets/assets/2808202001_SushiTunets-600x500.png": "1bd47146e78b20887bfe2f5d5570f666",
"assets/assets/2808202002_rollugor-450x450.jpeg": "56101af751b1a550426b38f6c1af9d1a",
"assets/assets/2808202002_rollugor-600x500.jpeg": "b747dbcaaaa31a13a0e4dac5757b390f",
"assets/assets/2808202012_OstrieSushi-450x450.png": "f2db72ed973ccfb5f8a206c41c7a71fb",
"assets/assets/2808202012_OstrieSushi-600x500.png": "0f3ef506975f6b06f8ad46d05963095d",
"assets/assets/2808202012_ZapechSushi-450x450.png": "cfc4b498f37378196320fe648c043a7e",
"assets/assets/2808202012_ZapechSushi-600x500.png": "60e20255c9c0c69435e866aee539f65f",
"assets/assets/logo_header.svg": "d744fc40d10025a554511f00e6ef4512",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ccd7f093d65858010cea99907683b5d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "572d66c106a5286c418b9916a2a200a0",
"/": "572d66c106a5286c418b9916a2a200a0",
"main.dart.js": "c330bbcb17be96ebb5de2ab459278a22",
"manifest.json": "f6fb86950169106696f51f8155ba5a31",
"version.json": "b8ab0bf5f7b940d756f93caf1f3c860b"
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
