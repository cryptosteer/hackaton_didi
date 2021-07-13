import {
  SET_ACCOUNTS,
  UPDATE_ACCOUNT_ACTIVA,
  WEB3_SUCCESS,
} from '../actions/app-actions';

const initialState = {
  web3Success: false,
  accounts: [],
  accountActiva: null,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case WEB3_SUCCESS:
      return {
        ...state,
        web3Success: true,
      };
    case SET_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts,
      };
    case UPDATE_ACCOUNT_ACTIVA:
      return {
        ...state,
        accountActiva: action.accountActiva,
      };
    default:
      return state;
  }
};
