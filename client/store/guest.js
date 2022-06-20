import axios from 'axios';

const POST_USER = 'POST_USER';

export const postUser = (user) => {
  return {
    type: POST_USER,
    user,
  };
};

//is the assumption on the checkout page i want to pull from the cart table?
export const checkout = (guestCart, history) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/guest', guestCart);
    } catch (err) {
      console.log(err);
    }
  };
};
