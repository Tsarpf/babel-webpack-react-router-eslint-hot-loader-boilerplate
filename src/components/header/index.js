import React from 'react';
import { Link } from 'react-router';
export default class Header extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">
					<h1> The Boilerplate </h1>
				</Link>
				<hr/>
			</div>
		)
	}
}

