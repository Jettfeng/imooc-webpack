let path = require('path')
module.exports = {
    //entry:['./src/script/main.js','./src/script/a.js'],//数组形式
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },//对象形式
    output:{
        path:path.resolve(__dirname,'dist/js'),//出口必修是绝对路径
        filename:'[name]-bundle-[id]-[hash].js'//[name],[id],[hash]随意组合配置
    }
}