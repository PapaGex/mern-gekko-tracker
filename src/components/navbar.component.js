import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expend-lg">
                <Link to="/" className="navbar-brand">Gecko-Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Geckos</Link>
                         </li>
                         <li className="navbar-item">
                             <Link to="/create" className="nav-link">Add New Gecko</Link>
                         </li>
                         <li className="navbar-item">
                             <Link to="/species" className="nav-link">Add Species</Link>
                         </li>
                    </ul>
                </div>
            </nav>
        )
    }
}