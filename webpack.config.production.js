/* eslint-disable */

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';
var path = require("path");
var webpack = require("webpack");
var dotenv      = require('dotenv');

const dotEnvVariables = dotenv.config();
const environmentEnv = dotenv.config({
  path: path.join(__dirname, 'config', `${NODE_ENV}.config.env`),
  silent: true,
});
const envVariables = Object.assign({}, dotEnvVariables, environmentEnv)

const defines =
      Object.keys(envVariables)
      .reduce((memo, key) => {
        const val = envVariables[key] === 'true' ? true :
              (envVariables[key] === 'false' ? false : JSON.stringify(envVariables[key]));

        memo[`__${key.toUpperCase()}__`] = val;
        return memo;
      }, {
        __NODE_ENV__: JSON.stringify(NODE_ENV),
        __DEBUG__: JSON.stringify(isDev)
      })


module.exports = {
  entry: [
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.DefinePlugin(defines),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.ts$/,
      loader: 'raw-loader'
    }, {
      test: /\.(m|h)$/,
      loader: 'raw-loader'
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules|war|code/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: "url-loader?limit=8192"
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  }
};
