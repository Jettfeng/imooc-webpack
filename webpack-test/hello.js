require('./word.js')
require('style-loader!css-loader!./style.css')//指定用css-loader解析css文件,style-loader新建style标签，并插入html文件头部
function hello(str) {
    alert(str)
}
hello('hello word')