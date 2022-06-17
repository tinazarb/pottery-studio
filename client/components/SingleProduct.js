import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.loadSingleProduct(this.props.match.params.id);
  }

  render() {
    console.log(this.props.cart);
    const { title, price, type, quantity, colour, imgUrl, description } =
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
              ></input>
            </div>

            <button class="btn btn-dark">
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
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);
