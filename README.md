# Gorjeta dá Sorte

App mobile (protótipo) em que cada gorjeta vira uma chance de ganhar prêmios em dinheiro.

Projeto baseado no bundle exportado do [Claude Design](https://claude.ai/design) — protótipo HTML/CSS/JS rodando em React via Babel standalone, sem build.

## Telas

- **Login** — entrada por telefone
- **Home** — saldo de bilhetes, sorteio ao vivo e ranking
- **Sorteio** — detalhes da rifa e escolha de bilhetes
- **Roleta** — animação da giro
- **Prêmio** — revelação do resultado
- **Carteira** — saldo, extrato e saque PIX
- **Perfil** — XP, nível e configurações

## Como rodar

Abra `index.html` em qualquer navegador moderno — React, ReactDOM e Babel são carregados via CDN (unpkg).

## Arquivos

- `index.html` — shell do app e orquestrador de telas
- `ios-frame.jsx` — moldura iOS 26 (device frame, status bar, nav bar, teclado)
- `app-shell.jsx` — tema, ícones e átomos compartilhados (botões, cards, logo)
- `screens.jsx` — Login e Home
- `screens2.jsx` — Sorteio, Roleta, Prêmio, Carteira, Perfil, Bottom Nav
