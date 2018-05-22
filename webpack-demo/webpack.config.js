const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //entry:['./src/script/main.js','./src/script/a.js'],//数组形式
    entry:'./src/app.js',//对象形式
    output:{
        path:path.resolve(__dirname,'dist'),//出口必修是绝对路径
        filename:'js/[name].bundle.js',//[name],[id],[hash]随意组合配置
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html',
            inject:'body',
            title:'this is a.html',
            excludeChunks:['b','c']//引入除了chunks之外的所有chunks
        })
    ]
}