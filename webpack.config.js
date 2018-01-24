let path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {

  entry: './src/index.js',
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
      { test: /\.s?css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.(gif|png|jpe?g|svg)$/i, use: ['file-loader', { loader: 'image-webpack-loader', options: { bypassOnDebug: true } }] },
    ],
  },
  devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 3001
      },
  plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
          })
        ]
};
