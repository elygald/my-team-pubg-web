const path = require('path')
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        resolve: {
          alias: {
            'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
          }
        }
      }
}