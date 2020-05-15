import React from 'react'

export default function NavBar() {
    return (
        <div class="navbar-fixed">
            <nav class="teal lighten-1" role="navigation">
                <div class="nav-wrapper container"> 
                <a href="#!" data-target="slide-out" className="sidenav-trigger hide-on-large-only">
                    <i className="material-icons">menu</i>
                </a>
                    <a href="#!" className="brand-logo center">Let's Explore Materialize</a>
                    <ul class="right hide-on-med-and-down text-right">
                        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">About<i class="material-icons right">arrow_drop_down</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>


    )
}
