const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src_path   = path.resolve('src')
const build_path = path.resolve('build')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: "index.html",
    template: path.resolve(src_path,'index.html'),
    minify: {
        collapseWhitespace: true
    },
    hash: true
})

module.exports = {
    entry: path.resolve(src_path,'app.js'),
    output: {
        path: path.resolve(__dirname,build_path),
        filename: 'build-[hash].js'
    },
    module:{
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: '/node_modules' 
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: 'images/'
                        }
                    },
                ]
            }
        ]
    },
    plugins:[htmlWebpackPlugin]
}