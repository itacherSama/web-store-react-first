const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
require('dotenv').config()
const ENV = process.env.APP_ENV;

const isProd = ENV === 'production';

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      localIdentName: '[name]_[local]_[hash:base64:5]',
      exportLocalsConvention: "camelCase",
      mode: "local",

    },
    importLoaders: 2,
    sourceMap: false,
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: {
      mode: "global",
      exportLocalsConvention: "camelCase"
    },
    importLoaders: 2,
    sourceMap: false,
  }
}

const SASSLoader = {
  loader: "sass-loader",
  options: {
    sassOptions: {
      data: '@import "variables";',
      includePaths: [path.resolve(__dirname, "./src/scss")]
    },
  },
}

const config = {
  mode: ENV,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: ["style-loader", CSSLoader, SASSLoader]
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: ["style-loader", CSSModuleLoader, SASSLoader]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader?name=./fonts/[name].[ext]'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@shared': path.resolve(__dirname, 'src/shared'),

    },
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname) + "/public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.join(__dirname, "dist"),
    // open: true
    historyApiFallback: true,

  },
  devtool: setDevTool(),

}

module.exports = config;


function setDevTool() {  // function to set dev-tool depending on environment
  if (isProd) {
    return 'inline-source-map';
  } else {
    return 'source-map';
  }
}
