const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader'],
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
  },
];

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
  },
  module: {
    rules,
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLplugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
