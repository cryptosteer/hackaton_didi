/* eslint-disable class-methods-use-this */
import { html, css } from 'lit-element';
import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { crcaLoadingElementExistProccessSelector } from '@ascenso/crca-redux-loading/redux';

import { PageViewElement } from './page-view-element.js';

import { logout, userConnect } from '../redux/actions/user-actions.js';
import { loggedInSelector } from '../redux/selectors/app-selectors.js';

import '@material/mwc-textfield';
import '@material/mwc-button';

import { TAG_USER_LOGIN } from '../config/processTag.js';

import '@ascenso/crca-redux-loading/crca-redux-loading';
import { web3SuccessSelector } from '../redux/selectors/app-selectors.js';
import { connect } from 'pwa-helpers/connect-mixin';

class ViewConnectMetamask extends connect(CrcaStaticStore.store)(
  PageViewElement
) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: flex;
          padding: 10px 0;
          background-color: rgb(19, 114, 184);
          width: 100%;
        }
        h1 {
          text-align: center;
        }
        header {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50vw;
        }
        main {
          display: flex;
          flex-direction: column;
        }
        mwc-textfield {
          margin-bottom: 20px;
        }

        .xl {
          font-size: 2.4em;
          font-weight: 700;
        }
        .m-top {
          margin-top: 30px;
        }
        .container {
          display: column;
          border-radius: 25px;
          background-color: #fff;
          max-width: min-content;
          margin: 30px auto;
          width: 80vw;
          margin: 40px auto;
          padding: 40px;
        }
        img {
          width: 150px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      _loggedIn: { type: Boolean },
      _loading: { type: Boolean },
      _web3Success: { type: Boolean },
    };
  }

  stateChanged(state) {
    this._loggedIn = loggedInSelector(state);
    this._loading = crcaLoadingElementExistProccessSelector(
      state,
      TAG_USER_LOGIN
    );
    this._web3Success = web3SuccessSelector(state);
  }

  render() {
    console.log('RENDER');
    return html`
      <div class="container">
        <header>
          <img
            id="logo-klip"
            class="logo"
            src="assets/img/klip_logo.png"
            alt="Logo Klip"
          />
        </header>
        ${this._loggedIn ? this.logoutTemplate : this.loginTemplate}
      </div>
    `;
  }

  get loginTemplate() {
    return html`
      <main>
        <div>
          <h1 class="xl">Bienvenido a Klip</h1>
          <h3>
            Aplicación descentralizada para el apoyo de la inversión social
          </h3>
        </div>
        <div>
          <p>
            Para acceder a la información de los proyectos y tu cuenta conecta
            tu billetera MetaMask.
          </p>
          <mwc-button
            raised
            class="m-top"
            @click="${this._connect}"
            ?disabled=${!this._web3Success}
          >
            Conectar a Metamask
          </mwc-button>
        </div>
      </main>
    `;
  }

  get logoutTemplate() {
    return html`
      <div>
        <h2>Logout</h2>
      </div>
      <dile-button @click="${this.logout}">Cerrar sesión</dile-button>
    `;
  }

  _connect() {
    CrcaStaticStore.store.dispatch(userConnect(this.userData));
  }

  logout() {
    CrcaStaticStore.store.dispatch(logout());
  }
}

customElements.define('view-connect-metamask', ViewConnectMetamask);
