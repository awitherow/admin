import React, { Component } from 'react';
import AuthService from '../utils/AuthService';
import settings from '../settings';

export default class Index extends Component {
	state = {
		loggedIn: false
	};

	componentDidMount() {
		this.auth = new AuthService(settings.clientId, settings.domain);
		this.setState({ loggedIn: this.auth.loggedIn() });
		this.auth.callback = () => {
			this.setState({ loggedIn: this.auth.loggedIn() });
		};
	}

	login() {
		this.auth.login();
	}

	render() {
		const loginButton = this.state.loggedIn ? (
			<div>HELLO</div>
		) : (
			<button onClick={this.login.bind(this)}>Login</button>
		);

		return <div> {loginButton} </div>;
	}
}
