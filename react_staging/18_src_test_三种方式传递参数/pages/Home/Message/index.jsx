import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }

    render() {

        const { messageArr } = this.state
        // debugger
        return (
            <div>
                <ul>
                    {
                        messageArr.map(item => {
                            return (<li key={item.id}>
                                {/* 使用params方式来传递参数 */}
                                {/* <Link to={`/home/message/${item.id}/${item.title}`} >{item.title}</Link> */}
                                {/* 使用search方式传递参数 */}
                                {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}
                                {/* 使用state方式传递参数 */}
                                <Link to={{ pathname: '/home/message/detail', state: { id: item.id, title: item.title } }}>{item.title}</Link>
                            </li>)
                        })
                    }
                </ul>

                {/*路由容器，声明接受params参数*/}
                <Switch>
                    {/* <Route path="/home/message/:id/:title" component={Detail}></Route> */}
                    {/* <Route path="/home/message/detail" component={Detail}></Route> */}
                    <Route path="/home/message/detail" component={Detail}></Route>
                </Switch>

            </div>
        )
    }
}
