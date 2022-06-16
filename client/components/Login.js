import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store/auth';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name] : evt.target.value
    })
  }


  handleSubmit(evt) {
    evt.preventDefault();
    // const email = evt.target.email.value;
    // const password = evt.target.password.value;
    // console.log('this.props', this.props)

    this.props.loginUser(this.state)
  }


  render() {
    console.log('state', this.state)
    const {email, password} = this.state
    return (
      <div>
        <h1>Hello!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" onChange={this.handleChange}type="text" value={email} />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" onChange={this.handleChange} type="password" value={password}/>
          </div>
            <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (formData) => dispatch(authenticate(formData))
  }
}

export default connect(null, mapDispatchToProps)(Login);
