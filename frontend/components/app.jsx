import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/sign_up_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilePageContainer from './profile_page/profile_page_container';
import HomeFeedContainer from './home_feed/home_feed_container';
import LandingPageContainer from './landing_page/landing_page_container';


const App = () => (
  <div className="main-wrapper">
    <NavBarContainer />
    <ProtectedRoute path="/homefeed" component={HomeFeedContainer} />
    <AuthRoute exact path="/" component={LandingPageContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignUpContainer} />
    <Route path="/profile/:userId" component={ProfilePageContainer} />
  </div>
);

export default App;


// import LandingPageContainer from './langing_page/langing_page_container';
// <Route exact path='/' component={LandingPageContainer}/>
