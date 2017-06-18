const { resolve } = require('path')
const ProgressBar = require('progress-bar-webpack-plugin')
const { getIfUtils } = require('webpack-config-utils')

module.exports = env => {
  const { ifProd, ifNotProd } = getIfUtils(env)
  const config = {
    context: __dirname,
    entry: './client/ClientApp.js',
    output: {
      filename: 'bundle.js',
      path: resolve('public'),
      publicPath: '/public/',
      pathinfo: ifNotProd()
    },
    devtool: ifProd('source-map', 'eval'),
    devServer: {
      publicPath: '/public/',
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'url-loader?limit=10000',
            'img-loader'
          ]
        }
      ]
    },
    plugins: [
      new ProgressBar()
    ]
  }
  if (env.debug) {
    console.log(config)
    debugger // eslint-disable-line
  }
  return config
}
