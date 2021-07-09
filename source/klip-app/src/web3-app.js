import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import * as metaCoinArtifact from '../../build/contracts/MetaCoin.json';
import { web3Success } from './redux/actions/app-actions';

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function () {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = metaCoinArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        metaCoinArtifact.abi,
        deployedNetwork.address
      );

      // this.refreshBalance();
    } catch (error) {
      console.error('Could not connect to contract or chain.');
    }
  },

  setStatus: function (message) {
    const status = document.getElementById('status');
    status.innerHTML = message;
  },
};

window.App = App;

window.addEventListener('load', function () {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
  } else {
    console.warn(
      'No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live'
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider('http://127.0.0.1:8545')
    );
  }

  if (App.web3 !== undefined) {
    CrcaStaticStore.store.dispatch(web3Success());
  }

  App.start();
});
