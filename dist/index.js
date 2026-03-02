"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=t(function(F,i){
var y=require("fs").writeFile;function g(){var e,r;for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);y.apply(null,e)}i.exports=g
});var a=t(function(h,u){
var s=require("fs").writeFileSync;function o(e,r,c){try{arguments.length>2?s(e,r,c):s(e,r)}catch(v){return v}return null}u.exports=o
});var p=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=n(),w=a();p(l,"sync",w);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
