import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PhotoIndexContainer from '../photo_index/photo_index_container';

const ProfilePage = ({logout}) => (
  <section className="profile-page">
    <div className="profile-header">
      <div>banner photo</div>
      <div>profile photo</div>
    </div>
    <PhotoIndexContainer className="profile-page-photo-index"/>
  </section>
);

export default ProfilePage;
