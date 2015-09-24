import React from 'react';
import Application from './containers/application';
import createBrowserHistory from 'history/lib/createBrowserHistory';

React.render( <Application history={ createBrowserHistory() }/>, document.getElementById( 'app' ) );
