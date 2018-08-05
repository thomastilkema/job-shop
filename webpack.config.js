const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, './src');

module.exports = {
  mode: 'development',

  entry: {
    app: SRC_DIR + '/index.tsx',
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@root': path.resolve(__dirname)
    }
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    new CopyWebpackPlugin([
      {
        from: './data', // <rootDir>/data
        to: './data'    // <rootDir>/dist/data
      }
    ])
  ],

  devServer: {
    contentBase: path.join(SRC_DIR, 'dist'),
    open: true,
    port: 9000,
    watchContentBase: true
  }
};
