import React from 'react';
import { connect } from 'react-redux';

import { fetchSingleProduct } from '../store/singleProduct';
import { incrementItem } from '../store/cart';

class SingleProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.loadSingleProduct(this.props.match.params.id);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    console.log(this.props.product);
    const { title, price, type, colour, imgUrl, description, id } =
      this.props.product;

    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={imgUrl}
              style={{ width: '500px', height: 'auto' }}
            />
          </div>

          <div className="col-md-6 single-product-content">
            <h2 className="title">{title}</h2>
            <p className="price">${price}</p>

            <div className="quantity">
              <label for="quantity">QUANTITY:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                style={{ width: '60px', height: 'auto' }}
                value={this.state.quantity}
                onChange={this.handleChange}
              ></input>
            </div>

            <button
              class="btn btn-dark"
              onClick={() => this.props.incrementItem(id, this.state.quantity)}
            >
              ADD TO CART <i class="bi bi-cart"></i>
            </button>

            <div className="description">
              <p>
                <span>Type: </span>
                {type}
              </p>
              <p>
                <span>Colour: </span>
                {colour}
              </p>
              <p>
                <span>Description: </span>
              </p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  product: state.singleProduct,
  cart: state.cart,
});

const mapDispatch = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    incrementItem: (productId, quantity) =>
      dispatch(incrementItem(productId, quantity)),
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
