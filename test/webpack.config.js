const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack"s output.
  devtool: 'source-map',

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: ['.js', '.json'],
    // load modules whose location is specified in the paths section of tsconfig.json
  },

  module: {
    rules: [
      // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
};
