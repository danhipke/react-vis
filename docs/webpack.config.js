const {resolve} = require('path');

const isProd = process.env.NODE_ENV === 'production'; // eslint-disable-line

module.exports = {
  entry: {
    app: './app.js'
  },

  devServer: {
    stats: {
      warnings: false
    }
  },

  devtool: 'source-maps',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'autoprefixer-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      }
    ]
  },

  resolve: {
    alias: {
      react: resolve('./node_modules/react')
    }
  },

  output: isProd ? {
    path: './',
    filename: 'bundle.js'
  } : null
};
