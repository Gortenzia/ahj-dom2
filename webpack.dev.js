constmerge = require('webpack-merge');
constcommon = require('./webpack.common');

module.exports = merge(common,
  {
    mode: 'development',
  });
