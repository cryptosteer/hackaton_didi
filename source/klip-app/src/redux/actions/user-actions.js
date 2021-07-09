import { generateProcessTag } from '@ascenso/crca-redux-loading/utils';

import {
  startInternalLoading,
  stopInternalLoading,
  startElementLoading,
  stopElementLoading,
} from '@ascenso/crca-redux-loading/redux';
import {
  crcaUrlLastPageSelector,
  crcaUrlNavigate,
  crcaUrlPageSelector,
} from '@ascenso/crca-redux-url-parser/redux';
import { negativeFeedback } from '@ascenso/crca-redux-feedback/redux';

import { emailSelector, authSelector } from '../selectors/user-selectors.js';
import {
  TAG_LOAD_USER,
  TAG_USER_LOGIN,
  TAG_USER_VERIFY,
} from '../../config/processTag.js';
import { CRCA_URL_PAGE_LOGIN } from '@ascenso/crca-redux-url-parser/utils';
import { API, FIRST_PAGE } from '../../config/config.js';
import { web3SuccessSelector } from '../selectors/app-selectors.js';
import { updateAccounts } from './app-actions.js';

export const UPDATE_AUTH = 'UPDATE_AUTH';
export const UPDATE_USER = 'UPDATE_USER';

export const updateAuth = authData => {
  // eslint-disable-next-line no-undef
  axios.defaults.headers.common.Authorization = `bearer ${authData.token}`;
  localStorage.auth = JSON.stringify(authData);
  // console.log(authData);
  return {
    type: UPDATE_AUTH,
    data: authData,
  };
};

export const updateUser = user => ({
  type: UPDATE_USER,
  user,
});

export const logout = () => dispatch => {
  dispatch(
    updateAuth({
      loggedIn: false,
      token: '',
      api: '',
    })
  );
  dispatch(updateUser({}));
  dispatch(crcaUrlNavigate(CRCA_URL_PAGE_LOGIN));
};

const _loadUser = userData => dispatch => {
  // console.log(userData);
  dispatch(updateUser(userData));
};

export const userConnect = () => (dispatch, getState) => {
  const state = getState();
  const web3Success = web3SuccessSelector(state);
  if (web3Success) {
    window.ethereum
      .send('eth_requestAccounts')
      .then(e => {
        dispatch(updateAccounts(e.result));
      })
      .catch(err => console.warn(err));
  }
};

/* export const loadUser = email => (dispatch, getState) => {
  dispatch(startInternalLoading(TAG_LOAD_USER));

  const q = getQueryUserByProp('email', email.toLowerCase());
  q.onSnapshot(
    querySnapshot => {
      // console.log(querySnapshot);
      if (querySnapshot.size === 1) {
        querySnapshot.forEach(user => {
          dispatch(_loadUser(viewUser(user.data())));
        });
      } else if (querySnapshot.size > 1) {
        const subdominioActual = crcaUrlSubdominioSelector(getState());
        querySnapshot.forEach(user => {
          const subdominio = obtenerSubdominio(user.data().id);
          if (subdominioActual === subdominio) {
            dispatch(_loadUser(viewUser(user.data())));
          }
        });
      } else {
        dispatch(logout());
        dispatch(
          negativeFeedback('No se pudo cargar la información del usuario')
        );
      }
      dispatch(stopInternalLoading(TAG_LOAD_USER));
    },
    () => {
      dispatch(negativeFeedback('Error al cargar la información del usuario'));
      dispatch(stopInternalLoading(TAG_LOAD_USER));
      // console.log("Load User:",e);
    }
  );
}; */

export const userLogin = formData => (dispatch, getState) => {
  const state = getState();

  const userData = {
    ...formData,
    email: formData.email.trim().toLowerCase(),
  };
  dispatch(startElementLoading(TAG_USER_LOGIN));
  // eslint-disable-next-line no-undef
  axios
    .post(`${API}/auth/authenticate`, userData)
    .then(response => {
      // console.log(userData);
      // console.log(response);
      dispatch(
        updateAuth({
          loggedIn: true,
          email: userData.email,
          token: response.data.data.token,
          api: restuCadenaUrlApi(cadena),
        })
      );

      // dispatch(loadUser(userData.email));
      const lastPage = crcaUrlLastPageSelector(state);
      const pg = lastPage !== null ? lastPage : FIRST_PAGE;
      dispatch(crcaUrlNavigate(pg));
    })
    .catch(error => {
      // console.log('ERROR USERLOGIN:', error);
      const dat = (error.response && error.response.data) || {
        error: { code: 500, message: 'Servidor no responde.' },
      };
      dispatch(
        negativeFeedback(`Error (${dat.error.code}): ${dat.error.message}`)
      );
    })
    .then(() => dispatch(stopElementLoading(TAG_USER_LOGIN)));
};

export const userVerify = authData => (dispatch, getState) => {
  const state = getState();

  // console.log(FIRST_PAGE);
  // console.log('UserVerify Entrada',authData);

  if (
    authData === undefined ||
    authData.api === undefined ||
    authData.token === undefined
  ) {
    // eslint-disable-next-line no-param-reassign
    authData = authSelector(state);
  }
  // console.log('UserVerify',authData);

  if (authData.api !== '' && authData.token !== '') {
    const tag = generateProcessTag(TAG_USER_VERIFY, [
      authData.api,
      authData.token,
    ]);
    dispatch(startInternalLoading(tag));
    // eslint-disable-next-line no-undef
    axios
      .post(`${authData.api}/auth/refresh`, { token: authData.token })
      .then(response => {
        dispatch(updateAuth({ ...authData, token: response.data.data.token }));
        if (emailSelector(state) === '' && authData.email !== '') {
          // dispatch(loadUser(authData.email));
          const page = crcaUrlPageSelector(getState());
          if (page === 'login') {
            const lastPage = crcaUrlLastPageSelector(state);
            const pg = lastPage !== null ? lastPage : FIRST_PAGE;
            dispatch(crcaUrlNavigate(pg));
          }
        }
      })
      .catch(() => {
        // console.log('err', err);
        dispatch(logout());
      })
      .then(() => dispatch(stopInternalLoading(tag)));
  }
};
