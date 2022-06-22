import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../store/auth';

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.loginUser(this.state, this.props.history);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="contianer admin-login-form-container">
        <h2>Management System</h2>
        <form className="admin-login-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email" className="form-label">
              <small>Email</small>
            </label>
            <input
              className="form-control"
              name="email"
              onChange={this.handleChange}
              type="text"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              <small>Password</small>
            </label>
            <input
              className="form-control"
              name="password"
              onChange={this.handleChange}
              type="password"
              value={password}
            />
          </div>
          <button className="form-button btn btn-dark" type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (formData, history) => dispatch(loginUser(formData, history)),
  };
};

export default connect(null, mapDispatchToProps)(AdminLogin);
