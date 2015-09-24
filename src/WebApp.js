import React from 'react';
import Main from './containers/application';
import createBrowserHistory from 'history/lib/createBrowserHistory';

React.render( <Main history={ createBrowserHistory() }/>, document.getElementById( 'app' ) );
