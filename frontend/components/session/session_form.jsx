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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn === false) {
      this.setState({animation: 'fadeInDown'});
      // this.props.history.push('/');}, 1000);
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.setState({animation: 'fadeOutUp'});
    setTimeout(() => {this.props.processForm({user});}, 1000);
  }

  navLink() {
    if (this.props.formType === 'Login') {
      return <Link to="/signup">Sign Up here</Link>;
    } else {
      return <Link to="/login">Log In here</Link>;
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
            <div className="form-text">
              {this.props.formType} below or {this.navLink()}
            </div>
            <div className="form-errors">
              {this.renderErrors()}
            </div>
          <div className="login-form">
            <br/>
            <label htmlFor="username">Username:</label>
              <input type="text"
                id="username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input login-input-username"
              />
            <br/>
            <label htmlFor="password">Password:</label>
              <input type="password"
                id="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input login-input-password"/>
            <br/>
            <input type="submit" value={`${this.props.formType}`} className="button submit-button"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
