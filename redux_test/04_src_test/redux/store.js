import countReducer from './count_reducer'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// export default createStore(countReducer)
// 当使用异步action时，需要使用redux-thunk ，redux-thunk支持 dispatch function
// Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
// applyMiddleware 为 createStore 注入了 middleware:
export default createStore(countReducer,applyMiddleware(thunk))