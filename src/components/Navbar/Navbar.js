import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand font-weight-bold" to="/">NewsAPI</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/" activeclassname="active">Home</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/business" activeclassname="active">Business</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/entertainment" activeclassname="active">Entertainment</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/health" activeclassname="active">Health</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/science" activeclassname="active">Science</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/sports" activeclassname="active">Sports</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/technology" activeclassname="active">Technology</NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink className="nav-link font-weight-bold" to="/about" activeclassname="active">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
