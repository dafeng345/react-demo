import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
	state = {
		todos: [
			{ id: '001', name: '吃饭', done: true },
			{ id: '002', name: '睡觉', done: true },
			{ id: '003', name: '打代码', done: false },
			{ id: '004', name: '逛街', done: false }
		]
	}
	render() {
		const { todos } = this.state;
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addItem={this.addItem} />
					<List todos={todos} handleDel={this.handleDel} handleChange={this.handleChange} />
					<Footer todos={todos} handleCheckAll={this.handleCheckAll} clearDoneItem={this.clearDoneItem} />
				</div>
			</div>
		)
	}
	/*向state中添加一项*/
	addItem = (item) => {
		const { todos } = this.state;
		this.setState({
			todos: [item, ...todos]
		})
	}
	/*根据ID删除state中某一项*/
	handleDel = (id) => {
		const { todos } = this.state;
		/*过滤相同的元素*/
		const newArr = todos.filter((item) => {
			return item.id !== id
		})
		this.setState({
			todos: newArr
		})
	}
	/*修改某一项选中状态*/
	handleChange = (id, check) => {
		const { todos } = this.state;
		const newArr = todos.map((item) => {
			if (item.id === id) item.done = check;
			return item;
		})
		this.setState({
			todos: newArr
		})
	}
	/*设置是否全选*/
	handleCheckAll = (check) => {
		const { todos } = this.state;
		const newArr = todos.map((item) => {
			return { ...item, done: check }
		})
		this.setState({
			todos: newArr
		})
	}
	/*清空已经完成的任务*/
	clearDoneItem = () => {
		const { todos } = this.state;
		const newArr = todos.filter((item) => !item.done)
		this.setState({
			todos: newArr
		})
	}
}
