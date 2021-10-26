/*! For license information please see 9306.js.LICENSE.txt */
(self.webpackChunkrentgratawidget=self.webpackChunkrentgratawidget||[]).push([[9306],{59731:(n,t,e)=>{"use strict";e.d(t,{lX:()=>w,q_:()=>O,PP:()=>A,ob:()=>l,Ep:()=>s});var o=e(22122),r=e(78273),i=e(2177);function a(n){return"/"===n.charAt(0)?n:"/"+n}function c(n){return"/"===n.charAt(0)?n.substr(1):n}function f(n,t){return function(n,t){return 0===n.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(n.charAt(t.length))}(n,t)?n.substr(t.length):n}function u(n){return"/"===n.charAt(n.length-1)?n.slice(0,-1):n}function s(n){var t=n.pathname,e=n.search,o=n.hash,r=t||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function l(n,t,e,i){var a;"string"==typeof n?(a=function(n){var t=n||"/",e="",o="",r=t.indexOf("#");-1!==r&&(o=t.substr(r),t=t.substr(0,r));var i=t.indexOf("?");return-1!==i&&(e=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===e?"":e,hash:"#"===o?"":o}}(n)).state=t:(void 0===(a=(0,o.Z)({},n)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return e&&(a.key=e),i?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=(0,r.Z)(a.pathname,i.pathname)):a.pathname=i.pathname:a.pathname||(a.pathname="/"),a}function d(){var n=null;var t=[];return{setPrompt:function(t){return n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,e,o,r){if(null!=n){var i="function"==typeof n?n(t,e):n;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(!1!==i)}else r(!0)},appendListener:function(n){var e=!0;function o(){e&&n.apply(void 0,arguments)}return t.push(o),function(){e=!1,t=t.filter((function(n){return n!==o}))}},notifyListeners:function(){for(var n=arguments.length,e=new Array(n),o=0;o<n;o++)e[o]=arguments[o];t.forEach((function(n){return n.apply(void 0,e)}))}}}var h=!("undefined"==typeof window||!window.document||!window.document.createElement);function v(n,t){t(window.confirm(n))}var p="popstate",m="hashchange";function y(){try{return window.history.state||{}}catch(n){return{}}}function w(n){void 0===n&&(n={}),h||(0,i.Z)(!1);var t,e=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,c=!(-1===window.navigator.userAgent.indexOf("Trident")),w=n,g=w.forceRefresh,b=void 0!==g&&g,P=w.getUserConfirmation,x=void 0===P?v:P,S=w.keyLength,O=void 0===S?6:S,k=n.basename?u(a(n.basename)):"";function A(n){var t=n||{},e=t.key,o=t.state,r=window.location,i=r.pathname+r.search+r.hash;return k&&(i=f(i,k)),l(i,o,e)}function T(){return Math.random().toString(36).substr(2,O)}var $=d();function L(n){(0,o.Z)(z,n),z.length=e.length,$.notifyListeners(z.location,z.action)}function E(n){(function(n){return void 0===n.state&&-1===navigator.userAgent.indexOf("CriOS")})(n)||R(A(n.state))}function C(){R(A(y()))}var M=!1;function R(n){if(M)M=!1,L();else{$.confirmTransitionTo(n,"POP",x,(function(t){t?L({action:"POP",location:n}):function(n){var t=z.location,e=F.indexOf(t.key);-1===e&&(e=0);var o=F.indexOf(n.key);-1===o&&(o=0);var r=e-o;r&&(M=!0,Z(r))}(n)}))}}var U=A(y()),F=[U.key];function I(n){return k+s(n)}function Z(n){e.go(n)}var H=0;function _(n){1===(H+=n)&&1===n?(window.addEventListener(p,E),c&&window.addEventListener(m,C)):0===H&&(window.removeEventListener(p,E),c&&window.removeEventListener(m,C))}var j=!1;var z={length:e.length,action:"POP",location:U,createHref:I,push:function(n,t){var o="PUSH",i=l(n,t,T(),z.location);$.confirmTransitionTo(i,o,x,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(r)if(e.pushState({key:a,state:c},null,t),b)window.location.href=t;else{var f=F.indexOf(z.location.key),u=F.slice(0,f+1);u.push(i.key),F=u,L({action:o,location:i})}else window.location.href=t}}))},replace:function(n,t){var o="REPLACE",i=l(n,t,T(),z.location);$.confirmTransitionTo(i,o,x,(function(n){if(n){var t=I(i),a=i.key,c=i.state;if(r)if(e.replaceState({key:a,state:c},null,t),b)window.location.replace(t);else{var f=F.indexOf(z.location.key);-1!==f&&(F[f]=i.key),L({action:o,location:i})}else window.location.replace(t)}}))},go:Z,goBack:function(){Z(-1)},goForward:function(){Z(1)},block:function(n){void 0===n&&(n=!1);var t=$.setPrompt(n);return j||(_(1),j=!0),function(){return j&&(j=!1,_(-1)),t()}},listen:function(n){var t=$.appendListener(n);return _(1),function(){_(-1),t()}}};return z}var g="hashchange",b={hashbang:{encodePath:function(n){return"!"===n.charAt(0)?n:"!/"+c(n)},decodePath:function(n){return"!"===n.charAt(0)?n.substr(1):n}},noslash:{encodePath:c,decodePath:a},slash:{encodePath:a,decodePath:a}};function P(n){var t=n.indexOf("#");return-1===t?n:n.slice(0,t)}function x(){var n=window.location.href,t=n.indexOf("#");return-1===t?"":n.substring(t+1)}function S(n){window.location.replace(P(window.location.href)+"#"+n)}function O(n){void 0===n&&(n={}),h||(0,i.Z)(!1);var t=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),n),r=e.getUserConfirmation,c=void 0===r?v:r,p=e.hashType,m=void 0===p?"slash":p,y=n.basename?u(a(n.basename)):"",w=b[m],O=w.encodePath,k=w.decodePath;function A(){var n=k(x());return y&&(n=f(n,y)),l(n)}var T=d();function $(n){(0,o.Z)(j,n),j.length=t.length,T.notifyListeners(j.location,j.action)}var L=!1,E=null;function C(){var n,t,e=x(),o=O(e);if(e!==o)S(o);else{var r=A(),i=j.location;if(!L&&(t=r,(n=i).pathname===t.pathname&&n.search===t.search&&n.hash===t.hash))return;if(E===s(r))return;E=null,function(n){if(L)L=!1,$();else{var t="POP";T.confirmTransitionTo(n,t,c,(function(e){e?$({action:t,location:n}):function(n){var t=j.location,e=F.lastIndexOf(s(t));-1===e&&(e=0);var o=F.lastIndexOf(s(n));-1===o&&(o=0);var r=e-o;r&&(L=!0,I(r))}(n)}))}}(r)}}var M=x(),R=O(M);M!==R&&S(R);var U=A(),F=[s(U)];function I(n){t.go(n)}var Z=0;function H(n){1===(Z+=n)&&1===n?window.addEventListener(g,C):0===Z&&window.removeEventListener(g,C)}var _=!1;var j={length:t.length,action:"POP",location:U,createHref:function(n){var t=document.querySelector("base"),e="";return t&&t.getAttribute("href")&&(e=P(window.location.href)),e+"#"+O(y+s(n))},push:function(n,t){var e="PUSH",o=l(n,void 0,void 0,j.location);T.confirmTransitionTo(o,e,c,(function(n){if(n){var t=s(o),r=O(y+t);if(x()!==r){E=t,function(n){window.location.hash=n}(r);var i=F.lastIndexOf(s(j.location)),a=F.slice(0,i+1);a.push(t),F=a,$({action:e,location:o})}else $()}}))},replace:function(n,t){var e="REPLACE",o=l(n,void 0,void 0,j.location);T.confirmTransitionTo(o,e,c,(function(n){if(n){var t=s(o),r=O(y+t);x()!==r&&(E=t,S(r));var i=F.indexOf(s(j.location));-1!==i&&(F[i]=t),$({action:e,location:o})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(n){void 0===n&&(n=!1);var t=T.setPrompt(n);return _||(H(1),_=!0),function(){return _&&(_=!1,H(-1)),t()}},listen:function(n){var t=T.appendListener(n);return H(1),function(){H(-1),t()}}};return j}function k(n,t,e){return Math.min(Math.max(n,t),e)}function A(n){void 0===n&&(n={});var t=n,e=t.getUserConfirmation,r=t.initialEntries,i=void 0===r?["/"]:r,a=t.initialIndex,c=void 0===a?0:a,f=t.keyLength,u=void 0===f?6:f,h=d();function v(n){(0,o.Z)(b,n),b.length=b.entries.length,h.notifyListeners(b.location,b.action)}function p(){return Math.random().toString(36).substr(2,u)}var m=k(c,0,i.length-1),y=i.map((function(n){return l(n,void 0,"string"==typeof n?p():n.key||p())})),w=s;function g(n){var t=k(b.index+n,0,b.entries.length-1),o=b.entries[t];h.confirmTransitionTo(o,"POP",e,(function(n){n?v({action:"POP",location:o,index:t}):v()}))}var b={length:y.length,action:"POP",location:y[m],index:m,entries:y,createHref:w,push:function(n,t){var o="PUSH",r=l(n,t,p(),b.location);h.confirmTransitionTo(r,o,e,(function(n){if(n){var t=b.index+1,e=b.entries.slice(0);e.length>t?e.splice(t,e.length-t,r):e.push(r),v({action:o,location:r,index:t,entries:e})}}))},replace:function(n,t){var o="REPLACE",r=l(n,t,p(),b.location);h.confirmTransitionTo(r,o,e,(function(n){n&&(b.entries[b.index]=r,v({action:o,location:r}))}))},go:g,goBack:function(){g(-1)},goForward:function(){g(1)},canGo:function(n){var t=b.index+n;return t>=0&&t<b.entries.length},block:function(n){return void 0===n&&(n=!1),h.setPrompt(n)},listen:function(n){return h.appendListener(n)}};return b}},69921:(n,t)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for,o=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,f=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,v=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,w=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function P(n){if("object"==typeof n&&null!==n){var t=n.$$typeof;switch(t){case o:switch(n=n.type){case s:case l:case i:case c:case a:case h:return n;default:switch(n=n&&n.$$typeof){case u:case d:case m:case p:case f:return n;default:return t}}case r:return t}}}function x(n){return P(n)===l}t.AsyncMode=s,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=f,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=m,t.Memo=p,t.Portal=r,t.Profiler=c,t.StrictMode=a,t.Suspense=h,t.isAsyncMode=function(n){return x(n)||P(n)===s},t.isConcurrentMode=x,t.isContextConsumer=function(n){return P(n)===u},t.isContextProvider=function(n){return P(n)===f},t.isElement=function(n){return"object"==typeof n&&null!==n&&n.$$typeof===o},t.isForwardRef=function(n){return P(n)===d},t.isFragment=function(n){return P(n)===i},t.isLazy=function(n){return P(n)===m},t.isMemo=function(n){return P(n)===p},t.isPortal=function(n){return P(n)===r},t.isProfiler=function(n){return P(n)===c},t.isStrictMode=function(n){return P(n)===a},t.isSuspense=function(n){return P(n)===h},t.isValidElementType=function(n){return"string"==typeof n||"function"==typeof n||n===i||n===l||n===c||n===a||n===h||n===v||"object"==typeof n&&null!==n&&(n.$$typeof===m||n.$$typeof===p||n.$$typeof===f||n.$$typeof===u||n.$$typeof===d||n.$$typeof===w||n.$$typeof===g||n.$$typeof===b||n.$$typeof===y)},t.typeOf=P}}]);
//# sourceMappingURL=9306.js.map