(function(e){function t(t){for(var r,i,u=t[0],a=t[1],f=t[2],s=0,l=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,f||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gallery-vue-3/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a9b":function(e,t,n){e.exports=n.p+"img/image-2.d7f3f82e.jpg"},"1b7e":function(e,t,n){},2846:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,i){var u=Object(r["e"])("Gallery");return Object(r["d"])(),Object(r["b"])(u)}var c={class:"gallery"};function i(e,t,n,o,i,u){return Object(r["d"])(),Object(r["b"])("div",c,[Object(r["c"])("img",{class:"gallery__image",src:u.currentPhotoPath},null,8,["src"]),Object(r["c"])("div",{class:"gallery__right-arrow",onClick:t[1]||(t[1]=function(){return u.increment&&u.increment.apply(u,arguments)})},"ᐅ"),Object(r["c"])("div",{class:"gallery__left-arrow",onClick:t[2]||(t[2]=function(){return u.decrement&&u.decrement.apply(u,arguments)})},"ᐊ")])}var u={data:function(){return{photos:[n("a2ef"),n("1a9b"),n("eef0"),n("6e13"),n("7087"),n("7e69")],currentPhoto:0}},computed:{currentPhotoPath:function(){return this.photos[this.currentPhoto]}},created:function(){window.addEventListener("keydown",this.changeCurrentPhoto)},unmounted:function(){window.removeEventListener("keydown",this.changeCurrentPhoto)},methods:{changeCurrentPhoto:function(e){"ArrowLeft"===e.key?this.decrement():"ArrowRight"===e.key&&this.increment()},increment:function(){var e=this.photos.length-1;if(e===this.currentPhoto)return this.currentPhoto=0;this.currentPhoto++},decrement:function(){var e=0;if(e===this.currentPhoto)return this.currentPhoto=this.photos.length-1;this.currentPhoto--}}};n("90c8");u.render=i;var a=u,f={name:"App",components:{Gallery:a}};n("c480");f.render=o;var p=f;Object(r["a"])(p).mount("#app")},"6e13":function(e,t,n){e.exports=n.p+"img/image-4.f97c567d.jpg"},7087:function(e,t,n){e.exports=n.p+"img/image-5.109cab66.jpg"},"7e69":function(e,t,n){e.exports=n.p+"img/image-6.9f3b0540.jpg"},"90c8":function(e,t,n){"use strict";n("2846")},a2ef:function(e,t,n){e.exports=n.p+"img/image-1.fb1f85ba.jpg"},c480:function(e,t,n){"use strict";n("1b7e")},eef0:function(e,t,n){e.exports=n.p+"img/image-3.5d5ef09c.jpg"}});
//# sourceMappingURL=app.9c67718c.js.map