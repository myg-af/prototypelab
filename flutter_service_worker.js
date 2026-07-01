'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "14fd5d7c21051d853ce915831a5fea8f",
".git/config": "36285818965a53c447c8ba4771e83f5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "957d99d365875202f7db079f4ddb0468",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d9c279ebde8e8c286981a84cf4c5b69",
".git/logs/refs/heads/main": "a455d1e810bfc7090595ae04062dcbad",
".git/logs/refs/remotes/origin/main": "eb4179e9f3445f34a93e5619e7a9622f",
".git/objects/00/751369d91f3ee2df336f54ea5fe0fc89c026cf": "c75afbf59647eb07c3da63f255192c84",
".git/objects/01/bfd5c6e8c274e27d37030144f34eea906c1003": "0428bf266ef8f1fe9f9d14daeaa40682",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/285143c6fdabfbb06aa48684880af1e83f7079": "23bc1ed484e664b74f043e32230cdf87",
".git/objects/05/7a9360c4c8796a7ae9b9e551df3a13aa199a83": "5d8477cb59bfc9f92769cdd9cea3b413",
".git/objects/06/5367a6885b4f125ebed1a206e19998a95f5c46": "3b305ec16b67424b853fa0ee912382fb",
".git/objects/0d/df0ec50a90ff6b43aa044f7a6818f818509594": "d9a8495a42d719b670d669fcf0565d65",
".git/objects/0f/5b0e60cd71a05812e08aad0f51ca991ea32fe6": "17ad117e63beef70860b7bab3d21819a",
".git/objects/13/392e1dda03481bfbc4e69fe3573386f154f486": "dc061569a78790d1978ba821b527f561",
".git/objects/13/6ba24082101a00d99ba52167abcff402e586f4": "a1f0b95db5ef6a9fea465924a578c4c8",
".git/objects/15/c0305ef8431fb9f56a719f9a0850b74168532c": "3d61eb4eca042ffabd8286487a1dce19",
".git/objects/17/9af7fc3b242454276ce2a1982f6a5fcdddaebe": "68303f9ffb4ed4c7a5ca5e23cda86baa",
".git/objects/1a/9a3ed3fb42865452669e6f7863c7892ce9ff9a": "57420d3b3caa4fdad55e35bc1b70ed01",
".git/objects/1e/3f24a23cd279e4cbd591f28b61fdeabfcc961b": "6b10d2c41745305a2737584c73fb26f1",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/48ad09de6ed7f60c5d4f162788a0e8411e41b6": "f111868d8c9fd324b67f18075b4c74ce",
".git/objects/24/908a6ca6d661432ee1fd7cc7b0b2ce0f5538e9": "6e81edf4b2bf779d570b5b8e1c442278",
".git/objects/24/a0aec27b4a6bf88d694b7b8c14db9163f72ab9": "3576dd25155b0bbb614e32acf4bb4331",
".git/objects/26/6369945e253ae077047c9210652d50fbd9e62e": "44df4903619fd1745664ca1e2b10f17d",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/a39f8e6d7a164eea1dcc618f931b7b362559a1": "1ff2fb494b38ced559dfcda3b45b049a",
".git/objects/30/c1b02237c33b7220d86d768a8d6fab8108aa28": "5ca5ceca02d6500b6b708207d484e5bf",
".git/objects/34/603df07d2d84019208cbf4044e13f9149c0c9f": "edcf1868fbe565f0257ebceb0a7d7a86",
".git/objects/3b/b6a910f8e5d8de36fb0bbdcc48bd0a8e034ce9": "587a091122c48dca82b0880a7c9aeee1",
".git/objects/3c/db62ff3d4faa82d5de85e247e2489c60c82ae6": "b84480b54dd192a33ced032d1f403474",
".git/objects/3e/620898780c0d221f930d2a5fcba0a0ffd6c7aa": "bba8ed8d73045b22afe094ca4ba35b42",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/932a8972fced3eedded33539bf25dd3e1d0484": "efefb3af532a9e945cbd5a8795706e16",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/92a4e31bd6bd65e6f54b62c7fe7e42f3e303fd": "12afea873f0b968837f51755fc868f4a",
".git/objects/48/934fda72234b8aa098b9a1fcf202611eb945b7": "ecc2938751fa60d85b8bf167b5831ef1",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/a0e586caa891d04a955f7729b5a2c81e6b5f9b": "4f3df61df75a2aa200cc70d04bd562d9",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/54/ed46f4003806e1cf9b12c031768f07395b874d": "dbffeae58fdf9d428e7a0935ac57475a",
".git/objects/56/c10a3e2a878f3d2c46a44da1fac9f8394b9cbc": "17fcc338ad1bf2539e61cd585554de01",
".git/objects/57/88fd58ff5b9c6f54e1aaa4d9889381dac9c287": "7d7c3095fcaed17ee5d9e150f8528700",
".git/objects/5c/3ad01b6787efa185d0c05c63e3aa447b63b2ac": "1ecf7ba2d0f0c17fd4bd070e91694f79",
".git/objects/5c/f8522811bb22b1fc9c8935fc20ede2e038d953": "7b7550d67f46d264a594010a922451fa",
".git/objects/60/0b2a1860403f6b5ce7f2e05f6b1595442f070a": "67a066ec0e346c3b1731454bac5da512",
".git/objects/64/ecf39ae095c6f660273202640ddc7504a464c7": "b7311454407c5465296222578063edb5",
".git/objects/65/9c168de863b7fbb9a9a80b5376bc3571914ef8": "0a60f561b787bb7c05acd83ac8768b5a",
".git/objects/66/50a8ae46e755fabb0caed98c90c564b3a1dbaa": "8359f90e8c500865412a707286e2d519",
".git/objects/68/139e5ee129f48d5da95448ba43187dc81f52b0": "223a5c353bceb3199939ade8dc2e355e",
".git/objects/6c/9f08f4e7ed3fb761ac12cb29c5cf0b913f42ff": "c6bf38ac308a4a8b96de74b048a2c8c9",
".git/objects/6f/01f4bc7348373d05d675e9f5feae7832f1e9c4": "6dbbf4a1931e3c3ae679911dfa54f627",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/476e309a3b4838e6708eec65c144776975c7f5": "6831081913968896b485a56485fb68c5",
".git/objects/7f/d900ab918e12dc2cd4e34900a74d8bdc6ecb04": "78dbcea39135356cfac57dfd4793d0ca",
".git/objects/87/3b2a1b2f2a5b4317e8f6461613f702b73869d3": "02181dda26e3bbe17648e3d10b57fa8b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7ed1f56533966b2c99a458096b1bc57441c573": "8cf61a0340c7db5ab62fa155a0911c6d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/216a400fe274de715a85655ca7c7e49eb90274": "a1d19175d8565b230222ee48ee1491ef",
".git/objects/8d/6c3aae4f2467d434a89e075cde8c07f5fa6c69": "792f3a1de3562b1b7c7f0cf9fd55a00d",
".git/objects/8f/4526d8b67539741319512faeb09f3ac50eb071": "590083330de0f0ab7f88b1fe2ce9ee59",
".git/objects/91/0dc12045f9b194604046e43c1191b0ea3bbf1d": "2f2d1817a23acb6021e2888a9e9c21ac",
".git/objects/95/16d3aa47e55c12a302bd02299de3d7dd4e5682": "cf3a7cf5de3331879cd1617674271cf0",
".git/objects/95/4f0ac43d16af85266a324d647a7b96e3b2bb7a": "9cd50412b28b448cacc90540a72617b7",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/5548be71157a708ae4a887af262ad77519e7e5": "04ac2f4ba48a22900da35f5cbd613655",
".git/objects/9d/a87a4816f1e415f11e5c60358eee70cf41a2a1": "36b6a45c1324074e76b670fa832a09f0",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a0/dab81f82928796d7cf8b2072c7008c8fe712f9": "260dc0233bb04cbe4fc9b36c48181686",
".git/objects/a2/e8312fdd8bcf528a5857c13eec9469c49b0eb7": "d44fbca6f5afab4c529b1e9756b4c61d",
".git/objects/a5/044ceaab7e1cec395aad21b69b8d69a1f28401": "c219691215bea5c8851a936f35e31a15",
".git/objects/a6/2d9a958f1cb49e4c59f92dcf23e51c6821fa7c": "aa300a4697b63effac54506956bb272f",
".git/objects/a9/c817a7347b22452bfffb53e7c43f2e11eda763": "c40a46d4ecd41430773697f510b7ab4c",
".git/objects/ab/2703eededc281cbbb3b2690243525ebc3a04e9": "71e4a752801947c2972a08599453c109",
".git/objects/ab/e5b2c0faedf3887806908648b2974b3754f69f": "3da32104a79239928d277be0bd7c4c33",
".git/objects/ac/b0d6c1da097e630e323801c344ebf1eb673ac2": "24b2fe5ea1cea29a0b8bd86d49bb9811",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/b9b62f1243001ec4ffc5a7beed3f62f00d0a6c": "891205d592045293dbc00ed23a322fed",
".git/objects/ae/6102e352d92e1b9b59f3c27e21527f0a3acc6e": "0b09ba253fd3bdef3b7151f8bf9875c3",
".git/objects/ae/800e237230d74f51cb0d10fbe3455716d17d29": "312b5043b76ac5e6c929fdb2cf4018d5",
".git/objects/ae/897e7d5b9817836e8d3c83d1e3ee9815cfa424": "a8efd8993ff53109b08f0a1cc08b9251",
".git/objects/af/5cbdb8ea9b07fbd90630db929927dcd738ef05": "3fcbae39441fd846b5ee15271c0ffa98",
".git/objects/b0/60675602ead61c71baf9111cd291fe8717cdab": "b2f8d1fa37695bc7cca92791d279c66c",
".git/objects/b2/08f9428c57d2fc34e29f360ce2b5cd3c9a6a6c": "1e76b2bd0329d48112907fb53685eda8",
".git/objects/b4/3c99e8ab8e1db24617abe2dd8dc9eb60ee1718": "31665e39edcb57cb6ef5d0ae8392aa2f",
".git/objects/b5/9fa6e97690132236334460a7607bafc4ecf2e0": "9f7992bba799c323334476260da582e9",
".git/objects/b5/f291bf54ab2ac1601dabc4fda0ef2b32afdb33": "e09057f1d991a8c2390be0d5af248499",
".git/objects/b6/874c55c04d684e6824e8123f62eaca97683de8": "0ff53d692fa1ea73afef0ac66fb60b0e",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d5fd4494b21a6d83706781d74f20181ad77c13": "dfa64819ee50ba0ab92579422944bdec",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fe07397d70792cab41032596fdc5a579221abb": "b9c01032f877087af38207141600e78a",
".git/objects/bc/f21082cadde498e3ec348ff832c21cc5c816f4": "aa270d6b56d873ceb973074c6b4f906f",
".git/objects/bd/0bc96f62b37e6f35d739942f8e1e91c6913a05": "986fd60f120c87f4916a298029a872fd",
".git/objects/be/dfbf77198e79f576e0b830704b315181ab3b00": "158f4af1314cc39ef4ca99f1c3f6b7e4",
".git/objects/c1/61fd9af47addad1146497ac3141a706ab2d84e": "e010d0458ca217ecfb5fbccc187af13c",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/178317fbb14ec2dda80c9d0008fd5b78b0868d": "59ae7681dfa5e2b2df802bb91382b842",
".git/objects/c8/760e6ac802a48c5d2819a5edb7561382fa52e3": "b65b48c082772189df9d3a343a125dae",
".git/objects/c9/4a6ed98b4bac9b4bb16d83979098e8bdbe566a": "1c3912040bf4928c57d9a87d29a7c01c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/6a1c81eb9e3d86e34835d312654102f5772070": "d92a95650170b29dbec549f20126fd7d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f53e715237234719456ee90037beff23487218": "2505e42b1dee3b20fe98756f8b25b4f4",
".git/objects/d8/993bbe819762a21ad0d8e2208e5ff7c5c5ab66": "7737d53c7a4a795a88269e3319bcb351",
".git/objects/dd/9349c4bd37a7b24a900dd83d527feed387b1a8": "ebf46b95eee9b3f6eebfd69b69462a92",
".git/objects/df/0ce62514d65628cfc159dfb4d2eeccf7aedc40": "7fada9abef2032b3bcf122d817e963c7",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/a6113610d0429804dedf7bb32ce17ad1a1a8de": "8288748d41b6512903a08e36ff19a036",
".git/objects/e5/c6aa42df90a10a6e7397aac25003d0ae22740e": "fe8b17c2d7dca3adfb158c9a5c3c1961",
".git/objects/eb/150966767498a2c5ad953a907e5b3868dd8965": "1ad9a63904acb67eab76b8518a36c59e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9da02fa5041d08973fec11a8299a7f1ed2f692": "8893665bcd42ddd1c15587024973cccb",
".git/objects/eb/f60583c8b758bc410740b4d8c4de0eb063fbcd": "09a18536f269b7b3d76853ea5853d686",
".git/objects/ec/68f61a4dc1e928b22d4c0ab739d5ef6408f389": "e570f09602bed0864a00ec5baa0a8c0d",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/3c8f4ea9cc45627e01740364cb0e40f6a05a7d": "349b2ba752a17241e0467dad64c26c67",
".git/objects/f0/40c648a12a49f525ea586a7fec13e49227d4b7": "1379ee80ae50a118367f48a16e3cf9e0",
".git/objects/f0/704cafa71b9254eb418d7adc6fec26d487b844": "0ccff1a54abb44fcad0c6a393a0fb815",
".git/objects/f0/c6461b7612337823fb68ee4057039b6545fb7a": "40160fd018ed2ce440aafd17b6e82742",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/631027c0a3d516d7ed735da00a9ad0f32768fb": "09cfad8456b5332f6ffbb8d6331eb5cf",
".git/objects/f7/b397e558eb22344861d1c624522e9de5f1bd0c": "01d4673ab7aba52ae8faa6b8334a5a15",
".git/objects/f9/188de491081f1a7c8f87dad6685f7e3431cdd2": "52bf0d22e0cc79ddc1bb525304d73e66",
".git/objects/fb/6305d2ef948c39d7307bbe5a90b86d5a4ec88c": "5e458e9fea961be4356b039eb0ea9c13",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/cbdcc1e877ca72d9422622147ea6ca3ef46e60": "d39bf59e96b3ea7823dc9d374a75b5d3",
".git/objects/fe/f803e694280aac34692de89746da0c473c507b": "b406e7566f3d8b7a57478238aa52b145",
".git/objects/ff/2b7db1646e6636bacc689e1b35b453c90d5622": "fe0cba3ccdbc7e03899d93c5044f583a",
".git/ORIG_HEAD": "bfd39f2cb55e0542b211c8fe84d7ee9c",
".git/refs/heads/main": "750784d2bf0afb7ff5d11eb3b5528c88",
".git/refs/remotes/origin/main": "750784d2bf0afb7ff5d11eb3b5528c88",
"assets/AssetManifest.bin": "ea4da80fc9d4500a70e887dc3d2821bf",
"assets/AssetManifest.bin.json": "91fc84bb816300f07be9f0d30b56e703",
"assets/AssetManifest.json": "79ea6db952ac747a4c6dde19cd4144ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/anim/hero-pro.atlas": "b1327fb842726a97579ead6cebd939d4",
"assets/lib/anim/hero-pro.png": "843ce0424d0d673b606f78705e62c254",
"assets/lib/anim/hero-pro.skel": "76db9d116f739a3d94a5df3a52f2dcae",
"assets/lib/img/altar.png": "8ad9c9f7b561ee16309ba08c2bc2ee37",
"assets/lib/img/BB1.png": "0846211773f0dd09ddf4e30874158ec8",
"assets/lib/img/BB2.png": "e9cfd446beb570bb1460555bc4151376",
"assets/lib/img/BB3.png": "954cfe3c61e3cf14314f6554bdd58459",
"assets/lib/img/BB4.png": "ab984b387641603bbda22eb507eaa1cd",
"assets/lib/img/BB5.png": "5791fde3af0ed1249fb9742a08e3a187",
"assets/lib/img/Cartifacts.png": "57367d8c83f4c399ceb67e93d9a0f54f",
"assets/lib/img/Cgems.png": "7acbf01ef046ce473799956c902053ca",
"assets/lib/img/Cgold.png": "0c778b64d4aa3631804f56615d43bdad",
"assets/lib/img/Cpotions.png": "5fce57f4feb342f153f95d212a70b056",
"assets/lib/img/game_bg%2520-%2520Copie.png": "3c4d079660a7952c91dfd18194dd34ec",
"assets/lib/img/game_bg.png": "93eb58498ea8709eb291b7556704616f",
"assets/lib/img/player_card_bg.png": "a7d264bfdfb13fbe49e950e4cbe0169f",
"assets/lib/img/profile_avatar.png": "1708a82b4d0a448c7f3449dde65d27df",
"assets/lib/img/profile_avatar2.png": "636b108113075bcc4146eab6fc126d0c",
"assets/lib/img/profile_avatar3.png": "2b4835362edf4cd30d84bc86b9b2b206",
"assets/lib/img/splash.png": "6c2f3bc0f74015aed80511290b4a2ac5",
"assets/NOTICES": "b65939f8d858f9b6a8bd5c1388d1417f",
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
"flutter_bootstrap.js": "b8240aa390b588bebdb1fce6b0eb31d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "194fc6c5d6dff08d7cfbe7f6bfff2e9c",
"/": "194fc6c5d6dff08d7cfbe7f6bfff2e9c",
"main.dart.js": "65d9ea97078a31e952b9b6c4243608f6",
"manifest.json": "829c0ad170e501a30061a5bb88af300f",
"splash.jpg": "3431200f8af4076dec0e44fab90a65ef",
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
