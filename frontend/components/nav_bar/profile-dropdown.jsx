import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.menuOn = this.menuOn.bind(this);
    this.logoutAndClose = this.logoutAndClose.bind(this);
    this.renderAvatar = this.renderAvatar.bind(this);
  }

  componentDidMount() {
    const avatarId = this.props.currentUser.profile_photo_id;
    if (avatarId) {
      this.props.getPhoto(avatarId);
    }
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.location.pathname !== this.props.location.pathname) {
    //   const avatarId = this.props.currentUser.profile_photo_id;
    //   if (avatarId) {
    //     this.props.getPhoto(avatarId);
    //   }
    // }
  }

  toggleMenu(e) {
    e.stopPropagation();
    if (this.state.open === false && e.target.id === "menu-button") {
      this.setState({open: true});
    } else {
      this.setState({open: false});
    }
  }

  menuOn(e) {
    e.stopPropagation();
    this.setState({open: true});
  }

  logoutAndClose(e) {
    e.stopPropagation();
    this.setState({open: false});
    this.props.logout();
  }

  //The below method is only working when you navigate to "My profile"
  //because then a getPhotosForUser request is made

  renderAvatar() {
    const avatarId = this.props.currentUser.profile_photo_id;
    if (avatarId && (this.props.photos[avatarId] && this.props.photos[avatarId].avatar)) {
      return (
        <img src={this.props.photos[avatarId].avatar}
          id="menu-button"
          className="profile-image nav-bar-avatar"/>
      );
    } else {
      return (
        <img src="https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"
          id="menu-button"
          className="profile-image"/>
      );
    }
  }

  render() {
    return (
      <nav className="profile-logout">
        <button className="profile-dropdown-parent" onMouseEnter={this.menuOn} onMouseLeave={this.toggleMenu}>
          {this.renderAvatar()}
          <div className={this.state.open === true ? "profile-dropdown-content" : "profile-dropdown-hidden"}>
            <p className="profile-name">{this.props.currentUser.username}</p>
            <Link to={`/profile/${this.props.currentUser.id}`}
              className="button dropdown-button profile-link">My profile</Link>
            <div className="button dropdown-button" onClick={this.logoutAndClose}>Log out</div>
          </div>
        </button>
      </nav>
    );
  }
}

export default withRouter(ProfileDropdown);

//display: none;
//visibility: hidden;

//profiledropdownbutton = parent (relative)
//profiledropdowncontent = child (absolute)
