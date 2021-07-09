import { html, css } from 'lit-element';
import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { connect } from 'pwa-helpers/connect-mixin';

import { PageViewElement } from './page-view-element';
import { web3SuccessSelector } from '../redux/selectors/app-selectors';

import '@material/mwc-button/mwc-button';

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
    };
  }

  constructor() {
    super();
  }

  stateChanged(state) {
    this._web3Success = web3SuccessSelector(state);
  }

  render() {
    return html` <h1>Proyectos</h1> `;
  }

  updated(changedProperties) {
    if (changedProperties.has('_web3Success') && this._web3Success) {
    }
  }
}

customElements.define('view-home', ViewHome);
