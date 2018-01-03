import React from 'react';
import { Link } from 'react-router-dom';

// &nbsp;or&nbsp

const sessionLinks = () => (
  <nav className="login-signup-profile">
    <Link to="/login" className="button">Login</Link>
    <Link to="/signup" className="button">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<nav className="login-signup-profile">
    <h2 className="header-name">{currentUser.username}</h2>
    <button className="button" onClick={logout}>Log Out</button>
	</nav>
);

const NavBar = ({currentUser, logout}) => (
  <section className="nav-bar">
    <h1>fLEXpx</h1>
    {currentUser ? personalGreeting(currentUser, logout) : sessionLinks()}
  </section>
);

export default NavBar;
