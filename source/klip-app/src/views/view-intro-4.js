import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { crcaUrlNavigate } from '@ascenso/crca-redux-url-parser/redux';
import { html, css } from 'lit-element';
import { PAGE_INTRO_3, PAGE_REGISTRO } from '../config/page';
import { PageViewElement } from './page-view-element';

import '@material/mwc-button/mwc-button';
class ViewIntro4 extends PageViewElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v17_4690 {
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
      .v18_6718 {
        width: 316px;
        height: 9px;
        background: url('assets/img/v18_6718.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 20px;
        opacity: 1;
        position: absolute;
        top: 74px;
        left: 25px;
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
      .v14_4043 {
        width: 327px;
        height: 144px;
        background: url('assets/img/v14_4043.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 24px;
        opacity: 1;
        position: absolute;
        top: 132px;
        left: 24px;
        overflow: hidden;
      }
      .v14_4044 {
        width: 327px;
        color: rgba(29, 34, 45, 1);
        position: relative;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 40px;
        opacity: 1;
        text-align: left;
      }
      .v14_4045 {
        width: 327px;
        color: rgba(93, 99, 111, 1);
        position: absolute;
        top: 72px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .name {
        color: #fff;
      }
      .v45_4598 {
        width: 191px;
        height: 360px;
        background: url('assets/img/v45_4598.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 306px;
        left: 103px;
        overflow: hidden;
      }

      mwc-button {
        position: absolute;
        top: 680px;
        left: 103px;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.pagePrev = PAGE_INTRO_3;
  }

  render() {
    return html`
      <div
        class="v17_4690"
        @touchstart=${this.touchStart}
        @touchend=${this.touchEnd}
      >
        <div>
          <img src="assets/img/rectangulo-inactivo.svg" />
          <img src="assets/img/rectangulo-inactivo.svg" />
          <img src="assets/img/rectangulo-inactivo.svg" />
          <img src="assets/img/rectangulo-activo.svg" />
        </div>
        <div class="name"></div>
        <div class="v18_6718">
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
        </div>
        <div class="v14_4043">
          <span class="v14_4044">Crece</span
          ><span class="v14_4045"
            >Ahora que encontraste un proyecto, pregunta, comparte y aprende.
            Estás cada vez más cerca de tu siguiente éxito.</span
          >
        </div>
        <div class="name"></div>
        <div class="v45_4598"></div>
        <mwc-button raised @click=${this.empezar}>Empezar</mwc-button>
      </div>
    `;
  }

  empezar() {
    CrcaStaticStore.store.dispatch(crcaUrlNavigate(PAGE_REGISTRO));
  }
}

customElements.define('view-intro-4', ViewIntro4);
