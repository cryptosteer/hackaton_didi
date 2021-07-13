import { html, css } from 'lit-element';
import { PAGE_INTRO_1, PAGE_INTRO_3 } from '../config/page';
import { PageViewElement } from './page-view-element';

class ViewIntro2 extends PageViewElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v17_4622 {
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
      .v18_6720 {
        width: 316px;
        height: 9px;
        background: url('assets/img/v18_6720.png');
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
      .v14_3975 {
        width: 327px;
        height: 140px;
        background: url('assets/img/v14_3975.png');
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
      .v14_3976 {
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
      .v14_3977 {
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
      .v44_4596 {
        width: 464px;
        height: 223px;
        background: url('assets/img/v44_4596.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 380px;
        left: 49px;
        overflow: hidden;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.pagePrev = PAGE_INTRO_1;
    this.pageNext = PAGE_INTRO_3;
  }

  render() {
    return html`
      <div
        class="v17_4622"
        @touchstart=${this.touchStart}
        @touchend=${this.touchEnd}
      >
        <div>
          <img src="assets/img/rectangulo-inactivo.svg" />
          <img src="assets/img/rectangulo-activo.svg" />
          <img src="assets/img/rectangulo-inactivo.svg" />
          <img src="assets/img/rectangulo-inactivo.svg" />
        </div>
        <div class="name"></div>
        <div class="v18_6720">
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
        </div>
        <div class="v14_3975">
          <span class="v14_3976">Encuentra</span
          ><span class="v14_3977"
            >Busca el proyecto que más te guste y que coincida con tus
            necesidades y habilidades.</span
          >
        </div>
        <div class="v44_4596"></div>
      </div>
    `;
  }
}

customElements.define('view-intro-2', ViewIntro2);
