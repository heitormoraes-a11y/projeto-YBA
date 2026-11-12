// ===== Funções comuns às duas páginas (busca, links em breve, imagem reserva) =====

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

const INDICE_BUSCA = [
  ...Object.entries(STANDS).map(([id, x]) => ({ id, nome: x.nome, tipo: "Stand" })),
  ...SPECS.map(x => ({ id: x.id, nome: x.nome, tipo: "Spec" })),
  ...BOSSES.map(x => ({ id: x.id, nome: x.nome, tipo: "Boss" })),
  ...ITENS.map(x => ({ id: x.id, nome: x.nome, tipo: "Item" })),
  { id: "skins", nome: "Skins de Stands", tipo: "Guia" },
  { id: "paragons", nome: "Paragons", tipo: "Guia" },
  { id: "sbr", nome: "Steel Ball Run", tipo: "Guia" }
];

const buscaInput = document.getElementById("search-input");
const buscaBox = document.querySelector(".search-box");
const buscaLista = document.getElementById("resultados") || (() => {
  const ul = document.createElement("ul");
  ul.className = "search-results";
  ul.hidden = true;
  if (buscaBox) buscaBox.appendChild(ul);
  return ul;
})();

function procurar(q) {
  const termo = semAcento(q.trim());
  if (!termo) return [];
  return INDICE_BUSCA
    .filter(x => semAcento(x.nome).includes(termo) || x.id.includes(termo))
    .sort((a, b) => (semAcento(a.nome).startsWith(termo) ? 0 : 1) - (semAcento(b.nome).startsWith(termo) ? 0 : 1))
    .slice(0, 8);
}

function mostrarResultados() {
  if (!buscaInput) return;
  const q = buscaInput.value.trim();
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
      a.href = `article.html?page=${r.id}`;
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
  const res = procurar(buscaInput.value);
  if (res.length === 1) window.location.href = `article.html?page=${res[0].id}`;
  else mostrarResultados();
}

if (buscaInput) {
  buscaInput.addEventListener("input", mostrarResultados);
  buscaInput.addEventListener("keydown", e => {
    if (e.key === "Enter") buscar();
    if (e.key === "Escape") buscaLista.hidden = true;
  });
}
// Atalho "/" pula direto para a busca (padrão de wiki)
document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== buscaInput && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
    e.preventDefault();
    buscaInput.focus();
  }
});
document.addEventListener("click", e => {
  if (buscaBox && !buscaBox.contains(e.target)) buscaLista.hidden = true;
});

// ----- Links que ainda não existem (href="#") mostram um aviso "Em breve" -----
let avisoTimer;
document.addEventListener("click", e => {
  const a = e.target.closest('a[href="#"]');
  if (!a) return;
  e.preventDefault();
  let aviso = document.getElementById("aviso-breve");
  if (!aviso) {
    aviso = document.createElement("div");
    aviso.id = "aviso-breve";
    document.body.appendChild(aviso);
  }
  aviso.textContent = "Em breve! Essa página ainda não existe.";
  aviso.classList.add("visivel");
  clearTimeout(avisoTimer);
  avisoTimer = setTimeout(() => aviso.classList.remove("visivel"), 2200);
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
  if (d.raridade) selos.push(d.raridade);
  if (d.tier) selos.push(`Tier ${d.tier}`);
  if (d.dificuldade) selos.push("★".repeat(d.dificuldade) + "☆".repeat(Math.max(0, 5 - d.dificuldade)));
  if (d.preco && String(d.preco).length <= 18) selos.push(d.preco);

  a.innerHTML = `
    <div class="wiki-card-img wiki-card-img-real" style="background: linear-gradient(135deg, ${esc(d.cor || "#6b3fa0")}, #14101f);">
      <img src="${esc(d.img || "")}" alt="${esc(d.nome)}" width="200" height="130" loading="lazy">
    </div>
    <div class="wiki-card-body">
      <div class="card-selos">${selos.map(t => `<span class="wiki-card-badge">${esc(t)}</span>`).join("")}</div>
      <h3>${esc(d.nome)}</h3>
      <p>${esc(d.descricao || d.desc || "")}</p>
    </div>`;
  return a;
}
