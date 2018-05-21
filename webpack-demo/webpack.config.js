const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //entry:['./src/script/main.js','./src/script/a.js'],//数组形式
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },//对象形式
    output:{
        path:path.resolve(__dirname,'dist'),//出口必修是绝对路径
        filename:'js/[name].js',//[name],[id],[hash]随意组合配置
        publicPath:'http://www.cdn.com',//占位符,打包后的文件路径将以publicPath开头
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'a.html',
            // inject:'body',
            inject:false,
            title:'this is a.html',
            //chunks:['main','a']//只引入这些chunks
            excludeChunks:['b','c']//引入除了chunks之外的所有chunks
        }),
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'b.html',
            // inject:'body',
            inject:false,
            title:'this is b.html',
            //chunks:['main','b']
            excludeChunks:['a','c']
        }),
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'c.html',
            // inject:'body',
            inject:false,
            title:'this is c.html',
            //chunks:['main','c']
            excludeChunks:['a','b']
        })
    ]
}