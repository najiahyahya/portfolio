<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

function goBack() {
  router.push('/');
};
</script>

<template>
    <div class="learn">
        <div class="hero-section">
            <h1>Coding.bn</h1>
            <p>
              A 6-month intensive programme blending technical training and on-the-job experience in full-stack development, data science, machine learning, and AI-powered solutions through real-world ICT projects.
            </p>
        </div>

        <div class="section">
            <h2>What I'm Learning:</h2>
            <div class="overview-grid">
                <div class="overview-card">
                    <div class="card-icon">🚀</div>
                    <h3>Frontend Development</h3>
                    <p>Develop responsive and interactive full-stack web application.</p>
                    <ul>
                        <li>HTML & CSS for structure and layout of web pages.</li>
                        <li>JavaScript & DOM on programming basics, interactivity and ES6+ features.</li>
                        <li>React.js, a component-based architecture, hooks and routing.</li>
                        <li>Vue.js for state management, reactivity and API integration (like this <u>website</u>).</li>
                    </ul>
                    </div>

                <div class="overview-card">
                    <div class="card-icon">🛢</div>
                    <h3>Databases</h3>
                    <p>Build, query, and manage relational and NoSQL databases.</p>
                    <ul>
                        <li>SQL using MariaDB & PostgreSQL for database design, querying, indexing, and transactions.</li>
                        <li>NoSQL using MongoDB for document-based data modeling and CRUD operations.</li>
                    </ul>
                </div>

                <div class="overview-card">
                    <div class="card-icon">🐍</div>
                    <h3>Python for AI & ML</h3>
                    <p>Apply Python programming for data handling, AI, and machine learning applications.</p>
                    <ul>
                        <li>Python fundamentals with NumPy and Pandas for syntax, data handling, and control structures.</li>
                        <li>OOP and file operations using classes, inheritance, and data formats like CSV, JSON, and XML.</li>
                        <li>Data analysis and visualization with Pandas, Matplotlib, and Seaborn for AI preparation.</li>
                        <li>Machine learning and neural networks using Scikit-learn, TensorFlow, and Keras for real-world AI applications.</li>
                    </ul>
                </div>

                <div class="overview-card">
                    <div class="card-icon">🤖</div>
                    <h3>Prompt Engineering</h3>
                    <p>Engineer AI prompts for natural language and code generation tasks.</p>
                    <ul>
                        <li>Large Language Models (LLMs) and GPT-based tools for core settings, output configuration, sampling, and behavior controls.</li>
                        <li>Prompt engineering techniques for Zero-shot, One-shot, Few-shot, CoT, ReAct, and ToT prompting.</li>
                        <li>Code & multimedia prompting using GPT tools for writing, explaining, translating, and debugging code.</li>
                        <li>Prompt optimization practices focusing on clarity, experimentation, constraints, and schema formatting.</li>
                    </ul>
                </div>

                <div class="overview-card">
                    <div class="card-icon">👩🏻‍💻</div>
                    <h3>Soft Skills & Hackathon</h3>
                    <p>
                        Demonstrate professional skills such as communication, problem-solving, and project execution through collaborative hackathon projects.
                    </p>
                </div>
            </div>
        </div>
        <button @click="goBack" class="back-btn">← Back to Home</button>
        <div class="cta-section">
      <h2>Wanna Chat?</h2>
      <RouterLink to="/about" class="cta-button">Let's Talk!</RouterLink>
    </div>
    </div>
</template>

<style scoped>
.learn {
  max-width: 1000px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--color-text);
  padding: 2rem 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 0rem;
  color: white
}

.hero-section p {
  font-size: 1.2rem;
  color: var(--muted-text);
}

.section {
  margin-bottom: 2rem;   
}

.section h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  font-size: 2rem;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 2rem;
}

.overview-card {
  text-align: left;
  color: var(--muted-text);
  padding: 2rem;
  background: var(--light-color);
  border-radius: 15px;
  transition: transform 0.3s;
}

.overview-card:hover {
  transform: translateY(-5px);
}

.overview-card h3 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--secondary-color);
  font-weight: bold;
}

.overview-card p {
  text-align: center;
  margin-bottom: 1rem;
}

.card-icon {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.back-btn {
  background: white;
  color: var(--secondary-color);
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  font-family: inherit;
  transition: transform 0.2s;
  border: 1px solid var(--secondary-color);
}

.back-btn:hover,
.back-btn:focus {
  background: var(--primary-color);
  transform: translateY(-2px);
  outline: none;
}

.cta-section {
  text-align: center;
  background: transparent;
  color: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-section h2 {
  margin-bottom: 1rem;
}

.cta-button {
  background: var(--primary-color);
  color: var(--secondary-color);
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: bold;
  font-size: 1.1rem;
  display: inline-block;
  margin-top: 1rem;
}

.cta-button:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }

  .section {
    padding: 2rem 1rem;
  }

  .overview-grid
  {
    grid-template-columns: 1fr;
  }
}
</style>