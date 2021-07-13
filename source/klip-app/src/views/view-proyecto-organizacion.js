import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewProyectoOrganizacion extends PageViewElement {
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
      .v31_5366 {
        width: 375px;
        height: 812px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: absolute;
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
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v43_4436 {
        width: 147px;
        color: rgba(78, 166, 255, 1);
        position: absolute;
        top: 167px;
        left: 180px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .v43_4437 {
        width: 147px;
        color: rgba(78, 166, 255, 1);
        position: absolute;
        top: 324px;
        left: 180px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .v43_4438 {
        width: 147px;
        color: rgba(78, 166, 255, 1);
        position: absolute;
        top: 469px;
        left: 180px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .v80_5502 {
        width: 343px;
        height: 150px;
        background: url('assets/img/v80_5502.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 3px;
        opacity: 1;
        position: absolute;
        top: 613px;
        left: 16px;
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
      <div class="v31_5366">
        <div class="name"></div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="name"></div>
        <span class="v43_4436">5 Emprendedores inscritos</span
        ><span class="v43_4437">3 Emprendedores inscritos</span
        ><span class="v43_4438">1 Emprendedor inscrito</span>
        <div class="v80_5502">
          <div class="name"></div>
          <div class="name"></div>
          <div class="name"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('view-proyecto-organizacion', ViewProyectoOrganizacion);
