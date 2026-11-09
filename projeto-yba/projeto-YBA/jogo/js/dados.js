// ===== Dados da wiki: Your Bizarre Adventure (YBA - Roblox / JoJo) =====

// Helper de stats
const S = (p, v, a, d, pr, po) => ({ Poder: p, Velocidade: v, Alcance: a, Durabilidade: d, Precisão: pr, Potencial: po });

const STANDS = {
  // ==================== LENDÁRIOS / MÍTICOS ====================
  starplatinum: {
  nome: "Star Platinum", cor: "#6b3fa0", raridade: "Lendário", tier: "S",
  usuario: "Jotaro Kujo", tipo: "Stand de curto alcance", anime: "Stardust Crusaders (Parte 3)",
  stats: S("A", "A", "C", "A", "A", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/44/SP_New_Pose_FIXED.png/revision/latest?cb=20230324103427",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Use uma <strong>Stand Arrow</strong> — chance aproximada de <strong>3,5%</strong>.",
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
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/8/81/SPTW_New_Pose_FIXED.png/revision/latest?cb=20230324165406",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
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
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/99/TW_New_Pose.png/revision/latest?cb=20230324083132",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Chance de <strong>~1%</strong> na roleta da Stand Arrow.",
  "Pode vir de <strong>trade</strong> (um dos mais valiosos do mercado).",
  "Evolui para <strong>The World High Voltage</strong> com o Diário de DIO.",
  "Evolui para <strong>The World Requiem</strong> com a Flecha Requiem."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/2/2a/NEW_TW.jpg/revision/latest?cb=20210303210940",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha <strong>The World</strong> equipado.", "Use o <strong>Diário de DIO</strong> (drop do boss DIO)."],
  curiosidades: ["A skin 'High Voltage' vem de Eyes of Heaven, onde DIO derrota o Jotaro."]
  },

  twau: {
  nome: "The World (Alternate Universe)", cor: "#8a7a3a", raridade: "Raro", tier: "A",
  usuario: "DIO (Universo Alternativo)", tipo: "Stand de curto alcance", anime: "Steel Ball Run (Parte 7)",
  stats: S("A", "A", "C", "B", "B", "B"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/1/10/TWAU_YBA.png/revision/latest?cb=20261016172234",
  descricao: "A versão do The World do universo de Steel Ball Run.",
  moveset: [
  "MUDA Barrage (E) — barragem padrão",
  "Knife Throw (R) — facas com arco diferente",
  "Time Stop (Z) — parada de tempo mais curta",
  "Alternate Kick (F) — chute giratório"
  ],
  combos: ["Knife Throw → Time Stop → Alternate Kick"],
  dica: "O Time Stop mais curto pune menos, mas recarrega mais rápido — jogue agressivo.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow.", "Também via trade ou Rokakaka."],
  curiosidades: ["No mangá de Steel Ball Run, o DIO alternativo é chamado de 'Dio Brando'."]
  },

  ger: {
  nome: "Gold Experience Requiem", cor: "#d4a017", raridade: "Mítico", tier: "S+",
  usuario: "Giorno Giovanna", tipo: "Stand Requiem", anime: "Golden Wind (Parte 5)",
  stats: S("∞", "A", "C", "A", "A", "∞"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/6/69/CurrentGERRequiem.png.png/revision/latest?cb=20210415203003",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
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
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/d/dc/GE_Current_model.png/revision/latest?cb=20241205154259",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow.", "Evolui para o <strong>GER</strong> com a Flecha Requiem."],
  curiosidades: ["É o Stand com a melhor cura fora dos Requiems."]
  },

  kingcrimson: {
  nome: "King Crimson", cor: "#8a1a2a", raridade: "Lendário", tier: "A+",
  usuario: "Diavolo", tipo: "Stand de curto alcance", anime: "Golden Wind (Parte 5)",
  stats: S("A", "B", "C", "B", "C", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4b/King_Crimson_Remodel_2022.png/revision/latest?cb=20221224133103",
  descricao: "Apague o tempo e fique intocável. O Stand do Diavolo.",
  moveset: [
  "Epitaph (R) — prevê o próximo golpe e concede esquiva automática",
  "Time Erase (Z) — apaga o tempo; você fica invulnerável e se move livremente",
  "Impale (F) — perfuração de dano alto com sangramento",
  "Creative Precision (E) — barragem padrão"
  ],
  combos: ["Epitaph (ler) → Time Erase (atrás do inimigo) → Impale", "Impale → barrage → recuar com Time Erase"],
  dica: "O Time Erase NÃO é defesa grátis — dano contínuo ainda te acerta. Use o Epitaph primeiro para ler o inimigo.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: [
  "Chance de <strong>~1%</strong> na roleta da Stand Arrow.",
  "Drop direto (raro) do boss <strong>Diavolo</strong>.",
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
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/b/b6/KcrRemodel.png/revision/latest?cb=20230709171029",
  descricao: "O King Crimson evoluído, capaz de apagar o destino do oponente.",
  moveset: [
  "Epitaph Requiem (R) — esquiva 2 golpes seguidos",
  "Time Erase+ (Z) — apaga o tempo e teleporta você até o inimigo",
  "Destiny Impale (F) — perfuração que ignora parte da defesa",
  "Reality Erase (X) — remove buffs do oponente"
  ],
  combos: ["Time Erase+ (teleporte) → Destiny Impale → barrage", "Reality Erase → barrage → Impale"],
  dica: "O Time Erase+ com teleporte é o melhor gap-closer do jogo — use para fugir de zonas de dano também.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha <strong>King Crimson</strong> equipado.", "Use a <strong>Flecha Requiem</strong> (chance de falha)."],
  curiosidades: ["Um dos Stands mais raros do jogo inteiro."]
  },

  scr: {
  nome: "Chariot Requiem", cor: "#5a5a6a", raridade: "Lendário", tier: "S",
  usuario: "Jean Pierre Polnareff (corpo)", tipo: "Stand Requiem", anime: "Golden Wind (Parte 5)",
  stats: S("B", "A", "A", "B", "C", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/e/e1/Scr_new.png/revision/latest?cb=20211026065702",
  descricao: "O Stand das almas: troca Stands e confunde o inimigo.",
  moveset: [
  "Soul Swap (R) — troca a posição do seu Stand com o do inimigo",
  "Shadow Barrage (E) — barragem de sombras de longa distância",
  "Soul Protect (Z) — escudo de almas que absorve dano",
  "Chariot Slash (F) — estocada rápida"
  ],
  combos: ["Soul Swap (confusão) → Shadow Barrage de longe", "Chariot Slash → barrage → recuar"],
  dica: "O Soul Swap desarma combos inimigos: troque a posição dos Stands no meio do barrage deles.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha o <strong>Silver Chariot</strong> equipado.", "Use a <strong>Flecha Requiem</strong>."],
  curiosidades: ["No anime, o SCR trocou a alma de todos os presentes de corpo."]
  },

  madeinheaven: {
  nome: "Made in Heaven", cor: "#5a3a8a", raridade: "Lendário", tier: "S",
  usuario: "Enrico Pucci", tipo: "Stand de velocidade infinita", anime: "Stone Ocean (Parte 6)",
  stats: S("B", "∞", "C", "B", "A", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/e/eb/NEW_MIH_IMAGE_PAGE.png/revision/latest?cb=20210419195152",
  descricao: "Acelere o universo e jogue mais rápido que qualquer um.",
  moveset: [
  "Heaven Barrage (E) — barragem em velocidade absurda",
  "Universe Acceleration (Z) — acelera o próprio tempo de recarga das skills",
  "Heaven Slash (R) — corte instantâneo com dash",
  "Time Acceleration (passiva) — velocidade de movimento e recarga muito maior"
  ],
  combos: ["Heaven Slash → Heaven Barrage → recuar antes do counter", "Universe Acceleration → spam de skills"],
  dica: "A passiva de aceleração reduz seus cooldowns: alterne skills sem parar e não deixe o inimigo respirar.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Complete a questline do <strong>Pucci</strong> (boss do Corpo 5).", "Ou obtenha via trade."],
  curiosidades: ["No anime, o MIH reinicia o universo inteiro — a passiva do jogo é um tributo a isso."]
  },

  d4clt: {
  nome: "D4C: Love Train", cor: "#2a5a8a", raridade: "Mítico", tier: "S+",
  usuario: "Funny Valentine", tipo: "Stand evoluído", anime: "Steel Ball Run (Parte 7)",
  stats: S("A", "A", "B", "A+", "B", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/a/aa/D4clt.png/revision/latest?cb=20220701203707",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Tenha o <strong>D4C</strong> equipado.", "Derrote o boss <strong>Funny Valentine</strong> e use a <strong>Coroa do Presidente</strong>."],
  curiosidades: ["É considerado um dos melhores Stands defensivos do YBA."]
  },

  cmoon: {
  nome: "C-Moon", cor: "#3a5a7a", raridade: "Lendário", tier: "S",
  usuario: "Enrico Pucci", tipo: "Stand de gravidade", anime: "Stone Ocean (Parte 6)",
  stats: S("A", "A", "B", "B", "B", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/98/C-moon4.png/revision/latest?cb=20220817000352",
  descricao: "Inverta a gravidade e torne o inimigo seu satélite.",
  moveset: [
  "Gravity Inversion (R) — inverte a gravidade do inimigo (ele 'cai' para cima)",
  "C-Moon Barrage (E) — barragem padrão",
  "Gravity Slam (F) — arremessa o oponente contra o chão",
  "Gravity Pull (T) — puxa o inimigo de longe"
  ],
  combos: ["Gravity Pull → barrage → Gravity Slam", "Gravity Inversion → punir o inimigo flutuando"],
  dica: "Gravity Inversion deixa o oponente indefeso por 3s — é a janela perfeita para barrage completa.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Complete a questline do <strong>Pucci</strong>.", "Evolui para <strong>Made in Heaven</strong> com o item de quest final."],
  curiosidades: ["É o estágio intermediário entre Whitesnake e Made in Heaven."]
  },

  tusk4: {
  nome: "Tusk Act 4", cor: "#3a7a6a", raridade: "Lendário", tier: "S",
  usuario: "Johnny Joestar", tipo: "Stand de rotação infinita", anime: "Steel Ball Run (Parte 7)",
  stats: S("A+", "B", "B", "B", "A", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/3a/NEW_TA4_IMAGE_PAGE.png/revision/latest?cb=20210503185153",
  descricao: "O Golden Spin perfeito: dano que ignora dimensões e defesas.",
  moveset: [
  "Nail Shot (E) — disparo de unha teleguiado",
  "Golden Spin (R) — projétil com rotação infinita que atravessa defesa",
  "Infinite Rotation (F) — prende o oponente em rotação (não pode fugir)",
  "Nail Barrage (T) — rajada de unhas"
  ],
  combos: ["Golden Spin → Infinite Rotation (prender) → Nail Barrage", "Nail Shot → aproximação → barrage"],
  dica: "O Infinite Rotation impede dash e fuga: prenda o inimigo e solte tudo.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Complete a questline do <strong>Gyro Zeppeli</strong> (Corrida de Cavalos).", "Precisa do Spec <strong>Spin</strong> desbloqueado."],
  curiosidades: ["É o único Stand que atravessa a barreira do D4C Love Train no mangá."]
  },

  // ==================== RAROS ====================
  crazycd: {
  nome: "Crazy Diamond", cor: "#d46a9a", raridade: "Lendário", tier: "A",
  usuario: "Josuke Higashikata", tipo: "Stand de curto alcance", anime: "Diamond is Unbreakable (Parte 4)",
  stats: S("A", "B", "C", "A", "B", "B"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4f/Crazy_Diamond_New_Pose.png/revision/latest?cb=20230324094341",
  descricao: "Conserte tudo — inclusive você mesmo no meio da luta.",
  moveset: [
  "DORA Barrage (E) — barragem padrão",
  "Restore (R) — cura a si mesmo ou aliados",
  "Object Slam (F) — arremessa objeto consertado como projétil",
  "DORA Punch (M1 carregado) — soco forte"
  ],
  combos: ["Object Slam → barrage → DORA Punch", "Restore (no meio do combo inimigo) → punir"],
  dica: "Curar no meio da luta força o inimigo a jogar agressivo — use isso para puxar erros.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow."],
  curiosidades: ["Josuke enraivece se alguém insultar seu penteado — e o Stand acompanha o humor."]
  },

  cream: {
  nome: "Cream", cor: "#3a3a4a", raridade: "Raro", tier: "A",
  usuario: "Vanilla Ice", tipo: "Stand de aniquilação", anime: "Stardust Crusaders (Parte 3)",
  stats: S("A", "B", "C", "C", "D", "B"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4b/Cream_Remodel_YBA1.png/revision/latest?cb=20210607210547",
  descricao: "Vire um buraco negro e apague o inimigo da existência.",
  moveset: [
  "Void Dash (R) — vira nada e avança invulnerável",
  "Void Devour (F) — devora tudo à frente com o buraco negro",
  "Cream Barrage (E) — barragem padrão",
  "Void Ambush (T) — sai do void atrás do inimigo"
  ],
  combos: ["Void Dash (atrás) → Void Devour → barrage", "Void Ambush → barrage → Void Dash de fuga"],
  dica: "O Void Devour ignora bloqueio — é o combo breaker definitivo, mas o cooldown é longo.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow."],
  curiosidades: ["Vanilla Ice decapitou a si mesmo para servir de sangue ao DIO — dedicação total."]
  },

  purplehaze: {
  nome: "Purple Haze", cor: "#7a3a8a", raridade: "Raro", tier: "A",
  usuario: "Pannacotta Fugo", tipo: "Stand de vírus", anime: "Golden Wind (Parte 5)",
  stats: S("A", "B", "C", "B", "C", "B"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/d/d5/Purple_Haze_Clean_Image.png/revision/latest?cb=20241205160324",
  descricao: "O vírus mais letal de JoJo: dano contínuo por área.",
  moveset: [
  "Virus Capsule (R) — lança cápsula de vírus em área",
  "Purple Barrage (E) — barragem padrão",
  "Virus Cloud (F) — nuvem venenosa persistente",
  "Rage Mode (T) — aumenta o próprio dano temporariamente"
  ],
  combos: ["Virus Capsule → Force exit zone → punir com barrage", "Virus Cloud (zona) → lute dentro dela"],
  dica: "O vírus ignora bloqueio e continua fazendo dano — force o inimigo a sair da zona e puna.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow."],
  curiosidades: ["O vírus do Purple Haze mata em 30 segundos no anime — até aliados fogem dele."]
  },

  metallica: {
  nome: "Metallica", cor: "#6a6a7a", raridade: "Raro", tier: "A",
  usuario: "Risotto Nero", tipo: "Stand de ferro", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "C", "B", "B", "A"),
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/9a/NEW_HG_IMAGE_PAGE.png/revision/latest?cb=20210509165146",
  descricao: "Manipule o ferro do sangue do inimigo — luta invisível.",
  moveset: [
  "Iron Needles (R) — lâminas criadas dentro do corpo do inimigo",
  "Invisibility (Z) — fica invisível por alguns segundos",
  "Metallica Barrage (E) — barragem padrão",
  "Iron Manipulation (F) — cria armadilhas de ferro no chão"
  ],
  combos: ["Invisibility → aproximação → Iron Needles → barrage", "Iron Manipulation (zona) → force o caminho"],
  dica: "Use a invisibilidade para reposicionar — o Iron Needles tem alcance curto mas dano alto.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow."],
  curiosidades: ["Risotto quase matou o Doppio sozinho — o Metallica é subestimado."]
  },

  d4c: {
  nome: "Dirty Deeds Done Dirt Cheap (D4C)", cor: "#2a5a8a", raridade: "Raro", tier: "A",
  usuario: "Funny Valentine", tipo: "Stand dimensional", anime: "Steel Ball Run (Parte 7)",
  stats: S("B", "A", "C", "B", "B", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/f/f3/NEW_D4C_IMAGE_PAGE.png/revision/latest?cb=20210419194857",
  descricao: "Viaje entre dimensões e traga versões alternativas de si mesmo.",
  moveset: [
  "Dimension Hop (R) — teleporta entre dimensões (esquiva)",
  "Alternate Self (F) — invoca uma versão alternativa para atacar",
  "D4C Barrage (E) — barragem padrão",
  "Pocket Dimension (Z) — esconde você e aliados numa dimensão bolso"
  ],
  combos: ["Dimension Hop → Alternate Self (distrair) → barrage", "Pocket Dimension → escapar de Time Stop"],
  dica: "O Alternate Self dá você um 'clon' temporário: use para dividir a atenção em 1v2.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow.", "Evolui para <strong>D4C Love Train</strong> com a Coroa do Presidente."],
  curiosidades: ["O nome do Stand é uma música da banda AC/DC."]
  },

  whitesnake: {
  nome: "Whitesnake", cor: "#4a6a5a", raridade: "Raro", tier: "A",
  usuario: "Enrico Pucci", tipo: "Stand de roubo", anime: "Stone Ocean (Parte 6)",
  stats: S("B", "B", "C", "B", "B", "A"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/1/1b/Whitesnakeee.png/revision/latest?cb=20250214182317",
  descricao: "Roube habilidades e memórias do inimigo em forma de DISC.",
  moveset: [
  "Steal DISC (R) — rouba uma skill aleatória do oponente",
  "Illusion (Z) — cria um disfarce de outro jogador",
  "Whitesnake Barrage (E) — barragem padrão",
  "Goop Slam (F) — ataque de ácido"
  ],
  combos: ["Steal DISC (início) → use a skill roubada contra ele", "Illusion (confusão) → barrage pelas costas"],
  dica: "O skill roubado pode ser uma ultimate — roubar o Time Stop de um DIO é devastador.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~3%</strong> na roleta da Stand Arrow.", "Evolui para <strong>C-Moon</strong> na questline do Pucci."],
  curiosidades: ["Os DISCs roubados podem ser guardados e usados depois."]
  },

  // ==================== INCOMUNS ====================
  anubis: {
  nome: "Anubis", cor: "#8a6a2a", raridade: "Incomum", tier: "B",
  usuario: "N'Doul / portador da espada", tipo: "Stand de espada", anime: "Stardust Crusaders (Parte 3)",
  stats: S("B", "A", "C", "B", "A", "C"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/5/58/New-and-clean-anubis.png/revision/latest?cb=20241205155534",
  descricao: "A espada possuída que corta tudo em sequências letais.",
  moveset: [
  "Slash Combo (E) — sequência de cortes rápidos",
  "Heavy Slash (R) — corte pesado que atravessa bloqueio",
  "Anubis Dash (T) — dash com corte embutido",
  "Possession (passiva) — dano aumenta a cada corte acertado"
  ],
  combos: ["Slash Combo → Heavy Slash → Anubis Dash (fuga)", "Anubis Dash → Slash Combo"],
  dica: "A passiva de dano acumulativo recompensa agressividade — não pare de atacar.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~10%</strong> na roleta da Stand Arrow.", "Drop raro do boss <strong>Kira</strong>."],
  curiosidades: ["Anubis é um Stand 'sem usuário fixo': a espada possue quem a empunha."]
  },

  stickyfingers: {
  nome: "Sticky Fingers", cor: "#2a7a5a", raridade: "Incomum", tier: "B",
  usuario: "Bruno Bucciarati", tipo: "Stand de zippers", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "C", "B", "B", "B"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/7/77/New_SF_Curr_vers.png/revision/latest?cb=20241205152540",
  descricao: "Abra zippers em tudo — inclusive no próprio corpo.",
  moveset: [
  "Zipper Punch (E) — soco com zipper que abre a defesa",
  "Zipper Grab (R) — puxa o inimigo para perto",
  "Detach (Z) — separa partes do corpo para esquiva",
  "Zipper Barrage (F) — barragem com buracos de zipper"
  ],
  combos: ["Zipper Grab → Zipper Punch → barrage", "Detach (esquiva) → contra-ataque"],
  dica: "O Zipper Grab é um combo starter garantido: puxou, puniu.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~10%</strong> na roleta da Stand Arrow."],
  curiosidades: ["Bucciarati abriu um zipper no próprio peito para esconder os aliados."]
  },

  hierophant: {
  nome: "Hierophant Green", cor: "#2a8a5a", raridade: "Incomum", tier: "B",
  usuario: "Noriaki Kakyoin", tipo: "Stand de longo alcance", anime: "Stardust Crusaders (Parte 3)",
  stats: S("B", "B", "A", "C", "B", "B"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/9a/NEW_HG_IMAGE_PAGE.png/revision/latest?cb=20210509165146",
  descricao: "O mestre da distância: Emerald Splash e armadilhas de rede.",
  moveset: [
  "Emerald Splash (R) — rajada de esmeraldas teleguiadas",
  "20m Radius (Z) — desdobra o Stand numa área de armadilhas",
  "Tentacle Grab (F) — agarra o inimigo de longe",
  "Hierophant Barrage (E) — barragem de longa distância"
  ],
  combos: ["20m Radius (zona) → punir quem entrar com Emerald Splash", "Tentacle Grab → aproximação → barrage"],
  dica: "Lute de longe: Stands de curto alcance não conseguem te alcançar dentro do raio de 20m.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~10%</strong> na roleta da Stand Arrow."],
  curiosidades: ["Kakyoin revelou o segredo do Time Stop do DIO com a última Emerald Splash."]
  },

  chariot: {
  nome: "Silver Chariot", cor: "#8a8a9a", raridade: "Raro", tier: "B",
  usuario: "Jean Pierre Polnareff", tipo: "Stand de espada", anime: "Stardust Crusaders (Parte 3)",
  stats: S("B", "A", "C", "C", "A", "B"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/a/a0/SilverChariotNew.png/revision/latest?cb=20260504182300",
  descricao: "O espadachim mais rápido: armadura opcional, velocidade máxima.",
  moveset: [
  "Rapid Thrust (E) — sequência de estocadas",
  "Armor Off (passiva/R) — tira a armadura: +velocidade, -defesa",
  "Chariot Dash (T) — dash com estocada",
  "Afterimage (F) — deixa uma imagem falsa enquanto esquiva"
  ],
  combos: ["Armor Off → Rapid Thrust → Chariot Dash", "Afterimage (confusão) → estocada pelas costas"],
  dica: "Com a armadura fora, você vence a maioria dos Stand em velocidade — mas morre fácil: não barre, esquive.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~10%</strong> na roleta da Stand Arrow.", "Evolui para o <strong>SCR</strong> com a Flecha Requiem."],
  curiosidades: ["No anime, o Chariot 'venceu' o Anubis ao jogar no escuro — a luz refletida enganou o inimigo."]
  },

  // ==================== COMUNS ====================
  aerosmith: {
  nome: "Aerosmith", cor: "#3a7a8a", raridade: "Comum", tier: "C",
  usuario: "Narancia Ghirga", tipo: "Stand de avião", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "A", "C", "C", "C"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/0/05/Aerosmith_Alone.png/revision/latest?cb=20241205154710",
  descricao: "Um aviãozinho de brinquedo com metralhadora de verdade.",
  moveset: [
  "Volare Via (E) — rajada de metralhadora teleguiada",
  "Bomb Drop (R) — solta bomba em área",
  "Aerial Recon (T) — revela inimigos escondidos no mapa",
  "Fly By (F) — investida aérea"
  ],
  combos: ["Aerial Recon (achar) → Volare Via de longe", "Bomb Drop (zona) → punir quem fugir"],
  dica: "É o melhor Stand para 'hit and run': ataque do céu e nunca deixe o inimigo te alcançar.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~25%</strong> na roleta da Stand Arrow."],
  curiosidades: ["Narancia calculava a posição dos inimigos com régua e calculadora — e funcionava."]
  },

  sixpistols: {
  nome: "Sex Pistols", cor: "#8a7a4a", raridade: "Comum", tier: "C",
  usuario: "Guido Mista", tipo: "Stand de revólver", anime: "Golden Wind (Parte 5)",
  stats: S("B", "B", "A", "C", "B", "C"),
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/7/72/SixPistolsRemodel.png/revision/latest?cb=20251018223726",
  descricao: "Seis mini-pistoleiros que ricocheteiam balas em ângulos impossíveis.",
  moveset: [
  "Ricochet Shot (E) — bala que faz curvas até acertar",
  "Barrage Shot (R) — tiros em sequência rápida",
  "Number 4 Curse (passiva) — dano extra aleatório (o azar do nº4)",
  "Pistol Wall (F) — barreira de balas defensiva"
  ],
  combos: ["Ricochet Shot (por trás de cobertura) → barrage", "Pistol Wall → recuar e atirar de novo"],
  dica: "O ricochete acerta quem tenta se esconder atrás de paredes — jogue ao redor da cobertura, não direto.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~25%</strong> na roleta da Stand Arrow."],
  curiosidades: ["Mista tem pavor do número 4 — e o jogo referencia isso na passiva."]
  },

  mrpresident: {
  nome: "Mr. President", cor: "#8a5a3a", raridade: "Comum", tier: "D",
  usuario: "Coco Jumbo (tartaruga)", tipo: "Stand de sala segura", anime: "Golden Wind (Parte 5)",
  stats: S("D", "D", "C", "A", "D", "B"),
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/7/77/New_SF_Curr_vers.png/revision/latest?cb=20241205152540",
  descricao: "Uma tartaruga com uma sala secreta nas costas. Segurança absoluta.",
  moveset: [
  "Enter Room (E) — entra na sala segura (invulnerável)",
  "Room Invite (R) — puxa aliado para dentro",
  "Key Throw (F) — joga a chave para teleportar aliados",
  "Turtle Shell (passiva) — reduz dano recebido fora da sala"
  ],
  combos: ["Enter Room (fuga) → sair atrás do inimigo cansado", "Room Invite → heal de Spec dentro da sala"],
  dica: "Não é para lutar: é para farmar em paz, escapar de ganks e guardar loot.",
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
  comoObter: ["Chance de <strong>~25%</strong> na roleta da Stand Arrow.", "Comprado no shop por 2.500 às vezes."],
  curiosidades: ["No anime, a gangue inteira viajou dentro da tartaruga — inclusive com o inimigo como 'refém' da sala."]
  },
  // ==================== ADICIONADOS ====================
  killerqueen: {
    nome: "Killer Queen", cor: "#d46a9a", raridade: "Lendário", tier: "S",
    usuario: "Yoshikage Kira", tipo: "Stand de explosivos", anime: "Diamond is Unbreakable (Parte 4)",
    stats: S("A", "B", "C", "B", "A", "A"),
    descricao: "Tudo que ele toca vira uma bomba. O Stand do Kira Yoshikage.",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/34/Killer_Queen_Remodel_YBA.png/revision/latest?cb=20221224132752",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
    comoObter: [
      "Chance de ~1% na roleta da Stand Arrow.",
      "Evolui para Killer Queen: Bites the Dust com o item de quest de Morioh."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/8/89/NEW_KQ_BTD_IMAGE_PAGE.png/revision/latest?cb=20210430102307",
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
    videos: [{ yt: "5xK8S4zMgnQ", titulo: "Showcase do Stand (YBA)" }],
    comoObter: ["Tenha o Killer Queen equipado.", "Complete a quest de Morioh e use o item correspondente."],
    curiosidades: ["No anime, o Bites the Dust era um loop temporal que matava quem descobrisse a identidade do Kira."]
  },

  thehand: {
    nome: "The Hand", cor: "#3a7a8a", raridade: "Raro", tier: "A",
    usuario: "Okuyasu Nijimura", tipo: "Stand de curto alcance", anime: "Diamond is Unbreakable (Parte 4)",
    stats: S("B", "B", "C", "B", "C", "D"),
    descricao: "Apaga o próprio espaço — e o que estiver nele. O Stand do Okuyasu.",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/94/The_Hand_Clean_Image.png/revision/latest?cb=20241205153312",
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
      "Chance de 5% na roleta da Mysterious Arrow (dato oficial da wiki)."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/2/23/WA_Current.png/revision/latest?cb=20241205155535",
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
      "Chance de ~3% na roleta da Mysterious Arrow."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/6/64/MR_remodel_v2.png/revision/latest?cb=20250105183405",
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
      "Chance de ~10% na roleta da Mysterious Arrow."
    ],
    curiosidades: [
      "O nome é um tributo à banda Magic Ninja... na verdade, à música 'Magician's Birthday' da Uriah Heep — o padrão de Araki de nomes musicais."
    ]
  },

  softwet: {
    nome: "Soft & Wet", cor: "#2a7a9a", raridade: "Raro", tier: "A",
    usuario: "Josuke Higashikata (JoJolion)", tipo: "Stand de bolhas", anime: "JoJolion (Parte 8)",
    stats: S("B", "B", "C", "B", "B", "A"),
    descricao: "Bolhas que roubam propriedades — visão, umidade, atrito.",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/f/f4/NEW_S%26W_IMAGE_PAGE.png/revision/latest?cb=20210509164706",
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
      "NÃO vem da Arrow: obtido pelas Ribcages of the Saint's Corpse com 20% de chance (dato oficial da wiki)."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/8/83/RHCP_Damage_Buff.png/revision/latest?cb=20241205160037",
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
      "Chance de ~3% na roleta da Mysterious Arrow."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/92/Stone_Free_New_Pose.png/revision/latest?cb=20241205161435",
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
      "Chance de 1% na roleta da Mysterious Arrow (dato oficial da wiki)."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/5/59/Scary_Monsters_1.png/revision/latest?cb=20241205155203",
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
      "20% de chance pela Rib Cage of the Saint's Corpse com Worthiness 5 (dato oficial da wiki)."
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
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/2/2c/Beach_Boy_Model_YBA1.png/revision/latest?cb=20241205154531",
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
      "Chance de ~10% na roleta da Mysterious Arrow."
    ],
    curiosidades: [
      "É um dos Stands mais trolladores do jogo: fisga em segurança total."
    ]
  }

};

// ===== Specs =====
const SPECS = [
  { id: "spec-hamon", nome: "Hamon", cor: "#c9a227", raridade: "Comum",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/f/f6/Jotaro_Part_3_New_Image.png/revision/latest?cb=20221212232734",
  desc: "Energia solar canalizada pela respiração. Bônus contra vampiros e cura gradual.",
  como: "Fale com o William A. Zeppeli perto do spawn após nível 5.",
  skills: [
  "Sunlight Yellow Overdrive — soco carregado de luz, dano dobrado em vampiros",
  "Hamon Breath — regenera vida gradualmente fora de combate",
  "Zoom Punch — soco que atravessa bloqueios",
  "Thunder Split Attack — golpe em área com corrente elétrica"
  ],
  forteContra: "Vampiros, DIO e Kars", fracoContra: "Nenhum (spec equilibrada)" },
  { id: "spec-vampirism", nome: "Vampirism", cor: "#8a1a2a", raridade: "Raro",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/ce/New_DIO.png/revision/latest?cb=20221212232549",
  desc: "Poderes de vampiro: drenagem de vida, freeze e combos de sangue.",
  como: "Derrote o DIO ou use o Vial de Sangue (drop dele).",
  skills: [
  "Space Ripper Stingy Eyes — raios dos olhos perfurantes de longa distância",
  "Frost Wave — congela o oponente no lugar",
  "Blood Drain — drena vida de perto e cura você",
  "Vaporization Freezing — neutraliza Hamon inimigo"
  ],
  forteContra: "Lutas longas (sustain alto)", fracoContra: "Hamon e luz solar" },
  { id: "spec-spin", nome: "Spin", cor: "#1a6a8a", raridade: "Raro",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/3a/NEW_TA4_IMAGE_PAGE.png/revision/latest?cb=20210503185153",
  desc: "Rotação dourada baseada no Golden Spin. Projéteis de longa distância e dano em área.",
  como: "Complete a questline de Gyro Zeppeli na Corrida de Cavalos.",
  skills: [
  "Steel Ball — bola de ferro giratória de longo alcance",
  "Golden Spin — dano perfurante que ignora defesa",
  "Ball Breaker — área de rotação que atordoa",
  "Stand Sync — melhora Stands de rotação (Tusk)"
  ],
  forteContra: "Stands de curto alcance", fracoContra: "Mobilidade alta e dashes" },
  { id: "spec-boxing", nome: "Boxing", cor: "#4a6b3a", raridade: "Comum",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/5/58/New_Jotaro6.png/revision/latest?cb=20221212232804",
  desc: "Defesa alta e uppercuts. A spec mais simples e consistente de jogar.",
  como: "Compre a inscrição do Boxeador por 10.000 no ginásio do Corpo 3.",
  skills: [
  "Haymaker — soco forte com atordoamento",
  "Guard Break — quebra bloqueios",
  "Duck — esquiva rápida com redução de dano",
  "Uppercut Launcher — lança o inimigo pro ar para combo aéreo"
  ],
  forteContra: "Barragens (barra eficiente)", fracoContra: "Stands de tempo (Time Stop)" },
  { id: "spec-pluck", nome: "Pluck", cor: "#7a5a3a", raridade: "Raro",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/90/Screenshot_70.png/revision/latest?cb=20210430095416",
  desc: "Ofensiva equilibrada: mantém ferramentas de combo fortes mesmo após o rework das specs.",
  como: "Obtido via item/NPC correspondente (ver Trello oficial do YBA).",
  skills: [
  "Ofensiva equilibrada com combos consistentes",
  "Mantém ferramentas de combo após o rework das specs",
  "Sem defesa dedicada — foque em pressão ofensiva"
  ],
  forteContra: "Stands de curto alcance", fracoContra: "Defesa/counter-play" },
  { id: "spec-sword", nome: "Sword-Style", cor: "#8a8a9a", raridade: "Raro",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/90/Screenshot_70.png/revision/latest?cb=20210430095416",
  desc: "Estilo de espada com o maior dano bruto do jogo. Requer prática para dominar.",
  como: "Obtido via NPC espadachim (ver Trello oficial do YBA).",
  skills: [
  "Maior dano bruto entre as specs",
  "Requer prática e timing para maximizar o dano",
  "Sem ataques de longa distância"
  ],
  forteContra: "Stands lentos", fracoContra: "Spam de longa distância" }
];

// ===== Bosses =====
const BOSSES = [
  { id: "boss-dio", nome: "DIO (Demon Form)", cor: "#c9a227", dificuldade: 5, local: "Cemitério, Corpo 1 (só à noite)", resp: "8 minutos", hp: "450 HP", xp: "1.200 XP",
  drops: ["Flecha Requiem", "Diário de DIO", "Vial de Sangue"],
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/ce/New_DIO.png/revision/latest?cb=20221212232549",
  desc: "O chefe mais cobiçado do jogo. DIO usa The World com paradas do tempo frequentes, barragens MUDA e o temido Road Roller.",
  dica: "Nunca barre durante o Time Stop dele — guarde stamina para escapar. Use Hamon: dano bônus em vampiros." },
  { id: "boss-had", nome: "Heaven-Ascended DIO", cor: "#c9a227", dificuldade: 5, local: "Corpo 3 — Templo do Céu", resp: "15 minutos", hp: "700 HP", xp: "2.500 XP",
  drops: ["Flecha Requiem", "Coração de Stand", "DIO's Diary Deluxe"],
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/4b/HeavenAscendedDIO_new.png/revision/latest?cb=20210620112140",
  desc: "A versão definitiva do DIO, com The World Over Heaven. O boss mais difícil do jogo: Time Stop com teleporte e cura própria.",
  dica: "Só enfrente com grupo. O Time Stop dele ignora bloqueio — saia da área antes dele puxar." },
  { id: "boss-kars", nome: "Kars (Ultimate Life Form)", cor: "#b8860b", dificuldade: 5, local: "Vulcão, Corpo 2", resp: "8 minutos", hp: "400 HP", xp: "1.000 XP",
  drops: ["Pedra Aja", "Lâmina Lunar"],
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/1/13/Kars_-_Updated%2C_Max_Graphics.png/revision/latest?cb=20221215022209",
  desc: "Kars em sua forma de vida suprema alterna defesas impenetráveis com rajadas de lâminas de luz.",
  dica: "Imune a projéteis durante o Bladed Light. Lute corpo a corpo." },
  { id: "boss-pucci", nome: "Enrico Pucci", cor: "#5a3a8a", dificuldade: 4, local: "Igreja, Corpo 5", resp: "10 minutos", hp: "380 HP", xp: "1.100 XP",
  drops: ["C-Moon Fragment", "Cristal de Stand", "Flecha Comum"],
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/3c/NewPucc.JPG/revision/latest?cb=20221212223601",
  desc: "O padre com Whitesnake rouba suas habilidades na forma de DISCs durante a luta.",
  dica: "Não dependa de uma skill só: se ele roubar sua ultimate, você fica sem ela até o fim da luta." },
  { id: "boss-valentine", nome: "Funny Valentine", cor: "#2a5a8a", dificuldade: 4, local: "Corredor Dimensional, Corpo 7", resp: "10 minutos", hp: "360 HP", xp: "1.000 XP",
  drops: ["Coroa do Presidente", "Flecha Comum", "Cristal de Stand"],
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/0/03/New_Diavolo.png/revision/latest?cb=20221212232410",
  desc: "O presidente com o D4C troca de dimensão no meio da luta e invoca versões alternativas de si mesmo.",
  dica: "Marque qual versão dele está tomando dano real — as alternativas somem após alguns segundos." },
  { id: "boss-diavolo", nome: "Diavolo", cor: "#8a1a2a", dificuldade: 4, local: "Corpo 6 — Ilha do Diavolo", resp: "6 minutos", hp: "350 HP", xp: "850 XP",
  drops: ["Flecha Comum", "Cristal de Stand"],
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/0/03/New_Diavolo.png/revision/latest?cb=20221212232410",
  desc: "O chefe de King Crimson apaga o tempo para reposicionar e punir. Rota principal de farm de Cristais de Stand.",
  dica: "O Time Erase dele te deixa confuso: conte os segundos e barre ao voltar." },
  { id: "boss-kira", nome: "Kira Yoshikage", cor: "#d46a9a", dificuldade: 3, local: "Bairro Morioh, Corpo 4", resp: "5 minutos", hp: "280 HP", xp: "600 XP",
  drops: ["Mão Destro", "Flecha Comum", "Anubis (raro)"],
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/0/03/New_Diavolo.png/revision/latest?cb=20221212232410",
  desc: "Kira e o Killer Queen atacam com bombas de contato e o rastreador Sheer Heart Attack.",
  dica: "Sheer Heart Attack persegue o mais quente: jogue facas longe de você." },
  { id: "boss-doppio", nome: "Doppio", cor: "#6a4a8a", dificuldade: 2, local: "Corpo 6 — Litoral", resp: "4 minutos", hp: "200 HP", xp: "350 XP",
  drops: ["Flecha Comum", "Fragmento de Epitaph"],
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/7/7d/DoppioNew.JPG/revision/latest?cb=20221212235416",
  desc: "A forma 'fraca' do Diavolo: luta com socos e o Epitaph básico. O primeiro boss de todo jogador.",
  dica: "Boss de entrada para farm de flechas. Bom para iniciantes." }
];

// ===== Itens =====
const ITENS = [
  { id: "item-arrow", nome: "Stand Arrow", cor: "#6b3fa0", raridade: "Comum",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/9c/New_mysterious_arrow_.png/revision/latest?cb=20210824035259",
  desc: "A flecha que desperta Stands. Usá-la gera uma rolagem aleatória de Stand — podendo inclusive destruir o atual.",
  preco: "5.000 no shop / drop de bosses", taxas: "Mítico ~0,3% • Lendário ~1% • Raro ~3,5% • Incomum ~10% • Comum ~25%+", uso: "Clique com ela no inventário para rolar" },
  { id: "item-requiem", nome: "Flecha Requiem", cor: "#d4a017", raridade: "Lendária",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/c6/Requiem_Arrow.png/revision/latest?cb=20201211235237",
  desc: "A flecha sagrada que evolui Stands para suas formas Requiem — se o usuário for digno.",
  preco: "Drop raro do DIO / craft com 5 Cristais de Stand", taxas: "Sucesso ~40% • Falha destrói o Stand", uso: "Use com um Stand compatível equipado" },
  { id: "item-roka", nome: "Rokakaka", cor: "#4a6b3a", raridade: "Rara",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/48/Rokakaka.png/revision/latest?cb=20210924140252",
  desc: "Fruta equivalente que troca uma parte do seu corpo por um novo Stand ou Spec aleatório.",
  preco: "Drop de boss / árvore rara nos corpos", taxas: "Mesmas taxas da Stand Arrow", uso: "Consuma para rolar um novo Stand" },
  { id: "item-diario", nome: "Diário de DIO", cor: "#8a1a2a", raridade: "Lendária",
  img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/43/Dio_Diary.jpg/revision/latest?cb=20201205112618",
  desc: "O diário que registra o plano de DIO. Evolui The World e Star Platinum para suas formas melhoradas.",
  preco: "Drop do boss DIO", taxas: "—", uso: "Use com The World ou Star Platinum equipado" },
  { id: "item-aja", nome: "Pedra Aja", cor: "#b21f1f", raridade: "Lendária",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/c6/Requiem_Arrow.png/revision/latest?cb=20201211235237",
  desc: "A pedra vermelha que transformou Kars no Ultimate Life Form.",
  preco: "Drop do boss Kars", taxas: "—", uso: "Usada na questline do Kars" },
  { id: "item-cristal", nome: "Cristal de Stand", cor: "#5a2d8a", raridade: "Rara",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/a/a2/Screenshot_70.png/revision/latest?cb=20210430095416",
  desc: "Material de craft para Flecha Requiem e para upgrades de skills.",
  preco: "Drop de qualquer boss", taxas: "~35% por boss", uso: "Leve ao NPC de craft" },
  { id: "item-vial", nome: "Vial de Sangue", cor: "#8a1a2a", raridade: "Rara",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/43/Dio_Diary.jpg/revision/latest?cb=20201205112618",
  desc: "O sangue de DIO engarrafado. Concede o Spec Vampirism.",
  preco: "Drop do boss DIO", taxas: "~20%", uso: "Use para virar vampiro" },
  { id: "item-lamina", nome: "Lâmina Lunar", cor: "#5a5a7a", raridade: "Lendária",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/d/d7/StoneMask.png/revision/latest?cb=20200519202837",
  desc: "Lâmina deixada por Kars. Material para crafting de itens de vida suprema.",
  preco: "Drop do boss Kars", taxas: "~15%", uso: "Material de craft" },
  { id: "item-mao", nome: "Mão Destro", cor: "#d46a9a", raridade: "Rara",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/4/48/Rokakaka.png/revision/latest?cb=20210924140252",
  desc: "A mão direita que Kira coleciona. Vende por bom preço nos NPCs.",
  preco: "Drop do boss Kira", taxas: "~25%", uso: "Venda ou quest de Morioh" },
  { id: "item-coroa", nome: "Coroa do Presidente", cor: "#2a5a8a", raridade: "Lendária",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/c/c6/Requiem_Arrow.png/revision/latest?cb=20201211235237",
  desc: "A coroa de Funny Valentine. Evolui o D4C para D4C Love Train.",
  preco: "Drop do boss Funny Valentine", taxas: "~10%", uso: "Use com D4C equipado" },
  { id: "item-ribcage", nome: "Ribcage of the Saint's Corpse", cor: "#c8b868", raridade: "Lendária",
    desc: "Parte do corpo do Santo. Rola Stands das Partes 7/8 — incluindo Soft & Wet (20%), Tusk e D4C.",
    preco: "Drop de questline da Corrida de Cavalos / trade", taxas: "Soft & Wet 20% • Tusk ~10% • D4C ~10%", uso: "Use para rolar Stands do universo SBR",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/90/Screenshot_70.png/revision/latest?cb=20210430095416" },
  { id: "item-heart", nome: "Heart of the Saint's Corpse", cor: "#c84a4a", raridade: "Lendária",
    desc: "O coração do corpo do Santo. Item de quest para evoluções e habilidades passivas.",
    preco: "Drop de questline da Corrida de Cavalos", taxas: "—", uso: "Item de quest / craft de evoluções",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/90/Screenshot_70.png/revision/latest?cb=20210430095416" },
  { id: "item-cobra", nome: "Cobra", cor: "#4a8a3a", raridade: "Rara",
    desc: "Cobra venenosa usada na questline do Hamon/Vampirism e em crafts de itens de sangue.",
    preco: "Drop em cavernas / compra no shop", taxas: "—", uso: "Item de quest",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/90/Screenshot_70.png/revision/latest?cb=20210430095416" },
  { id: "item-gear", nome: "Steel Ball", cor: "#8a8a5a", raridade: "Rara",
    desc: "Bola de ferro do Gyro Zeppeli: necessária para a questline do Spec Spin.",
    preco: "Drop do Gyro / compra no shop da corrida", taxas: "—", uso: "Inicia a questline do Spin",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/3/3a/NEW_TA4_IMAGE_PAGE.png/revision/latest?cb=20210503185153" },
  { id: "item-luigis", nome: "Cracked Skull (Caveira Rachada)", cor: "#9a9a7a", raridade: "Rara",
    desc: "Caveira usada nas quests de Morioh e como moeda em trocas de questline.",
    preco: "Drop de bosses da Parte 4", taxas: "—", uso: "Item de quest",
    img: "https://static.wikia.nocookie.net/your-bizarre-adventure/images/9/90/Screenshot_70.png/revision/latest?cb=20210430095416" }
];

const INFO_JOGO = {
  oque: "Your Bizarre Adventure (YBA) é um jogo de Roblox inspirado em JoJo's Bizarre Adventure, onde você desenvolve um Stand, aprende Specs, enfrenta bosses e luta contra outros jogadores em mapas abertos chamados 'corpos'.",
  mecanicas: [
  { titulo: "Sistema de combate", texto: "Barragens (E), M1s básicos, bloqueio (barra) e dash. Stamina limita bloqueios — saber quando barrar é a skill mais importante do jogo." },
  { titulo: "Stands", texto: "Obtidos na roleta da Stand Arrow. Cada um tem raridade (Comum → Mítico), moveset próprio e árvore de skills desbloqueada por XP." },
  { titulo: "Specs", texto: "Estilos de luta que se somam ao Stand: Hamon, Vampirism, Spin e Boxing. Você pode ter 1 Stand + 1 Spec ao mesmo tempo." },
  { titulo: "Corpos (mapas)", texto: "O jogo tem 6 corpos (servers paralelos). Alguns bosses e recursos só existem em corpos específicos. Use as subcurvas para viajar." },
  { titulo: "PvP e K/D", texto: "Combate entre jogadores é livre fora das zonas seguras. Seu K/D fica visível — Stands de meta dominam os corpos de PvP." },
  { titulo: "Trading", texto: "É possível trocar Stands, itens e dinheiro com outros jogadores. Stands Míticos e Flechas Requiem valem fortunas no mercado." }
  ],
  progressao: [
  "Nível 1-10: faça quests do spawn e escolha seu primeiro Spec (Hamon é o mais amigável).",
  "Nível 10-25: compre sua primeira Stand Arrow e farme bosses simples (Doppio, Kira).",
  "Nível 25-35: desbloqueie os nodes da árvore de skills do seu Stand.",
  "Nível 35+: PvP, bosses lendários (DIO, Kars) e caça à Flecha Requiem."
  ]
};

// Mantém compatibilidade com código antigo
const GAMES = STANDS;
