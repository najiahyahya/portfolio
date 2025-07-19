<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header class="app-header">
      <img class="header-logo" src="./assets/emoji.svg" width="125" height="125" />
      <nav class="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/learn">Coding.bn</RouterLink>
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
}

.app-header {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  background: var(--primary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-logo {
  height: 40px;
  margin-bottom: 0;
}

.main-nav {
  display: flex;
  gap: 2rem;
}

.main-nav a {
  text-decoration: none;
  color: var(--secondary-color);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>