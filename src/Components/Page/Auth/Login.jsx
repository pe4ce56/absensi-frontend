import React, { Component } from 'react'
import Authlayout from '../../_auth_partials/AuthLayout'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        // this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        const body = document.querySelector('body')
        body.classList.add('bg-default')
    }


    render() {
        const LoginComponent = () => {
            return (
                <div className="container mt--8 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-body px-lg-5 py-lg-5">
                                    <form role="form">
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Email" type="email" onChange={e => console.log(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Password" type="password" />
                                            </div>
                                        </div>
                                        <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                            <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                <span className="text-muted">Remember me</span>
                                            </label>
                                        </div>
                                        <div className="text-center">
                                            <button type="button" className="btn btn-primary btn-block mt-4">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <React.Fragment>
                <Authlayout render={<LoginComponent />} />
            </React.Fragment>
        )
    }
}