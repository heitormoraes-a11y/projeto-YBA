# YBA Wiki

Wiki brasileira não-oficial de **Your Bizarre Adventure (YBA)** — jogo de Roblox inspirado em JoJo's Bizarre Adventure.

Site estático em HTML, CSS e JavaScript puro. Sem framework, sem build.

## Como abrir

Abra o arquivo `jogo/index.html` diretamente no navegador. Não precisa de servidor.

## Estrutura de pastas

```
projeto-YBA/
├── jogo/
│   ├── index.html          # Página inicial
│   ├── article.html        # Página de artigo individual e listas
│   ├── css/
│   │   └── style.css       # Estilos
│   ├── img/
│   │   ├── stands/         # Imagens de Stands
│   │   ├── specs/          # Imagens de Specs
│   │   ├── bosses/         # Imagens de Bosses
│   │   └── itens/          # Imagens de Itens
│   └── js/
│       ├── stands.js       # Dados de todos os Stands
│       ├── specs.js        # Dados de Specs
│       ├── bosses.js       # Dados de Bosses
│       ├── itens.js        # Dados de Itens & Drops
│       ├── dados.js        # Skins, Paragons, SBR, Páginas recentes, Guia
│       ├── comum.js        # Busca, links "Em breve", imagem reserva, esc(), criarCard()
│       ├── script.js       # Página inicial (categorias, destaques, mudanças recentes)
│       ├── artigo.js       # Roteador, render de stands/bosses/specs/itens, listas
│       └── fundo.js        # Fundo interativo com partículas
└── ferramentas/
    └── audit.ps1           # Script de auditoria da Fandom
```

## Onde ficam os dados

- **stands.js**: objeto `STANDS` — todos os Stands com nome, raridade, tier, moveset, como obter, etc.
- **specs.js**: array `SPECS` — Hamon, Vampirism, Spin, Boxing, etc.
- **bosses.js**: array `BOSSES` — DIO, Kars, Pucci, etc.
- **itens.js**: array `ITENS` — Flecha Requiem, Rokakaka, Diário de DIO, etc.
- **dados.js**: `SKINS_INFO`, `PARAGONS_INFO`, `SBR_INFO`, `PAGINAS_RECENTES`, `INFO_JOGO`

## Como adicionar um Stand novo

1. Abra `jogo/js/stands.js`.
2. Adicione uma nova entrada no objeto `STANDS` usando o ID do stand como chave (ex.: `meunovostand: { ... }`).
3. Campos obrigatórios: `nome`, `cor`, `raridade`, `tier`, `usuario`, `tipo`, `anime`, `stats`, `img`, `descricao`, `moveset`, `comoObter`.
4. O campo `comoObter` pode conter HTML (ex.: `<strong>Mysterious Arrow</strong>`). Outros campos de texto devem ser texto puro.
5. Adicione a imagem em `jogo/img/stands/<id>.png`.
6. O roteador em `artigo.js` detecta automaticamente novos stands pelo ID.
7. Atualize o contador na home se necessário (`script.js`).

## Fontes de dados

As informações são baseadas na wiki Fandom (your-bizarre-adventure.fandom.com) e guias confirmados. Campos não confirmados em 2 fontes ficam marcados como "A confirmar".