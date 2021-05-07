import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                       <Header><h2>React Router Demo</h2></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*路由标签*/}
                            {/*<NavLink className="list-group-item" to="/about" activeClassName="active">About</NavLink>
                            <NavLink className="list-group-item" to="/home" activeClassName="active">Home</NavLink>*/}
                            <MyNavLink to="/about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Switch>
                                    <Route path='/home' component={Home}></Route>
                                    <Route path='/about' component={About}></Route>
                                    <Redirect to='/home'/>
                                </Switch>
                               {/* */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
