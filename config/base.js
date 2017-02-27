const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const join = require('path').join;

// autoprefixer configuration based on Bootstrap 4.x defaults
const autoprefixerBrowsers = require('bootstrap/grunt/postcss').autoprefixer.browsers;

module.exports = function() {
  return {
    context: join(__dirname, '/../src'),
    entry: ['./index.js'],
    output: {
      path: join(__dirname, '/../dist'),
      filename: '[name].bundle.js',
      publicPath: '',
      sourceMapFilename: '[name].map'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', 'scss'],
      modules: [join(__dirname, '/../src'), 'node_modules']
    },
    module: {
      loaders: [
        {
          test: /.jsx?$/,
          use: [
            'babel-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('postcss-flexbugs-fixes'),
                      require('autoprefixer')({ browsers: autoprefixerBrowsers })
                    ];
                  }
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  outputStyle: 'expanded',
                  sourceMap: true,
                  sourceMapContents: true
                }
              }
            ]
          })
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }],
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
      new HtmlWebpackPlugin({
        template: join(__dirname, '../src/index.html'),
        chunksSortMode: 'dependency'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true
      })
    ],
  };
};
