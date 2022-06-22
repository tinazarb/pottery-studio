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
      <div>
        <h2 id="create-account-title">Create a New Account</h2>
        <form className="account-form" onSubmit={this.handleSubmit}>
          <div>
            <label className="col-sm-2 col-form-label">First Name</label>
            <input
              name="firstName"
              type="text"
              onChange={this.handleChange}
              value={firstName}
              className="form-control"
            />
          </div>
          <div>
            <label className="col-sm-2 col-form-label">Last Name</label>
            <input
              name="lastName"
              type="text"
              onChange={this.handleChange}
              value={lastName}
              className="form-control"
            />
          </div>
          <div>
            <label className="col-sm-2 col-form-label">Email</label>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={email}
              className="form-control"
            />
          </div>
          <div>
            <label className="col-sm-2 col-form-label">Password</label>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              value={password}
              className="form-control"
            />
          </div>
          <div>
            <button className="btn btn-dark" type="submit">
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
