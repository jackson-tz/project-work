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