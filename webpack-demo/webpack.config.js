const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
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
            },
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('autoprefixer')({
                                    browsers:['last 5 version']//浏览器的最近5个版本
                                })
                            ]
                        }
                    }
                    ]
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