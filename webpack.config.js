const path = require('path');

module.exports = {
    target: 'web',
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index.js',
      library: 'custom_component',
      libraryTarget: 'umd',
      globalObject: 'this',
      umdNamedDefine: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
        },
      ],
    },
    externals: {
      'react': 'React'
  },
};