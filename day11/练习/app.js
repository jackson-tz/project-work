let {log} = console;
log("app");

const module1 = require("./module1");

let{a,b} = module1;

log(a)
log(b)