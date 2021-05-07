import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    render() {
        const { todos } = this.props;
        const doneLen = todos.reduce((preVal, curVal) => {
            if (curVal.done) preVal++;
            return preVal
        }, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"
                        onChange={this.handleCheckAll}
                        checked={todos.length === doneLen && doneLen ? true : false} />
                </label>
                <span>
                    <span>已完成{doneLen}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.clearDoneItem}>清除已完成任务</button>
            </div>
        )
    }
    /*设置是否全选*/
    handleCheckAll = (event) => {
        let check = event.target.checked;
        this.props.handleCheckAll(check);
    }
    /*清空已经完成的任务*/
    clearDoneItem = () => {
        if (window.confirm('确认清除已完成任务？')) {
            this.props.clearDoneItem();
        }

    }
}
