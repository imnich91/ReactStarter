const path = require('path');
module.exports = {
  title: 'Core UI Style Guide',
  components: './src/components/**/*.js',
  serverPort: 3003,
  template: './styleguide/index.html',
  updateWebpackConfig: function (webpackConfig, env) {
    const config = Object.assign({}, webpackConfig);
    const dir = path.join(__dirname, 'src');
    const styleguideDir = path.join(__dirname, 'styleguide');
    config.module.loaders.push(
      { test: /\.jsx?$/, include: dir, loader: 'babel' },
      { test: /\.css$/, include: styleguideDir, loader: 'style-loader!css-loader' },
      { test: /\.(png|gif|jpg|jpeg)$/, include: styleguideDir, loader: 'file-loader' },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: styleguideDir,
        loader: 'file-loader',
      }
    );

    if (process.env.HOT) {
      config.module.loaders[0].query.plugins.push('react-transform');
      config.module.loaders[0].query.extra = {
        'react-transform': [{
          target: 'react-transform-hmr',
          locals: ['module'],
        }],
      };
    }
    return config;
  },
};
