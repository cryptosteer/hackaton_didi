import { html, css } from 'lit-element';
import { PAGE_INTRO_2 } from '../config/page';
import { PageViewElement } from './page-view-element';

class ViewIntro1 extends PageViewElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v12_6316 {
        width: 375px;
        height: 812px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v12_6317 {
        width: 327px;
        height: 144px;
        background: url('assets/img/v12_6317.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 24px;
        opacity: 1;
        position: absolute;
        top: 133px;
        left: 24px;
        overflow: hidden;
      }
      .v12_6318 {
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
      .v12_6319 {
        width: 327px;
        color: url('assets/img/v12_6319.png');
        position: absolute;
        top: 72px;
        left: 0px;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .name {
        color: #fff;
      }
      .v18_6721 {
        width: 316px;
        height: 9px;
        background: url('assets/img/v18_6721.png');
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
      .v45_4597 {
        width: 194px;
        height: 368px;
        background: url('assets/img/v45_4597.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 302px;
        left: 76px;
        overflow: hidden;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.pageNext = PAGE_INTRO_2;
  }

  render() {
    return html`
      <div
        class="v12_6316"
        @touchstart=${this.touchStart}
        @touchend=${this.touchEnd}
      >
        <div>
          <img src="assets/img/rectangulo-activo.svg" />
          <img src="assets/img/rectangulo-inactivo.svg" />
          <img src="assets/img/rectangulo-inactivo.svg" />
          <img src="assets/img/rectangulo-inactivo.svg" />
        </div>
        <div class="v12_6317">
          <span class="v12_6318">Involúcrate</span>
          <span class="v12_6319"
            >Crea un perfil en klip a partir de tu cuenta en ai-di y sé parte de
            una comunidad de Emprendedores.</span
          >
        </div>
        <div class="name"></div>
        <div class="v18_6721">
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
        </div>
        <div class="v45_4597"></div>
      </div>
    `;
  }
}

customElements.define('view-intro-1', ViewIntro1);
