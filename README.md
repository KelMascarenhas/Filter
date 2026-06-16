# FILTR — Experiência + Estúdio Mock MVP

Protótipo navegável para apresentação da **Experiência FILTR**: portal público de notícias, clipes, playlists, entrevistas, palcos e Estúdio interno para perfis, parceiros e lançamento de produto.

> Status: **100% mockado para apresentação**. Não usa banco de dados, autenticação real, upload real ou integrações externas.

## Escopo desta versão

Esta primeira versão é somente uma experiência navegável dentro do Estúdio FILTR para simular o CMS de lançamento musical da Piúca/FILTR.

Não implementa:

- Supabase real.
- SFTP real.
- Upload real.
- Integração Sony real.
- DDEX real.

O produto precisa parecer operacional, mas todos os dados, botões, status, validações e entregas são mockados/localizados no front-end.

## O que está incluído

- **Portal público** com hero editorial, Produtos FILTR, Agora para descobrir, entrevista da semana e newsletter.
- **Apresentação comercial interativa** da FILTR Experience para Sony/Som Livre, em PT/EN.
- **Simulação navegável da FILTR Experience** com dashboard, diagnóstico, Release Hub, Release Score, Academy, Opportunities, Media Network, Intelligence, Local Labels e A&R Radar.
- **Notícias** com páginas de detalhe simuladas.
- **Radar de artistas** com score de relevância, crescimento e insights fictícios.
- **Produtos FILTR públicos**: Canal, Clipes, Playlists, Entrevistas e Palcos FILTR.
- **Entrar** levando direto ao Estúdio FILTR.
- **Estúdio interno** com dashboard operacional, perfis de artistas, parceiros/selos e catálogo.
- **Lançamento de produto** com esteira mockada: capa, áudios, metadados, direitos, lojas, pacote, exports e simulação de entrega.

## Como rodar localmente

Sem instalar dependências:

```bash
cd filter-mock
python3 -m http.server 5175
```

Depois abra:

```text
http://localhost:5175
```

Também dá para abrir o `index.html` diretamente no navegador, mas o servidor local é melhor para simular deploy.

## Como criar o repositório no GitHub

Com GitHub CLI autenticado:

```bash
git init
git add .
git commit -m "Initial mock MVP for FILTR portal and studio"
gh repo create FILTR --private --source=. --remote=origin --push
```

Se quiser público para facilitar deploy rápido:

```bash
gh repo create FILTR --public --source=. --remote=origin --push
```

## Como publicar na Vercel

1. Suba o projeto para um repositório no GitHub chamado `FILTR`.
2. Acesse o dashboard da Vercel.
3. Clique em **New Project**.
4. Importe o repositório `FILTR`.
5. Framework preset: **Other** ou **Static**.
6. Build command: deixe vazio.
7. Output directory: deixe vazio ou use a raiz.
8. Clique em **Deploy**.

A Vercel vai gerar uma URL temporária `*.vercel.app` para você abrir durante a apresentação.

## Como publicar no GitHub Pages

Este mock é estático e usa rotas com `#/`, então pode ser publicado direto pelo GitHub Pages sem build.

Configuração recomendada:

- Source: `Deploy from a branch`.
- Branch: `main`.
- Folder: `/`.

Depois da publicação, a URL pública fica no formato:

```text
https://kelmascarenhas.github.io/Filter/
```

## Estrutura

```text
filter-mock/
├── index.html
├── vercel.json
├── src/
│   ├── app.js
│   ├── data.js
│   └── styles.css
├── assets/
│   ├── hero-system.svg
│   ├── news-*.svg
│   └── artist-*.svg
├── docs/
│   ├── architecture.md
│   └── codex-prompt.md
├── scripts/
│   └── create-github-repo.sh
└── .github/
    └── copilot-instructions.md
```

## Rotas do protótipo

Como é uma aplicação estática, as rotas usam hash:

- `#/` — Portal
- `#/pitch/1` a `#/pitch/16` — Pitch navegável FILTR Experience
- `#/territorio/1` a `#/territorio/15` — Pitch executivo de Presença Territorial (Nordeste → Brasil) para Sony Music / Som Livre
- `#/experience` — Simulação navegável FILTR Experience
- `#/experience/ar-radar` — Exemplo de módulo da simulação
- `#/noticias` — Notícias
- `#/noticias/hub-distribuicao-filtr` — Exemplo de notícia
- `#/artistas` — Radar de artistas
- `#/produtos` — Produtos
- `#/login` — Acesso simulado ao Estúdio
- `#/studio` — Dashboard operacional
- `#/studio/perfis` — Perfis de artistas e parceiros
- `#/studio/lancamento` — Lançamento de produto
- `#/studio/catalogo` — Catálogo do workspace

## Fora do escopo técnico

Esta versão não deve abrir conexão, gravar arquivo, transmitir pacote, gerar DDEX real ou acessar serviços externos. Qualquer evolução técnica futura deve ser tratada em outro ciclo.
