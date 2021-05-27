(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _model = require("./model2");

var _model2 = require("./model1");

(0, _model2.fn)();
(0, _model.fn2)();
console.log(_model2.arr);
console.log(_model.a);
},{"./model1":2,"./model2":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function fn() {
    console.log("model1");
}
var arr = [1, 2, 3];

exports.fn = fn;
exports.arr = arr;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fn2 = fn2;
var a = exports.a = 3;
function fn2() {
    console.log("model2");
}
},{}]},{},[1]);
