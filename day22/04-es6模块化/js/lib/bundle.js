(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _model = require("./model1");

var _model2 = require("./model2");

var _model3 = require("./model3");

var _model4 = _interopRequireDefault(_model3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 使用模块

(0, _model.foo)(); // 引入模块

(0, _model.bar)();
console.log(_model.arr);
console.log("========================================");
(0, _model2.fn1)();
console.log(_model2.data);
console.log("========================================");
console.log(_model4.default);
},{"./model1":2,"./model2":3,"./model3":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
exports.bar = bar;
// 暴露模块：分别暴露
function foo() {
    console.log("model1 foo()");
};
function bar() {
    console.log("model1 bar()");
};

var arr = exports.arr = [1, 2, 3, 4];
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 暴露模块：统一暴露
function fn1() {
    console.log("model2 fn1()");
};
var data = "data";

exports.fn1 = fn1;
exports.data = data;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 暴露模块：默认模式
exports.default = {
    name: "Bob",
    setName: function setName(name) {
        this.name = name;
    }
};
},{}]},{},[1]);
