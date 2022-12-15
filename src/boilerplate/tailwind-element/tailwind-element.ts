import { LitElement, unsafeCSS } from "lit";
// importing inline styles (indicated by the ?inline query parameter) ensure that
// the css files are directly included into the
// file and excluded from dynamic linking into the page.
// All css that is imported is first processed using postcss
import components from "./components.css?inline";
import utilities from "./utilities.css?inline";
import screens from "./screens.css?inline";

// We import this file twice, once as a string to use in the TailwindElement class, and once as an import to the output html file.
// This is necessary to preserve global styling created by tailwind for inherited css properties like font-family to work within lit.
import "./preflight.css";
import preflight from "./preflight.css?inline";

/**
 * tailwind is statically imported and thereby efficiently
 * exposed to all subclasses that require tailwind.
 * Furthermore, tailwind will automatically add additional styles
 * required by any other component using tailwind-defined styles.
 */
export class TailwindElement extends LitElement {
  // Add all tailwind components to the styles property.
  public static styles = [
    unsafeCSS(preflight),
    unsafeCSS(components),
    unsafeCSS(utilities),
    unsafeCSS(screens),
  ].filter(styles => styles.cssText !== ""); // filter out empty stylesets
}
