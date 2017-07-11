'use strict';
import React from 'react';
import { render } from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {red800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


//Imported Components
import Main from './components/main.js';
import FirstPageComponent from './components/pages/Firstpage.js';
import SignUpPageComponent from './components/pages/AddUserPage.js'
import AdminPageComponent from './components/pages/AdminPage.js'
import AddUserPageComponent from './components/pages/AddUserPage.js'
import EditUserPageComponent from './components/pages/EditUserPage.js'


import constructedStore from './store/store.js';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: red800,
    }
});

// this component handles all routes that are not defined
const NotFound = () => <h1>404... The page is not found</h1>

//The Root component, All other componennts is descending of the root
//The provider provides the routes with the store that handles the initialstate and updates it when called

const Routes = (
    <Provider store={constructedStore}>
<MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={FirstPageComponent}/>
                <Route path="/second" component={NotFound}/>
                <Route path='signup' component={SignUpPageComponent}/>
                <Route path='/admin' component={AdminPageComponent}>
                    <IndexRoute component={AddUserPageComponent}/>
                    <Route path='/edituser' component={EditUserPageComponent}/>
                    <Route path='/hej' component={NotFound}/>
                </Route>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
</MuiThemeProvider>
    </Provider>
);



render(Routes, document.getElementById('app'));