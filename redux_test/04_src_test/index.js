import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"
import store from './redux/store'
const handleChange=()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
}
handleChange()
store.subscribe(handleChange)  //订阅redux中state的改变