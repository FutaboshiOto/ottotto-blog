(()=>{"use strict";var e,a,t,f,r,c={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var t=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=c,o.c=d,e=[],o.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var d=!0,b=0;b<t.length;b++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(d=!1,r<c&&(c=r));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);o.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,o.d(r,c),r},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({79:"5dc99116",289:"ace6e941",867:"33fc5bb8",1235:"a7456010",1689:"1c6bbcf1",1724:"dff1c289",1832:"ef1b110a",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2197:"ca5a3fcb",2711:"9e4087bc",2748:"822bd8ab",3098:"533a09ca",3249:"ccc49370",3500:"0a0c9ecf",3637:"f4f34a3a",3694:"8717b14a",3976:"0e384e19",4108:"daa8d7e1",4134:"393be207",4212:"621db11d",4243:"2d73b2d0",4291:"4671711a",4536:"1ab2cd39",4583:"1df93b7f",4736:"e44a2883",4813:"6875c492",5486:"231c09af",5557:"d9f32620",5742:"aba21aa0",6061:"1f391b9e",6657:"0dd87573",6969:"14eb3368",7098:"a7bd4aaa",7379:"f18f2421",7472:"814f3328",7643:"a6aa9e1f",8209:"01a85c17",8401:"17896441",8609:"925b3f96",8737:"7661071f",8758:"24191882",8849:"f6ed3e81",8863:"f55d3e7a",9048:"a94703ab",9262:"18c41134",9325:"59362658",9328:"e273c56f",9588:"92e5774b",9647:"5e95c892",9858:"36994c47",9941:"d58f6e20"}[e]||e)+"."+{79:"314d878c",289:"7e3db868",867:"1d9b8470",1235:"13b363a9",1689:"9ab26f48",1724:"d3a17b24",1832:"45bff705",1903:"80136499",1953:"43db98fa",1972:"89fe8c76",1974:"2107e84a",2197:"cfa5fba4",2711:"537b6dd9",2748:"e784a1ba",3042:"8e258404",3098:"c0aaf91d",3249:"1bcf3ab7",3500:"a462798f",3637:"f24a2f53",3694:"9872d0ed",3976:"c22b35d6",4108:"0b5066f5",4134:"ebc2f6ea",4212:"5ed27d32",4243:"3618b407",4291:"3568af95",4536:"e31c2192",4583:"7a1392fb",4622:"d036e782",4736:"cffafc3a",4813:"583fefad",5486:"198e6e86",5557:"2f9e31f1",5742:"85ac780d",6061:"58ee442c",6657:"7bb33e2e",6969:"2e2babd9",7098:"5a3d7d24",7379:"a174a49a",7472:"06da70ed",7643:"5b86f640",8209:"c9e40b4e",8401:"d4f539bc",8609:"dc5c732a",8737:"b12e24ea",8758:"2638419e",8849:"58d26ab5",8863:"08a5c991",9048:"8bed5ca8",9262:"b4471bf9",9325:"5f0be02d",9328:"c850014f",9392:"3dee840b",9588:"6a64ced5",9647:"b39d810f",9858:"0c6c0c04",9941:"c0588fa6"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="ottotto-blog:",o.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var d,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+t){d=l;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+t),d.src=e),f[e]=[a];var u=(a,t)=>{d.onerror=d.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/ottotto-blog/en/",o.gca=function(e){return e={17896441:"8401",24191882:"8758",59362658:"9325","5dc99116":"79",ace6e941:"289","33fc5bb8":"867",a7456010:"1235","1c6bbcf1":"1689",dff1c289:"1724",ef1b110a:"1832",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974",ca5a3fcb:"2197","9e4087bc":"2711","822bd8ab":"2748","533a09ca":"3098",ccc49370:"3249","0a0c9ecf":"3500",f4f34a3a:"3637","8717b14a":"3694","0e384e19":"3976",daa8d7e1:"4108","393be207":"4134","621db11d":"4212","2d73b2d0":"4243","4671711a":"4291","1ab2cd39":"4536","1df93b7f":"4583",e44a2883:"4736","6875c492":"4813","231c09af":"5486",d9f32620:"5557",aba21aa0:"5742","1f391b9e":"6061","0dd87573":"6657","14eb3368":"6969",a7bd4aaa:"7098",f18f2421:"7379","814f3328":"7472",a6aa9e1f:"7643","01a85c17":"8209","925b3f96":"8609","7661071f":"8737",f6ed3e81:"8849",f55d3e7a:"8863",a94703ab:"9048","18c41134":"9262",e273c56f:"9328","92e5774b":"9588","5e95c892":"9647","36994c47":"9858",d58f6e20:"9941"}[e]||e,o.p+o.u(e)},(()=>{var e={5354:0,1869:0};o.f.j=(a,t)=>{var f=o.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=o.p+o.u(a),d=new Error;o.l(c,(t=>{if(o.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,f[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],d=t[1],b=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in d)o.o(d,f)&&(o.m[f]=d[f]);if(b)var i=b(o)}for(a&&a(t);n<c.length;n++)r=c[n],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(i)},t=self.webpackChunkottotto_blog=self.webpackChunkottotto_blog||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();