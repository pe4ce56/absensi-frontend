import React from 'react'
import swal from 'sweetalert2'
import { connect } from 'react-redux'
import ActionType from '../../../../../redux/reducer/globalActionType'
import axios from 'axios'
import { API_URL } from '../../../../../config/config'

function Profile(props) {
    const handleLogout = (e) => {
        swal.fire({
            title: "Apakah Anda akan logout?",
            icon: "warning",
            reverseButtons: true,
            showCancelButton: true,
            confirmButtonText: 'Logout',
            cancelButtonText: "Batal",
            confirmButtonColor: 'red',
        }).then((will) => {
            if (will) {
                props.dispatch.block()
                axios.post(`${API_URL}/api/logout`).then(({ data }) => {
                    if (data.code === 200) {
                        console.log(props)
                        props.dispatch.handleLogout()
                        props.dispatch.unblock()
                    }
                })
            }
        })
    }

    return (
        <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
            <li className="nav-item dropdown">
                <a className="nav-link pr-0" href="https://www.google.com" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div className="media align-items-center">
                        <span className="avatar avatar-sm rounded-circle">
                            <img alt="placeholder" src="../assets/img/theme/team-4.jpg" />
                        </span>
                        <div className="media-body  ml-2  d-none d-lg-block">
                            <span className="mb-0 text-sm  font-weight-bold">John Snow</span>
                        </div>
                    </div>
                </a>
                <div className="dropdown-menu  dropdown-menu-right ">
                    <div className="dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome!</h6>
                    </div>
                    <a href="https://www.google.com" className="dropdown-item">
                        <i className="ni ni-single-02" />
                        <span>My profile</span>
                    </a>
                    <a href="https://www.google.com" className="dropdown-item">
                        <i className="ni ni-settings-gear-65" />
                        <span>Settings</span>
                    </a>
                    <a href="https://www.google.com" className="dropdown-item">
                        <i className="ni ni-calendar-grid-58" />
                        <span>Activity</span>
                    </a>
                    <a href="https://www.google.com" className="dropdown-item">
                        <i className="ni ni-support-16" />
                        <span>Support</span>
                    </a>
                    <div className="dropdown-divider" />
                    <button className="dropdown-item" onClick={handleLogout}>
                        <i className="ni ni-user-run" />
                        <span>Logout</span>
                    </button>
                </div>
            </li>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: {
        handleLogout: (value) => {
            return dispatch({ type: ActionType.RESET_USERDATA })
        },
        block: () => dispatch({ type: ActionType.LAYOUT_BLOCK }),
        unblock: () => dispatch({ type: ActionType.LAYOUT_UNBLOCK })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)