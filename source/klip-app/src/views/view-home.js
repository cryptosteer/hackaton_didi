import { LitElement, html, css } from 'lit-element';

class ViewHome extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
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
    return html` <h1>Listado de Proyectos</h1> `;
  }
}

customElements.define('view-home', ViewHome);
