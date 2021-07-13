import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewProyectoStatus extends PageViewElement {
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
      .v38_5251 {
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
      .name {
        color: #fff;
      }
      .v38_5254 {
        width: 343px;
        height: 364px;
        background: url('src/assets/img/v38_5254.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 391px;
        left: 16px;
        overflow: hidden;
      }
      .v38_5255 {
        width: 343px;
        color: rgba(29, 34, 45, 1);
        position: relative;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 24px;
        opacity: 1;
        text-align: left;
      }
      .v38_5256 {
        width: 343px;
        height: 303px;
        background: url('src/assets/img/v38_5256.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 3px;
        opacity: 1;
        position: absolute;
        top: 61px;
        left: 0px;
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
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v53_5665 {
        width: 16px;
        height: 107px;
        background: rgba(0, 126, 255, 1);
        opacity: 1;
        position: absolute;
        top: 219px;
        left: 148px;
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
      <div class="v38_5251">
        <div class="name"></div>
        <div class="name"></div>
        <div class="v38_5254">
          <span class="v38_5255">Fases y credenciales</span>
          <div class="v38_5256">
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
          </div>
        </div>
        <div class="v53_5665"></div>
      </div>
    `;
  }
}

customElements.define('view-proyecto-status', ViewProyectoStatus);
