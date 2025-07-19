<script setup>
import ToLearn from './ToLearn.vue'
</script>

<template>
  <div class="projects-list">
    <div class="projects-card">
      <h4>To do List App 📝</h4>
      <ToLearn />
      <small>Project #1</small>
    </div>

    <div class="projects-card">
      <h4>React</h4>
      <p>React ⚛️ + Vite ⚡ app fetching and managing Typicode posts with 📝 create, ✏️ edit, 🗑️ delete, and ⭐ favorite.</p>
      <a href="#" class="project-button" @click.prevent>
      🛠️ Work in Progress
      </a>
      <small>Project #2</small>
    </div>

    <div class="projects-card">
      <h4>First Deployment</h4>
      <p>A sample project that we were tasked to deploy.</p>
      <a href="https://ss28-v-vdemo.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      class="project-button">
      🚀 View Deployment
      </a>
      <small>Project #3</small>
    </div>

    <div class="projects-card">
      <h4>This Portfolio Site!</h4>
      <p>Built this site with Vue 💚 + Vite ⚡, committed to GitHub 🐙, then deployed with Vercel 🚀.</p>
      <small>Project #4</small>
    </div>
  </div>
</template>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
}

.projects-card {
  background: var(--light-color);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--primary-color);
  display: flex;
  flex-direction: column;
}

.projects-card h4 {
  margin-bottom: 1rem;
  color: var(--dark-color);
  text-transform: capitalize;
}

.projects-card p {
  color: var(--muted-text);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.projects-card small {
  color: #999;
}

.project-button {
  display: inline-block;
  margin: 0.5rem auto;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-family: inherit;
  transition: background 0.3s, transform 0.2s;
  text-align: center;
}

.project-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-1px);
}

</style>
