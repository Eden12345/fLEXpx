import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);

    // this.state = ({animation: "fadeIn"});

    this.displayUsers = this.displayUsers.bind(this);
    this.displayPhotos = this.displayPhotos.bind(this);
  }

  componentDidMount() {
    const searchText = this.props.location.search.slice(1);

    this.props.clearSearch();
    this.props.searchUsers(searchText);
    this.props.searchPhotos(searchText);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      const searchText = nextProps.location.search.slice(1);

      this.props.clearSearch();
      this.props.searchUsers(searchText);
      this.props.searchPhotos(searchText);
    }

    if (this.props.search.users.length !== nextProps.search.users.length &&
    nextProps.search.users.length > 0) {
      nextProps.search.users.forEach((id) => {
        this.props.getUser(id);
        this.props.getPhotosForUser(id);
      });
    }

    if (this.props.search.photos.length !== nextProps.search.photos.length &&
    nextProps.search.photos.length > 0) {
      nextProps.search.photos.forEach((id) => {
        this.props.getPhoto(id);
      });
    }
  }

  displayUsers() {
    const that = this;
    if (that.props.search.users.length > 0) {

      return that.props.search.users.map((userId) => {
        const user = that.props.users[userId];

        if (user) {
          const profilePhotoId = user.profile_photo_id;
          return (
            <li className="user-search-item" key={user.id}>
              <div className="user-search-item-header">
                <img src={(profilePhotoId && that.props.photos[profilePhotoId]) ? that.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
                  className="user-search-item-avatar" />
                <Link to={`profile/${user.id}`} className="user-search-item-username">
                  {user.username}
                </Link>
              </div>
            </li>
          );
        }
      });
    } else {
      return (
        that.displayNUText()
      );
    }
  }

  displayPhotos() {
    const that = this;
    if (this.props.search.photos.length > 0) {

      return this.props.search.photos.map((photoId) => {
        const photo = that.props.photos[photoId];

        if (photo) {
          return (
            <li className="photo-search-item" key={photo.id}>
              <img src={photo.large} className="photo-search-item-image"/>
              <div className="photo-search-item-title-container">
                <p className="photo-search-item-title">{photo.title}</p>
                <Link to={`profile/${photo.uploader_id}`}
                  className="profile-link-prompt">
                  (view profile)
                </Link>
              </div>
            </li>
          );
        }
      });
    } else {
      return (
        this.displayNPText()
      );
    }
  }

  displayNUText() {
    return (
      <p className="no-users-text">No users matched your search</p>
    );
  }

  displayNPText() {
    return (
      <p className="no-photos-text">No photos matched your search</p>
    );
  }

  render() {
    return (
      <div className={`search-page animated fadeIn`}>
        <section className="user-search">
          <p className="user-search-title">Users</p>
          <ul className="user-search-list">
            {this.displayUsers()}
          </ul>
        </section>

        <section className="photo-search">
          <p className="photo-search-title">Photos</p>
          <ul className="photo-search-list">
            {this.displayPhotos()}
          </ul>
        </section>
      </div>
    );
  }
}

export default Search;
