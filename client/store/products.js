import axios from 'axios'

// Action Types
const SET_PRODUCTS = 'SET_PRODUCTS'

// Action Creators
export const _setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products
  }
};

// Thunk Creators
export const fetchProducts = () => {
  return async (dispatch) => {
    const { data: products } = await axios.get('/api/products')
    dispatch(_setProducts(products))
  }
};

// Reducer
export default function productsReducer(state=[], action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products
  }
  return state
}
