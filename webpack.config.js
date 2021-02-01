var path = require("path");
module.exports = {
  entry: "./src/graphql.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "graphql.js"
  },
  //target: "node",
  mode:"development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|Refers)/,
        //loader: 'babel-loader',
        use: { 
          loader: 'babel-loader'
        }
      }     
    ]
  },
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "url": false,
      "os": false,
      "querystring": false,
      "util": false,
      "buffer": false
    }
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};