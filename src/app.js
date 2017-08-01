'use strict';
import React from 'react';
import { render } from 'react-dom';


import { Provider } from 'react-redux'; //Provides the app with the store that is imported from the store folder
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; //Handles routes structure and makes the use of back and forward buttons possible


//Imported Components
//MainComponent
import Main from './components/main.js'; //Root component

//NewsOageComponent
import NewsPageComponent from './components/pages/NewsPage.js'//This component loads automatically when the MainComponent loads, its the indexRoute to the '/' path.

//ArticlepageComponent
import ArticlePageComponent from './components/pages/ArticlePage.js'//This Component shows the individual article that depends on which article that is clicked.

//ProfilePageComponent and its children components
import ProfilePageComponent from './components/pages/ProfilePage.js'
import MyProfilePageComponent from './components/pages/MyProfilePage.js';
import EditMyProfilePageComponent from './components/pages/EditMyProfilePage.js';
import MyArticlesPageComponent from './components/pages/MyArticlesPage.js';

//AdminPageComponent and it children components
import AdminPageComponent from './components/pages/AdminPage.js'
import EditUserPageComponent from './components/pages/EditUserPage.js'
import AddUserPageComponent from './components/pages/AddUserPage.js'
import EditNewsPageComponent from './components/pages/EditNewsPage.js'
import AddNewsPageComponent from './components/pages/AddNewsPage.js'

//The store that connects the reducers with the initialState
import constructedStore from './store/store.js';

// this component handles all routes that are not defined
const NotFoundComponent = () => <h1>404... The page is not found</h1>;

// stylings
import "./../public/css/normalize.css";
import '../public/css/react-mde.scss';
import '../public/css/react-mde-command-styles.scss';
import '../public/css/demo.scss';
import '../public/css/markdown-default-theme.scss';


const Routes = (
    <Provider store={constructedStore}>

        <Router history={browserHistory}>
            <Route path='/' component={Main}>
                <IndexRoute component={NewsPageComponent}/>

                <Route path="/news/:aid" component={ArticlePageComponent}/>

                <Route path="/it" component={NotFoundComponent}/>

                <Route path="/profile" component={ProfilePageComponent}>
                    <IndexRoute component={MyProfilePageComponent}/>
                    <Route path="/editprofile" component={EditMyProfilePageComponent}/>
                    <Route path="/myarticles" component={MyArticlesPageComponent}/>
                </Route>

                <Route path='/admin' component={AdminPageComponent}>
                    <IndexRoute component={EditUserPageComponent}/>
                    <Route path="/adduser" component={AddUserPageComponent}/>
                    <Route path="/addnews" component={AddNewsPageComponent}/>
                    <Route path="/editnews" component={EditNewsPageComponent}/>
                </Route>

                <Route path='*' component={NotFoundComponent}/>
            </Route>
        </Router>

    </Provider>
);

render(Routes, document.getElementById('app'));