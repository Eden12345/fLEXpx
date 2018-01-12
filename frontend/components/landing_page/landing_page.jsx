import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <main className="landing-page animated fadeIn">

    <div className="greeting">
      <p className="landing-page-text">Discover Photos and Upload Your Own</p>
      <Link to="/signup" className="button landing-page-sign-up">Join fLEXpx</Link>
    </div>
  </main>
);

export default LandingPage;
