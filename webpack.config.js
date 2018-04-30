const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.min.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)(\?.+)?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
                minimize: true
              }
            },
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)(\?v=\d+\.\d+\.\d+)?$/,
        rules: [
          {
            use: {
              loader: 'url-loader', // === DataURL
              options: {
                limit: 8192, // Will use file-loader over this limit
                publicPath: '/assets/',
                name: 'images/[name].[ext]?[hash]'
              }
            }
          },
          {
            use: {
              loader: 'img-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 85
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: '[:total] total | build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    })
  ]
}
