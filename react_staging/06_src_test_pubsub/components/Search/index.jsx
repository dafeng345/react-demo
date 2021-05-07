import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
	search = () => {
		const { value } = this.keyWordElement;
		PubSub.publish('updateList', { isFirst: false, isLoading: true })
		axios.get(`/api1/search/users2?q=${value}`).then(
			(response) => { PubSub.publish('updateList', { isLoading: false, users: response.data.items }) }
			, (err) => {  PubSub.publish('updateList', { isLoading: false, users: err }) }
		)
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
