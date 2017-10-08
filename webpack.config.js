const webpack = require('webpack'),
    path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        library: 'cache-algorithms',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.join(__dirname, 'src')
        ],
        extensions: ['.js']
    }
};
