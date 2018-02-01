import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maximize: null,
      animation: "",
      title: ""
    };
    this.displayPhotos = this.displayPhotos.bind(this);
    this.turnOnMaximize = this.turnOnMaximize.bind(this);
    this.turnOffMaximize = this.turnOffMaximize.bind(this);
    this.maximizePhoto = this.maximizePhoto.bind(this);
  }

  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.userId));
    this.props.getPhotosForUser(parseInt(this.props.match.params.userId));
    // setTimeout(() => this.setState({loaded: true}), 1000);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.getUser(parseInt(nextProps.match.params.userId));
      this.props.getPhotosForUser(parseInt(nextProps.match.params.userId));
    }
    // else if (nextProps.currentUser !== this.props.currentUser)
    // this.props.getUser(parseInt(nextProps.match.params.userId));
    // this.props.getPhotosForUser(parseInt(nextProps.match.params.userId));
  }

  showTitle(photoTitle) {
    this.setState({ title: photoTitle });
  }

  hideTitle() {
    this.setState({ title: "" });
  }

  turnOnMaximize(photoId) {
    this.props.switchMaximization(true);
    this.setState({maximize: photoId});
    this.setState({animation: "fadeIn"});
  }

  turnOffMaximize() {
    this.setState({animation: "fadeOut"});
    setTimeout(() => {
      this.setState({maximize: null});
      this.props.switchMaximization(false);
    }, 500);
  }

  maximizePhoto(photo) {
    if (this.state.maximize === photo.id) {
      if (parseInt(this.props.match.params.userId) === this.props.currentUser.id) {
        return (
          <div className={`maxmaximized-photo-container animated ${this.state.animation}`}>
            <img src={photo.large}
              className={`maximized-photo animated ${this.state.animation}`}></img>
            <p className="x-mark"
              onClick={(e) => {e.stopPropagation(); this.turnOffMaximize();}}>×</p>
            <div className="edit-profile-options">
              <p className="edit-profile-options-item profile-photo-set"
                onClick={(e) => {
                  e.stopPropagation();
                  this.props.updateUser({user: {
                    id: this.props.currentUser.id,
                    profile_photo_id: photo.id
                  }});
                  this.turnOffMaximize();
                }}>Set as profile picture</p>
              <p className="edit-profile-options-item banner-photo-set"
                onClick={(e) => {
                  e.stopPropagation();
                  this.props.updateUser({user: {
                    id: this.props.currentUser.id,
                    banner_photo_id: photo.id
                  }});
                  this.turnOffMaximize();
                }}>Set as banner photo</p>
            </div>
          </div>
        );
      } else {
        return (
          <div className={`maxmaximized-photo-container animated ${this.state.animation}`}>
            <img src={photo.large}
              className={`maximized-photo animated ${this.state.animation}`}></img>
            <p className="x-mark"
              onClick={(e) => {e.stopPropagation(); this.turnOffMaximize();}}>×</p>
          </div>
        );
      }
    }
  }

  displayPhotos() {
    if (this.props.users[parseInt(this.props.match.params.userId)]) {
      return (
        Object.values(this.props.photos).reverse().map((photo) => {
          if (this.props.users[parseInt(this.props.match.params.userId)].photoIds.includes(photo.id)) {
            return (
              <li key={photo.id} className="profile-photo-index-item">
                <img src={photo.thumb}
                  className="profile-photo-index-item-photo"
                  onClick={(e) => {e.stopPropagation(); this.turnOnMaximize(photo.id);}}
                  onMouseEnter={(e) => {e.stopPropagation(); this.showTitle(photo.title);}}
                  onMouseLeave={(e) => {e.stopPropagation(); this.hideTitle();}}></img>
                <p class="photo-index-title">{photo.title === this.state.title ? photo.title : ""}</p>
                {this.maximizePhoto(photo)}
              </li>
            );
          } else {
            return (
              <li className={photo.id}></li>
            );
          }
        })
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    return (
      <ul className="photo-index">
        {this.displayPhotos()}
      </ul>
    );
  }

}

export default PhotoIndex;
