import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.displayUsers = this.displayUsers.bind(this);
    this.displayPhotos = this.displayPhotos.bind(this);
  }

  componentDidMount() {
    const searchText = this.props.location.search.slice(1);

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
    if (this.props.search.users.length > 0) {

      return this.props.search.users.map((userId) => {
        const user = this.props.users[userId];

        if (user) {
          const profilePhotoId = user.profile_photo_id;
          return (
            <li className="user-search-item">
              <div className="home-feed-item-header">
                <img src={profilePhotoId ? this.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
                  className="home-feed-avatar" />
                <Link to={`profile/${user.id}`} className="home-feed-username">
                  {user.username}
                </Link>
              </div>
            </li>
          );
        }
      });
    } else {
      return (
        this.displayNUText()
      );
    }
  }
  // if (Object.values(that.props.photos).length > 1) {
  //   return Object.values(that.props.photos).map((photo) => {
  //     if (photo.uploader_id !== this.props.currentUser.id) {
  //       const uploader = that.props.users[photo.uploader_id];
  //       if (uploader) {
  //         const profilePhotoId = uploader.profile_photo_id;
  //         return (
  //           <li key={photo.id} className="home-feed-item no-followees-item">
  //             <div className="home-feed-item-header">
  //               <img src={profilePhotoId ? that.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
  //                 className="home-feed-avatar" />
  //               <Link to={`profile/${uploader.id}`} className="home-feed-username">
  //                 {uploader.username}
  //               </Link>
  //             </div>
  //             <img src={photo.large} className="home-feed-photo"/>
  //             <div className="home-feed-title-container">
  //               <p className="home-feed-title">{photo.title}</p>
  //             </div>
  //           </li>
  //         );
  //       }
  //     }
  //   });
  // }

  displayPhotos() {
    const that = this;
    if (this.props.search.photos.length > 0) {

      return this.props.search.photos.map((photoId) => {
        const photo = that.props.photos[photoId];

        if (photo) {
          return (
            <li>
              <img src={photo.large} className="home-feed-photo"/>
              <div className="home-feed-title-container">
                <p className="home-feed-title">{photo.title}</p>
                <Link to={`profile/${photo.uploader_id}`} className="home-feed-username">
                  Check out this user's profile!
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
  // {this.displayUsers()}
  // {this.displayPhotos()}

  render() {
    return (
      <div className="search-page">
        <section className="user-search">
          <p>Users</p>
          <ul className="home-feed">
            {this.displayUsers()}
          </ul>
        </section>

        <section className="photo-search">
          <p>Photos</p>
          <ul className="home-feed">
            {this.displayPhotos()}
          </ul>
        </section>
      </div>
    );
  }
}

export default Search;


// displayPhotos() {
//   const that = this;
//   if (this.props.currentUser.followeeIds.length === 0) {
//     if (Object.values(that.props.photos).length > 1) {
//       return Object.values(that.props.photos).map((photo) => {
//         if (photo.uploader_id !== this.props.currentUser.id) {
//           const uploader = that.props.users[photo.uploader_id];
//           if (uploader) {
//             const profilePhotoId = uploader.profile_photo_id;
//             return (
//               <li key={photo.id} className="home-feed-item no-followees-item">
//                 <div className="home-feed-item-header">
//                   <img src={profilePhotoId ? that.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
//                     className="home-feed-avatar" />
//                   <Link to={`profile/${uploader.id}`} className="home-feed-username">
//                     {uploader.username}
//                   </Link>
//                 </div>
//                 <img src={photo.large} className="home-feed-photo"/>
//                 <div className="home-feed-title-container">
//                   <p className="home-feed-title">{photo.title}</p>
//                 </div>
//               </li>
//             );
//           }
//         }
//       });
//     }
//
//   } else {
//
//     return that.props.currentUser.followeeUploads.map((userUploadsPair) => {
//       const userId = Object.keys(userUploadsPair);
//       if (that.props.users[userId]) {
//         return Object.values(userUploadsPair)[0].map((uploadId) => {
//           if (that.props.photos[uploadId]) {
//             const profilePhotoId = that.props.users[userId].profile_photo_id;
//             return (
//               <li key={that.props.photos[uploadId].id} className="home-feed-item">
//                 <div className="home-feed-item-header">
//                   <img src={profilePhotoId ? that.props.photos[profilePhotoId].avatar : "https://s3.us-east-2.amazonaws.com/flexpx-dev/avatar.png"}
//                     className="home-feed-avatar" />
//                   <Link to={`profile/${userId}`} className="home-feed-username">
//                     {that.props.users[userId].username}
//                   </Link>
//                 </div>
//                 <img src={that.props.photos[uploadId].large} className="home-feed-photo"/>
//                 <div className="home-feed-title-container">
//                   <p className="home-feed-title">{that.props.photos[uploadId].title}</p>
//                 </div>
//               </li>
//             );
//           }
//         });
//       } else {
//         return (<div></div>);
//       }
//     });
//
//   }
// }
