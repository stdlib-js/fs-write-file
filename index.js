// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(e){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,l=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,u=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,f,p,_;if("object"!=typeof e||null===e||"[object Array]"===l.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===l.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||c.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,_="set"in r,f&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),_&&a&&a.call(e,t,r.set),e};var f=t,p=e.writeFile;function _(){var e,t;for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);p.apply(null,e)}var s,y=e.writeFileSync;return s=function(e,t,r){try{arguments.length>2?y(e,t,r):y(e,t)}catch(e){return e}return null},f(_,"sync",{configurable:!1,enumerable:!1,writable:!1,value:s}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("fs")):"function"==typeof define&&define.amd?define(["fs"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).writeFile=t(e.require$$0);
//# sourceMappingURL=index.js.map
