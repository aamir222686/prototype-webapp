import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainHomepage from './pages/homepage/homepage.component';
import CatKodaguPage from './pages/cat-kodagu-page/cat-kodagu-page.component';
import CatStorePage from './pages/cat-store-page/cat-store-page.component';
import BellTheCatPage from './pages/bell-the-cat-page/bell-the-cat-page.component';
import SignIn from './pages/sign-in-page/sign-in-page.component';
import Register from './pages/register-page/register-page.component';
import './App.css';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainHomepage} />
        <Route exact path='/cat-kodagu' component={CatKodaguPage} />
        <Route path='/cat-store' component={CatStorePage} />
        <Route exact path='/bell-the-cat' component={BellTheCatPage} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;
