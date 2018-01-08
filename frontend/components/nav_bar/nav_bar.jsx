import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from "./profile-dropdown";

// &nbsp;or&nbsp

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: '',
      sitename: '',
      logsi: '',
      login: '',
      signup: ''
    };
    this.sessionLinks = this.sessionLinks.bind(this);
    this.landingPage = this.landingPage.bind(this);
    this.regularPage = this.regularPage.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname === "/landing") {
      this.landingPage();
    } else {
      this.regularPage();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === "/landing") {
      this.landingPage();
    } else {
      this.regularPage();
    }
  }

  landingPage() {
    this.setState({
      navbar: 'nav-bar-landing',
      sitename: 'site-name-landing',
      logsi: 'login-sign-up-landing',
      login: 'login-button-landing',
      signup: 'sign-up-button-landing'
    });
  }

  regularPage() {
    this.setState({
      navbar: '',
      sitename: '',
      logsi: '',
      login: '',
      signup: ''
    });
  }


  sessionLinks() {
    if (this.props.location.pathname === "/login") {
      return(
        <nav className="login-signup at-login-form">
          <Link to="/signup" className={`button sign-up-button ${this.state.signup}`}>Sign up</Link>
        </nav>
      );
    } else if (this.props.location.pathname === "/signup") {
      return(
        <nav className="login-signup at-sign-up-form">
          <Link to="/login" className={`button login-button ${this.state.login}`}>Log in</Link>
        </nav>
      );
    } else {
      return (
        <nav className={`login-signup ${this.state.logsi}`}>
          <Link to="/login" className={`button login-button ${this.state.login}`}>Log in</Link>
          <Link to="/signup" className={`button sign-up-button ${this.state.signup}`}>Sign up</Link>
        </nav>
      );
    }
  }

  render() {
    return (
      <section className={`nav-bar ${this.state.navbar}`}>
        <Link to="/homefeed" className={`button site-name ${this.state.sitename}`}>fLEXpx</Link>
        {this.props.currentUser ? <ProfileDropdown
          currentUser={this.props.currentUser}
          logout={this.props.logout}
          getPhoto={this.props.getPhoto}
          photos={this.props.photos} /> : this.sessionLinks()}
      </section>
    );
  }
}

export default NavBar;
