import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidenav(props) {

    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                {/* Brand */}
                <div className="sidenav-header  align-items-center">
                    <a className="navbar-brand" href="https://www.google.com">
                        <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..." />
                    </a>
                </div>
                <div className="navbar-inner">
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        {/* Nav items */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link active">
                                    <i className="ni ni-tv-2 text-primary" />
                                    <span className="nav-link-text">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="icons.html">
                                    <i className="ni ni-planet text-orange" />
                                    <span className="nav-link-text">Icons</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="map.html">
                                    <i className="ni ni-pin-3 text-primary" />
                                    <span className="nav-link-text">Google</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">
                                    <i className="ni ni-single-02 text-yellow" />
                                    <span className="nav-link-text">Profile</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tables.html">
                                    <i className="ni ni-bullet-list-67 text-default" />
                                    <span className="nav-link-text">Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="login.html">
                                    <i className="ni ni-key-25 text-info" />
                                    <span className="nav-link-text">Login</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="register.html">
                                    <i className="ni ni-circle-08 text-pink" />
                                    <span className="nav-link-text">Register</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="upgrade.html">
                                    <i className="ni ni-send text-dark" />
                                    <span className="nav-link-text">Upgrade</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}
