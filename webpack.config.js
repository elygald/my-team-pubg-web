const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    target: 'node',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
             {
                 test: /\.vue$/,
                loader: 'vue-loader',
               },
              // this will apply to both plain `.js` files
              // AND `<script>` blocks in `.vue` files
              {
                test: /\.js$/,
                loader: 'babel-loader',
              },
              // this will apply to both plain `.css` files
              // AND `<style>` blocks in `.vue` files
              {
                test: /\.css$/,
                loader: 'css-loader'
                
              }
        ]
       },
       plugins: [
         // make sure to include the plugin!
         new VueLoaderPlugin(),
        ]
  };