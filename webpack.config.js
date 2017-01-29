module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  module: {
    // Special compilation rules
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}

