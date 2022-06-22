import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../store/products';
import { incrementItem } from '../store/cart';
import { autoLogin } from '../store/auth';
import CreateProduct from './admin/CreateProduct';
import EditProduct from './admin/EditProduct';

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const products = this.props.products;
    return (
      <div>
        <h2>Products</h2>
        {this.props.auth.isAdmin === true ? (
          <div className="product-list">
            <ul>
              {products.map((product) => (
                <div key={product.id}>
                  <div>
                    <p className="title">Title: {product.title}</p>

                    <Link to={`/products/${product.id}`}>
                      <img className="list-image" src={product.imgUrl} />
                    </Link>

                    <p className="price">Price: {product.price}</p>
                    {/* temp placement so I can see it working */}
                    <p className="quantity">quantity: {product.quantity}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Link to={`/products/${product.id}/edit`}>
                      <button id='edit-button'  className="btn btn-dark" type="button">Edit</button>
                    </Link>

                    <button className="btn btn-outline-danger"
                      type="button"
                      onClick={() => this.props.deleteProduct(product.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>

                </div>
              ))}
            </ul>
            <h2>Add a new product:</h2>
                  <CreateProduct />
                    {/* <Link to='/products/create'>
                      <button>Create a new product</button>
                    </Link> */}
          </div>
        ) : (
          <div className="product-list">
            <ul>
              {products.map((product) => (
                <div key={product.id}>
                  <div>
                    <p className="title">Title: {product.title}</p>

                    <Link to={`/products/${product.id}`}>
                      <img className="list-image" src={product.imgUrl} />
                    </Link>

                    <p className="price">Price: {product.price}</p>
                    {/* temp placement so I can see it working */}
                    <p className="quantity">quantity: {product.quantity}</p>
                  </div>
                  <div>
                    {/* I want to click the button and it adds something to cart...  */}
                    <button
                      type="button"
                      // need to check if item already exists in localStorage.
                      onClick={() => this.props.incrementItem(product.id)}>
                      Purchase
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  products: state.products,
  auth: state.auth,
});

const mapDispatch = (dispatch) => ({
  autoLogin: (token) => dispatch(autoLogin(token)),
  getProducts: () => dispatch(fetchProducts()),
  incrementItem: (productId) => dispatch(incrementItem(productId)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
});

export default connect(mapState, mapDispatch)(AllProducts);
