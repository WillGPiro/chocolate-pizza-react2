import React, { Component } from "react";
import Nav from './Nav.js';
import fbIcon from '../src/assets/fb-icon.png';
import twitIcon from '../src/assets/twit-icon.png';
import gpIcon from '../src/assets/gp-icon.png';
import flicIcon from '../src/assets/flic-icon.png';
import instaIcon from '../src/assets/insta-icon.png';
import pintIcon from '../src/assets/pint-icon.png';
import hrIcon from '../src/assets/fb-icon.png';


const navImg = [fbIcon, twitIcon, gpIcon, flicIcon, instaIcon, pintIcon, hrIcon]

export default class Header extends Component {
    render() {
        return (
        <header>
            <div className="delicious">
                <img src={this.props.logo} /> Delicious
            </div>
            <div className="social">
                <Nav array ={navImg}/>

            </div>
        </header>
        );
    }
}