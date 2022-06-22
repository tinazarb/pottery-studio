import React, { Component } from 'react';
import { _setSingleProduct, fetchSingleProduct, updateProduct } from '../../store/singleProduct';
import { connect } from 'react-redux';
import ProductForm from './ProductForm'

class EditProduct extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: 0,
      description: '',
      type: '',
      quantity: 0,
      colour: '',
      imgUrl: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.loadSingleProduct(this.props.match.params.id)
    console.log('PRODUCT', this.props.product)
  }

  componentWillUnmount() {
    this.props.clearProduct();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        title: this.props.product.title || '',
        price: this.props.product.price || 0,
        description: this.props.product.description || '',
        type: this.props.product.type || '',
        quantity: this.props.product.quantity || 0,
        colour: this.props.product.colour || '',
        imgUrl: this.props.product.imgUrl || '',
      });
    }
    console.log('componentDidUpdate state', this.state)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProduct({ ...this.props.product, ...this.state });
  }

  render() {
    const { title, price, description, type, quantity, colour, imgUrl } = this.state;

    return (
      <ProductForm title={title} price={price} description={description} type={type} quantity={quantity} colour={colour} imgUrl={imgUrl} handleChange={this.handleChange} handleSubmit={this.handleSubmit} buttonName={'Update'}/>
    )
    }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    loadSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
    updateProduct: (product) => dispatch(updateProduct(product, history)),
    clearProduct: () => dispatch(_setSingleProduct({}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
