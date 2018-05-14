import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      animation: 'fadeInDown'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn === true) {
      this.setState({animation: 'fadeOutUp'});
      setTimeout(() => {this.props.history.push('/homefeed');}, 1300);
    } else if (nextProps.errors.length > 0){
      this.setState({animation: 'bounce'});
    }
  }

  componentDidMount() {
    if (this.props.loginAnimation) {
      setTimeout(() => {
        this.demoUser();
        this.props.switchLoginAnimation(false);
      }, 750);
    } else if (this.props.loggedIn === true) {
      this.setState({animation: 'fadeOutUp'});
      setTimeout(() => {this.props.history.push('/homefeed');}, 1300);
    }
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoUser() {
    this.setState({
      username: "eden",
      password: "starwars"
    });

    setTimeout(() => {
      this.props.login({user: {username: "eden", password: "starwars"}});
    }, 250);
  }

  handleSubmit(e) {
    this.props.clearSessionErrors();
    this.setState({animation: ''});
    if (e) {
      e.preventDefault();
    }
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'Log in') {
      return (
        <div className="other-form-text">Don't have an account?
          <Link to="/signup" className="other-form-link"> Sign up</Link>
        </div>
      );
    } else {
      return (
        <div className="other-form-text">Already have an account?
          <Link to="/login" className="other-form-link"> Log In</Link>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className={`login-form-box animated ${this.state.animation}`}>
          <br/>
            <div className="form-title">
              {this.props.formType === "Log in" ? "Log In to fLEXpx" : "Join fLEXpx"}
            </div>
            <div className="form-errors">
              {this.renderErrors()}
            </div>
          <div className="login-form">
            <br/>
            <label htmlFor="username">Username</label>
              <input type="text"
                id="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input login-input-username"
              />
            <br/>
            <label htmlFor="password">Password</label>
              <input type="password"
                id="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input login-input-password"/>
            <br/>
            <input type="submit" value={`${this.props.formType}`} className="button submit-button"/>
          </div>
          {this.navLink()}
          <div className="other-form-text demo-user-text">or&nbsp;
            <a className="demo-user-link" onClick={this.demoUser}>Log in</a>
            &nbsp;as Demo User</div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
