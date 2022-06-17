import axios from 'axios';
import history from '../history';

// Action Types
const SET_PRODUCTS = 'SET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';

// Action Creators
export const _setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};

const createdProduct = (product) => ({
  type: CREATE_PRODUCT,
  product,
});

// Thunk Creators
export const fetchProducts = () => {
  return async (dispatch) => {
    const { data: products } = await axios.get('/api/products');
    dispatch(_setProducts(products));
  };
};

export const createProduct = (product, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('api/products', product);
      dispatch(createdProduct(data));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
};

// Reducer
export default function productsReducer(state = [], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    case CREATE_PRODUCT:
      return [...state, action.product];
  }
  return state;
}
