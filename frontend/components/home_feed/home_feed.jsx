import React from 'react';
import { Link } from 'react-router-dom';


class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.displayPhotos = this.displayPhotos.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser.followeeIds.length === 0) {
      this.props.getAllPhotos();
      this.props.getAllUsers();
    } else {
      this.props.currentUser.followeeIds.forEach((userId) => {
        this.props.getPhotosForUser(userId);
        this.props.getUser(userId);
      });
    }
  }
  // debugger

  displayPhotos() {
    const that = this;
    if (this.props.currentUser.followeeIds.length === 0) {
      if (Object.values(that.props.photos).length > 1) {
        return Object.values(that.props.photos).reverse().map((photo) => {
          if (photo.uploader_id !== this.props.currentUser.id) {
            const uploader = that.props.users[photo.uploader_id];
            if (uploader) {
              const profilePhotoId = uploader.profile_photo_id;
              return (
                <li key={photo.id} className="home-feed-item no-followees-item">
                  <div className="home-feed-item-header">
                    <img src={profilePhotoId ? that.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
                      className="home-feed-avatar" />
                    <Link to={`profile/${uploader.id}`} className="home-feed-username">
                      {uploader.username}
                    </Link>
                  </div>
                  <img src={photo.large} className="home-feed-photo"/>
                  <div className="home-feed-title-container">
                    <p className="home-feed-title">{photo.title}</p>
                  </div>
                </li>
              );
            }
          }
        });
      }

    } else {

      return that.props.currentUser.followeeUploads.map((userUploadsPair) => {
        const userId = Object.keys(userUploadsPair);
        if (that.props.users[userId]) {
          return Object.values(userUploadsPair)[0].reverse().map((uploadId) => {
            if (that.props.photos[uploadId]) {
              const profilePhotoId = that.props.users[userId].profile_photo_id;
              return (
                <li key={that.props.photos[uploadId].id} className="home-feed-item">
                  <div className="home-feed-item-header">
                    <img src={profilePhotoId ? that.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
                      className="home-feed-avatar" />
                    <Link to={`profile/${userId}`} className="home-feed-username">
                      {that.props.users[userId].username}
                    </Link>
                  </div>
                  <img src={that.props.photos[uploadId].large} className="home-feed-photo"/>
                  <div className="home-feed-title-container">
                    <p className="home-feed-title">{that.props.photos[uploadId].title}</p>
                  </div>
                </li>
              );
            }
          });
        } else {
          return (<div></div>);
        }
      });

    }
  }

  displayNFText() {
    return (
      <p className="no-followees-text">Looks like you haven't followed any other users! Check out the profiles below and follow the ones that you like to start adding personalized photos to your feed</p>
    );
  }

  render() {
    return (
      <ul className="home-feed animated fadeIn">
        {this.props.currentUser.followeeIds.length === 0 ? this.displayNFText() : ""}
        {this.displayPhotos()}
      </ul>
    );
  }
}

export default HomeFeed;
