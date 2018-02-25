const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfigs = require('./webpack.base.config.js');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const environment = process.env.NODE_ENV || 'production';
const environmentConfig = require(`../environment/env_${environment}`);


module.exports = webpackMerge(baseConfigs, {
  output: {
    path: environmentConfig.outputPath,
    publicPath: environmentConfig.publicPath,
    filename: 'js/[name]-[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
      minimize: true,
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../index.html'),
      inject: true,
      minify: false,
      hash: true,
      chunksSortMode: 'dependency',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../../node_modules')) === 0
        );
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
  ],
});
