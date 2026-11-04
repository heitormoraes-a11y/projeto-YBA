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
  ...Object.fromEntries(Object.keys(STANDS).map(id => [id, () => renderStand(STANDS[id], id)])),
  ...Object.fromEntries(BOSSES.map(b => [b.id, () => renderBoss(b)])),
  ...Object.fromEntries(SPECS.map(s => [s.id, () => renderSpec(s)])),
  ...Object.fromEntries(ITENS.map(i => [i.id, () => renderItem(i)]))
};

if (ROTEADOR[page]) {
  ROTEADOR[page]();
} else {
  document.getElementById("artigo-titulo").textContent = "Página não encontrada";
  document.getElementById("artigo-conteudo").innerHTML =
    `<p>Essa página ainda não existe na wiki.</p>
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
    { id: "guia", nome: "Guia" }
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
  if (nomeEntidade) div.innerHTML += `<span class="aba aba-crumb">${nomeEntidade}</span>`;
  document.querySelector(".article-header").prepend(div);
}

// ============================================================
// GALERIA OFICIAL (imagens da wiki, estáticas — sem upload)
// ============================================================
function galeriaOficial(galeria) {
  if (!galeria || !galeria.length) return "";
  return `
    <h2 id="x-galeria">Galeria</h2>
    <div class="galeria-oficial">
      ${galeria.map(g => `
        <figure class="galeria-item">
          <img src="${g.src}" alt="${g.legenda}" loading="lazy">
          <figcaption>${g.legenda}</figcaption>
        </figure>`).join("")}
    </div>`;
}

// ============================================================
// VÍDEOS DE SKILLS + EXPLICAÇÃO (definidos no dados.js pelo dono)
// ============================================================
function secaoVideos(videos, skillsExplicacao, moveset, standNome) {
  // Vídeos: os IDs antigos eram inválidos e o embed de busca do YouTube foi descontinuado.
  // Agora cada bloco é um link que abre a busca no YouTube em nova aba (sem "indisponível").
  const titulos = (videos && videos.length)
    ? videos.map(v => v.titulo)
    : ["Showcase de " + standNome + " (YBA)"];
  const lista = titulos.map(t => ({ titulo: t }));
  return `
    <h2 id="x-videos">Vídeos de skills</h2>
    <div class="skills-media">
      ${lista.map(v => {
        let texto = null;
        const ex = (skillsExplicacao || []).find(e =>
          v.titulo.toLowerCase().includes(e.nome.replace(/\s*\(.*\)/, "").toLowerCase().trim())
        );
        if (ex) texto = ex.texto;
        if (!texto && moveset) {
          const chave = v.titulo.replace(/\s*\(.*\)/, "").toLowerCase().trim().split(" ")[0];
          const linha = (moveset || []).find(m => m.toLowerCase().includes(chave));
          if (linha) texto = linha.replace(/^[^-]+—\s*/, "").replace(/\s*\([^)]*\)/, "");
        }
        const query = encodeURIComponent((standNome + " " + v.titulo + " YBA").trim());
        const url = `https://www.youtube.com/results?search_query=${query}`;
        return `
          <div class="skill-video-bloco">
            <a class="video-link" href="${url}" target="_blank" rel="noopener noreferrer" title="Abrir busca no YouTube">
              <div class="video-frame video-frame-link">
                <div class="video-play">▶</div>
                <span class="video-link-text">Assistir no YouTube</span>
              </div>
            </a>
            <h3 class="skill-video-titulo">${v.titulo}</h3>
            <p class="skill-video-exp">${texto || "Demonstração da skill em jogo. A explicação detalhada está no moveset acima."}</p>
          </div>`;
      }).join("")}
    </div>`;
}

// ============================================================
// PÁGINA DE STAND
// ============================================================
function renderStand(s, id) {
  document.title = `${s.nome} - YBA Wiki`;
  document.getElementById("artigo-titulo").textContent = s.nome;
  montarAbas("stands");

  document.getElementById("infobox").innerHTML = `
    <tr><th colspan="2" class="info-title">${s.nome}</th></tr>
    <tr><th colspan="2" class="info-sub">Raridade: <strong>${s.raridade}</strong> • Tier: <strong>${s.tier}</strong></th></tr>
    <tr><th colspan="2" class="info-img"><img src="${s.img}" alt="${s.nome}" loading="lazy"></th></tr>
    ${Object.entries(s.stats || {}).map(([k, v]) => `<tr><th>${k}</th><td><strong style="color:var(--accent)">${v}</strong></td></tr>`).join("")}
    ${s.usuario ? `<tr><th>Usuário</th><td>${s.usuario}</td></tr>` : ""}
    ${s.tipo ? `<tr><th>Tipo</th><td>${s.tipo}</td></tr>` : ""}
    ${s.anime ? `<tr><th>Anime</th><td>${s.anime}</td></tr>` : ""}`;

  document.getElementById("artigo-conteudo").innerHTML = `
    <div class="stand-header" style="background: linear-gradient(135deg, ${s.cor}, #1a1526);">
      <img class="stand-header-img" src="${s.img}" alt="${s.nome}" loading="lazy">
      <div>
        <div class="stand-raridade">${s.raridade} • Tier ${s.tier}</div>
        <p>${s.descricao}</p>
      </div>
    </div>

    <h2 id="s-move">Moveset</h2>
    <ul class="curiosidades">${(s.moveset || []).map(m => `<li>${m}</li>`).join("")}</ul>

    <h2 id="s-skill">Como cada skill funciona</h2>
    <div class="skills-exp">
      ${(s.skillsExplicacao || []).map(e => `
        <div class="skill-exp-item">
          <h3>${e.nome}</h3>
          <p>${e.texto}</p>
        </div>`).join("")}
      ${(s.moveset || [])
        .filter(m => !(s.skillsExplicacao || []).some(e => m.toLowerCase().startsWith(e.nome.toLowerCase().split("(")[0].trim())))
        .map(m => {
          const nome = m.split(" — ")[0];
          const texto = m.split(" — ").slice(1).join(" — ");
          return `
        <div class="skill-exp-item">
          <h3>${nome}</h3>
          <p>${texto || "Ataque do moveset do Stand. Veja o vídeo de skill correspondente para a demonstração em jogo."}</p>
        </div>`;
        }).join("")}
    </div>

    ${secaoVideos(s.videos, s.skillsExplicacao, s.moveset, s.nome)}

    <h2 id="s-como">Como obter</h2>
    <div class="como-obter">
      ${s.comoObter.map((p, i) => `<div class="passo"><span class="passo-num">${i + 1}</span><p>${p}</p></div>`).join("")}
    </div>

    ${galeriaOficial(s.imgGaleria)}

    <h2 id="s-curio">Curiosidades</h2>
    <ul class="curiosidades">${(s.curiosidades || []).map(c => `<li>${c}</li>`).join("")}</ul>
  `;

  montarToc();
}

// ============================================================
// PÁGINA DE BOSS
// ============================================================
function renderBoss(b) {
  document.title = `${b.nome} - YBA Wiki`;
  document.getElementById("artigo-titulo").textContent = b.nome;
  montarAbas("bosses");
  document.getElementById("infobox").innerHTML = `
    <tr><th colspan="2" class="info-title">${b.nome}</th></tr>
    <tr><th colspan="2" class="info-img"><img src="${b.img}" alt="${b.nome}" loading="lazy"></th></tr>
    <tr><th>Dificuldade</th><td>${"★".repeat(b.dificuldade)}${"☆".repeat(5 - b.dificuldade)}</td></tr>
    <tr><th>Localização</th><td>${b.local}</td></tr>
    <tr><th>Respawn</th><td>${b.resp}</td></tr>
    <tr><th>Vida</th><td>${b.hp}</td></tr>
    <tr><th>XP</th><td>${b.xp}</td></tr>
    <tr><th>Drops</th><td>${b.drops.join(", ")}</td></tr>`;

  document.getElementById("artigo-conteudo").innerHTML = `
    <div class="stand-header" style="background: linear-gradient(135deg, ${b.cor}, #1a1526);">
      <img class="stand-header-img" src="${b.img}" alt="${b.nome}" loading="lazy">
      <div>
        <div class="stand-raridade">Boss • Dificuldade ${"★".repeat(b.dificuldade)}</div>
        <p>${b.desc}</p>
      </div>
    </div>

    <h2 id="b1">Informações da luta</h2>
    <p><strong>Onde encontrar:</strong> ${b.local}</p>
    <p><strong>Respawn:</strong> ${b.resp} após ser derrotado.</p>
    <p><strong>Vida:</strong> ${b.hp} • <strong>XP:</strong> ${b.xp}</p>

    <h2 id="b2">Drops</h2>
    <div class="boss-drops">${b.drops.map(d => `<span class="drop-tag">${d}</span>`).join("")}</div>

    <blockquote><strong>Dica da comunidade:</strong> ${b.dica}</blockquote>`;

  montarToc();
}

// ============================================================
// PÁGINA DE SPEC
// ============================================================
function renderSpec(sp) {
  document.title = `${sp.nome} - YBA Wiki`;
  document.getElementById("artigo-titulo").textContent = sp.nome;
  montarAbas("specs");
  document.getElementById("infobox").innerHTML = `
    <tr><th colspan="2" class="info-title">${sp.nome}</th></tr>
    <tr><th colspan="2" class="info-img"><img src="${sp.img || ""}" alt="${sp.nome}" loading="lazy"></th></tr>
    <tr><th>Raridade</th><td>${sp.raridade}</td></tr>
    <tr><th>Como obter</th><td>${sp.como}</td></tr>
    <tr><th>Forte contra</th><td>${sp.forteContra}</td></tr>
    <tr><th>Fraco contra</th><td>${sp.fracoContra}</td></tr>`;

  document.getElementById("artigo-conteudo").innerHTML = `
    <div class="stand-header" style="background: linear-gradient(135deg, ${sp.cor}, #1a1526);">
      <img class="stand-header-img" src="${sp.img || ""}" alt="${sp.nome}" loading="lazy">
      <div>
        <div class="stand-raridade">Spec • ${sp.raridade}</div>
        <p>${sp.desc}</p>
      </div>
    </div>

    <h2 id="sp1">Habilidades</h2>
    <ul class="curiosidades">${sp.skills.map(sk => `<li>${sk}</li>`).join("")}</ul>

    <h2 id="sp2">Como obter</h2>
    <div class="como-obter">
      <div class="passo"><span class="passo-num">1</span><p>${sp.como}</p></div>
    </div>

    <blockquote><strong>Matchups:</strong> forte contra <em>${sp.forteContra}</em> • fraco contra <em>${sp.fracoContra}</em></blockquote>`;

  montarToc();
}

// ============================================================
// PÁGINA DE ITEM
// ============================================================
function renderItem(it) {
  document.title = `${it.nome} - YBA Wiki`;
  document.getElementById("artigo-titulo").textContent = it.nome;
  montarAbas("itens");
  document.getElementById("infobox").innerHTML = `
    <tr><th colspan="2" class="info-title">${it.nome}</th></tr>
    <tr><th colspan="2" class="info-img"><img src="${it.img || ""}" alt="${it.nome}" loading="lazy"></th></tr>
    <tr><th>Raridade</th><td>${it.raridade}</td></tr>
    <tr><th>Como obter</th><td>${it.preco}</td></tr>
    <tr><th>Como usar</th><td>${it.uso}</td></tr>`;

  document.getElementById("artigo-conteudo").innerHTML = `
    <div class="stand-header" style="background: linear-gradient(135deg, ${it.cor}, #1a1526);">
      <img class="stand-header-img" src="${it.img || ""}" alt="${it.nome}" loading="lazy">
      <div>
        <div class="stand-raridade">Item • ${it.raridade}</div>
        <p>${it.desc}</p>
      </div>
    </div>

    <h2 id="i1">Detalhes</h2>
    <p><strong>Como obter:</strong> ${it.preco}</p>
    <p><strong>Como usar:</strong> ${it.uso}</p>
    ${it.taxas && it.taxas !== "—" ? `<blockquote><strong>Taxas / chance:</strong> ${it.taxas}</blockquote>` : ""}`;

  montarToc();
}

// ============================================================
// Helpers
// ============================================================
function montarToc() {
  const toc = document.getElementById("toc-lista");
  toc.innerHTML = "";
  document.querySelectorAll("#artigo-conteudo h2").forEach(h2 => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${h2.id}">${h2.textContent}</a>`;
    toc.appendChild(li);
  });
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

  document.title = `${cfg.titulo} - YBA Wiki`;
  document.getElementById("artigo-titulo").textContent = cfg.titulo;
  document.querySelector(".artigo-sub").textContent = cfg.sub;
  document.getElementById("infobox").innerHTML = "";
  montarAbas(tipo);

  const lista = document.getElementById("artigo-conteudo");
  lista.innerHTML = "";
  cfg.dados.forEach(d => {
    const row = document.createElement("a");
    row.href = `article.html?page=${d.id}`;
    row.className = "wiki-card lista-row";
    row.innerHTML = `
      <div class="lista-row-img">
        <img src="${d.img || ""}" alt="${d.nome}" loading="lazy">
      </div>
      <div class="lista-row-body">
        <h3>${d.nome}</h3>
        <p>${d.descricao || d.desc}</p>
        ${d.raridade ? `<span class="wiki-card-badge">${d.raridade}</span>` : ""}
        ${d.dificuldade ? `<span class="wiki-card-badge">Dificuldade ${"★".repeat(d.dificuldade)}</span>` : ""}
        ${d.tier ? `<span class="wiki-card-badge">Tier ${d.tier}</span>` : ""}
      </div>`;
    lista.appendChild(row);
  });
}

// ============================================================
// GUIA DO JOGO
// ============================================================
function gerarPaginaGuia() {
  const j = INFO_JOGO;
  document.title = "Guia do Jogo - YBA Wiki";
  document.getElementById("artigo-titulo").textContent = "Guia do Jogo";
  document.querySelector(".artigo-sub").textContent = "Tudo o que você precisa saber para começar em YBA";
  document.getElementById("infobox").innerHTML = "";
  montarAbas("guia");

  document.getElementById("artigo-conteudo").innerHTML = `
    <p>${j.oque}</p>
    <h2 id="g1">Mecânicas principais</h2>
    ${j.mecanicas.map(m => `<h3 class="guia-sub">${m.titulo}</h3><p>${m.texto}</p>`).join("")}
    <h2 id="g2">Roteiro de progressão</h2>
    <div class="como-obter">
      ${j.progressao.map((p, i) => `<div class="passo"><span class="passo-num">${i + 1}</span><p>${p}</p></div>`).join("")}
    </div>`;
}
