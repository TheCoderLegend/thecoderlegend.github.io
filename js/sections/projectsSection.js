import { projects } from "../data/projects.js";
import { projectCard } from "../components/projectCard.js";

export function renderProjects() {
  return `
    <section>
      <h2>Projects</h2>
      <div class="grid">
        ${projects.map(projectCard).join("")}
      </div>
    </section>
  `;
}