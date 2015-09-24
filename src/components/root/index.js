import React from 'react';
import Header from '../header';
import Footer from '../footer';

export default class Root extends React.Component {
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
}
