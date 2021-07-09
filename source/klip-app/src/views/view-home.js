import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { PageViewElement } from './page-view-element';
import { metaCoin } from '../redux/reducers/metaCoin-reducer.js';
import { web3SuccessSelector } from '../redux/selectors/app-selectors';
import { metaCoinBalanceSelector } from '../redux/selectors/metaCoin-selectors';
import { refreshBalance, sendCoin } from '../redux/actions/metaCoin-actions';

import '@material/mwc-button/mwc-button';

CrcaStaticStore.store.addReducers({
  metaCoin,
});

class ViewHome extends connect(CrcaStaticStore.store)(PageViewElement) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {
      _web3Success: { type: Boolean },
      balance: { type: Number },
    };
  }

  constructor() {
    super();
  }

  stateChanged(state) {
    this._web3Success = web3SuccessSelector(state);
    this.balance = metaCoinBalanceSelector(state);
  }

  render() {
    return html` <h1>Proyectos</h1>

      <h1>MetaCoin — Example Truffle Dapp</h1>
      <p>
        You have
        <strong class="balance"
          >${!this.balance ? 'loading...' : this.balance}</strong
        >
        META
      </p>

      <h1>Send MetaCoin</h1>

      <label for="amount">Amount:</label>
      <input type="text" id="amount" placeholder="e.g. 95" />
      <br />
      <label for="receiver">To address:</label>
      <input
        type="text"
        id="receiver"
        placeholder="e.g. 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae"
      />

      <mwc-button @click=${this._sendCoin}>Send MetaCoin</mwc-button>

      <p id="status"></p>
      <p>
        <strong>Hint:</strong> open the browser developer console to view any
        errors and warnings.
      </p>

      <p><b>Balance: ${this.balance}</b></p>`;
  }

  _sendCoin() {
    const amount = parseInt(this.shadowRoot.getElementById('amount').value);
    const receiver = this.shadowRoot.getElementById('receiver').value;
    console.log(amount, receiver);
    if (this._web3Success) {
      CrcaStaticStore.store.dispatch(sendCoin(receiver, amount));
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('_web3Success') && this._web3Success) {
      CrcaStaticStore.store.dispatch(refreshBalance());
    }
  }
}

customElements.define('view-home', ViewHome);
