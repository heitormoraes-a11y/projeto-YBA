const STANDS = {
  // ==================== LENDÁRIOS / MÍTICOS ====================
  starplatinum: {
  nome: "Star Platinum", cor: "#6b3fa0", raridade: "Lendário", tier: "S",
  usuario: "Jotaro Kujo", tipo: "Stand de curto alcance", anime: "Stardust Crusaders (Parte 3)",
  stats: S("A", "A", "C", "A", "A", "A"),
  img: "img/stands/starplatinum.png",
  descricao: "O Stand do Jotaro Kujo. Força brutal, precisão absoluta e Time Stop.",
  moveset: [
  "ORA Punch (M1 carregado) — soco forte de dano alto, ótimo para abrir combos",
  "ORA Barrage (E) — barragem de socos rápidos com dano por segundo excelente",
  "Star Finger (R) — ataque de médio alcance que empurra o oponente",
  "Stand Jump (T) — mobilidade para fechar distância ou fugir",
  "ORA Kick (F) — finalizador com knockback enorme",
  "Time Stop (Z) — congela o tempo por ~3 segundos"
  ],
  combos: [
  "ORA Punch → Barrage → Star Finger → ORA Kick",
  "Stand Jump → ORA Punch aéreo → Barrage no chão",
  "Time Stop → 3x ORA Punch → ORA Kick full charge (finalizador)"
  ],
  dica: "Guarde o Time Stop para o finalizador: 3 ORA Punches + ORA Kick full charge dentro do tempo parado quase sempre é lethal.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Use uma <strong>Mysterious Arrow</strong> — chance de <strong>2,5%</strong> (fonte: wiki Fandom).",
  "Também pode vir de <strong>Rokakaka</strong> ou trade com outros jogadores.",
  "Evolua para <strong>Star Platinum: The World</strong> com o Diário de DIO.",
  "Desbloqueie o <strong>Time Stop</strong> comprando o node na árvore de skills (nível 35+)."
  ],
  curiosidades: [
  "No anime, o Time Stop do Jotaro dura 5 segundos — no YBA é balanceado para ~3s.",
  "Os creepers... digo: o grito 'ORA ORA' é o grito de guerra mais icônico de JoJo."
  ]
  },

  sptw: {
  nome: "Star Platinum: The World", cor: "#7a4fc0", raridade: "Lendário", tier: "S+",
  usuario: "Jotaro Kujo", tipo: "Stand evoluído (curto alcance)", anime: "Stardust Crusaders (Parte 3)",
  stats: S("A+", "A+", "C", "A+", "A+", "A"),
  img: "img/stands/sptw.png",
  descricao: "A evolução do Star Platinum com o poder do tempo do The World.",
  moveset: [
  "ORA Barrage (E) — barragem ainda mais rápida que a original",
  "Star Finger (R) — mesmo ataque, dano aumentado",
  "Time Stop (Z) — parada do tempo de ~5 segundos",
  "ORA Kick (F) — finalizador pesado",
  "Platinum Vortex (X) — giro devastador em área"
  ],
  combos: [
  "Time Stop → Barrage completa → ORA Kick",
  "Platinum Vortex → Star Finger → Barrage"
  ],
  dica: "Com 5 segundos de Time Stop você consegue soltar a barrage inteira duas vezes. Treine o timing do cancel.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Tenha o <strong>Star Platinum</strong> equipado.",
  "Consiga o <strong>Diário de DIO</strong> (drop do boss DIO).",
  "Use o diário — a evolução é garantida."
  ],
  curiosidades: ["No anime, Jotaro desenvolve o Time Stop por ser do mesmo 'tipo' de Stand que o The World."]
  },

  theworld: {
  nome: "The World", cor: "#c9a227", raridade: "Lendário", tier: "S",
  usuario: "DIO", tipo: "Stand de curto alcance", anime: "Stardust Crusaders (Parte 3)",
  stats: S("A", "A", "C", "B", "B", "A"),
  img: "img/stands/theworld.png",
  descricao: "O Stand do DIO. Domine o tempo e vença antes da luta começar.",
  moveset: [
  "MUDA Barrage (E) — barragem de socos padrão",
  "Knife Throw (R) — arremessa facas; congelam no ar durante o Time Stop",
  "Time Stop (Z) — para o tempo por até 5s com vida cheia",
  "Road Roller (F) — derruba uma máquina de construção durante o Time Stop",
  "Vampiric Drain (passiva) — drena vida ao acertar golpes"
  ],
  combos: [
  "Knife Throw → Time Stop (knife cancel) → Road Roller",
  "MUDA Barrage → Stand Jump → Knife no ar"
  ],
  dica: "Jogue as facas ANTES do Time Stop — quando o tempo volta, todas acertam de uma vez. O clássico 'knife cancel'.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom).",
  "Pode vir de <strong>trade</strong> (um dos mais valiosos do mercado).",
  "Serve de base para o <strong>Shadow The World</strong> (quest com a Bandana do DIO) e para o <strong>The World Over Heaven</strong> (quest do Diário de DIO)."
  ],
  curiosidades: [
  "No anime, a duração do Time Stop de DIO cresce de ~5s até 9s.",
  "O The World Requiem altera completamente o moveset."
  ]
  },

  twhv: {
  nome: "The World High Voltage", cor: "#e0b420", raridade: "Lendário", tier: "S+",
  usuario: "DIO", tipo: "Stand evoluído", anime: "Stardust Crusaders / Eyes of Heaven",
  stats: S("A+", "A+", "C", "A", "A", "A+"),
    img: "img/stands/theworld.png",
  descricao: "O The World no auge do poder de DIO, com Time Stop estendido.",
  moveset: [
  "MUDA Barrage (E) — barragem acelerada",
  "Knife Storm (R) — chuva de facas em leque",
  "Time Stop (Z) — parada do tempo estendida (~8s)",
  "Road Roller da (F) — versão melhorada com combo aéreo",
  "Kick Barrage (X) — chutes em sequência"
  ],
  combos: ["Knife Storm → Time Stop → Road Roller", "Kick Barrage → MUDA Barrage → Knife Storm"],
  dica: "Com ~8s de Time Stop, o combo facas + Road Roller é praticamente letal garantido.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha <strong>The World</strong> equipado.", "Use o <strong>Diário de DIO</strong> (drop do boss DIO)."],
  curiosidades: ["A skin 'High Voltage' vem de Eyes of Heaven, onde DIO derrota o Jotaro."]
  },

  twau: {
  nome: "The World (Alternate Universe)", cor: "#8a7a3a", raridade: "Raro", tier: "S",
  usuario: "DIO (Universo Alternativo)", tipo: "Stand de curto alcance", anime: "Steel Ball Run (Parte 7)",
  stats: S("A", "A", "C", "B", "B", "B"),
  img: "img/stands/twau.png",
  descricao: "A versão do The World do universo de Steel Ball Run.",
  moveset: [
  "MUDA Barrage (E) — barragem padrão",
  "Knife Throw (R) — facas com arco diferente",
  "Time Stop (Z) — parada de tempo mais curta",
  "Alternate Kick (F) — chute giratório"
  ],
  combos: ["Knife Throw → Time Stop → Alternate Kick"],
  dica: "O Time Stop mais curto pune menos, mas recarrega mais rápido — jogue agressivo.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>20%</strong> na roleta da <strong>Rib Cage of the Saint's Corpse</strong> (fonte: wiki Fandom).", "Também via trade ou Rokakaka."],
  curiosidades: ["No mangá de Steel Ball Run, o DIO alternativo é chamado de 'Dio Brando'."]
  },

  ger: {
  nome: "Gold Experience Requiem", cor: "#d4a017", raridade: "Mítico", tier: "S+",
  usuario: "Giorno Giovanna", tipo: "Stand Requiem", anime: "Golden Wind (Parte 5)",
  stats: S("∞", "A", "C", "A", "A", "∞"),
  img: "img/stands/ger.png",
  descricao: "O Stand definitivo. Retorne tudo ao zero.",
  moveset: [
  "MUDA Barrage (E) — barragem com cura própria ao acertar",
  "Life Beam (R) — projétil de energia vital de longa distância",
  "LifeShot (T) — plantas rastreadas que perseguem o inimigo",
  "Return to Zero (Z) — anula o último ataque e o estado do oponente",
  "Passiva — imunidade a Time Stop e Time Erase"
  ],
  combos: ["LifeShot → Life Beam → MUDA Barrage", "Return to Zero (counter de Time Stop) → barrage completa"],
  dica: "O Return to Zero cancela até a parada do tempo do The World. Guarde-o para punir time stoppers.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Tenha o <strong>Gold Experience</strong> equipado.",
  "Consiga a <strong>Flecha Requiem</strong> (drop raro do DIO ou craft).",
  "Use a flecha — <strong>há chance de falha</strong> que destrói o Stand."
  ],
  curiosidades: [
  "O sonho de consumo nº1 do mercado de trades do YBA.",
  "No anime, derrotou Diavolo com o famoso 'seu fim é... nada'."
  ]
  },

  geb: {
  nome: "Gold Experience", cor: "#e8c547", raridade: "Raro", tier: "A",
  usuario: "Giorno Giovanna", tipo: "Stand de curto alcance", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "C", "B", "B", "A"),
  img: "img/stands/geb.png",
  descricao: "O Stand que dá vida — e o caminho para o GER.",
  moveset: [
  "MUDA Barrage (E) — barragem padrão",
  "Life Giver (R) — cria uma planta que cura você",
  "Life Shot (T) — projétil rastreado de vida",
  "Life Transfer (F) — transfere dano recebido ao inimigo",
  "Golden Spirit (passiva) — cura gradual fora de combate"
  ],
  combos: ["Life Transfer (counter) → MUDA Barrage", "Life Shot → aproximação → barrage"],
  dica: "O Life Transfer reflete dano: use quando o inimigo abrir combo pesado.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom).", "Evolui para o <strong>GER</strong> com a Flecha Requiem."],
  curiosidades: ["É o Stand com a melhor cura fora dos Requiems."]
  },

  kingcrimson: {
  nome: "King Crimson", cor: "#8a1a2a", raridade: "Lendário", tier: "A+",
  usuario: "Diavolo", tipo: "Stand de curto alcance", anime: "Golden Wind (Parte 5)",
  stats: S("A", "B", "C", "B", "C", "A"),
  img: "img/stands/kingcrimson.png",
  descricao: "Apague o tempo e fique intocável. O Stand do Diavolo.",
  moveset: [
  "Epitaph (R) — prevê o próximo golpe e concede esquiva automática",
  "Time Erase (Z) — apaga o tempo; você fica invulnerável e se move livremente",
  "Impale (F) — perfuração de dano alto com sangramento",
  "Creative Precision (E) — barragem padrão"
  ],
  combos: ["Epitaph (ler) → Time Erase (atrás do inimigo) → Impale", "Impale → barrage → recuar com Time Erase"],
  dica: "O Time Erase NÃO é defesa grátis — dano contínuo ainda te acerta. Use o Epitaph primeiro para ler o inimigo.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom).",
  "Evolui para <strong>King Crimson Requiem</strong> com a Flecha Requiem."
  ],
  curiosidades: [
  "O nome vem da banda King Crimson, como quase todos os Stands da Parte 5.",
  "Considerado o Stand mais técnico e gratificante do jogo."
  ]
  },

  kcr: {
  nome: "King Crimson Requiem", cor: "#a01a3a", raridade: "Mítico", tier: "S+",
  usuario: "Diavolo", tipo: "Stand Requiem", anime: "Golden Wind (fim da Parte 5)",
  stats: S("A+", "A", "B", "A", "B", "∞"),
  img: "img/stands/kcr.png",
  descricao: "O King Crimson evoluído, capaz de apagar o destino do oponente.",
  moveset: [
  "Epitaph Requiem (R) — esquiva 2 golpes seguidos",
  "Time Erase+ (Z) — apaga o tempo e teleporta você até o inimigo",
  "Destiny Impale (F) — perfuração que ignora parte da defesa",
  "Reality Erase (X) — remove buffs do oponente"
  ],
  combos: ["Time Erase+ (teleporte) → Destiny Impale → barrage", "Reality Erase → barrage → Impale"],
  dica: "O Time Erase+ com teleporte é o melhor gap-closer do jogo — use para fugir de zonas de dano também.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha <strong>King Crimson</strong> equipado.", "Use a <strong>Flecha Requiem</strong> (chance de falha)."],
  curiosidades: ["Um dos Stands mais raros do jogo inteiro."]
  },

  scr: {
  nome: "Chariot Requiem", cor: "#5a5a6a", raridade: "Lendário", tier: "S",
  usuario: "Jean Pierre Polnareff (corpo)", tipo: "Stand Requiem", anime: "Golden Wind (Parte 5)",
  stats: S("B", "A", "A", "B", "C", "A"),
  img: "img/stands/scr.png",
  descricao: "O Stand das almas: troca Stands e confunde o inimigo.",
  moveset: [
  "Soul Swap (R) — troca a posição do seu Stand com o do inimigo",
  "Shadow Barrage (E) — barragem de sombras de longa distância",
  "Soul Protect (Z) — escudo de almas que absorve dano",
  "Chariot Slash (F) — estocada rápida"
  ],
  combos: ["Soul Swap (confusão) → Shadow Barrage de longe", "Chariot Slash → barrage → recuar"],
  dica: "O Soul Swap desarma combos inimigos: troque a posição dos Stands no meio do barrage deles.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha o <strong>Silver Chariot</strong> equipado.", "Use a <strong>Flecha Requiem</strong>."],
  curiosidades: ["No anime, o SCR trocou a alma de todos os presentes de corpo."]
  },

  madeinheaven: {
  nome: "Made in Heaven", cor: "#5a3a8a", raridade: "Lendário", tier: "S",
  usuario: "Enrico Pucci", tipo: "Stand de velocidade infinita", anime: "Stone Ocean (Parte 6)",
  stats: S("B", "∞", "C", "B", "A", "A"),
  img: "img/stands/madeinheaven.png",
  descricao: "Acelere o universo e jogue mais rápido que qualquer um.",
  moveset: [
  "Heaven Barrage (E) — barragem em velocidade absurda",
  "Universe Acceleration (Z) — acelera o próprio tempo de recarga das skills",
  "Heaven Slash (R) — corte instantâneo com dash",
  "Time Acceleration (passiva) — velocidade de movimento e recarga muito maior"
  ],
  combos: ["Heaven Slash → Heaven Barrage → recuar antes do counter", "Universe Acceleration → spam de skills"],
  dica: "A passiva de aceleração reduz seus cooldowns: alterne skills sem parar e não deixe o inimigo respirar.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Complete a questline do <strong>Pucci</strong> (boss do Corpo 5).", "Ou obtenha via trade."],
  curiosidades: ["No anime, o MIH reinicia o universo inteiro — a passiva do jogo é um tributo a isso."]
  },

  d4clt: {
  nome: "D4C: Love Train", cor: "#2a5a8a", raridade: "Mítico", tier: "S+",
  usuario: "Funny Valentine", tipo: "Stand evoluído", anime: "Steel Ball Run (Parte 7)",
  stats: S("A", "A", "B", "A+", "B", "A"),
  img: "img/stands/d4clt.png",
  descricao: "A barreira dimensional que redireciona toda desgraça para outro lugar.",
  moveset: [
  "Love Train Barrier (passiva/Z) — reflete dano enquanto ativa",
  "D4C Barrage (E) — barragem padrão",
  "Dimension Hop (R) — teleporta para dimensões paralelas (invulnerabilidade curta)",
  "Railway Bomb (F) — explosão de trilhos em área",
  "Nail Missile (X) — projéteis teleguiados"
  ],
  combos: ["Dimension Hop (esquiva) → Nail Missile → barrage", "Love Train (refletir) → punir com Railway Bomb"],
  dica: "Ative o Love Train quando o inimigo abrir barrage: ele se machuca sozinho.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha o <strong>D4C</strong> equipado.", "Derrote o boss <strong>Funny Valentine</strong> e use a <strong>Coroa do Presidente</strong>."],
  curiosidades: ["É considerado um dos melhores Stands defensivos do YBA."]
  },

  cmoon: {
  nome: "C-Moon", cor: "#3a5a7a", raridade: "Lendário", tier: "S",
  usuario: "Enrico Pucci", tipo: "Stand de gravidade", anime: "Stone Ocean (Parte 6)",
  stats: S("A", "A", "B", "B", "B", "A"),
  img: "img/stands/cmoon.png",
  descricao: "Inverta a gravidade e torne o inimigo seu satélite.",
  moveset: [
  "Gravity Inversion (R) — inverte a gravidade do inimigo (ele 'cai' para cima)",
  "C-Moon Barrage (E) — barragem padrão",
  "Gravity Slam (F) — arremessa o oponente contra o chão",
  "Gravity Pull (T) — puxa o inimigo de longe"
  ],
  combos: ["Gravity Pull → barrage → Gravity Slam", "Gravity Inversion → punir o inimigo flutuando"],
  dica: "Gravity Inversion deixa o oponente indefeso por 3s — é a janela perfeita para barrage completa.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Complete a questline do <strong>Pucci</strong>.", "Evolui para <strong>Made in Heaven</strong> com o item de quest final."],
  curiosidades: ["É o estágio intermediário entre Whitesnake e Made in Heaven."]
  },

  tusk4: {
  nome: "Tusk Act 4", cor: "#3a7a6a", raridade: "Lendário", tier: "S",
  usuario: "Johnny Joestar", tipo: "Stand de rotação infinita", anime: "Steel Ball Run (Parte 7)",
  stats: S("A+", "B", "B", "B", "A", "A"),
  img: "img/stands/tusk4.png",
  descricao: "O Golden Spin perfeito: dano que ignora dimensões e defesas.",
  moveset: [
  "Punch (M1) — soco de 9,5 de dano, combo de até 5 acertos (47,5 total)",
  "Stand Barrage (E) — barragem de socos rápidos (1,6 de dano por soco)",
  "Barrage Finisher (R) — soco pesado que quebra bloqueio e ragdoll (19,8 de dano)",
  "Nail Shots (T) — 3 unhas de 10 de dano cada (podem ser bloqueadas)",
  "Golden Rectangle Nail (Y) — 1 unha de 25,6 de dano com dano de raspão (chip damage)",
  "Arigato Gyro (G) — beatdown longo de no mínimo 48 de dano; a duração depende da vida restante do alvo (cooldown real de ~62s)",
  "Tea Time (H) — bebe chá e cura até 29,5 de vida",
  "Wormhole Uppercut (C) — mergulha no chão e ataca por cima: 14,8 (25,6 com DP cheio), atordoa e derruba; quebra bloqueio com o golpe final",
  "Wormhole Nails (X) — redireciona as unhas erradas de volta ao alvo por buracos de minhoca",
  "Nail Glide (Z) — planeia com as unhas; as habilidades continuam funcionando durante o planeio",
  "Passiva — Infinite Rotation: permite andar por até 1,5s durante o Time Stop e ignora habilidades que refletem dano (como o Love Train)"
  ],
  combos: ["M1 x4 → Nail Shots → M1 x4 → Wormhole Uppercut → Arigato Gyro no getup", "Wormhole Nails → Wormhole Uppercut (combo rápido; não funciona se o inimigo bloquear as unhas)"],
  dica: "A passiva Infinite Rotation deixa você andar durante o Time Stop inimigo por 1,5s: use para escapar ou fechar a distância. O Arigato Gyro é perfeitamente parriável — não abra com ele.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
      "Tenha o <strong>Tusk Act 3</strong>.",
      "Tenha o <strong>Pelvis of the Saint's Corpse</strong>, o estilo <strong>Spin</strong> e Worthiness V.",
      "Use o Pelvis para evoluir. O Act 4 é Requiem e fica proibido nas partidas casuais de Steel Ball Run."
    ],
  curiosidades: ["É o único Stand que atravessa a barreira do D4C Love Train no mangá."]
  },

  // ==================== RAROS ====================
  crazycd: {
  nome: "Crazy Diamond", cor: "#d46a9a", raridade: "Lendário", tier: "A",
  usuario: "Josuke Higashikata", tipo: "Stand de curto alcance", anime: "Diamond is Unbreakable (Parte 4)",
  stats: S("A", "B", "C", "A", "B", "B"),
  img: "img/stands/crazycd.png",
  descricao: "Conserte tudo — inclusive você mesmo no meio da luta.",
  moveset: [
  "DORA Barrage (E) — barragem padrão",
  "Restore (R) — cura a si mesmo ou aliados",
  "Object Slam (F) — arremessa objeto consertado como projétil",
  "DORA Punch (M1 carregado) — soco forte"
  ],
  combos: ["Object Slam → barrage → DORA Punch", "Restore (no meio do combo inimigo) → punir"],
  dica: "Curar no meio da luta força o inimigo a jogar agressivo — use isso para puxar erros.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["Josuke enraivece se alguém insultar seu penteado — e o Stand acompanha o humor."]
  },

  cream: {
  nome: "Cream", cor: "#3a3a4a", raridade: "Raro", tier: "A",
  usuario: "Vanilla Ice", tipo: "Stand de aniquilação", anime: "Stardust Crusaders (Parte 3)",
  stats: S("A", "B", "C", "C", "D", "B"),
  img: "img/stands/cream.png",
  descricao: "Vire um buraco negro e apague o inimigo da existência.",
  moveset: [
  "Void Dash (R) — vira nada e avança invulnerável",
  "Void Devour (F) — devora tudo à frente com o buraco negro",
  "Cream Barrage (E) — barragem padrão",
  "Void Ambush (T) — sai do void atrás do inimigo"
  ],
  combos: ["Void Dash (atrás) → Void Devour → barrage", "Void Ambush → barrage → Void Dash de fuga"],
  dica: "O Void Devour ignora bloqueio — é o combo breaker definitivo, mas o cooldown é longo.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["Vanilla Ice decapitou a si mesmo para servir de sangue ao DIO — dedicação total."]
  },

  purplehaze: {
  nome: "Purple Haze", cor: "#7a3a8a", raridade: "Raro", tier: "A",
  usuario: "Pannacotta Fugo", tipo: "Stand de vírus", anime: "Golden Wind (Parte 5)",
  stats: S("A", "B", "C", "B", "C", "B"),
  img: "img/stands/purplehaze.png",
  descricao: "O vírus mais letal de JoJo: dano contínuo por área.",
  moveset: [
  "Virus Capsule (R) — lança cápsula de vírus em área",
  "Purple Barrage (E) — barragem padrão",
  "Virus Cloud (F) — nuvem venenosa persistente",
  "Rage Mode (T) — aumenta o próprio dano temporariamente"
  ],
  combos: ["Virus Capsule → Force exit zone → punir com barrage", "Virus Cloud (zona) → lute dentro dela"],
  dica: "O vírus ignora bloqueio e continua fazendo dano — force o inimigo a sair da zona e puna.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["O vírus do Purple Haze mata em 30 segundos no anime — até aliados fogem dele."]
  },

  metallica: {
  nome: "Metallica", cor: "#6a6a7a", raridade: "Raro", tier: "A",
  usuario: "Risotto Nero", tipo: "Stand de ferro", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "C", "B", "B", "A"),
    img: "img/stands/metallica.png",
  descricao: "Manipule o ferro do sangue do inimigo — luta invisível.",
  moveset: [
  "Iron Needles (R) — lâminas criadas dentro do corpo do inimigo",
  "Invisibility (Z) — fica invisível por alguns segundos",
  "Metallica Barrage (E) — barragem padrão",
  "Iron Manipulation (F) — cria armadilhas de ferro no chão"
  ],
  combos: ["Invisibility → aproximação → Iron Needles → barrage", "Iron Manipulation (zona) → force o caminho"],
  dica: "Use a invisibilidade para reposicionar — o Iron Needles tem alcance curto mas dano alto.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["Risotto quase matou o Doppio sozinho — o Metallica é subestimado."]
  },

  d4c: {
  nome: "Dirty Deeds Done Dirt Cheap (D4C)", cor: "#2a5a8a", raridade: "Raro", tier: "A",
  usuario: "Funny Valentine", tipo: "Stand dimensional", anime: "Steel Ball Run (Parte 7)",
  stats: S("B", "A", "C", "B", "B", "A"),
  img: "img/stands/d4c.png",
  descricao: "Viaje entre dimensões e traga versões alternativas de si mesmo.",
  moveset: [
  "Dimension Hop (R) — teleporta entre dimensões (esquiva)",
  "Alternate Self (F) — invoca uma versão alternativa para atacar",
  "D4C Barrage (E) — barragem padrão",
  "Pocket Dimension (Z) — esconde você e aliados numa dimensão bolso"
  ],
  combos: ["Dimension Hop → Alternate Self (distrair) → barrage", "Pocket Dimension → escapar de Time Stop"],
  dica: "O Alternate Self dá você um 'clon' temporário: use para dividir a atenção em 1v2.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>20%</strong> na roleta da <strong>Rib Cage of the Saint's Corpse</strong> (fonte: wiki Fandom).", "Evolui para <strong>D4C Love Train</strong> com o Heart of the Saint's Corpse."],
  curiosidades: ["O nome do Stand é uma música da banda AC/DC."]
  },

  whitesnake: {
  nome: "Whitesnake", cor: "#4a6a5a", raridade: "Raro", tier: "A",
  usuario: "Enrico Pucci", tipo: "Stand de roubo", anime: "Stone Ocean (Parte 6)",
  stats: S("B", "B", "C", "B", "B", "A"),
  img: "img/stands/whitesnake.png",
  descricao: "Roube habilidades e memórias do inimigo em forma de DISC.",
  moveset: [
  "Steal DISC (R) — rouba uma skill aleatória do oponente",
  "Illusion (Z) — cria um disfarce de outro jogador",
  "Whitesnake Barrage (E) — barragem padrão",
  "Goop Slam (F) — ataque de ácido"
  ],
  combos: ["Steal DISC (início) → use a skill roubada contra ele", "Illusion (confusão) → barrage pelas costas"],
  dica: "O skill roubado pode ser uma ultimate — roubar o Time Stop de um DIO é devastador.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom).", "Evolui para <strong>C-Moon</strong> na questline do Pucci."],
  curiosidades: ["Os DISCs roubados podem ser guardados e usados depois."]
  },

  // ==================== INCOMUNS ====================
  anubis: {
  nome: "Anubis", cor: "#8a6a2a", raridade: "Incomum", tier: "B",
  usuario: "N'Doul / portador da espada", tipo: "Stand de espada", anime: "Stardust Crusaders (Parte 3)",
  stats: S("B", "A", "C", "B", "A", "C"),
  img: "img/stands/anubis.png",
  descricao: "A espada possuída que corta tudo em sequências letais.",
  moveset: [
  "Slash Combo (E) — sequência de cortes rápidos",
  "Heavy Slash (R) — corte pesado que atravessa bloqueio",
  "Anubis Dash (T) — dash com corte embutido",
  "Possession (passiva) — dano aumenta a cada corte acertado"
  ],
  combos: ["Slash Combo → Heavy Slash → Anubis Dash (fuga)", "Anubis Dash → Slash Combo"],
  dica: "A passiva de dano acumulativo recompensa agressividade — não pare de atacar.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom).", "Drop raro do boss <strong>Kira</strong>."],
  curiosidades: ["Anubis é um Stand 'sem usuário fixo': a espada possue quem a empunha."]
  },

  stickyfingers: {
  nome: "Sticky Fingers", cor: "#2a7a5a", raridade: "Incomum", tier: "B",
  usuario: "Bruno Bucciarati", tipo: "Stand de zippers", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "C", "B", "B", "B"),
  img: "img/stands/stickyfingers.png",
  descricao: "Abra zippers em tudo — inclusive no próprio corpo.",
  moveset: [
  "Zipper Punch (E) — soco com zipper que abre a defesa",
  "Zipper Grab (R) — puxa o inimigo para perto",
  "Detach (Z) — separa partes do corpo para esquiva",
  "Zipper Barrage (F) — barragem com buracos de zipper"
  ],
  combos: ["Zipper Grab → Zipper Punch → barrage", "Detach (esquiva) → contra-ataque"],
  dica: "O Zipper Grab é um combo starter garantido: puxou, puniu.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["Bucciarati abriu um zipper no próprio peito para esconder os aliados."]
  },

  hierophant: {
  nome: "Hierophant Green", cor: "#2a8a5a", raridade: "Incomum", tier: "B",
  usuario: "Noriaki Kakyoin", tipo: "Stand de longo alcance", anime: "Stardust Crusaders (Parte 3)",
  stats: S("B", "B", "A", "C", "B", "B"),
  img: "img/stands/hierophant.png",
  descricao: "O mestre da distância: Emerald Splash e armadilhas de rede.",
  moveset: [
  "Emerald Splash (R) — rajada de esmeraldas teleguiadas",
  "20m Radius (Z) — desdobra o Stand numa área de armadilhas",
  "Tentacle Grab (F) — agarra o inimigo de longe",
  "Hierophant Barrage (E) — barragem de longa distância"
  ],
  combos: ["20m Radius (zona) → punir quem entrar com Emerald Splash", "Tentacle Grab → aproximação → barrage"],
  dica: "Lute de longe: Stands de curto alcance não conseguem te alcançar dentro do raio de 20m.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["Kakyoin revelou o segredo do Time Stop do DIO com a última Emerald Splash."]
  },

  chariot: {
  nome: "Silver Chariot", cor: "#8a8a9a", raridade: "Raro", tier: "B",
  usuario: "Jean Pierre Polnareff", tipo: "Stand de espada", anime: "Stardust Crusaders (Parte 3)",
  stats: S("B", "A", "C", "C", "A", "B"),
  img: "img/stands/chariot.png",
  descricao: "O espadachim mais rápido: armadura opcional, velocidade máxima.",
  moveset: [
  "Rapid Thrust (E) — sequência de estocadas",
  "Armor Off (passiva/R) — tira a armadura: +velocidade, -defesa",
  "Chariot Dash (T) — dash com estocada",
  "Afterimage (F) — deixa uma imagem falsa enquanto esquiva"
  ],
  combos: ["Armor Off → Rapid Thrust → Chariot Dash", "Afterimage (confusão) → estocada pelas costas"],
  dica: "Com a armadura fora, você vence a maioria dos Stand em velocidade — mas morre fácil: não barre, esquive.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom).", "Evolui para o <strong>SCR</strong> com a Flecha Requiem."],
  curiosidades: ["No anime, o Chariot 'venceu' o Anubis ao jogar no escuro — a luz refletida enganou o inimigo."]
  },

  // ==================== COMUNS ====================
  aerosmith: {
  nome: "Aerosmith", cor: "#3a7a8a", raridade: "Comum", tier: "C",
  usuario: "Narancia Ghirga", tipo: "Stand de avião", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "A", "C", "C", "C"),
  img: "img/stands/aerosmith.png",
  descricao: "Um aviãozinho de brinquedo com metralhadora de verdade.",
  moveset: [
  "Volare Via (E) — rajada de metralhadora teleguiada",
  "Bomb Drop (R) — solta bomba em área",
  "Aerial Recon (T) — revela inimigos escondidos no mapa",
  "Fly By (F) — investida aérea"
  ],
  combos: ["Aerial Recon (achar) → Volare Via de longe", "Bomb Drop (zona) → punir quem fugir"],
  dica: "É o melhor Stand para 'hit and run': ataque do céu e nunca deixe o inimigo te alcançar.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["Narancia calculava a posição dos inimigos com régua e calculadora — e funcionava."]
  },

  sixpistols: {
  nome: "Sex Pistols", cor: "#8a7a4a", raridade: "Comum", tier: "C",
  usuario: "Guido Mista", tipo: "Stand de revólver", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "A", "C", "B", "C"),
  img: "img/stands/sixpistols.png",
  descricao: "Seis mini-pistoleiros que ricocheteiam balas em ângulos impossíveis.",
  moveset: [
  "Ricochet Shot (E) — bala que faz curvas até acertar",
  "Barrage Shot (R) — tiros em sequência rápida",
  "Number 4 Curse (passiva) — dano extra aleatório (o azar do nº4)",
  "Pistol Wall (F) — barreira de balas defensiva"
  ],
  combos: ["Ricochet Shot (por trás de cobertura) → barrage", "Pistol Wall → recuar e atirar de novo"],
  dica: "O ricochete acerta quem tenta se esconder atrás de paredes — jogue ao redor da cobertura, não direto.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["Mista tem pavor do número 4 — e o jogo referencia isso na passiva."]
  },

  mrpresident: {
  nome: "Mr. President", cor: "#8a5a3a", raridade: "Comum", tier: "D",
  usuario: "Coco Jumbo (tartaruga)", tipo: "Stand de sala segura", anime: "Golden Wind (Parte 5)",
  stats: S("D", "D", "C", "A", "D", "B"),
    img: "img/stands/stickyfingers.png",
  descricao: "Uma tartaruga com uma sala secreta nas costas. Segurança absoluta.",
  moveset: [
  "Enter Room (E) — entra na sala segura (invulnerável)",
  "Room Invite (R) — puxa aliado para dentro",
  "Key Throw (F) — joga a chave para teleportar aliados",
  "Turtle Shell (passiva) — reduz dano recebido fora da sala"
  ],
  combos: ["Enter Room (fuga) → sair atrás do inimigo cansado", "Room Invite → heal de Spec dentro da sala"],
  dica: "Não é para lutar: é para farmar em paz, escapar de ganks e guardar loot.",
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>7%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."],
  curiosidades: ["No anime, a gangue inteira viajou dentro da tartaruga — inclusive com o inimigo como 'refém' da sala."]
  },
  // ==================== ADICIONADOS ====================
  killerqueen: {
    nome: "Killer Queen", cor: "#d46a9a", raridade: "Lendário", tier: "S",
    usuario: "Yoshikage Kira", tipo: "Stand de explosivos", anime: "Diamond is Unbreakable (Parte 4)",
    stats: S("A", "B", "C", "B", "A", "A"),
    descricao: "Tudo que ele toca vira uma bomba. O Stand do Kira Yoshikage.",
    img: "img/stands/killerqueen.png",
    moveset: [
      "Killer Barrage (E) — barragem padrão de socos",
      "Bomb Transmutation (R) — transforme o que tocou em bomba; explode ao contato",
      "Sheer Heart Attack (T) — tanque-bomba autônomo que persegue o alvo mais quente",
      "Air Bomb (F) — bomba de ar de médio alcance",
      "Bites the Dust (Z) — explosão em área com knockback gigante"
    ],
    skillsExplicacao: [
      { nome: "Bomb Transmutation (R)", texto: "Toca o inimigo (M1 ou projétil) e ele se torna uma bomba com timer. Quando explode, causa dano alto e ragdoll. É o combo starter do Killer Queen: toque, afaste, deixe explodir e puna." },
      { nome: "Sheer Heart Attack (T)", texto: "Invoca o tanque-bomba que persegue automaticamente o alvo mais 'quente' (quem mexeu mais recentemente). Ignora bloqueio e segue o inimigo pelo mapa. Jogue e lute ao lado dele para dividir a atenção." },
      { nome: "Bites the Dust (Z)", texto: "A ultimate do Stand: explosão em área gigante com knockback devastador. Longo cooldown — guarde para finalizar ou para se defender de grupo." }
    ],
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
    comoObter: [
      "Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom).",
      "Evolui para Killer Queen: Bites the Dust com a <strong>Flecha Requiem</strong> (na quest do Arrowsmith)."
    ],
    curiosidades: [
      "No anime, o Kira vive em paz: nem fama, nem destaque — mas o Stand é uma das mais criativas de Araki.",
      "Sheer Heart Attack persegue calor: no anime, o Jotaro derrotou-o jogando as próprias roupas quentes."
    ]
  },

  kqbtd: {
    nome: "Killer Queen: Bites the Dust", cor: "#a04a7a", raridade: "Mítico", tier: "S+",
    usuario: "Yoshikage Kira", tipo: "Stand evoluído", anime: "Diamond is Unbreakable (Parte 4)",
    stats: S("A+", "B", "C", "A", "A", "∞"),
    descricao: "A evolução definitiva do Killer Queen com o poder do tempo em loop.",
    img: "img/stands/kqbtd.png",
    moveset: [
      "Killer Barrage (E) — barragem padrão",
      "Bomb Transmutation+ (R) — versão melhorada, dano maior",
      "Sheer Heart Attack (T) — mesmo tanque-bomba autônomo",
      "Bites the Dust (Z) — planta uma bomba que retrocede o tempo do alvo",
      "Stray Cat Combo (F) — bomba de ar comprimido combinada"
    ],
    skillsExplicacao: [
      { nome: "Bites the Dust (Z)", texto: "A skill icônica: planta uma bomba em alguém que, ao explodir, faz o tempo do alvo 'voltar' — no jogo, causa dano massivo com efeito de atordoamento longo. É considerada uma das ultimates mais fortes do PvP." }
    ],
    videos: [{ titulo: "Showcase do Stand (YBA)" }],
    comoObter: ["Tenha o Killer Queen equipado.", "Complete a quest de Morioh e use o item correspondente."],
    curiosidades: ["No anime, o Bites the Dust era um loop temporal que matava quem descobrisse a identidade do Kira."]
  },

  thehand: {
    nome: "The Hand", cor: "#3a7a8a", raridade: "Raro", tier: "A",
    usuario: "Okuyasu Nijimura", tipo: "Stand de curto alcance", anime: "Diamond is Unbreakable (Parte 4)",
    stats: S("B", "B", "C", "B", "C", "D"),
    descricao: "Apaga o próprio espaço — e o que estiver nele. O Stand do Okuyasu.",
    img: "img/stands/thehand.png",
    videos: [],
    moveset: [
      "Punch (LMB) — 5.5 de dano por golpe, combo de até 5 acertos (27.5 total)",
      "Barrage (E) — 0.9 de dano por soco, barragem lenta mas sem end lag",
      "Barrage Finisher (R) — 11 de dano com ragdoll",
      "Erasure (T) — até 61.2 de dano (76.5 com Hamon do Zeppeli); apaga um membro do oponente, cooldown 10s",
      "Secondary Erasure (Y) — até 48.6 de dano (60.8 com Hamon); apaga outro membro, ragdoll, cooldown 20s",
      "Erasure Pull (X) — apaga o espaço entre você e o alvo, puxando-o para perto (como o Inhale)",
      "Erasure Acceleration (Z) — apaga o espaço à frente para avançar (movimento imprevisível)"
    ],
    skillsExplicacao: [
      { nome: "Erasure (T)", texto: "O golpe mais forte do Stand: até 61.2 de dano e apaga um membro do oponente. Sem perna, ele não corre; sem braço, toma mais dano; sem os dois braços, não pode bloquear. 10s de cooldown — use sempre que recarregar." },
      { nome: "Secondary Erasure (Y)", texto: "Segunda variação de apagamento, mais lenta mas com ragdoll. Combina com a primeira para remover os dois braços do inimigo e desativar o bloqueio dele." },
      { nome: "Erasure Pull (X)", texto: "Não causa dano, mas puxa o inimigo para o seu alcance — perfeito para trazer runners e abrir combo com Erasure." },
      { nome: "Erasure Acceleration (Z)", texto: "Movimento de avanço apagando o espaço à frente. Imprevisível, mas serve de gap-closer em emergência." }
    ],
    comoObter: [
      "Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."
    ],
    curiosidades: [
      "O Okuyasu é considerado burro no anime, mas o The Hand é dos Stands mais letais — ele só não sabe usar direito."
    ]
  },

  whitealbum: {
    nome: "White Album", cor: "#7ab8d4", raridade: "Raro", tier: "A",
    usuario: "Ghiaccio", tipo: "Stand de gelo", anime: "Golden Wind (Parte 5)",
    stats: S("B", "B", "C", "A+", "C", "B"),
    descricao: "Congele tudo — inclusive os golpes inimigos. O Stand do Ghiaccio.",
    img: "img/stands/whitealbum.png",
    videos: [],
    moveset: [
      "Barrage (E) — 1.1 de dano por soco, alcance curto",
      "Barrage Finisher (R) — 13.5 de dano, quebra bloqueio e pode ser parryada",
      "Flash Freeze (X) — 30 de dano, crasha o Stand e ragdoll; quebra bloqueio e funciona DENTRO do Time Stop, cooldown 25s",
      "Gently Weeps (G) — escudo de 10 de vida que reflete projéteis de volta com dano total",
      "Ice Skating (Z) — patina no gelo; toque = dash rápido, segurar = patinação contínua (até 12s)",
      "Ice Punch (T) — 25 de dano com stun, aplica congelamento, cooldown 20s (15s com upgrade)",
      "Ice Sweeps (Y) — dois chutes somando 15 de dano com stun, cooldown 20s",
      "Ice Swipe (C) — agarra (5) e esmaga (25), petrifica em gelo com true stun, quebra bloqueio, cooldown 34s"
    ],
    skillsExplicacao: [
      { nome: "Flash Freeze (X)", texto: "A resposta ao Time Stop: funciona dentro dele, causando 30 de dano, crashando o Stand inimigo e ragdoll. Quebra bloqueio e aplica o proc de congelamento." },
      { nome: "Gently Weeps (G)", texto: "Congela o ar ao redor: escudo de 10 de vida e QUALQUER projétil que te acerte é refletido com dano total. Contra Stands de longa distância (Hierophant, Aerosmith), é vitória quase automática." },
      { nome: "Cryokinesis (passiva)", texto: "Cada golpe aplica um 'membro congelado'. Com 3 membros congelados, o próximo hit estilhaça o gelo causando sangramento de 6 a 12 segundos (33 ticks de dano)." },
      { nome: "Ice Armor (passiva)", texto: "Reduz o dano recebido em até 20%, multiplicativo com outras reduções. É o Stand mais tanque do jogo." }
    ],
    comoObter: [
      "Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."
    ],
    curiosidades: [
      "O Ghiaccio quase matou o Giorno e o Mista sozinho — o White Album é forte o suficiente para o anime confirmar isso."
    ]
  },

  magiciansred: {
    nome: "Magician's Red", cor: "#c94a1a", raridade: "Raro", tier: "B",
    usuario: "Muhammad Avdol", tipo: "Stand de fogo", anime: "Stardust Crusaders (Parte 3)",
    stats: S("B", "B", "A", "C", "B", "B"),
    descricao: "Fogo egípcio: dano contínuo de queimadura e controle de área.",
    img: "img/stands/magiciansred.png",
    videos: [],
    moveset: [
      "Barrage (E) — 0.9 de dano por soco (1.2 com upgrade), cooldown 7s",
      "Barrage Finisher (R) — até 14 de dano com upgrade, cooldown 7s",
      "Crossfire Hurricane (T) — lança 1 ankh que atravessa vários inimigos, atordoa e explode em AoE com Pyrokinesis; quebra bloqueio, 15-20 de dano, cooldown 20s",
      "Crossfire Hurricane Special (Y) — 3 ankhs de uma vez, 21-28 de dano, bloqueável mas não cancelável, cooldown 12s",
      "Red Bind (Z) — duas chicotadas de fogo: primeiro hit atordoa, segundo prende os membros do oponente (só consegue barrar em uma direção), 6-8 de dano por hit, cooldown 20s",
      "Bakugo (X) — agarrão no pescoço que engole a cabeça em chamas e empurra o inimigo; bloqueável, ragdoll, 30 de dano total, cooldown 18s"
    ],
    skillsExplicacao: [
      { nome: "Crossfire Hurricane (T)", texto: "Seu melhor poke: o ankh atravessa vários inimigos, atordoa no contato e explode em área aplicando queimadura (Pyrokinesis). Unblockable — é o seu quebra-bloqueio à distância." },
      { nome: "Red Bind (Z)", texto: "Prende braços e pernas do inimigo em fogo: ele só consegue barrar em uma direção. Garante a barra de bloqueio para o próximo combo." },
      { nome: "Pyrokinesis (passiva)", texto: "Crossfire Hurricane, Special e Red Bind aplicam dano de queimadura contínuo (1s por tick). Os upgrades aumentam a duração — dano de pressão constante." },
      { nome: "Bakugo (X)", texto: "Agarrão de 30 de dano total que ragdoll. Use depois do Red Bind: inimigo preso não esquiva o grab." }
    ],
    comoObter: [
      "Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."
    ],
    curiosidades: [
      "O nome é um tributo à banda Magic Ninja... na verdade, à música 'Magician's Birthday' da Uriah Heep — o padrão de Araki de nomes musicais."
    ]
  },

  softwet: {
    nome: "Soft & Wet", cor: "#2a7a9a", raridade: "Lendário", tier: "S",
    usuario: "Josuke Higashikata (JoJolion)", tipo: "Stand de bolhas", anime: "JoJolion (Parte 8)",
    stats: S("B", "B", "C", "B", "B", "A"),
    descricao: "Bolhas que roubam propriedades — visão, umidade, atrito.",
    img: "img/stands/softwet.png",
    videos: [],
    moveset: [
      "Barrage (E) — 0.9 a 1.5 de dano por soco, bloqueável",
      "Barrage Finisher (R) — 14.5 de dano com ragdoll, quebra bloqueio",
      "Shovel Barrage (T) — golpes de pá, 5 de dano por hit; o último quebra bloqueio e empurra",
      "Bubble Prison (Y) — prende o inimigo numa bolha, 30 de dano, quebra bloqueio",
      "Vision Plunder (Z) — bolha que rouba a visão (tela fica escura), 30 de dano",
      "Bubble Generation (U) — cria bolha de cura ao redor; se o inimigo acertar, ela estoura e você cai",
      "Moisture Plunder (X) — barreira de bolhas: 1.3 de dano por tick (1.7 upgraded, 2.1 com Hamon)",
      "Friction Beatdown (C) — combo completo de ~41 de dano que ignora bloqueio"
    ],
    skillsExplicacao: [
      { nome: "Vision Plunder (Z)", texto: "Rouba a visão do oponente: a tela dele fica quase preta por alguns segundos. Combina com Bubble Prison — cego, ele não vê a bolha chegando." },
      { nome: "Friction Plunder / Beatdown (C)", texto: "Combo completo de ~41 de dano que passa pelo bloqueio. É o maior single-combo do jogo entre Stands raros — use depois de qualquer stun." },
      { nome: "Bubble Generation (U)", texto: "Cura fora de combate: a bolha te protege e recupera vida. Se o inimigo acertar, ela estoura e você cai — use longe da luta." }
    ],
    comoObter: [
      "NÃO vem da Mysterious Arrow: obtido pela <strong>Rib Cage of the Saint's Corpse</strong> com <strong>20%</strong> de chance (fonte: wiki Fandom)."
    ],
    curiosidades: [
      "É o Stand principal da Parte 8 (JoJolion) — e no YBA é um dos mais raros de se conseguir por quest."
    ]
  },

  rhcp: {
    nome: "Red Hot Chili Pepper", cor: "#d41a1a", raridade: "Raro", tier: "A",
    usuario: "Akira Otoishi", tipo: "Stand elétrico", anime: "Diamond is Unbreakable (Parte 4)",
    stats: S("B", "A", "B", "C", "B", "B"),
    descricao: "Eletricidade pura: velocidade, mobilidade e dano em corrente.",
    img: "img/stands/rhcp.png",
    videos: [],
    moveset: [
      "Barrage (E) — barragem elétrica padrão",
      "Barrage Finisher (R) — soco pesado com paralisia elétrica",
      "Electric Dash (T) — vira eletricidade e atravessa o mapa pelos fios",
      "Voltage Absorption (Y) — absorve eletricidade/fontes para carregar o próprio dano",
      "Chain Grab (F) — prende o inimigo numa corrente elétrica",
      "Overcharge (passiva) — perto de fontes de energia, os golpes eletrificam o chão"
    ],
    skillsExplicacao: [
      { nome: "Electric Dash (T)", texto: "Você vira eletricidade e viaja pelos fios — é a melhor mobilidade do jogo junto com o TWAU. Fuga e entrada instantânea em qualquer ponto com rede elétrica." },
      { nome: "Voltage Absorption (Y)", texto: "Carregue dano absorvendo fontes elétricas do mapa. Com carga cheia, os próximos golpes têm dano ampliado — suba a barragem com carga máxima." },
      { nome: "Chain Grab (F)", texto: "Corrente elétrica que prende o inimigo no lugar: garante barragem completa ou setup decombo." }
    ],
    comoObter: [
      "Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."
    ],
    curiosidades: [
      "O nome vem da banda Red Hot Chili Peppers — Akira Otoishi é guitarrista no anime, coerente com o padrão musical."
    ]
  }
,

  stonefree: {
    nome: "Stone Free", cor: "#3a9a7a", raridade: "Lendário", tier: "A",
    usuario: "Jolyne Cujoh", tipo: "Stand de cordas", anime: "Stone Ocean (Parte 6)",
    stats: S("B", "A", "B", "B", "A", "A"),
    descricao: "Desmonte em cordas e estrangule o oponente à distância.",
    img: "img/stands/stonefree.png",
    videos: [],
    moveset: [
      "Punch (LMB) — 8.9 de dano por golpe, combo de 5 acertos (44.5 total)",
      "Stand Barrage (E) — 1.5 de dano por soco, rajada rápida",
      "Stand Barrage Finisher (R) — 17.7 de dano",
      "String Beatdown (G) — sequência completa: punch 8.1 → barrage 0.3/hit → punch 6.4 → punch 6.4 → barrage 0.9/hit → golpe final proporcional à vida restante do alvo; passa pelo bloqueio mas pode ser parried",
      "String Slam (Y) — investida 8.1 + giro 22 (30.1 total; 37.6 com Hamon do Zeppeli), ragdoll no final; bloqueável e cancelável",
      "String Lasso (T) — 19.3 de dano se acertar; puxa o inimigo e te lança até o cursor, cooldown 15s",
      "String Barrier (X) — 30 de dano; vitima fica presa, cega e incapaz de girar; bypass de bloqueio; cooldown 35s (20s com Persistence III)",
      "String Bandage (U) — cura 25 HP e dá 20 de defesa",
      "Home Run (Z) — 15 de dano; arremessa uma bola de baseball",
      "Ora Kicks (C) — 2.7 por chute + 16.1 no final (35 total); o último chute quebra bloqueio"
    ],
    skillsExplicacao: [
      { nome: "String Beatdown (G)", texto: "O golpe executivo do Stone Free: a sequência completa passa pelo bloqueio e termina com dano proporcional à vida restante do alvo (execução). Pode ser parried — use depois de atordoar." },
      { nome: "String Barrier (X)", texto: "Uma pirâmide de cordas com 30 de dano que PRENDE o oponente e cobre a tela dele de fios (cego total). Bypass de bloqueio. O cooldown alto exige uso cirúrgico." },
      { nome: "String Lasso (T)", texto: "Rola no cursor e ataca: se acertar, 19.3 de dano e puxa o inimigo para perto — funciona como gap-closer e combo starter ao mesmo tempo." },
      { nome: "String Bandage (U)", texto: "Auto-cura de 25 HP + 20 de defesa temporária. Use entre trocas de combo para sustentar a luta." }
    ],
    comoObter: [
      "Chance de <strong>2,5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom — a página Stands lista Stone Free e Whitesnake como os stands de 2,5%)."
    ],
    curiosidades: [
      "É um dos dois Stands mais raros do jogo (1% de chance, junto com Whitesnake).",
      "No anime, a Jolyne usa as cordas para desmontar o próprio corpo — no YBA isso vira o String Barrier e Lasso."
    ]
  },

  scarymonsters: {
    nome: "Scary Monsters", cor: "#8a5a2a", raridade: "Raro", tier: "A",
    usuario: "Diego Brando", tipo: "Stand de dinossauro", anime: "Steel Ball Run (Parte 7)",
    stats: S("A", "A", "C", "B", "B", "A"),
    descricao: "Transforme-se em raptor e marque o inimigo com o Dino-Virus.",
    img: "img/stands/scarymonsters.png",
    videos: [],
    moveset: [
      "Dino-Virus (passiva) — cada habilidade marca o oponente com um ícone de vírus; com 3 ícones e o alvo abaixo de 5-21% de vida, ele MORRE e vira um dino minion seu; se você ficar abaixo de 20% HP, os ícones desaparecem",
      "Barrage (E) — 1.1 por corte (Base Form) / 2.0 (Full Form)",
      "Barrage Finisher (R) — 12.5 (Base) / 22.5 (Full)",
      "Tail Whip (T) — Hybrid: 3x 4.7 + 14; Full Form: giro 360° de 40 de dano",
      "Fossilization (Y) — Hybrid: 5 + 25, imobiliza até 5s; Full Form: 35, fossiliza",
      "Dino Dash (Z) — Hybrid: 25, quebra bloqueio; Full Form: 15 + 25 em área",
      "Dino Army (X) — Hybrid: 6 por golpe de minion; Full Form: 10 pássaros que viram até 3 dino minions",
      "Dino Barrage (C) — Hybrid fase 1: 9 + 1.8-2.1 x 5; fase 2: 7+7+7 (último quebra bloqueio); Full Form: ~40 com cutscene de beatdown, bypass de bloqueio",
      "Transformation (G) — alterna entre Hybrid e Full Form (requer 10% da Dino Bar para virar Full)"
    ],
    skillsExplicacao: [
      { nome: "Dino-Virus (passiva)", texto: "A mecânica central: acumule 3 ícones de vírus no oponente e, se ele estiver abaixo do limiar de vida, morre instantaneamente e vira um dino minion sob seu controle. O limiar é upável (5% a 21%) na árvore de skills." },
      { nome: "Transformation (G)", texto: "Full Form tem dano quase dobrado em tudo, mas gasta Dino Bar. Jogue em Hybrid para acumular vírus e transforme para executar." },
      { nome: "Dino Barrage (C) em Full Form", texto: "Beatdown com cutscene de ~40 de dano que passa pelo bloqueio — o maior burst de dano do Stand. Use para finalizar." }
    ],
    comoObter: [
      "<strong>20%</strong> de chance pela Rib Cage of the Saint's Corpse com Worthiness V (fonte: wiki Fandom)."
    ],
    curiosidades: [
      "O Diego Brando do anime é um raptor literal — e o Stand no jogo segue a mecânica do mangá.",
      "É o único Stand com mecânica de minions (além do Vampirism)."
    ]
  },

  beachboy: {
    nome: "Beach Boy", cor: "#4a6a8a", raridade: "Raro", tier: "B",
    usuario: "Pescatore (Formaggio's ally)", tipo: "Stand de vara de pescar", anime: "Golden Wind (Parte 5)",
    stats: S("C", "C", "A", "C", "B", "C"),
    descricao: "A vara de pescar que atravessa paredes e fisga o inimigo de longe.",
    img: "img/stands/beachboy.png",
    videos: [],
    moveset: [
      "Fish Hook (E) — fisga o inimigo e o puxa, atravessando paredes e obstáculos",
      "Line Shock (R) — eletricidade pela linha com dano em contato",
      "Deep Cast (T) — cast de alcance máximo",
      "Reel In (F) — puxa e atordoa o inimigo fisgado"
    ],
    skillsExplicacao: [
      { nome: "Fish Hook (E)", texto: "O hook atravessa paredes: pesque o inimigo de dentro da casa — ele não vai entender de onde veio o puxão. Use para puxar quem está fugindo ou escondido." },
      { nome: "Reel In (F)", texto: "Depois de fisgar, recolhe a linha e atordoa: janela perfeita para o combo do seu Spec ou para barragem." }
    ],
    comoObter: [
      "Chance de <strong>5%</strong> na roleta da Mysterious Arrow (fonte: wiki Fandom)."
    ],
    curiosidades: [
      "É um dos Stands mais trolladores do jogo: fisga em segurança total."
    ]
  },

  // ==================== STANDS ADICIONADOS (como obter conferido na wiki Fandom e em guias; o que está como "A confirmar" falta checar no jogo) ====================
  twoh: {
    nome: "The World Over Heaven", cor: "#9b7fe0", raridade: "Evolução (Over Heaven)", tier: "S+",
    usuario: "DIO (Heaven Ascended)", tipo: "Stand de curto alcance (Over Heaven)",
    descricao: "A forma Over Heaven do The World: controla a dimensão da luta e reescreve a realidade.",
    img: "img/stands/twoh.png",
    videos: [],
    moveset: [
      "Heaven Arena — controle de dimensão: o Stand muda o campo de batalha a favor do usuário",
      "Reality Overwrite — sobrescreve a realidade ao redor da luta"
    ],
    comoObter: [
      "Tenha o <strong>The World</strong> equipado e leia o <strong>Diário de DIO</strong> (ele aparece em pontos aleatórios do mapa).",
      "Vença <strong>25 partidas</strong> no modo 1v1.",
      "Faça <strong>50 kills</strong> em Steel Ball Run, contra jogadores diferentes.",
      "Fale com o NPC <strong>Jotaro</strong> e derrote o <strong>Heaven Ascension DIO</strong> até ele largar o <strong>Osso do DIO</strong> (o drop não é garantido).",
      "No ponto mais alto do mapa (Tallest Peak, em Naples), desinvoque e invoque o The World de novo."
    ],
    curiosidades: [
      "Não existe outro jeito de obter: nada de gamepass, só a quest.",
      "Não faça a quest do Made in Heaven ao mesmo tempo: uma reseta o progresso da outra.",
      "Estreou em janeiro de 2021 e levou nerfs que nenhum outro Stand do jogo recebeu.",
      "Um guia de tier list aponta que ele tem a maior pontuação base de skill do jogo (75), logo à frente do Killer Queen: Bites the Dust (74)."
    ]
  },

  swgb: {
    nome: "Soft & Wet: Go Beyond", cor: "#2a9ac0", raridade: "Evolução", tier: "S+",
    usuario: "Josuke Higashikata (JoJolion)", tipo: "Stand de bolhas (evoluído)", anime: "JoJolion (Parte 8)",
    descricao: "A versão evoluída do Soft & Wet: corrige a fraqueza da forma base e adiciona bolhas de dano verdadeiro.",
    img: "img/stands/swgb.png",
    videos: [],
    moveset: [
      "Bubble Generation — gera bolhas para controlar o espaço e estender combos",
      "Explosive Bubbles — bolhas que explodem ao contato",
      "Plunder — a bolha rouba propriedades do alvo",
      "True Damage Bubbles — bolhas de dano verdadeiro, exclusivas do Go Beyond"
    ],
    comoObter: [
      "Obtenha o <strong>Soft & Wet</strong> pela Rib Cage of the Saint's Corpse (20% de chance).",
      "Tenha o spec <strong>Spin</strong> equipado e fale com o NPC <strong>Jesus</strong>: ele fica com o Soft & Wet (e guarda ele, mesmo se sair do servidor).",
      "Volte ao Jesus com um <strong>Killer Queen</strong> e uma <strong>Rokakaka</strong>, ainda com o Spin equipado.",
      "Ele dá o <strong>Soft & Wet: Go Beyond</strong> em troca (e o chapéu do Josefumi como cosmético). Fonte: wiki Fandom (Soft & Wet: Go Beyond).",
      "ATENÇÃO: não use a Rokakaka no Killer Queen antes de entregar — a quest exige o KQ intacto."
    ],
    curiosidades: [
      "As bolhas de dano verdadeiro são apontadas por guias como a mecânica que levou o Go Beyond ao topo da tier list."
    ]
  },

  tusk3: {
    nome: "Tusk Act 3", cor: "#3a8a7a", raridade: "Evolução", tier: "A",
    usuario: "Johnny Joestar", tipo: "Stand de longo alcance (evoluído)", anime: "Steel Ball Run (Parte 7)",
    descricao: "O terceiro ato do Tusk: ataques de unhas à distância com o Golden Nail.",
    img: "img/stands/tusk3.png",
    videos: [],
    moveset: [
      "Nails — disparo de unhas à distância",
      "Tea Time — habilidade característica do Tusk",
      "Golden Nail — a unha dourada do terceiro ato"
    ],
    comoObter: [
      "Tenha o <strong>Tusk Act 2</strong> e Worthiness V.",
      "Encontre o NPC <strong>Jesus</strong>, que aparece em pontos aleatórios (fim do túnel do trem, Eli's Pizzeria, Boss' Caffe, entre outros).",
      "Só o primeiro jogador do servidor a falar com ele consegue o upgrade, e você precisa estar no servidor quando ele surgir."
    ],
    curiosidades: ["Também chamado de TA3 ou Golden Nail III pela comunidade."]
  },

  tusk2: {
    nome: "Tusk Act 2", cor: "#4a9a8a", raridade: "Evolução", tier: "B",
    usuario: "Johnny Joestar", tipo: "Stand de longo alcance", anime: "Steel Ball Run (Parte 7)",
    descricao: "O segundo ato do Tusk: unhas, Spin Slash e o Golden Nail.",
    img: "img/stands/tusk2.png",
    videos: [],
    moveset: [
      "Nails — disparo de unhas à distância",
      "Golden Nail — a unha dourada",
      "Spin Slash — corte com rotação",
      "Tea Time — habilidade característica do Tusk"
    ],
    comoObter: [
      "Tenha o <strong>Tusk Act 1</strong>, o estilo <strong>Spin</strong> equipado e Worthiness V.",
      "Aplique o <strong>Left Arm of the Saint's Corpse</strong> no Act 1.",
      "Atenção: vampiros não podem usar Spin, então virar vampiro fecha essa linha de evolução."
    ],
    curiosidades: ["Também chamado de TA2 pela comunidade."]
  },

  tusk1: {
    nome: "Tusk Act 1", cor: "#5aaa9a", raridade: "Evolução", tier: "C",
    usuario: "Johnny Joestar", tipo: "Stand de longo e curto alcance", anime: "Steel Ball Run (Parte 7)",
    descricao: "O primeiro ato do Tusk: giros, planeio e tiros de unha rotativos.",
    img: "img/stands/tusk1.png",
    videos: [],
    moveset: [
      "Spin — usa a rotação como base dos ataques",
      "Gliding — planeio para se mover pelo mapa",
      "Rotating Nail Shots — tiros de unha com rotação"
    ],
    comoObter: [
      "Use a <strong>Rib Cage of the Saint's Corpse</strong> (item de Steel Ball Run).",
      "Com <strong>Worthiness V</strong> você tem garantia de não virar pedra no processo."
    ],
    curiosidades: ["Também chamado de TA1 ou Golden Nail I pela comunidade."]
  },

  hermitpurple: {
    nome: "Hermit Purple", cor: "#7a4a9a", raridade: "Raro", tier: "D",
    usuario: "Joseph Joestar", tipo: "Stand de curto alcance", anime: "Stardust Crusaders (Parte 3)",
    descricao: "Os espinhos do Joseph: fotografia espiritual, transmissão de Hamon e agarrões.",
    img: "img/stands/hermitpurple.png",
    videos: [],
    moveset: [
      "Spirit Photography — adivinhação e fotografia espiritual",
      "Hamon Transmission — transmite Hamon pelos espinhos",
      "Grappling — agarra e prende o alvo"
    ],
    comoObter: [
      "Sai na roleta da <strong>Mysterious Arrow</strong> com chance de <strong>6%</strong> (fonte: wiki Fandom).",
      "Desde o update de Halloween 2025, Worthiness custa 0 pontos e é um node único."
    ],
    curiosidades: [
      "Fica no tier D em guias recentes, mas combina com Specs de Hamon: com Hamon, cada golpe tem chance de incendiar (passiva Hamon Combination).",
      "No jogo era chamado de 'Violet Vine' por causa dos direitos autorais."
    ]
  },

  // ==================== CONFIRMADOS NA FANDOM (auditoria 2026) ====================
  cdr: {
    nome: "Crazy Diamond Requiem", cor: "#e090b8", raridade: "Evolução (Requiem)", tier: "S",
    usuario: "Josuke Higashikata", tipo: "Stand Requiem de curto alcance", anime: "Diamond is Unbreakable (Parte 4)",
    stats: S("A", "B", "C", "A+", "B", "A"),
    descricao: "A evolução Requiem do Crazy Diamond, obtida pela quest do Arrowsmith. Cura, prende e bate forte.",
    img: "img/stands/cdr.png",
    videos: [],
    moveset: [
      "Punch (M1) — soco padrão de Requiem",
      "Stand Barrage (E) — barragem padrão",
      "Barrage Finisher (R) — soco pesado com ragdoll",
      "You're In My Range (Y) — prende o oponente e solta uma barragem (15s de cooldown)",
      "Crazy Beatdown (G) — batida de cura + beatdown cujo dano final escala com a vida perdida do alvo (80s de cooldown)",
      "Diamond Slam (T) — esmaga o chão e forma estilhaços de diamante que buscam os alvos (15-30s de cooldown, reduz com upgrades)",
      "Blood Reformation (Z) — lança sangue para puxar o oponente para perto (20s de cooldown)",
      "Restoration Trap (X) — cristaliza o oponente, prendendo-o no lugar (20s de cooldown)",
      "Diamond is Unbreakable (H) — campo de restauração que impede a morte de aliados dentro dele e os cura ao dissipar (90s de cooldown)"
    ],
    skillsExplicacao: [
      { nome: "Diamond is Unbreakable (H)", texto: "A assinatura do CDR: um campo que impede que qualquer pessoa dentro dele morra, curando aliados quando o campo acaba. Combina com jogadas arriscadas de equipe." },
      { nome: "Crazy Beatdown (G)", texto: "Cura o oponente até a vida cheia e executa um beatdown longo cujo último golpe escala com a vida que o alvo tinha perdido. Igual ao Crazy Diamond original, mas com dano maior." }
    ],
    comoObter: [
      "Complete a <strong>quest do Arrowsmith (Isabelle)</strong> para desbloquear a criação de Flechas Requiem.",
      "Equipe o <strong>Crazy Diamond</strong> e converse com a Arrowsmith para iniciar a evolução.",
      "Quest 1: cure 3.000 de HP de jogadores com o modo de cura (H).",
      "Quest 2: derrote 40 criminosos (Alpha Thugs, Corrupt Police).",
      "Quest 3: vença 25 jogadores com Stands vilões (The World, Killer Queen, Made in Heaven etc.).",
      "Quest 4: derrote o boss <strong>Yoshikage Kira</strong> usando o Crazy Diamond.",
      "Fale com a Arrowsmith entre cada etapa. Fonte: wiki Fandom (Crazy Diamond Requiem)."
    ],
    curiosidades: [
      "Crazy Diamond Requiem ainda é listado como 'planned' em partes da wiki, mas a página dedicada já descreve quests, skills e valores de dano no jogo atual.",
      "A skin 'Mecha Diamond' veio do primeiro conceito do CDR."
    ]
  },

  cpau: {
    nome: "Chili Pepper (Alternate Universe)", cor: "#4aa8e0", raridade: "Evolução", tier: "S",
    usuario: "Akira Otoishi", tipo: "Stand elétrico (evolução não-canon)", anime: "Diamond is Unbreakable (Parte 4, não-canon)",
    stats: S("B", "A", "B", "B", "A", "B"),
    descricao: "A evolução não-canon do Red Hot Chili Pepper: guitarra elétrica carrega cargas que ampliam o dano das habilidades.",
    img: "img/stands/cpau.png",
    videos: [],
    moveset: [
      "Punch (M1) — combo de 5 golpes, 37,5 de dano total",
      "Barrage (E) — barragem de 1,3 por soco (52 total), 7s de cooldown",
      "Barrage Finisher (R) — soco pesado de 12 de dano, 7s de cooldown",
      "Electric Guitar (G) — toca guitarra para encher a barra de Electric Charge (2s, cancelável)",
      "Thunderbolt (T) — projétil de médio alcance: 16 sem carga, 25 carregado (+10 de chip em bloqueio)",
      "Pinky Slash (Y) — corte de perto: 20 de dano, aplica sangramento quando carregado (15 HP em 8s); quebra bloqueio, 16s",
      "Godspeed Teleport (X) — dash/teleporte instantâneo na direção da última tecla; causa 6,7 de dano ao atravessar alguém (até 3 cargas com upgrades)",
      "Lightning Drop (C) — queda de punho: 12 no chão, até 30 vindo do ar (bypass com carga), 18s",
      "Lightning Elbow (Z) — avanço de cotovelada: 12,5 sem carga / 20 com carga, ragdoll com carga, 20s"
    ],
    skillsExplicacao: [
      { nome: "Electric Guitar (G) + cargas", texto: "A mecânica central: tocar guitarra enche a barra de carga, que aumenta o dano do Thunderbolt, adiciona sangramento ao Pinky Slash e transforma o Lightning Elbow num combo extender com ragdoll. Gerencie a barra entre trocas." },
      { nome: "Godspeed Teleport (X)", texto: "Melhor mobilidade do Stand: teleporte na direção da última tecla (WASD), com dano de contato. Com upgrades chega a 3 cargas." }
    ],
    comoObter: [
      "Obtenha o <strong>Red Hot Chili Pepper</strong> (5% na Mysterious Arrow).",
      "Use o <strong>Heart of the Saint's Corpse</strong> com <strong>Worthiness V</strong> no RHCP.",
      "Sem Worthiness V (e Prestige I) você vira pedra e perde o Heart. Fonte: wiki Fandom (Chili Pepper AU)."
    ],
    curiosidades: [
      "É uma evolução não-canon criada para o YBA, no estilo do TWAU.",
      "A carga elétrica também influencia quem pode bloquear seus golpes: sem carga, quase tudo é bloqueável."
    ]
  },

  stw: {
    nome: "Shadow The World", cor: "#4a2a5a", raridade: "Evolução", tier: "S",
    usuario: "Shadow DIO", tipo: "Stand de curto/médio alcance", anime: "JoJo's Bizarre Adventure (mangá de HDDA / non-canon)",
    stats: S("A", "A", "C", "B", "A", "A"),
    descricao: "A forma sombria do The World: Time Stop quase instantâneo, facas em rajada e teleporte de tempo.",
    img: "img/stands/stw.png",
    videos: [],
    moveset: [
      "Punch (M1) — socos e chutes de 9 de dano cada",
      "Stand Combo (E) — o Stand aparece e conecta 4 socos (pode ser usado durante stun)",
      "Heavy Chop (R) — avanço com corte que atordoa (17,5 de dano)",
      "Knife Barrage (T) — saca 10 facas e joga 5 miradas ( shotgun-style ); durante o Time Stop, cooldown de 1s",
      "Charisma (Y) — bebe vinho lendo o Diário de DIO: se atacado enquanto lê, para o tempo e puni o atacante (counter)",
      "Punishment (G) — soco perfurante com knockback e dano alto",
      "Time Stop (H) — parada do tempo de carga muito mais rápida que os outros The World, porém mais curta",
      "Time Skip (Z) — teleporta para a posição do cursor",
      "Time Switch (X) — para o tempo e troca de lugar com o alvo mirado",
      "Passiva — Dark Rebirth: se você é vampiro, os M1s dão sangue (como drenagem)",
      "Passiva — Unrivaled Power: o Stand não pode ser stand-crashado de forma alguma"
    ],
    skillsExplicacao: [
      { nome: "Charisma (Y)", texto: "Counter do Stand: leia o Diário com vinho na mão; se for atacado durante a leitura, o tempo para e você puni gratuitamente. Combinado com o Time Stop de carga rápida, é o coração do kit defensivo." },
      { nome: "Time Switch (X)", texto: "Troca de posição com o alvo dentro do tempo parado — confunde totalmente a mira do oponente e configura combos de facas." }
    ],
    comoObter: [
      "Equipe o <strong>The World</strong> e fale com o NPC em cuestión da quest (a lore aponta para a personagem que pede a <strong>Bandana do DIO</strong>).",
      "A <strong>Bandana do DIO</strong> dropa a <strong>15%</strong> do boss <strong>Jotaro Kujo</strong>.",
      "Entregue a bandana segurando-a com o The World equipado para receber o Shadow The World.",
      "ATENÇÃO: nunca use um Stand Virus Capsule numa skin do The World — a skin não é transferida (exceto a skin Shadow The World clássica).",
      "Fonte: wiki Fandom (Shadow The World)."
    ],
    curiosidades: [
      "Antes de virar Stand próprio, Shadow The World era uma skin do The World.",
      "Quem recebe o STW pela quest mostra 'REDEEMED: YES' no perfil do Stand; via skin crate, 'NO'."
    ]
  }
};


