import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './session/login_container';
import SignUpContainer from './session/sign_up_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilePageContainer from './profile_page/profile_page_container';
import HomeFeedContainer from './home_feed/home_feed_container';
import LandingPageContainer from './landing_page/landing_page_container';
import SearchContainer from './search/search_container';


const App = () => (
  <div className="main-wrapper">
    <NavBarContainer />
    <Route exact path="/" render={() => <Redirect to="/landing"/>}/>
    <AuthRoute exact path="/landing" component={LandingPageContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <ProtectedRoute path="/homefeed" component={HomeFeedContainer} />
    <ProtectedRoute path="/profile/:userId" component={ProfilePageContainer} />
    <ProtectedRoute path="/search" component={SearchContainer} />
  </div>
);

export default App;


// can change login and sign up back to AuthRoute if you can figure out a different way to handle animations
