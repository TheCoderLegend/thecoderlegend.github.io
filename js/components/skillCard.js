export function skillCard(title, items) {
  return `
    <div class="card">
      <h3>${title}</h3>
      <ul>
        ${items.map(i => `<li>${i}</li>`).join("")}
      </ul>
    </div>
  `;
}