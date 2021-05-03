import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import MainLayout from '../layout/MainLayout/MainLayout'
import Dashboard from '../page/Dashboard/Dashboard'
import Login from '../page/Login/Login'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={props => <h2>Home</h2>} /> {/* Rencananya kalo user belum login bakal di redirect ke /login kalo udah redirect ke /dashboard */}

                    <Route exact path="/login" render={props => <Login {...props} />} />
                    {/* <Route exact path="/admin/login" render={props => <Login {...props} />} /> */}

                    <Route exact path="/dashboard" render={props => {
                        return (
                            <MainLayout {...props} render={Dashboard} />
                        )
                    }} />
                </Switch>
            </Router>
        )
    }
}

const PrivateRoute = ({ render: Component, role, ...rest }) => {
    let allow = true
    // if (Array.isArray(role)) {
    // 	role.forEach((item, i, arr) => {
    // 		if (item === fakeAuth.role) allow = true
    // 	})
    // }

    // if (role === fakeAuth.role) allow = true

    return (
        allow
            ? <Route {...rest} render={props => (
                true
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }} />
            )}
            />
            : <h2>Access Denied</h2>
    )
}
