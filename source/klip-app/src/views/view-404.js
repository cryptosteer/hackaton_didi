import { CRCA_URL_PAGE_LOGIN } from '@ascenso/crca-redux-url-parser/utils';
import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

class View404 extends PageViewElement {
  static get styles() {
    return [...super.styles];
  }

  render() {
    return html`
      <div>
        <h2>Página no encontrada</h2>
      </div>
      <p>Esto es un error 404</p>
      <a href=${CRCA_URL_PAGE_LOGIN}>Volver al Home</a>
    `;
  }
}

customElements.define('view-404', View404);
