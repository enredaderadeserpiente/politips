var config, localConfig, path, ref, webpack;

path = require('path');
webpack = require('webpack');

var env = {
  'POLITIPS_API_URL': JSON.stringify(process.env.POLITIPS_API_URL)
}

try {
  var localConfig = require('./.env.js');
  for (var key in localConfig) {
    if (env[key] == undefined) {
      env[key] = JSON.stringify(localConfig[key]);
    }
  }
} catch (e) {
  console.log(e);
}

config = {
  context: path.join(__dirname, "src"),
  entry: {
    app: "./app.jsx",
    vendor: [
      'react', 'react-dom', 'react-router', 'react-bootstrap', 'jquery', 'redux', 'react-redux', 'react-router-redux',
      'superagent', 'superagent-bluebird-promise', 'bluebird', 'redux-persist'
    ]
  },
  output: {
    path: __dirname + "/dist/js/",
    filename: "[name].js",
    publicPath: "/js/"
  },
  resolve: {
    "root": [path.resolve(__dirname)],
    "extensions": ['', '.jsx', '.js', '.css', '.scss', '.sass'],
    "alias": {
      "jquery": "node_modules/jquery/dist/jquery.min.js",
      "jQuery": "node_modules/jquery/dist/jquery.min.js",
      "bluebird": "node_modules/bluebird/js/browser/bluebird.min.js",
      "react-bootstrap": "node_modules/react-bootstrap/dist/react-bootstrap.min.js",
    },
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.less$/,
        loader: 'style!css!less'
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }, {
        test: /\.sass$/,
        loader: 'style!css!sass?indentedSyntax'
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
    new webpack.DefinePlugin({
      'ENV': env
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      "jQuery": "jquery"
    }),
    //new webpack.optimize.UglifyJsPlugin({mangle: false})
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname + "/dist/",
    devtool: "source-map"
  }
};

module.exports = config;
