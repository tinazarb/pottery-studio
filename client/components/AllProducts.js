import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../store/products';
import { incrementItem, updateCart } from '../store/cart';

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  handleIncrement = (product) => {
    const token = localStorage.getItem('token');
    if (token) {
      let currentQuantity = this.props.cart.products[product.id] || 0;
      this.props.updateCart(
        token,
        this.props.cart.cartId,
        product.id,
        currentQuantity + 1
      );
    } else {
      this.props.incrementItem(product.id);
    }
  };

  render() {
    const products = this.props.products;
    return (
      <div>
        <h2>Products</h2>

        <div className="product-list">
          <ul>
            {products.map((product) => (
              <div className="product-list-item" key={product.id}>
                <div className="product-list-item-detail">
                  <Link to={`/products/${product.id}`}>
                    <img className="list-image" src={product.imgUrl} />
                  </Link>
                  <p className="title">{product.title}</p>
                  <p className="price">${product.price}</p>
                  {/* temp placement so I can see it working */}
                  {/* <p className="quantity">quantity: {product.quantity}</p> */}
                </div>
                <div>
                  {/* I want to click the button and it adds something to cart...  */}
                  <button
                    className="btn btn-dark"
                    type="button"
                    // need to check if item already exists in localStorage.
                    onClick={() => this.handleIncrement(product)}
                  >
                    Purchase
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
  incrementItem: (productId) => dispatch(incrementItem(productId)),
  updateCart: (token, cartId, productId, quantity) =>
    dispatch(updateCart(token, cartId, productId, quantity)),
});

export default connect(mapState, mapDispatch)(AllProducts);
