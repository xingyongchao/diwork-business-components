const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

var target = "http://ir6fs8gj.c87e2267-1001-4c70-bb2a-ab41f3b81aa3.app.yyuap.com";
var target = "https://mock.yonyoucloud.com/mock/268";

const devConfig = {
    devtool: 'inline-source-map',// devtool优化
    entry: {
        app: [
            'babel-polyfill',
            path.join(__dirname, 'demo/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            include: path.join(__dirname, './src'),
            use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]"]
          },
          {
            test: /\.css$/,
            include: [
                path.join(__dirname, './demo'),
                path.join(__dirname, './node_modules'),
            ],
            use: ["style-loader","css-loader"]
          }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'HOST': '""',
            }
        })
    ],
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './build'),
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: {
            "/api": {
                target,
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);