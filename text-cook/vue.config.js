const webpack = require('webpack')
// const ansiRegex = require('ansi-regex')

module.exports = {
  assetsDir: 'assets',
  productionSourceMap: false,
  publicPath: '',
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
  // transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
