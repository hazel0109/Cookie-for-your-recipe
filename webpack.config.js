const path = require('path');
const entry = ['./client/index.js'];
const output = {
  path: path.resolve(__dirname, 'build'),
  filename: 'bundle.js',
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  output,
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/transform-async-to-generator',
          ],
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: [/node_modules/, /client\/sass\/modules/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(css|scss)$/,
        include: [/client\/sass\/modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
      // {
      //   test: /\.s[ac]ss$/i,
      //   exclude: [/node_modules/, /client\/sass\/modules/],
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
    ],
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
