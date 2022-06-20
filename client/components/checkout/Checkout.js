import React from 'react';
import { connect } from 'react-redux';

import PurchaseForm from './PurchaseForm';
import CheckoutCart from './CheckoutCart';

import { fetchProducts } from '../../store/products';

class Checkout extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <div className="checkout-container">
          <PurchaseForm cart={this.props.cart} />
          <CheckoutCart cart={this.props.cart} products={this.props.products} />
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  products: state.products,
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Checkout);
