import React from 'react';
import Main from './components/main';
import createBrowserHistory from 'history/lib/createBrowserHistory';

React.render( <Main history={ createBrowserHistory() }/>, document.getElementById( 'app' ) );
