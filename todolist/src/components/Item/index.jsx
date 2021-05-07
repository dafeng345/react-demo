import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    /*可以在state中声明一个标识，来设置当前项是否高亮显示*/
    state = { mouse: false }
    render() {
        const { item } = this.props;
        const { mouse } = this.state;
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
                onMouseEnter={() => this.handleMouse(true)}
                onMouseLeave={() => this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={item.done} onChange={this.handleChange(item.id)} />
                    <span>{item.name}</span>
                </label>
                <button className="btn btn-danger"
                    style={{ display: mouse ? "block" : "none" }}
                    onClick={this.handleDel(item.id)}>删除</button>
            </li>
        )
    }
    /* flag:true 移入 ; flag:false 移出*/
    handleMouse = (flag) => {
        if (flag !== this.state.mouse) {
            this.setState({ mouse: flag })
        }
    }
    /*删除state中某一项*/
    handleDel = (id) => {
        return () => {
            if (window.confirm('确认要删除这一项吗？')) {
                this.props.handleDel(id);
            }
        }
    }
    /*修改某一项是否被选中*/
    handleChange = (id) => {
        return (event) => {
            // console.log(event.target.checked)
            this.props.handleChange(id,event.target.checked);
        }
    }
}
