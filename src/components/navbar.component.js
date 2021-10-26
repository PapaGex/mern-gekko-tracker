import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expend-lg">
                <Link to="/" className="navbar-brand">Gecko-Tracker</Link>
                <div className="navbar-text">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/gallery" className="nav-link">Geckos</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Add New Gecko</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/species" className="nav-link">Add Species</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/work" className="nav-link">Work</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/login" className="nav-link">Registration</Link>
                        </li>
                        <li className="nav-bar-item">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword"/>
                            </div>
                        </li>
                        <li className="nav-bar-item">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="username" className="form-control" id="inputUsername"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}