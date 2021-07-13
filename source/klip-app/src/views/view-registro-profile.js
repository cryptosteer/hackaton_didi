import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '@material/mwc-button/mwc-button';
import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { crcaUrlNavigate } from '@ascenso/crca-redux-url-parser/redux';
import { PAGE_REGISTRO_AREAS, PAGE_REGISTRO_CONFIRM } from '../config/page';

class ViewRegistroProfile extends PageViewElement {
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
      .v17_4171 {
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
      .v17_4329 {
        width: 120px;
        height: 40px;
        background: url('src/assets/img/v17_4329.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 11px;
        opacity: 1;
        position: absolute;
        top: 88px;
        left: 125px;
        overflow: hidden;
      }
      .v17_4330 {
        width: 114px;
        color: rgba(29, 34, 45, 1);
        position: relative;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 32px;
        opacity: 1;
        text-align: center;
      }
      .name {
        color: #fff;
      }
      .name {
        color: #fff;
      }
      .v81_5015 {
        width: 189px;
        height: 288px;
        background: url('src/assets/img/v81_5015.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 428px;
        left: 87px;
        overflow: hidden;
      }

      section {
        position: absolute;
        top: 210px;
        left: 100px;
      }

      section div {
        margin: 40px 0;
        text-align: center;
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
      <div class="v17_4171">
        <div class="name"></div>
        <div class="v17_4329"><span class="v17_4330">¿Eres...?</span></div>
        <section>
          <div>
            <mwc-button
              raised
              @click=${() =>
                CrcaStaticStore.store.dispatch(
                  crcaUrlNavigate(PAGE_REGISTRO_AREAS)
                )}
              >Emprendedor</mwc-button
            >
          </div>
          <div>
            <mwc-button
              raised
              @click=${() =>
                CrcaStaticStore.store.dispatch(
                  crcaUrlNavigate(PAGE_REGISTRO_CONFIRM)
                )}
              >Mentor</mwc-button
            >
          </div>
        </section>
        <div class="name"></div>
        <div class="name"></div>
        <div class="v81_5015"></div>
      </div>
    `;
  }
}

customElements.define('view-registro-profile', ViewRegistroProfile);
