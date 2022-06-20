import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../store/products';
import { incrementItem, decrementItem } from '../store/cart';

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  getSubTotal = () => {
    let total = 0;
    Object.entries(this.props.cart).forEach((productArray) => {
      const product = this.props.products.find(
        (product) => product.id === parseInt(productArray[0], 10)
      );
      let qty = productArray[1];
      let price = product.price;
      total += qty * price;
    });
    return total;
  };

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
                  <img className="cart-item-image" src={product.imgUrl} />
                  <p>{product.title}</p>

                  <p>Quantity: {productArray[1]}</p>
                  <div className="add-minus-button-container">
                    <ion-icon
                      name="add-circle-outline"
                      onClick={() => {
                        this.props.incrementItem(product.id);
                      }}
                    ></ion-icon>
                    <ion-icon
                      name="remove-circle-outline"
                      onClick={() => this.props.decrementItem(product.id)}
                    ></ion-icon>
                  </div>
                  <p>${product.price * productArray[1]}</p>
                </div>
              );
            })}
          </div>
          <div id="subtotal">Subtotal: ${this.getSubTotal()}</div>
          <div>
            <Link class="btn btn-dark" to="/checkout">
              Proceed to Checkout
            </Link>
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
  decrementItem: (productId) => dispatch(decrementItem(productId)),
});

export default connect(mapState, mapDispatch)(Cart);
