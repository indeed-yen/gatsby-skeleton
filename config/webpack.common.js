const path = require("path");
const rootPath = path.resolve(__dirname, './../');
const srcPath = path.resolve(rootPath, 'frontend');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');


// the path(s) that should be cleaned
const pathsToClean = [
  path.resolve(rootPath, 'static/pack/'),
];

// the clean options to use
const cleanOptions = {
  root: path.resolve(rootPath),
  verbose: true
};

module.exports = {
  entry: {
    app: path.resolve(srcPath, 'entries/app.jsx'),
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(rootPath, 'static/pack/'),
    publicPath : '/static/pack/'
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new BundleTracker({filename: './webpack-stats.json'})
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      },
      {
        test: /\.html/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2|TTF|OTF)$/,
        use: {
          loader: 'url-loader?limit=8192&name=images/[name]-[hash:8].[ext]'
        }
      }
    ]
  },
  resolve: {
    modules: [srcPath, "node_modules"],
    extensions: ['.js', '.jsx', '.css', '.scss', '.png', '.svg', '.jpeg', 'jpg']
  }
};