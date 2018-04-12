/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  serve: {
    dev: {
      publicPath: '/',
      stats: {
        chunks: false,
        colors: true,
        modules: false,
      },
    },
    add: (app) => {
      // https://github.com/webpack-contrib/webpack-serve#add-function-parameters
      app.use(convert(history()));
    },
  },
});
