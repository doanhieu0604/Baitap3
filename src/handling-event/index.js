import React, { Component } from 'react'

export default class HandlingEvent extends Component {
    handleOnclick = () =>{
        console.log("handleOnclick");
    }
    handleOnclickParams = (name, age) =>{
        console.log("Hello: " + name + " tuoi: " + age);
    }
    render() {
        return (
            <div>
                <h3 className="title">*HandlingEvent </h3>
                <button className="btn btn-info" onClick={this.handleOnclick}>HandlingEvent</button>
                <button className="btn btn-danger" onClick={() =>{this.handleOnclickParams("Hieu", "18")}}>HandlingEvent Params</button>
            </div>
        )
    }
}
