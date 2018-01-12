var React = require("react");
var Link = require("react-router").Link;


class UploadPhoto extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      imageFile: null,
      imageUrl: null,
      animation1: "fadeInDown",
      animation2: "fadeIn"
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.clickFileSelector = this.clickFileSelector.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    //NOTE: add getPhotosForUser if currentUser changes so that the new photo
    //will render if you're on your profile page
    if (Object.keys(nextProps.photos).length > Object.keys(this.props.photos).length) {
      this.closeForm();
    }
  }

  updateTitle (e) {
    e.preventDefault();
    this.setState({
      title: e.target.value
    });
  }

  updateFile (e) {
    e.preventDefault();

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit (e) {
    // e.stopPropagation();
    const formData = new FormData();
    formData.append("photo[title]", this.state.title);
    if (this.state.imageFile) formData.append("photo[image]", this.state.imageFile);
    this.props.uploadPhoto(formData);
  }

  closeForm(e) {
    if (e) {
      e.preventDefault();
    }

    this.setState({animation1: "fadeOutUp"});
    this.setState({animation2: "fadeOut"});
    setTimeout(() => this.props.switchUploadModal(false), 1000);
  }

  //How can I add an element like the one below to replace the file-input one that looks ugly?
  clickFileSelector(e) {
    e.preventDefault();
    this.photoFileInput.click();
  }

  //In case we need flex for the input options
  //<div className="upload-input-options"></div>

  render() {
    return (
      <div className={`modal-wrapper animated ${this.state.animation2}`}>
        <div className="modal-background"></div>
        <section className={`upload-form-box animated ${this.state.animation1}`}>
          <p className="upload-form-title">Upload Photo</p>
          <form className="upload-form">
              <div className="title-input">
                <p className="title-input-label">Title</p>
                <input className="title-input-field"
                  type="text"
                  onChange={this.updateTitle}>
                </input>
              </div>
              <div className="file-input-button"
                onClick={this.clickFileSelector}>Choose File</div>
            <input className="file-input-hidden"
              type="file"
              ref={(input) => { this.photoFileInput = input; }}
              onChange={this.updateFile}/>
            <object className="upload-photo-display" type="image/jpeg" data={this.state.imageUrl}/>
            <div className="upload-form-options">
              <button className="upload-photo-submit" onClick={this.handleSubmit}>Upload Photo</button>
              <button className="close-form-button" onClick={this.closeForm}>Cancel</button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default UploadPhoto;



// class SessionForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       animation: 'fadeInDown'
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.demoUser = this.demoUser.bind(this);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.loggedIn === true) {
//       this.setState({animation: 'fadeOutUp'});
//       setTimeout(() => {this.props.history.push('/homefeed');}, 2000);
//     } else if (nextProps.errors.length > 0){
//       this.setState({animation: 'bounce'});
//     }
//   }
//
//   componentWillUnmount() {
//     this.props.clearErrors();
//   }
//
//   update(field) {
//     return e => this.setState({
//       [field]: e.currentTarget.value
//     });
//   }
//
//   demoUser() {
//     this.props.login({user: {username: "demo user", password: "demopassword"}});
//   }
//
//   handleSubmit(e) {
//     if (e) {
//       e.preventDefault();
//     }
//     const user = this.state;
//     this.props.processForm({user});
//   }
//
//   navLink() {
//     if (this.props.formType === 'Log in') {
//       return (
//         <div className="other-form-text">Don't have an account?
//           <Link to="/signup" className="other-form-link"> Sign up</Link>
//         </div>
//       );
//     } else {
//       return (
//         <div className="other-form-text">Already have an account?
//           <Link to="/login" className="other-form-link"> Log In</Link>
//         </div>
//       );
//     }
//   }
//
//   renderErrors() {
//     return(
//       <ul>
//         {this.props.errors.map((error, i) => (
//           <li key={`error-${i}`}>
//             {error}
//           </li>
//         ))}
//       </ul>
//     );
//   }
//
//   //add "animated" before ${this.state.animation} to bring animations back to session form
//   //NOTE: You'll also need to change the AuthRoute for LoginContainer and SignUpContainer
//   //back to Route for the fadeOutUp animation to ever get set
//
//   render() {
//     return (
//       <div className="login-form-container">
//         <form onSubmit={this.handleSubmit} className={`login-form-box ${this.state.animation}`}>
//           <br/>
//             <div className="form-title">
//               {this.props.formType === "Log in" ? "Log In to fLEXpx" : "Join fLEXpx"}
//             </div>
//             <div className="form-errors">
//               {this.renderErrors()}
//             </div>
//           <div className="login-form">
//             <br/>
//             <label htmlFor="username">Username</label>
//               <input type="text"
//                 id="username"
//                 value={this.state.username}
//                 onChange={this.update('username')}
//                 className="login-input login-input-username"
//               />
//             <br/>
//             <label htmlFor="password">Password</label>
//               <input type="password"
//                 id="password"
//                 value={this.state.password}
//                 onChange={this.update('password')}
//                 className="login-input login-input-password"/>
//             <br/>
//             <input type="submit" value={`${this.props.formType}`} className="button submit-button"/>
//           </div>
//           {this.navLink()}
//           <div className="other-form-text demo-user-text">or&nbsp;
//             <a className="demo-user-link" onClick={this.demoUser}>Log in</a>
//             &nbsp;as Demo User</div>
//         </form>
//       </div>
//     );
//   }
// }





// var TweetForm = React.createClass({
//   contextTypes: {
//     router: React.PropTypes.object.isRequired
//   },
//
//   getInitialState: function () {
//     return({
//       body: "",
//       imageFile: null,
//       imageUrl: null
//     });
//   },
//
//   updateBody: function (e) {
//     this.setState({
//       body: e.target.value
//     });
//   },
//
//   updateFile: function (e) {
//     const file = e.currentTarget.files[0];
//     const fileReader = new FileReader();
//     fileReader.onloadend = function () {
//       this.setState({ imageFile: file, imageUrl: fileReader.result });
//     }.bind(this);
//
//     if (file) {
//       fileReader.readAsDataURL(file);
//     }
//   },
//
//   handleSubmit: function (e) {
//     const formData = new FormData();
//     formData.append("tweet[body]", this.state.body);
//     if (this.state.imageFile) formData.append("tweet[image]", this.state.imageFile);
//     TweetApi.createTweet(formData, this.goBack);
//   },
//
//   goBack: function () {
//     this.context.router.push("/");
//   },
//
//   render: function () {
//
//     return(
//       <div>
//         Tweet form!
//
//         <Link to="/">Back to Tweets</Link>
//         <input type="text" onChange={this.updateBody}/>
//         <input type="file" onChange={this.updateFile}/>
//         <button onClick={this.handleSubmit}>Make Tweet!</button>
//         <img src={this.state.imageUrl}/>
//       </div>);
//   }
// });
