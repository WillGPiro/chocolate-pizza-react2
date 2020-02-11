import React, { Component } from "react";

export default class NAV extends Component {
    render() {
        return (
        <nav id = "navigation">
            <img src = {this.props.array[0]}/>
            <img src = {this.props.array[1]}/>
            <img src = {this.props.array[2]}/>
            <img src = {this.props.array[3]}/>
            <img src = {this.props.array[4]}/>
            <img src = {this.props.array[5]}/>
            <img src = {this.props.array[6]}/>
        </nav>
        )
        }
    }
