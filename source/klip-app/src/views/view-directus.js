import { html, css } from 'lit-element';

import { PageViewElement } from './page-view-element.js';

class ViewDirectus extends PageViewElement {
  static get styles() {
    return [
      ...super.styles,
      css`
        iframe {
          border: none;
          width: 99vw;
          max-height: 1000px;
          height: 90vh;
          margin: 0 auto;
          padding: 0;
        }
      `,
    ];
  }

  static get properties() {
    return {
      cadena: { type: Object },
    };
  }

  render() {
    return html`<iframe
      src="https://klip.ascensoinversiones.cl/admin/#/login"
    ></iframe>`;
  }
}

customElements.define('view-directus', ViewDirectus);
