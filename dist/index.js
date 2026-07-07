"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=i(function(F,n){
var y=require("fs").writeFile;function g(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);y.apply(null,e)}n.exports=g
});var l=i(function(h,a){
var u=require("fs").writeFileSync;function o(e,r,t){try{arguments.length>2?u(e,r,t):u(e,r)}catch(v){return v}return null}a.exports=o
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=s(),w=l();p(c,"sync",w);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
