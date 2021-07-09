import {
  crcaUrlLastPageSelector,
  crcaUrlNavigate,
  crcaUrlUpdatePage,
} from '@ascenso/crca-redux-url-parser/redux';
import {
  CRCA_URL_PAGE_404,
  CRCA_URL_PAGE_HOME,
  CRCA_URL_PAGE_LOGIN,
} from '@ascenso/crca-redux-url-parser/utils';
import { generateProcessTag } from '@ascenso/crca-redux-loading/utils';
import {
  startPageLoading,
  stopPageLoading,
} from '@ascenso/crca-redux-loading/redux';

import { userSelector } from '../selectors/user-selectors.js';
import { TAG_LOAD_PAGE } from '../../config/processTag.js';
import { PAGE_DIRECTUS } from '../../config/page.js';
import { loggedInSelector } from '../selectors/app-selectors.js';

export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const UPDATE_ACCOUNT_ACTIVA = 'UPDATE_ACCOUNT_ACTIVA';
export const WEB3_SUCCESS = 'WEB3_SUCCESS';

export const setAccounts = accounts => ({
  type: SET_ACCOUNTS,
  accounts,
});

export const updateAccountActiva = accountActiva => ({
  type: UPDATE_ACCOUNT_ACTIVA,
  accountActiva,
});

export const web3Success = () => ({
  type: WEB3_SUCCESS,
});

export const updateAccounts = accounts => (dispatch, getState) => {
  const state = getState();
  const loggedIn = loggedInSelector(state);

  dispatch(setAccounts(accounts));
  const account = accounts.length ? accounts[0] : null;
  dispatch(updateAccountActiva(account));
  if (account !== null && !loggedIn) {
    const lastPage = crcaUrlLastPageSelector(state);
    const pg = lastPage !== null ? lastPage : FIRST_PAGE;
    dispatch(crcaUrlNavigate(pg));
  }
};

export const loadAccounts = () => dispatch => {
  const { web3 } = window.App;

  web3.eth
    .getAccounts()
    .then(accounts => {
      dispatch(updateAccounts(accounts));
    })
    .catch(err => console.warn(err));
};

export const loadPage = page => (dispatch, getState) => {
  const tag = generateProcessTag(TAG_LOAD_PAGE, page);
  dispatch(startPageLoading(tag));
  const state = getState();
  const loggedIn = loggedInSelector(state);
  const user = userSelector(state);
  /* const infoError = {
    loggedIn,
    subdominio,
    user
  }; */
  switch (page) {
    case CRCA_URL_PAGE_LOGIN:
      import('../../views/view-login.js')
        .then(() => dispatch(stopPageLoading(tag)))
        .catch(e => {
          dispatch(loadPage(CRCA_URL_PAGE_404));
          dispatch(stopPageLoading(tag));
          console.log(e);
          // processError(tag, e, infoError, dispatch, CRCA_LOADING_TYPE_PAGE);
        });
      break;
    case CRCA_URL_PAGE_HOME:
      if (loggedIn) {
        import('../../views/view-home.js')
          .then(() => dispatch(stopPageLoading(tag)))
          .catch(e => {
            dispatch(loadPage(CRCA_URL_PAGE_404));
            dispatch(stopPageLoading(tag));
            console.log(e);
            // processError(tag, e, infoError, dispatch, CRCA_LOADING_TYPE_PAGE);
          });
      } else {
        dispatch(stopPageLoading(tag));
        dispatch(loadPage(CRCA_URL_PAGE_LOGIN));
        return;
      }
      break;
    case PAGE_DIRECTUS:
      if (loggedIn) {
        import('../../views/view-directus.js')
          .then(() => dispatch(stopPageLoading(tag)))
          .catch(e => {
            dispatch(loadPage(CRCA_URL_PAGE_404));
            dispatch(stopPageLoading(tag));
            console.log(e);
            // processError(tag, e, infoError, dispatch, CRCA_LOADING_TYPE_PAGE);
          });
      } else {
        dispatch(stopPageLoading(tag));
        dispatch(loadPage(CRCA_URL_PAGE_LOGIN));
        return;
      }
      break;
    // eslint-disable-next-line no-fallthrough
    default:
      import('../../views/view-404.js')
        .then(() => dispatch(stopPageLoading(tag)))
        .catch(e => {
          console.error(e);
          dispatch(stopPageLoading(tag));
        });
      // eslint-disable-next-line no-param-reassign
      page = CRCA_URL_PAGE_404;
      break;
  }
  dispatch(crcaUrlUpdatePage(page));
};
