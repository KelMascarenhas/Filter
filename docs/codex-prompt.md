# Prompt para Codex — Filtr / Filter Mock MVP

Você é o Codex trabalhando no repositório `Filter`. O objetivo é criar e evoluir um protótipo navegável do projeto **Filtr**, usado em uma apresentação executiva.

## Contexto do produto

O Filtr deve parecer um portal de música, notícias e inteligência, com uma área interna chamada **Studio**. O projeto precisa mostrar, de forma mockada:

- Portal público com notícias e produtos Filtr.
- Busca interna simulada.
- Radar de artistas com relevância, score, cidade, gênero e sinais de crescimento.
- Login visual, sem autenticação real.
- Studio interno para operação.
- Módulo de Distribuição como fluxo principal.
- Módulo Academy como produto inicial de formação.
- Outros produtos podem aparecer como roadmap: Intelligence, Live, Playlists, Creator Services.

## Regras importantes

- Não conectar banco de dados ainda.
- Não implementar autenticação real ainda.
- Não usar APIs externas.
- Manter tudo navegável e apresentável.
- Priorizar acabamento visual, narrativa e clareza.
- Todos os dados devem continuar mockados em `src/data.js`, salvo se for feita uma migração planejada.
- Não remover as rotas existentes.

## Tarefa inicial

1. Verifique se o protótipo está funcionando.
2. Rode um servidor local simples, por exemplo `python3 -m http.server 5173`.
3. Abra o portal e navegue por:
   - `#/`
   - `#/noticias`
   - `#/artistas`
   - `#/produtos`
   - `#/login`
   - `#/studio`
   - `#/studio/distribuicao`
   - `#/studio/academy`
4. Faça ajustes se encontrar erro de navegação, layout quebrado ou texto inconsistente.
5. Preserve a ideia de MVP mockado para apresentação.

## Melhorias desejadas para próxima rodada

- Criar modo “apresentação” com roteiro clicável passo a passo.
- Adicionar página individual de artista.
- Adicionar detalhes de lançamento dentro de Distribuição.
- Melhorar responsividade em telas pequenas.
- Preparar versão Next.js quando o design for aprovado.

## Resultado esperado

Um commit limpo com o protótipo funcionando, pronto para subir na Vercel e gerar uma URL temporária de apresentação.
