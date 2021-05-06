/* 
    1.什么是包：你写的代码（你的项目），符合一些规范后，就能称作为包
    2.包的结构：
        1)  package.json    描述文件---------必不可少的
        2)  bin     可执行二进制文件
        3)  lib     js代码
        4)  dos     文档
        5)  test    单元测试
    创建一个属于自己的包：打开命令窗口，使用命令：npm init
    快速生成： npm init -y
    注意：包名不能有汉字、不能用大写字母、不能与其它文件名重复
    当创建了一个包时，会自动生成一个文件：package.json;用于缓存已经下载过的包的下载地址，使得下一次下载安装包的速度更快些（缓存文件）

    3.npm : 
        1)  安装node后，系统默认安装了一个npm包管理器
        2)  npmjs.com网站，可以下载各种包
    
    4.npm的一些常用命令
        -1 下载包:
            1)  npm install/i 包名              下载一个最新版本的包资源
            2)  npm install/i 包名@版本号       下载一个指定版本的包
            3)  npm install/i 包名 包名         同时下载多个包
            4)  npm install/i 包名 -g           下载一个全局包（一般指的是一些工具）
            5)  npm install/i 包名 --save       将包下载到生产环境（记录在dependencies中）
            6)  npm install/i 包名 --save-dev   将包下载到开发环境（项目最终结束时，打包项目时不会打包到最终项目中；记录在devDependencies中）
        注：当下载了包后，会在当前路径中生成一个node_modules文件夹和package_lock.json文件
        -node_modules文件夹：保存下载下来的包（不要修改里面的内容）
        -package_lock.json文件：当执行npm i 的时候,会优先根据package-lock.json中记录的依赖项,下载指定版本的包,并且由于记录了下载地址,所以相对来说,下载也比较快
        -2 删除包：
            1)  npm remove/r 包名
            2)  切记不要在node_modules中直接删包
*/

// const $ = require("jquery");

const uniq = require("uniq");

let arr = [1,2,3,4,5,6,7,2,3,4,5,6,7,9,6,4,2,3,5,7,0,7,4,1,2,6,8,9];
let newArr = uniq(arr);
console.log(newArr);
