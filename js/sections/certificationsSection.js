import { certifications } from "../data/certifications.js";

export function renderCertifications() {
  return `
    <section>
      <h2>Certifications</h2>

      <div class="grid">
        ${certifications.map(c => `
          <div class="card">
            <h3>${c.name}</h3>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}