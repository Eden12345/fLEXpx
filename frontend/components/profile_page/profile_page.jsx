import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoIndexContainer from '../photo_index/photo_index_container';


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.profileHeader = this.profileHeader.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.users[parseInt(this.props.match.params.userId)]) {
    //   this.props.getPhoto(nextProps.users[parseInt(this.props.match.params.userId)].banner_photo_id);
    //   this.props.getPhoto(nextProps.users[parseInt(this.props.match.params.userId)].profile_photo_id);
    // }
  }

  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.userId));
  }

  profileHeader() {
    const profilePageOwner = this.props.users[parseInt(this.props.match.params.userId)];
    if ((profilePageOwner && this.props.photos) && (this.props.photos[profilePageOwner.banner_photo_id] &&
    this.props.photos[profilePageOwner.profile_photo_id])) {
      return (
        <div className="profile-header">
          <img src={this.props.photos[profilePageOwner.banner_photo_id].large}
            className="banner-photo"></img>
          <img src={this.props.photos[profilePageOwner.profile_photo_id].avatar}
            className="profile-photo"></img>
          <p className="profile-username">{profilePageOwner ? profilePageOwner.username : ""}</p>
        </div>
      );
    } else {
      return (
        <div className="profile-header">
          <div>profile banner</div>
          <div>profile photo</div>
        </div>
      );
    }
  }

  render() {
    return (
      <section className="profile-page">
        {this.profileHeader()}
        <PhotoIndexContainer className="profile-page-photo-index"/>
      </section>
    );
  }

}

export default ProfilePage;
