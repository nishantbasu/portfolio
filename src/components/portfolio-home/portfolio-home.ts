import { css, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import template from './html/portfolio-home.html';
import componentStyles from '../../styles/component-styles.scss';

@customElement('portfolio-home')
export class PortfolioHome extends LitElement {
  @property() stringToDisplay = 'Portfolio baby!';

  static get styles() {
    return css`
      ${unsafeCSS(componentStyles)}
    `;
  }

  render() {
    return template.call(this);
  }
}
