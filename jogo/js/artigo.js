// ===== Roteador de páginas da YBA Wiki =====
// article.html?page=stands | bosses | specs | itens | guia  → listas
// article.html?page=<id>                                    → página individual

const params = new URLSearchParams(window.location.search);
const page = params.get("page") || params.get("stand") || params.get("spec") || "starplatinum";

const ROTEADOR = {
  "stands": () => paginaLista("stands"),
  "specs":  () => paginaLista("specs"),
  "bosses": () => paginaLista("bosses"),
  "itens":  () => paginaLista("itens"),
  "guia":   gerarPaginaGuia,
  "skins":  gerarPaginaSkins,
  "paragons": gerarPaginaParagons,
  "sbr":    gerarPaginaSBR,
  ...Object.fromEntries(Object.keys(STANDS).map(id => [id, () => renderStand(STANDS[id], id)])),
  ...Object.fromEntries(BOSSES.map(b => [b.id, () => renderBoss(b)])),
  ...Object.fromEntries(SPECS.map(s => [s.id, () => renderSpec(s)])),
  ...Object.fromEntries(ITENS.map(i => [i.id, () => renderItem(i)]))
};

if (Object.hasOwn(ROTEADOR, page)) {
  ROTEADOR[page]();
} else {
  document.title = "Página não encontrada - YBA Wiki";
  document.getElementById("artigo-titulo").textContent = "Página não encontrada";
  document.getElementById("artigo-conteudo").innerHTML =
    `<p>Essa página ainda não existe na wiki.</p>
     <p>Use a busca ou volte para a página inicial para encontrar o artigo desejado.</p>
     <a href="index.html" class="btn">Voltar para a página inicial</a>`;
}

// ============================================================
// ABAS DE NAVEGAÇÃO
// ============================================================
function montarAbas(catAtiva) {
  const abas = [
    { id: "stands", nome: "Stands" },
    { id: "specs", nome: "Specs" },
    { id: "bosses", nome: "Bosses" },
    { id: "itens", nome: "Itens & Drops" },
    { id: "guia", nome: "Guia" },
    { id: "skins", nome: "Skins" },
    { id: "sbr", nome: "Steel Ball Run" }
  ];
  let nomeEntidade = null;
  if (STANDS[page]) nomeEntidade = STANDS[page].nome;
  else if (BOSSES.find(b => b.id === page)) nomeEntidade = BOSSES.find(b => b.id === page).nome;
  else if (SPECS.find(s => s.id === page)) nomeEntidade = SPECS.find(s => s.id === page).nome;
  else if (ITENS.find(i => i.id === page)) nomeEntidade = ITENS.find(i => i.id === page).nome;

  const div = document.createElement("div");
  div.className = "abas-nav";
  div.innerHTML = abas.map(a =>
    `<a href="article.html?page=${a.id}" class="aba ${a.id === catAtiva ? "ativa" : ""}">${a.nome}</a>`
  ).join("");
  if (nomeEntidade) div.innerHTML += `<span class="aba aba-crumb">${esc(nomeEntidade)}</span>`;
  document.querySelector(".article-header").prepend(div);
}

// Preenche título, subtítulo, infobox e abas de uma vez (evita repetição em cada página)
function prepararPagina({ titulo, sub, aba, infobox = "" }) {
  document.title = `${titulo} - YBA Wiki`;
  document.getElementById("artigo-titulo").textContent = titulo;
  const subEl = document.querySelector(".artigo-sub");
  if (subEl && sub) subEl.textContent = sub;
  document.getElementById("infobox").innerHTML = infobox;
  montarAbas(aba);
}



// Cabeçalho visual do artigo (imagem + descrição + selo), com a cor da entidade
function headerEntidade({ item, selo }) {
  const img = item.img
    ? `<img class="stand-header-img" src="${esc(item.img)}" alt="${esc(item.nome)}" loading="lazy">`
    : `<div class="stand-header-img stand-header-img-missing">${esc((item.nome || "?").charAt(0))}</div>`;
  return `
    <div class="stand-header cap-cor" style="--cor: ${esc(item.cor || "#6b3fa0")}">
      ${img}
      <div>
        <div class="stand-raridade">${esc(selo)}</div>
        <p>${esc(item.descricao || item.desc || "")}</p>
      </div>
    </div>`;
}

// Lista <ul> com estado vazio (A confirmar)
function listaItens(arr, fn) {
  if (!arr || !arr.length) return `<p class="vazio">A confirmar.</p>`;
  return `<ul class="curiosidades">${arr.map(fn).join("")}</ul>`;
}

// ============================================================
// PÁGINAS DE ENTIDADE (Stand, Boss, Spec, Item)
// ============================================================
function renderStand(s, id) {
  const statsRows = Object.entries(s.stats || {})
    .map(([k, v]) => `<tr><th>${esc(k)}</th><td class="stat-valor">${esc(v)}</td></tr>`).join("");
  const statsTable = statsRows
    ? `<table class="stats-table">${statsRows}</table>`
    : `<p class="vazio">Estatísticas não registradas.</p>`;

  prepararPagina({
    titulo: s.nome, aba: "stands",
    infobox: `
      <tr><th colspan="2" class="info-title">${esc(s.nome)}</th></tr>
      <tr><th colspan="2" class="info-sub">Raridade: <strong>${esc(s.raridade || "A confirmar")}</strong> • Tier: <strong>${esc(s.tier || "A confirmar")}</strong></th></tr>
      ${s.img ? `<tr><th colspan="2" class="info-img"><img src="${esc(s.img)}" alt="${esc(s.nome)}" loading="lazy"></th></tr>` : ""}
      ${s.usuario ? `<tr><th>Usuário</th><td>${esc(s.usuario)}</td></tr>` : ""}
      ${s.tipo ? `<tr><th>Tipo</th><td>${esc(s.tipo)}</td></tr>` : ""}
      ${s.anime ? `<tr><th>Obra</th><td>${esc(s.anime)}</td></tr>` : ""}`
  });

  // Explicação das skills: as registradas em skillsExplicacao vêm primeiro; o resto sai do moveset
  const jaExplicadas = s.skillsExplicacao || [];
  const movermeto = (s.moveset || []).filter(m =>
    !jaExplicadas.some(e => m.toLowerCase().startsWith(e.nome.toLowerCase().split("(")[0].trim()))
  ).map(m => {
    const partes = m.split(" — ");
    return { nome: partes[0], texto: partes.slice(1).join(" — ") };
  });

  const relacionados = Object.entries(STANDS)
    .filter(([cid, c]) => cid !== id && c.anime === s.anime)
    .slice(0, 4);

  document.getElementById("artigo-conteudo").innerHTML = `
    ${headerEntidade({ item: s, selo: `${s.raridade || "Raridade A confirmar"} • Tier ${s.tier || "A confirmar"}` })}

    ${statsTable}

    <h2 id="s-move">Moveset</h2>
    ${listaItens(s.moveset, m => `<li>${esc(m)}</li>`)}

    ${s.combos && s.combos.length ? `
    <h2 id="s-combos">Combos</h2>
    ${listaItens(s.combos, c => `<li>${esc(c)}</li>`)}
    ${s.dica ? `<blockquote><strong>Dica da comunidade:</strong> ${esc(s.dica)}</blockquote>` : ""}` : ""}

    <h2 id="s-skill">Como cada skill funciona</h2>
    <div class="skills-exp">
      ${jaExplicadas.map(e => `
        <div class="skill-exp-item">
          <h3>${esc(e.nome)}</h3>
          <p>${esc(e.texto)}</p>
        </div>`).join("")}
      ${movermeto.map(m => `
        <div class="skill-exp-item">
          <h3>${esc(m.nome)}</h3>
          <p>${esc(m.texto || "A confirmar — descrição detalhada ainda não registrada; veja o vídeo de skill correspondente.")}</p>
        </div>`).join("")}
    </div>

    ${secaoVideos(s.videos, s.skillsExplicacao, s.moveset, s.nome)}

    <h2 id="s-como">Como obter</h2>
    <div class="como-obter">
      ${listaItens(s.comoObter, (p, i) => `<div class="passo"><span class="passo-num">${i + 1}</span><p>${esc(p)}</p></div>`)}
    </div>

    ${galeriaOficial(s.imgGaleria)}

    <h2 id="s-curio">Curiosidades</h2>
    ${listaItens(s.curiosidades, c => `<li>${esc(c)}</li>`)}

    ${relacionados.length ? `
    <h2 id="s-relacionados">Artigos relacionados</h2>
    <div class="wiki-grid grid-relacionados">
      ${relacionados.map(([cid, c]) => criarCard(c, cid)).join("")}
    </div>` : ""}
  `;

  montarToc();
}

function renderBoss(b) {
  prepararPagina({
    titulo: b.nome, aba: "bosses",
    infobox: `
      <tr><th colspan="2" class="info-title">${esc(b.nome)}</th></tr>
      ${b.img ? `<tr><th colspan="2" class="info-img"><img src="${esc(b.img)}" alt="${esc(b.nome)}" loading="lazy"></th></tr>` : ""}
      <tr><th>Dificuldade</th><td>★${"★".repeat(b.dificuldade || 0)}${"☆".repeat(Math.max(0, 5 - (b.dificuldade || 0)))}</td></tr>
      ${b.local ? `<tr><th>Localização</th><td>${esc(b.local)}</td></tr>` : ""}
      ${b.resp ? `<tr><th>Respawn</th><td>${esc(b.resp)}</td></tr>` : ""}
      ${b.hp ? `<tr><th>Vida</th><td>${esc(b.hp)}</td></tr>` : ""}
      ${b.xp ? `<tr><th>XP</th><td>${esc(b.xp)}</td></tr>` : ""}
      ${b.drops && b.drops.length ? `<tr><th>Drops</th><td>${b.drops.map(d => esc(d)).join(", ")}</td></tr>` : ""}`
  });

  document.getElementById("artigo-conteudo").innerHTML = `
    ${headerEntidade({ item: b, selo: `Boss • Dificuldade ★${"★".repeat(b.dificuldade || 0)}` })}

    <h2 id="b1">Informações da luta</h2>
    ${b.local ? `<p><strong>Onde encontrar:</strong> ${esc(b.local)}</p>` : ""}
    ${b.resp ? `<p><strong>Respawn:</strong> ${esc(b.resp)} após ser derrotado.</p>` : ""}
    <p><strong>Vida:</strong> ${esc(b.hp || "A confirmar")} • <strong>XP:</strong> ${esc(b.xp || "A confirmar")}</p>

    <h2 id="b2">Drops</h2>
    ${(b.drops && b.drops.length)
      ? `<div class="boss-drops">${b.drops.map(d => `<span class="drop-tag">${esc(d)}</span>`).join("")}</div>`
      : `<p class="vazio">A confirmar.</p>`}

    ${b.dica ? `<blockquote><strong>Dica da comunidade:</strong> ${esc(b.dica)}</blockquote>` : ""}

    <h2 id="b3">Artigos relacionados</h2>
    <div class="abas-nav abas-inline">
      <a href="article.html?page=bosses" class="aba">Todos os bosses</a>
      <a href="article.html?page=itens" class="aba">Itens &amp; Drops</a>
      <a href="article.html?page=guia" class="aba">Guia do jogo</a>
    </div>`;

  montarToc();
}

function renderSpec(sp) {
  prepararPagina({
    titulo: sp.nome, aba: "specs",
    infobox: `
      <tr><th colspan="2" class="info-title">${esc(sp.nome)}</th></tr>
      ${sp.img ? `<tr><th colspan="2" class="info-img"><img src="${esc(sp.img)}" alt="${esc(sp.nome)}" loading="lazy"></th></tr>` : ""}
      <tr><th>Raridade</th><td>${esc(sp.raridade || "A confirmar")}</td></tr>
      ${sp.como ? `<tr><th>Como obter</th><td>${esc(sp.como)}</td></tr>` : ""}
      ${sp.forteContra ? `<tr><th>Forte contra</th><td>${esc(sp.forteContra)}</td></tr>` : ""}
      ${sp.fracoContra ? `<tr><th>Fraco contra</th><td>${esc(sp.fracoContra)}</td></tr>` : ""}`
  });

  document.getElementById("artigo-conteudo").innerHTML = `
    ${headerEntidade({ item: sp, selo: `Spec • ${sp.raridade || "A confirmar"}` })}

    <h2 id="sp1">Habilidades</h2>
    ${listaItens(sp.skills, sk => `<li>${esc(sk)}</li>`)}

    <h2 id="sp2">Como obter</h2>
    ${sp.como
      ? `<div class="como-obter"><div class="passo"><span class="passo-num">1</span><p>${esc(sp.como)}</p></div></div>`
      : `<p class="vazio">A confirmar.</p>`}

    ${(sp.forteContra || sp.fracoContra)
      ? `<blockquote><strong>Matchups:</strong> forte contra <em>${esc(sp.forteContra || "A confirmar")}</em> • fraco contra <em>${esc(sp.fracoContra || "A confirmar")}</em></blockquote>`
      : ""}`;

  montarToc();
}

function renderItem(it) {
  prepararPagina({
    titulo: it.nome, aba: "itens",
    infobox: `
      <tr><th colspan="2" class="info-title">${esc(it.nome)}</th></tr>
      ${it.img ? `<tr><th colspan="2" class="info-img"><img src="${esc(it.img)}" alt="${esc(it.nome)}" loading="lazy"></th></tr>` : ""}
      <tr><th>Raridade</th><td>${esc(it.raridade || "A confirmar")}</td></tr>
      ${it.preco ? `<tr><th>Como obter</th><td>${esc(it.preco)}</td></tr>` : ""}
      ${it.uso ? `<tr><th>Como usar</th><td>${esc(it.uso)}</td></tr>` : ""}`
  });

  document.getElementById("artigo-conteudo").innerHTML = `
    ${headerEntidade({ item: it, selo: `Item • ${it.raridade || "A confirmar"}` })}

    <h2 id="i1">Detalhes</h2>
    <p><strong>Como obter:</strong> ${esc(it.preco || "A confirmar")}</p>
    <p><strong>Como usar:</strong> ${esc(it.uso || "A confirmar")}</p>
    ${it.taxas && it.taxas !== "—" ? `<blockquote><strong>Taxas / chance:</strong> ${esc(it.taxas)}</blockquote>` : ""}`;

  montarToc();
}




// ============================================================
// Helpers
// ============================================================
function montarToc() {
  const toc = document.getElementById("toc-lista");
  if (!toc) return;
  toc.innerHTML = "";
  document.querySelectorAll("#artigo-conteudo h2").forEach(h2 => {
    if (!h2.id) return;
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${h2.id}">${esc(h2.textContent)}</a>`;
    toc.appendChild(li);
  });
  if (!toc.children.length) toc.parentElement.style.display = "none";
}

// ===== Seção de vídeos (placeholder compatível com dados existentes) =====
function secaoVideos(videos, skillsExplicacao, moveset, nomeStand) {
  if (!videos || !videos.length) return "";
  return `
    <h2 id="videos">Vídeos</h2>
    <div class="videos-grid">
      ${videos.map(v => `
        <div class="video-chip" title="${esc(v.titulo || "Vídeo")}">${esc(v.titulo || "Vídeo")}</div>
      `).join("")}
    </div>`;
}

// ===== Galeria oficial de imagens (placeholder) =====
function galeriaOficial(imgGaleria) {
  if (!imgGaleria || !imgGaleria.length) return "";
  return `
    <h2 id="galeria">Galeria</h2>
    <div class="galeria">
      ${imgGaleria.map(img => `<img src="${esc(img)}" alt="${esc(nomeStand)}" loading="lazy">`).join("")}
    </div>`;
}

// Página de conteúdo temático (guia, skins, paragons, SBR): título + abas + HTML pronto
function paginaTopica({ titulo, sub, aba, html, infobox = "" }) {
  prepararPagina({ titulo, sub, aba, infobox });
  document.getElementById("artigo-conteudo").innerHTML = html;
  montarToc();
}

// ============================================================
// LISTAS (abas)
// ============================================================
function paginaLista(tipo) {
  const cfg = {
    stands: { titulo: "Stands", sub: "Todos os Stands do YBA — clique para ver a página completa", dados: Object.entries(STANDS).map(([id, s]) => ({ id, ...s })) },
    bosses: { titulo: "Bosses", sub: "Todos os bosses, locais, drops e estratégias", dados: BOSSES.map(b => ({ id: b.id, ...b })) },
    specs:  { titulo: "Specs", sub: "Estilos de luta que complementam seu Stand", dados: SPECS.map(s => ({ id: s.id, ...s })) },
    itens:  { titulo: "Itens & Drops", sub: "Itens de progressão, raridades e taxas", dados: ITENS.map(i => ({ id: i.id, ...i })) }
  }[tipo];

  prepararPagina({ titulo: cfg.titulo, sub: cfg.sub, aba: tipo });

  const lista = document.getElementById("artigo-conteudo");
  lista.innerHTML = "";

  // ----- Filtros (busca local + tier + raridade) -----
  const barra = document.createElement("div");
  barra.className = "filtros";
  const busca = document.createElement("input");
  busca.type = "search";
  busca.placeholder = "Filtrar nesta lista...";
  busca.setAttribute("aria-label", "Filtrar nesta lista");
  barra.appendChild(busca);

  const ORDEM_TIER = ["S", "A", "B", "C", "D"];
  const selects = {};
  [["tier", "Tier"], ["raridade", "Raridade"]].forEach(([campo, rotulo]) => {
    let valores = [...new Set(cfg.dados.map(d => d[campo]).filter(Boolean))];
    if (valores.length < 2) return;
    if (campo === "tier") valores.sort((a, b) => ORDEM_TIER.indexOf(a[0]) - (a.includes("+") ? 0.5 : 0) - (ORDEM_TIER.indexOf(b[0]) - (b.includes("+") ? 0.5 : 0)));
    const sel = document.createElement("select");
    sel.setAttribute("aria-label", rotulo);
    sel.innerHTML = `<option value="">${rotulo}: todos</option>` + valores.map(v => `<option value="${esc(v)}">${esc(campo === "tier" ? "Tier " + v : v)}</option>`).join("");
    selects[campo] = sel;
    barra.appendChild(sel);
  });

  const contagem = document.createElement("span");
  contagem.className = "filtros-contagem";
  barra.appendChild(contagem);

  const grade = document.createElement("div");
  grade.className = "wiki-grid cards-lista";
  lista.append(barra, grade);

  function desenhar() {
    const termo = semAcento(busca.value.trim());
    const itens = cfg.dados
      .filter(d =>
        (!termo || semAcento(d.nome).includes(termo)) &&
        Object.entries(selects).every(([campo, sel]) => !sel.value || String(d[campo]) === sel.value))
      .sort((a, b) => semAcento(a.nome).localeCompare(semAcento(b.nome), "pt-BR"));
    grade.innerHTML = "";
    itens.forEach(d => grade.appendChild(criarCard(d, d.id)));
    if (!itens.length) grade.innerHTML = `<p class="cards-vazio">Nenhum resultado com esses filtros.</p>`;
    contagem.textContent = `${itens.length} de ${cfg.dados.length}`;
  }
  busca.addEventListener("input", desenhar);
  Object.values(selects).forEach(sel => sel.addEventListener("change", desenhar));
  desenhar();

  // Esconder sidebars vazias nas listas de categoria
  const toc = document.getElementById("toc-lista");
  const infobox = document.getElementById("infobox");
  if (toc && !toc.innerHTML.trim()) toc.parentElement.style.display = "none";
  if (infobox && !infobox.innerHTML.trim()) infobox.parentElement.style.display = "none";
}

function gerarPaginaSkins() {
  const j = SKINS_INFO;
  paginaTopica({
    titulo: "Skins de Stands",
    sub: "Como obter skins (shinies), pity, raridades e exemplos por Stand",
    aba: "skins",
    html: `
      <p>${esc(j.oque)}</p>
      <h2 id="sk1">Como conseguir uma skin</h2>
      <ul class="curiosidades">${j.formas.map(f => `<li><strong>${esc(f.titulo)}</strong> — ${esc(f.texto)}</li>`).join("")}</ul>
      <h2 id="sk2">Pity System</h2>
      <blockquote>${esc(j.pity)}</blockquote>
      <h2 id="sk3">Raridades de skin</h2>
      <ul class="curiosidades">${j.raridades.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      <h2 id="sk4">Exemplos por Stand</h2>
      <ul class="curiosidades">${j.exemplos.map(e => `<li><strong>${esc(e.stand)}</strong>: ${esc(e.skins)}</li>`).join("")}</ul>
      <p class="cards-vazio">Fonte: página Skins da wiki Fandom.</p>`
  });
}

function gerarPaginaParagons() {
  const j = PARAGONS_INFO;
  paginaTopica({
    titulo: "Paragons",
    sub: "Paragon skins obtíveis × Stands custom dos desenvolvedores",
    aba: "skins",
    html: `
      <p>${esc(j.oque)}</p>
      <blockquote>${esc(j.nota)}</blockquote>
      <h2 id="pg1">Skins paragon obtíveis</h2>
      <ul class="curiosidades">${j.itens.map(i => `<li><strong>${esc(i.nome)}</strong> — ${esc(i.como)}</li>`).join("")}</ul>
      <h2 id="pg2">Stands custom (não obtíveis)</h2>
      <ul class="curiosidades">${j.customs.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`
  });
}

function gerarPaginaSBR() {
  const j = SBR_INFO;
  paginaTopica({
    titulo: "Steel Ball Run (Metal Ball Run)",
    sub: "O modo de jogo, as Saint's Corpse Parts, casual × ranqueada e os NPCs envolvidos",
    aba: "sbr",
    html: `
      <p>${esc(j.oque)}</p>
      <h2 id="sbr1">Regras do modo</h2>
      <ul class="curiosidades">${j.regras.map(r => `<li><strong>${esc(r.titulo)}</strong> — ${esc(r.texto)}</li>`).join("")}</ul>
      <h2 id="sbr2">Casual × Ranqueada</h2>
      <ul class="curiosidades">${j.casualVsRank.map(r => `<li><strong>${esc(r.titulo)}</strong> — ${esc(r.texto)}</li>`).join("")}</ul>
      <h2 id="sbr3">Saint's Corpse Parts</h2>
      <ul class="curiosidades">${j.corpseParts.map(p => `<li><strong>${esc(p.nome)}</strong> — ${esc(p.uso)}</li>`).join("")}</ul>
      <h2 id="sbr4">NPCs e quests ligados</h2>
      <ul class="curiosidades">${j.npcs.map(n => `<li><strong>${esc(n.nome)}</strong> — ${esc(n.papel)}</li>`).join("")}</ul>
      <h2 id="sbr5">Mapa da corrida</h2>
      <ul class="curiosidades">${j.mapa.map(m => `<li>${esc(m)}</li>`).join("")}</ul>
      <p class="cards-vazio">Fonte: páginas Steel Ball Run, Saint's Corpse Parts e Jesus (NPC) da wiki Fandom.</p>`
  });
}

// ============================================================
// GUIA DO JOGO
// ============================================================
function gerarPaginaGuia() {
  const j = INFO_JOGO;
  paginaTopica({
    titulo: "Guia do Jogo",
    sub: "Tudo o que você precisa saber para começar em YBA",
    aba: "guia",
    html: `
    <p>${esc(j.oque)}</p>
    <h2 id="g1">Mecânicas principais</h2>
    ${j.mecanicas.map(m => `<h3 class="guia-sub">${esc(m.titulo)}</h3><p>${esc(m.texto)}</p>`).join("")}
    <h2 id="g2">Roteiro de progressão</h2>
    <div class="como-obter">
      ${j.progressao.map((p, i) => `<div class="passo"><span class="passo-num">${i + 1}</span><p>${esc(p)}</p></div>`).join("")}
    </div>
    <h2 id="g3">Continue explorando</h2>
    <div class="abas-nav abas-inline">
      <a href="article.html?page=stands" class="aba">Stands</a>
      <a href="article.html?page=specs" class="aba">Specs</a>
      <a href="article.html?page=bosses" class="aba">Bosses</a>
      <a href="article.html?page=itens" class="aba">Itens &amp; Drops</a>
      <a href="article.html?page=sbr" class="aba">Steel Ball Run</a>
    </div>`
  });
}


