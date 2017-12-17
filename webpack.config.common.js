const path = require('path');
const srcRoot = path.resolve(__dirname, 'src');

module.exports = {
  module: {
    loaders: [
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ["babel", "react-hot-loader/webpack"],
          query:
            {
                presets: ['react', 'es2015'],
                plugins: ['transform-class-properties', 'syntax-decorators', 'transform-object-rest-spread']
            }
      },
      {
        loader: 'style!css?module',
        test: /\.css$/
      },
    ],
  },
  shared: {
    modules: { App: [path.join(srcRoot, 'index.js')] },
    output: { path: __dirname },
    srcRoot,
  },
};
