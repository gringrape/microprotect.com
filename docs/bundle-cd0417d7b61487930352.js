!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"microprotect.com"===location.hostname&&t(1),t(2)},function(e,n){gtag("event","visit"),document.querySelector(".subscribe form").addEventListener("submit",()=>{gtag("event","subscribe")})},function(e,n){const t={en:{description1:"Insurance must be served for all.",description2:"We want more people to get insurance benefit.",subscribe1:"Please participate to the insurance donation,\nstarting January 1, 2020.",subscribe2:"We will send news and information.",address:"G406, HEYGROUND,\n5, Ttukseom-ro 1na-gil,\nSeongdong-gu, Seoul,\nRepublic of Korea"}};const r=new Map([...new URLSearchParams(location.search)]).get("locale")||(navigator.language||"ko").slice(0,2);"en"===r&&function(e){document.querySelectorAll("[data-key]").forEach(n=>{const r=n.dataset.key;n.innerText=t[e][r]})}(r),document.querySelector(`[href="?locale=${r}"]`).className="active"}]);