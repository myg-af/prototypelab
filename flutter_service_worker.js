'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45c9eb7fa6e6a781268f8a3b8d62d8b9",
".git/config": "36285818965a53c447c8ba4771e83f5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f56407709eb4965402d9a026b11d149",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9a980a9c9a2a8d300ff56ccf59363ae",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71d2eefa5fd3539dbefde5c80a864841",
".git/logs/refs/heads/main": "795328e139995c166f36e1359ef5dbca",
".git/logs/refs/remotes/origin/main": "5d77fa197939082c6ce38ed4a6591947",
".git/objects/02/250825ed54c9e60f24bcaae51c4971352146a7": "bd351560c200a4ba8bd2f413f910bfbb",
".git/objects/07/5d18a6dd1605af299bc5a35d45288dc772d6d9": "291f9b720c8ce054b313ea8dcf8bbcba",
".git/objects/09/0a87f43e524fe8f5eddc3c6950d202483f2c5b": "1c67a0c100b41fcb261379853a4913da",
".git/objects/1c/91121e2a757545d6cfec0c34b63118e260f76c": "d3cc11de0871637dbe621176c87d5bb2",
".git/objects/24/ee4eb1639d8d55cbb2df261fbed6a9f6da563c": "6c401e16aa24cd594bb5285f22d9b730",
".git/objects/25/ced2d741265d6a58b2b255026a566b62d0c116": "a0308d9a24674f1179a2e412d5ef60fc",
".git/objects/2b/ee2ba2678427c2f3303ee7a862443f45d19a2f": "7b7923dee60059b402d541e1c359b323",
".git/objects/2c/c882bcee3b2be22a65a8b6d323854fba740b16": "b27575e7a708411094c7f9e19e87f78f",
".git/objects/3a/2fb374ce038d6f079a1a2130d0218a089ef99b": "86e648f3fc1e4f030c8777886d67e519",
".git/objects/3c/335dad780549cc66d57c51e6996e3ff602b0d2": "22f574e81d9884bb45ebbc4e92ae8cd8",
".git/objects/3c/478247152c4b8d3b69ab2756a856321f14e490": "8d253feb97647c84e79cc017e76eed49",
".git/objects/3c/b30061eb08c37c8b1cd5de952b58d13c75d771": "80b58681d9a2a47e673411af9d37f1b1",
".git/objects/45/92729c21433b7f38def2224eb7522e07573be0": "723077d189559f68e766b807ed5be37c",
".git/objects/49/872446759bfcc63fe2778152a3ca075d421c8d": "1de9602a897211d482e83290454a0a6b",
".git/objects/4b/04006480f884a12d164d72273f8aafe2f33052": "84e205281a301e5a440a3d18d88684f7",
".git/objects/4d/1e6e90b7083f66ddec47d93dd77bbab44d5921": "72f9481a7620cc60928fff8190089c7e",
".git/objects/5b/897f4496f30d49b9c7852f63b31b9a4b478870": "b9574b339a27a477d54e25337fb40885",
".git/objects/5e/0c836743cacc7cbf54e1f176f386545b1fc941": "93c0573611a3ea617d5d25bfbb99d74e",
".git/objects/61/f5c06cace931ef088b0717a15e96ca6dbab8aa": "f3457e2a1bd287bbae54715e6213d5c2",
".git/objects/69/5d393bfeaf04d3c272dd0f8080b159b715e97d": "8c5c8bfb5cc24c790e4a79b38c1e5075",
".git/objects/6b/39b6fb52c6757870f06894abe25abca7cbaab8": "b2a55455f638e2d11307ce3c04ba3a71",
".git/objects/6b/57eb5c140c48117e208bfbbac2f51a63e70da6": "6a63a57558465954c2332d15321a70a0",
".git/objects/6b/a6f13c8497c199d87a2516ee162afd49402532": "753367626388cb0fe3ef768e0b62f4e8",
".git/objects/6c/bf6ee285c6c26332008f7a4950787b96d214e9": "31c33daf0c32d829ed765db4fe6f0653",
".git/objects/6c/c08fb45c17a3770aff7e38bb12de2dc42c54e4": "ae74187390a0664322213deb7ada57e1",
".git/objects/70/9acd46a68c1e0e1a9247655a25ca57b1fdcf54": "05f0c963562b200947250fe92457753a",
".git/objects/7a/221c3a7bf69e79b251522a22415151aab16b0d": "8a860ac35e64de9688f91bf37a1e2b2d",
".git/objects/88/2f35d9392afce17c3375d3c307a46480bbf49f": "b9150117369bf703aab0bfe0c526a880",
".git/objects/89/20324aec698e8cebb739b778c36356b0a683d7": "8e7c13c61466531ca564ab61d41966b3",
".git/objects/9b/04e8a266631b8ee29d1181e40ba6771b199322": "1c77734620ba57ece7dd71ffffa7ec68",
".git/objects/a3/4a25d6d843da2549fd416194d3b829702f3925": "79eb14efdcce4501c49412f90ce13ca8",
".git/objects/a4/1b939023370c630183ee46f197c4974661cea5": "902cddc465654699cadaea74a731e345",
".git/objects/a5/8fd41c26baaf525bc7e1fa985336e5b45aefd9": "ac4b0a13459b51a94a34c6c6b4729822",
".git/objects/a7/f91ec6e59be8142d1b78b4ca593470901d2e11": "d70e82dec4def68731708edba18605dd",
".git/objects/b9/2aee6653e4b4c93eaa5bf5b416e9c7894b0b43": "5dc1e9b8b1b18c8094c6bea39d5ec760",
".git/objects/bb/8c3b0aee28cfa438f232668e268d69e485c24e": "3d9c65379a92b1ebe7cf9fc036b9c516",
".git/objects/c6/bc58dcc8047c847995aa7eb5e8b81a0b59e6a9": "c7d0e3f0a733a1e148a6c9e0bb862028",
".git/objects/c7/33848bc53d03cfb513f5949fd7e2eb199a1e66": "f10db49bd55bec60bff87e8aa2fb2cd3",
".git/objects/d2/f8a243e729c38073352ae7c5b4eddc8ee92338": "ab14923ca5683229747bb55fa21a99b8",
".git/objects/d8/73b753a55ed2274a09138c2e3046039ab1838f": "589caf5690ebabd9a9ba2dac93271204",
".git/objects/da/5664160e49807cf626a06021578d36393a7c1b": "a87c24e92f0b82478e3250fc1746f9e4",
".git/objects/e2/b62be81481c8f24cd2e1bbf3cc10e8b10594be": "8a79e0da72756e24cc6a53cc9028c890",
".git/objects/e5/2aa5752d17b347e5eec337ca04240ddba299d3": "a58f564cc78d8bf5afa0689a4bc48165",
".git/objects/e5/894acbc9982c9e4597042f19f8f3f8fa481866": "c3aee95b0444f0e7f94c194fc1f80250",
".git/objects/f3/8eceb21b209f2a16a02ffadb63c5f16adbbc89": "df8f07c4491cd6885ff5fcb3fd80b309",
".git/objects/f9/b45bbcb0e4b3b1c65f7893bb39cc0b4eb88dd1": "62b976a46a7bd77bcd116211d1fc7676",
".git/objects/pack/pack-8d904839d81770c6ce87afeec5b3029ab3054f90.idx": "c89ae881b0f2866cc6a7a9722b716d68",
".git/objects/pack/pack-8d904839d81770c6ce87afeec5b3029ab3054f90.pack": "0c7a9ae1ac72bc226f7157ea24adb20a",
".git/objects/pack/pack-8d904839d81770c6ce87afeec5b3029ab3054f90.rev": "ce0d5cd928358b7671be581be04391d3",
".git/refs/heads/main": "7f3232ca299d4f707d86ec5134808107",
".git/refs/remotes/origin/main": "7f3232ca299d4f707d86ec5134808107",
"assets/AssetManifest.bin": "6257b507d6d5719eb7b323dadba42b60",
"assets/AssetManifest.bin.json": "303c61aee4dab19d988d656c5bf722a1",
"assets/AssetManifest.json": "1ec127a6392998f375279054e7432723",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/anim/hero-pro.atlas": "b1327fb842726a97579ead6cebd939d4",
"assets/lib/anim/hero-pro.png": "843ce0424d0d673b606f78705e62c254",
"assets/lib/anim/hero-pro.skel": "76db9d116f739a3d94a5df3a52f2dcae",
"assets/lib/img/altar.png": "8ad9c9f7b561ee16309ba08c2bc2ee37",
"assets/NOTICES": "df362d19c331e797a04cb94c7fb10e0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.js": "76118d0ae9421e1b33e6a0da97700289",
"assets/packages/spine_flutter/lib/assets/libspine_flutter.wasm": "8d2df357686c13a68fc4269e06ce8049",
"assets/packages/spine_flutter/src/spine-cpp-lite/spine-cpp-lite.cpp": "852f851775c61a8dfb34a4460ef7d0f0",
"assets/packages/spine_flutter/src/spine-cpp-lite/spine-cpp-lite.h": "0f25a1e1148b878172e430b582dd4f50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "d41b50793b606d5d3cb62d5b10447681",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "544960d8d0c436b7a18f7112658b7de8",
"/": "544960d8d0c436b7a18f7112658b7de8",
"main.dart.js": "2209772350d784ed9f6418cb0f17f11a",
"manifest.json": "829c0ad170e501a30061a5bb88af300f",
"version.json": "8b06fd8cf640b1e210e6794b4f2c922d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
