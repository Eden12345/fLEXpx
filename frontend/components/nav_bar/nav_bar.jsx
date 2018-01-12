import React from 'react';
import { Link } from 'react-router-dom';
import ProfileDropdown from "./profile-dropdown";
import UploadPhotoContainer from "../upload_photo/upload_photo_container";

// &nbsp;or&nbsp

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: '',
      sitename: '',
      logsi: '',
      login: '',
      signup: '',
      search: '',
      // search: '🔍',
      hidebar: '',
      uploadModal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleFocus = this.handleFocus.bind(this);

    this.sessionLinks = this.sessionLinks.bind(this);

    this.landingPage = this.landingPage.bind(this);
    this.regularPage = this.regularPage.bind(this);

    this.turnOnUploadModal = this.turnOnUploadModal.bind(this);
    this.displayUploadModal = this.displayUploadModal.bind(this);
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

    if (nextProps.maximizeOn) {
      setTimeout(() => this.setState({hidebar: "nav-bar-hidden"}), 1000);
    } else {
      this.setState({hidebar: ''});
    }

    if (this.props.location.pathname != nextProps.location.pathname ||
      this.props.location.search != nextProps.location.search) {
      this.setState({search: ''});
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

  handleChange(e) {
    this.setState({search: e.currentTarget.value});
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/search?${this.state.search}`);
    }
  }

  // handleFocus() {
  //   this.setState({search: 'khhkb'});
  // }

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

  turnOnUploadModal(e) {
    e.preventDefault();
    this.props.switchUploadModal(true);
  }

  displayUploadModal() {
    if (this.props.uploadModalOn) {
      return (
        <UploadPhotoContainer />
      );
    }
  }

  render() {
    if (this.props.maximizeOn) {
      return (
        <section className={`nav-bar ${this.state.navbar} animated fadeOut ${this.state.hidebar}`}>

          <Link to="/homefeed" className={`button site-name ${this.state.sitename}`}>fLEXpx</Link>
          {this.props.currentUser ?
            <div className="right-side">

              <input className="search-bar"
                value={this.state.search}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress} />

              <div className="profile-upload">
                <ProfileDropdown
                  currentUser={this.props.currentUser}
                  logout={this.props.logout}
                  getPhoto={this.props.getPhoto}
                  photos={this.props.photos} />
                <button className="upload-button" onClick={this.turnOnUploadModal}>Upload</button>
                {this.displayUploadModal()}
              </div>

            </div> : this.sessionLinks()}
          </section>
        );
    } else {
      return (
        <section className={`nav-bar ${this.state.navbar} animated fadeIn`}>
          <Link to="/homefeed" className={`button site-name ${this.state.sitename}`}>fLEXpx</Link>
          {this.props.currentUser ?
            <div className="right-side">

              <input className="search-bar"
                value={this.state.search}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress} />

              <div className="profile-upload">
                <ProfileDropdown
                  currentUser={this.props.currentUser}
                  logout={this.props.logout}
                  getPhoto={this.props.getPhoto}
                  photos={this.props.photos} />
                <button className="upload-button" onClick={this.turnOnUploadModal}>Upload</button>
                {this.displayUploadModal()}
              </div>

            </div> : this.sessionLinks()}
          </section>
        );
    }
  }
}

export default NavBar;
