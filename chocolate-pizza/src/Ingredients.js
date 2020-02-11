import React, { Component } from "react";

export default class Ingredients extends Component {
    render() {
        return (
      
            <section id="list1">
                <img id="listImg" src="list-bg.png" />
                <div><input type="checkbox" /> {this.props.img1}</div>
                <div><input type="checkbox" /> {this.props.img2}</div>
                <div><input type="checkbox" /> {this.props.img3}</div>
                <div><input type="checkbox" /> {this.props.img4}</div>
                <div><input type="checkbox" /> {this.props.img5}</div>
                <div><input type="checkbox" /> {this.props.img6}</div>
                <div><input type="checkbox" /> {this.props.img7}</div>
                <div><input type="checkbox" /> {this.props.img8}</div>
                <div><input type="checkbox" /> {this.props.img9}</div>
                <div><input type="checkbox" /> {this.props.img10}</div>
                <div><input type="checkbox" /> {this.props.img11}</div>
                <div><input type="checkbox" /> {this.props.img12}</div>
            </section>
     


        )
    }
}