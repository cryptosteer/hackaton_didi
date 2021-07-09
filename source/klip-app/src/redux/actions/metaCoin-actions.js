import { accountActivaSelector } from '../selectors/app-selectors';

export const SET_BALANCE = 'SET_BALANCE';

export const setBalance = balance => ({
  type: SET_BALANCE,
  balance,
});

export const refreshBalance = () => (dispatch, getState) => {
  const state = getState();
  const account = accountActivaSelector(state);
  const { getBalance } = window.App.meta.methods;

  getBalance(account)
    .call()
    .then(balance => {
      console.log('BALANCE: ', balance, ' account:', account);
      dispatch(setBalance(balance));
    })
    .catch(e => console.log('ERROR BALANCE: ', e));
};

export const sendCoin = (receiver, amount) => (dispatch, getState) => {
  const state = getState();
  const account = accountActivaSelector(state);
  // this.setStatus('Initiating transaction... (please wait)');

  const { sendCoin } = window.App.meta.methods;
  sendCoin(receiver, amount)
    .send({ from: account })
    .then(e => {
      console.log('SEND COIN: ', e);
      dispatch(refreshBalance());
    })
    .catch(e => console.log('ERR SEND COIN: ', e));

  // this.setStatus('Transaction complete!');
  // this.refreshBalance();
};
