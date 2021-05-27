// 引入gulp模块
const gulp = require("gulp");
// 定义默认任务
gulp.task("test",async function(){
    console.log("gulp test")
})

// 对语法进行检查利用gulp-jshint
// 先下载：jshint gulp-jshint -D
// 引入模块
const jshint = require("gulp-jshint");
// 定义任务
gulp.task("jshint",async function(){
    return gulp.src("./src/*.js")
    .pipe(jshint({
        esversion: 6, // 使用es6的语法
        asi: false, // 必须添加分号
        eqeqeq: true, // 必须使用全等： ===
    }))
    .pipe(jshint.reporter("default")); // 插件中查看
})

// 转换语法利用 gulp-babel
// 下载包 gulp-babel  @babel/core @babel/preset-env -D
// 引入模块
const babel = require("gulp-babel");
// 定义任务
gulp.task("babel",async function(){
    return gulp.src("./src/*.js")
    .pipe(babel({
        presets: ["@babel/env"],
    }))
    .pipe(gulp.dest("./bulid/js")) // 输出到指定的文件
})
// 语法转化后变成了CommonJs语法，还需要用browserify转换

// 使用gulp browserify 转换 CommonJs模块语法
// 先下载包 gulp-browserify 安装插件 gulp-rename (用于重命名)
// 引入插件
const browserify = require("gulp-browserify");
const rename = require("gulp-rename");
// 定义任务
gulp.task("browserify",async function(){
    return gulp.src("./bulid/js/app.js")
    .pipe(browserify())
    .pipe(rename("built.js")) // 文件重命名
    .pipe(gulp.dest("bulid/js")) // 输出位置
})

// 使用gulp-uglify插件压缩文件
// 下载 gulp-iglify -D
// 引入插件
const uglify = require("gulp-uglify");
gulp.task("uglify",async function(){
    return gulp.src("./bulid/js/built.js")
    .pipe(uglify())
    .pipe(rename("dist.main.js"))
    .pipe(gulp.dest("dist/js"))
})

// 配置默认任务，让多个任务一起执行
gulp.task("defaul",gulp.series("jshint","babel","browserify"))
