import React, { Component } from 'react'

export default class CountUI extends Component {
    render() {
        const { count } = this.props;
        return (
            <div>
                <h2>当前求和为：{count}</h2>
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
        this.props.increament(step * 1)
    }
    decreament = () => {
        const { value: step } = this.selNode;
        this.props.decreament(step * 1)
    }
    increamentIfOdd = () => {
        const { value: step } = this.selNode;
        if (this.props.count % 2 == 1) {
            this.props.increament(step * 1);
        }
    }
    increamentAsync = () => {
        const { value: step } = this.selNode;
        this.props.increamentAsync(step * 1,500);
    }
}
