// ===== Funções comuns às duas páginas (busca, cards, menu, imagem reserva) =====

// ----- Imagem reserva: se uma imagem externa falhar, mostra um quadro escuro -----
const IMG_RESERVA = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#1c1e21"/>' +
  '<text x="100" y="118" font-size="64" text-anchor="middle" fill="#555" font-family="sans-serif">?</text></svg>'
);
document.addEventListener("error", e => {
  const el = e.target;
  if (el.tagName === "IMG" && !el.dataset.falhou) {
    el.dataset.falhou = "1";
    el.src = IMG_RESERVA;
  }
}, true);

// ----- Busca em Stands, Specs, Bosses e Itens -----
const semAcento = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
// Chave sem acento, sem espaço e sem pontuação: "Love Train" casa com "D4C: Love Train"
const chaveBusca = t => semAcento(String(t ?? "")).replace(/[^a-z0-9]/g, "");

const INDICE_BUSCA = [
  ...Object.entries(STANDS).map(([id, x]) => ({ id, nome: x.nome, tipo: "Stand" })),
  ...SPECS.map(x => ({ id: x.id, nome: x.nome, tipo: "Spec" })),
  ...BOSSES.map(x => ({ id: x.id, nome: x.nome, tipo: "Boss" })),
  ...ITENS.map(x => ({ id: x.id, nome: x.nome, tipo: "Item" })),
  { id: "skins", nome: "Skins de Stands", tipo: "Guia" },
  { id: "paragons", nome: "Paragons", tipo: "Guia" },
  { id: "sbr", nome: "Steel Ball Run", tipo: "Guia" },
  { id: "guia", nome: "Guia do Jogo", tipo: "Guia" }
];

// Um resultado por página (evita duplicatas)
const INDICE_UNICO = INDICE_BUSCA.filter((x, i, arr) => arr.findIndex(y => y.id === x.id) === i);

const buscaInput = document.getElementById("search-input");
const buscaBtn = document.getElementById("search-btn");
const buscaBox = document.querySelector(".search-box");
const buscaLista = document.createElement("ul");
buscaLista.className = "search-results";
buscaLista.id = "search-results";
buscaLista.hidden = true;
if (buscaBox) buscaBox.appendChild(buscaLista);

let buscaAtiva = -1;

function marcarAtivo(i) {
  const links = [...buscaLista.querySelectorAll("a")];
  buscaAtiva = Math.max(-1, Math.min(i, links.length - 1));
  links.forEach((a, idx) => a.classList.toggle("ativo", idx === buscaAtiva));
  if (buscaAtiva >= 0) links[buscaAtiva].scrollIntoView({ block: "nearest" });
}

function procurar(q) {
  const termo = chaveBusca(q);
  if (!termo) return [];
  return INDICE_UNICO
    .map(x => {
      const nome = chaveBusca(x.nome);
      const id = chaveBusca(x.id);
      if (!nome.includes(termo) && !id.includes(termo)) return null;
      return { ...x, score: nome.startsWith(termo) ? 0 : nome.includes(termo) ? 1 : 2 };
    })
    .filter(Boolean)
    .sort((a, b) => a.score - b.score || a.nome.localeCompare(b.nome, "pt-BR"))
    .slice(0, 8);
}

function mostrarResultados() {
  if (!buscaInput) return;
  const q = buscaInput.value.trim();
  buscaAtiva = -1;
  if (!q) { buscaLista.hidden = true; return; }
  const res = procurar(q);
  buscaLista.innerHTML = "";
  if (!res.length) {
    const li = document.createElement("li");
    li.className = "search-vazio";
    li.textContent = `Nenhuma página encontrada para "${q}".`;
    buscaLista.appendChild(li);
  } else {
    res.forEach(r => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `article.html?page=${encodeURIComponent(r.id)}`;
      a.textContent = r.nome;
      const tag = document.createElement("span");
      tag.textContent = r.tipo;
      a.appendChild(tag);
      li.appendChild(a);
      buscaLista.appendChild(li);
    });
  }
  buscaLista.hidden = false;
}

function buscar() {
  if (!buscaInput) return;
  const texto = buscaInput.value.trim();
  const res = procurar(texto);
  if (res.length === 1) window.location.href = `article.html?page=${encodeURIComponent(res[0].id)}`;
  else mostrarResultados();
}

if (buscaInput) {
  buscaInput.addEventListener("input", mostrarResultados);
  buscaInput.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); marcarAtivo(buscaAtiva + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); marcarAtivo(buscaAtiva - 1); }
    else if (e.key === "Enter") {
      const ativo = buscaLista.querySelector("a.ativo");
      if (ativo && !buscaLista.hidden) window.location.href = ativo.href;
      else buscar();
    } else if (e.key === "Escape") { buscaLista.hidden = true; buscaAtiva = -1; }
  });
}
if (buscaBtn) buscaBtn.addEventListener("click", buscar);
document.addEventListener("click", e => {
  if (buscaBox && !buscaBox.contains(e.target)) buscaLista.hidden = true;
});
// Atalho "/" foca a busca (ignora quando o foco já está num campo)
document.addEventListener("keydown", e => {
  if (e.key !== "/" || !buscaInput) return;
  const alvo = document.activeElement;
  if (alvo && /^(INPUT|TEXTAREA|SELECT)$/.test(alvo.tagName)) return;
  e.preventDefault();
  buscaInput.focus();
});


// ===== Escape de texto (evita quebrar o HTML com aspas ou < >) =====
const esc = t => String(t ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// ===== Card padrão: usado na página inicial e nas listas =====
function criarCard(d, id) {
  const a = document.createElement("a");
  a.href = `article.html?page=${id}`;
  a.className = "wiki-card card-item";
  a.style.setProperty("--card-cor", d.cor || "#b98aff");

  const selos = [];
  if (d.raridade) {
    let rarityClass = "comum";
    const r = String(d.raridade).toLowerCase();
    if (r.includes("incomum")) rarityClass = "incomum";
    else if (r.includes("raro")) rarityClass = "raro";
    else if (r.includes("lendário")) rarityClass = "lendario";
    else if (r.includes("mitico")) rarityClass = "mitico";
    selos.push(`<span class="wiki-card-badge badge-rarity ${rarityClass}">${esc(d.raridade)}</span>`);
  }
  if (d.tier) selos.push(`<span class="wiki-card-badge">Tier ${esc(d.tier)}</span>`);
  if (d.dificuldade) selos.push(`<span class="wiki-card-badge">${"★".repeat(d.dificuldade)}${"☆".repeat(Math.max(0, 5 - d.dificuldade))}</span>`);

  const imagem = d.img
    ? `<img src="${esc(d.img)}" alt="${esc(d.nome)}" loading="lazy">`
    : `<div class="wiki-card-img-missing">${(d.nome || "").charAt(0)}</div>`;

  a.innerHTML = `
    <div class="wiki-card-img">${imagem}</div>
    <div class="wiki-card-body">
      <div class="card-selos">${selos.join("")}</div>
      <h3>${esc(d.nome)}</h3>
      <p>${esc(d.descricao || d.desc || "")}</p>
    </div>`;
  return a;
}

// ===== Card para listas de entidades (stands, bosses, specs, itens) ====
function criarCardLista(d, id, tipo) {
  const a = document.createElement("a");
  a.href = `article.html?page=${id}`;
  a.className = "wiki-card card-item";
  a.style.setProperty("--card-cor", d.cor || "#b98aff");

  const selos = [];
  if (d.raridade) {
    let rarityClass = "comum";
    const r = String(d.raridade).toLowerCase();
    if (r.includes("incomum")) rarityClass = "incomum";
    else if (r.includes("raro")) rarityClass = "raro";
    else if (r.includes("lendário")) rarityClass = "lendario";
    else if (r.includes("mitico")) rarityClass = "mitico";
    selos.push(`<span class="wiki-card-badge badge-rarity ${rarityClass}">${esc(d.raridade)}</span>`);
  }
  if (d.tier) selos.push(`<span class="wiki-card-badge">Tier ${esc(d.tier)}</span>`);
  if (d.dificuldade) selos.push(`<span class="wiki-card-badge">${"★".repeat(d.dificuldade)}${"☆".repeat(Math.max(0, 5 - d.dificuldade))}</span>`);
  if (tipo) selos.push(`<span class="wiki-card-badge">${esc(tipo)}</span>`);

  const imagem = d.img
    ? `<img src="${esc(d.img)}" alt="${esc(d.nome)}" loading="lazy">`
    : `<div class="wiki-card-img-missing">${(d.nome || "").charAt(0)}</div>`;

  a.innerHTML = `
    <div class="wiki-card-img">${imagem}</div>
    <div class="wiki-card-body">
      <div class="card-selos">${selos.join("")}</div>
      <h3>${esc(d.nome)}</h3>
      <p>${esc(d.descricao || d.desc || "")}</p>
    </div>`;
  return a;
}

// ===== Menu mobile, voltar ao topo e cabeçalho ao rolar =====
(function () {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const header = document.querySelector(".header");
  const btnTop = document.getElementById("back-to-top");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open === true ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  if (btnTop) {
    btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 40);
    if (btnTop) btnTop.classList.toggle("visible", window.scrollY > 300);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
