<script setup>
import { ref } from "vue"

const topics = ref([
  { name: "Frontend Development", done: true },
  { name: "Databases", done: true },
  { name: "Python for AI & ML", done: false },
  { name: "Prompt Engineering", done: false },
  { name: "Soft Skills & Hackathon", done: false },
])

const newTopic = ref("")

function toggleDone(index) {
  topics.value[index].done = !topics.value[index].done
}

function addTopic() {
  if (newTopic.value.trim() !== "") {
    topics.value.push({ name: newTopic.value.trim(), done: false })
    newTopic.value = ""
  }
}
</script>

<template>
  <div class="tolearn">
    <h3>🧠 Coding.bn Phases:</h3>
    <ul>
      <li v-for="(topic, index) in topics" :key="index" @click="toggleDone(index)" class="topic-item">
        <span>{{ topic.done ? "✔️" : "➖" }}</span>
        <span :class="{ done: topic.done }">{{ topic.name }}</span>
      </li>
    </ul>

    <div class="add-section">
      <textarea
      id="new-topic"
      name="new-topic"
      v-model="newTopic"
      placeholder="Type here..."
      rows="2"
      />

      <button @click="addTopic">Add List</button>
    </div>
  </div>
</template>

<style scoped>
.tolearn {
  margin: 0 auto;
  padding: 1rem;
  background: var(--primary-color);
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  text-align: center;  
}

.topic-item {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 0.3rem 0;
  padding: 0.4rem;
  border-radius: 5px;
  transition: background 0.3s;
}

.topic-item:hover {
  background: var(--secondary-color);
}

.done {
  text-decoration: line-through;
  color: white;
}

.add-section {
  margin-top: 1rem;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  resize: none;
  border-radius: 5px;
  border: 1px solid white;
  font-family: inherit;
}

button {
  margin-top: 0.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  border: solid;
  background: white;
  color: var(--secondary-color);
  font-family: inherit;
  transition: background 0.3s, transform 0.2s;
}

button:hover {
  background: var(--color-background);
  transform: translateY(-1px);
}
</style>