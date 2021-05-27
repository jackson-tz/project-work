// 引入模块
import {foo, bar, arr}  from "./model1";
import {fn1, data} from "./model2";
import obj from './model3';

// 使用模块

foo();
bar();
console.log(arr);
console.log("========================================");
fn1();
console.log(data);
console.log("========================================");
console.log(obj);
console.log(1===2);