"use strict";var precacheConfig=[["/masters-thesis/index.html","0bbdada383302920a8bfbf4c4ff65ca8"],["/masters-thesis/static/css/main.6fa08537.css","65fea57645037ff62ed2077a00476156"],["/masters-thesis/static/js/main.7cf5a0a5.js","8f47683c4993a883ce7c3f5f913a2083"],["/masters-thesis/static/media/back.61714fb5.png","61714fb502bb7b888f41ff5d30e0566d"],["/masters-thesis/static/media/cardPlace1.a400b363.wav","a400b3638f88f405845b3bde25f9a698"],["/masters-thesis/static/media/cardPlace2.efcc96dd.wav","efcc96dd968c4c2be3e4fe2f4f3e009b"],["/masters-thesis/static/media/cardSlide1.a3cb8057.wav","a3cb8057d5bbd5e36130751cc470bf76"],["/masters-thesis/static/media/cardSlide2.67ef8302.wav","67ef8302dc5a25c1d2ae6d0300320e92"],["/masters-thesis/static/media/cardSlide3.5c60befc.wav","5c60befc274c59ea0e67b530265ca13c"],["/masters-thesis/static/media/cardSlide4.243348df.wav","243348df5fa861cee0c63fbd09bb8956"],["/masters-thesis/static/media/cardSlide5.17abb0d6.wav","17abb0d6eabba97170e453bcd522e419"],["/masters-thesis/static/media/cardSlide6.a2c81d49.wav","a2c81d49703830a1fab9d1f02dfa1470"],["/masters-thesis/static/media/cardSlide7.6eed7e60.wav","6eed7e6073b8e190789ddd5587cb0b58"],["/masters-thesis/static/media/cardSlide8.56a86809.wav","56a868099bc2f5b772876d760d3bbf8e"],["/masters-thesis/static/media/chipLay.08279e60.wav","08279e60b6fcb20a74e521720d1da823"],["/masters-thesis/static/media/data.1c4a0917.csv","1c4a0917810ce6f9af5e9622c5c3c347"],["/masters-thesis/static/media/data2.8095bd77.csv","8095bd77c06a99e6e128ed2110340d02"],["/masters-thesis/static/media/data3.cec07dbd.csv","cec07dbd628217d705c2adec1e1ca579"],["/masters-thesis/static/media/delete.ebfb29d8.png","ebfb29d8fb1e3d41e6839f0a47458e74"],["/masters-thesis/static/media/info-symbol-vector-graphics.5ad3c54d.png","5ad3c54dcba2962808a0a4ef52c10d02"],["/masters-thesis/static/media/loadingsome.8479a67a.gif","8479a67a55c00411cc6fa725055ed3d1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var r=new URL(e);return s&&r.pathname.match(s)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),r=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),s="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,s),t=urlsToCacheKeys.has(a));var r="/masters-thesis/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});