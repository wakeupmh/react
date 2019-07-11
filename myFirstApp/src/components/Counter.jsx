import React, {Component} from 'react'
export default class Counter extends Component{
    state = {
        number:this.props.initialNumber
    }

    add = ()=>{
        this.changeValue(1)
        // this.setState({number: this.state.number + 1})
    }
    subtract=()=>{
        this.changeValue(-1)
        // this.setState({number: this.state.number - 1})
    }
    changeValue = diff =>{
        this.setState({
            number: this.state.number + diff
        })
    }
    render(){
        return(
            <div>
                <div> Number: {this.state.number}</div>
                <button onClick={()=> this.add()}>
                    <span aria-label="plus" role="img">➕</span>
                    </button>
                <button onClick={()=> this.subtract()}>
                    <span aria-label="minus" role="img">➖</span>
                </button>
                <button onClick={()=> this.changeValue(10)}>
                    <span aria-label="minus" role="img">➕🔟</span>
                </button>
                <button onClick={()=> this.changeValue(-10)}>
                    <span aria-label="minus" role="img">➖🔟</span>
                </button>
            </div>
        )
    }
    // # Soluction 1 - binding
    // constructor(props){
    //     super(props)
    //     this.add = this.add.bind(this)
    //     this.subtract = this.subtract.bind(this)
    // }

    // # Soluction 2 - lexical context
    // <button onClick={()=> this.function()}>  

    // # Soluction 3 - lexical context with Arrow Function
    // functionName = ()=>{
    //     doSomething...
    // }
}