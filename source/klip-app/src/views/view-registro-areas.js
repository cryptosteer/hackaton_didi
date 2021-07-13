import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewRegistroAreas extends PageViewElement {
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
      .v81_5108 {
        width: 375px;
        height: 812px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v81_5109 {
        width: 294px;
        height: 216px;
        background: url('assets/img/v81_5109.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: absolute;
        top: 88px;
        left: 41px;
        overflow: hidden;
      }
      .v81_5110 {
        width: 294px;
        height: 216px;
        background: url('assets/img/v81_5110.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v81_5111 {
        width: 301px;
        color: rgba(29, 34, 45, 1);
        position: relative;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 24px;
        opacity: 1;
        text-align: center;
      }
      .v81_5112 {
        width: 294px;
        height: 48px;
        background: url('assets/img/v81_5112.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: absolute;
        top: 309px;
        left: 41px;
        overflow: hidden;
      }
      .v81_5113 {
        width: 294px;
        height: 48px;
        background: url('assets/img/v81_5113.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v81_5114 {
        width: 301px;
        color: rgba(29, 34, 45, 1);
        position: relative;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: center;
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
      <div class="v81_5108">
        <div class="v81_5109">
          <div class="v81_5110">
            <span class="v81_5111"
              >Queremos ayudarte en tú busqueda y así poder recomendarte
              proyectos más personalizados según tus habilidades, conocimientos
              y necesidades.</span
            >
          </div>
        </div>
        <div class="v81_5112">
          <div class="v81_5113">
            <span class="v81_5114"
              >Selecciona una o varias áreas en las que te gustaría
              emprender.</span
            >
          </div>
        </div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="name"></div>
      </div>
    `;
  }
}

customElements.define('view-registro-areas', ViewRegistroAreas);
