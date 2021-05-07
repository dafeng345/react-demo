// import react from 'react'

import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import ReactDOM from 'react-dom'
import countReduce from './count_reduce'
// applyMiddleware处理异步action
export default createStore(countReduce,applyMiddleware(thunk))
