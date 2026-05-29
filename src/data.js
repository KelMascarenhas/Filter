window.FILTR_DATA = {
  metrics: [
    { label: "Artistas mapeados", value: "248", delta: "+18%", hint: "roster + radar" },
    { label: "Lançamentos ativos", value: "37", delta: "+9", hint: "próximos 60 dias" },
    { label: "Aulas publicadas", value: "24", delta: "+6", hint: "Academy beta" },
    { label: "Pitches em andamento", value: "112", delta: "+31", hint: "DSPs + creators" }
  ],
  news: [
    {
      slug: "hub-distribuicao-filtr",
      title: "Filtr prepara hub de distribuição com jornada guiada para artistas",
      kicker: "Distribuição",
      date: "Agora",
      readTime: "4 min",
      image: "assets/news-distribution.svg",
      excerpt: "Uma visão mockada do fluxo completo: cadastro, metadados, assets, checklist, pitch e monitoramento pós-lançamento.",
      body: [
        "O Filtr Studio nasce como uma camada operacional para organizar a distribuição musical de ponta a ponta, com dados simulados nesta primeira versão.",
        "A proposta é reduzir fricção na apresentação: mostrar a experiência de um artista ou equipe acessando uma área interna clara, visual e orientada por tarefas.",
        "Nesta versão, tudo é mockado: os cards, status, métricas, lançamentos e progresso de cada etapa. A troca futura por banco de dados fica isolada nos arquivos de dados."
      ]
    },
    {
      slug: "academy-primeira-trilha",
      title: "Filtr Academy abre primeira trilha para preparar creators e equipes",
      kicker: "Academy",
      date: "Beta",
      readTime: "3 min",
      image: "assets/news-academy.svg",
      excerpt: "Módulos curtos, certificados simulados e trilhas para distribuição, conteúdo, dados e carreira artística.",
      body: [
        "O Academy entra como produto inicial do Studio: uma área simples para explicar processos, padronizar conhecimento e mostrar evolução do usuário.",
        "A primeira trilha prioriza distribuição digital, preparação de lançamento, organização de assets e leitura básica de performance.",
        "O protótipo simula progresso, módulos, instrutores e certificados para sustentar uma apresentação executiva sem depender de autenticação real."
      ]
    },
    {
      slug: "radar-artistas-regionais",
      title: "Radar Filtr cruza relevância cultural, crescimento e momento de carreira",
      kicker: "Inteligência",
      date: "Radar",
      readTime: "5 min",
      image: "assets/news-radar.svg",
      excerpt: "Uma vitrine de artistas com score de relevância, cidade, fase e sinais de crescimento para apoiar curadoria e decisão.",
      body: [
        "A camada de inteligência do Filtr organiza sinais de relevância artística em uma interface simples: score, tendência, praça, fase e oportunidades.",
        "Para a apresentação, os dados são fictícios, mas o formato já mostra como o produto pode evoluir para um painel com integrações reais.",
        "O objetivo do mock é comunicar a lógica: a Filtr não é só distribuição; é portal, inteligência, formação e operação em um único ambiente."
      ]
    }
  ],
  artists: [
    { name: "Lua Mota", genre: "Pop / Nordeste", city: "Recife", score: 94, growth: "+42%", stage: "Prioridade", image: "assets/artist-lua.svg", insight: "Alto engajamento em vídeos curtos e boa conversão em playlists editoriais." },
    { name: "Bento Azul", genre: "Indie / MPB", city: "São Paulo", score: 88, growth: "+27%", stage: "Emergente", image: "assets/artist-bento.svg", insight: "Crescimento orgânico consistente e comunidade forte em shows pequenos." },
    { name: "Nina Vale", genre: "Sertanejo Pop", city: "Goiânia", score: 91, growth: "+35%", stage: "Aceleração", image: "assets/artist-nina.svg", insight: "Faixas com boa retenção e alto potencial para campanhas regionais." },
    { name: "DJ Arame", genre: "Funk / Eletrônico", city: "Rio de Janeiro", score: 86, growth: "+51%", stage: "Viral", image: "assets/artist-arame.svg", insight: "Picos de uso em creators e boa aderência a desafios de dança." },
    { name: "Casa Brava", genre: "Forró / Alternativo", city: "Fortaleza", score: 82, growth: "+19%", stage: "Desenvolvimento", image: "assets/artist-casa.svg", insight: "Projeto com narrativa visual forte e espaço para collabs." },
    { name: "Maya K", genre: "R&B / Afrobeat", city: "Salvador", score: 90, growth: "+33%", stage: "Prioridade", image: "assets/artist-maya.svg", insight: "Audiência jovem, estética premium e oportunidade para marcas." }
  ],
  products: [
    { name: "Filtr Distribution", tag: "Operação", status: "MVP", icon: "↗", description: "Jornada guiada para preparar, validar e acompanhar lançamentos em múltiplas etapas." },
    { name: "Filtr Academy", tag: "Educação", status: "MVP", icon: "◎", description: "Trilhas de formação para artistas, empresários, creators e equipes internas." },
    { name: "Filtr Intelligence", tag: "Dados", status: "Mock", icon: "✦", description: "Radar de artistas, score de relevância, sinais culturais e oportunidades de crescimento." },
    { name: "Filtr Live", tag: "Experiência", status: "Conceito", icon: "◆", description: "Camada futura para ativações, eventos, shows, creators e experiências de marca." },
    { name: "Filtr Playlists", tag: "Curadoria", status: "Conceito", icon: "♬", description: "Vitrine editorial para apresentar moods, cenas, artistas e narrativas musicais." },
    { name: "Creator Services", tag: "Marketing", status: "Mock", icon: "◌", description: "Rede de creators, assets, roteiros, briefing e acompanhamento de campanhas." }
  ],
  releases: [
    { artist: "Lua Mota", title: "Noite Solar", date: "18 Jun", status: "Checklist", progress: 72, owner: "A&R Ops" },
    { artist: "Nina Vale", title: "Sinal Aberto", date: "28 Jun", status: "Pitch DSP", progress: 84, owner: "Marketing" },
    { artist: "DJ Arame", title: "Pulso 140", date: "05 Jul", status: "Assets", progress: 58, owner: "Creators" },
    { artist: "Casa Brava", title: "Areia Elétrica", date: "12 Jul", status: "Metadados", progress: 41, owner: "Distribuição" },
    { artist: "Maya K", title: "Corpo Lento", date: "19 Jul", status: "Monitoramento", progress: 93, owner: "Insights" }
  ],
  academy: [
    { title: "Fundamentos de distribuição digital", level: "Essencial", duration: "42 min", progress: 88, modules: 6 },
    { title: "Como preparar assets de lançamento", level: "Prático", duration: "35 min", progress: 64, modules: 5 },
    { title: "Pitch para DSPs e calendário editorial", level: "Intermediário", duration: "51 min", progress: 32, modules: 7 },
    { title: "Leitura de dados e sinais de crescimento", level: "Dados", duration: "46 min", progress: 18, modules: 6 },
    { title: "Creator marketing para música", level: "Marketing", duration: "39 min", progress: 0, modules: 4 },
    { title: "Contratos, direitos e checklist operacional", level: "Operações", duration: "58 min", progress: 0, modules: 8 }
  ],
  distributionSteps: ["Cadastro", "Metadados", "Assets", "Checklist", "Pitch", "Release", "Monitoramento"],
  tasks: [
    { label: "Validar capa e Canvas", status: "Pendente", due: "Hoje" },
    { label: "Confirmar ISRC / UPC", status: "Em revisão", due: "Amanhã" },
    { label: "Subir press release", status: "Concluído", due: "Ontem" },
    { label: "Enviar brief para creators", status: "Pendente", due: "2 dias" }
  ]
};
