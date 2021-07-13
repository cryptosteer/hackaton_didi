import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewLogin extends PageViewElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v6_3167 {
        width: 375px;
        height: 812px;
        background: rgba(0, 126, 255, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v14_4093 {
        width: 258px;
        height: 161px;
        background: url('assets/img/v14_4093.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 266px;
        left: 71px;
        overflow: hidden;
      }
      .v7_3642 {
        width: 75px;
        height: 125px;
        background: linear-gradient(rgba(0, 245, 160, 1), rgba(0, 217, 245, 1));
        opacity: 1;
        position: absolute;
        top: 4px;
        left: 0px;
        border: 8px solid rgba(255, 255, 255, 1);
      }
      .v7_3643 {
        width: 29px;
        height: 129px;
        background: linear-gradient(rgba(0, 245, 160, 1), rgba(0, 217, 245, 1));
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 9px;
        border: 8px solid rgba(255, 255, 255, 1);
      }
      .v7_3644 {
        width: 18px;
        height: 80px;
        background: linear-gradient(rgba(0, 245, 160, 1), rgba(0, 217, 245, 1));
        opacity: 1;
        position: absolute;
        top: 47px;
        left: 34px;
        border: 8px solid rgba(255, 255, 255, 1);
      }
      .v7_3645 {
        width: 5px;
        height: 7px;
        background: linear-gradient(rgba(0, 245, 160, 1), rgba(0, 217, 245, 1));
        opacity: 1;
        position: absolute;
        top: 16px;
        left: 46px;
        border: 8px solid rgba(255, 255, 255, 1);
      }
      .v7_3646 {
        width: 81px;
        height: 112px;
        background: linear-gradient(rgba(0, 245, 160, 1), rgba(0, 217, 245, 1));
        opacity: 1;
        position: absolute;
        top: 49px;
        left: 77px;
        border: 8px solid rgba(255, 255, 255, 1);
      }
      .v14_4095 {
        width: 168px;
        height: 154px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        position: absolute;
        top: 52px;
        left: 92px;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
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
      <div class="v6_3167">
        <div class="v14_4093">
          <img src="assets/img/klip_logo.svg" />
          <div class="v7_3642"></div>
          <div class="v7_3643"></div>
          <div class="v7_3644"></div>
          <div class="v7_3645"></div>
          <div class="v7_3646"></div>
        </div>
        <div class="v14_4095"></div>
        <div class="name"></div>
        <div class="name"></div>
      </div>
    `;
  }
}

customElements.define('view-login', ViewLogin);
