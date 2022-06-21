import React from 'react';
import { connect } from 'react-redux';
import { autoLogin } from '../../store/auth';
import { createProduct } from '../../store/products';

class CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      description: '',
      type: '',
      quantity: '',
      colour: '',
      imgUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createProduct(this.state);
    this.setState({
      title: '',
      price: '',
      description: '',
      type: '',
      quantity: '',
      colour: '',
      imgUrl: '',
    });
  }

  render() {
    const { title, price, description, type, quantity, colour, imgUrl } =
      this.state;

    return (
      <div className="product-form">
         {this.props.auth.isAdmin ? (
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
         ) : null }
      </div>
    );
  }
}

const mapState = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token) => dispatch(autoLogin(token)),
    createProduct: (formData) => dispatch(createProduct(formData)),
  };
};

export default connect(mapState, mapDispatchToProps)(CreateProduct);
