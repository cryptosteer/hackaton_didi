import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { crcaUrlNavigate } from '@ascenso/crca-redux-url-parser/redux';
import { html, css } from 'lit-element';
import { PAGE_PROYECTO_SEARCH } from '../config/page';
import { PageViewElement } from './page-view-element';

import '@material/mwc-button/mwc-button';

class ViewRegistroConfirm extends PageViewElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v22_6741 {
        width: 375px;
        height: 812px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v22_6749 {
        width: 294px;
        height: 200px;
        background: url('src/assets/img/v22_6749.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 88px;
        left: 37px;
        overflow: hidden;
      }
      .v22_6750 {
        width: 294px;
        height: 200px;
        background: url('src/assets/img/v22_6750.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v22_6751 {
        width: 301px;
        color: url('src/assets/img/v22_6751.png');
        position: relative;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 32px;
        opacity: 1;
        text-align: center;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v80_5534 {
        width: 208px;
        height: 307px;
        background: url('src/assets/img/v80_5534.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 318px;
        left: 84px;
        overflow: hidden;
      }
      section {
        position: absolute;
        width: 208px;
        top: 660px;
        left: 84px;
      }

      mwc-button {
        width: 100%;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="v22_6741">
        <div class="v22_6749">
          <div class="v22_6750">
            <span class="v22_6751"
              >Ahora que sos parte de klip, encuentra el proyecto que mejor se
              adapte a tí</span
            >
          </div>
        </div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="v80_5534"></div>
        <section>
          <mwc-button
            raised
            @click=${() =>
              CrcaStaticStore.store.dispatch(
                crcaUrlNavigate(PAGE_PROYECTO_SEARCH)
              )}
            >Vamos</mwc-button
          >
        </section>
      </div>
    `;
  }
}

customElements.define('view-registro-confirm', ViewRegistroConfirm);
