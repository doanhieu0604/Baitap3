import React, { Component } from 'react'

export default class RederingElements extends Component {
    username = "Cybersoft";
    lop ="FE42";
    renderInfo = () =>{
    return <p>Username: {this.username} - lop: {this.lop}</p>;
    }

    render() {
        return (
            <div>
            <h3 className ="title">*RederingElements</h3>
            {/* <p>Username: {this.username}</p>
            <p>Lop: {this.lop}</p> */}
            {this.renderInfo()}
            </div>
        )
    }
}
