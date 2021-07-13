import { createSelector } from 'reselect';

export const metaCoinStateSelector = state => (state && state.metaCoin) || {};

export const metaCoinBalanceSelector = createSelector(
  metaCoinStateSelector,
  coin => coin.balance || 0
);
