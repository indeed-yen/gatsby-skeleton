const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheap-eval-source-map',
  mode: 'development',
  watchOptions: { // for watch mode
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('precss'),
                  require('autoprefixer')
                ]
              }
            }
          },
          'sass-loader',
        ],
      }
    ]
  }
});