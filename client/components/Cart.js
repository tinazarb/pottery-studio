import React from 'react';
import { Link } from 'react-router-dom';

export class Cart extends React.Component {
  render() {
    console.log(localStorage.getItem('Cara Mug'));
    return (
      <div className="cart-container">
        <div>
          <h2>Your Cart</h2>
          <div>
            {Object.entries(localStorage).map((array) => {
              console.log(array[0]);
              return (
                <div>
                  <p>{array[0]}</p>
                  <p>Quantity: {array[1]}</p>
                </div>
              );
            })}
          </div>
          <div>
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
