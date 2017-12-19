const commonConfig = require('./webpack.config.common');
const webpack = require('webpack');
const R = require('ramda');

module.exports = Object.assign(R.omit(['shared'], commonConfig), {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'webpack-dev-server/client?http://0.0.0.0:3000/',
    'webpack/hot/only-dev-server',
  ].concat(R.flatten(R.values(commonConfig.shared.modules))),
  output: {
    filename: 'bundle.js',
    path: commonConfig.shared.output.path,
    publicPath: 'http://0.0.0.0:3000/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
