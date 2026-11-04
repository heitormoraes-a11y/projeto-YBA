// ===== Página inicial — Your Bizarre Adventure Wiki =====
const grid = document.getElementById("wiki-grid");
const lista = document.getElementById("mudancas-lista");

// ===== Categorias da YBA (5 partes) =====
const CATEGORIAS = [
  { id: "stands", nome: "Stands", cor: "#6b3fa0", desc: "Todos os Stands, movesets, combos e tier list.", exemplos: ["Star Platinum", "The World", "King Crimson"], href: "article.html?page=stands" },
  { id: "specs", nome: "Specs", cor: "#1a6a8a", desc: "Vampirismo, Hamon, Spin, Boxing e mais.", exemplos: ["Hamon", "Vampirism", "Spin"], href: "article.html?page=specs" },
  { id: "bosses", nome: "Bosses", cor: "#8a1a1a", desc: "Chefes do mapa, estratégias e recompensas.", exemplos: ["DIO", "Kars", "Diavolo"], href: "article.html?page=bosses" },
  { id: "drops", nome: "Itens & Drops", cor: "#5a2d8a", desc: "Flechas, Rokakaka e taxas de drop.", exemplos: ["Flecha Requiem", "Rokakaka", "Stand Arrow"], href: "article.html?page=itens" },
  { id: "guia", nome: "Guia do Jogo", cor: "#4a6b3a", desc: "Mecânicas, progressão e dicas para iniciantes.", exemplos: ["Combate", "Corpos", "Trading"], href: "article.html?page=guia" }
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
  Object.entries(STANDS).slice(0, 8).forEach(([id, g]) => {
    const card = document.createElement("a");
    card.href = `article.html?page=${id}`;
    card.className = "wiki-card";
    card.innerHTML = `
      <div class="wiki-card-img wiki-card-img-real" style="background: linear-gradient(135deg, ${g.cor}, #14101f);">
        <img src="${g.img}" alt="${g.nome}" loading="lazy">
      </div>
      <div class="wiki-card-body">
        <span class="wiki-card-badge">${g.raridade} • Tier ${g.tier}</span>
        <h3>${g.nome}</h3>
        <p>${g.descricao}</p>
      </div>`;
    grid.appendChild(card);
  });

  const total = Object.keys(STANDS).length + BOSSES.length + SPECS.length + ITENS.length;
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

// ===== Mudanças recentes =====
if (lista) {
  const MUDANCAS = [
    { pagina: "Star Platinum/Combos e Tips", tipo: "edit", usuario: "JotaroKujo_BR", quando: "há 2 minutos" },
    { pagina: "Requiem Arrow", tipo: "edit", usuario: "GiornoFan2007", quando: "há 11 minutos" },
    { pagina: "The World/Knife Cancel", tipo: "edit", usuario: "DIO_Supremo", quando: "há 26 minutos" },
    { pagina: "King Crimson/Time Erase", tipo: "edit", usuario: "DiavoloAlt", quando: "há 1 hora" },
    { pagina: "Heaven-Ascended DIO", tipo: "nova", usuario: "MudaMuda64", quando: "há 3 horas" },
    { pagina: "Spec: Vampirism", tipo: "edit", usuario: "KarsPiller", quando: "ontem" }
  ];
  MUDANCAS.forEach(m => {
    const li = document.createElement("li");
    const tag = m.tipo === "nova"
      ? `<span class="tag tag-nova">NOVA</span>`
      : `<span class="tag tag-edit">EDIT</span>`;
    li.innerHTML = `${tag} <a href="#">${m.pagina}</a> — YBA • por <strong>${m.usuario}</strong> ${m.quando}`;
    lista.appendChild(li);
  });
}

// ===== Busca simples =====
const input = document.getElementById("search-input");
const btn = document.getElementById("search-btn");

function buscar() {
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  if (!q) return;
  const achado = Object.keys(STANDS).find(id =>
    STANDS[id].nome.toLowerCase().includes(q) || id.includes(q)
  );
  if (achado) {
    window.location.href = `article.html?page=${achado}`;
  } else {
    alert("Nenhuma página encontrada para \"" + input.value + "\". Tente: Star Platinum, The World, King Crimson, GER...");
  }
}
if (btn) btn.addEventListener("click", buscar);
if (input) input.addEventListener("keydown", e => { if (e.key === "Enter") buscar(); });
