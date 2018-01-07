import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/sign_up_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilePageContainer from './profile_page/profile_page_container';
import HomeFeedContainer from './home_feed/home_feed_container';
import LandingPage from './landing_page/landing_page';


const App = () => (
  <div className="main-wrapper">
    <NavBarContainer />
    <Route exact path="/" render={() => <Redirect to="/landing"/>}/>
    <AuthRoute exact path="/landing" component={LandingPage} />
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <ProtectedRoute path="/homefeed" component={HomeFeedContainer} />
    <Route path="/profile/:userId" component={ProfilePageContainer} />
  </div>
);

export default App;


// import LandingPageContainer from './langing_page/langing_page_container';
// <Route exact path='/' component={LandingPageContainer}/>
