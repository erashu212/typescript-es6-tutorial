const path = require('path');

module.exports = {
  entry: {
    'polyfills': path.resolve(__dirname, "ES6/src/polyfills"),
    'app': path.resolve(__dirname, "ES6/src/main")
  },
  resolve: {
    extensions: [ '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "ES6/src"),
        ],
        loader: "babel-loader",
        // Options to configure babel with
        query: {
          presets: [ 'es2015' ],
        }
      }
    ]
  },
  node: {
    global: 'window'
  }
};