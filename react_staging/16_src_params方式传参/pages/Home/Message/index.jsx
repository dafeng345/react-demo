import React, { Component } from 'react'
import {Link,Route, Switch} from 'react-router-dom'
import Detail from './Detail'
export default class Message extends Component {
    state = {
		messageArr:[
			{id:'01',title:'消息1'},
			{id:'02',title:'消息2'},
			{id:'03',title:'消息3'},
		]
	}
    render() {
        const {messageArr}=this.state
        // 使用params方式来传递参数
        return (
            
            <div>
                {
                    messageArr.map(item=>{
                        return <Link to={`/home/message/${item.id}/${item.title}`} key={item.id}>{item.title}</Link>
                    })
                }
                {/*路由容器，声明接受params参数*/}
                {/* <Switch> */}
                    <Route path="/home/message/:id/:title" component={Detail}></Route>
                {/* </Switch> */}
                
            </div>
        )
    }
}
