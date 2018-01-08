import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loaded: false
    // };
    // this.displayPhotos = this.displayPhotos.bind(this);
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
                  className="profile-photo-index-item-photo"></img>
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

  // {Object.values(this.props.photos).map((photo) => {
  //   return (
  //     <li key={photo.id} className="profile-photo-item"><img src={photo.thumb}></img></li>
  //   );
  // })}

  render() {
    return (
      <ul className="photo-index">
        {this.displayPhotos()}
      </ul>
    );
  }

}

export default PhotoIndex;
