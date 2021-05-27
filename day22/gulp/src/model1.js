// 暴露模块：分别暴露
export function foo(){
    console.log("model1 foo()");
}
export function bar(){
    console.log("model1 bar()");
    console.log(1===2);
}

export const arr = [1,2,3,4,];