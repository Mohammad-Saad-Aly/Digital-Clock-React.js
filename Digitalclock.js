import React, { Component } from 'react'

export default class Digitalclock extends Component {
    constructor(props){
        super(props);
        this.state = {
            currenttime : new Date().toLocaleString()
        }
        // this.updatetime();
    }

    componentDidMount(){
        this.updatetime()
    }

    updatetime=()=>{
        setInterval(()=>{
        this.setState({currenttime : new Date().toLocaleString()})
        }
        ,1000)
    }
    render() {
        console.log(this.state.currenttime)
        return (
            <div>
             <h1> {this.state.currenttime} </h1>    
                 </div>   
            
        )
    }
}
