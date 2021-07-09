import { SET_BALANCE } from '../actions/metaCoin-actions';

const initialState = {
  balance: 0,
};

export const metaCoin = (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };
    default:
      return state;
  }
};
