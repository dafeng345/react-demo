import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log(this.props.children) //是标签中的消息体
        return (
            <div>
                 <div className="page-header" {...this.props}></div>
            </div>
        )
    }
}
