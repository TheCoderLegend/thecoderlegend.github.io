export function projectCard(p) {
  return `
    <div class="card">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div style="margin-top:10px;">
        ${p.github ? `<a class="btn" href="${p.github}" target="_blank">GitHub</a>` : ""}
      </div>
    </div>
  `;
}