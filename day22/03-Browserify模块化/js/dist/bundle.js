(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// 获取模块
const model1 = require("./model1");
const model2 = require("./model2");
const model3 = require("./model3");

// 使用模块
model1.foo();
model2();
model3.foo();
model3.bar();
},{"./model1":2,"./model2":3,"./model3":4}],2:[function(require,module,exports){
module.exports = {
    foo(){
        console.log("model1 foo()")
    }
}
},{}],3:[function(require,module,exports){
module.exports = function(){
    console.log("model2")
}
},{}],4:[function(require,module,exports){
exports.foo = function(){
    console.log("model foo()")
};
exports.bar = function(){
    console.log("model bar()")
}
},{}]},{},[1]);
