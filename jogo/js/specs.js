// ===== Specs =====
const SPECS = [
  { id: "spec-hamon", nome: "Hamon", cor: "#c9a227", raridade: "Comum",
  img: "img/specs/hamon.png",
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
  img: "img/specs/vampirism.png",
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
  img: "img/stands/tusk4.png",
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
  img: "img/specs/boxing.png",
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
  img: "img/specs/pluck.png",
  desc: "Ofensiva equilibrada: mantém ferramentas de combo fortes mesmo após o rework das specs.",
  como: "Obtido via item/NPC correspondente (ver Trello oficial do YBA).",
  skills: [
  "Ofensiva equilibrada com combos consistentes",
  "Mantém ferramentas de combo após o rework das specs",
  "Sem defesa dedicada — foque em pressão ofensiva"
  ],
  forteContra: "Stands de curto alcance", fracoContra: "Defesa/counter-play" },
  { id: "spec-sword", nome: "Sword-Style", cor: "#8a8a9a", raridade: "Raro",
  img: "img/specs/pluck.png",
  desc: "Estilo de espada com o maior dano bruto do jogo. Requer prática para dominar.",
  como: "Obtido via NPC espadachim (ver Trello oficial do YBA).",
  skills: [
  "Maior dano bruto entre as specs",
  "Requer prática e timing para maximizar o dano",
  "Sem ataques de longa distância"
  ],
  forteContra: "Stands lentos", fracoContra: "Spam de longa distância" }
];


