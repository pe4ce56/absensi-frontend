import React, { Component } from 'react'
import axios from 'axios'
import { API_URL } from '../../../config/config'
import { Navbar, Header, Footer } from '../../../component/Auth/index'
import LoginForm from './LoginForm/LoginForm'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        const body = document.querySelector('body')
        body.classList.add('bg-default')

        // this.setState({
        //     page: this.props.match.url.match(/admin/g) ? 'adm' : 'ts' // => TeacherStudent
        // })
    }

    setLoginState = ({ username, password }) => {
        this.setState(prev => {
            return {
                ...prev,
                username: username,
                password: password
            }
        })
    }

    loginSubmit = (e) => {
        axios.post(`${API_URL}/api/login`, {
            username: this.state.username,
            password: this.state.password
        }).then(({ data }) => {
            // if (data.code === 200) {
            //     localStorage.setItem('token', data.data.token)
            //     localStorage.setItem('user', JSON.stringify(data.data.user))
            // }
            // console.log(localStorage.getItem('token'), localStorage.removeItem)
            console.log(data)
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="main-content">
                    <Header />
                    <div className="container mt--8 pb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-7">
                                <div className="card bg-secondary border-0 mb-0">
                                    <div className="card-body px-lg-5 py-lg-5">
                                        <LoginForm setLoginState={this.setLoginState} loginSubmit={this.loginSubmit} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
