import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*路由标签*/}
                            <NavLink className="list-group-item" to="/about" activeClassName="active">About</NavLink>
                            <NavLink className="list-group-item" to="/home" activeClassName="active">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Route path='/home' component={Home}></Route>
                                <Route path='/about' component={About}></Route>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
