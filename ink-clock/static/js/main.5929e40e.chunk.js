(this.webpackJsonpsuper_simple_ink_screen_clock=this.webpackJsonpsuper_simple_ink_screen_clock||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),o=t(4),c=t.n(o),a=(t(9),t(2)),s=t(1),u=r.a.forwardRef((function(e,n){return Object(s.jsx)("span",{className:"num",ref:n||null,children:e.number})})),l=r.a.forwardRef((function(e,n){var t=Object(i.useState)(new Date),r=Object(a.a)(t,2),o=r[0],c=r[1];return Object(i.useEffect)((function(){var e=function e(){var n=new Date;return c(n),window.setTimeout(e,6e4-+n%6e4)}();return function(){window.clearTimeout(e)}}),[]),Object(s.jsx)(i.Fragment,{children:o.toTimeString().substring(0,5).split("").map((function(e,t){return Object(s.jsx)(u,{number:e,ref:n},t)}))})}));var d=function(){var e=Object(i.useState)((function(){return Math.min(window.innerHeight/2,window.innerWidth/6)+"px"})),n=Object(a.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(400),c=Object(a.a)(o,2),u=c[0],d=c[1],f=Object(i.useState)((function(){return Math.max(window.innerWidth,window.innerHeight)})),g=Object(a.a)(f,2),w=g[0],h=g[1],v=Object(i.useState)("rgba(255, 255, 255, 0)"),b=Object(a.a)(v,2),j=b[0],m=b[1],p=Object(i.useState)(0),O=Object(a.a)(p,2),k=O[0],x=O[1],S=Object(i.useRef)(null),W=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=function(){var e=W.current;if(e){var n=k/90%2,t=+window.getComputedStyle(e).fontSize.replace("px",""),i=.98*(n?window.innerHeight:window.innerWidth)/(5*e.offsetWidth),o=.98*(n?window.innerWidth:window.innerHeight)/e.offsetHeight,c=Math.min(i,o);r(t*c+"px"),h(Math.max(window.innerWidth,window.innerHeight))}};return e(),m("black"),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[k]);var C=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(e){if(u>=900)return;d(u+100)}else u<=100||d(u-100)};return Object(s.jsxs)("div",{id:"main",style:{fontSize:t,fontWeight:u,color:j},ref:S,children:[Object(s.jsx)("div",{id:"clock",style:{width:w+"px",height:w+"px",lineHeight:w+"px",marginTop:-(w-window.innerHeight)/2+"px",marginLeft:-(w-window.innerWidth)/2+"px",transform:"rotate("+k+"deg)"},children:Object(s.jsx)(l,{ref:W})}),Object(s.jsx)("div",{className:"trigger trigger-top-left",onClick:function(){!document.fullscreenElement&&S.current?S.current.requestFullscreen():document.exitFullscreen&&document.exitFullscreen()}}),Object(s.jsx)("div",{className:"trigger trigger-top-right",onClick:function(){!function(){var e=k>=270?0:k+90;console.log(e),x(e)}()}}),Object(s.jsx)("div",{className:"trigger trigger-bottom-left",onClick:function(){C(!1)}}),Object(s.jsx)("div",{className:"trigger trigger-bottom-right",onClick:function(){C()}})]})},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),o(e),c(e)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ink-clock",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/ink-clock","/service-worker.js");f?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):g(n,e)}))}}(),w()},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.5929e40e.chunk.js.map