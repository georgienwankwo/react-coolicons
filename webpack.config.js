const path = require('path');
module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'react'),
    libraryTarget: 'umd',
    filename: "index.js",
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        },
        type: "javascript/auto",
      }
    ]
  }
};