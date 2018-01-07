import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from "./profile-dropdown";

// &nbsp;or&nbsp

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="button login-button">Log in</Link>
    <Link to="/signup" className="button sign-up-button">Sign up</Link>
  </nav>
);

const NavBar = ({currentUser, logout}) => (
  <section className="nav-bar nav-bar-landing">
    <h1 className="site-name">fLEXpx</h1>
    {currentUser ? <ProfileDropdown currentUser={currentUser} logout={logout} /> : sessionLinks()}
  </section>
);

export default NavBar;
