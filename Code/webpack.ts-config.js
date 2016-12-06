const path = require('path');

module.exports = {
  entry: {
    'polyfills': path.resolve(__dirname, "TypeScript/src/polyfills"),
    'app': path.resolve(__dirname, "TypeScript/src/main")
  },
  resolve: {
    extensions: [ '.ts' ]
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
        test: /\.ts$/,
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "TypeScript/src")
        ],

        loader: 'awesome-typescript-loader?tsconfig=' + path.resolve(__dirname, "TypeScript/tsconfig.json")
      }
    ]
  },
  node: {
    global: 'window'
  }
};