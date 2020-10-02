const path = require('path');
const HTMLplugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader'],
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader:
          process.env.REACT_APP_ENV === 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
      },
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: ['file-loader', 'url-loader'],
  },
];

module.exports = {
  watch: true,
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules,
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      https: true,
    },
  },
  plugins: [
    new HTMLplugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new Dotenv(),
  ],
};
