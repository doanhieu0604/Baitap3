import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLogin : false,
            username : "hieu"
        };
    }
    handleOnclick = () => {
        this.setState({
            isLogin: true
        })   
    };
    renderHTML = () =>{
       return (
           <div>
               {this.state.isLogin ? <p>Hello {this.state.username}</p> : <button className="btn btn-info" onClick={this.handleOnclick}>LogIn</button>}
           </div>
       );
    }
    render() {
        console.log("render");
        return (
            <div>
                <h3 className="title">* State</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
