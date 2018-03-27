const merge = require('webpack-merge')


const base = require('./webpack.config.base')

module.exports = merge(base,{
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 8000,
        open: true
    }
})