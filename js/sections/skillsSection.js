import { skillCard } from "../components/skillCard.js";

export function renderSkills() {
  return `
    <section>
      <h2>Core Expertise</h2>
      <div class="grid">
        ${skillCard("Android", ["Kotlin", "MVVM", "Performance Optimization"])}
        ${skillCard("Flutter", ["Cross-platform", "Responsive UI", "Clean Architecture"])}
        ${skillCard("Spring Boot", ["REST APIs", "CRUD", "Architecture"])}
      </div>
    </section>
  `;
}