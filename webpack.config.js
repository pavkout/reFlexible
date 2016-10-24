var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

// webpack.config.js
if (process.env.NODE_ENV === 'development') {
  var loaders = ['react-hot','babel-loader']
} else {
  var loaders = ['babel-loader']
}
module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  debug: true,
  resolve: {
     extensions: ['', '.js', '.jsx'],
     root: path.resolve(__dirname),
     alias: {
      app: './src/app',
      reFlex: './components/reFlex/reFlex'
    }
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
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss-loader'
    }
  ]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
