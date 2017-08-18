
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

var path = require('path');
var fs = require('fs');

//var cert = fs.readFileSync(path.join(__dirname, "../ValyrianCertificate.crt"));
//var key = fs.readFileSync(path.join(__dirname, "../ValyrianCertificateKey.pem"));

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3123/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    //https: {
    //  cert: cert,
    //  key: key
    //}
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});