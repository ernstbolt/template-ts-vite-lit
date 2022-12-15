import type { TemplateResult } from "lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "./boilerplate/tailwind-element/tailwind-element";

@customElement("app-element")
export class AppElement extends TailwindElement {
  connectedCallback(): void {
    super.connectedCallback();

    // dynamically import the button-element.ts for automatic rollup chunking
    // Web Components by nature are easily dynamically loaded, as the existing markup is upgraded
    // once a new component is registered.
    //
    // Do note that this is an extreme example of a dynamically loaded component, the component
    // file size is likely too small to warrant the extra request.
    //
    // A more practical example of dynamic imports would be a dashboard-like ui, where each subsection is dynamically loaded into
    // the page when the corresponding tab is pressed.
    import("./components/button-element");
  }

  protected render(): TemplateResult {
    return html`
      <div class="w-screen h-screen flex justify-center items-center">
        <button-element></button-element>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": AppElement;
  }
}
