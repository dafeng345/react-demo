import React  from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import App from './App'

const handleChange=()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
}
handleChange()
store.subscribe(handleChange)