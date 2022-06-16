import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../store/products';
import { incrementItem } from '../store/cart';

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <h2>Products</h2>
        <div className="product-list">
          <ul>
            {products.map((product) => (
              <div key={product.id}>
                <div>
                  <p className="title">Title: {product.title}</p>
                  <img className="list-image" src={product.imgUrl} />
                  <p className="price">Price: {product.price}</p>
                  {/* temp placement so I can see it working */}
                  <p className="quantity">quantity: {product.quantity}</p>
                </div>
                <div>
                  {/* I want to click the button and it adds something to cart...  */}
                  <button
                    type="button"
                    // need to check if item already exists in localStorage.
                    onClick={() => this.props.incrementItem(product.id)}
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
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
  incrementItem: (productId) => dispatch(incrementItem(productId)),
});

export default connect(mapState, mapDispatch)(AllProducts);
