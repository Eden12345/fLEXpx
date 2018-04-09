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
    
    // this.props.login({user: {username: "eden", password: "starwars"}});
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

//OLD LANDING PAGE WITHOUT DEMO LOGIN:

// const LandingPage = () => (
//   <main className="landing-page animated fadeIn">
//
//     <div className="greeting">
//       <p className="landing-page-text">Discover Photos and Upload Your Own</p>
//       <Link to="/signup" className="button landing-page-sign-up">Join fLEXpx</Link>
//     </div>
//   </main>
// );
