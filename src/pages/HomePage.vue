<script setup>
import { ref, onMounted } from 'vue'

const catFact = ref('')
const countryInfo = ref('')
const bruneiDetails = ref([])
const currentDetailIndex = ref(0)
const randomJoke = ref('')

async function fetchCatFact() {
  try {
    const res = await fetch('https://catfact.ninja/fact')
    const data = await res.json()
    catFact.value = data.fact
  } catch (error) {
    catFact.value = 'Failed to load cat fact.'
  }
}

async function fetchCountryInfo() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/name/brunei')
    const data = await res.json()
    const brunei = data[0]

    bruneiDetails.value = [
      `Capital: ${brunei.capital[0]}`,
      `Population: ${brunei.population.toLocaleString()}`,
      `Region: ${brunei.region}`,
      `Currency: ${Object.values(brunei.currencies)[0].name} (${Object.values(brunei.currencies)[0].symbol})`,
      `Timezone: ${brunei.timezones[0]}`,
      `Languages: ${Object.values(brunei.languages).join(', ')}`,
      `Flag: ${brunei.flag}`,
    ]

    currentDetailIndex.value = 0
    countryInfo.value = bruneiDetails.value[currentDetailIndex.value]
  } catch (error) {
    countryInfo.value = 'Failed to load country info.'
  }
}

function showNextDetail() {
  if (bruneiDetails.value.length === 0) return
  currentDetailIndex.value = (currentDetailIndex.value + 1) % bruneiDetails.value.length
  countryInfo.value = bruneiDetails.value[currentDetailIndex.value]
}

async function fetchRandomJoke() {
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await res.json()
    randomJoke.value = `${data.setup} — ${data.punchline}`
  } catch (error) {
    randomJoke.value = 'Failed to load joke.'
  }
}

onMounted(() => {
  fetchCatFact()
  fetchCountryInfo()
  fetchRandomJoke()
})
</script>

<template>
  <div class="home">
    <div class="hero">
      <h1>Salam, I'm Najiah🧕🏻</h1>
      <p>A participant in Coding.bn Cohort 3; an initiative by AITI Brunei, a programme under MISC-WG ICT Brunei.</p>
      <RouterLink to="/learn" class="cta-button">Coding.bn</RouterLink>
    </div>

    <div class="features">
      <h2>Explore live data from public APIs below!</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>🐈 Cat Facts</h3>
          <p>{{ catFact }}</p>
          <button @click="fetchCatFact" class="refresh-button">Refresh</button>
        </div>
        <div class="feature-card">
          <h3>🌍 Country Info</h3>
          <p>{{ countryInfo }}</p>
          <button @click="showNextDetail" class="refresh-button">Refresh</button>
        </div>
        <div class="feature-card">
          <h3>🧠 Random Jokes</h3>
          <p>{{ randomJoke }}</p>
          <button @click="fetchRandomJoke" class="refresh-button">Refresh</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.hero {
  padding: 2rem;
  background: var(--light-color);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

.hero p {
  font-size: 1.2rem;
  color: var(--muted-text);
  margin-bottom: 1.75rem;
}

.cta-button {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.features h2 {
  margin-bottom: 2rem;
  color: var(--secondary-color);
  font-size: 2rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 0.5rem;
}

.feature-card {
  background: var(--light-color);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 230px;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.feature-card p {
  flex-grow: 1;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--muted-text);
  text-align: left;
  overflow-y: auto;
  max-height: 100px;
}

.refresh-button {
  align-self: center;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 25px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s;
}

.refresh-button:hover {
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }

  .feature-card {
    padding: 1.25rem;
  }
}
</style>