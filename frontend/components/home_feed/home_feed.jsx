import React from 'react';


class HomeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.displayPhotos = this.displayPhotos.bind(this);
  }

  componentDidMount() {
    this.props.currentUser.followeeIds.forEach((userId) => {
      this.props.getPhotosForUser(userId);
    });
  }
  // debugger

  displayPhotos() {
    const that = this;
    return this.props.currentUser.followeeUploads.map((userUploadsPair) => {
      return (
        <li key={Object.keys(userUploadsPair)}>

          {Object.values(userUploadsPair)[0].map((uploadId) => {
            if (that.props.photos[uploadId]) {
              return (
                  <img key={that.props.photos[uploadId].id}
                    src={that.props.photos[uploadId].medium}/>
              );
            }
          })}
          
        </li>
      );
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
