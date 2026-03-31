import { skillCard } from "../components/skillCard.js";

export function renderSkills() {
  return `
    <section>
      <h2>Skills</h2>
      <div class="grid">
        ${skillCard("Android", ["Kotlin", "MVVM", "Performance"])}
        ${skillCard("Flutter", ["Cross-platform", "Responsive UI"])}
        ${skillCard("Spring Boot", ["REST APIs", "CRUD", "Architecture"])}
      </div>
    </section>
  `;
}