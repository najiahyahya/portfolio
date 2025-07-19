<template>
  <div class="contact-methods">
    <div class="contact-card">
      <div class="contact-icon">📧</div>
      <h3>Email</h3>
      <p>najiahyahya@gmail.com</p>
      <a :href="`mailto:najiahyahya@gmail.com`" class="contact-btn">Send Email</a>
    </div>

    <div class="contact-card">
      <div class="contact-icon">🌐</div>
      <h3>Website</h3>
      <p>https://github.com/najiahyahya</p>
      <a :href="`https://github.com/najiahyahya`" target="_blank" class="contact-btn">Visit Site</a>
    </div>
  </div>
</template>

<style scoped>
.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-card {
  text-align: center;
  padding: 2rem;
  background: var(--light-text);
  border-radius: 15px;
  transition: transform 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 3rem;
}

.contact-card h3 {
  margin-bottom: 1rem;
  color: var(--dark-color);
}

.contact-card p {
  color: var(--secondary-color);
}

.contact-btn {
  background: var(--primary-color);
  color: var(--secondary-color);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s;
}

.contact-btn:hover {
  background: var(--color-background);
  transform: translateY(-2px);
}
</style>