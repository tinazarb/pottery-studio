import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/auth';

class Login extends React.Component {
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
      <div className="login-form-container">
        <h2>Pottery Studio</h2>
        <div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email" class="col-sm-2 col-form-label">
                <small>Email</small>
              </label>
              <input
                class="form-control"
                name="email"
                onChange={this.handleChange}
                type="text"
                value={email}
              />
            </div>
            <div>
              <label htmlFor="password" class="col-sm-2 col-form-label">
                <small>Password</small>
              </label>
              <input
                name="password"
                onChange={this.handleChange}
                type="password"
                class="form-control"
                value={password}
              />
            </div>
            <div>
              <button
                className="form-button"
                class="btn btn-dark"
                type="submit">
                Login
              </button>
              <button
                className="form-button"
                class="btn btn-dark"
                type="button">
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (formData, history) => dispatch(loginUser(formData, history)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
