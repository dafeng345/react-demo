import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import header from './index.module.css'
export default class Header extends Component {
    // 当键盘抬起时，按enter键，添加state某一项
    handleKeyUp = (event) => {
        const { target, keyCode } = event;
        if (keyCode !== 13) return false;
        let value = target.value.trim()
        if (value === '') return false;
        this.props.addItem({
            id: nanoid()
            , name: target.value
            , done: false
        });
        target.value = '';
    }
    render() {
        return (
            <div className={header['todo-header']}>
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}
