import React from 'react';
import { Link } from 'react-router-dom';

// &nbsp;or&nbsp

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" className="button login-button">Login</Link>
    <Link to="/signup" className="button sign-up-button">Sign Up</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<nav className="profile-logout">
    <h2 className="header-name">{currentUser.username}</h2>
    <img src="https://www.fancyhands.com/images/default-avatar-250x250.png" className="profile-image"></img>
    <button className="button logout-button" onClick={logout}>Log Out</button>
	</nav>
);

const NavBar = ({currentUser, logout}) => (
  <section className="nav-bar">
    <h1 className="site-name">fLEXpx</h1>
    {currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}
  </section>
);

export default NavBar;
