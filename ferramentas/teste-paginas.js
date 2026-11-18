// Teste rápido das páginas (HTML + JS reais) em jsdom.
// Uso: node ferramentas/teste-paginas.js
const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const RAIZ = path.join(__dirname, "..", "jogo");
let falhas = 0;

function carregar(arquivoHtml, query) {
  const html = fs.readFileSync(path.join(RAIZ, arquivoHtml), "utf8");
  const erros = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", e => erros.push(e.message));
  vc.on("error", (...a) => erros.push(a.join(" ")));
  const dom = new JSDOM(html, {
    url: "file:///" + path.join(RAIZ, arquivoHtml).replace(/\\/g, "/") + (query || ""),
    runScripts: "outside-only",
    virtualConsole: vc,
    pretendToBeVisual: true
  });
  const w = dom.window;
  w.scrollTo = () => {};
  const nomes = ["stands", "specs", "bosses", "itens", "dados", "comum", arquivoHtml === "article.html" ? "artigo" : "script"];
  const tudo = nomes.map(n => fs.readFileSync(path.join(RAIZ, "js", n + ".js"), "utf8")).join("\n;\n");
  const errosEval = [];
  try {
    w.eval(tudo);
  } catch (e) {
    errosEval.push("scripts: " + e.message);
  }
  return { dom, w, erros: erros.concat(errosEval), doc: w.document };
}

function checar(rotulo, cond, detalhe) {
  if (!cond) { falhas++; console.log(`  FALHOU  ${rotulo}${detalhe ? " — " + detalhe : ""}`); }
}

// ---------- Página inicial ----------
{
  const { doc, erros } = carregar("index.html");
  console.log("index.html");
  checar("sem erros de script", erros.length === 0, erros.join(" | "));
  checar("cards de stands", doc.querySelectorAll("#wiki-grid .wiki-card").length === 8);
  checar("cards de categoria", doc.querySelectorAll("#categorias-grid .cat-card").length === 7);
  checar("contador preenchido", doc.getElementById("contador").textContent !== "0");
  checar("boss em destaque", !!doc.querySelector("#destaque-boss .boss-card"));
  checar("mudanças recentes", doc.querySelectorAll("#mudancas-lista li").length > 0);
  checar("nenhum href='#' no menu", doc.querySelectorAll("nav a[href='#']").length === 0);
}

// ---------- Todas as páginas do roteador ----------
const { w: base } = carregar("index.html");
const ids = [
  "stands", "specs", "bosses", "itens", "guia", "skins", "paragons", "sbr",
  ...Object.keys(base.STANDS),
  ...base.BOSSES.map(b => b.id),
  ...base.SPECS.map(s => s.id),
  ...base.ITENS.map(i => i.id)
];
console.log(`\narticle.html?page=... (${ids.length} páginas)`);
const vistas = new Set();
for (const id of ids) {
  if (vistas.has(id)) { falhas++; console.log(`  FALHOU  id duplicado: ${id}`); }
  vistas.add(id);
  const { doc, erros } = carregar("article.html", "?page=" + id);
  checar(id + ": sem erros", erros.length === 0, erros.join(" | "));
  checar(id + ": título", doc.getElementById("artigo-titulo").textContent.trim().length > 0);
  checar(id + ": conteúdo", doc.getElementById("artigo-conteudo").innerHTML.trim().length > 50);
  checar(id + ": título do documento", doc.title !== "YBA Wiki" || id === "");
  const tocLinks = [...doc.querySelectorAll("#toc-lista a")].map(a => a.getAttribute("href"));
  checar(id + ": índice aponta para seções existentes", tocLinks.every(h => doc.querySelector(h)));
  checar(id + ": imagens com alt", [...doc.images].every(i => i.hasAttribute("alt")));
  const links = [...doc.querySelectorAll("#artigo-conteudo a[href*='page=']")].map(a => decodeURIComponent(a.getAttribute("href").split("page=")[1]));
  checar(id + ": links internos válidos", links.every(l => vistas.has(l) || ids.includes(l)), links.filter(l => !(vistas.has(l) || ids.includes(l))).join(","));
}

// ---------- Página inexistente ----------
{
  const { doc, erros } = carregar("article.html", "?page=nao-existe");
  console.log("\narticle.html?page=nao-existe");
  checar("sem erros de script", erros.length === 0, erros.join(" | "));
  checar("mostra 'Página não encontrada'", doc.getElementById("artigo-titulo").textContent.includes("não encontrada"));
}

// ---------- Busca ----------
{
  const { w, doc } = carregar("index.html");
  const p = q => w.procurar(q).map(r => r.id);
  console.log("\nbusca");
  checar("acento: 'chariot'", p("chariot").includes("chariot"));
  checar("maiúsculas/minúsculas: 'STAR PLATINUM'", p("STAR PLATINUM").includes("starplatinum"));
  checar("acento no nome: 'experiencia'", p("experiencia").some(x => x === "gel" || x === "ger"));
  checar("sigla: 'd4c' acha mais de um", p("d4c").length >= 1);
  checar("sem duplicatas", new Set(p("a")).size === p("a").length);
  checar("'zzzz' vazio", p("zzzz").length === 0);
  const input = doc.getElementById("search-input");
  input.value = "killer";
  w.mostrarResultados();
  checar("dropdown abre", !doc.getElementById("search-results").hidden);
  checar("dropdown tem itens", doc.querySelectorAll("#search-results a").length > 0);
}

// ---------- Imagens referenciadas nos dados ----------
{
  console.log("\nimagens");
  const { w } = carregar("index.html");
  const refs = [
    ...Object.entries(w.STANDS).map(([id, s]) => [id, s.img]),
    ...w.SPECS.map(s => [s.id, s.img]),
    ...w.BOSSES.map(b => [b.id, b.img]),
    ...w.ITENS.map(i => [i.id, i.img])
  ].filter(([, img]) => img);
  const ausentes = refs.filter(([, img]) => !fs.existsSync(path.join(RAIZ, img)));
  checar("todas as imagens existem", ausentes.length === 0, ausentes.map(a => a.join(": ")).join(" | "));
  console.log(`  ${refs.length} imagens referenciadas, ${ausentes.length} ausentes`);
}

console.log(falhas ? `\n${falhas} falha(s)` : "\nTudo passou");
process.exit(falhas ? 1 : 0);
