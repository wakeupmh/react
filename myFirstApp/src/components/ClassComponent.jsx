import React, {Component} from 'react'

export default class ClassComponent extends Component{
    render(){
        return (
            <h1>Hello {this.props.value || 'Standard'}</h1>
        )
    }
}
