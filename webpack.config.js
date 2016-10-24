var path = require('path');
var webpack = require('webpack');

// webpack.config.js
if (process.env.NODE_ENV === 'development') {
  var loaders = ['react-hot','babel-loader']
} else {
  var loaders = ['babel-loader']
}
module.exports = {
  devtool: 'eval',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: loaders,
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
