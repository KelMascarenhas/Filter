window.FILTR_DATA = {
  metrics: [
    { label: "Perfis de artistas", value: "18", delta: "+3", hint: "em revisão" },
    { label: "Parceiros e selos", value: "4", delta: "2", hint: "workspaces ativos" },
    { label: "Produtos em lançamento", value: "7", delta: "5", hint: "com entrega pendente" },
    { label: "Metadados pendentes", value: "11", delta: "Hoje", hint: "faixas para validar" }
  ],
  portalHighlights: [
    {
      type: "Novo clipe",
      title: "Maya Luz estreia visualizer de nova fase",
      description: "Thumbnail, chamada e contexto editorial para aumentar descoberta e tempo de permanência.",
      meta: "Assistir ao clipe",
      image: "assets/pitch/artist-pop.png",
      href: "#/clipes"
    },
    {
      type: "Entrevista",
      title: "Artista fala sobre processo criativo e nova fase",
      description: "Conteúdo original com artistas, produtores, empresários e jornalistas conectados à cena.",
      meta: "Assistir entrevista",
      image: "assets/pitch/filtr-control-room.png",
      href: "#/entrevistas"
    },
    {
      type: "Playlist",
      title: "Hits do momento",
      description: "Curadoria semanal com artistas em crescimento, cenas regionais e lançamentos para acompanhar.",
      meta: "Ouvir playlist",
      image: "assets/pitch/crowd-green.png",
      href: "#/playlists"
    },
    {
      type: "Oportunidade",
      title: "Sua música nos Palcos FILTR",
      description: "Submeta sua faixa para playlists, entrevistas, showcases e novas oportunidades editoriais.",
      meta: "Enviar música",
      image: "assets/pitch/festival-crowd.png",
      href: "#/login"
    }
  ],
  publicProducts: [
    { label: "Canal", title: "Canal FILTR", text: "Clique para assistir nossos conteúdos.", image: "assets/pitch/crowd-close.jpg", href: "#/produtos" },
    { label: "Clipes", title: "Clipes", text: "Clique para assistir aos clipes.", image: "assets/pitch/live-singer.png", href: "#/produtos" },
    { label: "Playlists", title: "Playlists", text: "Clique para ouvir nossas playlists.", image: "assets/pitch/crowd-green.png", href: "#/produtos" },
    { label: "Entrevistas", title: "Entrevistas", text: "Clique para assistir às entrevistas.", image: "assets/pitch/filtr-control-room.png", href: "#/produtos" },
    { label: "Palcos FILTR", title: "Palcos FILTR", text: "Clique para conhecer os palcos e shows.", image: "assets/pitch/filtr-stage.png", href: "#/produtos" }
  ],
  interviewFeature: {
    label: "Entrevista da semana",
    title: "Léo Dias conversa com artista em destaque",
    text: "Bastidores, inspirações e próximos passos de uma carreira em ascensão.",
    cta: "Assistir entrevista",
    image: "assets/pitch/filtr-control-room.png",
    href: "#/entrevistas"
  },
  news: [
    {
      slug: "hub-distribuicao-filtr",
      title: "A nova geração da música brasileira começa a aparecer na FILTR",
      kicker: "Lançamentos",
      date: "Agora",
      readTime: "4 min",
      image: "assets/pitch/crowd-green.png",
      excerpt: "Notícias, clipes, playlists e oportunidades conectam artistas em desenvolvimento a novas audiências.",
      body: [
        "A Experiência FILTR nasce como uma camada de descoberta, conteúdo e oportunidade para talentos da música brasileira.",
        "A proposta é reduzir fricção na apresentação: mostrar como notícia, clipe, playlist, conteúdo e oportunidade podem viver em uma jornada clara.",
        "Nesta versão, tudo é mockado: os cards, status, métricas, lançamentos e progresso de cada etapa. Não existe banco, upload ou integração real nesta experiência."
      ]
    },
    {
      slug: "academy-primeira-trilha",
      title: "Por dentro da estratégia digital de um single em ascensão",
      kicker: "Bastidores",
      date: "Beta",
      readTime: "3 min",
      image: "assets/pitch/filtr-control-room.png",
      excerpt: "Do briefing ao clipe, o portal mostra como lançamento, conteúdo, creators e playlists se conectam.",
      body: [
        "A área de entrada do artista organiza processos, padroniza tarefas e mostra evolução do lançamento.",
        "A primeira execução prioriza tema editorial, artistas, praça, playlist, teasers, creators e captação de conteúdo.",
        "O protótipo simula progresso, módulos, tarefas e entregas para sustentar uma apresentação executiva sem depender de autenticação real."
      ]
    },
    {
      slug: "radar-artistas-regionais",
      title: "Artistas fora do eixo Rio-SP puxam novas cenas no radar FILTR",
      kicker: "Inteligência",
      date: "Radar",
      readTime: "5 min",
      image: "assets/pitch/festival-crowd.png",
      excerpt: "A vitrine combina gêneros em crescimento, cidades, playlists regionais e sinais de comunidade.",
      body: [
        "A camada de inteligência da FILTR organiza sinais de relevância artística em uma interface simples: score, tendência, praça, fase e oportunidades.",
        "Para a apresentação, os dados são fictícios e servem apenas para navegar pela lógica operacional do Estúdio FILTR.",
        "O objetivo do mock é comunicar a lógica: FILTR não é só entrega de produto; é portal, conteúdo, inteligência e operação em um único ambiente."
      ]
    }
  ],
  artists: [
    { name: "Maya Luz", genre: "Pop / Brasil", city: "São Paulo", score: 94, growth: "+42%", stage: "Prioridade", image: "assets/pitch/artist-pop.png", insight: "Novo clipe em destaque, crescimento em vídeos curtos e boa conversão em playlists editoriais." },
    { name: "Gusttavo Lima", genre: "Sertanejo / Live", city: "Goiânia", score: 91, growth: "+35%", stage: "Aceleração", image: "assets/pitch/billboard-gusttavo.jpeg", insight: "Lançamento com forte retenção e alto potencial para campanhas regionais." },
    { name: "Duo Livre", genre: "Catálogo / Collab", city: "Brasil", score: 88, growth: "+27%", stage: "Emergente", image: "assets/pitch/artist-duo.png", insight: "Narrativa visual forte para encontro de públicos, marcas e repertório." },
    { name: "Rafael Vento", genre: "Show / Conteúdo", city: "Rio de Janeiro", score: 86, growth: "+51%", stage: "Viral", image: "assets/pitch/live-singer.png", insight: "Performance ao vivo com boa aderência a cortes sociais e creators." },
    { name: "Cena Nordeste", genre: "Forró / Arrocha", city: "Fortaleza", score: 82, growth: "+19%", stage: "Desenvolvimento", image: "assets/pitch/festival-crowd.png", insight: "Sinais regionais para playlists, entrevistas, showcases e pauta editorial." },
    { name: "Superfãs FILTR", genre: "Comunidade / CRM", city: "Salvador", score: 90, growth: "+33%", stage: "Prioridade", image: "assets/pitch/crowd-close.jpg", insight: "Audiência jovem, alto engajamento e oportunidade para relacionamento direto." }
  ],
  products: [
    { name: "FILTR Canal", tag: "Vídeo", status: "Público", icon: "TV", description: "Conteúdos editoriais, bastidores, performances e conversas para descoberta musical." },
    { name: "FILTR Clipes", tag: "Clipes", status: "Público", icon: "CL", description: "Vitrine para assistir lançamentos, vídeos oficiais, visualizers e cortes especiais." },
    { name: "FILTR Playlists", tag: "Curadoria", status: "Público", icon: "PL", description: "Curadoria editorial para apresentar moods, cenas, artistas e novidades da semana." },
    { name: "FILTR Entrevistas", tag: "Conteúdo", status: "Público", icon: "EN", description: "Conversas com artistas, produtores, empresários e creators que formam carreira." },
    { name: "Palcos FILTR", tag: "Ao vivo", status: "Público", icon: "PF", description: "Showcases, sessões, ativações e experiências ao vivo conectadas ao portal." },
    { name: "Creator Services", tag: "Marketing", status: "Mock", icon: "CR", description: "Rede de creators, assets, roteiros, briefing e acompanhamento de campanhas." }
  ],
  releases: [
    { artist: "Maya Luz", title: "Noite Solar", date: "18 Jun", status: "Metadados", progress: 72, owner: "Selo Aurora" },
    { artist: "Nina Vale", title: "Sinal Aberto", date: "28 Jun", status: "Áudios", progress: 84, owner: "Selo Aurora" },
    { artist: "DJ Arame", title: "Pulso 140", date: "05 Jul", status: "Capa", progress: 58, owner: "Coletivo Norte" },
    { artist: "Casa Brava", title: "Areia Elétrica", date: "12 Jul", status: "Direitos", progress: 41, owner: "Independente" },
    { artist: "Rafael Vento", title: "Ao Vivo 01", date: "19 Jul", status: "Revisão", progress: 93, owner: "Selo Aurora" }
  ],
  partners: [
    { name: "Selo Aurora", type: "Selo parceiro", document: "12.345.678/0001-90", manager: "Marina Costa", artists: 9, products: 5 },
    { name: "Coletivo Norte", type: "Parceiro editorial", document: "98.765.432/0001-10", manager: "João Ribeiro", artists: 6, products: 2 },
    { name: "Independente", type: "Artista direto", document: "Cadastro pessoal", manager: "Operação FILTR", artists: 3, products: 1 }
  ],
  artistProfiles: [
    { name: "Maya Luz", partner: "Selo Aurora", genre: "Pop Brasil", city: "São Paulo", status: "Perfil completo", products: 2, image: "assets/pitch/artist-pop.png" },
    { name: "Nina Vale", partner: "Selo Aurora", genre: "Sertanejo Pop", city: "Goiânia", status: "Aguardando links", products: 1, image: "assets/pitch/billboard-gusttavo.jpeg" },
    { name: "Duo Livre", partner: "Selo Aurora", genre: "Collab / Catálogo", city: "Brasil", status: "Validar fotos", products: 1, image: "assets/pitch/artist-duo.png" },
    { name: "Rafael Vento", partner: "Coletivo Norte", genre: "Show / Conteúdo", city: "Rio de Janeiro", status: "Perfil completo", products: 2, image: "assets/pitch/live-singer.png" },
    { name: "Casa Brava", partner: "Coletivo Norte", genre: "Forró / Arrocha", city: "Fortaleza", status: "Dados fiscais", products: 1, image: "assets/pitch/festival-crowd.png" },
    { name: "Maya K", partner: "Independente", genre: "R&B / Afrobeat", city: "Salvador", status: "Novo cadastro", products: 0, image: "assets/pitch/crowd-close.jpg" }
  ],
  launchSteps: ["Produto", "Capa", "Áudios", "Metadados", "Direitos", "Lojas", "Entrega"],
  productDraft: {
    title: "Noite Solar",
    artist: "Maya Luz",
    partner: "Selo Aurora",
    format: "Single",
    upc: "Gerado na simulação",
    releaseDate: "18 Jun 2026",
    language: "Português",
    genre: "Pop Brasil",
    copyright: "2026 Selo Aurora sob licença FILTR"
  },
  tracks: [
    { number: "01", title: "Noite Solar", isrc: "BR-FLT-26-00001", duration: "03:12", audio: "WAV 24-bit", status: "Metadados completos" },
    { number: "02", title: "Noite Solar - Acústico", isrc: "Solicitar ISRC", duration: "03:44", audio: "Upload simulado pendente", status: "Pendente" }
  ],
  deliveryStores: ["Spotify", "Apple Music", "YouTube Music", "Deezer", "Amazon Music", "TikTok Music"],
  deliveryChecklist: [
    "Capa 3000x3000 em JPG, sem logos externos",
    "Áudios WAV sem clipping e com duração validada",
    "Títulos, artistas primários e participações revisados",
    "ISRC, compositores, produtores e splits preenchidos",
    "Data de lançamento, territórios e lojas selecionados",
    "Revisão final pronta para simular entrega"
  ],
  pitchVisuals: {
    regionalSignals: [
      { area: "Nordeste", value: 31, note: { pt: "forró, piseiro, arrocha e vaquejada", en: "forró, piseiro, arrocha and vaquejada" }, driver: { pt: "alta força de comunidade e vídeo curto", en: "strong community and short-video pull" } },
      { area: "Norte", value: 24, note: { pt: "tecnobrega, aparelhagem e pop amazônico", en: "tecnobrega, aparelhagem and Amazon pop" }, driver: { pt: "cenas locais com baixa cobertura nacional", en: "local scenes with low national coverage" } },
      { area: "Centro-Oeste", value: 22, note: { pt: "sertanejo, agro pop e interior", en: "sertanejo, agro pop and inland scenes" }, driver: { pt: "roster regional e turnê como motor", en: "regional roster and touring as engine" } },
      { area: "Sudeste", value: 18, note: { pt: "funk, trap, rap, pop e pagode", en: "funk, trap, rap, pop and pagode" }, driver: { pt: "escala de mídia e competição alta", en: "media scale and high competition" } },
      { area: "Sul", value: 16, note: { pt: "pop regional, sertanejo e cenas independentes", en: "regional pop, sertanejo and independent scenes" }, driver: { pt: "comunidades fortes e consumo recorrente", en: "strong communities and recurring consumption" } }
    ],
    moduleDescriptions: {
      "FILTR Launch Hub": { pt: "onde o lançamento vira plano: capa, assets, prazos, score e próximos passos.", en: "where a release becomes a plan: artwork, assets, timing, score and next steps." },
      "FILTR Academy": { pt: "onde o artista aprende a desenvolver carreira, pitch, imagem, dados e direitos.", en: "where artists learn career development, pitch, image, data and rights." },
      "FILTR Media Network": { pt: "mídia planejada com canais, creators, inventário, pauta e campanhas acessíveis.", en: "planned media with channels, creators, inventory, editorial coverage and accessible campaigns." },
      "FILTR Opportunities": { pt: "chamadas para playlists, clipes, entrevistas, palcos, brands e A&R.", en: "calls for playlists, videos, interviews, stages, brands and A&R." },
      "FILTR Intelligence": { pt: "dados acionáveis para entender cidade, retenção, saves, crescimento e prontidão.", en: "actionable data to understand cities, retention, saves, growth and readiness." },
      "FILTR Local Labels": { pt: "produtoras locais como antenas regionais para cadastro, curadoria e evolução.", en: "local producers as regional antennas for onboarding, curation and progress." },
      "FILTR A&R Bridge": { pt: "janela qualificada para Sony/Som Livre acompanhar artistas antes da disputa.", en: "a qualified window for Sony/Som Livre to track artists before the market race." },
      "Casa FILTR": { pt: "ponto de encontro, gravação, conteúdo e relacionamento com comunidade.", en: "meeting point for recording, content and community relationship." },
      "Palco FILTR": { pt: "showcases, ativações e provas de público para a trajetória do artista.", en: "showcases, activations and audience proof for the artist journey." },
      "FILTR News": { pt: "narrativa editorial para transformar movimento local em pauta nacional.", en: "editorial narrative to turn local momentum into national coverage." },
      "FILTR Playlists & Channels": { pt: "curadoria e canais proprietários para gerar audiência recorrente dentro da FILTR.", en: "curation and owned channels to generate recurring audience inside FILTR." },
      "Descoberta": { pt: "porta de entrada pública para artistas, fãs e mercado acompanharem sinais.", en: "public entry point for artists, fans and the market to track signals." },
      "Conteúdo": { pt: "matérias, clipes, entrevistas, cortes e narrativas que criam recorrência.", en: "stories, videos, interviews, clips and narratives that create recurrence." },
      "Formação": { pt: "Academy dentro do Studio para profissionalizar repertório, imagem e direitos.", en: "Academy inside Studio to professionalize repertoire, image and rights." },
      "Lançamento": { pt: "organização de produto, assets, metadados e prontidão de campanha.", en: "release organization, assets, metadata and campaign readiness." },
      "Dados": { pt: "sinais de território, comportamento, conteúdo, playlists e evolução.", en: "signals from territory, behavior, content, playlists and progress." },
      "Oportunidades": { pt: "playlists, palco, mídia, creators, brands e chamadas editoriais.", en: "playlists, stages, media, creators, brands and editorial calls." },
      "Palcos": { pt: "showcases e experiências que provam público fora do dashboard.", en: "showcases and experiences that prove audience beyond dashboards." },
      "A&R": { pt: "janela qualificada para observar trajetória e reduzir ruído de decisão.", en: "qualified window to observe trajectory and reduce decision noise." }
    },
    journeyEconomics: [
      { label: { pt: "Entrada", en: "Entry" }, value: "1.000", note: { pt: "artistas em onboarding", en: "artists in onboarding" } },
      { label: { pt: "Sinais", en: "Signals" }, value: "240", note: { pt: "com dados e conteúdo consistentes", en: "with consistent data and content" } },
      { label: { pt: "Oportunidades", en: "Opportunities" }, value: "72", note: { pt: "aptos a mídia, palco ou playlist", en: "ready for media, stage or playlist" } },
      { label: { pt: "A&R", en: "A&R" }, value: "18", note: { pt: "observação qualificada", en: "qualified watchlist" } }
    ],
    businessFlywheel: [
      { label: { pt: "Artistas entram", en: "Artists enter" }, detail: { pt: "onboarding, diagnóstico e lançamento", en: "onboarding, diagnosis and release" } },
      { label: { pt: "Audiência cresce", en: "Audience grows" }, detail: { pt: "conteúdo, playlists, creators e mídia", en: "content, playlists, creators and media" } },
      { label: { pt: "Dados viram vantagem", en: "Data becomes advantage" }, detail: { pt: "sinais proprietários antes do mercado", en: "owned signals before the market" } },
      { label: { pt: "Negócios retornam", en: "Business returns" }, detail: { pt: "A&R, brands, live, partners e catálogo", en: "A&R, brands, live, partners and catalog" } }
    ],
    economicSignals: [
      { value: "R$ 3,958 bi", label: { pt: "mercado brasileiro de música gravada", en: "Brazilian recorded music market" } },
      { value: "+14,1%", label: { pt: "crescimento anual em 2025", en: "annual growth in 2025" } },
      { value: "#8", label: { pt: "posição global do Brasil", en: "Brazil global rank" } },
      { value: "106 mil/dia", label: { pt: "novos ISRCs chegando às DSPs", en: "new ISRCs reaching DSPs" } }
    ]
  },
  tasks: [
    { label: "Validar perfil fiscal do Selo Aurora", status: "Pendente", due: "Hoje" },
    { label: "Confirmar ISRC da faixa acústica", status: "Em revisão", due: "Amanhã" },
    { label: "Aprovar capa do produto Noite Solar", status: "Concluído", due: "Ontem" },
    { label: "Completar splits de Casa Brava", status: "Pendente", due: "2 dias" }
  ],
  techSlides: [
    {
      badge: { pt: "Apresentação Técnica", en: "Technical Presentation" },
      title: { pt: "FILTR — Tech & Operação", en: "FILTR — Tech & Operations" },
      subtitle: { pt: "Como operar a FILTR como selo automatizado conectado ao supply chain da Sony.", en: "How to operate FILTR as an automated label connected to Sony's supply chain." },
      body: { pt: "Uma proposta técnica e executiva para preparar catálogo, validar dados, enviar pacotes de entrega e receber relatórios de volta no CMS FILTR.", en: "A technical and executive proposal to prepare catalog, validate data, send delivery packages and receive reports back into the FILTR CMS." },
      quote: { pt: "A FILTR prepara, valida e automatiza. A Sony distribui, governa e reporta.", en: "FILTR prepares, validates and automates. Sony distributes, governs and reports." },
      visual: "cover",
      tags: [
        { pt: "CMS próprio", en: "Own CMS" },
        { pt: "Integração Sony", en: "Sony integration" },
        { pt: "Dados de vendas e financeiro", en: "Sales and finance data" }
      ]
    },
    {
      badge: { pt: "Estrutura", en: "Structure" },
      title: { pt: "Por que este modelo", en: "Why this model" },
      subtitle: { pt: "FILTR como selo automatizado Sony, não como nova distribuidora.", en: "FILTR as an automated Sony label, not a new distributor." },
      body: { pt: "O objetivo não é duplicar contratos, compliance, financeiro ou relacionamento com plataformas. A FILTR cria uma camada de CMS, curadoria, validação e inteligência operacional sobre a estrutura que a Sony já domina.", en: "The goal is not to duplicate contracts, compliance, finance or platform relationships. FILTR creates a CMS, curation, validation and operational intelligence layer on top of Sony's existing structure." },
      quote: { pt: "Menos complexidade para operar. Mais controle para escalar.", en: "Less complexity to operate. More control to scale." },
      visual: "model"
    },
    {
      badge: { pt: "Fluxo técnico", en: "Technical Flow" },
      title: { pt: "Arquitetura da conexão", en: "Connection architecture" },
      subtitle: { pt: "CMS FILTR → Sony → DSPs, com retorno de dados para o CMS.", en: "FILTR CMS → Sony → DSPs, with data returning to the CMS." },
      body: { pt: "A FILTR envia catálogo estruturado para a Sony. A Sony distribui para DSPs e devolve status, vendas, consumo, financeiro e royalties em CSV, XLS ou API.", en: "FILTR sends structured catalog to Sony. Sony distributes to DSPs and returns status, sales, consumption, finance and royalties through CSV, XLS or API." },
      quote: { pt: "A conexão ideal é de mão dupla: entrega e inteligência voltam para o mesmo ambiente.", en: "The ideal connection is two-way: delivery and intelligence return to the same environment." },
      visual: "connection"
    },
    {
      badge: { pt: "Operação", en: "Operation" },
      title: { pt: "Responsabilidades e integração", en: "Responsibilities and integration" },
      subtitle: { pt: "O que fica com a FILTR e o que permanece com a Sony.", en: "What stays with FILTR and what remains with Sony." },
      body: { pt: "A FILTR organiza o fluxo de cadastro, assets e validação. A Sony mantém distribuição, contratos com DSPs, governança, compliance, financeiro e relatórios oficiais.", en: "FILTR organizes registration, assets and validation flows. Sony keeps distribution, DSP contracts, governance, compliance, finance and official reports." },
      quote: { pt: "A FILTR prepara, valida e automatiza. A Sony distribui, governa e reporta.", en: "FILTR prepares, validates and automates. Sony distributes, governs and reports." },
      visual: "responsibilities"
    },
    {
      badge: { pt: "Dependências", en: "Dependencies" },
      title: { pt: "O que a Sony precisa fornecer", en: "What Sony needs to provide" },
      subtitle: { pt: "Duas definições destravam o piloto: como a FILTR entrega e como a Sony retorna informação.", en: "Two definitions unlock the pilot: how FILTR delivers and how Sony returns information." },
      body: { pt: "A Sony define o formato técnico, credenciais, campos obrigatórios, regras de validação, status de entrega e modelo de relatórios comerciais e financeiros.", en: "Sony defines the technical format, credentials, required fields, validation rules, delivery status and commercial and financial reporting model." },
      quote: { pt: "A Sony não precisa reconstruir nada: apenas definir a porta de entrada e o formato de retorno.", en: "Sony does not need to rebuild anything: only define the entry point and the return format." },
      visual: "dependencies"
    },
    {
      badge: { pt: "Dados e relatórios", en: "Data and reports" },
      title: { pt: "Retorno da Sony para o CMS FILTR", en: "Sony return to the FILTR CMS" },
      subtitle: { pt: "Status, vendas, consumo, relatórios financeiros, royalties e dashboards.", en: "Status, sales, consumption, financial reports, royalties and dashboards." },
      body: { pt: "O CMS FILTR deixa de ser apenas cadastro e passa a ser painel de gestão do selo: evolução por DSP, consumo por território, status de ingestão e visão financeira.", en: "The FILTR CMS stops being only registration and becomes a label management dashboard: DSP evolution, territory consumption, ingestion status and financial view." },
      quote: { pt: "A informação que volta fecha o ciclo operacional e transforma entrega em gestão.", en: "The information coming back closes the operational loop and turns delivery into management." },
      visual: "returns"
    },
    {
      badge: { pt: "Resumo", en: "Summary" },
      title: { pt: "Benefícios executivos", en: "Executive benefits" },
      subtitle: { pt: "Economia, governança e escala sem criar uma nova distribuidora.", en: "Efficiency, governance and scale without creating a new distributor." },
      body: { pt: "A proposta é operar um selo com inteligência de dados, usando a supply chain existente da Sony e reduzindo custo, tempo e complexidade técnica.", en: "The proposal is to operate a data-driven label using Sony's existing supply chain while reducing cost, time and technical complexity." },
      quote: { pt: "A FILTR envia catálogo estruturado. A Sony retorna status, vendas e financeiro. O CMS vira gestão.", en: "FILTR sends structured catalog. Sony returns status, sales and finance. The CMS becomes management." },
      visual: "summary"
    }
  ],
  pitchSlides: [
    {
      kicker: { pt: "Abertura institucional", en: "Institutional opening" },
      title: { pt: "Do talento local ao mercado nacional.", en: "From local talent to the national market." },
      subtitle: { pt: "FILTR Experience", en: "FILTR Experience" },
      body: { pt: "Uma plataforma para descobrir, desenvolver e potencializar artistas com conteúdo, dados, território e oportunidade.", en: "A platform to discover, develop and amplify artists through content, data, territory and opportunity." },
      quote: { pt: "A FILTR organiza tudo: descoberta, desenvolvimento, dados e oportunidade.", en: "FILTR organizes everything: discovery, development, data and opportunity." },
      visual: "cover",
      cta: { pt: "Começar apresentação", en: "Start presentation" }
    },
    {
      kicker: { pt: "A tese", en: "The thesis" },
      title: { pt: "O próximo grande artista já está em movimento.", en: "The next major artist is already in motion." },
      body: { pt: "O talento não nasce quando assina contrato. Ele começa antes: no território, nas produtoras locais, nos clipes, nas redes, nos palcos pequenos, nas playlists, nas comunidades e nos sinais de comportamento.", en: "Talent is not born when it signs a deal. It starts earlier: in territories, local producers, videos, social platforms, small stages, playlists, communities and behavioral signals." },
      quote: { pt: "Descobrir antes é a nova vantagem competitiva.", en: "Discovering earlier is the new competitive advantage." },
      visual: "thesis"
    },
    {
      kicker: { pt: "O problema", en: "The problem" },
      title: { pt: "O streaming distribuiu música. Mas não resolveu desenvolvimento de carreira.", en: "Streaming distributed music. It did not solve career development." },
      body: { pt: "Colocar música no ar ficou mais fácil. Transformar lançamento em carreira continua difícil porque os sinais estão espalhados entre DSPs, YouTube, TikTok, Instagram, produtoras locais, playlists, creators, eventos, imprensa e A&R.", en: "Putting music online became easier. Turning a release into a career remains hard because signals are scattered across DSPs, YouTube, TikTok, Instagram, local producers, playlists, creators, events, press and A&R." },
      bullets: [
        { pt: "O artista lança, mas nem sempre sabe crescer.", en: "Artists release, but do not always know how to grow." },
        { pt: "O dado existe, mas está fragmentado.", en: "Data exists, but it is fragmented." },
        { pt: "A cena local se move rápido, mas nem sempre chega ao radar nacional.", en: "Local scenes move fast, but do not always reach the national radar." },
        { pt: "A&R recebe sinais tarde demais.", en: "A&R receives signals too late." },
        { pt: "Conteúdo, formação, palco e oportunidade ainda estão desconectados.", en: "Content, education, stages and opportunities are still disconnected." }
      ],
      visual: "fragmented"
    },
    {
      kicker: { pt: "Mercado territorial", en: "Territorial market" },
      title: { pt: "O Brasil é um mercado de cenas regionais.", en: "Brazil is a market of regional scenes." },
      body: { pt: "A música brasileira não cresce de forma linear. Cada região tem seus gêneros, códigos, públicos, produtores, artistas, empresários e caminhos de descoberta.", en: "Brazilian music does not grow linearly. Every region has its genres, codes, audiences, producers, artists, managers and discovery paths." },
      quote: { pt: "Quem organiza as cenas, cria vantagem.", en: "Whoever organizes the scenes creates advantage." },
      regions: [
        { area: "Nordeste", genres: "arrocha, forró, piseiro, pagodão, brega funk" },
        { area: "Norte", genres: "tecnobrega, aparelhagem, pop amazônico" },
        { area: "Centro-Oeste / interior", genres: "sertanejo, agro pop, gospel regional" },
        { area: "Sudeste", genres: "funk, trap, rap, pop, pagode" },
        { area: "Sul", genres: "pop regional, sertanejo, eletrônico, cenas independentes" }
      ],
      visual: "map"
    },
    {
      kicker: { pt: "Valor estratégico", en: "Strategic value" },
      title: { pt: "Talento antes do contrato. Dados antes da concorrência.", en: "Talent before the deal. Data before the competition." },
      body: { pt: "Para Sony Music e Som Livre, a FILTR pode funcionar como uma nova camada de relacionamento, desenvolvimento e inteligência com artistas emergentes.", en: "For Sony Music and Som Livre, FILTR can become a new layer of relationship, development and intelligence with emerging artists." },
      bullets: [
        { pt: "Relacionamento antecipado com artistas.", en: "Early relationship with artists." },
        { pt: "Leitura regional de cenas em crescimento.", en: "Regional reading of growing scenes." },
        { pt: "Dados proprietários de comportamento.", en: "Proprietary behavioral data." },
        { pt: "Conteúdo como motor de aproximação.", en: "Content as relationship engine." },
        { pt: "Suporte à tomada de decisão de A&R.", en: "Support for A&R decision-making." },
        { pt: "Caminho natural para upstream.", en: "Natural path to upstream." },
        { pt: "Redução de risco na aposta em novos talentos.", en: "Lower risk in new-talent bets." }
      ],
      visual: "strategic-funnel"
    },
    {
      kicker: { pt: "A solução", en: "The solution" },
      title: { pt: "FILTR Experience: a camada entre o talento local e o mercado nacional.", en: "FILTR Experience: the layer between local talent and the national market." },
      body: { pt: "A FILTR Experience combina portal, Studio, conteúdo, playlists, Academy, lançamento, palcos, dados e oportunidades em uma jornada única. Não é apenas uma plataforma de upload. É uma experiência de potencialização de talento.", en: "FILTR Experience combines portal, Studio, content, playlists, Academy, release tools, stages, data and opportunities in one journey. It is not only an upload platform. It is a talent amplification experience." },
      modules: ["Descoberta", "Conteúdo", "Formação", "Lançamento", "Dados", "Oportunidades", "Palcos", "A&R"],
      visual: "solution-orbit"
    },
    {
      kicker: { pt: "Portal público", en: "Public portal" },
      title: { pt: "Um portal vivo para descobrir artistas, sons e oportunidades.", en: "A living portal to discover artists, sounds and opportunities." },
      body: { pt: "A primeira porta de entrada da FILTR é uma experiência pública de descoberta. Cada artista tem uma página viva para lançamentos, clipes, entrevistas, notícias e materiais. A FILTR capta esses sinais, posiciona o conteúdo e amplia a audiência do ecossistema.", en: "FILTR's first door is a public discovery experience. Every artist has a living page for releases, videos, interviews, news and assets. FILTR captures those signals, positions the content and expands the ecosystem audience." },
      bullets: [
        { pt: "Busca e perfil público do artista.", en: "Artist search and public profile." },
        { pt: "Lançamentos, clipes, entrevistas e notícias atualizados pelo Studio.", en: "Releases, videos, interviews and news updated through Studio." },
        { pt: "Mais artistas trazem mais audiência para o conglomerado FILTR.", en: "More artists bring more audience into the FILTR network." }
      ],
      visual: "portal-mockup"
    },
    {
      kicker: { pt: "Produtos FILTR", en: "FILTR products" },
      title: { pt: "Cada produto FILTR é uma porta de descoberta.", en: "Every FILTR product is a discovery door." },
      body: { pt: "A FILTR pode operar como um ecossistema público de conteúdo, curadoria e relacionamento. Cada produto transforma o material do artista em ponto de contato: notícia, clipe, entrevista, playlist, palco e cobertura. Mais artistas geram mais conteúdo, mais audiência própria e mais desejo de participar.", en: "FILTR can operate as a public ecosystem of content, curation and relationship. Every product turns artist material into a point of contact: news, video, interview, playlist, stage and coverage. More artists generate more content, more owned audience and more desire to participate." },
      quote: { pt: "Mais artistas alimentam mais produtos. Mais produtos trazem mais audiência para a FILTR.", en: "More artists feed more products. More products bring more audience into FILTR." },
      products: ["Canal FILTR", "Clipes", "Playlists", "Entrevistas", "Palcos FILTR", "Newsletter", "Coberturas", "Bastidores", "Conteúdos editoriais"],
      visual: "product-cards"
    },
    {
      kicker: { pt: "Studio", en: "Studio" },
      title: { pt: "O Studio organiza a operação do selo e do artista.", en: "Studio organizes label and artist operations." },
      body: { pt: "Depois da descoberta, o artista e o selo entram em um dashboard operacional. Ali vivem perfil do selo, perfil do artista, lançamentos de produto, Academy, oportunidades, mídia e dados. O que o artista atualiza vira matéria-prima para a FILTR posicionar melhor o conteúdo.", en: "After discovery, the artist and label enter an operational dashboard. Label profile, artist profile, product releases, Academy, opportunities, media and data live there. What the artist updates becomes raw material for FILTR to better position content." },
      quote: { pt: "O Studio é o cockpit: organiza perfil, produto, formação, mídia e oportunidade em uma única jornada.", en: "Studio is the cockpit: it organizes profile, product, education, media and opportunity in one journey." },
      modules: ["Perfil do selo", "Perfil do artista", "Lançamentos", "Academy", "Oportunidades", "Media Network", "Relatórios", "Conteúdos"],
      visual: "studio-mockup"
    },
    {
      kicker: { pt: "Jornada do artista", en: "Artist journey" },
      title: { pt: "Da primeira música ao próximo palco.", en: "From the first song to the next stage." },
      body: { pt: "A FILTR transforma passos soltos em uma trilha de evolução.", en: "FILTR turns scattered steps into an evolution path." },
      quote: { pt: "A FILTR cria método onde antes havia improviso.", en: "FILTR creates method where there used to be improvisation." },
      journey: [
        { pt: "Entra na plataforma", en: "Joins the platform" },
        { pt: "Cria perfil", en: "Creates profile" },
        { pt: "Organiza músicas, clipes e materiais", en: "Organizes songs, videos and materials" },
        { pt: "Acessa Academy e serviços", en: "Accesses Academy and services" },
        { pt: "Submete para playlists e oportunidades", en: "Submits to playlists and opportunities" },
        { pt: "Ganha visibilidade no portal", en: "Gains portal visibility" },
        { pt: "Participa de conteúdo, entrevistas e clipes", en: "Appears in content, interviews and videos" },
        { pt: "Gera dados de comportamento", en: "Generates behavioral data" },
        { pt: "Evolui para palcos, campanhas e análise A&R", en: "Moves to stages, campaigns and A&R review" }
      ],
      visual: "journey"
    },
    {
      kicker: { pt: "Produtoras e selos locais", en: "Local producers and labels" },
      title: { pt: "As produtoras locais são a força que já está no território.", en: "Local producers are the force already inside the territory." },
      body: { pt: "Muitos movimentos musicais começam antes do mercado nacional perceber. A FILTR dá estrutura para que agentes locais organizem talentos, acompanhem lançamentos, acessem dados e se conectem ao ecossistema Sony Music/Som Livre.", en: "Many music movements start before the national market notices. FILTR gives local agents structure to organize talent, track releases, access data and connect to the Sony Music/Som Livre ecosystem." },
      bullets: [
        { pt: "Organização de artistas e catálogo.", en: "Artist and catalog organization." },
        { pt: "Acesso a formação e serviços.", en: "Access to education and services." },
        { pt: "Vitrine editorial e dados de evolução.", en: "Editorial showcase and progress data." },
        { pt: "Oportunidades de conteúdo e palco.", en: "Content and stage opportunities." }
      ],
      visual: "local-network"
    },
    {
      kicker: { pt: "Conteúdo", en: "Content" },
      title: { pt: "A FILTR é uma incubadora de conteúdo artístico.", en: "FILTR is an incubator for artist content." },
      body: { pt: "Além de descobrir artistas, a FILTR pode produzir, organizar e distribuir conteúdo para rádios, TVs, portais e plataformas digitais. Uma entrevista, podcast ou show de estúdio pode virar áudio para rádio, vídeo para TV, cortes sociais, matéria editorial e pauta para o mercado.", en: "Beyond discovering artists, FILTR can produce, organize and distribute content to radio, TV, portals and digital platforms. An interview, podcast or studio show can become radio audio, TV video, social clips, editorial stories and market coverage." },
      quote: { pt: "A mesma conversa pode ecoar em várias rádios e telas do Brasil inteiro.", en: "The same conversation can echo across radio stations and screens throughout Brazil." },
      products: ["Entrevistas", "Podcasts", "Shows de estúdio", "Áudio ao vivo para rádio", "Rádio e TV parceiras", "Cortes sociais", "Matérias", "Newsletter", "Coberturas de palco", "Media Network"],
      visual: "content-grid"
    },
    {
      kicker: { pt: "Dados & inteligência", en: "Data & intelligence" },
      title: { pt: "Cada interação vira sinal. Cada sinal vira inteligência.", en: "Every interaction becomes a signal. Every signal becomes intelligence." },
      body: { pt: "Cada clique, inscrição, envio, visualização, playlist, entrevista, pitch, aula, oportunidade e participação gera sinal para leitura de mercado, desenvolvimento artístico e A&R.", en: "Every click, sign-up, submission, view, playlist, interview, pitch, lesson, opportunity and participation generates a signal for market reading, artist development and A&R." },
      metrics: [
        { label: "Território", value: "NE +31%" },
        { label: "Engajamento", value: "92K saves" },
        { label: "Conteúdo", value: "18 clips" },
        { label: "Academy", value: "74/100" },
        { label: "Palco", value: "5 fits" },
        { label: "A&R", value: "Watch" }
      ],
      recommendation: { pt: "Priorizar Recife, Fortaleza e Salvador; ativar creators regionais; abrir pitch para Palco FILTR Nordeste.", en: "Prioritize Recife, Fortaleza and Salvador; activate regional creators; open pitch for FILTR Stage Northeast." },
      visual: "intelligence"
    },
    {
      kicker: { pt: "Pipeline & A&R", en: "Pipeline & A&R" },
      title: { pt: "A FILTR cria um pipeline proprietário de talentos.", en: "FILTR creates a proprietary talent pipeline." },
      body: { pt: "A vantagem não está apenas em chegar ao artista. Está em chegar antes, formar antes, medir antes e criar preferência para apoiar o A&R com sinais reais da jornada.", en: "The advantage is not only reaching artists. It is reaching earlier, developing earlier, measuring earlier and creating preference to support A&R with real journey signals." },
      pipeline: ["Descoberta", "Relacionamento", "Desenvolvimento", "Dados", "Oportunidade", "Upstream"],
      bullets: [
        { pt: "Menos dependência de sinais tardios.", en: "Less dependence on late signals." },
        { pt: "Mais contexto sobre a trajetória do artista.", en: "More context about artist trajectory." },
        { pt: "Visão regional e dados comportamentais.", en: "Regional view and behavioral data." },
        { pt: "Relação construída antes da disputa.", en: "Relationship built before the race." }
      ],
      visual: "pipeline"
    },
    {
      kicker: { pt: "Piloto de 90 dias", en: "90-day pilot" },
      title: { pt: "Um piloto de 90 dias para provar o modelo.", en: "A 90-day pilot to prove the model." },
      body: { pt: "A FILTR pode começar com um piloto controlado, mensurável e escalável: preparar, ativar, medir e decidir os próximos territórios.", en: "FILTR can begin with a controlled, measurable and scalable pilot: prepare, activate, measure and decide the next territories." },
      roadmap: [
        { title: { pt: "Preparar", en: "Prepare" }, detail: { pt: "Portal, Studio, conteúdos, critérios e seleção inicial.", en: "Portal, Studio, content, criteria and initial selection." } },
        { title: { pt: "Ativar", en: "Activate" }, detail: { pt: "Artistas, produtoras, playlists, entrevistas, oportunidades e Academy.", en: "Artists, producers, playlists, interviews, opportunities and Academy." } },
        { title: { pt: "Medir", en: "Measure" }, detail: { pt: "Consumo, engajamento, dados regionais, evolução e oportunidades geradas.", en: "Consumption, engagement, regional data, progress and generated opportunities." } },
        { title: { pt: "Decidir", en: "Decide" }, detail: { pt: "Relatório executivo, aprendizados, próximos territórios e plano de escala.", en: "Executive report, learnings, next territories and scale plan." } }
      ],
      metrics: [
        { label: "Artistas", value: "100" },
        { label: "Produtoras", value: "12" },
        { label: "Conteúdos", value: "40" },
        { label: "Playlists", value: "20" },
        { label: "A&R Watch", value: "10" },
        { label: "Oportunidades", value: "30" }
      ],
      visual: "roadmap"
    },
    {
      kicker: { pt: "Entrada na demo", en: "Demo entry" },
      title: { pt: "Agora, veja a FILTR em funcionamento.", en: "Now, see FILTR in action." },
      body: { pt: "A apresentação mostrou a visão estratégica. O próximo passo é explorar a experiência na prática. A FILTR pode ser a principal máquina de descoberta, desenvolvimento e inteligência de talentos emergentes do Brasil.", en: "The presentation showed the strategic vision. The next step is exploring the experience in practice. FILTR can become Brazil's leading machine for emerging talent discovery, development and intelligence." },
      visual: "final",
      cta: { pt: "Explorar plataforma", en: "Explore platform" },
      secondaryCta: { pt: "Rever apresentação", en: "Review presentation" }
    }
  ],
  experienceArtist: {
    name: "Maya Reis",
    city: "Recife, PE",
    genre: "Forró/Piseiro Pop",
    stage: { pt: "Crescimento regional", en: "Regional growth" },
    releaseScore: 82,
    readinessScore: 74,
    cities: ["Recife", "Fortaleza", "Salvador"],
    recommendation: { pt: "Completar trilha Conteúdo Vertical, aplicar para Palco FILTR Nordeste e contratar pacote regional do FILTR Media Network.", en: "Complete Vertical Content, apply for Palco FILTR Nordeste and hire the regional FILTR Media Network package." }
  },
  territorySlides: [
    {
      kicker: { pt: "Apresentação executiva · Grupo Sony", en: "Executive deck · Sony Group" },
      title: { pt: "Presença territorial para desenvolver o Brasil musical real.", en: "Territorial presence to develop the real musical Brazil." },
      subtitle: { pt: "Uma camada estratégica de curadoria regional, parceiros locais e desenvolvimento de carreira para Sony Music e Som Livre.", en: "A strategic layer of regional curation, local partners and career development for Sony Music and Som Livre." },
      quote: { pt: "A FILTR não distribui volume. A FILTR organiza acesso qualificado.", en: "FILTR does not distribute volume. FILTR organizes qualified access." },
      visual: "cover",
      cta: { pt: "Iniciar apresentação", en: "Start presentation" }
    },
    {
      kicker: { pt: "A tese", en: "The thesis" },
      title: { pt: "O Brasil musical é maior do que o eixo Rio–São Paulo.", en: "Musical Brazil is bigger than the Rio–São Paulo axis." },
      body: { pt: "A música brasileira se movimenta em cenas locais: festas regionais, produtores, compositores, selos, empresários, palcos, paredões, vaquejadas, São João, festivais, igrejas, bailes, casas de show e circuitos independentes.", en: "Brazilian music moves through local scenes: regional parties, producers, songwriters, labels, managers, stages, sound systems, rodeos, São João, festivals, churches, dances, venues and independent circuits." },
      quote: { pt: "A FILTR nasce para chegar onde a música nasce.", en: "FILTR exists to arrive where music is born." },
      visual: "thesis-map"
    },
    {
      kicker: { pt: "O problema", en: "The problem" },
      title: { pt: "Subir música ficou fácil. Filtrar oportunidade ficou difícil.", en: "Uploading music got easy. Filtering opportunity got hard." },
      body: { pt: "O mercado digital criou volume — mas volume não é estratégia. A dificuldade não é distribuir tudo. É identificar, antes dos outros, o que tem valor cultural, público, negócio e potencial de desenvolvimento.", en: "The digital market created volume — but volume is not strategy. The challenge is not distributing everything. It is identifying, before everyone else, what has cultural, audience, business and development value." },
      quote: { pt: "O excesso de oferta tornou a curadoria mais valiosa do que o acesso.", en: "Oversupply made curation more valuable than access." },
      visual: "noise-signal"
    },
    {
      kicker: { pt: "Diferenciação", en: "Differentiation" },
      title: { pt: "A FILTR não é uma plataforma aberta de upload.", en: "FILTR is not an open upload platform." },
      body: { pt: "Enquanto o mercado abriu a porta para qualquer música subir, a FILTR cria a inteligência para entender o que merece ser desenvolvido.", en: "While the market opened the door for any track to go up, FILTR builds the intelligence to understand what deserves to be developed." },
      quote: { pt: "A FILTR não distribui volume. A FILTR organiza acesso qualificado.", en: "FILTR does not distribute volume. FILTR organizes qualified access." },
      visual: "comparison"
    },
    {
      kicker: { pt: "O que a FILTR é", en: "What FILTR is" },
      title: { pt: "A FILTR é uma rede de curadoria territorial.", en: "FILTR is a network of territorial curation." },
      body: { pt: "Parceiros locais, inteligência de cena e oportunidades já filtradas conectam o desenvolvimento de carreira regional à estrutura nacional e global da Sony Music e da Som Livre.", en: "Local partners, scene intelligence and pre-filtered opportunities connect regional career development to the national and global structure of Sony Music and Som Livre." },
      quote: { pt: "Não é uma plataforma aberta. É uma rede de presença.", en: "It is not an open platform. It is a network of presence." },
      visual: "value-flow"
    },
    {
      kicker: { pt: "Como funciona", en: "How it works" },
      title: { pt: "Da cena local à escala nacional.", en: "From the local scene to national scale." },
      body: { pt: "Cinco etapas conectam o território à estrutura do grupo, transformando leitura de cena em pipeline qualificado.", en: "Five stages connect the territory to the group's structure, turning scene reading into a qualified pipeline." },
      quote: { pt: "A FILTR é o filtro entre o ruído do volume e o valor real da cena.", en: "FILTR is the filter between the noise of volume and the real value of the scene." },
      visual: "process"
    },
    {
      kicker: { pt: "O papel do parceiro", en: "The partner's role" },
      title: { pt: "O parceiro local conhece a cena antes do algoritmo.", en: "The local partner knows the scene before the algorithm." },
      body: { pt: "Os parceiros regionais são radares culturais, curadores territoriais e conectores de artistas, produtores e empresários — validadores de contexto que traduzem o território para a estrutura nacional.", en: "Regional partners are cultural radars, territorial curators and connectors of artists, producers and managers — context validators who translate the territory for the national structure." },
      quote: { pt: "O parceiro não apenas indica artistas. Ele traduz o território.", en: "The partner does not just recommend artists. They translate the territory." },
      visual: "partner"
    },
    {
      kicker: { pt: "Por que Sony Music / Som Livre", en: "Why Sony Music / Som Livre" },
      title: { pt: "Uma nova camada para um ecossistema já poderoso.", en: "A new layer for an already powerful ecosystem." },
      body: { pt: "A FILTR amplia a capilaridade do grupo. Não substitui a Sony Music ou a Som Livre — aproxima o grupo das cenas que ainda não estão dentro da estrutura.", en: "FILTR expands the group's reach. It does not replace Sony Music or Som Livre — it brings the group closer to scenes not yet inside the structure." },
      quote: { pt: "A FILTR aproxima o grupo das cenas que movimentam cultura, público, show, repertório e comportamento.", en: "FILTR brings the group closer to the scenes that drive culture, audience, shows, repertoire and behavior." },
      visual: "layers"
    },
    {
      kicker: { pt: "Primeiro case", en: "First case" },
      title: { pt: "Nordeste: primeiro case de presença territorial.", en: "Northeast: the first case of territorial presence." },
      body: { pt: "O Nordeste é a região ideal para provar o modelo: cenas musicais fortes, festas de massa, circuitos regionais de show, artistas independentes com público real e uma identidade cultural própria.", en: "The Northeast is the ideal region to prove the model: strong music scenes, mass parties, regional show circuits, independent artists with real audiences and a distinct cultural identity." },
      quote: { pt: "O Nordeste não precisa ser descoberto. Ele precisa ser conectado, estruturado e escalado.", en: "The Northeast does not need to be discovered. It needs to be connected, structured and scaled." },
      visual: "scenes"
    },
    {
      kicker: { pt: "Mapa de presença · Fase 1", en: "Presence map · Phase 1" },
      title: { pt: "Presença FILTR: Fase 1 Nordeste.", en: "FILTR presence: Phase 1 Northeast." },
      body: { pt: "Cada ponto FILTR é um radar local: cena, artista, produtor, empresário, palco, repertório e oportunidade. Presença territorial, parceiros locais e curadoria de cena.", en: "Each FILTR point is a local radar: scene, artist, producer, manager, stage, repertoire and opportunity. Territorial presence, local partners and scene curation." },
      visual: "ne-map"
    },
    {
      kicker: { pt: "Ativação territorial", en: "Territorial activation" },
      title: { pt: "Palco FILTR: presença onde a cultura acontece.", en: "Palco FILTR: presence where culture happens." },
      body: { pt: "A presença territorial não é apenas digital. A FILTR também existe fisicamente em palcos, festas e ativações culturais — começando pelo São João, a maior temporada de cultura viva do Nordeste.", en: "Territorial presence is not only digital. FILTR also exists physically on stages, parties and cultural activations — starting with São João, the Northeast's biggest season of living culture." },
      quote: { pt: "Palco FILTR é a presença da estratégia dentro da cultura viva.", en: "Palco FILTR is strategy made present inside living culture." },
      visual: "stage"
    },
    {
      kicker: { pt: "Modelo de escala", en: "Scale model" },
      title: { pt: "Do case Nordeste para uma rede Brasil.", en: "From the Northeast case to a Brazil-wide network." },
      body: { pt: "O modelo nasce no Nordeste como prova de conceito e se expande, fase a fase, até uma rede nacional de inteligência musical territorial.", en: "The model is born in the Northeast as proof of concept and expands, phase by phase, into a national network of territorial music intelligence." },
      quote: { pt: "A primeira fase é Nordeste. A visão é Brasil.", en: "The first phase is the Northeast. The vision is Brazil." },
      visual: "roadmap"
    },
    {
      kicker: { pt: "Valor estratégico", en: "Strategic value" },
      title: { pt: "O que a FILTR entrega para o grupo.", en: "What FILTR delivers to the group." },
      body: { pt: "Capilaridade nacional, pipeline qualificado e inteligência de cena local convertem território em oportunidade e oportunidade em escala.", en: "National reach, a qualified pipeline and local scene intelligence convert territory into opportunity and opportunity into scale." },
      quote: { pt: "A FILTR transforma território em inteligência, inteligência em oportunidade e oportunidade em escala.", en: "FILTR turns territory into intelligence, intelligence into opportunity and opportunity into scale." },
      visual: "value"
    },
    {
      kicker: { pt: "Visão", en: "Vision" },
      title: { pt: "Uma Sony / Som Livre mais presente, mais próxima e mais brasileira.", en: "A Sony / Som Livre more present, closer and more Brazilian." },
      body: { pt: "A FILTR posiciona o grupo como uma estrutura que entende o Brasil por dentro, reconhecendo que o futuro da música brasileira passa por cenas regionais, parceiros locais e novas formas de desenvolvimento artístico.", en: "FILTR positions the group as a structure that understands Brazil from the inside, recognizing that the future of Brazilian music runs through regional scenes, local partners and new forms of artistic development." },
      quote: { pt: "O futuro da música brasileira não será centralizado. Será conectado.", en: "The future of Brazilian music will not be centralized. It will be connected." },
      visual: "vision"
    },
    {
      kicker: { pt: "Encerramento", en: "Closing" },
      title: { pt: "FILTR: onde a cena encontra escala.", en: "FILTR: where the scene meets scale." },
      body: { pt: "A FILTR é a camada que conecta território, curadoria e desenvolvimento. Começa no Nordeste. Escala para o Brasil. Fortalece Sony Music e Som Livre como presença nacional real.", en: "FILTR is the layer that connects territory, curation and development. It starts in the Northeast. It scales to Brazil. It strengthens Sony Music and Som Livre as real national presence." },
      quote: { pt: "Não é sobre esperar a música chegar ao centro. É sobre estar no território quando ela nasce.", en: "It is not about waiting for music to reach the center. It is about being in the territory when it is born." },
      visual: "closing",
      cta: { pt: "Voltar ao portal", en: "Back to portal" },
      secondaryCta: { pt: "Rever apresentação", en: "Review presentation" }
    }
  ],
  experienceModules: [
    { id: "dashboard", label: { pt: "Home / Dashboard", en: "Home / Dashboard" }, title: { pt: "Visão geral da jornada", en: "Journey overview" }, score: "82", status: { pt: "Pronta para aceleração regional", en: "Ready for regional acceleration" }, actions: [{ pt: "Revisar diagnóstico", en: "Review diagnosis" }, { pt: "Abrir plano de lançamento", en: "Open release plan" }] },
    { id: "diagnostico", label: { pt: "Diagnóstico do Artista", en: "Artist Diagnosis" }, title: { pt: "Onde Maya Reis está agora", en: "Where Maya Reis is now" }, score: "74", status: { pt: "Forte no Nordeste, precisa converter conteúdo em audiência recorrente", en: "Strong in the Northeast, needs to convert content into recurring audience" }, actions: [{ pt: "Conteúdo Vertical", en: "Vertical Content" }, { pt: "Imagem e narrativa", en: "Image and narrative" }] },
    { id: "distribution", label: { pt: "Lançamento", en: "Release Hub" }, title: { pt: "Lançamento em preparação", en: "Release in preparation" }, score: "68", status: { pt: "Capa aprovada, splits e ficha técnica em revisão", en: "Artwork approved, splits and credits under review" }, actions: [{ pt: "Validar metadados", en: "Validate metadata" }, { pt: "Simular entrega", en: "Simulate delivery" }] },
    { id: "release-score", label: { pt: "Release Score", en: "Release Score" }, title: { pt: "Potencial do próximo single", en: "Next single potential" }, score: "82", status: { pt: "Boa aderência regional e alta chance para playlists de cena", en: "Strong regional fit and high playlist opportunity" }, actions: [{ pt: "Ajustar pré-save", en: "Adjust pre-save" }, { pt: "Criar assets curtos", en: "Create short assets" }] },
    { id: "academy", label: { pt: "Academy", en: "Academy" }, title: { pt: "Trilhas recomendadas", en: "Recommended learning paths" }, score: "3", status: { pt: "Conteúdo Vertical, Pitch e Direitos são prioridades", en: "Vertical Content, Pitch and Rights are priorities" }, actions: [{ pt: "Iniciar trilha", en: "Start path" }, { pt: "Ver tarefas", en: "View tasks" }] },
    { id: "opportunities", label: { pt: "Opportunities", en: "Opportunities" }, title: { pt: "Oportunidades abertas", en: "Open opportunities" }, score: "5", status: { pt: "Palco FILTR Nordeste e playlists regionais em fit", en: "Palco FILTR Nordeste and regional playlists fit" }, actions: [{ pt: "Aplicar para palco", en: "Apply for stage" }, { pt: "Enviar pitch", en: "Send pitch" }] },
    { id: "media-network", label: { pt: "Media Network", en: "Media Network" }, title: { pt: "Plano regional de mídia", en: "Regional media plan" }, score: "R$ 18K", status: { pt: "Pacote simulado com creators, rádio digital, social e calhau negociado", en: "Mock package with creators, digital radio, social and remnant media" }, actions: [{ pt: "Montar pacote", en: "Build package" }, { pt: "Simular mídia", en: "Simulate media" }] },
    { id: "intelligence", label: { pt: "Intelligence", en: "Intelligence" }, title: { pt: "Sinais de crescimento", en: "Growth signals" }, score: "+31%", status: { pt: "Fortaleza e Salvador aceleram mais que a média", en: "Fortaleza and Salvador are accelerating above average" }, actions: [{ pt: "Abrir mapa", en: "Open map" }, { pt: "Ver recomendação", en: "View recommendation" }] },
    { id: "local-labels", label: { pt: "Local Labels", en: "Local Labels" }, title: { pt: "Produtora local conectada", en: "Connected local producer" }, score: "PE", status: { pt: "Selo parceiro Recife Beats acompanha Maya Reis e mais 6 artistas", en: "Partner label Recife Beats tracks Maya Reis and 6 more artists" }, actions: [{ pt: "Ver roster", en: "View roster" }, { pt: "Abrir território", en: "Open territory" }] },
    { id: "ar-radar", label: { pt: "A&R Radar", en: "A&R Radar" }, title: { pt: "Radar qualificado Sony/Som Livre", en: "Qualified Sony/Som Livre radar" }, score: "Watch", status: { pt: "Não é promessa de contratação. É acompanhamento qualificado por dados, evolução e prontidão.", en: "Not a signing promise. It is qualified tracking through data, progress and readiness." }, actions: [{ pt: "Marcar para observação", en: "Mark for watchlist" }, { pt: "Exportar resumo", en: "Export summary" }] }
  ]
};
