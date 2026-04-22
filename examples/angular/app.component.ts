/**
 * Angular Example — Universal Loaders
 *
 * Setup:
 *   1. npm install universal-loaders
 *   2. In angular.json, add to "styles": ["node_modules/universal-loaders/dist/style.css"]
 *      OR import 'universal-loaders/style.css' in styles.css
 *   3. In your module or standalone component, add CUSTOM_ELEMENTS_SCHEMA
 *   4. Import 'universal-loaders/web-components' in main.ts or component
 */

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Auto-register <ul-loader>
import 'universal-loaders/web-components';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="container">
      <h1>Universal Loaders — Angular Demo</h1>

      <h2>All Loader Types</h2>
      <div class="row">
        <ul-loader type="spinner"></ul-loader>
        <ul-loader type="dots" color="#10b981"></ul-loader>
        <ul-loader type="pulse" color="#f59e0b" size="lg"></ul-loader>
        <ul-loader type="bars" color="#ef4444"></ul-loader>
        <ul-loader type="ring" color="#8b5cf6" size="xl"></ul-loader>
        <ul-loader type="orbit" speed="1.5s"></ul-loader>
      </div>

      <h2>Dynamic Loader</h2>
      <div class="row">
        <select [(ngModel)]="selectedType">
          <option *ngFor="let t of loaderTypes" [value]="t">{{ t }}</option>
        </select>
        <ul-loader [attr.type]="selectedType" [attr.color]="selectedColor"></ul-loader>
      </div>

      <h2>Progress</h2>
      <ul-loader type="progress"></ul-loader>
    </div>
  `,
  styles: [`
    .container { padding: 2rem; font-family: Inter, sans-serif; }
    .row { display: flex; gap: 2rem; flex-wrap: wrap; margin: 1rem 0 2rem; align-items: center; }
    select { padding: 0.5rem; border-radius: 8px; }
  `],
})
export class AppComponent {
  selectedType = 'spinner';
  selectedColor = '#3b82f6';
  loaderTypes = ['spinner', 'dots', 'pulse', 'bars', 'ring', 'skeleton', 'progress', 'orbit'];
}
