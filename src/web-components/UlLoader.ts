/**
 * Universal Loaders — <ul-loader> Custom Element
 *
 * A framework-agnostic Web Component that renders any loader type.
 * Works in Angular, Vue, plain HTML, and any environment supporting
 * Custom Elements v1.
 *
 * Usage:
 *   <ul-loader type="spinner" color="#e74c3c" size="lg"></ul-loader>
 */

import {
  type LoaderType,
  getLoaderClassName,
  getLoaderInnerHTML,
  isValidLoaderType,
  resolveSize,
} from '../core/index';

// Inline the CSS as a string so Shadow DOM can adopt it.
// This is replaced at build time by tsup/rollup CSS injection.
import cssText from '../core/styles/loaders.css';

const TEMPLATE = document.createElement('template');

export class UlLoader extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['type', 'color', 'size', 'speed', 'label', 'variant'];
  }

  private _shadow: ShadowRoot;
  private _container: HTMLDivElement;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: 'open' });

    // Inject styles into Shadow DOM
    const style = document.createElement('style');
    style.textContent = typeof cssText === 'string' ? cssText : '';
    this._shadow.appendChild(style);

    // Create container
    this._container = document.createElement('div');
    this._container.setAttribute('role', 'status');
    this._container.setAttribute('aria-live', 'polite');
    this._shadow.appendChild(this._container);
  }

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(
    _name: string,
    _oldValue: string | null,
    _newValue: string | null,
  ): void {
    if (_oldValue !== _newValue) {
      this._render();
    }
  }

  private _render(): void {
    const type = (this.getAttribute('type') || 'spinner') as LoaderType;
    const color = this.getAttribute('color');
    const size = this.getAttribute('size');
    const speed = this.getAttribute('speed');
    const label = this.getAttribute('label') || 'Loading…';
    const variant = this.getAttribute('variant');

    // Validate type
    const safeType: LoaderType = isValidLoaderType(type) ? type : 'spinner';

    // Set class names
    this._container.className = getLoaderClassName(
      safeType,
      variant as 'text' | 'circle' | 'rect' | undefined,
    );

    // Set CSS variables via inline style
    if (color) {
      this._container.style.setProperty('--ul-color', color);
    } else {
      this._container.style.removeProperty('--ul-color');
    }

    const resolvedSize = resolveSize(size || undefined);
    if (resolvedSize) {
      this._container.style.setProperty('--ul-size', resolvedSize);
    } else {
      this._container.style.removeProperty('--ul-size');
    }

    if (speed) {
      this._container.style.setProperty('--ul-speed', speed);
    } else {
      this._container.style.removeProperty('--ul-speed');
    }

    // Set inner HTML (bars/dots need child elements)
    this._container.innerHTML = getLoaderInnerHTML(safeType, label);

    // Accessibility
    this._container.setAttribute('aria-label', label);
  }
}

/**
 * Register the <ul-loader> custom element.
 * Safe to call multiple times — will not re-register.
 */
export function registerUlLoader(
  tagName: string = 'ul-loader',
): void {
  if (
    typeof window !== 'undefined' &&
    typeof customElements !== 'undefined' &&
    !customElements.get(tagName)
  ) {
    customElements.define(tagName, UlLoader);
  }
}
