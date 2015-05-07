module.exports = {
  entry : "./app/index.js",
  output: {
    path    : __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel", exclude: /node_modules/},
      {test: /\.styl$/, loader: "style!css!stylus"}
    ]
  }
}