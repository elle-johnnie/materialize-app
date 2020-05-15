import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class SideNav extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div className="wrapper">
                <ul id="slide-out" className="sidenav sidenav-fixed">
                <li><div className="user-view">
                        <div className="background center fit">
                            <img src="images/backdrop.png" alt="arid landscape eastern oregon"/>
                        </div>
                        <a href="#user"><img className="circle z-depth-5" alt="johnnie portrait" src="images/photo.png"/></a>
                        <a href="#name"><span className="blue-text name">Johnnie</span></a>
                        <a href="#email"><span className="blue-text email">johnniecodes@gmail.com</span></a>
                    </div></li>
                    <li><NavLink to="/headersizes" className="waves-effect">Head's Up!</NavLink></li>
                    <li><NavLink to="/alignment" className="waves-effect">Which side are you on?</NavLink></li>
                    <li><NavLink to="/screen-size" className="waves-effect">Now You See Me</NavLink></li>
                    <li><NavLink to="/rainbow" className="waves-effect waves-purple">Taste the Rainbow</NavLink></li>
                    <li><NavLink to="/buttons" className="waves-effect">Push My Buttons</NavLink></li>
                    <li><NavLink to="/grid" className="waves-effect">The Grid Iron</NavLink></li>
                    <li><NavLink to="/icons" className="waves-effect">Iconic</NavLink></li>
                    <li><div className="divider" /></li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                
            </div>
        );
    }
}

export default SideNav;