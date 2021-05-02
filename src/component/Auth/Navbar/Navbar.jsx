import React from 'react'

export default function Navbar(props) {

    return (
        <nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="dashboard.html">
                    <img src="../assets/img/brand/white.png" alt="Navbar Brand" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse navbar-custom-collapse collapse" id="navbar-collapse">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <a href="dashboard.html">
                                    <img src="../assets/img/brand/blue.png" alt="bg" />
                                </a>
                            </div>
                            <div className="col-6 collapse-close">
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span />
                                    <span />
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-original-title="Like us on Facebook">
                                <i className="fab fa-facebook-square" />
                                <span className="nav-link-inner--text d-lg-none">Facebook</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-original-title="Follow us on Instagram">
                                <i className="fab fa-instagram" />
                                <span className="nav-link-inner--text d-lg-none">Instagram</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-original-title="Follow us on Twitter">
                                <i className="fab fa-twitter-square" />
                                <span className="nav-link-inner--text d-lg-none">Twitter</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-icon" href="https://github.com/creativetimofficial" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-original-title="Star us on Github">
                                <i className="fab fa-github" />
                                <span className="nav-link-inner--text d-lg-none">Github</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
