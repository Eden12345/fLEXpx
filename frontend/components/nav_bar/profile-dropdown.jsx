import React from 'react';
import { Link } from 'react-router-dom';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.logoutAndClose = this.logoutAndClose.bind(this);
  }


  toggleMenu(e) {
    e.stopPropagation();
    if (this.state.open === false && e.target.id === "menu-button") {
      this.setState({open: true});
    } else {
      this.setState({open: false});
    }
  }

  logoutAndClose(e) {
    e.stopPropagation();
    this.setState({open: false});
    this.props.logout();
  }

  render() {
    return (
      <nav className="profile-logout">
        <button className="profile-dropdown-parent">
          <img src="https://i.imgur.com/ESoIh20.png"
            id="menu-button"
            className="profile-image"
            onClick={this.toggleMenu}/>
          <div className={this.state.open === true ? "profile-dropdown-content" : "profile-dropdown-hidden"}>
            <p className="profile-name">{this.props.currentUser.username}</p>
            <Link to={`/profile/${this.props.currentUser.id}`} className="button dropdown-button profile-link">My profile</Link>
            <div className="button dropdown-button" onClick={this.logoutAndClose}>Log out</div>
          </div>
        </button>
      </nav>
    );
  }
}

export default ProfileDropdown;

//display: none;
//visibility: hidden;

//profiledropdownbutton = parent (relative)
//profiledropdowncontent = child (absolute)
