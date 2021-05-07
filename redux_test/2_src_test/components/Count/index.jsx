import React, { Component } from 'react'
import store from '../../redux/store'
import { INCREAMENT, DECREAMENT } from '../../redux/constant'
export default class Count extends Component {
    render() {
        const count = store.getState();
        // 代码自上而下执行
        // console.log(count, this.showRef, this.selectNode)
        // const { value } = this.selectNode;

        return (
            <div>
                <h2>当前求和为：{count}</h2>
                <select ref={this.showRef}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.increament}>+</button> &nbsp;
                <button onClick={this.decreament}>-</button> &nbsp;
                <button onClick={this.increamentIfOdd}>奇数再加</button> &nbsp;
                <button onClick={this.increamentAsync}>异步加</button>
            </div>
        )
    }
    increament = () => {
        const { value: step } = this.selectNode;
        store.dispatch({ type: INCREAMENT, data: step * 1 })
    }
    decreament = () => {
        const { value: step } = this.selectNode;
        store.dispatch({ type: DECREAMENT, data: step * 1 })
    }
    increamentIfOdd = () => {
        const { value: step } = this.selectNode;
        const prevCount = store.getState()
        if (prevCount % 2 == 1) {
            store.dispatch({ type: INCREAMENT, data: step * 1 })
        }
    }
    increamentAsync = () => {
        const { value: step } = this.selectNode;
        setTimeout(()=>{
            store.dispatch({ type: INCREAMENT, data: step * 1 })
        },1000)
    }
    showRef = (c) => {
        this.selectNode = c
    }
}
