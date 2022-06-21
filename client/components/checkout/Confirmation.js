import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../store/products';

class Confirmation extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    if (this.props.products.length === 0) {
      return <div>Nothing to see here!</div>;
    }
    console.log(this.props.products, 'props');
    return (
      <div>
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

export default connect(mapState, mapDispatch)(Confirmation);
