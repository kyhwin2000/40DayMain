!function(e,o){"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o(require,exports,module):e.ouibounce=o()}(this,function(e,o,n){return function i(e,o){function n(e,o){return"undefined"==typeof e?o:e}function i(e){var o=24*e*60*60*1e3,n=new Date;return n.setTime(n.getTime()+o),"; expires="+n.toUTCString()}function t(){L.addEventListener("mouseleave",u),L.addEventListener("mouseenter",r),L.addEventListener("keydown",c)}function u(e){e.clientY>k||a(x,"true")&&!l||(w=setTimeout(m,p))}function r(e){w&&(clearTimeout(w),w=null)}function c(e){g||a(x,"true")&&!l||e.metaKey&&76===e.keyCode&&(g=!0,w=setTimeout(m,p))}function a(e,o){return d()[e]===o}function d(){for(var e=document.cookie.split("; "),o={},n=e.length-1;n>=0;n--){var i=e[n].split("=");o[i[0]]=i[1]}return o}function m(){f(),y()}function f(){e&&(e.style.display="block"),s()}function s(e){var e=e||{};"undefined"!=typeof e.cookieExpire&&(E=i(e.cookieExpire)),e.sitewide===!0&&(T=";path=/"),"undefined"!=typeof e.cookieDomain&&(b=";domain="+e.cookieDomain),"undefined"!=typeof e.cookieName&&(x=e.cookieName),document.cookie=x+"=true"+E+b+T,L.removeEventListener("mouseleave",u),L.removeEventListener("mouseenter",r),L.removeEventListener("keydown",c)}var o=o||{},l=o.aggressive||!1,k=n(o.sensitivity,20),v=n(o.timer,1e3),p=n(o.delay,0),y=o.callback||function(){},E=i(o.cookieExpire)||"",b=o.cookieDomain?";domain="+o.cookieDomain:"",x=o.cookieName?o.cookieName:"viewedOuibounceModal",T=o.sitewide===!0?";path=/":"",w=null,L=document.documentElement;setTimeout(t,v);var g=!1;return{fire:f,disable:s,checkCookieValue:a,_fireAndCallback:m}}});