import React from 'react'
import Profile from './Dropdown/Profile/Profile'
import './Topnav.css'

export default function Topnav(props) {

    return (
        <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Navbar links */}
                    <ul className="navbar-nav align-items-center  ml-md-auto ">
                        <li className="nav-item d-xl-none">
                            {/* Sidenav toggler */}
                            <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                                <div className="sidenav-toggler-inner">
                                    <i className="sidenav-toggler-line" />
                                    <i className="sidenav-toggler-line" />
                                    <i className="sidenav-toggler-line" />
                                </div>
                            </div>
                        </li>
                        <li className="nav-item d-sm-none">
                            <a className="nav-link" href="https://www.google.com" data-action="search-show" data-target="#navbar-search-main">
                                <i className="ni ni-zoom-split-in" />
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="https://www.google.com" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ni ni-bell-55" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                                {/* Dropdown header */}
                                <div className="px-3 py-3">
                                    <h6 className="text-sm text-muted m-0">You have <strong className="text-primary">13</strong> notifications.</h6>
                                </div>
                                {/* List group */}
                                <div className="list-group list-group-flush">
                                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                {/* Avatar */}
                                                <img alt="placeholder" src="../assets/img/theme/team-1.jpg" className="avatar rounded-circle" />
                                            </div>
                                            <div className="col ml--2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h4 className="mb-0 text-sm">John Snow</h4>
                                                    </div>
                                                    <div className="text-right text-muted">
                                                        <small>2 hrs ago</small>
                                                    </div>
                                                </div>
                                                <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                {/* Avatar */}
                                                <img alt="placeholder" src="../assets/img/theme/team-2.jpg" className="avatar rounded-circle" />
                                            </div>
                                            <div className="col ml--2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h4 className="mb-0 text-sm">John Snow</h4>
                                                    </div>
                                                    <div className="text-right text-muted">
                                                        <small>3 hrs ago</small>
                                                    </div>
                                                </div>
                                                <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                {/* Avatar */}
                                                <img alt="placeholder" src="../assets/img/theme/team-3.jpg" className="avatar rounded-circle" />
                                            </div>
                                            <div className="col ml--2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h4 className="mb-0 text-sm">John Snow</h4>
                                                    </div>
                                                    <div className="text-right text-muted">
                                                        <small>5 hrs ago</small>
                                                    </div>
                                                </div>
                                                <p className="text-sm mb-0">Your posts have been liked a lot.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                {/* Avatar */}
                                                <img alt="placeholder" src="../assets/img/theme/team-4.jpg" className="avatar rounded-circle" />
                                            </div>
                                            <div className="col ml--2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h4 className="mb-0 text-sm">John Snow</h4>
                                                    </div>
                                                    <div className="text-right text-muted">
                                                        <small>2 hrs ago</small>
                                                    </div>
                                                </div>
                                                <p className="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://www.google.com" className="list-group-item list-group-item-action">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                {/* Avatar */}
                                                <img alt="placeholder" src="../assets/img/theme/team-5.jpg" className="avatar rounded-circle" />
                                            </div>
                                            <div className="col ml--2">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h4 className="mb-0 text-sm">John Snow</h4>
                                                    </div>
                                                    <div className="text-right text-muted">
                                                        <small>3 hrs ago</small>
                                                    </div>
                                                </div>
                                                <p className="text-sm mb-0">A new issue has been reported for Argon.</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                {/* View all */}
                                <a href="https://www.google.com" className="dropdown-item text-center text-primary font-weight-bold py-3">View all</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="https://www.google.com" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ni ni-ungroup" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default  dropdown-menu-right ">
                                <div className="row shortcuts px-4">
                                    <a href="https://www.google.com" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-red">
                                            <i className="ni ni-calendar-grid-58" />
                                        </span>
                                        <small>Calendar</small>
                                    </a>
                                    <a href="https://www.google.com" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-orange">
                                            <i className="ni ni-email-83" />
                                        </span>
                                        <small>Email</small>
                                    </a>
                                    <a href="https://www.google.com" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-info">
                                            <i className="ni ni-credit-card" />
                                        </span>
                                        <small>Payments</small>
                                    </a>
                                    <a href="https://www.google.com" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-green">
                                            <i className="ni ni-books" />
                                        </span>
                                        <small>Reports</small>
                                    </a>
                                    <a href="https://www.google.com" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-purple">
                                            <i className="ni ni-pin-3" />
                                        </span>
                                        <small>Maps</small>
                                    </a>
                                    <a href="https://www.google.com" className="col-4 shortcut-item">
                                        <span className="shortcut-media avatar rounded-circle bg-gradient-yellow">
                                            <i className="ni ni-basket" />
                                        </span>
                                        <small>Shop</small>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <Profile />
                </div>
            </div>
        </nav>

    )
}
