'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/main/java/javaScript/siteTest/js/practice/webpackTest/dist'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/, //берем файлы js
        exclude: /(node_modules|bower_components)/, // откуда
        use: {
          loader: 'babel-loader?optional[]=runtime', //указываем как использовать
          options: { //настройки
            presets: [
              ["@babel/env", { //саморекомендованный
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1",
                  ie: "10"
                }
              }]
            ],
            
              plugins: ["es6-promise"]
            

          }
        }
      }
    ]
  }
};
