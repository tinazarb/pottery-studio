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
      <div className="account-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              onChange={this.handleChange}
              value={firstName}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              onChange={this.handleChange}
              value={lastName}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              name="email"
              type="text"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="text"
              onChange={this.handleChange}
              value={password}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
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
