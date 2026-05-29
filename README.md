# Filtr / Filter — Portal + Studio Mock MVP

Protótipo navegável para apresentação do ecossistema **Filtr**: portal público de notícias, produtos, radar de artistas, login simulado, Studio interno, distribuição e Academy.

> Status: **mockado para apresentação**. Não usa banco de dados, autenticação real ou integrações externas.

## O que está incluído

- **Portal público** com hero, busca mockada, notícias e destaques.
- **Notícias** com páginas de detalhe simuladas.
- **Radar de artistas** com score de relevância, crescimento e insights fictícios.
- **Produtos Filtr**: Distribution, Academy, Intelligence, Live, Playlists e Creator Services.
- **Login fake** levando direto ao Studio.
- **Studio interno** com dashboard operacional.
- **Distribuição** com esteira de 7 etapas, checklist e fila de lançamentos.
- **Academy** com trilhas, progresso e certificado mockado.

## Como rodar localmente

Sem instalar dependências:

```bash
cd filter-mock
python3 -m http.server 5173
```

Depois abra:

```text
http://localhost:5173
```

Também dá para abrir o `index.html` diretamente no navegador, mas o servidor local é melhor para simular deploy.

## Como criar o repositório no GitHub

Com GitHub CLI autenticado:

```bash
git init
git add .
git commit -m "Initial mock MVP for Filtr portal and studio"
gh repo create Filter --private --source=. --remote=origin --push
```

Se quiser público para facilitar deploy rápido:

```bash
gh repo create Filter --public --source=. --remote=origin --push
```

## Como publicar na Vercel

1. Suba o projeto para um repositório no GitHub chamado `Filter`.
2. Acesse o dashboard da Vercel.
3. Clique em **New Project**.
4. Importe o repositório `Filter`.
5. Framework preset: **Other** ou **Static**.
6. Build command: deixe vazio.
7. Output directory: deixe vazio ou use a raiz.
8. Clique em **Deploy**.

A Vercel vai gerar uma URL temporária `*.vercel.app` para você abrir durante a apresentação.

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
- `#/noticias` — Notícias
- `#/noticias/hub-distribuicao-filtr` — Exemplo de notícia
- `#/artistas` — Radar de artistas
- `#/produtos` — Produtos
- `#/login` — Login simulado
- `#/studio` — Dashboard do Studio
- `#/studio/distribuicao` — Processo de distribuição
- `#/studio/academy` — Academy

## Quando evoluir para produto real

Fase seguinte recomendada:

1. Migrar para **Next.js**.
2. Adicionar autenticação real.
3. Definir banco: Supabase/Postgres ou outro.
4. Criar modelos para artistas, produtos, lançamentos, cursos, usuários e permissões.
5. Integrar uploads de assets, metadados e workflow real de distribuição.
