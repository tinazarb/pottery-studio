import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../store/products';
import { getUserOrder } from '../../store/orders';

class Confirmation extends React.Component {
  componentDidMount() {
    this.props.getProducts();
    const token = localStorage.getItem('token');
    if (token) {
      this.props.getUserOrder(token);
    }
  }
  render() {
    if (this.props.products.length === 0) {
      return <div>Nothing to see here!</div>;
    }

    if (this.props.order.products === null) {
      return <div>wait what?</div>;
    }

    // if (!this.props.guest) {
    //   return <div>loading...</div>;
    // }

    return (
      <div className="container">
        <div>
          <h1>Thank you!</h1>
          <p>Please find your order confirmation below</p>
        </div>
        <div>
          <h2>Your Order:</h2>
          <div>
            {/* <p>Email: {this.props.guest.email}</p>
            <p>
              Name: {this.props.guest.firstName} {this.props.guest.lastName} */}
            {/* </p> */}
            <p>Shipping Address:</p>
          </div>
          {Object.entries(this.props.order.products).map((productArray) => {
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
      </div>
    );
  }
}

const mapState = (state) => ({
  products: state.products,
  guest: state.guest,
  order: state.order,
});

const mapDispatch = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
  getUserOrder: (token) => dispatch(getUserOrder(token)),
});

export default connect(mapState, mapDispatch)(Confirmation);
