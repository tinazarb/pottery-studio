import React, { Component } from 'react';
import { deleteProduct } from '../../store/products';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class DeleteProduct extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => this.props.deleteProduct(this.props.id)}>
          X
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (product) => dispatch(deleteProduct(product)),
});

export default connect(null, mapDispatchToProps)(DeleteProduct);
