import React from 'react';
import { connect } from 'react-redux';

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
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { email, firstName, lastName, addressLine, country, zip, state } =
      this.state;

    console.log(this.state);
    return (
      <div className="purchase-form-container">
        <form>
          <div className="form-fields">
            <label>Email</label>
            <input
              name="email"
              class="form-control"
              onChange={this.handleChange}
              value={email}
            />
          </div>
          <div class="row">
            <div class="col">
              <label>First Name</label>
              <input
                name="firstName"
                class="form-control"
                onChange={this.handleChange}
                value={firstName}
              />
            </div>

            <div class="col">
              <label>Last Name</label>
              <input
                name="lastName"
                class="form-control"
                onChange={this.handleChange}
                value={lastName}
              />
            </div>
          </div>
          <div className="form-fields">
            <label>Address Line</label>
            <input
              name="addressLine"
              class="form-control"
              onChange={this.handleChange}
              value={addressLine}
            />
          </div>
          <div className="form-fields">
            <label>Country</label>
            <input
              name="country"
              class="form-control"
              onChange={this.handleChange}
              value={country}
            />
          </div>
          <div className="form-fields">
            <label>Zip</label>
            <input
              name="zip"
              class="form-control"
              onChange={this.handleChange}
              value={zip}
            />
          </div>
          <div className="form-fields">
            <label>State</label>
            <input
              name="state"
              class="form-control"
              onChange={this.handleChange}
              value={state}
            />
          </div>
          <button class="btn btn-dark" type="submit">
            Checkout
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, null)(PurchaseForm);
