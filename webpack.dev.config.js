const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',// devtool优化
    entry: {
        app: [
            'babel-polyfill',
            path.join(__dirname, 'demo/index.js')
        ]
    },
    output: {
        filename: '[name].js'
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
            use: [
                "style-loader",
                {
                    loader: 'css-loader',
                    options: {
                      modules: false,
                      importLoaders: 1,
                      sourceMap: false
                    }
                },
            ]
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
        port: 2222,
        contentBase: path.join(__dirname, './build'),
        historyApiFallback: true,
        host: '0.0.0.0',
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