import { html, render } from "lit";

const deps = [import("./app-element")];

Promise.all(deps).then(() => {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("Root element was not found");
  }

  render(html`<app-element></app-element>`, root);
});
