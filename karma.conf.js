var webpackConfig = require('./webpack.config.js')
delete webpackConfig.entry

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: ['test/index.js'],
    preprocessors: {
      'test/index.js': ['webpack']
    },
    webpack: webpackConfig,
    //avoid walls of useless text
    webpackMiddleware: {
      noInfo: true 
    },
    singleRun: true
  })
}

