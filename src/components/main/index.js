import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import About from '../about';
import Map from '../map';

const Header = React.createClass( {
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
} );

const Footer = React.createClass( {
	render() {
		return (
			<div>
				<hr/>
				<p> Footer that shows in every page </p>
			</div>
		)
	}
} );

const Main = React.createClass( {
	render() {
		return (
			<div>
				<Header/>

				<div>
					{ this.props.children }
				</div>

				<Footer/>
			</div>
		)
	}
} );

const Home = React.createClass( {
	render() {
		return (
			<div>
				<div> <Link to="/about"> About </Link> </div>
				<div> <Link to="/map"> Map </Link> </div>
			</div>
		)
	}
} )

export default class Application extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={ Main }>
					<IndexRoute component={ Home }/>
					<Route path="about" component={ About } />
					<Route path="map" component={ Map } />
				</Route>
			</Router>
		)
	}
}
