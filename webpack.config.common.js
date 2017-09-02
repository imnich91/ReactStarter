const path = require('path');
const srcRoot = path.resolve(__dirname, 'src');

module.exports = {
  module: {
    loaders: [
      { include: srcRoot, loaders: ['babel'], test: /\.js$/ },
      { loader: 'style!css?module', test: /\.css$/ },
    ],
  },
  shared: {
    modules: { App: [path.join(srcRoot, 'index.js')] },
    output: { path: __dirname },
    srcRoot,
  },
};
