!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("react-library-starter",[],t):"object"==typeof exports?exports["react-library-starter"]=t():e["react-library-starter"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=42)}([function(e,t,n){"use strict";var r=n(5),o=r;e.exports=o},function(e,t,n){"use strict";function r(e){return void 0!==e.ref}function o(e){return void 0!==e.key}var i=n(4),a=n(12),u=(n(0),n(15),Object.prototype.hasOwnProperty),s=n(13),c={key:!0,ref:!0,__self:!0,__source:!0},l=function(e,t,n,r,o,i,a){var u={$$typeof:s,type:e,key:t,ref:n,props:a,_owner:i};return u};l.createElement=function(e,t,n){var i,s={},f=null,p=null,h=null,d=null;if(null!=t){r(t)&&(p=t.ref),o(t)&&(f=""+t.key),h=void 0===t.__self?null:t.__self,d=void 0===t.__source?null:t.__source;for(i in t)u.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i])}var v=arguments.length-2;if(1===v)s.children=n;else if(v>1){for(var g=Array(v),y=0;y<v;y++)g[y]=arguments[y+2];s.children=g}if(e&&e.defaultProps){var m=e.defaultProps;for(i in m)void 0===s[i]&&(s[i]=m[i])}return l(e,f,p,h,d,a.current,s)},l.createFactory=function(e){var t=l.createElement.bind(null,e);return t.type=e,t},l.cloneAndReplaceKey=function(e,t){var n=l(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n},l.cloneElement=function(e,t,n){var s,f=i({},e.props),p=e.key,h=e.ref,d=e._self,v=e._source,g=e._owner;if(null!=t){r(t)&&(h=t.ref,g=a.current),o(t)&&(p=""+t.key);var y;e.type&&e.type.defaultProps&&(y=e.type.defaultProps);for(s in t)u.call(t,s)&&!c.hasOwnProperty(s)&&(void 0===t[s]&&void 0!==y?f[s]=y[s]:f[s]=t[s])}var m=arguments.length-2;if(1===m)f.children=n;else if(m>1){for(var b=Array(m),w=0;w<m;w++)b[w]=arguments[w+2];f.children=b}return l(e.type,p,h,d,v,g,f)},l.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===s},e.exports=l},function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,u,s],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";function r(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var o=new Error(n);throw o.name="Invariant Violation",o.framesToPop=1,o}e.exports=r},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var n,o,s=r(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var l in n)a.call(n,l)&&(s[l]=n[l]);if(i){o=i(n);for(var f=0;f<o.length;f++)u.call(n,o[f])&&(s[o[f]]=n[o[f]])}}return s}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=a,this.updater=n||i}var o=n(3),i=n(8),a=(n(15),n(6));n(2),n(0);r.prototype.isReactComponent={},r.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e?o("85"):void 0,this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")};e.exports=r},function(e,t,n){"use strict";function r(e,t){}var o=(n(0),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){r(e,"forceUpdate")},enqueueReplaceState:function(e,t){r(e,"replaceState")},enqueueSetState:function(e,t){r(e,"setState")}});e.exports=o},function(e,t,n){e.exports=n(24)()},function(e,t,n){"use strict";e.exports=n(30)},function(e,t,n){var r=n(22);"string"==typeof r&&(r=[[e.i,r,""]]);var o,i={hmr:!0};i.transform=o,i.insertInto=void 0;n(40)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";var r={current:null};e.exports=r},function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=r},function(e,t,n){"use strict";var r={};e.exports=r},function(e,t,n){"use strict";var r=!1;e.exports=r},function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);if("function"==typeof t)return t}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=r(o),a=n(9),u=r(a),s=n(11),c=r(s),l=function(e){var t=e.page,n=e.pageHeight;return i.default.createElement("div",{className:c.default.page,style:{height:n}},t)};l.propTypes={page:u.default.number.isRequired,pageHeight:u.default.number.isRequired},t.default=l,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.dbnc=!1;var r=function(e,t){window.dbnc===!1&&(window.dbnc=!0,e(),setTimeout(function(){window.dbnc=!1},t))};t.default=r,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(21),u=r(a),s=function(){function e(){o(this,e),this.start=0,this.change=0,this.increment=10,this.currentTime=0,this.delay=0,this.callback=function(){},this.transitionner=new u.default,console.log(this.easing)}return i(e,[{key:"to",value:function(e){var t=this,n=e.position,r=e.duration,o=e.delay,i=e.easing,a=e.callback;this.currentTime=0,this.start=window.pageYOffset,this.change=n-this.start,this.easing=i,this.duration=r,this.callback=a,setTimeout(function(){t.animate()},o)}},{key:"animate",value:function(){var e=this;this.currentTime+=this.increment;var t=this.transitionner.ease(this.easing,this.currentTime,this.start,this.change,this.duration);window.scrollTo(0,t),this.currentTime<this.duration?setTimeout(function(){e.animate()},this.increment):this.callback()}}]),e}();t.default=s,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.documentElement,o=r.clientWidth,i=r.clientHeight;t.vw=function(e){return o*(e/100)},t.vh=function(e){return i*(e/100)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.linear=function(e,t,n,r){return n*e/r+t},this.easeInQuad=function(e,t,n,r){return e/=r,n*e*e+t},this.easeOutQuad=function(e,t,n,r){return e/=r,-n*e*(e-2)+t},this.easeInOutQuad=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)},this.easeInCubic=function(e,t,n,r){return e/=r,n*e*e*e+t},this.easeOutCubic=function(e,t,n,r){return e/=r,e--,n*(e*e*e+1)+t},this.easeInOutCubic=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e+t:(e-=2,n/2*(e*e*e+2)+t)},this.easeInQuart=function(e,t,n,r){return e/=r,n*e*e*e*e+t},this.easeOutQuart=function(e,t,n,r){return e/=r,e--,-n*(e*e*e*e-1)+t},this.easeInOutQuart=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e*e+t:(e-=2,-n/2*(e*e*e*e-2)+t)},this.easeInQuint=function(e,t,n,r){return e/=r,n*e*e*e*e*e+t},this.easeOutQuint=function(e,t,n,r){return e/=r,e--,n*(e*e*e*e*e+1)+t},this.easeInOutQuint=function(e,t,n,r){return e/=r/2,e<1?n/2*e*e*e*e*e+t:(e-=2,n/2*(e*e*e*e*e+2)+t)},this.easeInSin=function(e,t,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+t},this.easeOutSine=function(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t},this.easeInOutSine=function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t},this.easeInExpo=function(e,t,n,r){return n*Math.pow(2,10*(e/r-1))+t},this.easeOutExpo=function(e,t,n,r){return n*(-Math.pow(2,-10*e/r)+1)+t},this.easeInOutExpo=function(e,t,n,r){return e/=r/2,e<1?n/2*Math.pow(2,10*(e-1))+t:(e--,n/2*(-Math.pow(2,-10*e)+2)+t)},this.easeInCirc=function(e,t,n,r){return e/=r,-n*(Math.sqrt(1-e*e)-1)+t},this.easeOutCirc=function(e,t,n,r){return e/=r,e--,n*Math.sqrt(1-e*e)+t},this.easeInOutCirc=function(e,t,n,r){return e/=r/2,e<1?-n/2*(Math.sqrt(1-e*e)-1)+t:(e-=2,n/2*(Math.sqrt(1-e*e)+1)+t)}}return o(e,[{key:"getMethod",value:function(e){switch(e){case"linear":return this.linear;case"easeInOut":return this.easeInOut;case"easeInQuad":return this.easeInQuad;case"easeOutQuad":return this.easeOutQuad;case"easeInOutQuad":return this.easeInOutQuad;case"easeInCubic":return this.easeInCubic;case"easeOutCubic":return this.easeOutCubic;case"easeInOutCubic":return this.easeInOutCubic;case"easeInCirc":return this.easeInCirc;case"easeOutCirc":return this.easeOutCirc;case"easeInOutCirc":return this.easeInOutCirc;case"easeInQuint":return this.easeInExpo;case"easeOutQuint":return this.easeOutExpo;case"easeInOutQuint":return this.easeInOutQuint;case"easeInSin":return this.easeInSin;case"easeOutSin":return this.easeOutSin;case"easeInOutSin":return this.easeInOutSin;case"easeInExpo":return this.easeInExpo;case"easeOutExpo":return this.easeOutExpo;case"easeInOutExpo":return this.easeInOutExpo;default:throw new Error("inexisting easing function")}}},{key:"ease",value:function(e,t,n,r,o){var i=this.getMethod(e);return i(t,n,r,o)}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){t=e.exports=n(23)(!1),t.push([e.i,".magneticScroll__panda___3v7MV {\n  width: 100vw;\n  height: 100vh;\n}\n\n.magneticScroll__magnetic___2nh1P {\n  width: inherit;\n  height: inherit;\n}\n\n.magneticScroll__page___3qIht {\n  width: 100vw;\n  height: 100vh;\n}\n",""]),t.locals={panda:"magneticScroll__panda___3v7MV",magnetic:"magneticScroll__magnetic___2nh1P",page:"magneticScroll__page___3qIht"}},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";var r=n(26),o=n(27),i=n(25);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,s){if(o(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,a,u,s],f=0;c=new Error(t.replace(/%s/g,function(){return l[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";function r(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},r=(""+e).replace(t,function(e){return n[e]});return"$"+r}function o(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"},r="."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1);return(""+r).replace(t,function(e){return n[e]})}var i={escape:r,unescape:o};e.exports=i},function(e,t,n){"use strict";var r=n(3),o=(n(2),function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)}),i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r){var o=this;if(o.instancePool.length){var i=o.instancePool.pop();return o.call(i,e,t,n,r),i}return new o(e,t,n,r)},s=function(e){var t=this;e instanceof t?void 0:r("25"),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=10,l=o,f=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||l,n.poolSize||(n.poolSize=c),n.release=s,n},p={addPoolingTo:f,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:u};e.exports=p},function(e,t,n){"use strict";var r=n(4),o=n(31),i=n(7),a=n(36),u=n(32),s=n(33),c=n(1),l=n(34),f=n(37),p=n(38),h=(n(0),c.createElement),d=c.createFactory,v=c.cloneElement,g=r,y={Children:{map:o.map,forEach:o.forEach,count:o.count,toArray:o.toArray,only:p},Component:i,PureComponent:a,createElement:h,cloneElement:v,isValidElement:c.isValidElement,PropTypes:l,createClass:u.createClass,createFactory:d,createMixin:function(e){return e},DOM:s,version:f,__spread:g};e.exports=y},function(e,t,n){"use strict";function r(e){return(""+e).replace(w,"$&/")}function o(e,t){this.func=e,this.context=t,this.count=0}function i(e,t,n){var r=e.func,o=e.context;r.call(o,t,e.count++)}function a(e,t,n){if(null==e)return e;var r=o.getPooled(t,n);y(e,i,r),o.release(r)}function u(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function s(e,t,n){var o=e.result,i=e.keyPrefix,a=e.func,u=e.context,s=a.call(u,t,e.count++);Array.isArray(s)?c(s,o,n,g.thatReturnsArgument):null!=s&&(v.isValidElement(s)&&(s=v.cloneAndReplaceKey(s,i+(!s.key||t&&t.key===s.key?"":r(s.key)+"/")+n)),o.push(s))}function c(e,t,n,o,i){var a="";null!=n&&(a=r(n)+"/");var c=u.getPooled(t,a,o,i);y(e,s,c),u.release(c)}function l(e,t,n){if(null==e)return e;var r=[];return c(e,r,null,t,n),r}function f(e,t,n){return null}function p(e,t){return y(e,f,null)}function h(e){var t=[];return c(e,t,null,g.thatReturnsArgument),t}var d=n(29),v=n(1),g=n(5),y=n(39),m=d.twoArgumentPooler,b=d.fourArgumentPooler,w=/\/+/g;o.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},d.addPoolingTo(o,m),u.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d.addPoolingTo(u,b);var E={forEach:a,map:l,mapIntoWithKeyPrefixInternal:c,count:p,toArray:h};e.exports=E},function(e,t,n){"use strict";function r(e){return e}function o(e,t){var n=w.hasOwnProperty(t)?w[t]:null;P.hasOwnProperty(t)&&("OVERRIDE_BASE"!==n?p("73",t):void 0),e&&("DEFINE_MANY"!==n&&"DEFINE_MANY_MERGED"!==n?p("74",t):void 0)}function i(e,t){if(t){"function"==typeof t?p("75"):void 0,v.isValidElement(t)?p("76"):void 0;var n=e.prototype,r=n.__reactAutoBindPairs;t.hasOwnProperty(m)&&E.mixins(e,t.mixins);for(var i in t)if(t.hasOwnProperty(i)&&i!==m){var a=t[i],u=n.hasOwnProperty(i);if(o(u,i),E.hasOwnProperty(i))E[i](e,a);else{var l=w.hasOwnProperty(i),f="function"==typeof a,h=f&&!l&&!u&&t.autobind!==!1;if(h)r.push(i,a),n[i]=a;else if(u){var d=w[i];!l||"DEFINE_MANY_MERGED"!==d&&"DEFINE_MANY"!==d?p("77",d,i):void 0,"DEFINE_MANY_MERGED"===d?n[i]=s(n[i],a):"DEFINE_MANY"===d&&(n[i]=c(n[i],a))}else n[i]=a}}}else;}function a(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in E;o?p("78",n):void 0;var i=n in e;i?p("79",n):void 0,e[n]=r}}}function u(e,t){e&&t&&"object"==typeof e&&"object"==typeof t?void 0:p("80");for(var n in t)t.hasOwnProperty(n)&&(void 0!==e[n]?p("81",n):void 0,e[n]=t[n]);return e}function s(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return u(o,n),u(o,r),o}}function c(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function f(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=l(e,o)}}var p=n(3),h=n(4),d=n(7),v=n(1),g=(n(14),n(8)),y=n(6),m=(n(2),n(0),"mixins"),b=[],w={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},E={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)i(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=h({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=h({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=s(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=h({},e.propTypes,t)},statics:function(e,t){a(e,t)},autobind:function(){}},P={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e),t&&this.updater.enqueueCallback(this,t,"replaceState")},isMounted:function(){return this.updater.isMounted(this)}},O=function(){};h(O.prototype,d.prototype,P);var _={createClass:function(e){var t=r(function(e,n,r){this.__reactAutoBindPairs.length&&f(this),this.props=e,this.context=n,this.refs=y,this.updater=r||g,this.state=null;var o=this.getInitialState?this.getInitialState():null;"object"!=typeof o||Array.isArray(o)?p("82",t.displayName||"ReactCompositeComponent"):void 0,this.state=o});t.prototype=new O,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],b.forEach(i.bind(null,t)),i(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),t.prototype.render?void 0:p("83");for(var n in w)t.prototype[n]||(t.prototype[n]=null);return t},injection:{injectMixin:function(e){b.push(e)}}};e.exports=_},function(e,t,n){"use strict";var r=n(1),o=r.createFactory,i={a:o("a"),abbr:o("abbr"),address:o("address"),area:o("area"),article:o("article"),aside:o("aside"),audio:o("audio"),b:o("b"),base:o("base"),bdi:o("bdi"),bdo:o("bdo"),big:o("big"),blockquote:o("blockquote"),body:o("body"),br:o("br"),button:o("button"),canvas:o("canvas"),caption:o("caption"),cite:o("cite"),code:o("code"),col:o("col"),colgroup:o("colgroup"),data:o("data"),datalist:o("datalist"),dd:o("dd"),del:o("del"),details:o("details"),dfn:o("dfn"),dialog:o("dialog"),div:o("div"),dl:o("dl"),dt:o("dt"),em:o("em"),embed:o("embed"),fieldset:o("fieldset"),figcaption:o("figcaption"),figure:o("figure"),footer:o("footer"),form:o("form"),h1:o("h1"),h2:o("h2"),h3:o("h3"),h4:o("h4"),h5:o("h5"),h6:o("h6"),head:o("head"),header:o("header"),hgroup:o("hgroup"),hr:o("hr"),html:o("html"),i:o("i"),iframe:o("iframe"),img:o("img"),input:o("input"),ins:o("ins"),kbd:o("kbd"),keygen:o("keygen"),label:o("label"),legend:o("legend"),li:o("li"),link:o("link"),main:o("main"),map:o("map"),mark:o("mark"),menu:o("menu"),menuitem:o("menuitem"),meta:o("meta"),meter:o("meter"),nav:o("nav"),noscript:o("noscript"),object:o("object"),ol:o("ol"),optgroup:o("optgroup"),option:o("option"),output:o("output"),p:o("p"),param:o("param"),picture:o("picture"),pre:o("pre"),progress:o("progress"),q:o("q"),rp:o("rp"),rt:o("rt"),ruby:o("ruby"),s:o("s"),samp:o("samp"),script:o("script"),section:o("section"),select:o("select"),small:o("small"),source:o("source"),span:o("span"),strong:o("strong"),style:o("style"),sub:o("sub"),summary:o("summary"),sup:o("sup"),table:o("table"),tbody:o("tbody"),td:o("td"),textarea:o("textarea"),tfoot:o("tfoot"),th:o("th"),thead:o("thead"),time:o("time"),title:o("title"),tr:o("tr"),track:o("track"),u:o("u"),ul:o("ul"),var:o("var"),video:o("video"),wbr:o("wbr"),circle:o("circle"),clipPath:o("clipPath"),defs:o("defs"),ellipse:o("ellipse"),g:o("g"),image:o("image"),line:o("line"),linearGradient:o("linearGradient"),mask:o("mask"),path:o("path"),pattern:o("pattern"),polygon:o("polygon"),polyline:o("polyline"),radialGradient:o("radialGradient"),rect:o("rect"),stop:o("stop"),svg:o("svg"),text:o("text"),tspan:o("tspan")};e.exports=i},function(e,t,n){"use strict";function r(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function o(e){this.message=e,this.stack=""}function i(e){function t(t,n,r,i,a,u,s){i=i||S,u=u||r;if(null==n[r]){var c=P[a];return t?new o(null===n[r]?"The "+c+" `"+u+"` is marked as required "+("in `"+i+"`, but its value is `null`."):"The "+c+" `"+u+"` is marked as required in "+("`"+i+"`, but its value is `undefined`.")):null}return e(n,r,i,a,u)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function a(e){function t(t,n,r,i,a,u){var s=t[n],c=m(s);if(c!==e){var l=P[i],f=b(s);return new o("Invalid "+l+" `"+a+"` of type "+("`"+f+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return i(t)}function u(){return i(_.thatReturns(null))}function s(e){function t(t,n,r,i,a){if("function"!=typeof e)return new o("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var s=P[i],c=m(u);return new o("Invalid "+s+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an array."))}for(var l=0;l<u.length;l++){var f=e(u,l,r,i,a+"["+l+"]",O);if(f instanceof Error)return f}return null}return i(t)}function c(){function e(e,t,n,r,i){var a=e[t];if(!E.isValidElement(a)){var u=P[r],s=m(a);return new o("Invalid "+u+" `"+i+"` of type "+("`"+s+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return i(e)}function l(e){function t(t,n,r,i,a){if(!(t[n]instanceof e)){var u=P[i],s=e.name||S,c=w(t[n]);return new o("Invalid "+u+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected ")+("instance of `"+s+"`."))}return null}return i(t)}function f(e){function t(t,n,i,a,u){for(var s=t[n],c=0;c<e.length;c++)if(r(s,e[c]))return null;var l=P[a],f=JSON.stringify(e);return new o("Invalid "+l+" `"+u+"` of value `"+s+"` "+("supplied to `"+i+"`, expected one of "+f+"."))}return Array.isArray(e)?i(t):_.thatReturnsNull}function p(e){function t(t,n,r,i,a){if("function"!=typeof e)return new o("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=m(u);if("object"!==s){var c=P[i];return new o("Invalid "+c+" `"+a+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an object."))}for(var l in u)if(u.hasOwnProperty(l)){var f=e(u,l,r,i,a+"."+l,O);if(f instanceof Error)return f}return null}return i(t)}function h(e){function t(t,n,r,i,a){for(var u=0;u<e.length;u++){var s=e[u];if(null==s(t,n,r,i,a,O))return null}var c=P[i];return new o("Invalid "+c+" `"+a+"` supplied to "+("`"+r+"`."))}return Array.isArray(e)?i(t):_.thatReturnsNull}function d(){function e(e,t,n,r,i){if(!g(e[t])){var a=P[r];return new o("Invalid "+a+" `"+i+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return i(e)}function v(e){function t(t,n,r,i,a){var u=t[n],s=m(u);if("object"!==s){var c=P[i];return new o("Invalid "+c+" `"+a+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `object`."))}for(var l in e){var f=e[l];if(f){var p=f(u,l,r,i,a+"."+l,O);if(p)return p}}return null}return i(t)}function g(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(g);if(null===e||E.isValidElement(e))return!0;var t=x(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!g(n.value))return!1}else for(;!(n=r.next()).done;){var o=n.value;if(o&&!g(o[1]))return!1}return!0;default:return!1}}function y(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":y(t,e)?"symbol":t}function b(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){return e.constructor&&e.constructor.name?e.constructor.name:S}var E=n(1),P=n(14),O=n(35),_=n(5),x=n(16),S=(n(0),"<<anonymous>>"),I={array:a("array"),bool:a("boolean"),func:a("function"),number:a("number"),object:a("object"),string:a("string"),symbol:a("symbol"),any:u(),arrayOf:s,element:c(),instanceOf:l,node:d(),objectOf:p,oneOf:f,oneOfType:h,shape:v};o.prototype=Error.prototype,e.exports=I},function(e,t,n){"use strict";var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=r},function(e,t,n){"use strict";function r(e,t,n){this.props=e,this.context=t,this.refs=s,this.updater=n||u}function o(){}var i=n(4),a=n(7),u=n(8),s=n(6);o.prototype=a.prototype,r.prototype=new o,r.prototype.constructor=r,i(r.prototype,a.prototype),r.prototype.isPureReactComponent=!0,e.exports=r},function(e,t,n){"use strict";e.exports="15.4.2"},function(e,t,n){"use strict";function r(e){return i.isValidElement(e)?void 0:o("143"),e}var o=n(3),i=n(1);n(2);e.exports=r},function(e,t,n){"use strict";function r(e,t){return e&&"object"==typeof e&&null!=e.key?c.escape(e.key):t.toString(36)}function o(e,t,n,i){var p=typeof e;if("undefined"!==p&&"boolean"!==p||(e=null),null===e||"string"===p||"number"===p||"object"===p&&e.$$typeof===u)return n(i,e,""===t?l+r(e,0):t),1;var h,d,v=0,g=""===t?l:t+f;if(Array.isArray(e))for(var y=0;y<e.length;y++)h=e[y],d=g+r(h,y),v+=o(h,d,n,i);else{var m=s(e);if(m){var b,w=m.call(e);if(m!==e.entries)for(var E=0;!(b=w.next()).done;)h=b.value,d=g+r(h,E++),v+=o(h,d,n,i);else for(;!(b=w.next()).done;){var P=b.value;P&&(h=P[1],d=g+c.escape(P[0])+f+r(h,0),v+=o(h,d,n,i))}}else if("object"===p){var O="",_=String(e);a("31","[object Object]"===_?"object with keys {"+Object.keys(e).join(", ")+"}":_,O)}}return v}function i(e,t,n){return null==e?0:o(e,"",t,n)}var a=n(3),u=(n(12),n(13)),s=n(16),c=(n(2),n(28)),l=(n(0),"."),f=":";e.exports=i},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u=i[1],s=i[2],c=i[3],l={css:u,media:s,sourceMap:c};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function i(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=E[E.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),E.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=E.indexOf(e);t>=0&&E.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),i(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),i(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(i=t.transform(e.css),!i)return function(){};e.css=i}if(t.singleton){var c=w++;n=b||(b=u(t)),r=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=h.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=O(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function h(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=P(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=v(function(){return window&&document&&document.all&&!window.atob}),y=function(e){return document.querySelector(e)},m=function(e){var t={};return function(e){if("function"==typeof e)return e();if("undefined"==typeof t[e]){var n=y.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),b=null,w=0,E=[],P=n(41);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=d[u.id];s.refs--,i.push(s)}if(e){var c=o(e,t);r(c,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var O=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/"),o=e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"});return o}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(10),l=r(c),f=n(9),p=r(f),h=n(17),d=r(h),v=n(11),g=r(v),y=n(19),m=r(y),b=n(18),w=r(b),E=n(20),P=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onPageChangeStart=function(){n.props.onPageChangeStart()},n.onPageChangeEnd=function(){n.props.onPageChangeEnd(),setTimeout(function(){n.scrolling=!1},40)},n.onScroll=function(e){e.preventDefault(),e.stopPropagation(),"wheel"===e.type&&n.checkAsc(e.wheelDelta)&&(0,w.default)(function(){n.scroll(e)},300),n.asc=e.wheelDelta},n.onTouch=function(e){e.preventDefault(),n.ts=e.touches[0].clientY},n.onKeydown=function(e){if(!n.scrolling)switch(e.which){case 38:n.currentPage>0&&(n.scrolling=!0,n.scrollUp());break;case 40:n.currentPage<n.getNbPages()&&(n.scrolling=!0,n.scrollDown())}},n.onResize=function(e){return n.resize(e)},n.onScrollFinished=function(){"up"===n.dir?n.props.onScrollUpEnd():n.props.onScrollDownEnd(),n.onPageChangeEnd()},n.getCurrentPage=function(){return Math.ceil(window.pageYOffset/n.getTotalHeight())},n.getTotalHeight=function(){return n.props.pageHeight*n.getNbPages()},n.getNbPages=function(){return n.props.pages.length},n.currentPage=0,n.ts=null,n.animating=!1,n.pageHeight=0,n.pageWidth=0,n.scrolling=!1,n.asc=0,n.dir=null,n.options={duration:400,delay:50,smooth:"easeInOutQuint"},n.checkAsc=function(e){return n.asc>0&&n.asc<e||n.asc<0&&n.asc>e},n.animateScrollTo=function(e){var t=n.props,r=t.duration,o=t.delay,i=t.easing;n.animateScroll.to({position:e,duration:r,delay:o,easing:i,callback:n.onScrollFinished
})},n.state={pageWidth:(0,E.vw)(n.props.pageWidth),pageHeight:(0,E.vh)(n.props.pageHeight)},n.options=u({},n.options,n.props.scrollOptions),n.animateScroll=new m.default,n}return a(t,e),s(t,[{key:"componentWillMount",value:function(){this.resize()}},{key:"componentDidMount",value:function(){window.scrollTo(0,0),window.addEventListener("wheel",this.onScroll),window.addEventListener("touchmove",this.onScroll,{passive:!1}),window.addEventListener("touchstart",this.onTouch,{passive:!1}),window.addEventListener("keydown",this.onKeydown),window.addEventListener("resize",this.onResize),this.currentPage=this.getCurrentPage()}},{key:"componentWillUpdate",value:function(){this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("wheel",this.onScroll),window.removeEventListener("touchmove",this.onScroll),window.removeEventListener("touchstart",this.onTouch),window.removeEventListener("keydown",this.onKeydown)}},{key:"getScrollPosition",value:function(e){return this.state.pageHeight*e}},{key:"getHeight",value:function(){return this.getNbPages()*this.state.pageHeight}},{key:"resize",value:function(){var e=this;this.scrolling||(0,w.default)(function(){e.setState({pageWidth:(0,E.vw)(e.props.pageWidth),pageHeight:(0,E.vh)(e.props.pageHeight)})},300)}},{key:"scrollTo",value:function(e){this.currentPage=e,this.scrollToCurrentPage()}},{key:"scrollUp",value:function(){this.props.onScrollUpStart(),this.dir="up",this.currentPage>0&&(this.currentPage-=1,this.scrollToCurrentPage())}},{key:"scrollDown",value:function(){this.props.onScrollDownStart(),this.dir="down",this.currentPage<this.getNbPages()&&(this.currentPage+=1,this.scrollToCurrentPage())}},{key:"scrollToCurrentPage",value:function(){var e=this.getScrollPosition(this.currentPage);this.onPageChangeStart(),this.animateScrollTo(e)}},{key:"scroll",value:function(e){var t=1;if(!this.scrolling)if(this.scrolling=!0,"wheel"===e.type&&e.wheelDelta){var n=e.wheelDelta;n>t&&this.currentPage>0?this.scrollUp():n<-t&&this.currentPage<this.getNbPages()-1?this.scrollDown():this.scrolling=!1}else if("touchmove"===e.type&&e.changedTouches){var r=e.changedTouches[0].clientY;this.ts>r&&this.currentPage<this.getNbPages()-1?this.scrollDown():this.ts<r&&this.currentPage>0?this.scrollUp():this.scrolling=!1}else this.scrolling=!1}},{key:"render",value:function(){var e=this,t={width:this.state.pageWidth,height:this.getHeight()};return l.default.createElement("div",{className:g.default.panda,style:t},l.default.createElement("div",{className:g.default.magnetic},this.props.pages.map(function(t){return l.default.createElement(d.default,{page:t,pageHeight:e.state.pageHeight})})))}}]),t}(c.Component);P.propTypes={pages:p.default.arrayOf(p.default.Node).isRequired,pageHeight:p.default.number,pageWidth:p.default.number,onPageChangeStart:p.default.func,onPageChangeEnd:p.default.func,onScrollUpStart:p.default.func,onScrollUpEnd:p.default.func,onScrollDownStart:p.default.func,onScrollDownEnd:p.default.func,scrollOptions:p.default.shape(),easing:p.default.string,duration:p.default.number,delay:p.default.number},P.defaultProps={pageHeight:100,pageWidth:100,onPageChangeStart:function(){},onPageChangeEnd:function(){},onScrollUpStart:function(){},onScrollUpEnd:function(){},onScrollDownStart:function(){},onScrollDownEnd:function(){},scrollOptions:{},easing:"linear",duration:500,delay:0},t.default=P,e.exports=t.default}])});