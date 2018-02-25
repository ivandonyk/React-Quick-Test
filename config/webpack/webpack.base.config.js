const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const environmentConfig = require(`../environment/env_${process.env.NODE_ENV}`);


const config = {
  entry: [
    path.join(environmentConfig.srcPath, 'index.jsx'),
  ],

  output: {
    path: environmentConfig.outputPath,
    publicPath: environmentConfig.publicPath,
    filename: 'bundle-[hash].js',
  },

  resolve: {
    modules: [
      environmentConfig.srcPath,
      path.resolve(__dirname, '../../node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react',
              'stage-0',
              'stage-1',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        query: {
          name: '[name].[hash].[ext]',
          outputPath: 'images/',
          publicPath: environmentConfig.publicPath,
        },
      },
	    {
		    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		    loader: 'url-loader?limit=10000&mimetype=application/font-woff',
		    query: {
			    name: '[name].[hash].[ext]',
			    outputPath: 'fonts/',
		    },
	    },
	    {
		    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		    loader: 'file-loader',
		    query: {
			    name: '[name].[hash].[ext]',
			    outputPath: 'fonts/',
		    },
	    }
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../../index.html'),
    }),
  ],
};

module.exports = config;
