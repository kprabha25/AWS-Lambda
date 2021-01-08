var path = require("path");
module.exports = {
  entry: "./src/graphql.js",
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "graphql.js"
  },
//   module: {
//     loaders: [
//       {
//         loader: "babel-loader",

//         // Compile files in /src directory
//         include: [path.resolve(__dirname, "/src")],

//         // Babel options
//         query: {
//           plugins: ["transform-runtime"],
//           presets: ["es2015"]
//         }
//       }
//     ]
//   }
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(graphql|gql|js)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015']
        }
    }
    ]
  }
};

// const path = require('path');

// module.exports = {
//   entry: "./graphql.js",
//   output: { // NEW
//     path: path.join(__dirname, 'dist'),
//     filename: "myapp.js"
//   }, // NEW Ends  
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader"
//         }
//       }
//     ]
//   }
// };

// const path = require('path');

// module.exports = {
//     target: "node",
//     context: __dirname,
//     entry: "./graphql",
//     output: {
//       path: path.join(__dirname, "dist"),
//       filename: "graphql.js"
//     },
//     module: {
//       loaders: [{
//         test: /\.js$/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015']
//         }
//       }]
//     }
//   }

// var path = require('path');
// var webpack = require('webpack');
// module.exports = {
//     entry: './graphql.js',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'graphql.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['es2015']
//                 }
//             }
//         ]
//     },
//     stats: {
//         colors: true
//     },
//     devtool: 'source-map'
// };

// const path = require('path')

// module.exports = {
//   entry: {
//     app: ['@babel/polyfill', './graphql.js']
//   },
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'app.bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['@babel/preset-env']
//         }
//       }
//     ]
//   }
// }

