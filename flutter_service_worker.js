'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ccd98a73bbdb590a98651ffbb9d5d083",
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
".git/index": "664f34cbd495f93674d5ed7a6a6fdea8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe14f4c8d523aad47bd09031af7620f8",
".git/logs/refs/heads/main": "dcb42998ba32fa43eca49b38861439f0",
".git/logs/refs/remotes/origin/main": "5ca49687a4d47438c6326013f4ec4c51",
".git/objects/00/0bd6e5d47683ad4674167b3463f731d0a34010": "f41a5ca7a34912ffb40723aca4766714",
".git/objects/00/751369d91f3ee2df336f54ea5fe0fc89c026cf": "c75afbf59647eb07c3da63f255192c84",
".git/objects/00/8d59b968a3b27924fd00d230dc9b23a0d23abd": "e035af6c9d5e62214081040c927a5609",
".git/objects/01/bfd5c6e8c274e27d37030144f34eea906c1003": "0428bf266ef8f1fe9f9d14daeaa40682",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/285143c6fdabfbb06aa48684880af1e83f7079": "23bc1ed484e664b74f043e32230cdf87",
".git/objects/03/8e2a7b06f8702aac024c3eb29f0c1f58103d57": "51462eca5d2c321a4c3be7a0fc984661",
".git/objects/04/0c03dc1dee77fbe1b4a835eee62b211c80a02b": "329478eb885de5cb66bc4a1e9f2234f1",
".git/objects/05/7a9360c4c8796a7ae9b9e551df3a13aa199a83": "5d8477cb59bfc9f92769cdd9cea3b413",
".git/objects/06/5367a6885b4f125ebed1a206e19998a95f5c46": "3b305ec16b67424b853fa0ee912382fb",
".git/objects/08/324949db0ab84981565cd6875473b965eb986b": "bdd5e8dc8470ab5446f0d544908d0db1",
".git/objects/09/06758e4a6b371766321eec8ac09aafb01d7bfc": "12c49afdab4a3b1579005313ac8204a0",
".git/objects/0a/3070a4c2eda06e405ad679eb63076df4f499c2": "23a6d736c3eced374493c09b6ff38915",
".git/objects/0c/f39ef969df8d7659b8d84bda4b6daf2784717a": "4bafca6e28c4a64dddcca546ce40c7df",
".git/objects/0d/6aeb73b782a24bd4aaa053f1cb1966515e5aa9": "ec97e5e3282a58aedb0cdab6094b8bc8",
".git/objects/0d/86bc093420e84bf5d66e11d5ef4f9a92eeb890": "daa2d2fb3bc434bf63af8115032861d2",
".git/objects/0d/df0ec50a90ff6b43aa044f7a6818f818509594": "d9a8495a42d719b670d669fcf0565d65",
".git/objects/0e/e93a664b8871ffc23d717c998c03ca40368cc1": "a33daedbfa7da11f9e5f976318d49201",
".git/objects/0f/5b0e60cd71a05812e08aad0f51ca991ea32fe6": "17ad117e63beef70860b7bab3d21819a",
".git/objects/13/392e1dda03481bfbc4e69fe3573386f154f486": "dc061569a78790d1978ba821b527f561",
".git/objects/13/6ba24082101a00d99ba52167abcff402e586f4": "a1f0b95db5ef6a9fea465924a578c4c8",
".git/objects/13/907513c9e059fbf0142d352651d8d99b658e67": "d3c025990a463fb431b25c06b287fe79",
".git/objects/14/ba60f27c4c4e93cc42510297aaaa63b451be15": "07563acebb69dcdbf950f4666178c5bc",
".git/objects/15/c0305ef8431fb9f56a719f9a0850b74168532c": "3d61eb4eca042ffabd8286487a1dce19",
".git/objects/16/3d6eeb4f627ebea89cf793c882e77695a6bdda": "95b98ba10d31bdf416114276a4ec0c1f",
".git/objects/17/9af7fc3b242454276ce2a1982f6a5fcdddaebe": "68303f9ffb4ed4c7a5ca5e23cda86baa",
".git/objects/1a/4d888e10bb7e85a08c3257c630638f35b657da": "25d49ea88523669922d52181150caab4",
".git/objects/1a/9a3ed3fb42865452669e6f7863c7892ce9ff9a": "57420d3b3caa4fdad55e35bc1b70ed01",
".git/objects/1e/3f24a23cd279e4cbd591f28b61fdeabfcc961b": "6b10d2c41745305a2737584c73fb26f1",
".git/objects/1f/17f5b9d2ba03752cec43e952e5b790dbdebb96": "8c5956ecc83f635ffec06d4cc84108db",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/48ad09de6ed7f60c5d4f162788a0e8411e41b6": "f111868d8c9fd324b67f18075b4c74ce",
".git/objects/20/a9d519d9195118dc9614d2f9929ff6be510692": "ce432cbdc8cff5ab665afef0ffa8fac6",
".git/objects/21/6078861ddc6212483cd1399b87a6f8f611650f": "e26707944350da8936ad2723f03acc97",
".git/objects/24/908a6ca6d661432ee1fd7cc7b0b2ce0f5538e9": "6e81edf4b2bf779d570b5b8e1c442278",
".git/objects/24/a0aec27b4a6bf88d694b7b8c14db9163f72ab9": "3576dd25155b0bbb614e32acf4bb4331",
".git/objects/24/e67d320894e5548626b308d6e8b00295d928ec": "f64f8035f5eabd50551528327a6d349c",
".git/objects/26/51f44f7eba2fe41fedafb9aa82c7f0b06db66b": "11bd3c888dc564c2f255a22afa658001",
".git/objects/26/6369945e253ae077047c9210652d50fbd9e62e": "44df4903619fd1745664ca1e2b10f17d",
".git/objects/29/270c5ef6af43eec67d0aa9b42460ffd9e62de6": "31c8b4bd7db24cbad14b754b12b1b5ee",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/29d9b3257cd5be61cedebad47bb0bb79a17580": "2bc8ca5cdbcdfde6ee2d1f38c74e8e77",
".git/objects/2c/1d948668b52b8f37fe9b19d79dc13776b5819a": "2b144fb847618c73809f7dd5b0f7bb09",
".git/objects/2d/a39f8e6d7a164eea1dcc618f931b7b362559a1": "1ff2fb494b38ced559dfcda3b45b049a",
".git/objects/2e/ffc6fe7ad62bff38d9c23e816af5d26b443809": "dc9630f5635ad7545b200ae1106d9322",
".git/objects/2f/89053108077c4e42908c17f8a42c8c109a5b2e": "e493ca244b1dc1f51e7ada89671ac1f4",
".git/objects/30/90023ef9b3efe7dd13f2b3f9aa3ef000ec815f": "0d02299ce6c0dca35b3c5cfacec41064",
".git/objects/30/c1b02237c33b7220d86d768a8d6fab8108aa28": "5ca5ceca02d6500b6b708207d484e5bf",
".git/objects/31/0a89093a3d73fea97eb5e389c609d03886b620": "82243b1d2c506fa93c866032c61b5d18",
".git/objects/33/03dff9566771b11e8009c505e0381398db4069": "7e5480ba9dd8548b22314deec8e1cc9e",
".git/objects/34/603df07d2d84019208cbf4044e13f9149c0c9f": "edcf1868fbe565f0257ebceb0a7d7a86",
".git/objects/35/982b0a0b405039a9b29dba48626edba97a5af1": "039fc1396887088fc9d3c70a808af1ec",
".git/objects/36/a25de735b8b6fb0f4cf25c1674c0d9eac9a676": "147cddee626e87e0489b8b9b3aff5c46",
".git/objects/38/27128dcf401809d280f39fd1132079c866e41e": "c0e9e43e6f8b9f9e50878e496765b1a9",
".git/objects/39/7a09b49ebc0e38c776abb1a9af8bed267527e0": "d5e46bd482cd08ab935d7a96a96de0a3",
".git/objects/3b/b6a910f8e5d8de36fb0bbdcc48bd0a8e034ce9": "587a091122c48dca82b0880a7c9aeee1",
".git/objects/3b/db8021da242fcc1c128ad016bef150f8af0a7f": "32f197553f7c998944b045884a82e247",
".git/objects/3c/db62ff3d4faa82d5de85e247e2489c60c82ae6": "b84480b54dd192a33ced032d1f403474",
".git/objects/3d/c76839fd38185f0a0cb89797667530094a1801": "d100e2e64f3652019d34cef60c61fb2e",
".git/objects/3e/620898780c0d221f930d2a5fcba0a0ffd6c7aa": "bba8ed8d73045b22afe094ca4ba35b42",
".git/objects/3f/0ec2b08629e2dbcd56f289c0b9aad2bef7d8fe": "70def827f77fed59f058231ec882e721",
".git/objects/3f/3017513d055015685eebf7053daefdca9ce8ac": "261408fd0d1dac2097a6f898025df4e0",
".git/objects/3f/8b3c449bb7ff5aa98e48d3440884579a34b0e7": "f3d33eacdc58ed2f40f66a2f7a80a8e3",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/5f850ca587e8f9bb1b22094048e044c9820725": "ecfcd7a70b1e14cec7062429c8a3b3d4",
".git/objects/42/c739b74a4ec7761028c667f4b05a72db40968e": "16f200b9acc438eedc7aaeba9b9190b4",
".git/objects/43/d431176833057d8ff9462ca19b407c0c39dfe3": "bfa4a1d2036366ab778f883c35f485bd",
".git/objects/45/096fc86ab0fd79f9efc5c405b8360a03513885": "495728520a168f84705a7990f8a89bc4",
".git/objects/45/932a8972fced3eedded33539bf25dd3e1d0484": "efefb3af532a9e945cbd5a8795706e16",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/92a4e31bd6bd65e6f54b62c7fe7e42f3e303fd": "12afea873f0b968837f51755fc868f4a",
".git/objects/46/e413a18edd894baba7760044e5b1fcd1b5104d": "3f088eb6bc175f214de5160f9b5e5bb8",
".git/objects/48/493cc0d70c5692324cc91e1c59875b1c824bdd": "4efda06e4e81be929ca4dc7bf1e336d4",
".git/objects/48/934fda72234b8aa098b9a1fcf202611eb945b7": "ecc2938751fa60d85b8bf167b5831ef1",
".git/objects/4d/093ffdc7838375cceace3ea04a2e2f39d3cdb6": "310a923efa9f5b96997524224892118b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/a0e586caa891d04a955f7729b5a2c81e6b5f9b": "4f3df61df75a2aa200cc70d04bd562d9",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/ab49247e1f60f1304139e78ff8e064e34f5cec": "dfc1ee67887e9e2c97a5fb7dce7f40af",
".git/objects/50/be4282c9d0d7512fb27a38ba16935b87539aef": "7b7d57e571cfd05e7811e53d42c50957",
".git/objects/53/92ae307bd5d87e1225df419bb1013113e95a30": "97f22a4a2360bf450c11667ed22dae11",
".git/objects/54/a65b71f89d9dc2f063173722eb9ca54222e0e4": "b3a6c171025a25fc069827f7c8e2682e",
".git/objects/54/ed46f4003806e1cf9b12c031768f07395b874d": "dbffeae58fdf9d428e7a0935ac57475a",
".git/objects/56/c10a3e2a878f3d2c46a44da1fac9f8394b9cbc": "17fcc338ad1bf2539e61cd585554de01",
".git/objects/56/c6c4fc299903fa44586a43b9c1c52456642f03": "51e13f7b1c2a54504f8ff282ba1b4aaf",
".git/objects/57/88fd58ff5b9c6f54e1aaa4d9889381dac9c287": "7d7c3095fcaed17ee5d9e150f8528700",
".git/objects/57/d9b32650f26c22164bc675f780dcf9979e90ff": "0112f783434c0a14663a9a908dabf39f",
".git/objects/58/512251c4a7f39593428a16e932aa00687b8d4a": "36c78186d328d72bae8d0f1eb423f40a",
".git/objects/5a/190eb066d6903a9de390aa2268bca6943f6156": "f0d4779d814de76dd7373e59c12f72be",
".git/objects/5b/b2e3eb11a036c968e8d3442fd21fc9277755fd": "f115cfe9c6288bd8f93ef962d0ef2f77",
".git/objects/5c/10e80cc973ab8233321eb22213178764cc90dd": "230781e2dde64427c279e33867726ed8",
".git/objects/5c/3ad01b6787efa185d0c05c63e3aa447b63b2ac": "1ecf7ba2d0f0c17fd4bd070e91694f79",
".git/objects/5c/a913ff40ca939f55772706b98a073c1d111965": "5adbd283ae4b697d5ae67d3f15f33bf2",
".git/objects/5c/f8522811bb22b1fc9c8935fc20ede2e038d953": "7b7550d67f46d264a594010a922451fa",
".git/objects/5e/0fae5b91545259fa6ff2eafdf871437b2bc963": "aafc2fc54f1d14eb5be2d8112e74da4d",
".git/objects/60/0b2a1860403f6b5ce7f2e05f6b1595442f070a": "67a066ec0e346c3b1731454bac5da512",
".git/objects/60/c6493b60ac8d5a99139d21fcfc679e6cdc0771": "09d836247e6d0c335bf5ec7e36aeec37",
".git/objects/62/e257655020ec6a8769eddcb1c1108c9d75da27": "40823703d7a849979a5b42663efda157",
".git/objects/63/60cae49f100044312b7738398fd5a3fb6eae21": "5d4314a5258fdc6b11fc2886f6859209",
".git/objects/64/ecf39ae095c6f660273202640ddc7504a464c7": "b7311454407c5465296222578063edb5",
".git/objects/65/9c168de863b7fbb9a9a80b5376bc3571914ef8": "0a60f561b787bb7c05acd83ac8768b5a",
".git/objects/66/50a8ae46e755fabb0caed98c90c564b3a1dbaa": "8359f90e8c500865412a707286e2d519",
".git/objects/66/56dbaeb76a27c83fb57e469f530cb5a0fd27fb": "c08478f2201bcac4877e47e3acd6f5c7",
".git/objects/68/139e5ee129f48d5da95448ba43187dc81f52b0": "223a5c353bceb3199939ade8dc2e355e",
".git/objects/6a/d956839e9b0bb325f2bcba22da8d6eb253ec73": "633d03fde869f0cc92d0c49ca7cafdc4",
".git/objects/6c/9f08f4e7ed3fb761ac12cb29c5cf0b913f42ff": "c6bf38ac308a4a8b96de74b048a2c8c9",
".git/objects/6c/d031c66e82de90d920e9529a69b632c7ff9f6a": "b88a9a57f882323143f317de5284732e",
".git/objects/6c/f749425b2ee0b5b0f14bd17e20b45018df3fa5": "6f3141bef603ba4a96e9fc7f14dbce83",
".git/objects/6f/01f4bc7348373d05d675e9f5feae7832f1e9c4": "6dbbf4a1931e3c3ae679911dfa54f627",
".git/objects/73/4fe1d5b1a83628f69a386e8079cbc0526dcc70": "b2eff7361225c5c4fb5df7019efd610d",
".git/objects/75/18d2a295e0bcea97bb383e836ab9c47b8e40f6": "b8c72ffeddb54e07f92078a42aab35fd",
".git/objects/75/69160b313d6523955d74fb907ba89bd6fa5d21": "6d8de748f809f4a3c10a1dfe19d30b5d",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/77/4ff2030238ad8602347b79ce44947e62e4dfcd": "a45c75587971739ef4a1c60c445f5323",
".git/objects/77/902acea040a31efcdc000bf8ee6d1145cc974d": "5c1c21653cea575f14d3856409c29c31",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/de2d8b6ceec0e7490b0c11bdee641affc68499": "ae8c87880a24e189d188e180cfaa475c",
".git/objects/7c/6dbaf00a4b9f22ab1e08217414dd2ed92c9b54": "174ddb26fc2ed504186962819c54e33c",
".git/objects/7d/476e309a3b4838e6708eec65c144776975c7f5": "6831081913968896b485a56485fb68c5",
".git/objects/7e/f5e28c59e06d1d9cb7e142daa845b17bb40e72": "09a952c137ed8e7c9e51603aa79b7e66",
".git/objects/7f/c9a524b34885c78f294ffe5d99323bc28d947e": "f2483172f53f2252dd1707059062cf3e",
".git/objects/7f/d900ab918e12dc2cd4e34900a74d8bdc6ecb04": "78dbcea39135356cfac57dfd4793d0ca",
".git/objects/81/096bf6b47898c36a6a90e8c416a7a5934f2365": "938311c2ebd188397aa47b475cd520c7",
".git/objects/85/a88d6844472f64c76853913bba9bb2b01ba12a": "b0884c8703e3bbd52f2d57edcfeba690",
".git/objects/87/0e8f661ed521900759b5c1e3eeaaa72df45ab7": "6b3f203ae1819a9f2f9aa3b4d2a4fe94",
".git/objects/87/3b2a1b2f2a5b4317e8f6461613f702b73869d3": "02181dda26e3bbe17648e3d10b57fa8b",
".git/objects/87/69d6e0334b7c29845eab58c4aac31ad3cecf77": "082c9eaa20e3d44b80885f29f4f12b6c",
".git/objects/88/8ffa0e9bfb5c0925e21cbdaff28d5978001279": "9323046b94ae7804fe6d1611a694d8ec",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f1396e0fc2b89416303c66b926191cf49491f1": "33d607d373ee23f3f164f5e2da3959d3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/7ed1f56533966b2c99a458096b1bc57441c573": "8cf61a0340c7db5ab62fa155a0911c6d",
".git/objects/8c/6f0d49a5c7da198333600f66abfff227b9069f": "7e265eca902f5d4387e1dbec584ae3da",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/216a400fe274de715a85655ca7c7e49eb90274": "a1d19175d8565b230222ee48ee1491ef",
".git/objects/8d/6c3aae4f2467d434a89e075cde8c07f5fa6c69": "792f3a1de3562b1b7c7f0cf9fd55a00d",
".git/objects/8f/4526d8b67539741319512faeb09f3ac50eb071": "590083330de0f0ab7f88b1fe2ce9ee59",
".git/objects/91/0dc12045f9b194604046e43c1191b0ea3bbf1d": "2f2d1817a23acb6021e2888a9e9c21ac",
".git/objects/93/10ae2bb68851eccb0b8b1b3460582e8d2987f1": "f709328fa7d2180e911507ad8d7a71f1",
".git/objects/95/16d3aa47e55c12a302bd02299de3d7dd4e5682": "cf3a7cf5de3331879cd1617674271cf0",
".git/objects/95/4f0ac43d16af85266a324d647a7b96e3b2bb7a": "9cd50412b28b448cacc90540a72617b7",
".git/objects/96/d770eedbcbeb340d88a21ebd9469371fd730c6": "09818fd7cfc04b78bc1ad6c5260375ce",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/5548be71157a708ae4a887af262ad77519e7e5": "04ac2f4ba48a22900da35f5cbd613655",
".git/objects/9d/76297e9247b145289e519c6d09c1d0c490ee6e": "460e8459d0951e06f4151bf44613ebec",
".git/objects/9d/a87a4816f1e415f11e5c60358eee70cf41a2a1": "36b6a45c1324074e76b670fa832a09f0",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/66df9c50a68798a7a41a5dad188e0c0e7aad69": "fd58c14199e944dd1292156ccb410b28",
".git/objects/a0/9bfe0f964fab3471fe33d1c4ca4390dae6eba0": "1b0d7ac5b2c87e71e4472ef54fa0f32c",
".git/objects/a0/dab81f82928796d7cf8b2072c7008c8fe712f9": "260dc0233bb04cbe4fc9b36c48181686",
".git/objects/a2/e8312fdd8bcf528a5857c13eec9469c49b0eb7": "d44fbca6f5afab4c529b1e9756b4c61d",
".git/objects/a3/40a88c1e2f216cf4484fb673789716da0f4657": "21cb7c33ab79770f775a6176cad1f7a8",
".git/objects/a3/c9c6e049211717f90bef81e23ec12a237f44f1": "593dc5f0bf2f8f0e9b3bae7476f5166d",
".git/objects/a4/17d8debad224eac4db554be21dd52ba9a06d59": "d46dda16eda4b9ca4dabaad97c67e842",
".git/objects/a4/5b8ac1427d472c990f4b6f7dd3478b1cc565b5": "554ba41cf7540e86e1d5ad2cb46f0dd4",
".git/objects/a5/044ceaab7e1cec395aad21b69b8d69a1f28401": "c219691215bea5c8851a936f35e31a15",
".git/objects/a6/2d9a958f1cb49e4c59f92dcf23e51c6821fa7c": "aa300a4697b63effac54506956bb272f",
".git/objects/a6/5de3383954acfc5122be796379eb368d694c2e": "b0a773781058727f6a67c6c1f2107d58",
".git/objects/a6/897499dc8114cd5e8ec56651fb4150e86f02f1": "909a225b719c43a455c7753908872673",
".git/objects/a8/6288d33d778f45857368c6863abef85bf94c5b": "c1110078c52c0c0773c1178dcc1c2214",
".git/objects/a9/c817a7347b22452bfffb53e7c43f2e11eda763": "c40a46d4ecd41430773697f510b7ab4c",
".git/objects/aa/2b2fe7aefb1a4c3ecf2c9b387a3dffeb995a04": "53e621134e2bbe4213e8f1c93da8275a",
".git/objects/aa/e19a3332761a04f276874eb85e78a886a7c022": "06740428a2c758340013ace572d3e36b",
".git/objects/ab/2703eededc281cbbb3b2690243525ebc3a04e9": "71e4a752801947c2972a08599453c109",
".git/objects/ab/e5b2c0faedf3887806908648b2974b3754f69f": "3da32104a79239928d277be0bd7c4c33",
".git/objects/ac/b0d6c1da097e630e323801c344ebf1eb673ac2": "24b2fe5ea1cea29a0b8bd86d49bb9811",
".git/objects/ad/1dbd613c0d1173caa6e4b3c71309604a907fb6": "202d28dfa03f9814c8d3b5c3d8ee7e77",
".git/objects/ad/3dc30fff46da9814118aae4015bcef321948b9": "f64a8d007bfcbbab2616c1ca6411d1a7",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/84c4e6356a8a621c494bc79cdefe59503d0b77": "bb05f422b6037386ab2cd56aff964dd5",
".git/objects/ad/b9b62f1243001ec4ffc5a7beed3f62f00d0a6c": "891205d592045293dbc00ed23a322fed",
".git/objects/ae/6102e352d92e1b9b59f3c27e21527f0a3acc6e": "0b09ba253fd3bdef3b7151f8bf9875c3",
".git/objects/ae/800e237230d74f51cb0d10fbe3455716d17d29": "312b5043b76ac5e6c929fdb2cf4018d5",
".git/objects/ae/897e7d5b9817836e8d3c83d1e3ee9815cfa424": "a8efd8993ff53109b08f0a1cc08b9251",
".git/objects/af/5cbdb8ea9b07fbd90630db929927dcd738ef05": "3fcbae39441fd846b5ee15271c0ffa98",
".git/objects/b0/60675602ead61c71baf9111cd291fe8717cdab": "b2f8d1fa37695bc7cca92791d279c66c",
".git/objects/b0/b12ffddc9604b0ba519d2a9d446ce1fc9524be": "08d923436ed04bcf073a9c5c173ee33d",
".git/objects/b1/875664dbab51fed9e94aa4d9d13c5562f5ca71": "a722bfdadb1dd40751f443d6d2fd80dd",
".git/objects/b1/89079b01176fc5bf66f9ce6b689e4f7fc44359": "9e0eef3bbb049375f61309e98e3d7819",
".git/objects/b1/96b75d33c12fe27db9823cd14a5056095a4a88": "6a4199d947004e01cc38e4d4c5fcc53d",
".git/objects/b2/08f9428c57d2fc34e29f360ce2b5cd3c9a6a6c": "1e76b2bd0329d48112907fb53685eda8",
".git/objects/b2/52eddbf48e7004737c625b57c26f168fe28ef7": "c7195b391c90cca730789221a689657b",
".git/objects/b4/3c99e8ab8e1db24617abe2dd8dc9eb60ee1718": "31665e39edcb57cb6ef5d0ae8392aa2f",
".git/objects/b5/9fa6e97690132236334460a7607bafc4ecf2e0": "9f7992bba799c323334476260da582e9",
".git/objects/b5/f291bf54ab2ac1601dabc4fda0ef2b32afdb33": "e09057f1d991a8c2390be0d5af248499",
".git/objects/b6/874c55c04d684e6824e8123f62eaca97683de8": "0ff53d692fa1ea73afef0ac66fb60b0e",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d5fd4494b21a6d83706781d74f20181ad77c13": "dfa64819ee50ba0ab92579422944bdec",
".git/objects/b8/8619aeb955fcb71468bb248a00d400721fc727": "aa65bf86b2f52180854309f08783b32b",
".git/objects/b9/0320c42984b230c705f04cd92892fac2459246": "d28f853655891ea7e4af8e7ed677b660",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/2b4f026a1ad4068e8243c8800ca5475c02d1d9": "64c50e4699f54b6ec6f56d3f1d5de68d",
".git/objects/b9/fe07397d70792cab41032596fdc5a579221abb": "b9c01032f877087af38207141600e78a",
".git/objects/ba/6393b4bbb56a2e459df851c81bcd3383ba097e": "adc2861cc6d20d45f81ffa24713bc9b6",
".git/objects/bb/bc9f790881139f999ebdcc8b103c6184362c07": "0ea24cfcf98572cdf2d531f8b3274891",
".git/objects/bc/67062f492de734683af8c956355a9da95b0155": "beba97dfa8cf0915f73722a5f77499b7",
".git/objects/bc/f21082cadde498e3ec348ff832c21cc5c816f4": "aa270d6b56d873ceb973074c6b4f906f",
".git/objects/bd/0bc96f62b37e6f35d739942f8e1e91c6913a05": "986fd60f120c87f4916a298029a872fd",
".git/objects/be/1282c5d756afdf6c92ded44970c813abb3129a": "fd4633f5d3ea5beca811ec4f72b07219",
".git/objects/be/dfbf77198e79f576e0b830704b315181ab3b00": "158f4af1314cc39ef4ca99f1c3f6b7e4",
".git/objects/bf/a30d6745d4c327c518a3108c47464d130efee2": "93c25028054137f19085e689e8cf97b6",
".git/objects/c0/4c525dfa937232433e96bee11ac53b48a98f51": "89eb36c3b6c78620c72cbbc1efb8deb5",
".git/objects/c1/61fd9af47addad1146497ac3141a706ab2d84e": "e010d0458ca217ecfb5fbccc187af13c",
".git/objects/c1/782d56194d77589e0eb42fff87c916394c5343": "ba74f53d284e6761518ad6e5a7461df2",
".git/objects/c2/0b1ea934cba9905a23dcc5ca78a14f25d3da3c": "5a794d5d88ec9268338b2a553f250562",
".git/objects/c2/5ab460c012d62fc518133d3c935d929fdbecb4": "a3c7d2df92542120f548d67550bb7c0e",
".git/objects/c2/e4a5651325fa3cbb382d4944d97e5a688fdad2": "2c55e01c5df1ebecb64faa2e9d4ddb2c",
".git/objects/c3/f95793497d6debae9961a7289c933c2934a01e": "53a5619697e8179c9bba3c2dbb0fd8e4",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c5/70f746e4484ef58ed45e34f7e0498939b78537": "909c128b0ed46bcc5cbc153e9fd0d17e",
".git/objects/c7/5a114c13f3136c79fa25e6025987f2d023e039": "3080d51f7d021fbdca836f8e97eb19c2",
".git/objects/c7/d5d1c21b4f05445d502d80a457f77f3ac18d10": "d0504fb1561a7040b90709b3b71d56bf",
".git/objects/c8/178317fbb14ec2dda80c9d0008fd5b78b0868d": "59ae7681dfa5e2b2df802bb91382b842",
".git/objects/c8/760e6ac802a48c5d2819a5edb7561382fa52e3": "b65b48c082772189df9d3a343a125dae",
".git/objects/c8/99cc8b8e45431d392250a84d8ddd95ed7ea316": "c26aa7cdcbed743e82d6d4b66f4c79b5",
".git/objects/c9/4a6ed98b4bac9b4bb16d83979098e8bdbe566a": "1c3912040bf4928c57d9a87d29a7c01c",
".git/objects/c9/b957c0583a6f450a8ebd8efddf907ffc67c814": "17cda2b09bfb346a8632d19edd09d7ed",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cb/20a7b1f78d2758a5e8ab71a293264164c5c708": "a4965da1ab575aaab830477d21ebb8dd",
".git/objects/cb/6a1c81eb9e3d86e34835d312654102f5772070": "d92a95650170b29dbec549f20126fd7d",
".git/objects/cb/a88811fc977b261668ad5930242f3d86480477": "c5c3f6955f2936c6e76f06c53896249c",
".git/objects/d0/9227796e0ec351fb00dbd90294b32f80b497de": "c99ec344a76845f185883d01010a6170",
".git/objects/d1/42afd5060105e5dc13b4b205f619e584cc20c0": "7e0c8659c1ee069948d49d51a9d24be6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/72e11fd65d7c8ba46945a7cadf57b24fe787d3": "15fb0b655490a4fbc91b8ea717fcb43b",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/2043f87542bcd758df388a077bb4e8aff6bcc9": "90715141810430a5795e561dc036c898",
".git/objects/d6/28cfdbcbe283d23ae5659f1935b333d4889841": "c6d22e7536aac76a46253eeb05f4b00d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f53e715237234719456ee90037beff23487218": "2505e42b1dee3b20fe98756f8b25b4f4",
".git/objects/d8/993bbe819762a21ad0d8e2208e5ff7c5c5ab66": "7737d53c7a4a795a88269e3319bcb351",
".git/objects/d9/14d27db5b6a7a9607f75231d5f200115d704c8": "81c2df339f86906b3395380d76905b44",
".git/objects/dc/b103f5a70db96397e4fd21cc07aae6b6648210": "ce292655c673ffecef66b1d0ad4bfa80",
".git/objects/dd/9349c4bd37a7b24a900dd83d527feed387b1a8": "ebf46b95eee9b3f6eebfd69b69462a92",
".git/objects/df/0ce62514d65628cfc159dfb4d2eeccf7aedc40": "7fada9abef2032b3bcf122d817e963c7",
".git/objects/df/6bc0601946d75177c640a9d25cecdf9d74c194": "136a0a7f1140f00028c916d5a1ff0502",
".git/objects/e1/11eae9997b31223ff6bce50acd75e5b8ff9e27": "91d3c615ed1f4e48329ba2625d38d68e",
".git/objects/e1/9350e7ae34e37c60e0ce5b70d514aa82f76f7d": "45dc10d492f30340e8bac9eaad3d9715",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e3/f4917d9e43b780340268b75555d59aca8eb9a7": "d377e9d50a5f95654a9b6c98c6a8529d",
".git/objects/e5/a6113610d0429804dedf7bb32ce17ad1a1a8de": "8288748d41b6512903a08e36ff19a036",
".git/objects/e5/c6aa42df90a10a6e7397aac25003d0ae22740e": "fe8b17c2d7dca3adfb158c9a5c3c1961",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/559fbea5839ea636867999856cad4527f00737": "01a52fd2b3563c7bc586b2ff7b99d7dd",
".git/objects/e9/592b87f003e749c12ce876dd84cee17994e65c": "4a31c972ed475ee6c3005230dd224850",
".git/objects/ea/7f06077496724c30e090035b523ae93384dcb6": "a391e0e450e5071c17ab3c3331733049",
".git/objects/eb/12de586e19980e0c195a2961902fd4b9f5754c": "e2a1bc775828115fd41273e653bbe17b",
".git/objects/eb/150966767498a2c5ad953a907e5b3868dd8965": "1ad9a63904acb67eab76b8518a36c59e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9da02fa5041d08973fec11a8299a7f1ed2f692": "8893665bcd42ddd1c15587024973cccb",
".git/objects/eb/f60583c8b758bc410740b4d8c4de0eb063fbcd": "09a18536f269b7b3d76853ea5853d686",
".git/objects/ec/68f61a4dc1e928b22d4c0ab739d5ef6408f389": "e570f09602bed0864a00ec5baa0a8c0d",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ef/3c8f4ea9cc45627e01740364cb0e40f6a05a7d": "349b2ba752a17241e0467dad64c26c67",
".git/objects/ef/b743d7ea98ea57e99b0fa15e7e9e909b65dc06": "f5aadad1e1ca4d9fbd6bb6164e15616e",
".git/objects/f0/40c648a12a49f525ea586a7fec13e49227d4b7": "1379ee80ae50a118367f48a16e3cf9e0",
".git/objects/f0/704cafa71b9254eb418d7adc6fec26d487b844": "0ccff1a54abb44fcad0c6a393a0fb815",
".git/objects/f0/c6461b7612337823fb68ee4057039b6545fb7a": "40160fd018ed2ce440aafd17b6e82742",
".git/objects/f1/08cd478507da6bd3cad31c05a2d5c196aaac31": "b3ac187e894984bf592b1cd34d9e4f7c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/631027c0a3d516d7ed735da00a9ad0f32768fb": "09cfad8456b5332f6ffbb8d6331eb5cf",
".git/objects/f4/c1f87743f8e1d56342d3ed7020a9d9901e6ff0": "63b5236929dcec5e477f980f35285678",
".git/objects/f5/94271b24507c06e9a26e7e65374613a56749cc": "e439d73ec91eff1b36f1170f989623e4",
".git/objects/f7/8a28a01df5346a417907449fc9a474a579e7a6": "f8edbc8e74fcaf0cffff65e8a86c35c7",
".git/objects/f7/b397e558eb22344861d1c624522e9de5f1bd0c": "01d4673ab7aba52ae8faa6b8334a5a15",
".git/objects/f7/d406090b451749dcb6ddea295926a8ff0d8a7d": "0ace917c91c3e010f86b0ce2c6194bdc",
".git/objects/f7/f3affc3087df0b0f357a394347a36569d6d992": "cfce3ec77b4ff05ed5ef5685b884a348",
".git/objects/f9/188de491081f1a7c8f87dad6685f7e3431cdd2": "52bf0d22e0cc79ddc1bb525304d73e66",
".git/objects/fa/3ae72d8e5cd87d97ad64342237f45e74902ad5": "1b56366f4582595220f2f94fe42a40d2",
".git/objects/fb/6305d2ef948c39d7307bbe5a90b86d5a4ec88c": "5e458e9fea961be4356b039eb0ea9c13",
".git/objects/fd/7324f8a08f39b4d1b4839cd51230dd5ff69388": "d636864ad14dce2603b29afa926e71b9",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/830c690ec4aa14718be056b958b3abd7bf832d": "23a40d1b3e59eead0126f517606052d9",
".git/objects/fe/cbdcc1e877ca72d9422622147ea6ca3ef46e60": "d39bf59e96b3ea7823dc9d374a75b5d3",
".git/objects/fe/f803e694280aac34692de89746da0c473c507b": "b406e7566f3d8b7a57478238aa52b145",
".git/objects/ff/2b7db1646e6636bacc689e1b35b453c90d5622": "fe0cba3ccdbc7e03899d93c5044f583a",
".git/objects/ff/5b3624d214a2c0e4525a14d1b35dd4bfca2ae3": "2654117286afaacbabc604e5064abdd8",
".git/objects/ff/6964d3f5e0d54d86dfaf355f7648e60f57e320": "16ada92a063927f4e646829175fb14cb",
".git/ORIG_HEAD": "bfd39f2cb55e0542b211c8fe84d7ee9c",
".git/refs/heads/main": "fd021d477e708c42dc6ee56194acd407",
".git/refs/remotes/origin/main": "fd021d477e708c42dc6ee56194acd407",
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
"flutter_bootstrap.js": "14d25c489da814ca661b761f9fd931d7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "194fc6c5d6dff08d7cfbe7f6bfff2e9c",
"/": "194fc6c5d6dff08d7cfbe7f6bfff2e9c",
"main.dart.js": "9fb2a609e26532a8df2c7156ce95c7a6",
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
