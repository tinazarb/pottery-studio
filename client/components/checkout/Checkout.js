import React from 'react';
import { connect } from 'react-redux';

import PurchaseForm from './PurchaseForm';

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout-container">
        <h1>Checkout</h1>
        <div>
          <PurchaseForm />
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Checkout);
