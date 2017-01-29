module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}