parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"amqR":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}require("./css/style.css");var n={days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')},r=function(){function e(a){var n=a.selector,r=a.targetDate;t(this,e),this.selector=n,this.targetDate=r,this.start()}return a(e,[{key:"start",value:function(){var t=this;this.targetDate.getDate();setInterval(function(){var e=Date.now(),a=t.targetDate-e,n=t.getTimeComponents(a);t.updateCountdownTimer(n)},1e3)}},{key:"pad",value:function(t){return String(t).padStart(2,"0")}},{key:"getTimeComponents",value:function(t){return{days:this.pad(Math.floor(t/864e5)),hours:this.pad(Math.floor(t%864e5/36e5)),mins:this.pad(Math.floor(t%36e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}},{key:"updateCountdownTimer",value:function(t){var e=t.days,a=t.hours,r=t.mins,o=t.secs;n.days.textContent="".concat(e),n.hours.textContent="".concat(a),n.mins.textContent="".concat(r),n.secs.textContent="".concat(o)}}]),e}(),o=new r({selector:"#timer-1",targetDate:new Date("Jan 1, 2021")});
},{"./css/style.css":"amqR"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.650afd7c.js.map