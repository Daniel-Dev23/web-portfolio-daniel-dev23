(()=>{"use strict";var a={611:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(81),i=n.n(t),s=n(645),r=n.n(s)()(i());r.push([a.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=r},590:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(81),i=n.n(t),s=n(645),r=n.n(s)()(i());r.push([a.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=r},573:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(81),i=n.n(t),s=n(645),r=n.n(s)()(i());r.push([a.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=r},979:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(81),i=n.n(t),s=n(645),r=n.n(s)()(i());r.push([a.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=r},779:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(81),i=n.n(t),s=n(645),r=n.n(s)()(i());r.push([a.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=r},161:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(81),i=n.n(t),s=n(645),r=n.n(s)()(i());r.push([a.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=r},11:(a,e,n)=>{n.d(e,{Z:()=>o});var t=n(81),i=n.n(t),s=n(645),r=n.n(s)()(i());r.push([a.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const o=r},645:a=>{a.exports=function(a){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=a(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(a,n,t,i,s){"string"==typeof a&&(a=[[null,a,void 0]]);var r={};if(t)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var l=0;l<a.length;l++){var d=[].concat(a[l]);t&&r[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:a=>{a.exports=function(a){return a[1]}},379:a=>{var e=[];function n(a){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===a){n=t;break}return n}function t(a,t){for(var s={},r=[],o=0;o<a.length;o++){var c=a[o],l=t.base?c[0]+t.base:c[0],d=s[l]||0,p="".concat(l," ").concat(d);s[l]=d+1;var f=n(p),v={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(v);else{var m=i(v,t);t.byIndex=o,e.splice(o,0,{identifier:p,updater:m,references:1})}r.push(p)}return r}function i(a,e){var n=e.domAPI(e);n.update(a);return function(e){if(e){if(e.css===a.css&&e.media===a.media&&e.sourceMap===a.sourceMap&&e.supports===a.supports&&e.layer===a.layer)return;n.update(a=e)}else n.remove()}}a.exports=function(a,i){var s=t(a=a||[],i=i||{});return function(a){a=a||[];for(var r=0;r<s.length;r++){var o=n(s[r]);e[o].references--}for(var c=t(a,i),l=0;l<s.length;l++){var d=n(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:a=>{var e={};a.exports=function(a,n){var t=function(a){if(void 0===e[a]){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(a){n=null}e[a]=n}return e[a]}(a);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:a=>{a.exports=function(a){var e=document.createElement("style");return a.setAttributes(e,a.attributes),a.insert(e,a.options),e}},565:(a,e,n)=>{a.exports=function(a){var e=n.nc;e&&a.setAttribute("nonce",e)}},795:a=>{a.exports=function(a){var e=a.insertStyleElement(a);return{update:function(n){!function(a,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,i&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(t,a,e.options)}(e,a,n)},remove:function(){!function(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a)}(e)}}}},589:a=>{a.exports=function(a,e){if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}},599:a=>{a.exports=JSON.parse('[{"id":"JCPACKWEB","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/jc-pack-web-banner_itj7bl.png","title":"JC PACK WEB","min_description":"Aplicación Web basada en PHP con MVC, además de HTML, Bootstrap, Javascript y conexión con MySQL.","link":"https://github.com/Daniel-Dev23/jc-pack","details":{"id":"JCPACKWEB","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/jc-pack-web-banner_itj7bl.png","title":"JC PACK WEB","all_description":"La aplicación administra la logística de transportación de artículos de oficina por toda Baja California. El proyecto fue corregido de errores y se aplicaron nuevas funcionalidades que mejoraron la producción.","link":"https://github.com/Daniel-Dev23/jc-pack","thumbnails":"https://github.com/Daniel-Dev23/jc-pack/blob/main/app-web/thumbnails.md","type_dev":"Full Stack","type_app":"App Web","technologies":[{"icon":"fa-brands fa-html5","name":"HTML"},{"icon":"fa-brands fa-bootstrap","name":"Bootstrap"},{"icon":"fa-brands fa-square-js","name":"JS"},{"icon":"fa-brands fa-php","name":"PHP"},{"icon":"fa-solid fa-database","name":"MySQL"},{"icon":"fa-brands fa-github","name":"Git"},{"icon":"fa-brands fa-git-alt","name":"Github"}]}},{"id":"JCPACKMOVIL","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/jc-pack-movil-banner_nq4m24.png","title":"JC PACK MÓVIL","min_description":"Aplicación Móvil creada en Flutter que administra la logistica de transportación de articulos de oficina.","link":"https://github.com/Daniel-Dev23/jc-pack","details":{"id":"JCPACKMOVIL","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/jc-pack-movil-banner_nq4m24.png","title":"JC PACK MÓVIL","all_description":"La aplicación administra la logística desde dispositivos móviles. Lo utilizan los choferes y cubre las funcionalidades de tracking, de manera que los supervisores inspecciones el punto actual de los envíos.","link":"https://github.com/Daniel-Dev23/jc-pack","thumbnails":"https://github.com/Daniel-Dev23/jc-pack/blob/main/app-mobile/thumbnails.md","type_dev":"Full Stack","type_app":"App Móvil","technologies":[{"icon":"fa-solid fa-mobile-screen-button","name":"Flutter"},{"icon":"fa-brands fa-php","name":"PHP"},{"icon":"fa-solid fa-database","name":"MySQL"},{"icon":"fa-brands fa-github","name":"Git"},{"icon":"fa-brands fa-git-alt","name":"Github"}]}},{"id":"AFFIRA","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464897/Banner%20Cards/banner-affira_sinwt8.png","title":"WEBSITE AFFIRA","min_description":"Sitio Web creado con HTML, CSS, Bootstrap, Javascript y PHP para el envío de datos de formulario.","link":"https://github.com/Daniel-Dev23/website-affira","details":{"id":"AFFIRA","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464897/Banner%20Cards/banner-affira_sinwt8.png","title":"WEBSITE AFFIRA","all_description":"El sitio web fue creado para dar exposición a los diferentes productos que el proyecto pueda ofrecer con el fin de poder llamar la atención de clientes potenciales interesados en la herramienta.","link":"https://github.com/Daniel-Dev23/website-affira","thumbnails":"https://github.com/Daniel-Dev23/website-affira/blob/main/thumbnails.md","type_dev":"Frontend","type_app":"Website","technologies":[{"icon":"fa-brands fa-html5","name":"HTML"},{"icon":"fa-brands fa-css3-alt","name":"CSS"},{"icon":"fa-brands fa-bootstrap","name":"Bootstrap"},{"icon":"fa-brands fa-square-js","name":"JS"},{"icon":"fa-brands fa-php","name":"PHP"}]}},{"id":"COMMART","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/banner-commart_at1oik.png","title":"WEBSITE COMMART","min_description":"Sitio Web creado con HTML, CSS, Bootstrap, Javascript y PHP para el envío de datos de formulario.","link":"https://github.com/Daniel-Dev23/website-grupo-commart","details":{"id":"COMMART","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/banner-commart_at1oik.png","title":"WEBSITE COMMART","all_description":"El sitio web fue creado para dar exposición a los diferentes servicios y productos de la empresa Grupo Commart S.A. de C.V. El sitio web fue rediseñado y logro tener más alcance entre los usuarios tecnológicos.","link":"https://github.com/Daniel-Dev23/website-grupo-commart","thumbnails":"https://github.com/Daniel-Dev23/website-grupo-commart/blob/main/thumbnails.md","type_dev":"Frontend","type_app":"Website","technologies":[{"icon":"fa-brands fa-html5","name":"HTML"},{"icon":"fa-brands fa-css3-alt","name":"CSS"},{"icon":"fa-brands fa-bootstrap","name":"Bootstrap"},{"icon":"fa-brands fa-square-js","name":"JS"},{"icon":"fa-brands fa-php","name":"PHP"}]}},{"id":"WEBPACKJS","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464908/Banner%20Cards/webpack-light-banner_wqycyt.png","title":"WEBPACK JS","min_description":"Esqueleto de un módulo Webpack configurado y adaptado para construir proyectos basados en Javascript.","link":"https://github.com/Daniel-Dev23/webpack-js-skeleton","details":{"id":"WEBPACKJS","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464908/Banner%20Cards/webpack-light-banner_wqycyt.png","title":"WEBPACK JS","all_description":"La construcción de este módulo Webpack es un esqueleto que sirve para ser reutilizado. Con esto se busca evitar la extensa configuración inicial y pasar directamente al desarrollo de proyectos con Javascript.","link":"https://github.com/Daniel-Dev23/webpack-js-skeleton","thumbnails":"https://github.com/Daniel-Dev23/webpack-js-skeleton/blob/main/thumbnails.md","type_dev":"Backend","type_app":"Webpack","technologies":[{"icon":"fa-brands fa-html5","name":"HTML"},{"icon":"fa-brands fa-css3-alt","name":"CSS"},{"icon":"fa-brands fa-square-js","name":"JS"},{"icon":"fa-brands fa-node-js","name":"Node JS"},{"icon":"fa-solid fa-globe","name":"Webpack"},{"icon":"fa-brands fa-github","name":"Git"},{"icon":"fa-brands fa-git-alt","name":"Github"}]}},{"id":"WEBPACKTS","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464908/Banner%20Cards/webpack-banner_dvc0ce.png","title":"WEBPACK TS","min_description":"Esqueleto de un módulo Webpack configurado y adaptado para construir proyectos basados en Typescript.","link":"https://github.com/Daniel-Dev23/webpack-ts-skeleton","details":{"id":"WEBPACKTS","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464908/Banner%20Cards/webpack-banner_dvc0ce.png","title":"WEBPACK TS","all_description":"La construcción de este módulo Webpack es un esqueleto que sirve para ser reutilizado. Con esto se busca evitar la extensa configuración inicial y pasar directamente al desarrollo de proyectos con Typescript.","link":"https://github.com/Daniel-Dev23/webpack-ts-skeleton","thumbnails":"https://github.com/Daniel-Dev23/webpack-ts-skeleton/blob/main/thumbnails.md","type_dev":"Backend","type_app":"Webpack","technologies":[{"icon":"fa-brands fa-html5","name":"HTML"},{"icon":"fa-brands fa-css3-alt","name":"CSS"},{"icon":"fa-brands fa-square-js","name":"Typescript"},{"icon":"fa-brands fa-node-js","name":"Node JS"},{"icon":"fa-solid fa-globe","name":"Webpack"},{"icon":"fa-brands fa-github","name":"Git"},{"icon":"fa-brands fa-git-alt","name":"Github"}]}},{"id":"RESTSERVER","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/banner-rest_zfjrer.png","title":"REST SERVER","min_description":"Esqueleto de un REST Server creado con Node JS que sirve como base para proyectos de API REST.","link":"https://github.com/Daniel-Dev23/rest-server-skeleton","details":{"id":"RESTSERVER","banner_img":"https://res.cloudinary.com/daniel-dev23/image/upload/v1664464898/Banner%20Cards/banner-rest_zfjrer.png","title":"REST SERVER","all_description":"El REST SERVER implementa operaciones básicas de un CRUD, pensado para extender su funcionalidad con conexión a base de datos, versionado de API, paginaciones, autenticaciones y lo que el desarrollador requiera.","link":"https://github.com/Daniel-Dev23/rest-server-skeleton","thumbnails":"https://github.com/Daniel-Dev23/rest-server-skeleton/blob/main/thumbnails.md","type_dev":"Backend","type_app":"API","technologies":[{"icon":"fa-brands fa-node-js","name":"Node JS"},{"icon":"fa-brands fa-node-js","name":"Express"},{"icon":"fa-brands fa-github","name":"Git"},{"icon":"fa-brands fa-git-alt","name":"Github"}]}}]')}},e={};function n(t){var i=e[t];if(void 0!==i)return i.exports;var s=e[t]={id:t,exports:{}};return a[t](s,s.exports,n),s.exports}n.n=a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return n.d(e,{a:e}),e},n.d=(a,e)=>{for(var t in e)n.o(e,t)&&!n.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})},n.o=(a,e)=>Object.prototype.hasOwnProperty.call(a,e),n.nc=void 0,(()=>{var a=n(379),e=n.n(a),t=n(795),i=n.n(t),s=n(569),r=n.n(s),o=n(565),c=n.n(o),l=n(216),d=n.n(l),p=n(589),f=n.n(p),v=n(161),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d();e()(v.Z,m);v.Z&&v.Z.locals&&v.Z.locals;var u=n(573),b={};b.styleTagTransform=f(),b.setAttributes=c(),b.insert=r().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=d();e()(u.Z,b);u.Z&&u.Z.locals&&u.Z.locals;var _=n(590),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=r().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=d();e()(_.Z,g);_.Z&&_.Z.locals&&_.Z.locals;var h=n(611),y={};y.styleTagTransform=f(),y.setAttributes=c(),y.insert=r().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=d();e()(h.Z,y);h.Z&&h.Z.locals&&h.Z.locals;var w=n(779),k={};k.styleTagTransform=f(),k.setAttributes=c(),k.insert=r().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=d();e()(w.Z,k);w.Z&&w.Z.locals&&w.Z.locals;var E=n(11),S={};S.styleTagTransform=f(),S.setAttributes=c(),S.insert=r().bind(null,"head"),S.domAPI=i(),S.insertStyleElement=d();e()(E.Z,S);E.Z&&E.Z.locals&&E.Z.locals;var T=n(979),C={};C.styleTagTransform=f(),C.setAttributes=c(),C.insert=r().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=d();e()(T.Z,C);T.Z&&T.Z.locals&&T.Z.locals;var A=function(){var a=document.createElement("div");return a.classList.add("home-container"),a.innerHTML='<div class="social-wrapper"> <div class="social-image"> <figure class="social-image__picture"> <img src="https://res.cloudinary.com/daniel-dev23/image/upload/v1663171647/Portfolio%20Web/developer_ya4ts2.svg" alt="Daniel Gonzalez" class="social-image__img"> </figure> </div> <div class="social-network"> <div class="item-wrapper"> <a href="https://github.com/Daniel-Dev23" target="_blank" class="item-wrapper__link" rel="noopener"> <i class="fa-brands fa-square-github item-wrapper__icon"></i> </a> <p class="item-wrapper__title">Github</p> </div> <div class="item-wrapper"> <a href="https://www.linkedin.com/in/daniel-gonzalez-dev/" target="_blank" class="item-wrapper__link" rel="noopener"> <i class="fa-brands fa-linkedin item-wrapper__icon"></i> </a> <p class="item-wrapper__title">LinkedIn</p> </div> <div class="item-wrapper"> <a href="mailto:danieldev.info@gmail.com" target="_blank" class="item-wrapper__link" rel="noopener"> <i class="fa-solid fa-square-envelope item-wrapper__icon"></i> </a> <p class="item-wrapper__title">Email</p> </div> </div> </div> <div class="welcome-wrapper"> <h3 class="welcome-title">¡Bienvenido!</h3> <p class="welcome-description"> Aquí es donde comparto un poco de mi experiencia a lo largo de mis 2 años como desarrollador web. <br><br> Si algo te llama la atención y quieres charlar conmigo, contáctame por los medios establecidos. <br><br> ¡Será un gusto para mi conocerte! </p> </div> ',a};var D=n(599),L=n(599),I=function(a,e){a.forEach((function(n){n.addEventListener("click",(function(t){a.forEach((function(a){return a.classList.remove("active-sub")})),n.classList.add("active-sub"),function(a,e){var n=".subnavbar-menu__link--who",t=".subnavbar-menu__link--preparation",i=".subnavbar-menu__link--contact";(a.target.matches("".concat(n))||a.target.matches("".concat(n," *")))&&(e.innerHTML=' <div class="description"> <p class="description__text"> Ingeniero en Tecnologías de la Información y la Comunicación, especializado en el desarrollo web. <br><br> Orientado a Resultados, aplicando las mejores prácticas profesionales del mercado para lograr el éxito en los objetivos establecidos. <br><br> Abierto en todo momento al nuevo conocimiento, el Trabajo en Equipo y cualquier feedback, partiendo desde el respeto la asertividad. </p> </div> <div class="component"> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-sharp fa-solid fa-location-dot component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">RESIDENCIA</p> <p class="details-content__description">Tijuana, Baja California, México.</p> </div> </div> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-solid fa-globe component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">COLABORACIÓN</p> <p class="details-content__description">Trabajo remoto o presencial.</p> </div> </div> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-solid fa-laptop-code component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">ESPECIALIDAD</p> <p class="details-content__description">Frontend y Backend.</p> </div> </div> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-solid fa-globe component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">NIVEL DE INGLÉS</p> <p class="details-content__description">A1-A2 en la escala CEFR.</p> </div> </div> </div> '),(a.target.matches("".concat(t))||a.target.matches("".concat(t," *")))&&(e.innerHTML='<div class="description"> <p class="description__text">Mi preparación comienza en:</p> </div> <div class="component"> <div class="component-wrapper component-wrapper--figure"> <figure class="component-figure"> <img src="https://res.cloudinary.com/daniel-dev23/image/upload/v1663609493/Portfolio%20Web/square-cecyte_cwncve.png" alt="CECYTE" class="component-figure__img"> </figure> <div class="details-content"> <p class="details-content__title">CECYTE BC (2014 - 2017)</p> <p class="details-content__description">Técnico en Programación de Software.</p> </div> </div> <div class="component-wrapper component-wrapper--figure"> <figure class="component-figure"> <img src="https://res.cloudinary.com/daniel-dev23/image/upload/v1663609493/Portfolio%20Web/square-utt_nqm06y.png" alt="UTT" class="component-figure__img"> </figure> <div class="details-content"> <p class="details-content__title">UTT (2017 - 2019)</p> <p class="details-content__description"> T.S.U en Tecnologías de la Información y la Comunicación en el Área de Sistemas Informáticos. </p> </div> </div> <div class="component-wrapper component-wrapper--figure"> <figure class="component-figure"> <img src="https://res.cloudinary.com/daniel-dev23/image/upload/v1663609493/Portfolio%20Web/square-utt_nqm06y.png" alt="UTT" class="component-figure__img"> </figure> <div class="details-content"> <p class="details-content__title">UTT (2019 - 2021)</p> <p class="details-content__description"> Ingeniería en Tecnologías de la Información y la Comunicación en el Área de Sistemas Informáticos. </p> </div> </div> <div class="component-wrapper component-wrapper--figure"> <figure class="component-figure"> <img src="https://res.cloudinary.com/daniel-dev23/image/upload/v1663609493/Portfolio%20Web/square-free_rvsf9r.png" alt="Free" class="component-figure__img"> </figure> <div class="details-content"> <p class="details-content__title">ACTUALMENTE</p> <p class="details-content__description"> Mi formación profesional, también lo complementé tomando cursos, tutoriales, leyendo libros, documentaciones, blogs, etc. </p> </div> </div> </div> '),(a.target.matches("".concat(i))||a.target.matches("".concat(i," *")))&&(e.innerHTML='<div class="description"> <p class="description__text">Mis redes sociales:</p> <br> </div> <div class="social-network"> <div class="item-wrapper"> <a href="https://github.com/Daniel-Dev23" target="_blank" class="item-wrapper__link" rel="noopener"> <i class="fa-brands fa-square-github item-wrapper__icon"></i> </a> <p class="item-wrapper__title">Github</p> </div> <div class="item-wrapper"> <a href="https://www.linkedin.com/in/daniel-gonzalez-dev/" target="_blank" class="item-wrapper__link" rel="noopener"> <i class="fa-brands fa-linkedin item-wrapper__icon"></i> </a> <p class="item-wrapper__title">LinkedIn</p> </div> <div class="item-wrapper"> <a href="mailto:danieldev.info@gmail.com" target="_blank" class="item-wrapper__link" rel="noopener"> <i class="fa-solid fa-square-envelope item-wrapper__icon"></i> </a> <p class="item-wrapper__title">Email</p> </div> </div> <br><br> <div class="description"> <p class="description__text">Descarga mi CV:</p> <br> </div> <div class="controls controls--center"> <a href="https://drive.google.com/file/d/1g4J4-6VIIkFvxFGtSFM_8eSkx46uOkvb/view?usp=sharing" target="_blank" class="controls__button controls__button--white" rel="noopener" download>CV</a> </div>');var s=".subnavbar-menu__link--duras",r=".subnavbar-menu__link--blandas",o=".subnavbar-menu__link--materias",c=".subnavbar-menu__link--impulso";(a.target.matches("".concat(s))||a.target.matches("".concat(s," *")))&&(e.innerHTML='<div class="description"> <p class="description__text"> Estas son algunas de las habilidades duras en las que me especializo: </p> <br> </div> <div class="main-front"> <div class="front-container"> <p class="front-main-title">FRONTEND</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-html5 front-icon"></i> </p> <p class="front-title">HTML</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-css3-alt front-icon"></i> </p> <p class="front-title">CSS</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-bootstrap front-icon"></i> </p> <p class="front-title">Bootrstrap</p> </div> </div> </div> <div class="front-container"> <p class="front-main-title">BACKEND</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-php front-icon"></i> </p> <p class="front-title">PHP</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-node-js front-icon"></i> </p> <p class="front-title">Node JS</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-square-js front-icon"></i> </p> <p class="front-title">JS</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-python front-icon"></i> </p> <p class="front-title">Python</p> </div> </div> </div> <div class="front-container"> <p class="front-main-title">BASE DE DATOS</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-database front-icon"></i> </p> <p class="front-title">MySQL</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-database front-icon"></i> </p> <p class="front-title">SQLite</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-database front-icon"></i> </p> <p class="front-title">MongoDB</p> </div> </div> </div> <div class="front-container"> <p class="front-main-title">VERSIONAMIENTO</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-git-alt front-icon"></i> </p> <p class="front-title">Git</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-github front-icon"></i> </p> <p class="front-title">Github</p> </div> </div> </div> </div> '),(a.target.matches("".concat(r))||a.target.matches("".concat(r," *")))&&(e.innerHTML='<div class="description"> <p class="description__text"> Estas son las principales habilidadees blandas que pienso me caracterizan: </p> <br> </div> <div class="front-container"> <div class="soft-content"> <div class="soft-item"> <p class="front-wrapper"> <i class="fa-solid fa-person-chalkboard front-icon"></i> </p> <p class="front-title">Liderazgo</p> </div> <div class="soft-item"> <p class="front-wrapper"> <i class="fa-solid fa-user-clock front-icon"></i> </p> <p class="front-title">Resolución de Conflictos</p> </div> <div class="soft-item"> <p class="front-wrapper"> <i class="fa-solid fa-square-poll-vertical front-icon"></i> </p> <p class="front-title">Orientado a Resultados</p> </div> <div class="soft-item"> <p class="front-wrapper"> <i class="fa-solid fa-code-branch front-icon"></i> </p> <p class="front-title">Pensamiento Estratégico</p> </div> <div class="soft-item"> <p class="front-wrapper"> <i class="fa-solid fa-people-group front-icon"></i> </p> <p class="front-title">Trabajo en Equipo</p> </div> <div class="soft-item"> <p class="front-wrapper"> <i class="fa-solid fa-people-group front-icon"></i> </p> <p class="front-title">Comunicación</p> </div> </div> </div>'),(a.target.matches("".concat(o))||a.target.matches("".concat(o," *")))&&(e.innerHTML='<div class="description"> <p class="description__text"> Estas son algunas materias en las que me especializo: </p> <br> </div> <div class="front-container"> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-sharp fa-solid fa-code-fork front-icon"></i> </p> <p class="front-title">REST API</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-square-js front-icon"></i> </p> <p class="front-title">Webpack</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-css3-alt front-icon"></i> </p> <p class="front-title">Flexbox</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-css3-alt front-icon"></i> </p> <p class="front-title">Grid CSS</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-sharp fa-solid fa-code-fork front-icon"></i> </p> <p class="front-title">POO</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-sharp fa-solid fa-code-fork front-icon"></i> </p> <p class="front-title">MVC</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-laptop-code front-icon"></i> </p> <p class="front-title">Responsive Design</p> </div> </div> </div> '),(a.target.matches("".concat(c))||a.target.matches("".concat(c," *")))&&(e.innerHTML='<div class="description"> <p class="description__text"> Seguirse preparando es importante y nunca dejo de aprender. Es por eso, que a continuación expreso mis siguientes objetivos como desarrollador: </p> <br> </div> <div class="front-container"> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-docker front-icon"></i> </p> <p class="front-title">Docker</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-globe front-icon"></i> </p> <p class="front-title">Inglés</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-vuejs front-icon"></i> </p> <p class="front-title">Vue JS</p> </div> </div> </div> ')}(t,e)}))}))};var x=function(){var a,e,n,t,i=document.createElement("div");return i.classList.add("projects-container"),i.innerHTML='<div class="banner-text"> <p class="banner-text__title">PROYECTOS</p> </div> <div class="cards-wrapper"></div> ',function(a){D.forEach((function(e){a.innerHTML+="".concat(function(a){return'    \n        <div class="card-group">\n            <figure class="card-picture">\n                <img src="'.concat(a.banner_img,'" alt="').concat(a.title,'" class="card-picture__img">\n            </figure>\n            <div class="card-content">                    \n                <div class="card-text">\n                    <h2 class="card-text__title">').concat(a.title,'</h2>\n                    <p class="card-text__min-description">').concat(a.min_description,'</p>\n                </div>\n                <div class="card-buttons">\n                    <a href="').concat(a.link,'" target="_blank" class="card-buttons__btn card-buttons__btn--white">VISITAR</a>\n                    <a href="#" class="card-buttons__btn card-buttons__btn--green card-buttons__btn--details" id="').concat(a.id,'">DETALLES</a>\n                </div>\n            </div>\n        </div>\n    ')}(e))}))}(i.querySelector(".cards-wrapper")),a=i,L.forEach((function(e){a.innerHTML+="".concat(function(a){return'    \n        <div class="modal-container" id="'.concat(a.details.id,'">\n            <div class="modal-wrapper">\n                <div class="slider-cotainer">\n                    <figure class="slider-picture">\n                        <img src="').concat(a.details.banner_img,'" alt="').concat(a.details.title,'" class="slider-picture__img">\n                    </figure>\n                </div>\n\n                <div class="modal-content">\n                    <div class="info-wrapper">\n                        <div class="info-content">\n                            <p class="info-content__title">').concat(a.details.title,'</p>\n                            <P class="info-content__type-dev">').concat(a.details.type_dev,'</P>\n                            <p class="info-content__type-app">').concat(a.details.type_app,'</p>\n                        </div>\n                        <p class="info-description">').concat(a.details.all_description,'</p>\n                    </div>\n                    <div class="access-wrapper">\n                        <div class="access-content">\n                            <p class="access-content__title">ACCESIBILIDAD</p>\n                        </div>\n                        <p class="access-description">').concat(function(a){return'\n        A continuación muestro evidencias del proyecto. No todos tienen \n        acceso al código fuente por temas de privacidad pero hay imágenes \n        previas como referencía. \n        <a href="'.concat(a.details.thumbnails,'" target="_blank" class="access-btn access-btn--yellow">\n            <i class="fa-regular fa-image access-btn__icon"></i>\n            Ver Capturas\n        </a>.\n    ')}(a),'</p>\n                    </div>\n                    <div class="tech-wrapper">\n                        <p class="tech__title">TECNOLOGÍAS UTILIZADAS</p>\n                        <div class="tech-content">').concat(function(a){var e=a.details.technologies,n="";return e.forEach((function(a){n+='\n            <div class="tech-item-wrapper">\n                <div class="tech-item">\n                    <i class="'.concat(a.icon,' tech-item__icon"></i>\n                </div>\n                <p class="tech-item__title">').concat(a.name,"</p>\n            </div>\n        ")})),n}(a),'</div>\n                    </div>\n                    <div class="card-buttons">\n                        <a href="').concat(a.details.link,'" target="_blank" class="card-buttons__btn card-buttons__btn--white">VISITAR</a>\n                        <a href="#" class="card-buttons__btn card-buttons__btn--green card-buttons__btn--close">VOLVER</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ')}(e))})),e=a.querySelectorAll(".card-buttons__btn--details"),n=a.querySelectorAll(".modal-container"),t=a.querySelectorAll(".card-buttons__btn--close"),e.forEach((function(a){a.addEventListener("click",(function(a){n.forEach((function(e){a.target.id===e.id&&e.classList.add("show")}))}))})),t.forEach((function(a){a.addEventListener("click",(function(a){n.forEach((function(a){a.classList.remove("show")}))}))})),i};var M=function(a,e){e.innerHTML="";var n=".navbar-menu__link--home",t=".navbar-menu__link--about",i=".navbar-menu__link--projects",s=".navbar-menu__link--skills";(a.target.matches("".concat(n))||a.target.matches("".concat(n," *")))&&e.appendChild(A()),(a.target.matches("".concat(t))||a.target.matches("".concat(t," *")))&&e.appendChild(function(){var a=document.createElement("div");a.classList.add("about-container"),a.innerHTML='<div class="banner-text"> <p class="banner-text__title">ACERCA DE</p> </div> <nav class="subnavbar-container"> <div class="subnavbar-menu"> <a href="#QuienSoy" class="subnavbar-menu__link subnavbar-menu__link--who active-sub">¿QUÍEN SOY?</a> <a href="#Preparacion" class="subnavbar-menu__link subnavbar-menu__link--preparation">PREPARACIÓN</a> <a href="#Contacto" class="subnavbar-menu__link subnavbar-menu__link--contact">CONTACTO</a> </div> </nav> <div class="render-content"></div>';var e=a.querySelector(".render-content"),n=a.querySelectorAll(".subnavbar-menu__link");return e.innerHTML=' <div class="description"> <p class="description__text"> Ingeniero en Tecnologías de la Información y la Comunicación, especializado en el desarrollo web. <br><br> Orientado a Resultados, aplicando las mejores prácticas profesionales del mercado para lograr el éxito en los objetivos establecidos. <br><br> Abierto en todo momento al nuevo conocimiento, el Trabajo en Equipo y cualquier feedback, partiendo desde el respeto la asertividad. </p> </div> <div class="component"> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-sharp fa-solid fa-location-dot component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">RESIDENCIA</p> <p class="details-content__description">Tijuana, Baja California, México.</p> </div> </div> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-solid fa-globe component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">COLABORACIÓN</p> <p class="details-content__description">Trabajo remoto o presencial.</p> </div> </div> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-solid fa-laptop-code component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">ESPECIALIDAD</p> <p class="details-content__description">Frontend y Backend.</p> </div> </div> <div class="component-wrapper"> <div class="component-figure"> <i class="fa-solid fa-globe component-figure__icon"></i> </div> <div class="details-content"> <p class="details-content__title">NIVEL DE INGLÉS</p> <p class="details-content__description">A1-A2 en la escala CEFR.</p> </div> </div> </div> ',I(n,e),a}()),(a.target.matches("".concat(i))||a.target.matches("".concat(i," *")))&&e.appendChild(x()),(a.target.matches("".concat(s))||a.target.matches("".concat(s," *")))&&e.appendChild(function(){var a=document.createElement("div");a.classList.add("skills-container"),a.innerHTML='<div class="banner-text"> <p class="banner-text__title">HABILIDADES</p> </div> <nav class="subnavbar-container"> <div class="subnavbar-menu"> <a href="#Duras" class="subnavbar-menu__link subnavbar-menu__link--duras active-sub">DURAS</a> <a href="#Blandas" class="subnavbar-menu__link subnavbar-menu__link--blandas">BLANDAS</a> <a href="#Meterias" class="subnavbar-menu__link subnavbar-menu__link--materias">MATERIAS</a> <a href="#Impulso" class="subnavbar-menu__link subnavbar-menu__link--impulso">IMPULSO</a> </div> </nav> <div class="render-content"></div> ';var e=a.querySelector(".render-content"),n=a.querySelectorAll(".subnavbar-menu__link");return e.innerHTML='<div class="description"> <p class="description__text"> Estas son algunas de las habilidades duras en las que me especializo: </p> <br> </div> <div class="main-front"> <div class="front-container"> <p class="front-main-title">FRONTEND</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-html5 front-icon"></i> </p> <p class="front-title">HTML</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-css3-alt front-icon"></i> </p> <p class="front-title">CSS</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-bootstrap front-icon"></i> </p> <p class="front-title">Bootrstrap</p> </div> </div> </div> <div class="front-container"> <p class="front-main-title">BACKEND</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-php front-icon"></i> </p> <p class="front-title">PHP</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-node-js front-icon"></i> </p> <p class="front-title">Node JS</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-square-js front-icon"></i> </p> <p class="front-title">JS</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-python front-icon"></i> </p> <p class="front-title">Python</p> </div> </div> </div> <div class="front-container"> <p class="front-main-title">BASE DE DATOS</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-database front-icon"></i> </p> <p class="front-title">MySQL</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-database front-icon"></i> </p> <p class="front-title">SQLite</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-solid fa-database front-icon"></i> </p> <p class="front-title">MongoDB</p> </div> </div> </div> <div class="front-container"> <p class="front-main-title">VERSIONAMIENTO</p> <div class="front-content"> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-git-alt front-icon"></i> </p> <p class="front-title">Git</p> </div> <div class="front-item"> <p class="front-wrapper"> <i class="fa-brands fa-github front-icon"></i> </p> <p class="front-title">Github</p> </div> </div> </div> </div> ',I(n,e),a}())};!function(){console.log("✔ The Web Portfolio has been started...");var a=document.querySelector(".header-wrapper"),e=document.querySelector(".main-wrapper"),n=document.querySelector(".navbar-wrapper");a.innerHTML='<div class="overlay"></div> <div class="developer-wrapper"> <figure class="developer-picture"> <img src="https://res.cloudinary.com/daniel-dev23/image/upload/v1663090365/Portfolio%20Web/daniel-square-v1_dee6xk.jpg" alt="Daniel Gonzalez" class="developer-picture__img"> </figure> <h1 class="developer-name">Daniel Gonzalez</h1> <p class="developer-specialty">Desarrollador Web</p> </div>',e.appendChild(A()),n.innerHTML='<div class="navbar-menu"> <a href="#Inicio" class="navbar-menu__link navbar-menu__link--home active" rel="noopener"> <i class="fa-solid fa-house navbar-menu__icon"></i> </a> <a href="#AcercaDe" class="navbar-menu__link navbar-menu__link--about" rel="noopener"> <i class="fa-solid fa-user-tie navbar-menu__icon"></i> </a> <a href="#Proyectos" class="navbar-menu__link navbar-menu__link--projects" rel="noopener"> <i class="fa-solid fa-briefcase navbar-menu__icon"></i> </a> <a href="#Habilidades" class="navbar-menu__link navbar-menu__link--skills" rel="noopener"> <i class="fa-solid fa-person-rays navbar-menu__icon"></i> </a> </div>',function(a,e){a.forEach((function(n){n.addEventListener("click",(function(t){a.forEach((function(a){return a.classList.remove("active")})),n.classList.add("active"),M(t,e)}))}))}(document.querySelectorAll(".navbar-menu__link"),e)}()})()})();