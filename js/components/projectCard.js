export function projectCard(p) {
  return `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
    </div>
  `;
}