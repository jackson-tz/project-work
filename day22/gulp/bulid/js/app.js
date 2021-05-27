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