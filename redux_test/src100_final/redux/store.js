import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReduce from './count_reducer'
// applyMiddleware处理异步action
export default createStore(countReduce, applyMiddleware(thunk))