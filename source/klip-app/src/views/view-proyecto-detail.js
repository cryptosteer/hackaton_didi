import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewProyectoDetail extends PageViewElement {
  static get styles() {
    return css`
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 14px;
      }
      .v41_8070 {
        width: 375px;
        height: 2006px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: relative;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v41_8072 {
        width: 327px;
        height: 786px;
        background: url('assets/img/v41_8072.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 466px;
        left: 24px;
        overflow: hidden;
      }
      .v41_8073 {
        width: 327px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 18px;
        opacity: 1;
        text-align: left;
      }
      .v41_8074 {
        width: 327px;
        color: rgba(0, 126, 255, 1);
        position: absolute;
        top: 68px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: left;
      }
      .v41_8075 {
        width: 327px;
        color: rgba(93, 99, 111, 1);
        position: absolute;
        top: 103px;
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
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v41_8175 {
        width: 18px;
        height: 20px;
        background: rgba(46, 58, 89, 1);
        opacity: 1;
        position: absolute;
        top: 83px;
        left: 327px;
      }
      .v80_5536 {
        width: 271px;
        height: 330px;
        background: url('assets/img/v80_5536.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 118px;
        left: 48px;
        overflow: hidden;
      }
      .v139_5342 {
        width: 139px;
        height: 131px;
        background: rgba(166, 175, 192, 1);
        opacity: 1;
        position: absolute;
        top: 1557px;
        left: 194px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        overflow: hidden;
      }
      .v139_5344 {
        width: 139px;
        height: 131px;
        background: rgba(166, 175, 192, 1);
        opacity: 1;
        position: absolute;
        top: 1557px;
        left: 44px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        overflow: hidden;
      }
      .v139_5345 {
        width: 288px;
        height: 131px;
        background: rgba(166, 175, 192, 1);
        opacity: 1;
        position: absolute;
        top: 1405px;
        left: 44px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        overflow: hidden;
      }
      .v139_5343 {
        width: 288px;
        height: 131px;
        background: rgba(166, 175, 192, 1);
        opacity: 1;
        position: absolute;
        top: 1266px;
        left: 44px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        overflow: hidden;
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
      <div class="v41_8070">
        <div class="v41_8072">
          <span class="v41_8073"
            >Crea tu propio taller de hidroponía desde el patio de tu casa</span
          ><span class="v41_8074">Organización Asociación MOMO</span
          ><span class="v41_8075"
            >El programa de agricultura urbana o Patios Productivos, nació como
            una iniciativa de seguridad alimentaria para comunidades
            vulnerables. Lo implementamos y pronto descubrimos que nuestros
            productos orgánicos tenían demanda en hoteles y restaurantes de la
            ciudad y podían ser generadores de ingresos adicionales para las
            familias. La conversión de los patios descuidados a huertas
            organizadas nos ha proporcionado un beneficio adicional para el
            medio ambiente. El éxito obtenido con este programa nos ha dado la
            oportunidad de replicarlo para terceros en la ciudad en diferentes
            modalidades de siembra como eras, jardines verticales y techos
            verdes ofreciendo diseño, instalación y mantenimiento. Hemos
            construido cerca de 820 patios productivos en Cartagena. 10 Green
            Place es la marca de los productos orgánicos de la Fundación
            Granitos de Paz que se llevan a domicilio en Cartagena. Es un caso
            de éxito que podemos llevar a cualquier otra cuidad. ¿Te apuntas?
          </span>
        </div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="name"></div>
        <div class="v41_8175"></div>
        <div class="v80_5536"></div>
        <div class="v139_5342"></div>
        <div class="v139_5344"></div>
        <div class="v139_5345"></div>
        <div class="v139_5343"></div>
        <div class="name"></div>
      </div>
    `;
  }
}

customElements.define('view-proyecto-detail', ViewProyectoDetail);
