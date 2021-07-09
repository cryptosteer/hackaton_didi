import { UPDATE_USER, UPDATE_AUTH } from '../actions/user-actions.js';

const initialState = {
  auth: {
    loggedIn: false,
    token: '',
    api: '',
    email: '',
  },
  user: {},
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        ...state,
        auth: action.data,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
