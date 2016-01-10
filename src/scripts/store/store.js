
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import debts from './reducers/debts/debts'
import monthlyPayment from './reducers/monthlyPayment/monthlyPayment'
import options from './reducers/options/options'

const extendedCreateStore = compose(
  applyMiddleware(thunk)
)(createStore)

const allReducers = combineReducers({
  debts,
  monthlyPayment,
  options,
})

const store = extendedCreateStore(allReducers)

export default store
