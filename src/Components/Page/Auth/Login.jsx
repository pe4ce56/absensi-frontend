import React, { Component } from 'react'
import axios from 'axios'
import Authlayout from '../../_auth_partials/AuthLayout'
import { API_URL } from '../../../config/config'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: null,
            username: '',
            password: ''
        }

        // this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        const body = document.querySelector('body')
        body.classList.add('bg-default')

        this.setState({
            page: this.props.match.url.match(/admin/g) ? 'adm' : 'ts' // => TeacherStudent
        })
    }

    handleChange = (e) => {
        this.setState(prevState => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${API_URL}/api/login`, {
            username: this.state.username,
            password: this.state.password
        }).then(({ data }) => {
            if (data.code === 200) {
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('user', JSON.stringify(data.data.user))
            }
            console.log(localStorage.getItem('token'), localStorage.removeItem)
        })
    }

    render() {
        return (
            <React.Fragment>
                <Authlayout render={
                    <div className="container mt--8 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-7">
                                <div className="card bg-secondary border-0 mb-0">
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group mb-3">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="fas fa-address-card" /></span>
                                                    </div>
                                                    <input className="form-control" placeholder="NIP / Kode Guru / NISN" type="text" id="username" value={this.state.username} onChange={this.handleChange} />
                                                </div>
                                                <small className="form-text text-muted">*Gunakan NIP/Kode Guru jika Anda seorang guru dan gunakan NISN jika Anda seorang siswa.</small>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group input-group-merge input-group-alternative">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                                    </div>
                                                    <input className="form-control" placeholder="Password" id="password" type="password" value={this.state.password} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            {/* <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                                <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                    <span className="text-muted">Remember me</span>
                                                </label>
                                            </div> */}
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary btn-block mt-4">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                } />
            </React.Fragment>
        )
    }
}