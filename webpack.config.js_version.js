var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: './js_version/index.jsx',
    output: {
        path: path.join(__dirname, 'static/js_version'),
        filename: 'bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                cacheable: true,
                exclude: /(node_modules|core-js|(js_version\/routes\/.*?\.jsx?))/,
            },
            {
                test: /js_version\/routes\/.*?\.jsx?/,
                loaders: ['bundle?lazy', 'babel-loader'],
                cacheable: true,
                exclude: /(node_modules|core-js)/,
            }
        ]
    },
    resolveLoader: {
        root: path.resolve(__dirname, './')
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.ejs',
            inject: 'body'
        }),        
        new webpack.DefinePlugin({
            'process.env': {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
        })
    ]
}
