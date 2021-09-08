import { csrfFetch } from "./csrf";


const GET_USER = "user/GET_USER";
const GET_INFO = "user/INFO";

export const getUser = (user) => ({
  type: GET_USER,
  user,
});
export const getInfo = (user) => ({
  type: GET_INFO,
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

export const userInfoThunk = (id) => async (dispatch) => {
const res = await csrfFetch(`/api/users/info/${id}`);
if (res.ok) {
  const user = await res.json();
  dispatch(getInfo(user));
  return user;
}
}

const initialState = {};

export const userReducer = (state = initialState, action) => {
//   let newState = {};
  switch (action.type) {
    case GET_USER:
      return { user: action.user };
    default:
      return state;
  }
};

export const userInfoReducer = (state = initialState, action) => {

  switch (action.type) {
    case GET_INFO:
      return { info: action.user };
    default:
      return state;
  }
}

// export default userReducer;
