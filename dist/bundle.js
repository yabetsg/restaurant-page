(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,":root{\r\n    --main-bg-color:rgba(255, 255, 255,100%);\r\n    --book-bg-color:rgba(234, 109, 39,100%);\r\n    --text-color:rgba(16, 26, 36,100%);\r\n    --big-text: 3rem;\r\n    --small-text: 1rem;\r\n    --btn-text: 1.25rem;\r\n    --home-img-radius: 100px 50px 100px 50px;\r\n    --btn-radius: 17px 8px 17px 8px;\r\n    --menu-bg-color:rgba(16,26,36,100%);\r\n}\r\nhtml{\r\n    margin: 0;\r\n}\r\nbody{\r\n    margin: 0;\r\n\t\r\n    background-color: var(--main-bg-color);\r\n    color: var(--text-color);\r\n    font-size: 1.5rem;\r\n}\r\nnav{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\nul,a{\r\n    font-size: var(--small-text);\r\n    color: black;\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    display: flex;\r\n    gap: 60px;\r\n    \r\n}\r\nli:hover{\r\n    text-decoration-line: underline;\r\n    color: purple;\r\n}\r\n#content{\r\n    display: flex;\r\n    \r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n}\r\n.logoContainer{\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.8rem;\r\n    font-weight: bold;\r\n    gap: 10px;\r\n}\r\n\r\nheader{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.titleContainer{\r\n    font-size: var(--big-text);\r\n    font-weight: bold;\r\n    max-width: 510px;\r\n  \r\n}\r\n.paragraphContainer{\r\n    font-size: var(--small-text);\r\n    font-weight: lighter;\r\n    max-width: 376px;\r\n    max-height: 115px;\r\n}\r\n\r\n.homeGrid{\r\n    display: grid;\r\n    grid-template-columns: repeat(2,1fr);\r\n    \r\n}\r\n.homePageDishContainer{\r\n    position: relative;\r\n    top: -17em;\r\n    left: -2em;\r\n   \r\n    transform: scale(0.7);\r\n}\r\n.homeDish {\r\n    border-radius: var(--home-img-radius);\r\n  }\r\n.restaurantImg{\r\n    border-radius: var(--home-img-radius);\r\n    transform: scale(0.65);\r\n    margin-left: 4.2em;\r\n   margin-top: -50px;\r\n}\r\n\r\nbutton{\r\n    font-size: var(--btn-text);\r\n    font-weight:500;\r\n    max-width: 167px;\r\n    max-height: 54px;\r\n    border-radius: var(--btn-radius);\r\n    color: white;\r\n    background-color: var(--book-bg-color);\r\n  \r\n}\r\nheader>button{\r\n    margin-top: 10px;\r\n    border-style: none;\r\n}\r\n.rightColumnDiv{\r\n    max-height: 650px;\r\n    \r\n}\r\n.leftColumnDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n  justify-self: center;\r\n   \r\n    gap:60px ;\r\n    padding-top: 100px;\r\n    padding-left: 75px;\r\n}\r\n.leftColumnButtons{\r\n    max-width: 376px;\r\n    max-height: 115px;\r\n    \r\n}\r\n.leftColumnButtons>button{\r\n    padding: 10px;\r\n    border-style: none;\r\n   \r\n}\r\n.menuBtn{\r\n    max-width: 167px;\r\n    max-height: 54px;\r\n    color: white;\r\n    border-radius: var(--btn-radius);\r\n    background-color: var(--menu-bg-color);\r\n}\r\n.bookBtn{\r\n    margin-left: 15px;\r\n    max-width: 167px;\r\n    max-height: 54px;\r\n    color: white;\r\n    border-radius: var(--btn-radius);\r\n    background-color: var(--book-bg-color);\r\n}\r\n.socials>img{\r\n    border: 1px solid black;\r\n    border-radius: 100%;\r\n}\r\n.socials{\r\n    display: flex;\r\n    max-width: 167px;\r\n    max-height: 54px;\r\n    justify-content: space-between;\r\n}",""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=a[l]||0,p="".concat(l," ").concat(s);a[l]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=t(a[i]);n[d].references--}for(var c=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=()=>{const e=document.createElement("header"),n=document.createElement("div");n.classList.add("logoContainer");const t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("img"),a=document.createElement("div");a.textContent="restaurant",t.appendChild(o),r.appendChild(a),o.src="logo.svg",n.appendChild(t),n.appendChild(r);const i=document.createElement("nav"),d=document.createElement("ul"),c=document.createElement("li"),l=document.createElement("li"),s=document.createElement("li"),p=document.createElement("a"),u=document.createElement("a"),m=document.createElement("a");p.href="#",u.href="#",m.href="#",p.textContent="Home",u.textContent="Menu",m.textContent="Contact",c.appendChild(p),l.appendChild(u),s.appendChild(m),d.appendChild(c),d.appendChild(l),d.appendChild(s),i.appendChild(d);const h=document.createElement("button");return h.textContent="Book a table",e.appendChild(n),e.appendChild(i),e.appendChild(h),e},n=()=>{document.createElement("main");const e=document.createElement("div"),n=document.createElement("div");return{leftColumn:()=>{e.classList.add("leftColumnDiv");const n=document.createElement("div"),t=document.createElement("div");n.textContent="We provide the best food for you",n.classList.add("titleContainer"),t.classList.add("paragraphContainer"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";const r=document.createElement("button"),o=document.createElement("button");r.classList.add("menuBtn"),o.classList.add("bookBtn"),r.textContent="Menu",o.textContent="Book a table";const a=document.createElement("div");a.classList.add("leftColumnButtons"),a.appendChild(r),a.appendChild(o);const i=document.createElement("div");i.classList.add("socials");const d=document.createElement("img"),c=document.createElement("img"),l=document.createElement("img");return d.src="facebook.png",c.src="facebook.png",l.src="facebook.png",i.appendChild(d),i.appendChild(c),i.appendChild(l),e.appendChild(n),e.appendChild(t),e.appendChild(a),e.appendChild(i),e},rightColumn:()=>{const e=document.createElement("img"),t=document.createElement("img"),r=document.createElement("div");return r.classList.add("homePageDishContainer"),r.appendChild(t),e.src="restaurant.png",e.classList.add("restaurantImg"),t.src="homepage-dish.png",t.classList.add("homeDish"),n.appendChild(e),n.appendChild(r),n.classList.add("rightColumnDiv"),n}}};var r=t(379),o=t.n(r),a=t(795),i=t.n(a),d=t(569),c=t.n(d),l=t(565),s=t.n(l),p=t(216),u=t.n(p),m=t(589),h=t.n(m),f=t(426),g={};g.styleTagTransform=h(),g.setAttributes=s(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,(()=>{console.log(e()),console.log(n().leftColumn());const t=document.getElementById("content");document.createElement("img").src="homepage-dish.png";const r=document.createElement("div");r.classList.add("homeGrid"),r.appendChild(n().leftColumn()),r.appendChild(n().rightColumn()),t.appendChild(e()),t.appendChild(r)})()})()})();