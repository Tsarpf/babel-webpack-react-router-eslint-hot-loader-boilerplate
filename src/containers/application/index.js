import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Root from 'components/root';
import Home from 'components/home';
import About from 'components/about';
import Map from 'components/map';

export default class Application extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/" component={ Root }>
					<IndexRoute component={ Home }/>
					<Route path="about" component={ About } />
					<Route path="map" component={ Map } />
				</Route>
			</Router>
		)
	}
}
