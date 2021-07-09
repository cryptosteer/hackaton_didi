import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewHome extends PageViewElement {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html` <h1>Proyectos</h1> `;
  }
}

customElements.define('view-home', ViewHome);
