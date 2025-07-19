<template>
  <div class="not-found">
    <h1>😢<br>The page you're looking for doesn't exist.</h1>
    <router-link to="/" class="back-btn">← Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: '404',
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 5rem 1rem;
  color: var(--secondary-color);
}

.not-found h1 {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
}

.back-btn {
  background: white;
  color: var(--secondary-color);
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-family: inherit;
  text-decoration: none;
  transition: transform 0.2s;
  border: 1px solid var(--secondary-color);
}

.back-btn:hover,
.back-btn:focus {
  background: var(--primary-color);
  transform: translateY(-2px);
  outline: none;
}
</style>
