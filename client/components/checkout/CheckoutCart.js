import React from 'react';
import { connect } from 'react-redux';

class CheckoutCart extends React.Component {
  render() {
    console.log('CART:', this.props.cart);
    console.log('products', this.props.products);

    if (this.props.products.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <div className="checkoutCart-container">
        {Object.entries(this.props.cart).map((productArray) => {
          const product = this.props.products.find(
            (product) => product.id === parseInt(productArray[0], 10)
          );
          return (
            <div className="checkoutCart-items">
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

export default connect(null, null)(CheckoutCart);
