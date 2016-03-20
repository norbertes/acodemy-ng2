var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
      app: './src/index.ts',
      vendor: './src/vendor.ts',
    },
    output: {
      path: './dist',
      filename: 'bundle.js',
      publicPath: "http://localhost:7070/"
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new HtmlWebpackPlugin({
        inject: false,
        template: './src/index.html'
      })
    ],

    resolve: {
      extensions: ['', '.ts', '.js', '.css']
    },

    module: {
      loaders: [
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        }, {
          test: /\.css$/,
          loader: 'style!css?sourceMap'
        }, {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/font-woff"
        }, {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
        }, {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
        }, {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        }
      ],
      noParse: [
        path.join(__dirname, 'node_modules', 'angular2', 'bundles')
      ]
    },
};
