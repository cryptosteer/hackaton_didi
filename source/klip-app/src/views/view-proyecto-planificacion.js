import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewProyectoPlanificacion extends PageViewElement {
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
      .v43_4439 {
        width: 375px;
        height: 812px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v43_4440 {
        width: 375px;
        height: 617px;
        background: url('src/assets/img/v43_4440.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 97px;
        left: 0px;
        overflow: hidden;
      }
      .v43_4441 {
        width: 375px;
        height: 161px;
        background: rgba(248, 250, 253, 1);
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 0px;
        overflow: hidden;
      }
      .v43_4442 {
        width: 343px;
        height: 288px;
        background: url('src/assets/img/v43_4442.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 104px;
        left: 15px;
        overflow: hidden;
      }
      .v43_4443 {
        width: 336px;
        height: 48px;
        background: url('src/assets/img/v43_4443.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 0px;
        left: 3px;
        overflow: hidden;
      }
      .v43_4444 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4445 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 48px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4446 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 96px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4447 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 144px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4448 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 192px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4449 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 240px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4450 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 288px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4451 {
        width: 336px;
        height: 48px;
        background: url('src/assets/img/v43_4451.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 48px;
        left: 3px;
        overflow: hidden;
      }
      .v43_4452 {
        width: 48px;
        color: rgba(166, 175, 192, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4453 {
        width: 48px;
        color: rgba(166, 175, 192, 1);
        position: absolute;
        top: 0px;
        left: 48px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4454 {
        width: 48px;
        color: rgba(166, 175, 192, 1);
        position: absolute;
        top: 0px;
        left: 96px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4455 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 144px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4456 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 192px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4457 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 240px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4458 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 288px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4459 {
        width: 336px;
        height: 48px;
        background: url('src/assets/img/v43_4459.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 96px;
        left: 3px;
        overflow: hidden;
      }
      .v43_4460 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4461 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 48px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4462 {
        width: 48px;
        color: rgba(0, 126, 255, 1);
        position: absolute;
        top: 0px;
        left: 96px;
        font-family: Inter;
        font-weight: Medium;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4463 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 144px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4464 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 192px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4465 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 240px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4466 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 288px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4467 {
        width: 336px;
        height: 48px;
        background: url('src/assets/img/v43_4467.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 144px;
        left: 3px;
        overflow: hidden;
      }
      .v43_4468 {
        width: 48px;
        color: rgba(0, 126, 255, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4469 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 48px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4470 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 96px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4471 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 144px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4472 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 192px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4473 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 240px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4474 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 288px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4475 {
        width: 336px;
        height: 48px;
        background: url('src/assets/img/v43_4475.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 192px;
        left: 3px;
        overflow: hidden;
      }
      .v43_4476 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4477 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 48px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4478 {
        width: 48px;
        color: rgba(0, 126, 255, 1);
        position: absolute;
        top: 0px;
        left: 96px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4479 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 144px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4480 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 192px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4481 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 240px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4482 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 288px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4483 {
        width: 336px;
        height: 48px;
        background: url('src/assets/img/v43_4483.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        opacity: 1;
        position: absolute;
        top: 240px;
        left: 3px;
        overflow: hidden;
      }
      .v43_4484 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 0px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4485 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 48px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4486 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 96px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4487 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 144px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4488 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 192px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4489 {
        width: 48px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 0px;
        left: 240px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4490 {
        width: 48px;
        color: rgba(166, 175, 192, 1);
        position: absolute;
        top: 0px;
        left: 288px;
        font-family: Inter;
        font-weight: Regular;
        font-size: 14px;
        opacity: 1;
        text-align: center;
      }
      .v43_4491 {
        width: 327px;
        height: 201px;
        background: url('src/assets/img/v43_4491.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin: 3px;
        opacity: 1;
        position: absolute;
        top: 416px;
        left: 24px;
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
      .v43_4497 {
        width: 301px;
        color: rgba(29, 34, 45, 1);
        position: absolute;
        top: 142px;
        left: 24px;
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
      <div class="v43_4439">
        <div class="v43_4440">
          <div class="v43_4441"></div>
          <div class="v43_4442">
            <div class="v43_4443">
              <span class="v43_4444">Mo</span><span class="v43_4445">Tu</span
              ><span class="v43_4446">We</span><span class="v43_4447">Th</span
              ><span class="v43_4448">Fr</span><span class="v43_4449">Sa</span
              ><span class="v43_4450">Su</span>
            </div>
            <div class="v43_4451">
              <span class="v43_4452">29</span><span class="v43_4453">30</span
              ><span class="v43_4454">31</span><span class="v43_4455">1</span
              ><span class="v43_4456">2</span><span class="v43_4457">3</span
              ><span class="v43_4458">4</span>
            </div>
            <div class="v43_4459">
              <span class="v43_4460">5</span><span class="v43_4461">6</span
              ><span class="v43_4462">7</span><span class="v43_4463">8</span
              ><span class="v43_4464">9</span><span class="v43_4465">10</span
              ><span class="v43_4466">11</span>
            </div>
            <div class="v43_4467">
              <span class="v43_4468">12</span><span class="v43_4469">13</span
              ><span class="v43_4470">14</span><span class="v43_4471">15</span
              ><span class="v43_4472">16</span><span class="v43_4473">17</span
              ><span class="v43_4474">18</span>
            </div>
            <div class="v43_4475">
              <span class="v43_4476">19</span><span class="v43_4477">20</span
              ><span class="v43_4478">21</span><span class="v43_4479">22</span
              ><span class="v43_4480">23</span><span class="v43_4481">24</span
              ><span class="v43_4482">25</span>
            </div>
            <div class="v43_4483">
              <span class="v43_4484">26</span><span class="v43_4485">27</span
              ><span class="v43_4486">28</span><span class="v43_4487">29</span
              ><span class="v43_4488">30</span><span class="v43_4489">31</span
              ><span class="v43_4490">1</span>
            </div>
          </div>
          <div class="v43_4491">
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
            <div class="name"></div>
          </div>
        </div>
        <div class="name"></div>
        <span class="v43_4497">Seguimientos y reuniones.</span>
      </div>
    `;
  }
}

customElements.define('view-proyecto-planificacion', ViewProyectoPlanificacion);
