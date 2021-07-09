import { LitElement, css } from 'lit-element';

export class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active;
  }

  static get styles() {
    return [
      css`
        :host {
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.active = false;
  }

  static get properties() {
    return {
      active: { type: Boolean },
      metadata: { type: Object },
    };
  }

  updated(changedProperties) {
    // console.log('PAGE_VIEW_ELEMENT UPDATED')
    if (changedProperties.has('active') && this.active) {
      // this.changeMetadata(this.metadata);
    }
  }
}
