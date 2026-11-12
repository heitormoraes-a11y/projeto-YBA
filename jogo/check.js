const base = "C:/Users/heitor_moraes/Documents/projeto-YBA-main/jogo/js/";
for (const f of ["stands", "specs", "bosses", "itens", "dados"]) {
  try {
    const src = require("fs").readFileSync(base + f + ".js", "utf8");
    new Function(src)();
    console.log(f, "OK");
  } catch (e) {
    console.log(f, "ERRO:", e.message.slice(0, 200));
  }
}
