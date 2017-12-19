const config = require('./webpack.config.dev');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
}).listen(3000, '0.0.0.0', function (err) {
  if (err) { return console.log(err); }

  console.log('Listening at http://0.0.0.0:3000/');
})
