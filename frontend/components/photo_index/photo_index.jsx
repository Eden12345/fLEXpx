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

  //NOTE: Will need a method like the one below to only display photos in the state
  //that belong to the user whose profile page we're currently viewing
  //NOTE: For some reason it's working correctly without logic?

  // displayPhotos() {
  //   return (
  //     Object.values(this.props.photos).map((photo) => {
  //       if (this.props.users[parseInt(this.props.match.params.userId)].photo_ids.includes(photo.id)) {
  //         return (
  //           <li key={photo.id}><img src={photo.photo_thumb}></img></li>
  //         );
  //       }
  //     })
  //   );
  // }

  render() {
    return (
      <ul className="photo-index">
        {Object.values(this.props.photos).map((photo) => {
            return (
              <li key={photo.id} className="profile-photo-item"><img src={photo.thumb}></img></li>
            );
        })}
      </ul>
    );
  }

}

export default PhotoIndex;
