// ===== Página inicial — Your Bizarre Adventure Wiki =====
const grid = document.getElementById("wiki-grid");
const lista = document.getElementById("mudancas-lista");

// ===== Categorias da YBA (5 partes) =====
const CATEGORIAS = [
  { id: "stands", nome: "Stands", cor: "#6b3fa0", desc: "Todos os Stands, movesets, combos e tier list.", exemplos: ["Star Platinum", "The World", "King Crimson"], href: "article.html?page=stands" },
  { id: "specs", nome: "Specs", cor: "#1a6a8a", desc: "Vampirismo, Hamon, Spin, Boxing e mais.", exemplos: ["Hamon", "Vampirism", "Spin"], href: "article.html?page=specs" },
  { id: "bosses", nome: "Bosses", cor: "#8a1a1a", desc: "Chefes do mapa, estratégias e recompensas.", exemplos: ["DIO", "Kars", "Diavolo"], href: "article.html?page=bosses" },
  { id: "drops", nome: "Itens & Drops", cor: "#5a2d8a", desc: "Flechas, Rokakaka e taxas de drop.", exemplos: ["Flecha Requiem", "Rokakaka", "Stand Arrow"], href: "article.html?page=itens" },
  { id: "guia", nome: "Guia do Jogo", cor: "#4a6b3a", desc: "Mecânicas, progressão e dicas para iniciantes.", exemplos: ["Combate", "Corpos", "Trading"], href: "article.html?page=guia" },
  { id: "skins", nome: "Skins", cor: "#b8860b", desc: "Como obter skins (shinies), pity e raridades.", exemplos: ["Lucky Arrow", "Pity", "Limitadas"], href: "article.html?page=skins" },
  { id: "sbr", nome: "Steel Ball Run", cor: "#8a5a2a", desc: "A corrida, corpse parts e casual × ranqueada.", exemplos: ["MBR", "Corpse Parts", "Jesus"], href: "article.html?page=sbr" }
];

const catGrid = document.getElementById("categorias-grid");
if (catGrid) {
  CATEGORIAS.forEach(c => {
    const card = document.createElement("a");
    card.href = c.href || "#";
    card.className = "cat-card";
    card.innerHTML = `
      <div class="cat-card-top" style="background: linear-gradient(135deg, ${c.cor}, #1c1e21);">
        <span class="cat-nome-inicial">${c.nome.charAt(0)}</span>
      </div>
      <div class="cat-card-body">
        <h3>${c.nome}</h3>
        <p>${c.desc}</p>
        <div class="cat-exemplos">
          ${c.exemplos.map(e => `<span>${e}</span>`).join("")}
        </div>
      </div>`;
    catGrid.appendChild(card);
  });
}

// ===== Stands em destaque =====
if (grid) {
  Object.entries(STANDS).slice(0, 8).forEach(([id, g]) => grid.appendChild(criarCard(g, id)));

  const total = Object.keys(STANDS).length + BOSSES.length + SPECS.length + ITENS.length + 4; // guia, skins, paragons, sbr
  document.getElementById("contador").textContent = total;
}

// ===== Destaque: Boss da semana (DIO, com imagem real da wiki) =====
const bossBox = document.getElementById("destaque-boss");
if (bossBox) {
  const boss = BOSSES[0];
  bossBox.innerHTML = `
    <h2 class="section-title">Boss em destaque</h2>
    <div class="boss-card">
      <div class="boss-visual boss-visual-real">
        <img src="${boss.img}" alt="${boss.nome}" loading="lazy">
      </div>
      <div class="boss-info">
        <div class="boss-head">
          <h3>${boss.nome}</h3>
          <span class="boss-jogo">Your Bizarre Adventure</span>
        </div>
        <div class="boss-dificuldade" title="Dificuldade">
          Dificuldade:
          ${"★".repeat(boss.dificuldade)}${"☆".repeat(5 - boss.dificuldade)}
        </div>
        <p>${boss.desc}</p>
        <div class="boss-drops">
          <strong>Drops:</strong>
          ${boss.drops.map(d => `<span class="drop-tag">${d}</span>`).join("")}
        </div>
        <blockquote class="boss-dica"><strong>Dica da comunidade:</strong> ${boss.dica}</blockquote>
      </div>
    </div>`;
}

// ===== Últimas páginas adicionadas (lista real, definida em dados.js) =====
if (lista && typeof PAGINAS_RECENTES !== "undefined") {
  PAGINAS_RECENTES.forEach(m => {
    const li = document.createElement("li");
    const tag = m.tipo === "nova" ? `<span class="tag tag-nova">NOVA</span>` : `<span class="tag tag-edit">ATUALIZADA</span>`;
    li.innerHTML = `${tag} <a href="article.html?page=${m.id}">${esc(m.nome)}</a> — ${esc(m.data)}`;
    lista.appendChild(li);
  });
}
