import { LitElement, html, css } from 'lit-element';

import { connect } from 'pwa-helpers/connect-mixin';
import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import {
  crcaUrlPageSelector,
  crcaUrlSetHomepage,
  crcaUrlSetManualUpdate,
} from '@ascenso/crca-redux-url-parser/redux';
import {
  CRCA_URL_PAGE_404,
  CRCA_URL_PAGE_LOGIN,
  CrcaUrlLoader,
  CRCA_URL_PAGE_HOME,
} from '@ascenso/crca-redux-url-parser/utils';

import { app } from './redux/reducers/app-reducer.js';
import {
  loadAccounts,
  loadPage,
  updateAccounts,
} from './redux/actions/app-actions.js';
import { user } from './redux/reducers/user-reducer.js';
import { PAGE_DIRECTUS } from './config/page';
import {
  loggedInSelector,
  web3SuccessSelector,
} from './redux/selectors/app-selectors.js';

import '@dile/dile-pages/dile-pages';
import '@ascenso/crca-redux-url-parser/crca-redux-url-parser';
import '@material/mwc-drawer/mwc-drawer';
import '@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed';
import '@material/mwc-list/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-icon/mwc-icon';
import '@material/mwc-icon-button/mwc-icon-button';
import '@material/mwc-menu/mwc-menu';
import { FIRST_PAGE } from './config/config.js';

CrcaUrlLoader.page = loadPage;
CrcaStaticStore.store.addReducers({
  app,
  user,
});

export class KlipApp extends connect(CrcaStaticStore.store)(LitElement) {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: calc(8px + 2vmin);
        margin: 0 auto;
        text-align: center;
      }
      dile-pages {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-grow: 1;
      }
      mwc-drawer {
        flex-grow: 1;
      }
      #appContent {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 100%;
      }
      .logo {
        width: 80px;
        border-radius: 40px;
        margin-top: 30px;
      }
    `;
  }

  static get properties() {
    return {
      _page: { type: String },
      _loggedIn: { type: Boolean },
      _user: { type: Object },
      _web3Success: { type: Boolean },
    };
  }

  constructor() {
    super();
    CrcaStaticStore.store.dispatch(crcaUrlSetManualUpdate({ page: true }));
    CrcaStaticStore.store.dispatch(crcaUrlSetHomepage(FIRST_PAGE));
  }

  stateChanged(state) {
    this._page = crcaUrlPageSelector(state);
    this._loggedIn = loggedInSelector(state);
    this._web3Success = web3SuccessSelector(state);
    /* this._user = userSelector(state); */
  }

  firstUpdated() {
    window.ethereum.on('accountsChanged', this._accountsChanged);
  }

  render() {
    return html`
      <crca-redux-url-parser handleOffline showOffline></crca-redux-url-parser>
      <mwc-drawer hasHeader type="modal">
        <span slot="title"
          ><img
            id="logo-klip"
            class="logo"
            src="assets/img/klip_logo.png"
            alt="Logo Klip"
        /></span>
        <span slot="subtitle"></span>
        <nav>${this._loggedIn ? this.drawerContentTemplate : ''}</nav>
        <div id="appContent" slot="appContent">
          ${this._loggedIn ? this.headerTemplate : ''}
          <dile-pages selected="${this._page}" attrForSelected="name">
            <view-login
              name="${CRCA_URL_PAGE_LOGIN}"
              ?active=${this._page === CRCA_URL_PAGE_LOGIN}
            ></view-login>
            <view-home
              name="${CRCA_URL_PAGE_HOME}"
              ?active=${this._page === CRCA_URL_PAGE_HOME}
            ></view-home>
            <view-directus
              name="${PAGE_DIRECTUS}"
              ?active=${this._page === PAGE_DIRECTUS}
            ></view-directus>
            <view-404
              name="${CRCA_URL_PAGE_404}"
              ?active=${this._page === CRCA_URL_PAGE_404}
            ></view-404>
          </dile-pages>
        </div>
      </mwc-drawer>
    `;
  }

  get drawerContentTemplate() {
    return html`
      <mwc-list activatable>
        <mwc-list-item
          ?activated=${this.page === CRCA_URL_PAGE_HOME}
          graphic="icon"
        >
          <a href="${CRCA_URL_PAGE_HOME}" @click=${this.toggleDrawer}
            >Proyectos</a
          >
          <mwc-icon slot="graphic">view_list</mwc-icon>
        </mwc-list-item>
        <mwc-list-item ?activated=${this.page === PAGE_DIRECTUS} graphic="icon">
          <a href="${PAGE_DIRECTUS}" @click=${this.toggleDrawer}
            >Administración</a
          >
          <mwc-icon slot="graphic">admin_panel_settings</mwc-icon>
        </mwc-list-item>
      </mwc-list>
    `;
  }

  get headerTemplate() {
    return html` <mwc-top-app-bar-fixed>
        <mwc-icon-button
          icon="menu"
          slot="navigationIcon"
          @click="${this.toggleDrawer}"
        ></mwc-icon-button>
        <div slot="title">Klip</div>
        <mwc-icon-button
          id="button"
          slot="actionItems"
          icon="account_circle"
          @click=${this.showUserMenu}
        >
        </mwc-icon-button>
      </mwc-top-app-bar-fixed>
      ${this.menuUserTemplate}`;
  }

  get menuUserTemplate() {
    return html`
      <mwc-menu corner="BOTTOM_START" id="menu">
        <mwc-list-item twoline graphic="avatar" noninteractive>
          <span>NOMBRE USUARIO</span>
          <span slot="secondary">EMAIL</span>
          <mwc-icon slot="graphic" class="inverted">tag_faces</mwc-icon>
        </mwc-list-item>
        <li divider role="separator"></li>
        <!--<mwc-list-item graphic="icon">
        <slot>FAQ</slot>
        <mwc-icon slot="graphic">help_outline</mwc-icon>
      </mwc-list-item>-->
        <mwc-list-item graphic="icon" @click=${this.logout}>
          <slot>Cerrar Sesión</slot>
          <mwc-icon slot="graphic">exit_to_app</mwc-icon>
        </mwc-list-item>
      </mwc-menu>
    `;
  }

  _accountsChanged(accounts) {
    CrcaStaticStore.store.dispatch(updateAccounts(accounts));
  }

  // eslint-disable-next-line class-methods-use-this
  logout() {
    CrcaStaticStore.store.dispatch(logout());
  }

  showUserMenu() {
    this.mnu.show();
  }

  toggleDrawer() {
    const drawer = this.shadowRoot.querySelector('mwc-drawer');
    drawer.open = !drawer.open;
  }

  updated(changedProperties) {
    if (changedProperties.has('_web3Success') && this._web3Success) {
      CrcaStaticStore.store.dispatch(loadAccounts());
    }

    if (this.loggedIn) {
      if (changedProperties.has('loggedIn') || changedProperties.has('user')) {
        this.btn = this.shadowRoot.getElementById('button');
        this.mnu = this.shadowRoot.getElementById('menu');
        this.mnu.anchor = this.btn;
      }
    }
  }
}
