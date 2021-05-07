import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props;
        debugger
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                        isLoading ? <h2>Loading......</h2> :
                            err ? err :
                                users.map(item => {
                                    return (<div className="card" key={item.id}>
                                        <a href={item.html_url} target="_blank">
                                            <img src={item.avatar_url} style={{ width: '100px' }} />
                                        </a>
                                        <p className="card-text">reactjs</p>
                                    </div>)
                                })
                }
            </div>

        )
    }
}
