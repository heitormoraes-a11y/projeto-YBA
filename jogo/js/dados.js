// ===== Dados da wiki: Your Bizarre Adventure (YBA - Roblox / JoJo) =====`n`n// Helper de stats (usado pelos stands em stands.js)`nconst S = (p, v, a, d, pr, po) => ({ Poder: p, Velocidade: v, Alcance: a, Durabilidade: d, Precis�o: pr, Potencial: po });`n`n// STANDS, SPECS, BOSSES e ITENS foram movidos para arquivos separados:`n//   stands.js, specs.js, bosses.js, itens.js`n`n
// ===== Paragon skins obtíveis =====
const PARAGONS_INFO = {
  oque: "IMPORTANTE: os 'Paragon Platinum' (Paragon Platinum, Paragon Platinum: The World e Paragon Platinum: Over Heaven) são Stands CUSTOM dos desenvolvedores/contribuidores — nenhum jogador comum consegue por flecha ou quest. O que o jogador comum consegue são as PARAGON SKINS: skins inspiradas no Paragon com nomes tipo 'Platinum Sun', 'Cursed Aero Platinum', 'Sumo Platinum' etc.",
  nota: "Como não existe uma página 'Paragons' com lista oficial fechada na wiki Fandom (a lista completa de skins por Stand muda a cada evento), esta página documenta o conceito e aponta para as coleções oficiais. O que está aqui está confirmado; o que faltar fica como A confirmar.",
  itens: [
    { nome: "Star Platinum (Platinum Sun)", como: "Skin de Star Platinum ligada ao Hermit Purple (relatives do template da Fandom confirmam a ligação)." },
    { nome: "Cursed Aero Platinum", como: "Skin raridade A listada nas coleções da página Skins da Fandom." },
    { nome: "Sumo Platinum / Sumo World", como: "Skins limitadas de evento, listadas na tier S de skins (allthings.how, 2026)." },
    { nome: "Base/Platinum skins de Star Platinum", como: "Star Platinum tem 9 skins no total (página Skins da Fandom), incluindo Action Figure (✩), Gold Platinum (✩), Stone Platinum (✩) e Star Platinum OVA (✩✩)." }
  ],
  customs: [
    "Paragon Platinum — uso restrito (Bloodtaro, Speartaro, Arkigato, gqfiq)",
    "Paragon Platinum: The World — mesmo grupo",
    "Paragon Platinum: Over Heaven — mesmo grupo"
  ]
};

// ===== Steel Ball Run =====
const SBR_INFO = {
  oque: "O Metal Ball Run (MBR, nome in-game do Steel Ball Run) é uma corrida a cavalo de San Diego até Nova York, em servidores separados do jogo principal. É a fonte das Saint's Corpse Parts, da Requiem Arrow e de grande parte do endgame.",
  regras: [
    { titulo: "Acesso", texto: "É preciso Prestige 2+ para entrar na corrida." },
    { titulo: "Servidor", texto: "16 jogadores por corrida; a largada acontece 1 minuto após o 16º entrar. Cada jogador recebe um cavalo e um revólver. PvP fica desligado até o início." },
    { titulo: "Cavalos", texto: "Os cavalos têm barra de stamina (gasta acima de 34 de velocidade) e medidor de temperatura (afeta calor e frio ao longo do mapa)." },
    { titulo: "Lobby", texto: "No lobby não é possível usar Stand nem spec — é proposital para impedir grief antes da largada." }
  ],
  casualVsRank: [
    { titulo: "Casual", texto: "Stands evoluídos de topo (Tusk Act 4, D4C: Love Train, Killer Queen: Bites the Dust, The World Over Heaven) são PROIBIDOS. Stands evoluídos intermediários (C-Moon, Tusk Act 2/3) são permitidos. Não conta para o leaderboard." },
    { titulo: "Competitive/Ranqueada", texto: "Requiem stands são permitidos e a corrida conta para o leaderboard. Recompensas melhores (cosméticos extras + dinheiro)." },
    { titulo: "Recompensas", texto: "Top 3 de ambos os modos ganham Redeemed Corpse Parts, cosméticos, dinheiro de MBR e Horse Feed. No Competitive, 2º e 3º também levam corpse parts." }
  ],
  corpseParts: [
    { nome: "Rib Cage of the Saint's Corpse", uso: "Rola Stands da Parte 7/8: Scary Monsters, TWAU, D4C, Tusk Act 1 e Soft & Wet (20% cada). É dropável e spawnável no mapa principal. Vende por $1.200." },
    { nome: "Left Arm of the Saint's Corpse", uso: "Evolui Tusk Act 1 → Tusk Act 2 (com Spin + Worthiness V). Também pode ser dado ao Jotaro. Comprável por $10.000; vende por $2.500." },
    { nome: "Pelvis of the Saint's Corpse", uso: "Evolui Tusk Act 3 → Tusk Act 4 (com Spin + Worthiness V). Não é dropável. Comprável por $45.000." },
    { nome: "Heart of the Saint's Corpse", uso: "Evolui D4C → D4C: Love Train e RHCP → Chili Pepper (Alternate Universe). Não é dropável. Comprável por $45.000." },
    { nome: "Requiem Arrow", uso: "Não é corpse part, mas é o grande prêmio da quest do Prestige Master Rin no lobby: vença a corrida (1º, 2º ou 3º no modo certo) e a Isabelle the Arrowsmith vende a flecha por $7.500." }
  ],
  npcs: [
    { nome: "Jesus (NPC)", papel: "Aparece raramente no mapa principal (brilho amarelo + som 'JESUS~'; sempre junto com uma Rib Cage). Evolui Tusk Act 2 → 3 (precisa ser o primeiro a falar com ele) e Soft & Wet → Go Beyond. Locais: fonte, Eli's Pizzeria, elevador do Arcade, estacionamento e escadaria da pizzaria." },
    { nome: "Jotaro Kujo (NPC/boss)", papel: "Recebe as Saint's Corpse Parts (Left Arm, Pelvis e Heart) como oferta. O boss Jotaro Kujo dropa a Bandana do DIO (15%), usada na quest do Shadow The World." },
    { nome: "Prestige Master Rin", papel: "No lobby da SBR, entrega a quest 'Win the Steel Ball Run for Rin', que dá acesso à Requiem Arrow." },
    { nome: "DIO's Diary quest", papel: "A quest do Diário de DIO dentro da SBR pede 50 kills em jogadores DIFERENTES na corrida — parte do caminho para o The World Over Heaven." }
  ],
  mapa: [
    "Beginning Area/Town — spawn e lobby com Rin e a loja de cavalos",
    "The Desert/The Devil's Palm — calor, sandstorm e dano de veneno no Devil's Palm; rota alternativa pelo 'poopverse'",
    "The Plains — trecho fácil, com chuva e neblina",
    "The Arctic — frio, neblina branca e cavalo lento",
    "The Battle Zone — arena de combate antes da reta final",
    "New York City Bridge — chegada"
  ]
};

// ===== Últimas páginas adicionadas/atualizadas nesta wiki (lista manual, sem simular atividade de usuários) =====
const PAGINAS_RECENTES = [
  { id: "sbr", nome: "Steel Ball Run (Metal Ball Run)", tipo: "nova", data: "novembro de 2026" },
  { id: "skins", nome: "Skins de Stands", tipo: "nova", data: "novembro de 2026" },
  { id: "paragons", nome: "Paragons", tipo: "nova", data: "novembro de 2026" },
  { id: "cdr", nome: "Crazy Diamond Requiem", tipo: "nova", data: "novembro de 2026" },
  { id: "cpau", nome: "Chili Pepper (Alternate Universe)", tipo: "nova", data: "novembro de 2026" },
  { id: "stw", nome: "Shadow The World", tipo: "nova", data: "novembro de 2026" },
  { id: "tusk4", nome: "Tusk Act 4", tipo: "edit", data: "novembro de 2026 (moveset conferido na Fandom)" }
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


