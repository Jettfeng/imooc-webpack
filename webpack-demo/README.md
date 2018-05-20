<h1>2.1：webpack配置文件</h1>
<h2>1.出口必须设置为绝对路径： path:path.resolve(__dirname,'dist/js')</h2>
<h2>如果配置文件名称不是webpack.config.js，则打包命令为：webpack --config 配置文件名称；例如:如果配置文件名称为webpack.dev.js ，打包就启动webpack --config webpack.config.js</2>
<ul>
    <li>参数配置:</li>
    <li>1.在package.json里面配置："webpack":"webpack --config webpack.config.js --progress --display-modules --colors --display-reasons"</li>
    <li>2.npm run webpack即可</li>
</ul>

<h1>2.2:webpack配置的entry和output new</h1>
