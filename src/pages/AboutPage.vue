<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ContactSection from '../components/about/ContactSection.vue'
import ProjectsSection from '../components/about/ProjectsSection.vue'
import CredentialsSection from '../components/about/CredentialsSection.vue'

const activeTab = ref('contact')
const router = useRouter()

function goBack() {
  router.push('/')
}
</script>

<template>
  <div class="about">
    <div class="user-header">
      <div class="user-avatar">NY</div>
      <div class="user-basic-info">
        <h1>Najiah Yahya</h1>
        <p>
          I'm a Mathematics graduate turned teacher, now fulfilling my childhood dream of working in tech.
          Passionate about AI, data analytics, and databases, with a curiosity for <i>ethical</i> hacking.
        </p>
      </div>
    </div>

    <div class="tab-navigation">
      <button class="tab-btn" 
              :class="{ active: activeTab === 'contact' }"
              @click="activeTab = 'contact'">
        📞 Contact
      </button>
      <button class="tab-btn" 
              :class="{ active: activeTab === 'projects' }"
              @click="activeTab = 'projects'">
        💻 Projects
      </button>
      <button class="tab-btn" 
              :class="{ active: activeTab === 'credentials' }"
              @click="activeTab = 'credentials'">
        🏆 Credentials
      </button>
    </div>

    <div class="tab-content">
      <ContactSection v-if="activeTab === 'contact'" />
      <ProjectsSection v-if="activeTab === 'projects'" />
      <CredentialsSection v-if="activeTab === 'credentials'" />
    </div>

    <button @click="goBack" class="back-btn">← Back to Home</button>
  </div>
</template>

<style scoped>
.about {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.user-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--primary-color);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

.user-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--secondary-color);
  flex-shrink: 0;
}

.user-basic-info {
  flex: 1;
  min-width: 250px;
}

.user-basic-info h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.user-basic-info p {
  font-size: 1rem;
  color: white;
  line-height: 1.5;
}

.tab-navigation {
  display: flex;
  background: white;
  border-bottom: 1px solid #dee2e6;
}

.tab-btn {
  background: none;
  border: none;
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: 1rem;
  color: var(--color-background);
  transition: all 0.3s;
  border-bottom: 3px solid transparent;
  flex-grow: 1;
  text-align: center;
  min-width: 120px;
}

.tab-btn:hover,
.tab-btn:focus {
  color: var(--primary-color);
  background: transparent;
  outline: none;
}

.tab-btn.active {
  color: var(--secondary-color);
  border-bottom-color: var(--primary-color);
  background: transparent;
  font-weight: 600;
}

.tab-content {
  padding: 2rem;
  background: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  min-height: 300px;
}

.back-btn {
  background: white;
  color: var(--secondary-color);
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-family: inherit;
  transition: transform 0.2s;
  margin-top: 2rem;
  border: 1px solid var(--secondary-color);
}

.back-btn:hover,
.back-btn:focus {
  background: var(--primary-color);
  transform: translateY(-2px);
  outline: none;
}

@media (max-width: 600px) {
  .user-header {
    justify-content: center;
    text-align: center;
  }
  .user-avatar {
    width: 100px;
    height: 70px;
    font-size: 2rem;
  }
  .user-basic-info h1 {
    font-size: 2rem;
  }
  .tab-btn {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    min-width: 80px;
  }
}
</style>