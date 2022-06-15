import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../store/products';
import { incrementItem } from '../store/cart';

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (this.props.products.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div className="cart-container">
        <div>
          <h2>Your Cart</h2>
          <div>
            {Object.entries(this.props.cart).map((productArray) => {
              const product = this.props.products.find(
                (product) => product.id === parseInt(productArray[0], 10)
              );
              return (
                <div key={product.id} className="cart-item">
                  <p>{product.title}</p>
                  <p>Quantity: {productArray[1]}</p>
                  <div>
                    <ion-icon
                      name="add-circle-outline"
                      onClick={() => {
                        this.props.incrementItem(product.id);
                      }}
                    ></ion-icon>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
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
  incrementItem: (productId) => dispatch(incrementItem(productId)),
});

export default connect(mapState, mapDispatch)(Cart);
