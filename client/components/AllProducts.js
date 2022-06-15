import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/products';

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
              <div>
                <div key={product.id}>
                  <p className="title">Title: {product.title}</p>
                  <img className="list-image" src={product.imgUrl} />
                  <p className="price">Price: {product.price}</p>
                </div>
                <div>
                  <button type="button">Purchase</button>
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
});

export default connect(mapState, mapDispatch)(AllProducts);
