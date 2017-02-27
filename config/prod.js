const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function() {
  return webpackMerge(commonConfig(), {
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),
      new CompressionPlugin ({
        asset: '[path] .gz [query]',
        algorithm: 'gzip',
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  });
};
