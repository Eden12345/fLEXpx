import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/sign_up_container';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <NavBarContainer />
    <h1>fLEXpx</h1>
    <Switch>
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
    </Switch>
  </div>
);

export default App;


// import LandingPageContainer from './langing_page/langing_page_container';
// <Route exact path='/' component={LandingPageContainer}/>
