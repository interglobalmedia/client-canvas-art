!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawTree=o;var i=n(8),a=new Image;a.src="images/gravel.jpg",a.onload=function(){o()};var r=new Image;function o(t){(t=document.getElementById("canvas").getContext("2d")).save(),t.transform(1,0,-.5,1,0,0),t.scale(1,.6),t.fillStyle="rgba(0, 0, 0, 0.2)",t.fillRect(-5,-50,10,50),(0,i.createCanopyPath)(t),t.fill(),t.restore();var e=t.createLinearGradient(-5,-50,5,-50);e.addColorStop(0,"#663300"),e.addColorStop(.4,"#996600"),e.addColorStop(1,"#552200"),t.fillStyle=e,t.fillRect(-5,-50,10,50);var n=t.createLinearGradient(0,-50,0,0);n.addColorStop(0,"rgba(0, 0, 0, 0.5)"),n.addColorStop(0,"rgba(0, 0, 0, 0)"),t.fillStyle=n,t.fillRect(-5,-50,10,50),(0,i.createCanopyPath)(t),t.lineWidth=4,t.lineJoin="round",t.strokeStyle=t.createPattern(r,"repeat"),t.stroke(),t.fillStyle="rgba(31,64,10,1)",t.fill()}r.src="images/bark.jpg",r.onload=function(){o()}},function(t,e,n){"use strict";n(2);var i=n(3);try{document.createElement("canvas").getContext("2d");document.getElementById("support").innerHTML="HTML5 Canvas is supported in your browser"}catch(t){document.getElementById("support").innerHTML="HTML5 Canvas is not supported in your browser"}(0,i.drawCanvas)()},function(t,e,n){t.exports={wrapper:"wrapper___1kG3C",Site:"Site___1sLYo","Site-content":"Site-content___g0Pyb","site-footer":"site-footer___2vHFo"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.resizeCanvas=c,e.checkRender=f,e.drawCanvas=u;var i,a=(i=n(4))&&i.__esModule?i:{default:i},r=n(5),o=n(7),s=n(9);function c(){var t=document.getElementById("canvas");t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;var e=t.clientWidth,n=t.clientHeight;return(t.width!=e||t.height!=n)&&(t.width=e,t.height=n,!0)}var l=!0;function f(){(c()||l)&&(l=!1,u()),requestAnimationFrame(f)}function u(){var t=document.getElementById("canvas"),e=t.getContext("2d");t.width=t.clientWidth,t.height=t.clientHeight,e.lineWidth=0,e.fillStyle="rgba(255, 251, 214, 1)",e.fillRect(0,0,t.width,t.height),e.clearRect(0,0,t.width,t.height),e.strokeRect(-5,0,t.width,t.height),t.innerHTML='<canvas id="canvas" class="'.concat(a.default.canvas,'">< /canvas>'),(0,r.displayText)(),(0,s.curvyPath)(),(0,o.drawTrees)()}f()},function(t,e,n){},function(t,e,n){"use strict";function i(){var t=document.getElementById("canvas"),e=t.getContext("2d");e.save(),t.width=t.clientWidth,t.height=t.clientHeight,e.font="100% Muli",e.fillStyle="rgba(130, 161, 143, 1)",e.fillText("© 2018 Maria D. Campbell",t.width/2.5-10,t.height-15)}Object.defineProperty(e,"__esModule",{value:!0}),e.displayText=i,n(6).load({google:{families:["Gochi Hand","Gochi Hand Cursive","Muli","Muli Sans Serif"],urls:["https://fonts.googleapis.com/css?family=Gochi+Hand","https://fonts.googleapis.com/css?family=Muli"]},active:function(){i()}})},function(t,e,n){var i;!function(){function a(t,e,n){return t.call.apply(t.bind,arguments)}function r(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function o(t,e,n){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:r).apply(null,arguments)}var s=Date.now||function(){return+new Date};function c(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var l=!!window.FontFace;function f(t,e,n,i){if(e=t.c.createElement(e),n)for(var a in n)n.hasOwnProperty(a)&&("style"==a?e.style.cssText=n[a]:e.setAttribute(a,n[a]));return i&&e.appendChild(t.c.createTextNode(i)),e}function u(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),a=0;a<e.length;a+=1){for(var r=!1,o=0;o<i.length;o+=1)if(e[a]===i[o]){r=!0;break}r||i.push(e[a])}for(e=[],a=0;a<i.length;a+=1){for(r=!1,o=0;o<n.length;o+=1)if(i[a]===n[o]){r=!0;break}r||e.push(i[a])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,e){for(var n=t.className.split(/\s+/),i=0,a=n.length;i<a;i++)if(n[i]==e)return!0;return!1}function g(t,e,n){function i(){s&&a&&r&&(s(o),s=null)}e=f(t,"link",{rel:"stylesheet",href:e,media:"all"});var a=!1,r=!0,o=null,s=n||null;l?(e.onload=function(){a=!0,i()},e.onerror=function(){a=!0,o=Error("Stylesheet failed to load"),i()}):setTimeout(function(){a=!0,i()},0),u(t,"head",e)}function v(t,e,n,i){var a=t.c.getElementsByTagName("head")[0];if(a){var r=f(t,"script",{src:e}),o=!1;return r.onload=r.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,n&&n(null),r.onload=r.onreadystatechange=null,"HEAD"==r.parentNode.tagName&&a.removeChild(r))},a.appendChild(r),setTimeout(function(){o||(o=!0,n&&n(Error("Script load timeout")))},i||5e3),r}return null}function w(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,b(t)}}function y(t,e){t.c=e,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function T(t){this.a=t||"-"}function _(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function x(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function j(t){return t.a+t.f}function S(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function C(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function k(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new T("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function P(t){if(t.g){var e=p(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),d(t.f,n,i)}M(t,"inactive")}function M(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,j(n)):t.h[e]())}function O(){this.c={}}function E(t,e){this.c=t,this.f=e,this.a=f(this.c,"span",{"aria-hidden":"true"},this.f)}function I(t){u(t.c,"body",t.a)}function B(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+x(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function A(t,e,n,i,a,r){this.g=t,this.j=e,this.a=i,this.c=n,this.f=a||3e3,this.h=r||void 0}function H(t,e,n,i,a,r,o){this.v=t,this.B=e,this.c=n,this.a=i,this.s=o||"BESbswy",this.f={},this.w=a||3e3,this.u=r||null,this.m=this.j=this.h=this.g=null,this.g=new E(this.c,this.s),this.h=new E(this.c,this.s),this.j=new E(this.c,this.s),this.m=new E(this.c,this.s),t=B(t=new _(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=t,t=B(t=new _(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=t,t=B(t=new _("serif",j(this.a))),this.j.a.style.cssText=t,t=B(t=new _("sans-serif",j(this.a))),this.m.a.style.cssText=t,I(this.g),I(this.h),I(this.j),I(this.m)}T.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},A.prototype.start=function(){var t=this.c.o.document,e=this,n=s(),i=new Promise(function(i,a){!function r(){s()-n>=e.f?a():t.fonts.load(function(t){return S(t)+" "+t.f+"00 300px "+x(t.c)}(e.a),e.h).then(function(t){1<=t.length?i():setTimeout(r,25)},function(){a()})}()}),a=null,r=new Promise(function(t,n){a=setTimeout(n,e.f)});Promise.race([r,i]).then(function(){a&&(clearTimeout(a),a=null),e.g(e.a)},function(){e.j(e.a)})};var W={D:"serif",C:"sans-serif"},L=null;function N(){if(null===L){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);L=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return L}function F(t,e,n){for(var i in W)if(W.hasOwnProperty(i)&&e===t.f[W[i]]&&n===t.f[W[i]])return!0;return!1}function R(t){var e,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(e=n===t.f.serif&&i===t.f["sans-serif"])||(e=N()&&F(t,n,i)),e?s()-t.A>=t.w?N()&&F(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?G(t,t.v):G(t,t.B):function(t){setTimeout(o(function(){R(this)},t),50)}(t):G(t,t.v)}function G(t,e){setTimeout(o(function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)},t),0)}function q(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}H.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),R(this)};var D=null;function $(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&d(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),M(t,"active")):P(t.a))}function z(t){this.j=t,this.a=new O,this.h=0,this.f=this.g=!0}function X(t,e,n,i,a){var r=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=a||null,s=i||{};if(0===n.length&&r)P(e.a);else{e.f+=n.length,r&&(e.j=r);var c,l=[];for(c=0;c<n.length;c++){var f=n[c],u=s[f.c],h=e.a,p=f;if(h.g&&d(h.f,[h.a.c("wf",p.c,j(p).toString(),"loading")]),M(h,"fontloading",p),h=null,null===D)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);D=p?42<parseInt(p[1],10):!g}else D=!1;h=D?new A(o(e.g,e),o(e.h,e),e.c,f,e.s,u):new H(o(e.g,e),o(e.h,e),e.c,f,e.s,t,u),l.push(h)}for(c=0;c<l.length;c++)l[c].start()}},0)}function Y(t,e){this.c=t,this.a=e}function J(t,e){this.c=t,this.a=e}function K(t,e){this.c=t||U,this.a=[],this.f=[],this.g=e||""}q.prototype.g=function(t){var e=this.a;e.g&&d(e.f,[e.a.c("wf",t.c,j(t).toString(),"active")],[e.a.c("wf",t.c,j(t).toString(),"loading"),e.a.c("wf",t.c,j(t).toString(),"inactive")]),M(e,"fontactive",t),this.m=!0,$(this)},q.prototype.h=function(t){var e=this.a;if(e.g){var n=p(e.f,e.a.c("wf",t.c,j(t).toString(),"active")),i=[],a=[e.a.c("wf",t.c,j(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,j(t).toString(),"inactive")),d(e.f,i,a)}M(e,"fontinactive",t),$(this)},z.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],a=n.timeout;!function(t){t.g&&d(t.f,[t.a.c("wf","loading")]),M(t,"loading")}(e);var i=function(t,e,n){var i,a=[];for(i in e)if(e.hasOwnProperty(i)){var r=t.c[i];r&&a.push(r(e[i],n))}return a}(t.a,n,t.c),r=new q(t.c,e,a);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load(function(e,n,i){X(t,r,e,n,i)})}(this,new k(this.c,t),t)},Y.prototype.load=function(t){var e=this,n=e.a.projectId,i=e.a.version;if(n){var a=e.c.o;v(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),function(i){i?t([]):(a["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(a["__mti_fntLst"+n]){var i,r=a["__mti_fntLst"+n](),o=[];if(r)for(var s=0;s<r.length;s++){var c=r[s].fontfamily;null!=r[s].fontStyle&&null!=r[s].fontWeight?(i=r[s].fontStyle+r[s].fontWeight,o.push(new _(c,i))):o.push(new _(c))}t(o)}else setTimeout(function(){e()},50)}())}).id="__MonotypeAPIScript__"+n}else t([])},J.prototype.load=function(t){var e,n,i=this.a.urls||[],a=this.a.families||[],r=this.a.testStrings||{},o=new w;for(e=0,n=i.length;e<n;e++)g(this.c,i[e],m(o));var s=[];for(e=0,n=a.length;e<n;e++)if((i=a[e].split(":"))[1])for(var c=i[1].split(","),l=0;l<c.length;l+=1)s.push(new _(i[0],c[l]));else s.push(new _(i[0]));y(o,function(){t(s,r)})};var U="https://fonts.googleapis.com/css";function V(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Z={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},tt={i:"i",italic:"i",n:"n",normal:"n"},et=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function nt(t,e){this.c=t,this.a=e}var it={Arimo:!0,Cousine:!0,Tinos:!0};function at(t,e){this.c=t,this.a=e}function rt(t,e){this.c=t,this.f=e,this.a=[]}nt.prototype.load=function(t){var e=new w,n=this.c,i=new K(this.a.api,this.a.text),a=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var a=e[i].split(":");3==a.length&&t.f.push(a.pop());var r="";2==a.length&&""!=a[1]&&(r=":"),t.a.push(a.join(r))}}(i,a);var r=new V(a);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),a=i[0].replace(/\+/g," "),r=["n4"];if(2<=i.length){var o;if(o=[],s=i[1])for(var s,c=(s=s.split(",")).length,l=0;l<c;l++){var f;if((f=s[l]).match(/^[\w-]+$/))if(null==(h=et.exec(f.toLowerCase())))f="";else{if(f=null==(f=h[2])||""==f?"n":tt[f],null==(h=h[1])||""==h)h="4";else var u=Z[h],h=u||(isNaN(h)?"4":h.substr(0,1));f=[f,h].join("")}else f="";f&&o.push(f)}0<o.length&&(r=o),3==i.length&&(o=[],0<(i=(i=i[2])?i.split(","):o).length&&(i=Q[i[0]])&&(t.c[a]=i))}for(t.c[a]||(i=Q[a])&&(t.c[a]=i),i=0;i<r.length;i+=1)t.a.push(new _(a,r[i]))}}(r),g(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),m(e)),y(e,function(){t(r.a,r.c,it)})},at.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],a=0;a<e.length;a+=2)for(var r=e[a],o=e[a+1],s=0;s<o.length;s++)i.push(new _(r,o[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}},2e3):t([])},rt.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var a=0,r=n.fonts.length;a<r;++a){var o=n.fonts[a];i.a.push(new _(o.name,C("font-weight:"+o.weight+";font-style:"+o.style)))}t(i.a)},v(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",function(e){e&&t([])})):t([])};var ot=new z(window);ot.a.c.custom=function(t,e){return new J(e,t)},ot.a.c.fontdeck=function(t,e){return new rt(e,t)},ot.a.c.monotype=function(t,e){return new Y(e,t)},ot.a.c.typekit=function(t,e){return new at(e,t)},ot.a.c.google=function(t,e){return new nt(e,t)};var st={load:o(ot.load,ot)};void 0===(i=function(){return st}.call(e,n,e,t))||(t.exports=i)}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawTrees=function(){var t=document.getElementById("canvas").getContext("2d");t.save(),t.translate(325,250),t.scale(1.2,1.2),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(750,475),t.scale(2,2),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(140,290),t.scale(1.5,1.5),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(475,200),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(825,250),t.scale(1.3,1.3),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(575,420),t.scale(1.7,1.7),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(425,375),t.scale(1.3,1.3),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(300,490),t.scale(1.6,1.6),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(225,200),t.scale(1.1,1.1),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(70,420),t.scale(1.25,1.25),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(680,240),t.scale(1.2,1.2),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(50,180),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(610,170),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(730,100),t.scale(.65,.65),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(400,150),t.scale(.8,.8),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(535,145),t.scale(.75,.75),(0,i.drawTree)(t),t.restore(),t.save(),t.translate(200,400),t.scale(1.3,1.3),(0,i.drawTree)(t),t.restore()};var i=n(0);window.addEventListener("load",i.drawTree,!0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createCanopyPath=function(t){t.beginPath(),t.moveTo(-25,-50),t.lineTo(-10,-80),t.lineTo(-20,-80),t.lineTo(-5,-110),t.lineTo(-15,-110),t.lineTo(0,-140),t.lineTo(15,-110),t.lineTo(5,-110),t.lineTo(20,-80),t.lineTo(10,-80),t.lineTo(25,-50),t.closePath()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.curvyPath=function(){var t=document.getElementById("canvas").getContext("2d");t.save(),t.translate(-10,350),t.beginPath(),t.moveTo(0,0),t.translate(550,-100),t.quadraticCurveTo(150,0,250,-180),t.quadraticCurveTo(300,-275,400,-270),t.strokeStyle=t.createPattern(a,"repeat"),t.lineWidth=30,t.stroke(),t.shadowColor="rgba(94, 62, 0, 1)",t.shadowBlur=5,t.shadowOffsetX=2,t.shadowOffsetY=3,t.stroke(),t.restore()};var i=n(0),a=new Image;a.src="images/gravel.jpg",a.onload=function(){(0,i.drawTree)()}}]);