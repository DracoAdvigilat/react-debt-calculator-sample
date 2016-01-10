
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import Render from './render/render'
import store from './store/store'

const targetElem = document.getElementById(`reactDebtCalculator`)

ReactDOM.render(
  <Provider store={store}>
    <Render />
  </Provider>,
  targetElem
)
