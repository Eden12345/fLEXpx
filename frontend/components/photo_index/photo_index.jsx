import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
  }

  componentDidMount() {
    this.props.getUser(parseInt(this.props.match.params.userId));
    this.props.getPhotosForUser(parseInt(this.props.match.params.userId));
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
