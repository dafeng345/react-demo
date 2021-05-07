import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
	state = {
		messageArr: [
			{ id: '01', title: '消息1' },
			{ id: '02', title: '消息2' },
			{ id: '03', title: '消息3' },
		]
	}

	pushShow = (id, title) => {
		// this.props.history.push(`/home/message/detail/${id}/${title}`)
		// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
		this.props.history.push('/home/message/detail', { id, title })
	}

	replaceShow = (id, title) => {
		// this.props.history.replace(`/home/message/detail/${id}/${title}`)
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
		this.props.history.replace('/home/message/detail', { id, title })
	}



	render() {
		console.log(this.props)
		const { messageArr } = this.state
		const { history } = this.props

		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj) => {
							const {id,title}=msgObj;
							return (
								<li key={msgObj.id}>
									{/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp; */}
									{/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
									<Link to={{pathname:'/home/message/detail',state:{id,title}}}>{msgObj.title}</Link>
									<button onClick={() => this.pushShow(id, title)}>push查看</button>&nbsp;
									<button onClick={() => this.replaceShow(id, title)}>replace查看</button>
								</li>
							)
						})
					}
					<hr />
					<Switch>
						{/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
						<Route path="/home/message/detail" component={Detail}></Route>
					</Switch>
					<hr />
					<button onClick={history.goBack}>回退</button>
					<button onClick={history.goForward}>前进</button>
					<button onClick={()=>history.go(1)}>go</button>

				</ul>
				<hr />
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

				{/* search参数无需声明接收，正常注册路由即可 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* state参数无需声明接收，正常注册路由即可 */}
				{/* <Route path="/home/message/detail" component={Detail} /> */}
				{/* 
				<button onClick={this.back}>回退</button>&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;
				<button onClick={this.go}>go</button> */}

			</div>
		)
	}
}
