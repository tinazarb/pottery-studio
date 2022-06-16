import axios from 'axios'

// Action Types
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';

// Action Creators
export const _setSingleProduct = (product) => {
  return {
    type: SET_SINGLE_PRODUCT,
    product
  }
};

// Thunk Creators
export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    const { data: product } = await axios.get(`/api/products/${id}`);
    dispatch(_setSingleProduct(product))
  }
};

export default function singleProductReducer(state={}, action) {

  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product;
  }

  return state;
}