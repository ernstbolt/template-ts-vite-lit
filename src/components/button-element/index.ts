import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

/**
 * ButtonElement is a sub-class of TailwindElement,
 * thereby containing all css classes that can be used from tailwind.
 */
@customElement("button-element")
export class ButtonElement extends LitElement {
  @state()
  public count = 0;

  public render() {
    return html`
      <button @click="${this.clickHandler}">
        Welcome to Vite with Lit & Husky & Linting (x${this.count})
      </button>
    `;
  }

  private clickHandler() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "button-element": ButtonElement;
  }
}
