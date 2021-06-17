import { combineReducers } from 'redux'
import testReducer from './testReducer'

const reducers = combineReducers({
  test: testReducer,
})

export default reducers
// define State Type, this exactly interprets what we want
// interpret whatever type we pass in traingle brackets
export type State = ReturnType<typeof reducers>