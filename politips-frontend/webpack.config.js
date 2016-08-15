var config, localConfig, path, ref, webpack;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

path = require('path');
webpack = require('webpack');

config = {
  context: path.join(__dirname, "src"),
  entry: {
    app: ["./client.js", "./app.scss"],
    vendor: [
      'react', 'react-dom', 'react-router', 'react-bootstrap', 'jquery', 'redux', 'react-redux', 'react-router-redux',
      'superagent', 'superagent-bluebird-promise', 'bluebird', 'redux-persist', 'bootstrap-sass', 'react-router-bootstrap',
      'lodash', 'jquery'
    ]
  },
  output: {
    path: __dirname + "/public/static/",
    filename: "[name].js",
    publicPath: "/static"
  },
  resolve: {
    "root": [path.resolve(__dirname)],
    "extensions": ['', '.jsx', '.js', '.css', '.scss', '.sass'],
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }, {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style", "css!sass?indentedSyntax")
      }, {
        test: /\.(woff(2)?|ttf|eot|svg|png|cur|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file'
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        },
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'POLITIPS_API_URL': JSON.stringify(process.env.POLITIPS_API_URL || 'http://api.poli.tips')
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      "jQuery": "jquery"
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname + "/dist/",
    devtool: "source-map"
  }
};

module.exports = config;
