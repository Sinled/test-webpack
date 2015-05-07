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
      {test: /\.css$/, loader: "style!css"},
      {test: /\.styl$/, loader: "style!css!postcss!stylus"}
    ]
  },

  postcss: {
    defaults: [autoprefixer({
      browsers: ['last 2 version'],
      cascade: false
    })]
  }
}