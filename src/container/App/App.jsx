import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../../component/atom/PrivateRoute/PrivateRoute'
import MainLayout from '../layout/MainLayout/MainLayout'
import Dashboard from '../page/Dashboard/Dashboard'
import Login from '../page/Login/Login'
import Notfound from '../page/NotFound/NotFound'

class App extends Component {
    constructor(props) {
        super(props)

        if (this.props.store.auth.isAuthenticated) axios.defaults.headers.common['Authorization'] = `Bearer ${this.props.store.auth.token}`
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={props =>
                        <h2>Ok</h2>
                    } />
                    {/* <IndexRoute exact path="/" /> */}
                    {/* Rencananya kalo user belum login bakal di redirect ke /login kalo udah redirect ke /dashboard */}

                    <Route exact path="/login" render={props => <Login {...props} />} />
                    {/* <Route exact path="/admin/login" render={props => <Login {...props} />} /> */}

                    <PrivateRoute exact path="/dashboard" render={props => {
                        return (
                            <MainLayout {...props} render={Dashboard} />
                        )
                    }} />
                    {/* <Route exact path="/dashboard" render={props => {
                    }} /> */}

                    {/* 404 Page */}
                    <Route exact path="*" render={props => {
                        return (
                            <Notfound {...props} />
                        )
                    }} />
                </Switch>
            </Router>
        )
    }
}

const IndexRoute = (props) => {
    return (
        <Route {...props} render={props => (
            props.store?.auth?.isAuthenticated
                ? <Redirect to={{
                    pathname: "/dashboard",
                }} />
                : <Redirect to={{
                    pathname: "/login",
                }} />
        )} />
    )
}

const mapStateToProps = state => {
    return {
        store: state
    }
}

export default connect(mapStateToProps)(App)
