const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: './dist',
        port: 8000,
        proxy: {
            // 请求到 '/device' 下 的请求都会被代理到 target： http://debug.xxx.com 中
            '/user/*': {
                target: 'http://localhost:8080/lh_online_test',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: ['vue-loader']
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                loader:['style-loader','css-loader','less-loader']
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}