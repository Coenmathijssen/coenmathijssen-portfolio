// vue.config.js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ],
    rules: [
        {
         test: /\.svg$/,
         loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        },
      ]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'files/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
}