// ===== Página inicial — Your Bizarre Adventure Wiki =====

// Destaque que muda todo dia: índice determinístico a partir da data.
function indiceDoDia(total) {
  const hoje = new Date();
  const semente = hoje.getFullYear() * 366 + (hoje.getMonth() + 1) * 31 + hoje.getDate();
  return semente % total;
}

// ===== Animador de contador: conta de 0 até o valor com requestAnimationFrame =====
function animarContador(el, destino) {
  const duracao = 1100;
  const inicio = performance.now();
  function frame(tempo) {
    const progresso = Math.min((tempo - inicio) / duracao, 1);
    const valor = Math.floor(progresso * destino);
    el.textContent = valor;
    if (progresso < 1) requestAnimationFrame(frame);
    else el.textContent = destino;
  }
  requestAnimationFrame(frame);
}

// ===== Stands em destaque + contador animado =====
const grid = document.getElementById("wiki-grid");
if (grid) {
  const ids = Object.keys(STANDS);
  const inicio = indiceDoDia(ids.length);
  for (let i = 0; i < 8; i++) {
    const id = ids[(inicio + i) % ids.length];
    const card = criarCard(STANDS[id], id, i);
    card.style.animationDelay = (i * 0.06) + "s";
    grid.appendChild(card);
  }

  const total = ids.length + BOSSES.length + SPECS.length + ITENS.length + 4;
  const contador = document.getElementById("contador");
  if (contador) {
    contador.textContent = "0";
    animarContador(contador, total);
  }
}