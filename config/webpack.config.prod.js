const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const base = require('./webpack.config.base')

const cleanWebpackPlugin = new CleanWebpackPlugin(path.resolve('build'),{
    root: path.resolve('./')
})
const uglifyJsPlugin = new UglifyJsPlugin()

module.exports = merge(base,{
    mode: "production",
    plugins:[cleanWebpackPlugin,uglifyJsPlugin]
})