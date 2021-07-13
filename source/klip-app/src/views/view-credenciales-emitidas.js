import { LitElement, html, css } from 'lit-element';

class ViewCredencialesEmitidas extends LitElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v43_4566 {
        width: 375px;
        height: 812px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v43_4567 {
        width: 20px;
        height: 4px;
        background: url('src/assets/img/v43_4567.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 755px;
        left: 178px;
        overflow: hidden;
      }
      .v43_4568 {
        width: 4px;
        height: 4px;
        background: rgba(196, 196, 196, 1);
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 50%;
      }
      .v43_4569 {
        width: 4px;
        height: 4px;
        background: rgba(196, 196, 196, 1);
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 8px;
        border-radius: 50%;
      }
      .v43_4570 {
        width: 4px;
        height: 4px;
        background: rgba(196, 196, 196, 1);
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 16px;
        border-radius: 50%;
      }
      .name {
        color: #fff;
      }
      .v43_4576 {
        width: 294px;
        height: 24px;
        background: url('src/assets/img/v43_4576.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: absolute;
        top: 133px;
        left: 24px;
        overflow: hidden;
      }
      .v43_4577 {
        width: 294px;
        height: 24px;
        background: url('src/assets/img/v43_4577.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v43_4578 {
        width: 301px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .v43_4579 {
        width: 294px;
        height: 24px;
        background: url('src/assets/img/v43_4579.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: absolute;
        top: 533px;
        left: 32px;
        overflow: hidden;
      }
      .v43_4582 {
        width: 115px;
        height: 115px;
        background: url('src/assets/img/v43_4582.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 206px;
        left: 13px;
        overflow: hidden;
      }
      .v43_4623 {
        width: 115px;
        height: 115px;
        background: url('src/assets/img/v43_4623.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 369px;
        left: 11px;
        overflow: hidden;
      }
      .v43_4624 {
        width: 115px;
        height: 115px;
        background: url('src/assets/img/v43_4624.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 532px;
        left: 13px;
        overflow: hidden;
      }
      .name {
        color: #fff;
      }
      .v43_4626 {
        width: 217px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 222px;
        left: 132px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .v43_4627 {
        width: 217px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 393px;
        left: 132px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
      }
      .v43_4629 {
        width: 217px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 557px;
        left: 132px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 16px;
        opacity: 1;
        text-align: left;
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
      <div class="v43_4566">
        <div class="v43_4567">
          <div class="v43_4568"></div>
          <div class="v43_4569"></div>
          <div class="v43_4570"></div>
        </div>
        <div class="name"></div>
        <div class="v43_4576">
          <div class="v43_4577">
            <span class="v43_4578">Registro de documentación</span>
          </div>
        </div>
        <div class="v43_4579"></div>
        <div class="v43_4582"></div>
        <div class="v43_4623"></div>
        <div class="v43_4624"></div>
        <div class="name"></div>
        <span class="v43_4626"
          >Credencial entregada a Eugenia Blanco, primera fase.</span
        ><span class="v43_4627"
          >Credencial entregada a Matías Rodriguez, tercera fase.</span
        ><span class="v43_4629"
          >Credencial en espera por María Cordoba, falta validar datos.</span
        >
      </div>
    `;
  }
}

customElements.define('view-credenciales-emitidas', ViewCredencialesEmitidas);
