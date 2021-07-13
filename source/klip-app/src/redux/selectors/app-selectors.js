import { createSelector } from 'reselect';

export const appStateSelector = state => (state && state.app) || {};

export const accountActivaSelector = createSelector(
  appStateSelector,
  app => app.accountActiva || null
);

export const loggedInSelector = createSelector(
  accountActivaSelector,
  accountActiva => accountActiva !== null
);

export const web3SuccessSelector = createSelector(
  appStateSelector,
  app => app.web3Success || false
);
