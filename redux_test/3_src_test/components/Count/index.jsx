import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncreamentAction, createDecreamentAction } from '../../redux/count_action'

export default class Count extends Component {
    render() {
        const prevState = store.getState();
        return (
            <div>
                <h2>当前求和为：{prevState}</h2>
                <select ref={c => this.selNode = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increament}>+</button>
                <button onClick={this.decreament}>-</button>
                <button onClick={this.increamentIfOdd}>奇数再加</button>
                <button onClick={this.increamentAsync}>异步加</button>
            </div>
        )
    }
    increament = () => {
        const { value: step } = this.selNode;
        store.dispatch(createIncreamentAction(step * 1))
    }
    decreament = () => {
        const { value: step } = this.selNode;
        store.dispatch(createDecreamentAction(step * 1))
    }
    increamentAsync = () => {
        const { value: step } = this.selNode;
        setTimeout(() => {
            store.dispatch(createIncreamentAction(step * 1))
        }, 1000)
    }
    increamentIfOdd = () => {
        const { value: step } = this.selNode;
        const prevState = store.getState();
        if (prevState % 2 == 1) {
            store.dispatch(createIncreamentAction(step * 1))
        }
    }
}
