/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: './main.jsx',
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      // allow imports like 'Components/MyComponent' rather than '../../../components/MyComponent'
      Components: path.resolve(__dirname, '../src/components'),
      Src: path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon: './favicon.ico',
    }),
    new Dotenv(),
  ],
};
