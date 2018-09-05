
var path = require('path')
module.exports = {
  entry: './build/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: {
          loaders: ['style-loader', 'css-loader', 'sass']
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
}
