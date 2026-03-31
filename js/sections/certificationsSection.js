import { certifications } from "../data/certifications.js";

export function renderCertifications() {
  return `
    <section>
      <h2>Certifications</h2>
      <div class="grid">
        ${certifications.map(c => `
          <div class="card">${c.name}</div>
        `).join("")}
      </div>
    </section>
  `;
}