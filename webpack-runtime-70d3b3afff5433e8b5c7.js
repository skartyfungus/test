!function(){"use strict";var e,t,n,r,o,a,i,u={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var n=c[e]={exports:{}};return u[e](n,n.exports,f),n.exports}f.m=u,e=[],f.O=function(t,n,r,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<a&&(a=o));i&&(e.splice(c--,1),t=r())}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},f.d(o,a),o},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return({167:"b10be32f16bc7dadd09d7ee4d0efeb587c798e67",288:"component---cache-plasmic-components-pages-pricing-tsx",300:"11a94a3e73140724a8de4b52d94986fe0f3aacd5",532:"styles",617:"component---src-pages-page-2-js",678:"component---src-pages-index-js",804:"component---cache-plasmic-components-pages-features-tsx",883:"component---src-pages-404-js",970:"component---src-pages-using-typescript-tsx"}[e]||e)+"-"+{167:"8c6b9b7930bec99208d4",175:"f95d508753f99439a669",231:"b2d35ff9bb1952aa22d1",288:"5b02326e1ca6a9c2e117",300:"23d0362a67b03f928d53",470:"3a755f9f93f3e219fc65",532:"ed67d1a2adbb004630a0",617:"cc474c12301b61c144f1",678:"fab7b66eefb28982c461",804:"57e8d7a1e147b9bcaebe",883:"614c237d7296d0d174a8",970:"127fa5e1e20f779b80d7"}[e]+".js"},f.miniCssF=function(e){return"styles.05dce36b967c3df3cea4.css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-default:",f.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var i,u;if(void 0!==n)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){i=d;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var l=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),u&&document.head.appendChild(i)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",a=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var i;if((o=(i=a[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,o.parentNode.removeChild(o),r(c)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},i={658:0},f.f.miniCss=function(e,t){i[e]?t.push(i[e]):0!==i[e]&&{532:1}[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))},function(){var e={658:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=f.p+f.u(t),i=new Error;f.l(a,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],u=n[2],c=0;for(r in i)f.o(i,r)&&(f.m[r]=i[r]);if(u)var s=u(f);for(t&&t(n);c<a.length;c++)o=a[c],f.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0;return f.O(s)},n=self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-70d3b3afff5433e8b5c7.js.map