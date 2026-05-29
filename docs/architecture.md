# Arquitetura conceitual — Filtr Mock MVP

## Objetivo da fase atual

Criar uma experiência navegável para apresentação executiva, com aparência de produto real e sem dependência de backend.

## Camadas do produto

### 1. Portal público

Serve como vitrine institucional e editorial:

- Notícias
- Produtos Filtr
- Artistas em destaque
- Busca interna mockada
- Chamada para login no Studio

### 2. Studio interno

Área operacional simulada:

- Dashboard com KPIs
- Atividades de distribuição
- Lançamentos em andamento
- Academy
- Atalhos para produtos e radar

### 3. Distribution

Módulo principal do MVP:

1. Cadastro
2. Metadados
3. Assets
4. Checklist
5. Pitch
6. Release
7. Monitoramento

### 4. Academy

Produto educacional inicial:

- Trilhas
- Aulas
- Progresso
- Certificado mockado

## Dados

Todos os dados estão em `src/data.js`.

No futuro, esse arquivo deve ser substituído por chamadas de API ou por uma camada de serviço que consuma banco de dados.

## Decisões desta versão

- Aplicação estática para reduzir risco de deploy.
- Sem dependências npm.
- Design próprio em CSS puro.
- Assets em SVG gerados para não depender de imagens externas.
- Rotas hash para funcionar localmente e em deploy estático.
