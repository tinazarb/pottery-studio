import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../store/products';

class Confirmation extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    console.log(this.props);

    if (this.props.products.length === 0) {
      return <div>Nothing to see here!</div>;
    }

    if (!this.props.guest) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <div>
          <h1>Thank you!</h1>
          <p>Please find your order confirmation below</p>
        </div>
        <div>
          <h2>Your Order:</h2>
          <div>
            <p>Email: {this.props.guest.email}</p>
            <p>
              Name: {this.props.guest.firstName} {this.props.guest.lastName}
            </p>
            <p>Shipping Address:</p>
          </div>
          {Object.entries(this.props.cart.products).map((productArray) => {
            const product = this.props.products.find(
              (product) => product.id === parseInt(productArray[0], 10)
            );
            return (
              <div className="checkoutCart-items" key={product.id}>
                <img className="checkoutCart-item-img" src={product.imgUrl} />
                <div>{product.title}</div>
                <div>${product.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  cart: state.cart,
  products: state.products,
  guest: state.guest,
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapState, mapDispatch)(Confirmation);
