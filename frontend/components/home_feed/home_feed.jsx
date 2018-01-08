import React from 'react';


class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.displayPhotos = this.displayPhotos.bind(this);
  }

  componentDidMount() {
    this.props.currentUser.followeeIds.forEach((userId) => {
      this.props.getPhotosForUser(userId);
      this.props.getUser(userId);
    });
  }
  // debugger

  displayPhotos() {
    const that = this;
    return that.props.currentUser.followeeUploads.map((userUploadsPair) => {
      const userId = Object.keys(userUploadsPair);
      if (that.props.users[userId]) {
        return Object.values(userUploadsPair)[0].map((uploadId) => {
          if (that.props.photos[uploadId]) {
            const profilePhotoId = that.props.users[userId].profile_photo_id;
            return (
              <li key={that.props.photos[uploadId].id} className="home-feed-item">
                <p>{that.props.users[userId].username}</p>
                <img src={profilePhotoId ? that.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"} />
                <img src={that.props.photos[uploadId].medium} className="home-feed-photo"/>
              </li>
            );
          }
        });
      } else {
        return (<div></div>);
      }


    });
  }

  render () {
    return (
      <ul className="home-feed">
        {this.displayPhotos()}
      </ul>
    );
  }
}

export default HomeFeed;
