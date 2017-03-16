const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = process.env.PWD;
const path = require('path');;


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  externals: {
    'react/addons': true,
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: 'sourcemap',
  entry: './src/App.js',
  module: {
    loaders:  [
      {test: /\.js$/,include: __dirname + '/src',loader: 'babel-loader',query: {presets: ['react', 'es2015']} },
      {test: /\.jsx?$/, include: root + '/src', loader: 'babel-loader'},
      {test: /\.css$/, include: root + '/src', loader: 'style-loader!css-loader'},
      {test: /\.(ttf|eot|svg|png|woff(2)?)(\?[a-z0-9=&.]+)?$/, include: root + '/src', loader: 'file-loader'}
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + './dist'
  },
  plugins: [HTMLWebpackPluginConfig]
};
