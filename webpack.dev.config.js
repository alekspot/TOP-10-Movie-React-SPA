const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config');

module.exports = merge.smart(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.scss|css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devServer: {
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
