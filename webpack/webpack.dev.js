const path = require('path');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: true,
    client: {
      overlay: false
    },
    compress: true,
    port: 3002,
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new ReactRefreshWebpackPlugin() // Add this line
  ]
};
