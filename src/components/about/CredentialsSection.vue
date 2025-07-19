<template>
  <div class="credentials-grid">
    <div class="credential-card">
      <h3>🎓 Education</h3>
      <ul>
        <li>MSc Computer & Information Systems - Merit</li>
        <li>MTeach (Primary) - Pass</li>
        <li>BSc Mathematics (Honors) - Second Class Upper (2:1)</li>
      </ul>
    </div>
    
    <div class="credential-card">
      <h3>📜 Certifications</h3>
      <ul>
        <li>Microsoft Certified: Azure AI Fundamentals (AI-900)</li>
        <li>Deep Learning with MATLAB (Workshop)</li>
        <li>Shotokan Karate 2nd Dan Black Belt Diploma</li>
      </ul>
    </div>

    <div class="credential-card">
      <h3>💼 Experience</h3>
      <ul>
        <li>Teacher & Head of Level 
            <br><i>YSHHB Primary School</i>
            <br>- Led academic teams, taught Maths and Science, and organized school events
        </li>
        <li>Individual Support Assistant 
            <br><i>Jerudong International School</i></li>
        <li>Mathematics Tutor 
            <br><i>JS Smart Tuition & BIBD ALAF</i></li>
      </ul>
    </div>

    <div class="credential-card">
      <h3>🌱 Interests</h3>
      <ul>
        <li>🤖AI and 📊Data Analytics</li>
        <li>🗄️Databases</li>
        <li>🛡️Ethical hacking</li>
        <li>🥋Karate, 💪Lagree, 🏃‍♀️Running, and 🎻Violin</li>
        <li>Learning 🇰🇷Korean and 🇸🇦Arabic</li>
      </ul>
    </div>

    <div class="credential-card">
      <h3>🏅 Achievements</h3>
      <ul>
        <li>🏅Completed 21km marathon<br><i>Borneo Run 2019</i></li>
        <li>🥉3rd Place<br><i>Kick Off with Brunei Cement</i></li>
        <li>🥉Bronze Team Kata<br><i>Sukan Kebangsaan Brunei Darussalam ke-2</i></li>
        <li>🥉Bronze Team Kumite<br><i>Pesta Sukan Kebangsaan Brunei XI</i></li>
      </ul>
    </div>

    <div class="credential-card">
      <h3>🌍 Community</h3>
      <ul>
        <li>Emcee 🎤 <i>12th SEA Karate Federation Championship</i></li>
        <li>Vice President 🤝 <i>UBD Sports Climbing Club</i></li>
        <li>English Trainer 📚 <i>SCOT Education, Brunei-Cambodia</i></li>
        <li>Volunteer Coordinator 🙌 <i>Society for Community Outreach and Training (SCOT)</i></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.credential-card {
  background: var(--primary-color);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.credential-card:hover {
  transform: translateY(-5px);
}

.credential-card h3 {
  margin-bottom: 1rem;
  color: var(--secondary-color);
  font-size: 1.4rem;
}

.credential-card ul {
  padding-left: 1rem;
  text-align: left;
}

.credential-card li {
  margin-bottom: 0.5rem;
  color: white;
  line-height: 1.6;
}
</style>
