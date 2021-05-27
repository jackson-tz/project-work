(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _model = require("./model1");

var _model2 = require("./model2");

var _model3 = _interopRequireDefault(require("./model3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入模块
// 使用模块
(0, _model.foo)();
(0, _model.bar)();
console.log(_model.arr);
console.log("========================================");
(0, _model2.fn1)();
console.log(_model2.data);
console.log("========================================");
console.log(_model3["default"]);
console.log(1 === 2);
},{"./model1":2,"./model2":3,"./model3":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;
exports.arr = void 0;

// 暴露模块：分别暴露
function foo() {
  console.log("model1 foo()");
}

function bar() {
  console.log("model1 bar()");
  console.log(1 === 2);
}

var arr = [1, 2, 3, 4];
exports.arr = arr;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn1 = fn1;
exports.data = void 0;

// 暴露模块：统一暴露
function fn1() {
  console.log("model2 fn1()");
}

var data = "data";
exports.data = data;
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// 暴露模块：默认模式
var _default = {
  name: "Bob",
  setName: function setName(name) {
    this.name = name;
  }
};
exports["default"] = _default;
},{}]},{},[1])