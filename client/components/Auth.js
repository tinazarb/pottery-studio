import { render } from 'enzyme';
import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store/auth';

/**
 * COMPONENT
 */

class Auth extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="username">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {};
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    // error: state.auth.error,
  };
};

// const mapSignup = (state) => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.auth.error,
//   };
// };

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password));
    },
  };
};

export default connect(mapLogin, mapDispatch)(Auth);
// export const Signup = connect(mapSignup, mapDispatch)(Auth);

// export default Auth;
