import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    updateAppState = () => {
        const { value } = this.texNode;
        const { updateAppState } = this.props;
        updateAppState({ isFirst: false, isLoading: true })
        axios.get(`/api1/search/users2?q=${value}`).then((response) => {
            updateAppState({ isLoading: false, users: response.data.items })
        },(err)=>{
            console.log(err)
            updateAppState({ isLoading: false, users: err })
        })
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={c => this.texNode = c} />&nbsp;<button onClick={this.updateAppState}>Search</button>
                </div>
            </section>
        )
    }
}
