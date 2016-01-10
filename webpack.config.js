
function getEntrySources(sources) {
  'use strict'

  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080')
    sources.push('webpack/hot/only-dev-server')
  }

  return sources
}

module.exports = {
  'entry' : getEntrySources([ './src/scripts/entry.js' ]),
  'output': {
    'publicPath': 'http://localhost:8080/',
    'filename'  : 'build/bundle.js',
  },
  // 'devtool': 'eval',
  'devtool': 'source-map',
  'module' : {
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
