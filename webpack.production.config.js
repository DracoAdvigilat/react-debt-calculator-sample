
/* global module */

module.exports = {
  'entry' : './src/scripts/entry.js',
  'output': {
    'path'    : './build',
    'filename': 'bundle.js',
  },
  'module': {
    'preLoaders': [
      {
        'test'   : /\.jsx?$/,
        'exclude': /node_modules/,
        'loader' : 'source-map',
      },
    ],
    'loaders': [
      {
        'test'   : /\.jsx?$/,
        'exclude': /node_modules/,
        'loaders': [
          'react-hot',
          'babel',
        ],
      },
    ],
  },
}
