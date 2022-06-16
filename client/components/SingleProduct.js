import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleProduct } from '../store/singleProduct';

class SingleProduct extends React.Component {

  componentDidMount () {
    this.props.loadSingleProduct(this.props.match.params.id)
  }

  render() {
    const { title, price, type, quantity, colour, imgUrl} = this.props.product

    return (
      <div>
        <h2>{title}</h2>
        <p>{type}</p>
        <p>{colour}</p>
        <p>${price}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity"></input>
        <br />
        <img src={imgUrl} style={{width: '500px', height: 'auto'}}/>
        <br />
        <button>Add to Cart</button>
      </div>
    )

  }
}

const mapState = (state) => ({
    product: state.singleProduct
});

const mapDispatch = (dispatch) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id))
  };
};

export default connect(mapState, mapDispatch)(SingleProduct);

