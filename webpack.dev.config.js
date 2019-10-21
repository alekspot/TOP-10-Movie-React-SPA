const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

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
        // new BrowserSyncPlugin(
        //     // BrowserSync options
        //     {
        //       // browse to http://localhost:3000/ during development
        //       host: 'localhost',
        //       // proxy the Webpack Dev Server endpoint
        //       // (which should be serving on http://localhost:3100/)
        //       // through BrowserSync
        //       proxy: 'http://localhost:9000/'
        //     },
        //     // plugin options
        //     {
        //       // prevent BrowserSync from reloading the page
        //       // and let Webpack Dev Server take care of this
        //       reload: false
        //     }
        //   )
    ]
});
