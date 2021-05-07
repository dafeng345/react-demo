import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increament, decreament, increamentAync } from '../../redux/count_action'
class CountUI extends Component {
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>
                <select ref={c => this.selNode = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increament}>+</button>
                <button onClick={this.decreament}>-</button>
                <button onClick={this.increamentIfOdd}>奇数再加</button>
                <button onClick={this.increamentAync}>异步加</button>
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
            this.props.increament(step * 1)
        }
    }
    increamentAync = () => {
        const { value: step } = this.selNode;
        this.props.increamentAync(step * 1,2000)
    }
}
// mapDispatchToProps简写方法中：key是UI组件props的方法名，value是redux的action
export default connect(state => ({ count: state }), {
    increament,
    decreament,
    increamentAync
})(CountUI)