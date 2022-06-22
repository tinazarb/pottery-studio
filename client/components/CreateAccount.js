import React from 'react';
import { connect } from 'react-redux';

import { createUser } from '../store/auth';

//add isAdmin -- and set default to false
class CreateAccount extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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
    this.props.createUser(this.state, this.props.history);
  }

  render() {
    const { email, password, firstName, lastName } = this.state;
    return (
      <div className="contianer signup-form-container">
        <h2 id="create-account-title">Create Account</h2>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.handleChange}
                value={firstName}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.handleChange}
                value={lastName}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={email}
              />
            </div>
            <div className="col">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                name="password"
                type="text"
                onChange={this.handleChange}
                value={password}
              />
            </div>
          </div>

          <div>
            <button className="form-button btn btn-dark" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (formData, history) => dispatch(createUser(formData, history)),
  };
};

export default connect(null, mapDispatchToProps)(CreateAccount);
