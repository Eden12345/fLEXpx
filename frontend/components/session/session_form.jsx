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
    if (nextProps.loggedIn === false) {
      this.setState({animation: 'fadeInDown'});
      // this.props.history.push('/');}, 1000);
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoUser() {
    this.props.login({user: {username: "demo user", password: "demopassword"}});
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    const user = this.state;
    this.setState({animation: 'fadeOutUp'});
    setTimeout(() => {this.props.processForm({user});}, 1000);
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

  //add "animated" before ${this.state.animation} to bring animations back to session form

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className={`login-form-box ${this.state.animation}`}>
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
