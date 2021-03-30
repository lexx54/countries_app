const path = require('path');
 module.exports = {
 //define entry file and output
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },
 //define babel loader
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      { test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};