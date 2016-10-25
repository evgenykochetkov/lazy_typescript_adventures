var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: './ts_version/index.tsx',
    output: {
        path: path.join(__dirname, 'static/ts_version'),
        filename: 'bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader?useBabel=true&useCache=true'],
                cacheable: true,
                exclude: /(node_modules|core-js|(ts_version\/routes\/.*?\.tsx?))/,
            },
            {
                test: /ts_version\/routes\/.*?\.tsx?/,
                loaders: ['bundle?lazy', 'awesome-typescript-loader?useBabel=true&useCache=true'],
                cacheable: true,
                exclude: /(node_modules|core-js)/,
            }
        ],
        preLoaders: [
            {
              test: /\.js$/,
              loader: "source-map-loader"
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
