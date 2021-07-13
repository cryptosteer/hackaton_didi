import { LitElement, html, css } from 'lit-element';

class ViewHome extends LitElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v31_5546 {
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
      .v31_5549 {
        width: 351px;
        height: 223px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        position: absolute;
        top: 196px;
        left: 24px;
        overflow: hidden;
      }
      .v31_5550 {
        width: 351px;
        height: 158px;
        background: url('src/assets/img/v31_5550.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 16px;
        opacity: 1;
        position: absolute;
        top: 45px;
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
      .v31_5554 {
        width: 138px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 20px;
        opacity: 1;
        text-align: left;
      }
      .v31_5555 {
        width: 351px;
        height: 240px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        position: absolute;
        top: 419px;
        left: 24px;
        overflow: hidden;
      }
      .v31_5556 {
        width: 351px;
        height: 255px;
        background: url('src/assets/img/v31_5556.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 16px;
        opacity: 1;
        position: absolute;
        top: 45px;
        left: 0px;
        overflow: hidden;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v31_5560 {
        width: 129px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 20px;
        opacity: 1;
        text-align: left;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v38_5451 {
        width: 18px;
        height: 14px;
        background: rgba(46, 58, 89, 1);
        opacity: 1;
        position: absolute;
        top: 91px;
        left: 316px;
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
      <div class="v31_5546">
        <div class="name"></div>
        <div class="v31_5549">
          <div class="v31_5550">
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
          </div>
          <span class="v31_5554">Recomendados</span>
        </div>
        <div class="v31_5555">
          <div class="v31_5556">
            <div class="name"></div>
            <div class="name"></div>
          </div>
          <span class="v31_5560">Casos de éxito</span>
        </div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="v38_5451"></div>
        <div class="name"></div>
      </div>
    `;
  }
}

customElements.define('view-home', ViewHome);
