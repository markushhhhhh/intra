'use strict';
import React from 'react';
import { render } from 'react-dom';


import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


//Imported Components
import Main from './components/main.js';
import FirstPageComponent from './components/pages/Firstpage.js';
import AdminPageComponent from './components/pages/AdminPage.js'
import EditUserPageComponent from './components/pages/EditUserPage.js'
import AddUserPageComponent from './components/pages/AddUserPage.js'
import EditNewsPageComponent from './components/pages/EditNewsPage.js'
import AddNewsPageComponent from './components/pages/AddNewsPage.js'
import NewsPageComponent from './components/pages/NewsPage.js'
import ArticlePageComponent from './components/pages/ArticlePage.js'




import constructedStore from './store/store.js';



// this component handles all routes that are not defined
const NotFound = () => <h1>404... The page is not found</h1>

const ArticleViewComponent = () => <div>
    <div data-provide="markdown-editable">
        <h3>This is some editable heading</h3>
        <p>Well, actually all contents within this "markdown-editable" context is really editable. Just click anywhere!</p>
    </div></div>
//The Root component, All other componennts is descending of the root
//The provider provides the routes with the store that handles the initialstate and updates it when called

const Routes = (
    <Provider store={constructedStore}>

        <Router history={browserHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={NewsPageComponent}/>
                <Route path="/news/:aid" component={ArticleViewComponent}/>
                <Route path="/second" component={NotFound}/>
                <Route path='/admin' component={AdminPageComponent}>
                    <IndexRoute component={EditUserPageComponent}/>
                    <Route path="/adduser" component={AddUserPageComponent}/>
                    <Route path="/addnews" component={AddNewsPageComponent}/>
                    <Route path="/editnews" component={EditNewsPageComponent}/>
                </Route>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>

    </Provider>
);



render(Routes, document.getElementById('app'));