import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
        <ul>
          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>
                <p className="title">Title: {product.title}</p>
                <img src={product.imgUrl} style={{width: '500px', height: 'auto'}}/>
              </Link>
              <p className="price">Price: {product.price}</p>
            </div>
          ))}
        </ul>
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












