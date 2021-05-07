import React, { Component } from 'react'

const DetailData = [
    { id: '01', content: '你好，中国' },
    { id: '02', content: '你好，尚硅谷' },
    { id: '03', content: '你好，未来的自己' }
]

export default class Detail extends Component {
    
    render() {
        console.log(this.props)
        // 接受params类型参数
        
        const { id, title } = this.props.match.params;
        const item = DetailData.find(_ => {  //发现满足条件的某个元素
            return _.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>title:{title}</li>
                <li>content:{item.content}</li>
            </ul>
        )
    }
}
