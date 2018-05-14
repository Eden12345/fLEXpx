import React from "react";
import { Link } from 'react-router-dom';



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.demoUser = this.demoUser.bind(this);
  }

  demoUser() {
    this.props.switchLoginAnimation(true);
    this.props.history.push('/login');
  }

  render() {
    return (
      <main className="landing-page animated fadeIn">

        <div className="greeting">
          <p className="landing-page-text">Discover Photos and Upload Your Own</p>
          <a className="button landing-page-demo" onClick={this.demoUser}>Demo profile</a>
        </div>
      </main>
    );
  }
}

export default LandingPage;
