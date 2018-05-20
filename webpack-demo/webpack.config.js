const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //entry:['./src/script/main.js','./src/script/a.js'],//数组形式
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },//对象形式
    output:{
        path:path.resolve(__dirname,'dist'),//出口必修是绝对路径
        filename:'js/[name].js'//[name],[id],[hash]随意组合配置
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'index2.html',
            inject:'head'
        })
    ]
}