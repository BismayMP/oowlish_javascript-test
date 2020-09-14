const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')


module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('./src/index.ejs') }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'index.css',
      chunkFilename: '[id].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],

      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }
};
