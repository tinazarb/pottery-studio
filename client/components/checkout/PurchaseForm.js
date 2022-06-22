import React from 'react';
import { connect } from 'react-redux';

import { checkout } from '../../store/guest';
import { userCheckout } from '../../store/cart';

class PurchaseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      addressLine: '',
      country: '',
      zip: '',
      state: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      this.props.userCheckout(
        token,
        this.props.cart.cartId,
        this.props.history
      );
    } else {
      //this is for guests, it creates an entry in the DB for them to save their cart
      this.props.checkout(
        {
          user: {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: `${this.state.addressLine}, ${this.state.state} ${this.state.zip}, ${this.state.country} `,
          },
          cart: this.props.cart,
        },
        this.props.history
      );
    }
  }

  render() {
    const { email, firstName, lastName, addressLine, country, zip, state } =
      this.state;

    return (
      <div className="purchase-form-container">
        <form className="purchase-form" onSubmit={this.handleSubmit}>
          <div className="form-fields">
            <label>Email</label>
            <input
              name="email"
              className="form-control"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div className="row">
            <div className="col">
              <label>First Name</label>
              <input
                name="firstName"
                className="form-control"
                onChange={this.handleChange}
                value={firstName}
              />
            </div>

            <div className="col">
              <label>Last Name</label>
              <input
                name="lastName"
                className="form-control"
                onChange={this.handleChange}
                value={lastName}
              />
            </div>
          </div>
          <div className="form-fields">
            <label>Address Line</label>
            <input
              name="addressLine"
              className="form-control"
              onChange={this.handleChange}
              value={addressLine}
            />
          </div>
          <div className="form-fields">
            <label>Country</label>
            <input
              name="country"
              className="form-control"
              onChange={this.handleChange}
              value={country}
            />
          </div>
          <div className="form-fields">
            <label>Zip</label>
            <input
              name="zip"
              className="form-control"
              onChange={this.handleChange}
              value={zip}
            />
          </div>
          <div className="form-fields">
            <label>State</label>
            <input
              name="state"
              className="form-control"
              onChange={this.handleChange}
              value={state}
            />
          </div>
          <button className="btn btn-dark" type="submit">
            Checkout
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatch = { checkout, userCheckout };

export default connect(mapState, mapDispatch)(PurchaseForm);
