const webpackMerge = require('webpack-merge');
const baseConfigs = require('./webpack.base.config.js');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = webpackMerge(baseConfigs, {
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
});

