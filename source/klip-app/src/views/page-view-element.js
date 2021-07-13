import { CrcaStaticStore } from '@ascenso/crca-redux-store';
import { crcaUrlNavigate } from '@ascenso/crca-redux-url-parser/redux';
import { LitElement, css } from 'lit-element';
import { sharedStyles } from '../assets/styles/sharedStyles';

export class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active;
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          box-sizing: border-box;
          display: block;
          width: 100%;
          height: 100%;
          padding: 10px 5px;
          color: var(--theme-primary);
        }
      `,
    ];
  }

  static get properties() {
    return {
      active: { type: Boolean },
      metadata: { type: Object },
      initTouch: { type: Object },
      pagePrev: { type: String },
      pageNext: { type: String },
    };
  }

  constructor() {
    super();
    this.active = false;
    this.initTouch = false;
    this.pagePrev = false;
    this.pageNext = false;
  }

  touchStart(e) {
    // e.preventDefault();
    this.initTouch = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
  }

  touchEnd(e) {
    // e.preventDefault();
    const lastX = e.changedTouches[0].clientX;
    const lastY = e.changedTouches[0].clientY;
    const deltaX = lastX - this.initTouch.x;
    const deltaY = lastY - this.initTouch.y;
    const horizontal = Math.abs(deltaX) > Math.abs(deltaY);
    if (horizontal) {
      if (deltaX > 0 && this.pagePrev) {
        CrcaStaticStore.store.dispatch(crcaUrlNavigate(this.pagePrev));
      } else if (deltaX < 0 && this.pageNext) {
        CrcaStaticStore.store.dispatch(crcaUrlNavigate(this.pageNext));
      }
    } else {
      if (deltaY > 0 && this.pagePrev) {
        CrcaStaticStore.store.dispatch(crcaUrlNavigate(this.pagePrev));
      } else if (deltaY < 0 && this.pageNext) {
        CrcaStaticStore.store.dispatch(crcaUrlNavigate(this.pageNext));
      }
    }
    this.initTouch = false;
  }

  updated(changedProperties) {
    // console.log('PAGE_VIEW_ELEMENT UPDATED')
    if (changedProperties.has('active') && this.active) {
      // this.changeMetadata(this.metadata);
    }
  }
}
