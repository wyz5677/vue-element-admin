'use strict'
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    //各种开发服务器设置
    //可以被process.env.HOST覆盖
    //如果您想通过ip进行开发，请设置主机:'0.0.0.0'
    host: 'localhost',
    port: 9527, // 可以被process.env覆盖。端口，如果端口正在使用，将确定一个空闲端口
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    //使用Eslint加载器?
    //如果是这样，代码将在绑定和
    //在控制台中会显示linting错误和警告。
    useEslint: true,
    // 如果为真，则eslint错误和警告也将显示在错误覆盖中
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-source-map',

    // CSS源代码默认关闭，因为相对路径是“bug”
    //根据css加载器README，使用这个选项
    // (https://github.com/webpack/css-loader # sourcemaps)
    //根据我们的经验，他们的工作通常和预期的一样，
    //启用此选项时请注意这个问题。
    cssSourceMap: false
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',

    /**
    *您可以根据实际情况自行设置
    *如果您计划在子路径下部署站点，则需要设置此选项，
    *例如GitHub页面。如果您计划将站点部署到https://foo.github.io/bar/，
    *然后将assetsPublicPath设置为“/bar/”。
    *在大多数情况下请使用'/' !!
     */
    assetsPublicPath: '/',

    /**
     * Source Maps
     */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'source-map',

    // Gzip在默认情况下关闭许多流行的静态主机，比如
    // Surge或Netlify已经为您压缩了所有静态资产。
    //在设置为“true”之前，请确保:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build:prod --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report || false,

    // `npm run build:prod --generate_report`
    generateAnalyzerReport: process.env.npm_config_generate_report || false
  }
}
