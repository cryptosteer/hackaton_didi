import { html, css } from 'lit-element';
import { PAGE_INTRO_2, PAGE_INTRO_4 } from '../config/page';
import { PageViewElement } from './page-view-element';

class ViewIntro3 extends PageViewElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v17_4656 {
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
      .v18_6719 {
        width: 316px;
        height: 9px;
        background: url('src/assets/img/v18_6719.png');
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
      .v14_4009 {
        width: 327px;
        height: 168px;
        background: url('src/assets/img/v14_4009.png');
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
      .v14_4010 {
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
      .v14_4011 {
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
      .v44_4595 {
        width: 182px;
        height: 364px;
        background: url('src/assets/img/v44_4595.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 320px;
        left: 89px;
        overflow: hidden;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.pagePrev = PAGE_INTRO_2;
    this.pageNext = PAGE_INTRO_4;
  }

  render() {
    return html`
      <div
        class="v17_4656"
        @touchstart=${this.touchStart}
        @touchend=${this.touchEnd}
      >
        <div>
          <img src="src/assets/img/rectangulo-inactivo.svg" />
          <img src="src/assets/img/rectangulo-inactivo.svg" />
          <img src="src/assets/img/rectangulo-activo.svg" />
          <img src="src/assets/img/rectangulo-inactivo.svg" />
        </div>
        <div class="name"></div>
        <div class="v18_6719">
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
        </div>
        <div class="v14_4009">
          <span class="v14_4010">Conecta</span
          ><span class="v14_4011"
            >Envía un mensaje para contactar al Mentor del proyecto que te
            gustó. Empieza una conversación, y define si es el mentor y proyecto
            adecuado para ti.</span
          >
        </div>
        <div class="v44_4595"></div>
      </div>
    `;
  }
}

customElements.define('view-intro-3', ViewIntro3);
