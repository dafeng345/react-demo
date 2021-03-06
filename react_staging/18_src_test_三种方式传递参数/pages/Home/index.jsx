import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'
// import MyNavLink from '../../components/MyNavLink'
export default class Home extends Component {
	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<NavLink to="/home/news">News</NavLink>
						</li>
						<li>
							<NavLink to="/home/message">Message</NavLink>
						</li>
					</ul>
					<Switch>
						<Route path="/home/news" component={News}></Route>
						<Route path="/home/message" component={Message}></Route>
					</Switch>
				</div>
			</div>
		)
	}
}
