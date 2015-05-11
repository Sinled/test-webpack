var autoprefixer = require('autoprefixer-core');

module.exports = {
  context: __dirname + "/app",
  entry : "./index.js",
  output: {
    path: __dirname + "/app",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: "babel", exclude: /node_modules/},
      {test: /\.svg$/, loader: "url"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.scss$/, loader: "style!css!postcss!sass"}
    ]
  },

  postcss: {
    defaults: [autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    })]
  }
}