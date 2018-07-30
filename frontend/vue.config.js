// vue.config.js
module.exports = {
    outputDir: '../public/',
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // mutate config for production...
      } else {
        // mutate for development...
      }
    }
  }