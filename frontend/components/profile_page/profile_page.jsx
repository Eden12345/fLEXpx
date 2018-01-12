import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoIndexContainer from '../photo_index/photo_index_container';


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.profileHeader = this.profileHeader.bind(this);
    this.followButton = this.followButton.bind(this);
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

  followButton() {
    if (parseInt(this.props.match.params.userId) === this.props.currentUser.id) {
      return (
        <div></div>
      );
    } else {

      if (this.props.currentUser.followeeIds.includes(parseInt(this.props.match.params.userId))) {
        return (
          <div className="button follow-button"
            onClick={(e) => {
              e.stopPropagation();
              this.props.unFollowUser(parseInt(this.props.match.params.userId));}}>Unfollow</div>
        );
      } else {
        return (
          <div className="button follow-button"
            onClick={(e) => {
              e.stopPropagation();
              this.props.followUser(parseInt(this.props.match.params.userId));}}>Follow</div>
        );
      }

    }
  }

  profileHeader() {
    const profilePageOwner = this.props.users[parseInt(this.props.match.params.userId)];
    if ((profilePageOwner && this.props.photos) && this.props.photos[profilePageOwner.banner_photo_id]) {
      return (
        <div className="profile-header">
          <img src={this.props.photos[profilePageOwner.banner_photo_id].large}
            className="banner-photo"></img>
          <img src={this.props.photos[profilePageOwner.profile_photo_id] ? this.props.photos[profilePageOwner.profile_photo_id].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
            className="profile-photo"></img>
          <p className="profile-username">{profilePageOwner ? profilePageOwner.username : ""}</p>
          {this.followButton()}
        </div>
      );
    } else if (profilePageOwner && this.props.photos) {
      return (
        <div className="profile-header profile-header-missing-banner">
          <div className="banner-photo missing-banner-photo"></div>
          <img src={this.props.photos[profilePageOwner.profile_photo_id] ? this.props.photos[profilePageOwner.profile_photo_id].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
            className="profile-photo profile-photo-missing-banner"></img>
          <p className="profile-username missing-banner-username">
            {profilePageOwner ? profilePageOwner.username : ""}
          </p>
          {this.followButton()}
        </div>
      );
    } else {
      //maybe we don't need the following method?
      return (
        <div className="profile-header profile-header-missing-banner">
          <div className="banner-photo missing-banner-photo"></div>
          <img src="https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"
            className="profile-photo profile-photo-missing-banner"></img>
          <p className="profile-username missing-banner-username">
            {profilePageOwner ? profilePageOwner.username : ""}
          </p>
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
