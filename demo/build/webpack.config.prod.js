const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin()
  ]
})
