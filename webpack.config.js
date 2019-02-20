const path = require('path');
var nodeExternals = require("webpack-node-externals")
module.exports = {
  entry: './src/index.js',
  target: 'node',
  mode: 'development',
  externals: nodeExternals(),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  }
};
