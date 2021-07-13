import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-button/mwc-button';
import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { crcaUrlNavigate } from '@ascenso/crca-redux-url-parser/redux';
import { PAGE_REGISTRO_PROFILE } from '../config/page';

class ViewRegistro extends PageViewElement {
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
      .v7_3661 {
        width: 375px;
        height: 812px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .name {
        color: #fff;
      }
      .v7_3663 {
        width: 327px;
        height: 182px;
        background: url('src/assets/img/v7_3663.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 16px;
        opacity: 1;
        position: absolute;
        top: 285px;
        left: 24px;
        overflow: hidden;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v18_6724 {
        width: 292px;
        height: 80px;
        background: url('src/assets/img/v18_6724.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: absolute;
        top: 95px;
        left: 42px;
        overflow: hidden;
      }
      .v18_6726 {
        background: url('src/assets/img/v18_6726.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v18_6727 {
        width: 311px;
        color: rgba(29, 34, 45, 1);
        position: relative;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 32px;
        opacity: 1;
        text-align: left;
      }
      .v23_8398 {
        width: 327px;
        color: rgba(93, 99, 111, 1);
        position: absolute;
        top: 200px;
        left: 24px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: center;
      }
      section {
        position: absolute;
        top: 300px;
        left: 24px;
        width: 327px;
      }

      section div {
        margin: 20px 0;
      }

      mwc-textfield {
        width: 100%;
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
      <div class="v7_3661">
        <div class="name"></div>
        <div class="v7_3663">
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
        </div>
        <div class="name"></div>
        <div class="v18_6724">
          <div class="v18_6726">
            <span class="v18_6727">¡Vamos a conocernos!</span>
          </div>
        </div>
        <span class="v23_8398"
          >Esta información debe coincidir con tu usuario de ai-di
        </span>
        <section>
          <div>
            <mwc-textfield label="Nombre Completo"></mwc-textfield>
          </div>
          <div>
            <mwc-textfield label="Email" type="email"></mwc-textfield>
          </div>
          <div>
            <mwc-textfield label="Password" type="password"></mwc-textfield>
          </div>
          <div>
            <mwc-button raised @click=${this.guardar}>Ingresar</mwc-button>
          </div>
        </section>
      </div>
    `;
  }

  guardar() {
    CrcaStaticStore.store.dispatch(crcaUrlNavigate(PAGE_REGISTRO_PROFILE));
  }
}

customElements.define('view-registro', ViewRegistro);
