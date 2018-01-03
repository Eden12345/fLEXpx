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
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn === false) {
      this.setState({animation: 'fadeInDown'});
      // this.props.history.push('/');}, 1000);
    }
  }

  handleAnimation() {

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
      return <Link to="/signup">Sign Up Here</Link>;
    } else {
      return <Link to="/login">Log In Here</Link>;
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
          {this.props.formType} below or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"/>
            </label>
            <br/>
            <input type="submit" value="Submit" className="button"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
