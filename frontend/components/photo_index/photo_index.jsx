import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maximize: null,
      animation: ""
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
  }

  turnOnMaximize(photoId) {
    this.setState({maximize: photoId});
    this.setState({animation: "fadeIn"});
  }

  turnOffMaximize() {
    this.setState({animation: "fadeOut"});
    setTimeout(() => this.setState({maximize: null}), 1000);
  }

  maximizePhoto(photo) {
    if (this.state.maximize === photo.id) {
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

  displayPhotos() {
    console.log(this.props.users[parseInt(this.props.match.params.userId)]);
    console.log(this.props.photos);

    if (this.props.users[parseInt(this.props.match.params.userId)]) {
      return (
        Object.values(this.props.photos).map((photo) => {
          if (this.props.users[parseInt(this.props.match.params.userId)].photoIds.includes(photo.id)) {
            return (
              <li key={photo.id} className="profile-photo-index-item">
                <img src={photo.thumb}
                  className="profile-photo-index-item-photo"
                  onClick={(e) => {e.stopPropagation(); this.turnOnMaximize(photo.id);}}></img>
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
