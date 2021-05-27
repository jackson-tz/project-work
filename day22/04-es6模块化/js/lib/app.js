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