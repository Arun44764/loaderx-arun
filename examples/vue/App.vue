<!--
  Vue Example — Universal Loaders

  Usage:
    npm create vite@latest my-app -- --template vue
    npm install universal-loaders
    Copy this file to src/App.vue
-->

<template>
  <div class="app">
    <h1>Universal Loaders — Vue Demo</h1>

    <h2>Web Component Usage</h2>
    <div class="row">
      <ul-loader type="spinner"></ul-loader>
      <ul-loader type="dots" color="#10b981"></ul-loader>
      <ul-loader type="pulse" color="#f59e0b" size="lg"></ul-loader>
      <ul-loader type="bars" color="#ef4444"></ul-loader>
      <ul-loader type="ring" color="#8b5cf6" size="xl"></ul-loader>
      <ul-loader type="orbit" speed="1.5s"></ul-loader>
    </div>

    <h2>Progress Bar</h2>
    <ul-loader type="progress" color="#3b82f6"></ul-loader>

    <h2>Skeleton</h2>
    <div class="skeleton-col">
      <ul-loader type="skeleton" variant="text"></ul-loader>
      <ul-loader type="skeleton" variant="text" size="16px"></ul-loader>
      <ul-loader type="skeleton" variant="circle" size="48px"></ul-loader>
    </div>
  </div>
</template>

<script setup>
// Import web component — auto-registers <ul-loader>
import 'universal-loaders/web-components';
</script>

<style scoped>
.app {
  padding: 2rem;
  font-family: Inter, sans-serif;
}

.row {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1rem 0 2rem;
}

.skeleton-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
  margin: 1rem 0;
}
</style>
