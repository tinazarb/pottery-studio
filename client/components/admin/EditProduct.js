import React, { Component } from 'react';
import { updateProduct } from '../../store/singleProduct';
import { connect } from 'react-redux';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.productKey.title || '',
      price: this.props.productKey.price || '',
      description: this.props.productKey.description || '',
      type: this.props.productKey.type || '',
      quantity: this.props.productKey.quantity || '',
      colour: this.props.productKey.colour || '',
      imgUrl: this.props.productKey.imgUrl || '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        title: this.props.product.title || '',
        price: this.props.product.price || '',
        description: this.props.product.description || '',
        type: this.props.product.type || '',
        quantity: this.props.product.quantity || '',
        colour: this.props.product.colour || '',
        imgUrl: this.props.product.imgUrl || '',
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProduct({ ...this.props.productKey, ...this.state });
  }

  render() {
    const { title, price, description, type, quantity, colour, imgUrl } =
      this.state;
    console.log('HITTING EDIT PRODUCT COMPONENT');
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              name="title"
              type="text"
              onChange={this.handleChange}
              value={title}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="0"
              onChange={this.handleChange}
              value={price}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              name="description"
              type="text"
              onChange={this.handleChange}
              value={description}
            />
          </div>
          <div>
            <label>Type</label>
            <input
              name="type"
              type="text"
              onChange={this.handleChange}
              value={type}
            />
          </div>
          <div>
            <label>Quantity</label>
            <input
              name="quantity"
              type="number"
              min="0"
              onChange={this.handleChange}
              value={quantity}
            />
          </div>
          <div>
            <label>Colour</label>
            <input
              name="colour"
              type="text"
              onChange={this.handleChange}
              value={colour}
            />
          </div>
          <div>
            <label>ImgURL</label>
            <input
              name="imgUrl"
              type="text"
              onChange={this.handleChange}
              value={imgUrl}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  //   console.log('DISPATCH PRODUCT', product);
  return {
    updateProduct: (product) => dispatch(updateProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
