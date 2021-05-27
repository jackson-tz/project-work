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