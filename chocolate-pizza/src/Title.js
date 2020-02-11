import React, { Component } from "react";

export default class Title extends Component {
    render() {
        return (
            <div>
                <h1 className ="title">Chocolate Pizza</h1>
                <h2 className ="post date">Posted on 15 Dec 2013</h2>
                <img src={this.props.print} />
            </div>

        )
    }
}