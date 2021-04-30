import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './Components/Page/Auth/Login'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={props => <h2>Home</h2>} />
				<Route exact path="/login" render={props => <Login {...props} />} />
			</Switch>
		</Router>
	)
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

export default App;
