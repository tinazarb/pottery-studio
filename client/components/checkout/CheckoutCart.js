import React from 'react';
import { connect } from 'react-redux';

//change to functional component
class CheckoutCart extends React.Component {
  render() {
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
            <div className="checkoutCart-items" key={product.id}>
              <img className="checkoutCart-item-img" src={product.imgUrl} />
              <div>{product.title}</div>
              <div>{productArray[1]}</div>
              <div>${product.price * parseInt(productArray[1])}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default connect(null, null)(CheckoutCart);
