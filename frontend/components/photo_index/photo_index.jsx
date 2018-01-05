import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotosForUser(this.props.currentUser.id);
  }

  render() {
    return (
      <ul className="photo-index">
        {Object.values(this.props.photos).map((photo) => {
          return (
            <li key={photo.id}><img src={photo.photo_thumb}></img></li>
          );
        })}
      </ul>
    );
  }

}

export default PhotoIndex;
