import { createSelector } from 'reselect';

import { decodeField } from '@ascenso/crca-utils';
import { crcaUrlSubdominioSelector } from '@ascenso/crca-redux-url-parser/redux';

export const userStateSelector = state => (state && state.user) || {};

export const authSelector = createSelector(
  userStateSelector,
  u => u.auth || {}
);

export const apiSelector = createSelector(authSelector, auth => auth.api || '');

export const emailSelector = createSelector(
  authSelector,
  auth => auth.email || ''
);

export const tokenSelector = createSelector(
  authSelector,
  auth => auth.token || ''
);

export const userSelector = createSelector(
  userStateSelector,
  u => u.user || {}
);

export const userIdSelector = createSelector(
  userSelector,
  user => user.id || null
);
