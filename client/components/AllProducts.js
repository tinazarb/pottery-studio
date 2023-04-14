import React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../store/products';
import { incrementItem, updateCart } from '../store/cart';
import { autoLogin } from '../store/auth';
import CreateProduct from './admin/CreateProduct';
import EditProduct from './admin/EditProduct';
import Loading from './Loading';

export class AllProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.getProducts();
    this.setState({ isLoading: false });
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
        <h2 id="all-products-title">Products</h2>
        {this.state.isLoading && <Loading />}
        {!this.state.isLoading && this.props.auth.isAdmin === true && (
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
                      <button
                        id="edit-button"
                        className="btn btn-dark"
                        type="button">
                        Edit
                      </button>
                    </Link>

                    <button
                      className="btn btn-outline-danger"
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
        )}
        {!this.state.isLoading && (
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
                      onClick={() => this.handleIncrement(product)}>
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
  cart: state.cart,
});

const mapDispatch = (dispatch) => ({
  autoLogin: (token) => dispatch(autoLogin(token)),
  getProducts: () => dispatch(fetchProducts()),
  incrementItem: (productId) => dispatch(incrementItem(productId)),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  updateCart: (token, cartId, productId, quantity) =>
    dispatch(updateCart(token, cartId, productId, quantity)),
});

export default connect(mapState, mapDispatch)(AllProducts);
