// ===== Fundo interativo: gotas "ゴゴゴ" que reagem ao mouse =====
(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "bg-canvas";
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let W, H;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const mouse = { x: -999, y: -999 };
  window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseleave", () => { mouse.x = -999; mouse.y = -999; });

  // Partículas "ゴ" flutuantes
  const NUM = Math.min(28, Math.floor(window.innerWidth / 50));
  const drops = [];
  for (let i = 0; i < NUM; i++) {
    drops.push({
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      vy: 0.3 + Math.random() * 0.6,           // velocidade de queda
      size: 20 + Math.random() * 30,           // tamanho do glifo
      alpha: 0.04 + Math.random() * 0.08,      // transparência
      vx: 0, vy2: 0                            // repulsão do mouse
    });
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    ctx.font = '900 28px "Segoe UI", sans-serif';
    ctx.textBaseline = "middle";

    for (const d of drops) {
      // repulsão suave do mouse
      const dx = d.x - mouse.x, dy = d.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 140 && dist > 0) {
        const forca = (140 - dist) / 140;
        d.vx += (dx / dist) * forca * 2.2;
        d.vy2 += (dy / dist) * forca * 2.2;
      }
      // atrito
      d.vx *= 0.92; d.vy2 *= 0.92;
      d.x += d.vx;
      d.y += d.vy + d.vy2;

      // reset quando sai da tela
      if (d.y > H + 60) { d.y = -60; d.x = Math.random() * W; }
      if (d.x < -60) d.x = W + 60;
      if (d.x > W + 60) d.x = -60;

      ctx.fillStyle = `rgba(255,255,255,${d.alpha})`;
      ctx.font = `900 ${d.size}px "Segoe UI", sans-serif`;
      ctx.fillText("ゴ", d.x, d.y);
    }
    requestAnimationFrame(tick);
  }
  tick();
})();
