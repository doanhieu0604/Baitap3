import React, { Component } from 'react'

export default class ExampleHandlingEvent extends Component {
    isLogin = false;
    username = "hieu"
    handleOnclick = () => {
       
        this.isLogin = true;
    };
    renderHTML = () =>{
        // if (this.isLogin) {
        // return  <p>Hello {this.username}</p>
        // }else{
        //     return <button className="btn btn-info">LogIn</button>
        // }
       return (
           <div>
               {this.isLogin ? <p>Hello {this.username}</p> : <button className="btn btn-info" onClick={this.handleOnclick}>LogIn</button>}
           </div>
       );
    }
    render() {
        return (
            <div>
                <h3 className="title">*ExampleHandlingEvent</h3>
                {this.renderHTML()}
                  
            </div>
        )
    }
}
