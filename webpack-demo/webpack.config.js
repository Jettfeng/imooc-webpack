let path = require('path')
module.exports = {
    entry:'./src/script/main.js',
    output:{
        path:path.resolve(__dirname,'dist/js'),//出口必修是绝对路径
        filename:'bundle.js'
    }
}