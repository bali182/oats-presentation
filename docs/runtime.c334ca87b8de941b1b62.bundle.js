(()=>{"use strict";var e,t,r,n,o,a,i,f={},l={};function d(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return f[e].call(r.exports,r,r.exports,d),r.exports}d.m=f,e=[],d.O=(t,r,n,o)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,n,o]=e[c],i=!0,f=0;f<r.length;f++)(!1&o||a>=o)&&Object.keys(d.O).every((e=>d.O[e](r[f])))?r.splice(f--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,n,o]},d.F={},d.E=e=>{Object.keys(d.F).map((t=>{d.F[t](e)}))},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,d.d(o,a),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+"."+{209:"ba132431c905e98d5d9f",352:"7c80be8f8a3bfef2ceee",568:"e1b86490bc4c6b2b8618",582:"5d39011c495783e1b53b",626:"3c0a523e249cea50d57f",846:"8473781bd89f0b3523ff",869:"f169cd2604ffac270572",901:"9a08d4b6442e3f93846d",921:"c96adf4b9bf6fc150f09"}[e]+".bundle.js",d.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"70d7acc73327fdf79885",209:"ba132431c905e98d5d9f",352:"7c80be8f8a3bfef2ceee",626:"3c0a523e249cea50d57f",736:"272ec7adc485ea3e7310",846:"8473781bd89f0b3523ff"}[e]+".css"),d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="oats-presentation:",d.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var i,f;if(void 0!==r)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var s=l[c];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){i=s;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",o+r),i.src=e),n[e]=[t];var u=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),f&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",a=e=>new Promise(((t,r)=>{var n=d.miniCssF(e),o=d.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===t)return i}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=f,o.parentNode.removeChild(o),n(l)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),i={666:0},d.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{209:1,352:1,626:1,846:1}[e]&&t.push(i[e]=a(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={666:0};d.f.j=(t,r)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626|666)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=d.p+d.u(t),i=new Error;d.l(a,(r=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+t,t)}},d.F.j=t=>{if(!(d.o(e,t)&&void 0!==e[t]||/^(209|626|666)$/.test(t))){e[t]=null;var r=document.createElement("link");d.nc&&r.setAttribute("nonce",d.nc),r.rel="prefetch",r.as="script",r.href=d.p+d.u(t),document.head.appendChild(r)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,i,f]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in i)d.o(i,n)&&(d.m[n]=i[n]);if(f)var c=f(d)}for(t&&t(r);l<a.length;l++)o=a[l],d.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0;return d.O(c)},r=self.webpackChunkoats_presentation=self.webpackChunkoats_presentation||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();