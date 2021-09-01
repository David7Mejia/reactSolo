import { csrfFetch } from "./csrf";

const GET_USER = "user/GET_USER";

export const getUser = (user) => ({
  type: GET_USER,
  user,
});

export const getUserThunk = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/user/${id}`);
  if (res.ok) {
    const user = await res.json();
    dispatch(getUser(user));
    return user;
  }
};

const initialState = {};

const userReducer = (state = initialState, action) => {
//   let newState = {};
  switch (action.type) {
    case GET_USER:
      return { user: action.user };
    default:
      return state;
  }
};

export default userReducer;
