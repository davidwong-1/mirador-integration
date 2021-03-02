const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'mirador-luna.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/luna/js/mirador3/',
    library: 'MiradorLuna',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  mode:'development',
};
