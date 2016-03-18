var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src',
    output: {
      path: 'dist',
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/index.html'
      })
    ],

    resolve: {
      extensions: ['', '.ts', '.js']
    },

    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader' },
      ],
      noParse: [
        path.join(__dirname, 'node_modules', 'angular2', 'bundles')
      ]
    },
};
