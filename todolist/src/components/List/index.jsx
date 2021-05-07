import React, { Component } from 'react'
import Item from '../Item'
// import  styles from './index.module.css'
import './index.css'

export default class List extends Component {
    render() {
        const { todos, handleDel, handleChange } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((item, index) => {
                        return <Item key={item.id}
                            item={item}
                            handleDel={handleDel}
                            handleChange={handleChange} />
                    })
                }
                {/*<Item/> <Item/>*/}

            </ul>
        )
    }
}
