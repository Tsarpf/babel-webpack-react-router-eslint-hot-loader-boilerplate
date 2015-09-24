import React from 'react';
import { Link } from 'react-router';
export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div> <Link to="/about"> About </Link> </div>
				<div> <Link to="/map"> Map </Link> </div>
			</div>
		)
	}
}

