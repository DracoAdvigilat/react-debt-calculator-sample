
import { combineReducers } from 'redux'

import allocation from './allocation/allocation'
import prioritization from './prioritization/prioritization'

const options = combineReducers({
  allocation,
  prioritization,
})

export default options
