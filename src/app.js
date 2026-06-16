const data = window.FILTR_DATA;
const app = document.querySelector("#app");
const savedLanguage = localStorage.getItem("filtr-language");
const state = { search: "", profileSearch: "", lang: savedLanguage === "en" ? "en" : "pt" };

const translations = {
  en: {
    "Experiência": "Experience",
    "Apresentação": "Presentation",
    "Notícias": "News",
    "Lançamentos": "Releases",
    "Entrevistas": "Interviews",
    "Produtos": "Products",
    "Produtos FILTR": "FILTR Products",
    "Entrar": "Enter",
    "Sair": "Exit",
    "Sobre a FILTR": "About FILTR",
    "Termos de uso": "Terms of use",
    "Política de privacidade": "Privacy policy",
    "Ajuda": "Help",
    "Fale conosco": "Contact",
    "Conectamos talentos, música e fãs.": "We connect talent, music and fans.",
    "Descubra artistas, sons e oportunidades.": "Discover artists, sounds and opportunities.",
    "Notícias, clipes, playlists, entrevistas e experiências para potencializar talentos e conectar fãs à música.": "News, videos, playlists, interviews and experiences to amplify talent and connect fans to music.",
    "Explorar agora": "Explore now",
    "Conhecer produtos": "View products",
    "Notícias · Clipes · Playlists · Entrevistas · Palcos FILTR": "News · Videos · Playlists · Interviews · FILTR Stages",
    "Produtos FILTR": "FILTR Products",
    "Acesse o melhor do conteúdo e das experiências": "Access the best content and experiences",
    "Ver todos": "View all",
    "Agora para descobrir": "Discover now",
    "Conteúdos selecionados para você explorar o que há de novo na música": "Selected content to explore what is new in music",
    "Ver todos →": "View all →",
    "Entrevista da semana": "Interview of the week",
    "Léo Dias conversa com artista em destaque": "Léo Dias talks to a featured artist",
    "Bastidores, inspirações e próximos passos de uma carreira em ascensão.": "Backstage, inspirations and next steps for a rising career.",
    "Assistir entrevista": "Watch interview",
    "FILTR News": "FILTR News",
    "Tudo sobre artistas, lançamentos e movimentos da música": "Everything about artists, releases and music movements",
    "Oportunidades": "Opportunities",
    "Sua música pode encontrar novos públicos": "Your music can find new audiences",
    "Organize perfil, músicas, vídeos e links.": "Organize profile, music, videos and links.",
    "Submeta lançamentos para curadoria.": "Submit releases for curation.",
    "Receba chamadas para playlists, entrevistas e palcos.": "Receive calls for playlists, interviews and stages.",
    "Acompanhe próximos passos pela área de entrada.": "Track next steps in the Studio.",
    "Começar como artista": "Start as an artist",
    "Artistas em ascensão": "Rising artists",
    "Talentos que estão movimentando cenas, clipes e playlists": "Talent moving scenes, videos and playlists",
    "Newsletter": "Newsletter",
    "Receba novidades dos seus artistas favoritos": "Get news from your favorite artists",
    "Inscreva-se para receber notícias, lançamentos e atualizações da FILTR.": "Subscribe to receive FILTR news, releases and updates.",
    "Seu e-mail": "Your email",
    "Inscrever-se": "Subscribe",
    "Portal editorial": "Editorial portal",
    "Notícias, bastidores, lançamentos e movimentos que estão moldando a música no Brasil.": "News, backstage stories, releases and movements shaping music in Brazil.",
    "Ler matéria →": "Read story →",
    "Voltar para notícias": "Back to news",
    "Acessar Estúdio FILTR": "Access FILTR Studio",
    "Dashboard operacional": "Operational dashboard",
    "Perfis": "Profiles",
    "Lançar produto": "Launch product",
    "Catálogo": "Catalog",
    "Sair para portal": "Back to portal",
    "Estúdio FILTR": "FILTR Studio",
    "Acesse o dashboard operacional para gerenciar parceiros, artistas e lançamentos de produto.": "Access the operational dashboard to manage partners, artists and product releases.",
    "Entrar no Estúdio": "Enter Studio",
    "Voltar para o portal": "Back to portal",
    "senha mock": "mock password",
    "Perfis de artistas": "Artist profiles",
    "Parceiros e selos": "Partners and labels",
    "Produtos em lançamento": "Products in release",
    "Metadados pendentes": "Pending metadata",
    "em revisão": "under review",
    "workspaces ativos": "active workspaces",
    "com entrega pendente": "with pending delivery",
    "faixas para validar": "tracks to validate",
    "Parceiro ativo": "Active partner",
    "Perfis do parceiro": "Partner profiles",
    "Pesquisar artista, selo ou cidade": "Search artist, label or city",
    "Abrir perfis →": "Open profiles →",
    "Novo perfil": "New profile",
    "Produto em lançamento": "Product in release",
    "Abrir lançamento →": "Open release →",
    "Pendências operacionais": "Operational tasks",
    "Atividades de hoje": "Today's activities",
    "Lançamento de produto": "Product release",
    "Modelo GX de entrega": "GX delivery model",
    "Release builder": "Release builder",
    "Novo lançamento simulado": "New simulated release",
    "Salvar rascunho": "Save draft",
    "Fluxo mockado para cadastrar produto, capa, faixas, créditos, lojas e revisão em uma experiência de CMS musical.": "Mock flow for registering product, artwork, tracks, credits, stores and review in a music CMS experience.",
    "Etapas do produto": "Product steps",
    "Validação mock": "Mock validation",
    "Resumo do produto": "Product summary",
    "Prontidão": "Readiness",
    "Pacote simulado": "Simulated package",
    "Campos principais": "Main fields",
    "Título do produto": "Product title",
    "Tipo de produto": "Product type",
    "Versão": "Version",
    "Selo / parceiro": "Label / partner",
    "Gênero principal": "Main genre",
    "UPC / EAN": "UPC / EAN",
    "Original": "Original",
    "Master": "Master",
    "Linha P": "P line",
    "Linha C": "C line",
    "Créditos e direitos": "Credits and rights",
    "Compositores": "Composers",
    "Produtor": "Producer",
    "Split master": "Master split",
    "Editora": "Publisher",
    "Informações editoriais": "Publishing information",
    "Validar direitos": "Validate rights",
    "Arte do lançamento": "Release artwork",
    "Capa principal": "Main cover",
    "Clique ou arraste a arte aqui": "Click or drag artwork here",
    "JPG ou PNG, quadrada, 3000x3000 px": "JPG or PNG, square, 3000x3000 px",
    "Trocar capa (mock)": "Change cover (mock)",
    "Requisitos da capa": "Cover requirements",
    "Quadrada, mínimo 3000x3000 px": "Square, minimum 3000x3000 px",
    "JPG/PNG em RGB": "JPG/PNG in RGB",
    "Sem URL, preço, logos externos ou bordas": "No URL, pricing, external logos or borders",
    "Texto legível e sem corte": "Readable text with no crop",
    "Faixas do produto": "Product tracks",
    "Importar áudio (mock)": "Import audio (mock)",
    "Editar metadados": "Edit metadata",
    "Substituir áudio (mock)": "Replace audio (mock)",
    "Explícita": "Explicit",
    "Não": "No",
    "Sim": "Yes",
    "Duração total": "Total duration",
    "faixas": "tracks",
    "faixas completas": "tracks complete",
    "Lojas selecionadas": "Selected stores",
    "Territórios": "Territories",
    "Mundial, exceto territórios restritos": "Worldwide, excluding restricted territories",
    "100+ lojas e plataformas simuladas": "100+ mocked stores and platforms",
    "Selecionar lojas (mock)": "Select stores (mock)",
    "Revisar pendências": "Review pending items",
    "Quase pronto. Complete direitos e revisão antes de simular entrega.": "Almost ready. Complete rights and review before simulating delivery.",
    "Itens validados": "Validated items",
    "Pendências mock": "Mock pending items",
    "Revisão interna": "Internal review",
    "Produto": "Product",
    "Capa": "Cover",
    "Áudios": "Audio",
    "Metadados": "Metadata",
    "Direitos": "Rights",
    "Lojas": "Stores",
    "Entrega": "Delivery",
    "Dados do produto": "Product details",
    "Upload simulado de capa": "Mock cover upload",
    "Faixas e áudios": "Tracks and audio",
    "Arquivos de áudio mock": "Mock audio files",
    "Metadados da faixa": "Track metadata",
    "Direitos e splits": "Rights and splits",
    "Lojas e territórios": "Stores and territories",
    "Revisão e simulação": "Review and simulation",
    "Checklist da simulação": "Simulation checklist",
    "Simular entrega": "Simulate delivery",
    "Selecionar arquivo (mock)": "Select file (mock)",
    "Adicionar faixa": "Add track",
    "Pronto para revisão": "Ready for review",
    "Ambiente 100% mockado": "100% mocked environment",
    "Nenhuma ação envia arquivos, conecta Supabase, SFTP, Sony, DDEX ou aciona upload real. Tudo aqui é navegação visual com dados locais.": "No action sends files, connects Supabase, SFTP, Sony, DDEX or triggers a real upload. Everything here is visual navigation with local data.",
    "Ações simuladas do produto": "Simulated product actions",
    "Ação local sem integração real": "Local action without real integration",
    "Gerar pacote (mock)": "Generate package (mock)",
    "Exportar XML (mock)": "Export XML (mock)",
    "Exportar CSV (mock)": "Export CSV (mock)",
    "Baixar pacote (mock)": "Download package (mock)",
    "Simular envio SFTP": "Simulate SFTP send",
    "Importar relatório (mock)": "Import report (mock)",
    "Simulação registrada localmente. Nenhum arquivo foi enviado e nenhuma integração foi acionada.": "Simulation registered locally. No file was sent and no integration was triggered.",
    "Informe um e-mail válido para receber novidades da FILTR.": "Enter a valid email to receive FILTR updates.",
    "Inscrição recebida. Você receberá novidades da FILTR neste e-mail.": "Subscription received. You will get FILTR updates at this email.",
    "Novo clipe": "New video",
    "Maya Luz estreia visualizer de nova fase": "Maya Luz premieres a new-phase visualizer",
    "Thumbnail, chamada e contexto editorial para aumentar descoberta e tempo de permanência.": "Thumbnail, headline and editorial context to increase discovery and watch time.",
    "Assistir ao clipe": "Watch video",
    "Entrevista": "Interview",
    "Artista fala sobre processo criativo e nova fase": "Artist talks about creative process and a new phase",
    "Conteúdo original com artistas, produtores, empresários e jornalistas conectados à cena.": "Original content with artists, producers, managers and journalists connected to the scene.",
    "Assistir entrevista": "Watch interview",
    "Playlist": "Playlist",
    "Hits do momento": "Hits right now",
    "Curadoria semanal com artistas em crescimento, cenas regionais e lançamentos para acompanhar.": "Weekly curation with growing artists, regional scenes and releases to follow.",
    "Ouvir playlist": "Listen to playlist",
    "Oportunidade": "Opportunity",
    "Sua música nos Palcos FILTR": "Your music on FILTR Stages",
    "Submeta sua faixa para playlists, entrevistas, showcases e novas oportunidades editoriais.": "Submit your track for playlists, interviews, showcases and new editorial opportunities.",
    "Enviar música": "Submit music",
    "Canal": "Channel",
    "Canal FILTR": "FILTR Channel",
    "Clique para assistir nossos conteúdos.": "Click to watch our content.",
    "Clipes": "Videos",
    "Clique para assistir aos clipes.": "Click to watch videos.",
    "Playlists": "Playlists",
    "Clique para ouvir nossas playlists.": "Click to listen to our playlists.",
    "Clique para assistir às entrevistas.": "Click to watch interviews.",
    "Palcos FILTR": "FILTR Stages",
    "Presença Territorial": "Territorial Presence",
    "Clique para conhecer os palcos e shows.": "Click to discover stages and shows.",
    "Lançamentos": "Releases",
    "Agora": "Now",
    "Beta": "Beta",
    "Radar": "Radar",
    "Inteligência": "Intelligence",
    "Bastidores": "Backstage",
    "A nova geração da música brasileira começa a aparecer na FILTR": "Brazilian music's new generation starts appearing on FILTR",
    "Notícias, clipes, playlists e oportunidades conectam artistas em desenvolvimento a novas audiências.": "News, videos, playlists and opportunities connect developing artists to new audiences.",
    "A Experiência FILTR nasce como uma camada de descoberta, conteúdo e oportunidade para talentos da música brasileira.": "FILTR Experience is a discovery, content and opportunity layer for Brazilian music talent.",
    "A proposta é reduzir fricção na apresentação: mostrar como notícia, clipe, playlist, conteúdo e oportunidade podem viver em uma jornada clara.": "The goal is to reduce friction in the pitch: show how news, video, playlist, content and opportunity can live in a clear journey.",
    "Nesta versão, tudo é mockado: os cards, status, métricas, lançamentos e progresso de cada etapa. Não existe banco, upload ou integração real nesta experiência.": "In this version everything is mocked: cards, status, metrics, releases and progress for each step. There is no database, upload or real integration in this experience.",
    "Por dentro da estratégia digital de um single em ascensão": "Inside the digital strategy for a rising single",
    "Do briefing ao clipe, o portal mostra como lançamento, conteúdo, creators e playlists se conectam.": "From briefing to video, the portal shows how release, content, creators and playlists connect.",
    "A área de entrada do artista organiza processos, padroniza tarefas e mostra evolução do lançamento.": "The artist entry area organizes processes, standardizes tasks and shows release progress.",
    "A primeira execução prioriza tema editorial, artistas, praça, playlist, teasers, creators e captação de conteúdo.": "The first run prioritizes editorial theme, artists, territory, playlist, teasers, creators and content capture.",
    "O protótipo simula progresso, módulos, tarefas e entregas para sustentar uma apresentação executiva sem depender de autenticação real.": "The prototype simulates progress, modules, tasks and deliveries to support an executive pitch without real authentication.",
    "Artistas fora do eixo Rio-SP puxam novas cenas no radar FILTR": "Artists outside Rio-SP drive new scenes on FILTR radar",
    "A vitrine combina gêneros em crescimento, cidades, playlists regionais e sinais de comunidade.": "The showcase combines growing genres, cities, regional playlists and community signals.",
    "A camada de inteligência da FILTR organiza sinais de relevância artística em uma interface simples: score, tendência, praça, fase e oportunidades.": "FILTR's intelligence layer organizes artistic relevance signals in a simple interface: score, trend, territory, stage and opportunities.",
    "Para a apresentação, os dados são fictícios e servem apenas para navegar pela lógica operacional do Estúdio FILTR.": "For the presentation, the data is fictional and only supports navigation through FILTR Studio's operational logic.",
    "O objetivo do mock é comunicar a lógica: FILTR não é só entrega de produto; é portal, conteúdo, inteligência e operação em um único ambiente.": "The mock communicates the logic: FILTR is not only product delivery; it is portal, content, intelligence and operation in one environment.",
    "Radar de artistas e públicos": "Artist and audience radar",
    "Talentos que estão chamando atenção por consumo, engajamento, consistência e potencial de carreira.": "Talent drawing attention through consumption, engagement, consistency and career potential.",
    "Conteúdo, playlists, clipes, entrevistas e palcos": "Content, playlists, videos, interviews and stages",
    "Acesse o melhor do conteúdo e das experiências da FILTR.": "Access the best FILTR content and experiences.",
    "E-mail": "Email",
    "Senha": "Password",
    "Selo Aurora": "Aurora Label",
    "Workspace parceiro": "Partner workspace",
    "Dashboard": "Dashboard",
    "Modo apresentação": "Presentation mode",
    "Mock navegável": "Navigable mock",
    "Selo parceiro": "Partner label",
    "Parceiro editorial": "Editorial partner",
    "Artista direto": "Direct artist",
    "Responsável": "Owner",
    "Artistas": "Artists",
    "Produtos": "Products",
    "Buscar artistas por selo, parceiro ou cidade": "Search artists by label, partner or city",
    "Nenhum perfil encontrado para esta busca.": "No profile found for this search.",
    "produtos": "products",
    "Produto em lançamento": "Product in release",
    "Áudios do produto": "Product audio",
    "Áudios do produto (mock)": "Product audio (mock)",
    "Selecionar destinos": "Select destinations",
    "Produtos cadastrados no workspace": "Products registered in the workspace",
    "Título": "Title",
    "Artista": "Artist",
    "Parceiro": "Partner",
    "Formato": "Format",
    "Data de lançamento": "Release date",
    "Artista principal": "Main artist",
    "Gênero": "Genre",
    "Idioma": "Language",
    "Faixa": "Track",
    "Duração": "Duration",
    "Áudio": "Audio",
    "Data": "Date",
    "Progresso": "Progress",
    "Pendente": "Pending",
    "Em revisão": "In review",
    "Concluído": "Done",
    "Hoje": "Today",
    "Amanhã": "Tomorrow",
    "Ontem": "Yesterday",
    "2 dias": "2 days",
    "Metadados completos": "Metadata complete",
    "Solicitar ISRC": "Request ISRC",
    "Upload simulado pendente": "Mock upload pending",
    "WAV 24-bit": "WAV 24-bit",
    "Single": "Single",
    "Português": "Portuguese",
    "Pop / Brasil": "Brazilian Pop",
    "Sertanejo / Live": "Sertanejo / Live",
    "Catálogo / Collab": "Catalog / Collab",
    "Show / Conteúdo": "Live / Content",
    "Forró / Arrocha": "Forró / Arrocha",
    "Comunidade / CRM": "Community / CRM",
    "São Paulo": "São Paulo",
    "Goiânia": "Goiânia",
    "Brasil": "Brazil",
    "Rio de Janeiro": "Rio de Janeiro",
    "Fortaleza": "Fortaleza",
    "Salvador": "Salvador",
    "Prioridade": "Priority",
    "Aceleração": "Acceleration",
    "Emergente": "Emerging",
    "Viral": "Viral",
    "Desenvolvimento": "Development",
    "crescimento": "growth",
    "Novo clipe em destaque, crescimento em vídeos curtos e boa conversão em playlists editoriais.": "Featured new video, growth in short videos and good conversion in editorial playlists.",
    "Lançamento com forte retenção e alto potencial para campanhas regionais.": "Release with strong retention and high potential for regional campaigns.",
    "Narrativa visual forte para encontro de públicos, marcas e repertório.": "Strong visual narrative connecting audiences, brands and repertoire.",
    "Performance ao vivo com boa aderência a cortes sociais e creators.": "Live performance with strong fit for social cuts and creators.",
    "Sinais regionais para playlists, entrevistas, showcases e pauta editorial.": "Regional signals for playlists, interviews, showcases and editorial coverage.",
    "Audiência jovem, alto engajamento e oportunidade para relacionamento direto.": "Young audience, high engagement and opportunity for direct relationship.",
    "Vídeo": "Video",
    "Público": "Public",
    "Curadoria": "Curation",
    "Conteúdo": "Content",
    "Ao vivo": "Live",
    "Marketing": "Marketing",
    "Mock": "Mock",
    "Conteúdos editoriais, bastidores, performances e conversas para descoberta musical.": "Editorial content, backstage, performances and conversations for music discovery.",
    "Vitrine para assistir lançamentos, vídeos oficiais, visualizers e cortes especiais.": "A showcase for releases, official videos, visualizers and special cuts.",
    "Curadoria editorial para apresentar moods, cenas, artistas e novidades da semana.": "Editorial curation for moods, scenes, artists and weekly news.",
    "Conversas com artistas, produtores, empresários e creators que formam carreira.": "Conversations with artists, producers, managers and creators who build careers.",
    "Showcases, sessões, ativações e experiências ao vivo conectadas ao portal.": "Showcases, sessions, activations and live experiences connected to the portal.",
    "Rede de creators, assets, roteiros, briefing e acompanhamento de campanhas.": "Creator network, assets, scripts, briefings and campaign tracking.",
    "Pop Brasil": "Brazilian Pop",
    "Sertanejo Pop": "Sertanejo Pop",
    "Collab / Catálogo": "Collab / Catalog",
    "Perfil completo": "Profile complete",
    "Aguardando links": "Waiting for links",
    "Validar fotos": "Validate photos",
    "Dados fiscais": "Tax details",
    "Novo cadastro": "New registration",
    "Áudios": "Audio",
    "Direitos": "Rights",
    "Revisão": "Review",
    "Metadados": "Metadata",
    "Capa": "Cover",
    "Gerado na simulação": "Generated in simulation",
    "2026 Selo Aurora sob licença FILTR": "2026 Aurora Label under FILTR license",
    "Capa 3000x3000 em JPG, sem logos externos": "3000x3000 JPG cover, no external logos",
    "Áudios WAV sem clipping e com duração validada": "WAV audio without clipping and with validated duration",
    "Títulos, artistas primários e participações revisados": "Titles, primary artists and featuring credits reviewed",
    "ISRC, compositores, produtores e splits preenchidos": "ISRC, composers, producers and splits filled",
    "Data de lançamento, territórios e lojas selecionados": "Release date, territories and stores selected",
    "Revisão final pronta para simular entrega": "Final review ready to simulate delivery",
    "Validar perfil fiscal do Selo Aurora": "Validate Aurora Label tax profile",
    "Confirmar ISRC da faixa acústica": "Confirm acoustic track ISRC",
    "Aprovar capa do produto Noite Solar": "Approve Noite Solar product cover",
    "Completar splits de Casa Brava": "Complete Casa Brava splits"
  }
};

function t(text) {
  return state.lang === "en" ? translations.en[text] || text : text;
}

function copy(value) {
  if (value && typeof value === "object" && "pt" in value) {
    return state.lang === "en" ? value.en : value.pt;
  }
  return t(value);
}

const routes = [
  { path: "/", label: "Portal", render: renderHome },
  { path: "/pitch", label: "Pitch", render: renderPitchDeck },
  { path: "/tech", label: "Tech & Operação", render: renderTechDeck },
  { path: "/territorio", label: "Presença Territorial", render: renderTerritoryDeck },
  { path: "/noticias", label: "Notícias", render: renderNews },
  { path: "/lancamentos", label: "Lançamentos", render: renderHome },
  { path: "/entrevistas", label: "Entrevistas", render: renderHome },
  { path: "/clipes", label: "Clipes", render: renderHome },
  { path: "/playlists", label: "Playlists", render: renderHome },
  { path: "/palcos", label: "Palcos FILTR", render: renderHome },
  { path: "/artistas", label: "Artistas", render: renderArtists },
  { path: "/produtos", label: "Produtos FILTR", render: renderHome },
  { path: "/login", label: "Login", render: renderLogin },
  { path: "/studio", label: "Studio", render: renderStudioHome },
  { path: "/studio/perfis", label: "Perfis", render: renderProfiles },
  { path: "/studio/selo", label: "Perfil do selo", render: renderLabelProfile },
  { path: "/studio/artista", label: "Perfil do artista", render: renderArtistProfile },
  { path: "/studio/lancamento", label: "Lançamento de produto", render: renderProductLaunch },
  { path: "/studio/catalogo", label: "Catálogo", render: renderCatalog },
  { path: "/studio/distribuicao", label: "Lançamento de produto", render: renderProductLaunch },
  { path: "/studio/academy", label: "Academy", render: renderAcademy },
  { path: "/studio/media", label: "Media Network", render: renderMediaNetwork }
];

const homeSectionRoutes = {
  "/lancamentos": "discovery",
  "/entrevistas": "interview",
  "/clipes": "products",
  "/playlists": "products",
  "/palcos": "products",
  "/produtos": "products"
};

function routePath() {
  const hash = window.location.hash.replace("#", "");
  return hash || "/";
}

function go(path) {
  window.location.hash = path;
}

function active(path) {
  const current = routePath();
  return current === path || (path !== "/" && current.startsWith(path)) ? "active" : "";
}

function currencyClass(status) {
  const key = status.toLowerCase();
  if (key.includes("concluído") || key.includes("monitoramento")) return "good";
  if (key.includes("pendente") || key.includes("metadados")) return "warn";
  return "info";
}

function shell(content, options = {}) {
  const isStudioRoute = routePath().startsWith("/studio");
  return `
    <header class="topbar">
      <a class="brand" href="#/" aria-label="Voltar para o portal FILTR">
        <span class="brand-mark"><img src="assets/pitch/filtr-logo.png" alt="" /></span>
        <span class="brand-title">${t("Experiência")}</span>
      </a>
      <nav class="nav-links" aria-label="Navegação principal">
        <a class="${active("/noticias")}" href="#/noticias">${t("Notícias")}</a>
        <a class="${active("/lancamentos")}" href="#/lancamentos">${t("Lançamentos")}</a>
        <a class="${active("/entrevistas")}" href="#/entrevistas">${t("Entrevistas")}</a>
        <a class="${active("/produtos")}" href="#/produtos">${t("Produtos")}</a>
      </nav>
      <div class="header-actions" aria-label="Ações do cabeçalho">
        <a class="presentation-link ${active("/pitch")}" href="#/pitch/1">${t("Apresentação")}</a>
        <a class="presentation-link tech-link ${active("/tech")}" href="#/tech/1">Tech & Operação</a>
        <a class="presentation-link terr-link ${active("/territorio")}" href="#/territorio/1">${t("Presença Territorial")}</a>
        <button class="language-toggle" type="button" data-language-toggle aria-label="Alternar idioma">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
            <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.2 3.4 5.2 3.4 9s-1.2 6.8-3.4 9M12 3c-2.2 2.2-3.4 5.2-3.4 9s1.2 6.8 3.4 9" />
          </svg>
          <span>${state.lang.toUpperCase()}</span>
        </button>
        <a class="login-link ${isStudioRoute ? "studio-exit-top" : active("/login")}" href="${isStudioRoute ? "#/" : "#/login"}">${isStudioRoute ? t("Sair") : t("Entrar")}</a>
      </div>
    </header>
    ${content}
    <footer class="footer">
      <div class="footer-brand">
        <img src="assets/pitch/filtr-logo.png" alt="FILTR" />
        <span>${t("Conectamos talentos, música e fãs.")}</span>
      </div>
      <nav class="footer-links" aria-label="Links do rodapé">
        <a href="#/">${t("Sobre a FILTR")}</a>
        <a href="#/">${t("Termos de uso")}</a>
        <a href="#/">${t("Política de privacidade")}</a>
        <a href="#/">${t("Ajuda")}</a>
        <a href="#/">${t("Fale conosco")}</a>
      </nav>
      <div class="social-links" aria-label="Redes sociais">
        <a href="#/" aria-label="Instagram">IG</a>
        <a href="#/" aria-label="YouTube">YT</a>
        <a href="#/" aria-label="TikTok">TT</a>
        <a href="#/" aria-label="X">X</a>
        <a href="#/" aria-label="Spotify">SP</a>
      </div>
    </footer>
  `;
}

function heroVisual() {
  return `
    <div class="hero-visual" aria-hidden="true">
      <figure class="photo-frame frame-pink">
        <img src="assets/pitch/artist-pop.png" alt="" />
      </figure>
      <figure class="photo-frame frame-yellow">
        <img src="assets/pitch/billboard-gusttavo.jpeg" alt="" />
      </figure>
      <figure class="photo-frame frame-blue">
        <img src="assets/pitch/artist-duo.png" alt="" />
      </figure>
      <figure class="photo-frame frame-green wide">
        <img src="assets/pitch/crowd-close.jpg" alt="" />
      </figure>
    </div>
  `;
}

function metricCards() {
  return `<div class="metrics-grid">${data.metrics.map(item => `
    <article class="metric-card">
      <span>${t(item.label)}</span>
      <strong>${item.value}</strong>
      <small><b>${item.delta}</b> ${t(item.hint)}</small>
    </article>
  `).join("")}</div>`;
}

function portalPulseCards() {
  return `
    <section id="discovery" class="portal-pulse">
      <div class="section-heading inline">
        <div>
          <span class="section-kicker">${t("Agora para descobrir")}</span>
          <h2>${t("Conteúdos selecionados para você explorar o que há de novo na música")}</h2>
        </div>
        <a class="text-link" href="#/noticias">${t("Ver todos →")}</a>
      </div>
      <div class="pulse-grid">
        ${data.portalHighlights.map(item => `
          <a class="pulse-card" href="${item.href}">
            <img src="${item.image}" alt="" />
            <span>${t(item.type)}</span>
            <strong>${t(item.title)}</strong>
            <p>${t(item.description)}</p>
            <small>${t(item.meta)}</small>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function productsCarousel() {
  return `
    <section id="products" class="products-carousel section-block">
      <div class="section-heading inline">
        <div>
          <span class="section-kicker">${t("Produtos FILTR")}</span>
          <h2>${t("Acesse o melhor do conteúdo e das experiências")}</h2>
        </div>
        <div class="carousel-actions">
          <a class="text-link" href="#/produtos">${t("Ver todos")}</a>
          <button class="carousel-arrow" type="button" data-carousel-prev aria-label="Voltar produtos">‹</button>
          <button class="carousel-arrow" type="button" data-carousel-next aria-label="Avançar produtos">›</button>
        </div>
      </div>
      <div class="product-rail" data-products-rail>
        ${data.publicProducts.map(item => `
          <a class="public-product-card" href="${item.href}">
            <img src="${item.image}" alt="" />
            <span>${t(item.label)}</span>
            <strong>${t(item.title)}</strong>
            <p>${t(item.text)}</p>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}

function interviewFeature() {
  const item = data.interviewFeature;
  return `
    <section id="interview" class="interview-feature">
      <div class="interview-media">
        <img src="${item.image}" alt="" />
      </div>
      <div class="interview-copy">
        <span class="section-kicker">${t(item.label)}</span>
        <h2>${t(item.title)}</h2>
        <p>${t(item.text)}</p>
        <a class="button primary" href="${item.href}">${t(item.cta)}</a>
      </div>
    </section>
  `;
}

function newsletterSignup() {
  return `
    <section class="newsletter-panel">
      <div>
        <span class="section-kicker">${t("Newsletter")}</span>
        <h2>${t("Receba novidades dos seus artistas favoritos")}</h2>
        <p>${t("Inscreva-se para receber notícias, lançamentos e atualizações da FILTR.")}</p>
      </div>
      <form class="newsletter-form" novalidate>
        <label>
          <span class="sr-only">${t("Seu e-mail")}</span>
          <input type="email" name="email" placeholder="${t("Seu e-mail")}" autocomplete="email" />
        </label>
        <button class="button primary" type="submit">${t("Inscrever-se")}</button>
        <p class="newsletter-feedback" aria-live="polite"></p>
      </form>
    </section>
  `;
}

function editorialNewsSection() {
  return `
    <section class="split-section">
      <div>
        <div class="section-heading">
          <span class="section-kicker">${t("FILTR News")}</span>
          <h2>${t("Tudo sobre artistas, lançamentos e movimentos da música")}</h2>
        </div>
        <div class="stack-list">${data.news.slice(0, 2).map(newsCard).join("")}</div>
      </div>
      <aside class="panel-card">
        <span class="section-kicker">${t("Oportunidades")}</span>
        <h3>${t("Sua música pode encontrar novos públicos")}</h3>
        <ol class="demo-list">
          <li>${t("Organize perfil, músicas, vídeos e links.")}</li>
          <li>${t("Submeta lançamentos para curadoria.")}</li>
          <li>${t("Receba chamadas para playlists, entrevistas e palcos.")}</li>
          <li>${t("Acompanhe próximos passos pela área de entrada.")}</li>
        </ol>
        <a class="button primary full" href="#/studio/perfis">${t("Começar como artista")}</a>
      </aside>
    </section>
  `;
}

function newsCard(item) {
  return `
    <article class="news-card">
      <img src="${item.image}" alt="Arte editorial: ${item.kicker}" />
      <div class="news-card-body">
        <div class="eyebrow-row"><span>${t(item.kicker)}</span><small>${t(item.date)} · ${item.readTime}</small></div>
        <h3>${t(item.title)}</h3>
        <p>${t(item.excerpt)}</p>
        <a class="text-link" href="#/noticias/${item.slug}">${t("Ler matéria →")}</a>
      </div>
    </article>
  `;
}

function artistCard(artist) {
  return `
    <article class="artist-card">
      <img src="${artist.image}" alt="Avatar visual de ${artist.name}" />
      <div>
        <div class="artist-topline"><strong>${artist.name}</strong><span>${artist.score}</span></div>
        <small>${t(artist.genre)} · ${t(artist.city)}</small>
        <p>${t(artist.insight)}</p>
        <div class="tag-row"><span>${t(artist.stage)}</span><span>${artist.growth} ${t("crescimento")}</span></div>
      </div>
    </article>
  `;
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-icon">${product.icon}</div>
      <span class="pill">${t(product.tag)}</span>
      <h3>${t(product.name)}</h3>
      <p>${t(product.description)}</p>
      <small>Status: ${t(product.status)}</small>
    </article>
  `;
}

function renderHome() {
  return shell(`
    <main>
      <section class="hero-section">
        <div class="hero-copy">
          <h1>${t("Descubra artistas, sons e oportunidades.")}</h1>
          <p>${t("Notícias, clipes, playlists, entrevistas e experiências para potencializar talentos e conectar fãs à música.")}</p>
          <div class="hero-actions">
            <a class="button primary" href="#/lancamentos">${t("Explorar agora")}</a>
            <a class="button secondary" href="#/produtos">${t("Conhecer produtos")}</a>
          </div>
          <div class="hero-proof">${t("Notícias · Clipes · Playlists · Entrevistas · Palcos FILTR")}</div>
        </div>
        ${heroVisual()}
      </section>

      ${productsCarousel()}
      ${portalPulseCards()}
      ${interviewFeature()}
      ${editorialNewsSection()}

      <section class="section-block">
        <div class="section-heading inline">
          <div>
            <span class="section-kicker">${t("Artistas em ascensão")}</span>
            <h2>${t("Talentos que estão movimentando cenas, clipes e playlists")}</h2>
          </div>
          <a class="text-link" href="#/artistas">${t("Ver todos →")}</a>
        </div>
        <div class="artist-grid compact">${data.artists.slice(0, 3).map(artistCard).join("")}</div>
      </section>
      ${newsletterSignup()}
    </main>
  `);
}

function renderNews() {
  const path = routePath();
  const slug = path.split("/noticias/")[1];
  if (slug) return renderNewsDetail(slug);
  return shell(`
    <main class="page-wrap">
      <section class="page-hero small">
        <span class="section-kicker">${t("Portal editorial")}</span>
        <h1>${t("FILTR News")}</h1>
        <p>${t("Notícias, bastidores, lançamentos e movimentos que estão moldando a música no Brasil.")}</p>
      </section>
      <div class="news-grid">${data.news.map(newsCard).join("")}</div>
    </main>
  `);
}

function renderNewsDetail(slug) {
  const item = data.news.find(news => news.slug === slug) || data.news[0];
  return shell(`
    <main class="article-page">
      <a class="back-link" href="#/noticias">← ${t("Voltar para notícias")}</a>
      <article class="article-card">
        <img src="${item.image}" alt="Arte editorial: ${item.kicker}" />
        <div class="article-content">
          <span class="section-kicker">${t(item.kicker)} · ${t(item.date)}</span>
          <h1>${t(item.title)}</h1>
          <p class="lead">${t(item.excerpt)}</p>
          ${item.body.map(paragraph => `<p>${t(paragraph)}</p>`).join("")}
          <div class="article-actions">
            <a class="button primary" href="#/login">${t("Entrar")}</a>
            <a class="button secondary" href="#/produtos">${t("Conhecer produtos")}</a>
          </div>
        </div>
      </article>
    </main>
  `);
}

function pitchIndexFromRoute() {
  const raw = Number(routePath().split("/pitch/")[1] || 1);
  return Math.min(Math.max(raw || 1, 1), data.pitchSlides.length);
}

function pitchEnhancement(index) {
  const items = [
    {
      impact: {
        pt: "A FILTR organiza o caminho entre cultura, audiência, dados e oportunidade.",
        en: "FILTR organizes the path between culture, audience, data and opportunity."
      },
      chips: []
    },
    {
      impact: {
        pt: "Descobrir antes é a nova vantagem competitiva.",
        en: "Discovering earlier is the new competitive advantage."
      },
      chips: [
        { pt: "Território", en: "Territory" },
        { pt: "Comunidade", en: "Community" },
        { pt: "Conteúdo", en: "Content" },
        { pt: "Sinais antes do pico", en: "Signals before the peak" }
      ]
    },
    {
      impact: {
        pt: "O problema não é falta de música. É falta de método para transformar sinal em carreira.",
        en: "The problem is not lack of music. It is lack of method to turn signal into career."
      },
      chips: [
        { pt: "Sinais fragmentados", en: "Fragmented signals" },
        { pt: "A&R tarde demais", en: "Late A&R" },
        { pt: "Carreira sem trilha", en: "Career without a path" }
      ]
    },
    {
      impact: {
        pt: "Quem organiza as cenas, cria vantagem.",
        en: "Whoever organizes the scenes creates advantage."
      },
      chips: [
        { pt: "Hotspots regionais", en: "Regional hotspots" },
        { pt: "Capilaridade regional", en: "Regional capillarity" },
        { pt: "Leitura de cenas", en: "Scene intelligence" }
      ]
    },
    {
      impact: {
        pt: "A FILTR cria preferência antes da disputa pelo artista.",
        en: "FILTR creates preference before the race for the artist."
      },
      chips: [
        { pt: "Dados proprietários", en: "Proprietary data" },
        { pt: "Relacionamento antecipado", en: "Early relationship" },
        { pt: "Upstream natural", en: "Natural upstream" }
      ]
    },
    {
      impact: {
        pt: "Não é upload. É uma camada de desenvolvimento, conteúdo, dados e oportunidade.",
        en: "It is not upload. It is a layer for development, content, data and opportunity."
      },
      chips: [
        { pt: "Descoberta", en: "Discovery" },
        { pt: "Studio", en: "Studio" },
        { pt: "A&R", en: "A&R" }
      ]
    },
    {
      impact: {
        pt: "Quanto mais artistas entram, mais audiência própria entra na FILTR.",
        en: "The more artists join, the more owned audience enters FILTR."
      },
      chips: [
        { pt: "Notícias", en: "News" },
        { pt: "Clipes", en: "Videos" },
        { pt: "Oportunidades", en: "Opportunities" }
      ]
    },
    {
      impact: {
        pt: "Conteúdo gera audiência. Audiência gera dados. Dados geram oportunidade.",
        en: "Content generates audience. Audience generates data. Data generates opportunity."
      },
      chips: [
        { pt: "Canais próprios", en: "Owned channels" },
        { pt: "Curadoria", en: "Curation" },
        { pt: "Recorrência", en: "Recurrence" }
      ]
    },
    {
      impact: {
        pt: "Academy e lançamento vivem no Studio: o público descobre, o artista evolui.",
        en: "Academy and release tools live inside Studio: the public discovers, the artist evolves."
      },
      chips: [
        { pt: "Perfil", en: "Profile" },
        { pt: "Serviços", en: "Services" },
        { pt: "Relatórios", en: "Reports" }
      ]
    },
    {
      impact: {
        pt: "A FILTR cria método onde antes havia improviso.",
        en: "FILTR creates method where there used to be improvisation."
      },
      chips: [
        { pt: "Trilha de evolução", en: "Evolution path" },
        { pt: "Histórico de sinais", en: "Signal history" },
        { pt: "Prontidão", en: "Readiness" }
      ]
    },
    {
      impact: {
        pt: "Produtoras locais viram antenas regionais sem exigir presença física em todo território.",
        en: "Local producers become regional antennas without requiring physical presence in every territory."
      },
      chips: [
        { pt: "Selo local", en: "Local label" },
        { pt: "Estúdio", en: "Studio" },
        { pt: "Cena", en: "Scene" }
      ]
    },
    {
      impact: {
        pt: "O artista deixa de ser apenas um lançamento e passa a ser uma história em desenvolvimento.",
        en: "The artist stops being only a release and becomes a story in development."
      },
      chips: [
        { pt: "Entrevistas", en: "Interviews" },
        { pt: "Bastidores", en: "Backstage" },
        { pt: "Creator content", en: "Creator content" }
      ]
    },
    {
      impact: {
        pt: "Dados soltos viram inteligência de decisão para A&R, marketing, conteúdo, live e brands.",
        en: "Loose data becomes decision intelligence for A&R, marketing, content, live and brands."
      },
      chips: [
        { pt: "Mapa regional", en: "Regional map" },
        { pt: "Score", en: "Score" },
        { pt: "Alertas", en: "Alerts" }
      ]
    },
    {
      impact: {
        pt: "A plataforma não substitui o olhar humano; dá ao A&R uma visão privilegiada da trajetória.",
        en: "The platform does not replace human instinct; it gives A&R a privileged view of the trajectory."
      },
      chips: [
        { pt: "First look", en: "First look" },
        { pt: "Contexto real", en: "Real context" },
        { pt: "Preferência", en: "Preference" }
      ]
    },
    {
      impact: {
        pt: "Começar pequeno, medir rápido e escalar só depois de provar o fluxo.",
        en: "Start small, measure fast and scale only after proving the flow."
      },
      chips: [
        { pt: "Preparar", en: "Prepare" },
        { pt: "Ativar", en: "Activate" },
        { pt: "Medir", en: "Measure" },
        { pt: "Decidir", en: "Decide" }
      ]
    },
    {
      impact: {
        pt: "A FILTR pode ser a principal máquina de descoberta, desenvolvimento e inteligência de talentos emergentes do Brasil.",
        en: "FILTR can become Brazil's leading machine for emerging talent discovery, development and intelligence."
      },
      chips: [
        { pt: "Demo navegável", en: "Navigable demo" },
        { pt: "Studio", en: "Studio" },
        { pt: "Portal", en: "Portal" },
        { pt: "A&R Radar", en: "A&R Radar" }
      ]
    }
  ];
  return items[index - 1];
}

function pitchPhotoGrid(variant = "default") {
  const photoSets = {
    hero: [
      { image: "assets/pitch/regional-artist.png", label: { pt: "Origem", en: "Origin" }, title: { pt: "Cena regional", en: "Regional scene" }, note: { pt: "onde a carreira começa", en: "where the career starts" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Creator", en: "Creator" }, title: { pt: "Conteúdo curto", en: "Short content" }, note: { pt: "atenção antes da mídia", en: "attention before media" } },
      { image: "assets/pitch/ar-dashboard-room.png", label: { pt: "A&R", en: "A&R" }, title: { pt: "Sinais proprietários", en: "Owned signals" }, note: { pt: "dados antes do mercado", en: "data before the market" } },
      { image: "assets/pitch/billboard-gusttavo.jpeg", label: { pt: "Escala", en: "Scale" }, title: "Sony / Som Livre", note: { pt: "da cena ao nacional", en: "from scene to national" } }
    ],
    market: [
      { image: "assets/pitch/ar-dashboard-room.png", label: { pt: "Dados", en: "Data" }, title: { pt: "Mercado em tempo real", en: "Real-time market" }, note: { pt: "crescimento exige leitura", en: "growth requires reading" } },
      { image: "assets/pitch/festival-crowd.png", label: { pt: "Demanda", en: "Demand" }, title: { pt: "Público jovem", en: "Young audience" }, note: { pt: "streaming e vídeo social", en: "streaming and social video" } },
      { image: "assets/pitch/regional-artist.png", label: { pt: "Oferta", en: "Supply" }, title: { pt: "Artistas emergentes", en: "Emerging artists" }, note: { pt: "mais música, mais competição", en: "more music, more competition" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Conversão", en: "Conversion" }, title: { pt: "Creators", en: "Creators" }, note: { pt: "conteúdo vira tráfego", en: "content becomes traffic" } }
    ],
    "before-after": [
      { image: "assets/pitch/crowd-close.jpg", label: { pt: "Antes", en: "Before" }, title: { pt: "Palco e rádio", en: "Stage and radio" }, note: { pt: "curadoria humana local", en: "local human curation" } },
      { image: "assets/pitch/local-studio.png", label: { pt: "Formação", en: "Development" }, title: { pt: "Produtor local", en: "Local producer" }, note: { pt: "território como escola", en: "territory as school" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Hoje", en: "Today" }, title: { pt: "Vídeo vertical", en: "Vertical video" }, note: { pt: "algoritmo como vitrine", en: "algorithm as showcase" } },
      { image: "assets/pitch/ar-dashboard-room.png", label: { pt: "Amanhã", en: "Tomorrow" }, title: { pt: "A&R orientado por dados", en: "Data-led A&R" }, note: { pt: "sinal qualificado", en: "qualified signal" } }
    ],
    regional: [
      { image: "assets/pitch/regional-artist.png", label: { pt: "Nordeste", en: "Northeast" }, title: { pt: "Forró / Piseiro", en: "Forró / Piseiro" }, note: { pt: "crescimento de comunidade", en: "community growth" } },
      { image: "assets/pitch/festival-crowd.png", label: { pt: "Ao vivo", en: "Live" }, title: { pt: "Palco regional", en: "Regional stage" }, note: { pt: "prova de público", en: "audience proof" } },
      { image: "assets/pitch/local-studio.png", label: { pt: "Selo local", en: "Local label" }, title: { pt: "Recife Beats", en: "Recife Beats" }, note: { pt: "antena territorial", en: "territorial antenna" } },
      { image: "assets/pitch/crowd-green.png", label: { pt: "Comunidade", en: "Community" }, title: { pt: "Fãs e cena", en: "Fans and scene" }, note: { pt: "sinais antes do hype", en: "signals before hype" } }
    ],
    modules: [
      { image: "assets/pitch/local-studio.png", label: { pt: "Launch Hub", en: "Launch Hub" }, title: { pt: "Produto pronto", en: "Release ready" }, note: { pt: "metadados e assets", en: "metadata and assets" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Media Network", en: "Media Network" }, title: { pt: "Creators", en: "Creators" }, note: { pt: "mídia mais acessível", en: "more accessible media" } },
      { image: "assets/pitch/filtr-stage.png", label: { pt: "Palco FILTR", en: "Palco FILTR" }, title: { pt: "Showcase", en: "Showcase" }, note: { pt: "experiência e comunidade", en: "experience and community" } },
      { image: "assets/pitch/ar-dashboard-room.png", label: { pt: "Intelligence", en: "Intelligence" }, title: { pt: "Decisão", en: "Decision" }, note: { pt: "score, mapa e radar", en: "score, map and radar" } }
    ],
    journey: [
      { image: "assets/pitch/regional-artist.png", label: { pt: "Artista", en: "Artist" }, title: { pt: "primeiro sinal", en: "first signal" }, note: { pt: "cadastro e diagnóstico", en: "onboarding and diagnosis" } },
      { image: "assets/pitch/local-studio.png", label: { pt: "Trabalho", en: "Work" }, title: { pt: "evolução", en: "progress" }, note: { pt: "conteúdo, produto e dados", en: "content, product and data" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Audiência", en: "Audience" }, title: { pt: "comunidade", en: "community" }, note: { pt: "criadores e mídia", en: "creators and media" } },
      { image: "assets/pitch/live-singer.png", label: { pt: "Palco", en: "Stage" }, title: { pt: "prova real", en: "real proof" }, note: { pt: "A&R observa trajetória", en: "A&R tracks trajectory" } }
    ],
    benefits: [
      { image: "assets/pitch/ar-dashboard-room.png", label: { pt: "Controle", en: "Control" }, title: { pt: "fluxo de artistas", en: "artist flow" }, note: { pt: "dados próprios e recorrentes", en: "owned recurring data" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Mídia", en: "Media" }, title: { pt: "creator economy", en: "creator economy" }, note: { pt: "conteúdo vira negócio", en: "content becomes business" } },
      { image: "assets/pitch/regional-artist.png", label: { pt: "Originação", en: "Origination" }, title: { pt: "talento cedo", en: "early talent" }, note: { pt: "preferência antes da disputa", en: "preference before the race" } },
      { image: "assets/pitch/festival-crowd.png", label: { pt: "Audiência", en: "Audience" }, title: { pt: "rede FILTR", en: "FILTR network" }, note: { pt: "quanto mais artista, mais tráfego", en: "more artists, more traffic" } }
    ],
    intelligence: [
      { image: "assets/pitch/ar-dashboard-room.png", label: { pt: "Mapa", en: "Map" }, title: { pt: "cidades fortes", en: "strong cities" }, note: { pt: "onde investir primeiro", en: "where to invest first" } },
      { image: "assets/pitch/regional-artist.png", label: { pt: "Artista", en: "Artist" }, title: { pt: "Maya Reis", en: "Maya Reis" }, note: { pt: "score e prontidão", en: "score and readiness" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Conteúdo", en: "Content" }, title: { pt: "assets sociais", en: "social assets" }, note: { pt: "conversão mensurável", en: "measurable conversion" } },
      { image: "assets/pitch/local-studio.png", label: { pt: "Operação", en: "Operation" }, title: { pt: "próximo passo", en: "next step" }, note: { pt: "recomendação acionável", en: "actionable recommendation" } }
    ],
    default: [
      { image: "assets/pitch/regional-artist.png", label: { pt: "Artista local", en: "Local artist" }, title: "Maya Reis", note: { pt: "Recife · Forró/Piseiro Pop", en: "Recife · Forró/Piseiro Pop" } },
      { image: "assets/pitch/local-studio.png", label: { pt: "Selo local", en: "Local label" }, title: { pt: "Produtora regional", en: "Regional producer" }, note: { pt: "território e formação", en: "territory and development" } },
      { image: "assets/pitch/creator-influencer.png", label: { pt: "Influência", en: "Influence" }, title: { pt: "Creators", en: "Creators" }, note: { pt: "conteúdo como alcance", en: "content as reach" } },
      { image: "assets/pitch/live-singer.png", label: { pt: "Ao vivo", en: "Live" }, title: "Casa / Palco FILTR", note: { pt: "da vitrine ao público", en: "from showcase to audience" } }
    ]
  };
  const cards = photoSets[variant] || photoSets.default;
  return `
    <div class="pitch-photo-grid ${variant}">
      ${cards.map(card => `
        <figure>
          <img src="${card.image}" alt="" />
          <figcaption>
            <span>${copy(card.label)}</span>
            <strong>${copy(card.title)}</strong>
            <small>${copy(card.note)}</small>
          </figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function moduleDescription(module) {
  return data.pitchVisuals.moduleDescriptions[module] || {
    pt: "parte da jornada FILTR para transformar sinal artístico em oportunidade.",
    en: "part of the FILTR journey to turn artist signal into opportunity."
  };
}

function renderBeforeAfterVisual(slide) {
  const [before, today] = slide.columns;
  return `
    <div class="before-after-visual">
      <article class="era-card old">
        <img src="assets/pitch/crowd-close.jpg" alt="" />
        <div>
          <strong>${copy(before.title)}</strong>
          <ul>${before.items.map(item => `<li>${copy(item)}</li>`).join("")}</ul>
        </div>
      </article>
      <div class="shift-bridge">
        <span>${state.lang === "en" ? "Discovery used to be local and slower" : "A descoberta era local e mais lenta"}</span>
        <strong>${state.lang === "en" ? "Now attention fragments before A&R can see it" : "Hoje a atenção fragmenta antes do A&R enxergar"}</strong>
      </div>
      <article class="era-card now">
        <img src="assets/pitch/creator-influencer.png" alt="" />
        <div>
          <strong>${copy(today.title)}</strong>
          <ul>${today.items.map(item => `<li>${copy(item)}</li>`).join("")}</ul>
        </div>
      </article>
      <div class="discovery-shift-chart" aria-label="Comparativo visual antes e hoje">
        <div><span style="height:38%"></span><small>${state.lang === "en" ? "Local radio" : "Rádio local"}</small></div>
        <div><span style="height:52%"></span><small>${state.lang === "en" ? "Venues" : "Palcos"}</small></div>
        <div><span style="height:76%"></span><small>${state.lang === "en" ? "Short video" : "Vídeo curto"}</small></div>
        <div><span style="height:92%"></span><small>${state.lang === "en" ? "Data signals" : "Sinais de dados"}</small></div>
      </div>
      ${pitchPhotoGrid("before-after")}
    </div>
  `;
}

function renderRegionalGrowthVisual(slide) {
  const signals = data.pitchVisuals.regionalSignals;
  const bubbleClasses = ["northeast", "north", "center", "southeast", "gospel"];
  return `
    <div class="regional-growth-visual">
      <div class="region-map-graphic">
        <img src="assets/pitch/ar-dashboard-room.png" alt="" />
        <div class="map-title">
          <strong>${state.lang === "en" ? "Regional opportunity map" : "Mapa de oportunidade regional"}</strong>
          <span>${state.lang === "en" ? "Mock opportunity index" : "Índice de oportunidade mockado"}</span>
        </div>
        ${signals.map((region, index) => `
          <div class="region-bubble ${bubbleClasses[index]}" style="--size:${Math.max(region.value * 2.45, 40)}px">
            <strong>+${region.value}%</strong>
            <span>${region.area}</span>
          </div>
        `).join("")}
      </div>
      <div class="growth-bars">
        ${signals.map(region => `
          <article>
            <div>
              <strong>${region.area}</strong>
              <span>${copy(region.note)}</span>
            </div>
            <b>+${region.value}%</b>
            <i style="width:${region.value * 2.45}%"></i>
            <small>${copy(region.driver)}</small>
          </article>
        `).join("")}
      </div>
      <div class="region-detail-list">
        ${slide.regions.map(region => `<span><strong>${region.area}</strong>${region.genres}</span>`).join("")}
      </div>
      ${pitchPhotoGrid("regional")}
    </div>
  `;
}

function renderModuleVisual(slide) {
  return `
    <div class="module-visual">
      <div class="module-card-grid">${slide.modules.map((module, index) => `
        <article class="module-card">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${module}</strong>
          <small>${copy(moduleDescription(module))}</small>
        </article>
      `).join("")}</div>
      <div class="module-flow-note">
        <strong>${state.lang === "en" ? "One journey, many business surfaces" : "Uma jornada, várias superfícies de negócio"}</strong>
        <span>${state.lang === "en" ? "The same artist flow feeds content, media, live opportunities, intelligence and A&R." : "O mesmo fluxo de artista alimenta conteúdo, mídia, palco, inteligência e A&R."}</span>
      </div>
      ${pitchPhotoGrid("modules")}
    </div>
  `;
}

function renderJourneyVisual(slide) {
  const economics = data.pitchVisuals.journeyEconomics;
  return `
    <div class="journey-visual enhanced">
      <div class="journey-chain">${slide.journey.map((item, index) => `
        <div><span>${String(index + 1).padStart(2, "0")}</span><strong>${copy(item)}</strong></div>
      `).join("")}</div>
      <div class="journey-economics">
        ${economics.map((item, index) => `
          <article>
            <span>${copy(item.label)}</span>
            <strong>${item.value}</strong>
            <small>${copy(item.note)}</small>
            <i style="height:${92 - index * 17}%"></i>
          </article>
        `).join("")}
      </div>
      <div class="trajectory-card">
        <strong>${state.lang === "en" ? "Trajectory becomes business intelligence" : "Trajetória vira inteligência de negócio"}</strong>
        <span>${state.lang === "en" ? "Every action leaves a signal: content, data, audience, discipline and readiness. The value is the history, not only the release." : "Cada ação deixa um sinal: conteúdo, dado, audiência, disciplina e prontidão. O valor está no histórico, não só no lançamento."}</span>
      </div>
      ${pitchPhotoGrid("journey")}
    </div>
  `;
}

function renderBusinessCaseVisual() {
  return `
    <div class="business-case-visual">
      <div class="economic-signal-row">
        ${data.pitchVisuals.economicSignals.map(item => `
          <article>
            <strong>${item.value}</strong>
            <span>${copy(item.label)}</span>
          </article>
        `).join("")}
      </div>
      <div class="business-flywheel">
        <div class="flywheel-center">
          <strong>FILTR Experience</strong>
          <span>${state.lang === "en" ? "artist flow control" : "controle do fluxo de artistas"}</span>
        </div>
        ${data.pitchVisuals.businessFlywheel.map((item, index) => `
          <article class="flywheel-node node-${index + 1}">
            <strong>${copy(item.label)}</strong>
            <span>${copy(item.detail)}</span>
          </article>
        `).join("")}
      </div>
      ${pitchPhotoGrid("benefits")}
    </div>
  `;
}

function renderArBridgeVisual(slide) {
  return `
    <div class="ar-bridge-visual">
      <figure>
        <img src="assets/pitch/ar-dashboard-room.png" alt="" />
        <figcaption>
          <strong>${state.lang === "en" ? "Qualified radar, not automatic signing" : "Radar qualificado, não contratação automática"}</strong>
          <span>${copy(slide.body)}</span>
        </figcaption>
      </figure>
      <div class="ar-funnel">
        <div><strong>1.000</strong><span>${state.lang === "en" ? "artists in flow" : "artistas no fluxo"}</span></div>
        <div><strong>240</strong><span>${state.lang === "en" ? "consistent signals" : "sinais consistentes"}</span></div>
        <div><strong>18</strong><span>${state.lang === "en" ? "A&R watchlist" : "watchlist A&R"}</span></div>
      </div>
    </div>
  `;
}

function renderCoverVisual(slide) {
  return `
    <section class="pitch-opening-hero" aria-label="${copy(slide.kicker)}">
      <img class="pitch-opening-photo" src="assets/pitch/filtr-stage.png" alt="" />
      <div class="pitch-opening-shade" aria-hidden="true"></div>
      <div class="pitch-opening-content">
        <span class="section-kicker">${copy(slide.kicker)} · 1/${data.pitchSlides.length}</span>
        <strong class="pitch-opening-label">${copy(slide.subtitle)}</strong>
        <h1>${copy(slide.title)}</h1>
        <p>${copy(slide.body)}</p>
        <blockquote>${copy(slide.quote)}</blockquote>
      </div>
      <div class="pitch-opening-partners" aria-label="Parceiros estratégicos">
        <img src="assets/pitch/sony-music-logo.png" alt="Sony Music" />
        <img src="assets/pitch/som-livre-logo.png" alt="Som Livre" />
      </div>
    </section>
  `;
}

function renderThesisVisual() {
  return `
    <div class="thesis-visual">
      <section class="northeast-stage-visual">
        <img class="northeast-stage-photo" src="assets/pitch/regional-artist.png" alt="" />
        <div class="northeast-stage-copy">
          <strong>${state.lang === "en" ? "Talent starts on the territory" : "O talento começa no território"}</strong>
          <span>${state.lang === "en" ? "Forró, piseiro, arrocha and local stages generate signals before the national market reacts." : "Forró, piseiro, arrocha e palcos locais geram sinais antes do mercado nacional reagir."}</span>
        </div>
        <div class="northeast-map-card">
          <div>
            <small>${state.lang === "en" ? "Mock FILTR opportunity index" : "Índice FILTR de oportunidade mockado"}</small>
            <strong>Nordeste +31%</strong>
          </div>
          <svg class="northeast-map" viewBox="0 0 260 190" role="img" aria-label="${state.lang === "en" ? "Northeast Brazil opportunity map" : "Mapa de oportunidade do Nordeste"}">
            <path d="M47 82 69 54l34 2 21-20 33 18 28-8 28 25-7 35 25 24-17 26-46-6-26 22-39-10-22 13-30-20 7-33-21-15Z" />
            <circle class="map-pulse pulse-ce" cx="157" cy="64" r="6" />
            <circle class="map-pulse pulse-pe" cx="181" cy="108" r="6" />
            <circle class="map-pulse pulse-ba" cx="137" cy="149" r="6" />
            <text x="145" y="52">CE</text>
            <text x="189" y="105">PE</text>
            <text x="121" y="154">BA</text>
            <text class="map-label" x="50" y="35">Nordeste</text>
          </svg>
        </div>
      </section>
      <div class="territory-signal-flow" aria-label="${state.lang === "en" ? "Artist signal journey" : "Jornada de sinal do artista"}">
        <article>
          <b>01</b>
          <strong>${state.lang === "en" ? "Territory" : "Território"}</strong>
          <span>${state.lang === "en" ? "scene code" : "código de cena"}</span>
        </article>
        <i></i>
        <article>
          <b>02</b>
          <strong>${state.lang === "en" ? "Stage" : "Palco"}</strong>
          <span>${state.lang === "en" ? "audience proof" : "prova de público"}</span>
        </article>
        <i></i>
        <article>
          <b>03</b>
          <strong>${state.lang === "en" ? "Content" : "Conteúdo"}</strong>
          <span>${state.lang === "en" ? "clips and creators" : "clipes e creators"}</span>
        </article>
        <i></i>
        <article>
          <b>04</b>
          <strong>${state.lang === "en" ? "Data" : "Dados"}</strong>
          <span>${state.lang === "en" ? "qualified signal" : "sinal qualificado"}</span>
        </article>
        <i></i>
        <article>
          <b>05</b>
          <strong>A&R</strong>
          <span>${state.lang === "en" ? "earlier reading" : "leitura antecipada"}</span>
        </article>
      </div>
    </div>
  `;
}

function platformMark(id) {
  const marks = {
    youtube: `
      <svg viewBox="0 0 42 30" aria-hidden="true">
        <rect x="1" y="3" width="40" height="24" rx="7" fill="#ff0033" />
        <path d="M18 10.2 28 15 18 19.8Z" fill="#fff" />
      </svg>
    `,
    tiktok: `
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <path d="M19.5 5.5c1.2 4 3.7 6.3 7.6 6.7v5.1a13.2 13.2 0 0 1-7.4-2.3v8.1c0 5.2-3.7 8.2-8 8.2-4.4 0-7.5-3-7.5-7.1 0-4.4 3.5-7.3 8.2-7.3.6 0 1.2.1 1.7.2v5.1a5.7 5.7 0 0 0-1.7-.3c-1.7 0-2.9.9-2.9 2.3 0 1.3 1.1 2.2 2.5 2.2 1.6 0 2.8-1 2.8-3.1V5.5Z" fill="#f7f7f2" />
        <path d="M18 5.5c1.1 4 3.5 6.5 7.3 7" fill="none" stroke="#00f2ea" stroke-width="2.5" />
        <path d="M13.7 22.8c-1.9-.8-4 .1-4 1.8" fill="none" stroke="#ff0050" stroke-width="2.5" />
      </svg>
    `,
    instagram: `
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <defs>
          <linearGradient id="igGradient" x1="3" x2="31" y1="31" y2="3">
            <stop stop-color="#ffcc33" />
            <stop offset=".45" stop-color="#ff3158" />
            <stop offset="1" stop-color="#7a5cff" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="26" height="26" rx="8" fill="url(#igGradient)" />
        <circle cx="17" cy="17" r="6" fill="none" stroke="#fff" stroke-width="2.4" />
        <circle cx="24" cy="10.5" r="1.7" fill="#fff" />
      </svg>
    `,
    spotify: `
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="17" r="14" fill="#1ed760" />
        <path d="M9.8 13.3c5-1.2 10.2-.9 14.7 1.7M10.7 17.2c4-1 8-.7 11.7 1.2M11.8 20.8c3-.6 5.7-.4 8.3.8" fill="none" stroke="#06110b" stroke-linecap="round" stroke-width="2.2" />
      </svg>
    `,
    playlists: `
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <rect x="5" y="7" width="24" height="20" rx="5" fill="#0a97ff" />
        <path d="M11 13h9M11 17h12M11 21h7" stroke="#fff" stroke-linecap="round" stroke-width="2.2" />
        <circle cx="24" cy="22" r="3" fill="#fff" />
      </svg>
    `,
    creators: `
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <circle cx="17" cy="12" r="6" fill="#f7f7f2" />
        <path d="M7 29c1.5-6 5.2-9 10-9s8.5 3 10 9" fill="#f7f7f2" opacity=".82" />
      </svg>
    `,
    press: `
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <rect x="7" y="6" width="20" height="23" rx="3" fill="#f7f7f2" />
        <path d="M12 13h10M12 17h10M12 21h6" stroke="#111820" stroke-linecap="round" stroke-width="2" />
      </svg>
    `,
    live: `
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <rect x="8" y="10" width="18" height="16" rx="4" fill="#f0142f" />
        <path d="M12 15h10M12 20h7" stroke="#fff" stroke-linecap="round" stroke-width="2.2" />
        <path d="M13 6v5M21 6v5" stroke="#f7f7f2" stroke-linecap="round" stroke-width="2.2" />
      </svg>
    `,
    ar: `
      <span class="platform-logo-pair" aria-hidden="true">
        <img src="assets/pitch/sony-music-logo.png" alt="" />
        <img src="assets/pitch/som-livre-logo.png" alt="" />
      </span>
    `
  };
  return marks[id] || "";
}

function renderFragmentedVisual(slide) {
  const platforms = [
    { id: "youtube", name: "YouTube", detail: { pt: "clipes, shorts e retenção", en: "videos, shorts and retention" }, x: 18, y: 23 },
    { id: "tiktok", name: "TikTok", detail: { pt: "viralização e creators", en: "virality and creators" }, x: 80, y: 21 },
    { id: "instagram", name: "Instagram", detail: { pt: "comunidade e bastidores", en: "community and backstage" }, x: 18, y: 58 },
    { id: "spotify", name: "DSPs", detail: { pt: "streaming e recorrência", en: "streaming and recurrence" }, x: 84, y: 56 },
    { id: "playlists", name: "Playlists", detail: { pt: "curadoria e descoberta", en: "curation and discovery" }, x: 50, y: 18 },
    { id: "creators", name: "Creators", detail: { pt: "cortes e influência", en: "clips and influence" }, x: 29, y: 83 },
    { id: "press", name: state.lang === "en" ? "Press" : "Imprensa", detail: { pt: "narrativa pública", en: "public narrative" }, x: 58, y: 84 },
    { id: "live", name: state.lang === "en" ? "Live" : "Eventos", detail: { pt: "palco e prova real", en: "stage and real proof" }, x: 84, y: 82 }
  ];
  const flow = [
    { title: "DSPs", text: { pt: "consumo", en: "consumption" } },
    { title: "Creators", text: { pt: "atenção", en: "attention" } },
    { title: state.lang === "en" ? "Stage" : "Palco", text: { pt: "prova real", en: "real proof" } },
    { title: state.lang === "en" ? "Press" : "Imprensa", text: { pt: "narrativa", en: "narrative" } },
    { title: "A&R", text: { pt: "decisão", en: "decision" } }
  ];
  return `
    <div class="fragmented-visual">
      <div class="fragment-map">
        <img class="fragment-stage-bg" src="assets/pitch/creator-influencer.png" alt="" />
        <i class="fragment-glow glow-1"></i>
        <i class="fragment-glow glow-2"></i>
        <div class="platform-constellation">
          ${platforms.map(platform => `
            <article class="platform-signal ${platform.id}" style="--x:${platform.x}%; --y:${platform.y}%">
              ${platformMark(platform.id)}
              <div>
                <strong>${platform.name}</strong>
                <span>${copy(platform.detail)}</span>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="fragment-center">
          <strong>${state.lang === "en" ? "Scattered signals" : "Sinais espalhados"}</strong>
          <small>${state.lang === "en" ? "Audience, content and market data are already moving" : "Audiência, conteúdo e mercado já estão em movimento"}</small>
        </div>
      </div>
      <div class="fragment-flow">
        ${flow.map((item, index) => `
          <article>
            <strong>${item.title}</strong>
            <span>${copy(item.text)}</span>
          </article>
          ${index < flow.length - 1 ? "<i></i>" : ""}
        `).join("")}
      </div>
      <div class="fragment-insight">
        <strong>${state.lang === "en" ? "The issue is not distribution. It is connection." : "O problema não é distribuição. É conexão."}</strong>
        <span>${state.lang === "en" ? "FILTR links scattered signals into one development path for artists and A&R." : "A FILTR conecta sinais espalhados em uma trilha de desenvolvimento para artistas e A&R."}</span>
      </div>
    </div>
  `;
}

function renderStrategicFunnelVisual(slide) {
  const artists = [
    { image: "assets/pitch/regional-artist.png", name: "Maya Reis", signal: { pt: "Nordeste +31%", en: "Northeast +31%" } },
    { image: "assets/pitch/artist-pop.png", name: "Maya Luz", signal: { pt: "clipe em alta", en: "video rising" } },
    { image: "assets/pitch/live-singer.png", name: "Rafael Vento", signal: { pt: "palco forte", en: "strong live signal" } }
  ];
  const steps = [
    { title: "FILTR", text: { pt: "entrada, conteúdo e relacionamento", en: "entry, content and relationship" } },
    { title: state.lang === "en" ? "Development" : "Desenvolvimento", text: { pt: "palco, mídia, creators e Academy", en: "stage, media, creators and Academy" } },
    { title: state.lang === "en" ? "Data Layer" : "Camada de dados", text: { pt: "sinais proprietários antes do hype", en: "owned signals before hype" } },
    { title: "A&R", text: { pt: "leitura qualificada Sony/Som Livre", en: "qualified Sony/Som Livre reading" } }
  ];
  const advantages = [
    { value: "1.000", label: { pt: "artistas em movimento", en: "artists in motion" } },
    { value: "240", label: { pt: "sinais claros", en: "clear signals" } },
    { value: "72", label: { pt: "oportunidades prontas", en: "ready opportunities" } },
    { value: "18", label: { pt: "watchlist A&R", en: "A&R watchlist" } }
  ];
  return `
    <div class="strategic-funnel-visual enriched">
      <section class="strategic-partner-stage">
        <img class="strategic-stage-bg" src="assets/pitch/filtr-stage.png" alt="" />
        <div class="strategic-partner-logos">
          <img src="assets/pitch/sony-music-logo.png" alt="Sony Music" />
          <img src="assets/pitch/som-livre-logo.png" alt="Som Livre" />
        </div>
        <div class="strategic-stage-copy">
          <strong>${state.lang === "en" ? "Artists enter FILTR because the path is connected to the market." : "Os artistas entram na FILTR porque o caminho está conectado ao mercado."}</strong>
          <span>${state.lang === "en" ? "Sony Music and Som Livre participate as strategic lenses for development, content and qualified A&R observation." : "Sony Music e Som Livre aparecem como lentes estratégicas de desenvolvimento, conteúdo e observação qualificada de A&R."}</span>
        </div>
        <div class="strategic-artist-rail">
          ${artists.map(artist => `
            <article>
              <img src="${artist.image}" alt="" />
              <div>
                <strong>${artist.name}</strong>
                <span>${copy(artist.signal)}</span>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="strategic-data-bridge">
        ${steps.map((step, index) => `
          <article class="${index === 0 ? "core" : ""}">
            <b>${String(index + 1).padStart(2, "0")}</b>
            <strong>${step.title}</strong>
            <span>${copy(step.text)}</span>
          </article>
          ${index < steps.length - 1 ? "<i></i>" : ""}
        `).join("")}
      </section>
      <section class="strategic-advantage-panel">
        <div class="strategic-advantage-copy">
          <strong>${state.lang === "en" ? "Talent before the deal. Data before the race." : "Talento antes do contrato. Dados antes da concorrência."}</strong>
          <span>${state.lang === "en" ? "FILTR turns attention, content and local momentum into a qualified development pipeline." : "A FILTR transforma atenção, conteúdo e tração local em um pipeline qualificado de desenvolvimento."}</span>
        </div>
        <div class="strategic-metrics-row">
          ${advantages.map(item => `
            <div>
              <strong>${item.value}</strong>
              <span>${copy(item.label)}</span>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderSolutionOrbitVisual(slide) {
  return `
    <div class="solution-orbit-visual">
      <div class="solution-core">
        <img src="assets/pitch/filtr-logo.png" alt="" />
        <strong>Experience</strong>
      </div>
      <div class="solution-pillars">
        ${slide.modules.map((module, index) => `
          <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${module}</strong>
            <small>${copy(moduleDescription(module))}</small>
          </article>
        `).join("")}
      </div>
      ${pitchPhotoGrid("modules")}
    </div>
  `;
}

function renderPortalMockupVisual(slide) {
  const isEn = state.lang === "en";
  const artistTabs = isEn
    ? ["Releases", "Videos", "Interviews", "News", "Assets"]
    : ["Lançamentos", "Clipes", "Entrevistas", "Notícias", "Materiais"];
  return `
    <div class="portal-mockup-visual">
      <div class="portal-browser">
        <div class="browser-bar"><span></span><span></span><span></span><strong>filtr.com/experience</strong></div>
        <section class="portal-feature">
          <figure><img src="assets/pitch/artist-pop.png" alt="" /></figure>
          <div>
            <span>FILTR News</span>
            <strong>${isEn ? "Discover artists, sounds and opportunities" : "Descubra artistas, sons e oportunidades"}</strong>
            <small>${isEn ? "News · Videos · Playlists · Interviews · Stages" : "Notícias · Clipes · Playlists · Entrevistas · Palcos"}</small>
          </div>
        </section>
        <div class="portal-card-row">
          ${slide.bullets.map(item => `<article>${copy(item)}</article>`).join("")}
        </div>
        <div class="portal-artist-hub">
          <div class="portal-search-line">
            <span>⌕</span>
            <strong>${isEn ? "Search artist, label or city" : "Buscar artista, selo ou cidade"}</strong>
            <small>${isEn ? "Living profile fed by Studio" : "Perfil vivo alimentado pelo Studio"}</small>
          </div>
          <article class="portal-artist-profile">
            <img src="assets/pitch/regional-artist.png" alt="" />
            <div class="portal-profile-copy">
              <small>${isEn ? "Artist page" : "Página do artista"}</small>
              <strong>Maya Reis</strong>
              <span>Recife · Forró/Piseiro Pop</span>
              <div class="portal-profile-tabs">
                ${artistTabs.map(tab => `<b>${tab}</b>`).join("")}
              </div>
            </div>
            <div class="portal-profile-signal">
              <strong>+31%</strong>
              <span>${isEn ? "regional audience" : "audiência regional"}</span>
              <small>${isEn ? "Content ready for FILTR positioning" : "Conteúdo pronto para posicionamento FILTR"}</small>
            </div>
          </article>
          <div class="portal-amplify-flow">
            <article>
              <strong>${isEn ? "Artist updates" : "Artista atualiza"}</strong>
              <span>${isEn ? "release, video, news, agenda and assets" : "lançamento, clipe, notícia, agenda e materiais"}</span>
            </article>
            <i></i>
            <article>
              <strong>${isEn ? "FILTR positions" : "FILTR posiciona"}</strong>
              <span>${isEn ? "portal, playlists, interviews and stages" : "portal, playlists, entrevistas e palcos"}</span>
            </article>
            <i></i>
            <article>
              <strong>${isEn ? "Audience grows" : "Audiência cresce"}</strong>
              <span>${isEn ? "more artists attract more fans" : "mais artistas atraem mais fãs"}</span>
            </article>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProductCardsVisual(slide) {
  const images = ["creator-influencer.png", "filtr-stage.png", "crowd-green.png", "filtr-control-room.png", "festival-crowd.png", "local-studio.png"];
  return `
    <div class="product-cards-visual">
      ${slide.products.map((product, index) => `
        <article>
          <img src="assets/pitch/${images[index % images.length]}" alt="" />
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${product}</strong>
        </article>
      `).join("")}
    </div>
  `;
}

function renderStudioMockupVisual(slide) {
  const isEn = state.lang === "en";
  const navItems = isEn
    ? ["Dashboard", "Label profile", "Artist profile", "Releases", "Academy", "Opportunities", "Media Network"]
    : ["Dashboard", "Perfil do selo", "Perfil do artista", "Lançamentos", "Academy", "Oportunidades", "Media Network"];
  const actions = [
    {
      title: isEn ? "Academy" : "Academy",
      detail: isEn ? "career, image, rights and pitch tracks" : "trilhas de carreira, imagem, direitos e pitch",
      value: "3"
    },
    {
      title: isEn ? "Opportunities" : "Oportunidades",
      detail: isEn ? "playlists, interviews, stages and brands" : "playlists, entrevistas, palcos e marcas",
      value: "5"
    },
    {
      title: isEn ? "Media Network" : "Media Network",
      detail: isEn ? "podcasts, radio, TV, creators and campaign plan" : "podcasts, rádio, TV, creators e plano de mídia",
      value: "R$18K"
    },
    {
      title: isEn ? "Signals" : "Sinais",
      detail: isEn ? "city, audience, readiness and A&R watch" : "cidade, audiência, prontidão e radar A&R",
      value: "+31%"
    }
  ];
  return `
    <div class="studio-mockup-visual">
      <aside class="studio-side-panel">
        <img src="assets/pitch/filtr-logo.png" alt="" />
        <small>${isEn ? "FILTR Studio" : "Estúdio FILTR"}</small>
        ${navItems.map(item => `<span>${item}</span>`).join("")}
      </aside>
      <section class="studio-dashboard-main">
        <div class="studio-dashboard-head">
          <div>
            <span>${isEn ? "Operational dashboard" : "Dashboard operacional"}</span>
            <strong>${isEn ? "Recife Beats Label" : "Selo Recife Beats"}</strong>
            <small>${isEn ? "Label view · 7 artists · Recife/PE" : "Visão do selo · 7 artistas · Recife/PE"}</small>
          </div>
          <div class="studio-view-toggle" aria-label="${isEn ? "Dashboard view" : "Visão do dashboard"}">
            <b>${isEn ? "Label" : "Selo"}</b>
            <span>${isEn ? "Artist" : "Artista"}</span>
          </div>
        </div>
        <div class="studio-command-grid">
          <article class="studio-profile-panel label-profile">
            <img src="assets/pitch/local-studio.png" alt="" />
            <div>
              <span>${isEn ? "Label profile" : "Perfil do selo"}</span>
              <strong>Recife Beats</strong>
              <small>${isEn ? "roster, contacts, territory and editorial priorities" : "roster, contatos, território e prioridades editoriais"}</small>
            </div>
          </article>
          <article class="studio-profile-panel artist-profile">
            <img src="assets/pitch/regional-artist.png" alt="" />
            <div>
              <span>${isEn ? "Artist profile" : "Perfil do artista"}</span>
              <strong>Maya Reis</strong>
              <small>${isEn ? "bio, releases, videos, press assets and public page" : "bio, lançamentos, clipes, press kit e página pública"}</small>
            </div>
          </article>
        </div>
        <div class="studio-release-strip">
          <div>
            <span>${isEn ? "Product releases" : "Lançamentos de produto"}</span>
            <strong>${isEn ? "5 releases in preparation" : "5 produtos em preparação"}</strong>
            <small>${isEn ? "artwork, audio, metadata, rights and mocked review" : "capa, áudio, metadados, direitos e revisão mockada"}</small>
          </div>
          <div class="studio-release-bars">
            <p><span>${isEn ? "Single" : "Single"}</span><b style="width: 82%"></b><strong>82%</strong></p>
            <p><span>${isEn ? "Video" : "Clipe"}</span><b style="width: 68%"></b><strong>68%</strong></p>
            <p><span>${isEn ? "Live session" : "Sessão ao vivo"}</span><b style="width: 54%"></b><strong>54%</strong></p>
          </div>
        </div>
        <div class="studio-action-grid">
          ${actions.map(action => `
            <article>
              <span>${action.value}</span>
              <strong>${action.title}</strong>
              <small>${action.detail}</small>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderLocalNetworkVisual(slide) {
  const cards = [
    { image: "assets/pitch/local-studio.png", title: { pt: "Produtora regional", en: "Regional producer" } },
    { image: "assets/pitch/regional-artist.png", title: { pt: "Artista emergente", en: "Emerging artist" } },
    { image: "assets/pitch/filtr-stage.png", title: { pt: "Cena local", en: "Local scene" } },
    { image: "assets/pitch/ar-dashboard-room.png", title: { pt: "Radar nacional", en: "National radar" } }
  ];
  return `
    <div class="local-network-visual">
      ${cards.map(card => `
        <figure>
          <img src="${card.image}" alt="" />
          <figcaption><strong>${copy(card.title)}</strong></figcaption>
        </figure>
      `).join("")}
      <div class="local-value-list">
        ${slide.bullets.map(item => `<span>${copy(item)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderContentGridVisual(slide) {
  const isEn = state.lang === "en";
  const packages = [
    {
      image: "creator-influencer.png",
      title: isEn ? "Podcast / interview" : "Podcast / entrevista",
      detail: isEn ? "host + guest artist, recorded once" : "apresentador + artista convidado, gravado uma vez"
    },
    {
      image: "live-singer.png",
      title: isEn ? "Live studio show" : "Show de estúdio ao vivo",
      detail: isEn ? "audio feed ready for radio and streaming" : "áudio pronto para rádio e streaming"
    },
    {
      image: "filtr-control-room.png",
      title: isEn ? "Editorial package" : "Pacote editorial",
      detail: isEn ? "story, cuts, photos, press assets and agenda" : "matéria, cortes, fotos, press kit e agenda"
    }
  ];
  const outlets = [
    { label: isEn ? "Radio" : "Rádios", value: isEn ? "live audio" : "áudio ao vivo" },
    { label: "TV", value: isEn ? "video + story" : "vídeo + pauta" },
    { label: isEn ? "Portals" : "Portais", value: isEn ? "stories + embeds" : "matérias + embeds" },
    { label: isEn ? "Social" : "Social", value: isEn ? "clips + creators" : "cortes + creators" }
  ];
  return `
    <div class="content-syndication-visual">
      <figure class="content-studio-hero">
        <img src="assets/pitch/filtr-control-room.png" alt="" />
        <figcaption>
          <span>${isEn ? "Content command" : "Central de conteúdo"}</span>
          <strong>${isEn ? "FILTR packages artist stories for the media market." : "A FILTR empacota histórias de artistas para o mercado de mídia."}</strong>
        </figcaption>
      </figure>
      <div class="content-package-grid">
        ${packages.map(item => `
          <article>
            <img src="assets/pitch/${item.image}" alt="" />
            <div>
              <strong>${item.title}</strong>
              <small>${item.detail}</small>
            </div>
          </article>
        `).join("")}
      </div>
      <div class="content-distribution-panel">
        <div class="content-hub-card">
          <img src="assets/pitch/filtr-logo.png" alt="" />
          <span>${isEn ? "gestation + production + distribution" : "gestão + incubação + distribuição"}</span>
          <strong>${isEn ? "One artist moment becomes many media assets." : "Um momento do artista vira vários ativos de mídia."}</strong>
        </div>
        <div class="content-outlet-grid">
          ${outlets.map(outlet => `
            <article>
              <span>${outlet.label}</span>
              <strong>${outlet.value}</strong>
            </article>
          `).join("")}
        </div>
      </div>
      <div class="content-syndication-flow">
        <article>${isEn ? "Artist story" : "História do artista"}</article>
        <i></i>
        <article>${isEn ? "FILTR content package" : "Pacote de conteúdo FILTR"}</article>
        <i></i>
        <article>${isEn ? "Brazil-wide media echo" : "Eco em rádios, TVs e portais"}</article>
      </div>
    </div>
  `;
}

function renderPipelineVisual(slide) {
  const isEn = state.lang === "en";
  const details = [
    { pt: "portal, perfil público e sinais iniciais", en: "portal, public profile and first signals" },
    { pt: "conteúdo, comunidade e canais próprios", en: "content, community and owned channels" },
    { pt: "Academy, mídia, creators e palco", en: "Academy, media, creators and stage" },
    { pt: "score, cidade, retenção e prontidão", en: "score, city, retention and readiness" },
    { pt: "playlists, entrevistas, marcas e shows", en: "playlists, interviews, brands and shows" },
    { pt: "A&R qualificado para Sony/Som Livre", en: "qualified A&R for Sony/Som Livre" }
  ];
  return `
    <div class="pipeline-visual pipeline-art-visual">
      <figure class="pipeline-stage-art">
        <img src="assets/pitch/live-singer.png" alt="" />
        <figcaption>
          <span>${isEn ? "Owned talent pipeline" : "Pipeline proprietário de talentos"}</span>
          <strong>${isEn ? "The artist journey becomes a development system." : "A jornada do artista vira um sistema de desenvolvimento."}</strong>
        </figcaption>
      </figure>
      <div class="pipeline-track pipeline-card-track">
        ${slide.pipeline.map((item, index) => `
          <article class="${index === 0 || index === 2 ? "highlight" : ""}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${copy(item)}</strong>
            <small>${copy(details[index])}</small>
          </article>
        `).join("")}
      </div>
      <div class="pipeline-outcome pipeline-outcome-art">
        <div>
          <span>${isEn ? "FILTR advantage" : "Vantagem FILTR"}</span>
          <strong>${isEn ? "controls the artist flow before the market dispute" : "controla o fluxo do artista antes da disputa de mercado"}</strong>
        </div>
        <div>
          <span>Sony Music / Som Livre</span>
          <strong>${isEn ? "sees trajectory, context and readiness earlier" : "enxerga trajetória, contexto e prontidão mais cedo"}</strong>
        </div>
      </div>
    </div>
  `;
}

function renderRoadmapVisual(slide) {
  const isEn = state.lang === "en";
  const heatPoints = [
    { className: "ne", city: "Recife", signal: "+31%" },
    { className: "ce", city: "Fortaleza", signal: "+28%" },
    { className: "ba", city: "Salvador", signal: "+25%" },
    { className: "go", city: "Goiânia", signal: "+22%" },
    { className: "sp", city: "São Paulo", signal: "+18%" }
  ];
  return `
    <div class="roadmap-visual roadmap-territory-visual">
      <section class="roadmap-map-stage">
        <img src="assets/pitch/festival-crowd.png" alt="" />
        <div class="roadmap-map-copy">
          <span>${isEn ? "territory heat map" : "mapa de aquecimento"}</span>
          <strong>${isEn ? "The pilot starts where audience, scene and content are already moving." : "O piloto começa onde audiência, cena e conteúdo já estão em movimento."}</strong>
          <small>${isEn ? "Mock territorial reading for the first 90 days." : "Leitura territorial mockada para os primeiros 90 dias."}</small>
        </div>
        <div class="brazil-heat-map" aria-label="${isEn ? "Brazil heat map" : "Mapa de aquecimento do Brasil"}">
          <svg viewBox="0 0 260 300" role="img" aria-hidden="true">
            <path d="M155 18 185 35 203 64 229 75 237 108 220 133 229 162 207 187 201 221 178 233 165 263 137 251 112 274 87 258 59 260 47 234 23 217 34 188 24 160 43 139 41 107 63 86 76 54 110 48 129 25Z" />
          </svg>
          ${heatPoints.map(point => `
            <span class="heat-point ${point.className}">
              <b>${point.city}</b>
              <small>${point.signal}</small>
            </span>
          `).join("")}
        </div>
      </section>
      <div class="roadmap-track roadmap-plan-track">
        ${slide.roadmap.map((phase, index) => `
          <article>
            <span>${state.lang === "en" ? `Phase ${index + 1}` : `Fase ${index + 1}`}</span>
            <strong>${copy(phase.title)}</strong>
            <small>${copy(phase.detail)}</small>
          </article>
        `).join("")}
      </div>
      <div class="roadmap-metrics roadmap-territory-metrics">
        ${slide.metrics.map(metric => `<div><strong>${metric.value}</strong><span>${metric.label}</span></div>`).join("")}
      </div>
    </div>
  `;
}

function renderFinalCtaVisual(slide) {
  return `
    <div class="final-cta-visual">
      <figure>
        <img src="assets/pitch/ar-dashboard-room.png" alt="" />
      </figure>
      <div class="final-lockup">
        <img src="assets/pitch/filtr-logo.png" alt="" />
        <strong>FILTR Experience</strong>
        <span>Sony Music · Som Livre · A&R Radar</span>
      </div>
      <div class="final-actions">
        <a class="button primary full" href="#/">${copy(slide.cta)}</a>
        <a class="button secondary full" href="#/pitch/1">${copy(slide.secondaryCta)}</a>
      </div>
    </div>
  `;
}

function renderPitchVisual(slide) {
  if (slide.visual === "cover") return renderCoverVisual(slide);
  if (slide.visual === "thesis") return renderThesisVisual(slide);
  if (slide.visual === "fragmented") return renderFragmentedVisual(slide);
  if (slide.visual === "strategic-funnel") return renderStrategicFunnelVisual(slide);
  if (slide.visual === "solution-orbit") return renderSolutionOrbitVisual(slide);
  if (slide.visual === "portal-mockup") return renderPortalMockupVisual(slide);
  if (slide.visual === "product-cards") return renderProductCardsVisual(slide);
  if (slide.visual === "studio-mockup") return renderStudioMockupVisual(slide);
  if (slide.visual === "local-network") return renderLocalNetworkVisual(slide);
  if (slide.visual === "content-grid") return renderContentGridVisual(slide);
  if (slide.visual === "pipeline") return renderPipelineVisual(slide);
  if (slide.visual === "roadmap") return renderRoadmapVisual(slide);
  if (slide.visual === "final") return renderFinalCtaVisual(slide);
  if (slide.stats) {
    return `
      <div class="market-visual">
        <div class="pitch-stat-grid">${slide.stats.map(stat => `
          <div>
            <strong>${stat.value}</strong>
            <span>${copy(stat.label)}</span>
            ${stat.detail ? `<small>${copy(stat.detail)}</small>` : ""}
          </div>
        `).join("")}</div>
        <div class="market-volume-chart">
          <div class="chart-bars" aria-hidden="true">
            <span style="height:38%"></span>
            <span style="height:48%"></span>
            <span style="height:64%"></span>
            <span style="height:78%"></span>
            <span style="height:92%"></span>
          </div>
          <div>
            <strong>${state.lang === "en" ? "The bottleneck moved from access to attention" : "O gargalo saiu do acesso e foi para a atenção"}</strong>
            <p>${state.lang === "en" ? "High release volume makes proprietary audience, content and signal reading a strategic asset." : "Com alto volume de lançamentos, audiência proprietária, conteúdo e leitura de sinais viram ativo estratégico."}</p>
          </div>
        </div>
        <div class="market-context-grid">
          <div><strong>88,1%</strong><span>${state.lang === "en" ? "Latin America streaming share" : "share do streaming na América Latina"}</span></div>
          <div><strong>77%</strong><span>${state.lang === "en" ? "Brazilian artists in the Top 1000" : "artistas brasileiros no Top 1000"}</span></div>
          <div><strong>185M</strong><span>${state.lang === "en" ? "internet users in Brazil" : "usuários de internet no Brasil"}</span></div>
        </div>
        ${pitchPhotoGrid("market")}
      </div>
    `;
  }
  if (slide.columns) {
    return renderBeforeAfterVisual(slide);
  }
  if (slide.regions) {
    return renderRegionalGrowthVisual(slide);
  }
  if (slide.modules) {
    return renderModuleVisual(slide);
  }
  if (slide.journey) {
    return renderJourneyVisual(slide);
  }
  if (slide.metrics) {
    return `
      <div class="intelligence-demo">
        ${slide.metrics.map(metric => `<div><span>${metric.label}</span><strong>${metric.value}</strong></div>`).join("")}
        <p>${copy(slide.recommendation)}</p>
        ${pitchPhotoGrid("intelligence")}
      </div>
    `;
  }
  if (slide.visual === "benefits") {
    return renderBusinessCaseVisual();
  }
  if (slide.visual === "ar") {
    return renderArBridgeVisual(slide);
  }
  if (slide.bullets || slide.body) {
    return `
      <div class="pitch-story-visual">
        ${pitchPhotoGrid(slide.visual || "story")}
      </div>
    `;
  }
  return `
    <div class="ecosystem-visual">
      ${pitchPhotoGrid("hero")}
      <div class="ecosystem-core">FILTR Experience</div>
      <span>Launch</span>
      <span>Academy</span>
      <span>Media</span>
      <span>Data</span>
      <span>Opportunities</span>
      <span>A&R</span>
    </div>
  `;
}

function pitchBackgroundForSlide(index) {
  const images = [
    "filtr-stage.png",
    "regional-artist.png",
    "filtr-stage.png",
    "festival-crowd.png",
    "ar-dashboard-room.png",
    "local-studio.png",
    "artist-pop.png",
    "filtr-control-room.png",
    "local-studio.png",
    "regional-artist.png",
    "festival-crowd.png",
    "creator-influencer.png",
    "ar-dashboard-room.png",
    "live-singer.png",
    "filtr-stage.png",
    "crowd-green.png"
  ];
  return `assets/pitch/${images[index - 1] || "filtr-stage.png"}`;
}

function renderPitchDeck() {
  const index = pitchIndexFromRoute();
  const slide = data.pitchSlides[index - 1];
  const enhancement = pitchEnhancement(index);
  const visualHandlesBullets = ["fragmented", "strategic-funnel", "local-network", "pipeline"].includes(slide.visual);
  const prev = Math.max(index - 1, 1);
  const next = Math.min(index + 1, data.pitchSlides.length);
  const progress = Math.round((index / data.pitchSlides.length) * 100);
  const visualBackground = pitchBackgroundForSlide(index);
  if (slide.visual === "cover") {
    return shell(`
      <main class="pitch-deck pitch-deck-opening">
        ${renderCoverVisual(slide)}
        <div class="pitch-opening-controls">
          <a class="button primary" href="#/pitch/${next}">${state.lang === "en" ? "Next" : "Próximo"}</a>
        </div>
        <div class="pitch-progress" aria-label="Progresso da apresentação"><span style="width:${progress}%"></span></div>
        <nav class="pitch-dots" aria-label="Slides">
          ${data.pitchSlides.map((_, itemIndex) => `<a class="${itemIndex + 1 === index ? "active" : ""}" href="#/pitch/${itemIndex + 1}">${itemIndex + 1}</a>`).join("")}
        </nav>
      </main>
    `);
  }
  return shell(`
    <main class="pitch-deck">
      <section class="pitch-slide">
        <div class="pitch-copy">
          <span class="section-kicker">${copy(slide.kicker)} · ${index}/${data.pitchSlides.length}</span>
          <h1>${copy(slide.title)}</h1>
          ${slide.subtitle ? `<p class="pitch-subtitle">${copy(slide.subtitle)}</p>` : ""}
          ${slide.body ? `<p>${copy(slide.body)}</p>` : ""}
          ${slide.bullets && !visualHandlesBullets ? `<ul class="pitch-bullets">${slide.bullets.map(item => `<li>${copy(item)}</li>`).join("")}</ul>` : ""}
          ${slide.quote || enhancement ? `
            <blockquote class="pitch-impact">${slide.quote ? copy(slide.quote) : copy(enhancement.impact)}</blockquote>
          ` : ""}
          <div class="pitch-controls">
            <a class="button secondary ${index === 1 ? "disabled" : ""}" href="#/pitch/${prev}">${state.lang === "en" ? "Previous" : "Anterior"}</a>
            ${index === data.pitchSlides.length
              ? `
                <a class="button primary" href="#/">${copy(slide.cta)}</a>
                <a class="button secondary" href="#/pitch/1">${copy(slide.secondaryCta)}</a>
              `
              : `<a class="button primary" href="#/pitch/${next}">${state.lang === "en" ? "Next" : "Próximo"}</a>`}
          </div>
        </div>
        <div class="pitch-visual" style="--pitch-bg: url('${visualBackground}')">
          ${renderPitchVisual(slide)}
        </div>
      </section>
      <div class="pitch-progress" aria-label="Progresso da apresentação"><span style="width:${progress}%"></span></div>
      <nav class="pitch-dots" aria-label="Slides">
        ${data.pitchSlides.map((_, itemIndex) => `<a class="${itemIndex + 1 === index ? "active" : ""}" href="#/pitch/${itemIndex + 1}">${itemIndex + 1}</a>`).join("")}
      </nav>
    </main>
  `);
}

function techIndexFromRoute() {
  const raw = Number(routePath().split("/tech/")[1] || 1);
  return Math.min(Math.max(raw || 1, 1), data.techSlides.length);
}

function techIcon(name) {
  const paths = {
    cms: `<path d="M4 5h16v10H4z" /><path d="M9 19h6M12 15v4" />`,
    check: `<path d="M20 6 9 17l-5-5" />`,
    package: `<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.5 7.7 7.5 4.2 7.5-4.2M12 12v8.6" />`,
    globe: `<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.2 3.4 5.2 3.4 9s-1.2 6.8-3.4 9M12 3c-2.2 2.2-3.4 5.2-3.4 9s1.2 6.8 3.4 9" />`,
    chart: `<path d="M5 19V9M12 19V5M19 19v-7" /><path d="M4 19h16" />`,
    file: `<path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5M9.5 13h5M9.5 17h5" />`,
    shield: `<path d="M12 3 20 6v6c0 4.6-3.1 7.6-8 9-4.9-1.4-8-4.4-8-9V6l8-3Z" /><path d="M8.5 12.2 11 14.8l4.8-5.3" />`,
    link: `<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1" />`,
    money: `<path d="M4 7h16v10H4z" /><path d="M8 12h.01M16 12h.01" /><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />`,
    report: `<path d="M4 20V4h16v16H4Z" /><path d="M8 16V9M12 16V6M16 16v-4" />`,
    star: `<path d="m12 3 2.7 5.4 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6-4.3-4.2 6-.9L12 3Z" />`,
    x: `<path d="M6 6l12 12M18 6 6 18" />`,
    upload: `<path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M5 20h14" />`,
    download: `<path d="M12 4v12" /><path d="m7 11 5 5 5-5" /><path d="M5 20h14" />`,
    signal: `<path d="M5 17v-4M9.5 17V8M14.5 17V5M19 17v-7" />`
  };
  return `<svg class="tech-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.signal}</svg>`;
}

function techList(items, icon = "check") {
  return items.map(item => `
    <li>
      <span class="tech-list-icon">${techIcon(icon)}</span>
      <span>${copy(item)}</span>
    </li>
  `).join("");
}

function renderTechCover(slide) {
  return `
    <section class="tech-cover-hero" aria-label="${copy(slide.badge)}">
      <div class="tech-cover-badge">${techIcon("signal")}<span>${copy(slide.badge)}</span></div>
      <div class="tech-cover-content">
        <img class="tech-cover-logo" src="assets/pitch/filtr-logo.png" alt="FILTR" />
        <span class="tech-cover-rule" aria-hidden="true"></span>
        <h1>${copy(slide.title).replace("FILTR — ", "")}</h1>
        <p>${copy(slide.subtitle)}</p>
      </div>
      <div class="tech-cover-aside">
        <span>${state.lang === "en" ? "Operational model" : "Modelo operacional"}</span>
        <strong>${state.lang === "en" ? "Automated label inside Sony's structure" : "Selo automatizado dentro da estrutura Sony"}</strong>
        <div class="tech-cover-mini-flow" aria-label="${state.lang === "en" ? "Executive technical flow" : "Fluxo técnico executivo"}">
          <b>CMS FILTR</b>
          <i></i>
          <b>Sony</b>
          <i></i>
          <b>DSPs</b>
          <i class="return"></i>
          <b>${state.lang === "en" ? "Data return" : "Dados de volta"}</b>
        </div>
        <blockquote>${copy(slide.quote)}</blockquote>
      </div>
      <div class="tech-cover-grid" aria-label="${state.lang === "en" ? "Technical pillars" : "Pilares técnicos"}">
        ${slide.tags.map((tag, index) => `
          <article>
            <span>${techIcon(index === 0 ? "cms" : index === 1 ? "link" : "chart")}</span>
            <strong>${copy(tag)}</strong>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderTechModelVisual() {
  const costs = [
    { pt: "Novos contratos com DSPs", en: "New DSP contracts" },
    { pt: "Nova operação financeira", en: "New finance operation" },
    { pt: "Nova camada de compliance", en: "New compliance layer" },
    { pt: "Maior custo e maior prazo", en: "Higher cost and longer timeline" }
  ];
  const benefits = [
    { pt: "CMS próprio da FILTR", en: "FILTR-owned CMS" },
    { pt: "Integração com supply chain Sony", en: "Integration with Sony supply chain" },
    { pt: "Distribuição pela estrutura Sony", en: "Distribution through Sony's structure" },
    { pt: "Menor custo e menor complexidade", en: "Lower cost and lower complexity" }
  ];
  return `
    <div class="tech-model-visual">
      <div class="tech-model-grid">
        <article class="tech-model-card tech-model-muted">
          <span class="tech-model-label">${state.lang === "en" ? "Without Sony" : "Sem Sony"}</span>
          <h3>${state.lang === "en" ? "New distributor" : "Nova distribuidora"}</h3>
          <ul>${techList(costs, "x")}</ul>
        </article>
        <div class="tech-model-arrows" aria-hidden="true"><span></span><span></span><span></span></div>
        <article class="tech-model-card tech-model-accent">
          <span class="tech-model-label">${state.lang === "en" ? "With Sony" : "Com Sony"}</span>
          <h3>${state.lang === "en" ? "Automated Sony label" : "Selo automatizado Sony"}</h3>
          <ul>${techList(benefits, "check")}</ul>
        </article>
      </div>
      <div class="tech-executive-note">
        <strong>${state.lang === "en" ? "Executive reading" : "Leitura executiva"}</strong>
        <p>${state.lang === "en"
          ? "FILTR does not create a parallel distributor. It feeds Sony's existing supply chain with organized, validated assets and receives the information needed for commercial and financial management."
          : "A FILTR não cria uma distribuidora paralela. Ela alimenta a supply chain existente da Sony com dados e assets organizados, validados e prontos para ingestão, recebendo de volta as informações necessárias para gestão comercial e financeira."}</p>
      </div>
    </div>
  `;
}

function renderTechConnectionVisual() {
  const outbound = [
    { label: "CMS FILTR", icon: "cms" },
    { label: state.lang === "en" ? "Catalog validation" : "Validação de catálogo", icon: "check" },
    { label: state.lang === "en" ? "Delivery package" : "Pacote de entrega", icon: "package" },
    { label: "Supply Chain Sony", icon: "link" },
    { label: "DSPs", icon: "globe" }
  ];
  const inbound = [
    { label: state.lang === "en" ? "Delivery status" : "Status de entrega", icon: "check" },
    { label: state.lang === "en" ? "Sales and consumption" : "Vendas e consumo", icon: "chart" },
    { label: state.lang === "en" ? "Financial reports" : "Relatórios financeiros", icon: "money" },
    { label: "CSV / XLS / API", icon: "file" },
    { label: "Dashboards FILTR", icon: "report" }
  ];
  const sent = [
    { pt: "catálogo", en: "catalog" },
    { pt: "áudio", en: "audio" },
    { pt: "capa", en: "artwork" },
    { pt: "metadados", en: "metadata" },
    { pt: "datas", en: "dates" },
    { pt: "territórios", en: "territories" },
    { pt: "regras comerciais", en: "commercial rules" }
  ];
  const returned = [
    { pt: "status", en: "status" },
    { pt: "vendas", en: "sales" },
    { pt: "consumo", en: "consumption" },
    { pt: "financeiro", en: "finance" },
    { pt: "royalties", en: "royalties" },
    { pt: "CSV", en: "CSV" },
    { pt: "XLS", en: "XLS" },
    { pt: "API", en: "API" }
  ];
  return `
    <div class="tech-flow-visual">
      <div class="tech-chip-row">
        <span>${techIcon("upload")}${state.lang === "en" ? "FILTR sends" : "FILTR envia"}</span>
        ${sent.map(item => `<b>${copy(item)}</b>`).join("")}
      </div>
      <div class="tech-flow-row tech-flow-outbound">
        ${outbound.map((node, index) => `
          <article class="tech-node">
            ${techIcon(node.icon)}
            <strong>${node.label}</strong>
          </article>
          ${index < outbound.length - 1 ? `<span class="tech-arrow" aria-hidden="true"></span>` : ""}
        `).join("")}
      </div>
      <div class="tech-return-loop" aria-hidden="true"><span></span><b>↕</b><span></span></div>
      <div class="tech-flow-row tech-flow-inbound">
        ${inbound.map((node, index) => `
          <article class="tech-node">
            ${techIcon(node.icon)}
            <strong>${node.label}</strong>
          </article>
          ${index < inbound.length - 1 ? `<span class="tech-arrow reverse" aria-hidden="true"></span>` : ""}
        `).join("")}
      </div>
      <div class="tech-chip-row tech-chip-row-return">
        <span>${techIcon("download")}${state.lang === "en" ? "Sony returns" : "Sony retorna"}</span>
        ${returned.map(item => `<b>${copy(item)}</b>`).join("")}
      </div>
    </div>
  `;
}

function renderTechResponsibilitiesVisual() {
  const filtr = [
    { pt: "CMS próprio", en: "Own CMS" },
    { pt: "Cadastro de catálogo", en: "Catalog registration" },
    { pt: "Validação de metadados", en: "Metadata validation" },
    { pt: "Automação de entrega", en: "Delivery automation" },
    { pt: "Dashboard e inteligência", en: "Dashboard and intelligence" }
  ];
  const sony = [
    { pt: "Supply chain", en: "Supply chain" },
    { pt: "Contratos com DSPs", en: "DSP contracts" },
    { pt: "Distribuição", en: "Distribution" },
    { pt: "Governança e compliance", en: "Governance and compliance" },
    { pt: "Relatórios e financeiro", en: "Reports and finance" }
  ];
  return `
    <div class="tech-responsibility-visual">
      <div class="tech-responsibility-grid">
        <article class="tech-side-card">
          <h3>FILTR</h3>
          <ul>${techList(filtr, "check")}</ul>
        </article>
        <article class="tech-side-card">
          <h3>Sony</h3>
          <ul>${techList(sony, "shield")}</ul>
        </article>
      </div>
      <div class="tech-connector-bar">
        <span>${techIcon("link")}${state.lang === "en" ? "Technical connector" : "Conector técnico"}</span>
        <b>API</b>
        <b>DDEX / ERN 4.x</b>
        <b>SFTP</b>
        <b>FTP ${state.lang === "en" ? "secure" : "seguro"}</b>
      </div>
      <div class="tech-main-message">${state.lang === "en"
        ? "FILTR prepares, validates and automates. Sony distributes, governs and reports."
        : "A FILTR prepara, valida e automatiza. A Sony distribui, governa e reporta."}</div>
    </div>
  `;
}

function renderTechDependenciesVisual() {
  const catalog = [
    { pt: "Formato técnico: API, DDEX/ERN 4.x, SFTP, FTP seguro ou cloud storage", en: "Technical format: API, DDEX/ERN 4.x, SFTP, secure FTP or cloud storage" },
    { pt: "Campos obrigatórios e padrão de arquivos", en: "Required fields and file standards" },
    { pt: "Credenciais de sandbox e produção", en: "Sandbox and production credentials" },
    { pt: "Regras de validação, erro e rejeição", en: "Validation, error and rejection rules" },
    { pt: "Workflow de aprovação e status de entrega", en: "Approval workflow and delivery status" }
  ];
  const reports = [
    { pt: "Relatórios de vendas por artista, faixa, release, DSP, país e período", en: "Sales reports by artist, track, release, DSP, country and period" },
    { pt: "Relatórios financeiros, royalties, ajustes e descontos", en: "Financial reports, royalties, adjustments and deductions" },
    { pt: "Formato CSV, XLS, XLSX, API ou outro padrão disponível", en: "CSV, XLS, XLSX, API or another available format" },
    { pt: "Periodicidade: diária, semanal, mensal ou ciclo Sony", en: "Frequency: daily, weekly, monthly or Sony cycle" },
    { pt: "Identificadores: ISRC, UPC, artista, release ID e DSP ID", en: "Identifiers: ISRC, UPC, artist, release ID and DSP ID" }
  ];
  return `
    <div class="tech-dependencies-visual">
      <article class="tech-list-card">
        <div class="tech-card-title">${techIcon("upload")}<h3>${state.lang === "en" ? "1. Catalog delivery" : "1. Para envio do catálogo"}</h3></div>
        <ul>${techList(catalog, "file")}</ul>
      </article>
      <article class="tech-list-card">
        <div class="tech-card-title">${techIcon("download")}<h3>${state.lang === "en" ? "2. Data return" : "2. Para retorno de dados"}</h3></div>
        <ul>${techList(reports, "chart")}</ul>
      </article>
      <div class="tech-executive-note tech-full-note">
        <strong>${state.lang === "en" ? "Decision needed" : "Decisão necessária"}</strong>
        <p>${state.lang === "en"
          ? "Sony only needs to define the entry point, mandatory fields and return model. FILTR adapts the CMS package to the approved pattern."
          : "A Sony só precisa definir a porta de entrada, os campos obrigatórios e o modelo de retorno. A FILTR adapta o pacote do CMS ao padrão aprovado."}</p>
      </div>
    </div>
  `;
}

function renderTechReturnsVisual() {
  const cards = [
    { label: { pt: "Status de entrega", en: "Delivery status" }, text: { pt: "Aceito, rejeitado, erro, pendente e confirmação por plataforma.", en: "Accepted, rejected, error, pending and platform confirmation." }, icon: "check" },
    { label: { pt: "Vendas por DSP", en: "Sales by DSP" }, text: { pt: "Receita por plataforma, faixa, release, artista e período.", en: "Revenue by platform, track, release, artist and period." }, icon: "chart" },
    { label: { pt: "Consumo por território", en: "Consumption by territory" }, text: { pt: "Países e regiões com consumo para mapa de mercado.", en: "Countries and regions with consumption for market maps." }, icon: "globe" },
    { label: { pt: "Relatórios financeiros", en: "Financial reports" }, text: { pt: "Receita bruta, líquida, ajustes, descontos e royalties.", en: "Gross revenue, net revenue, adjustments, deductions and royalties." }, icon: "money" },
    { label: { pt: "Royalties e pagamentos", en: "Royalties and payments" }, text: { pt: "Status de repasse, histórico e valores a pagar.", en: "Payout status, history and payable values." }, icon: "shield" },
    { label: { pt: "CSV / XLS / API", en: "CSV / XLS / API" }, text: { pt: "Importação automática ou exportação para ERP e BI.", en: "Automatic import or export to ERP and BI." }, icon: "file" }
  ];
  return `
    <div class="tech-returns-visual">
      <div class="tech-return-headline">
        <div>
          <span>${state.lang === "en" ? "Sony return → FILTR CMS" : "Retorno Sony → CMS FILTR"}</span>
          <strong>${state.lang === "en" ? "The CMS becomes label management." : "O CMS vira gestão do selo."}</strong>
        </div>
        <div class="tech-return-format-row" aria-label="${state.lang === "en" ? "Return formats" : "Formatos de retorno"}">
          <b>CSV</b>
          <b>XLS</b>
          <b>API</b>
        </div>
      </div>
      <div class="tech-returns-layout">
        <div class="tech-return-cards">
          ${cards.map(card => `
            <article>
              ${techIcon(card.icon)}
              <div>
                <strong>${copy(card.label)}</strong>
                <span>${copy(card.text)}</span>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="tech-report-panel">
          <article class="tech-line-chart">
            <h3>${state.lang === "en" ? "Sales evolution" : "Evolução de vendas"}</h3>
            <svg viewBox="0 0 520 190" role="img" aria-label="${state.lang === "en" ? "Mock sales evolution chart" : "Gráfico mockado de evolução de vendas"}">
              <path class="grid" d="M32 40H496M32 86H496M32 132H496M32 178H496" />
              <path class="area" d="M32 154 86 132 140 98 194 126 248 82 302 92 356 46 410 104 464 70 496 96V178H32Z" />
              <path class="line" d="M32 154 86 132 140 98 194 126 248 82 302 92 356 46 410 104 464 70 496 96" />
              <g class="points"><circle cx="86" cy="132" r="5" /><circle cx="140" cy="98" r="5" /><circle cx="248" cy="82" r="5" /><circle cx="356" cy="46" r="5" /><circle cx="464" cy="70" r="5" /></g>
            </svg>
          </article>
          <div class="tech-report-bottom">
            <article class="tech-bar-chart">
              <h3>${state.lang === "en" ? "Sales by platform" : "Vendas por plataforma"}</h3>
              ${[
                ["Spotify", 42],
                ["Apple Music", 28],
                ["YouTube", 15],
                ["Amazon Music", 8],
                ["Deezer", 4]
              ].map(([label, value]) => `
                <div><span>${label}</span><b style="width:${value}%"></b><em>${value}%</em></div>
              `).join("")}
            </article>
            <article class="tech-donut-card">
              <h3>${state.lang === "en" ? "Consumption by territory" : "Consumo por território"}</h3>
              <div class="tech-donut" aria-hidden="true"></div>
              <ul>
                <li><span></span>Brasil 45%</li>
                <li><span></span>Estados Unidos 18%</li>
                <li><span></span>México 9%</li>
                <li><span></span>Outros 28%</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div class="tech-report-note">
        ${techIcon("report")}
        <span>${state.lang === "en"
          ? "Status, sales, consumption, royalties and finance return to the same operational environment."
          : "Status, vendas, consumo, royalties e financeiro voltam para o mesmo ambiente operacional."}</span>
      </div>
    </div>
  `;
}

function renderTechSummaryVisual() {
  const benefits = [
    { title: { pt: "Economia", en: "Efficiency" }, text: { pt: "Uma integração com a Sony substitui múltiplas conexões diretas com DSPs.", en: "One Sony integration replaces multiple direct DSP connections." }, icon: "money" },
    { title: { pt: "Governança", en: "Governance" }, text: { pt: "A operação permanece dentro da estrutura e do compliance Sony.", en: "The operation remains inside Sony's structure and compliance." }, icon: "shield" },
    { title: { pt: "Escala", en: "Scale" }, text: { pt: "O CMS automatiza catálogo, status, relatórios e dashboards sem criar nova distribuidora.", en: "The CMS automates catalog, status, reports and dashboards without creating a new distributor." }, icon: "chart" }
  ];
  return `
    <div class="tech-summary-visual">
      <div class="tech-benefit-grid">
        ${benefits.map((benefit, index) => `
          <article>
            <span>${techIcon(benefit.icon)}</span>
            <small>0${index + 1}</small>
            <h3>${copy(benefit.title)}</h3>
            <p>${copy(benefit.text)}</p>
          </article>
        `).join("")}
      </div>
      <div class="tech-summary-box">
        <strong>${state.lang === "en" ? "Proposal wording" : "Texto para proposta"}</strong>
        <p>${state.lang === "en"
          ? "FILTR operates as an automated label inside Sony's structure. It prepares structured catalog packages, connects to the technical format defined by Sony and receives status, sales, consumption, royalties and financial reports back into the FILTR CMS."
          : "A FILTR opera como um selo automatizado dentro da estrutura da Sony. Ela prepara pacotes de catálogo estruturado, conecta no formato técnico definido pela Sony e recebe de volta status, vendas, consumo, royalties e relatórios financeiros no CMS FILTR."}</p>
      </div>
      <div class="tech-next-step">
        ${techIcon("star")}
        <span><b>${state.lang === "en" ? "Next step:" : "Próximo passo:"}</b> ${state.lang === "en"
          ? "align with Sony the technical input format and the return model for reports."
          : "alinhar com a Sony o formato técnico de entrada e o modelo de retorno dos relatórios."}</span>
      </div>
    </div>
  `;
}

function renderTechVisual(slide) {
  if (slide.visual === "model") return renderTechModelVisual();
  if (slide.visual === "connection") return renderTechConnectionVisual();
  if (slide.visual === "responsibilities") return renderTechResponsibilitiesVisual();
  if (slide.visual === "dependencies") return renderTechDependenciesVisual();
  if (slide.visual === "returns") return renderTechReturnsVisual();
  if (slide.visual === "summary") return renderTechSummaryVisual();
  return renderTechCover(slide);
}

function renderTechDeck() {
  const index = techIndexFromRoute();
  const slide = data.techSlides[index - 1];
  const prev = Math.max(index - 1, 1);
  const next = Math.min(index + 1, data.techSlides.length);
  const progress = Math.round((index / data.techSlides.length) * 100);
  if (slide.visual === "cover") {
    return shell(`
      <main class="pitch-deck tech-deck tech-deck-opening">
        ${renderTechCover(slide)}
        <div class="pitch-opening-controls tech-opening-controls">
          <a class="button primary" href="#/tech/${next}">${state.lang === "en" ? "Next" : "Próximo"}</a>
        </div>
        <div class="pitch-progress tech-progress" aria-label="Progresso da apresentação"><span style="width:${progress}%"></span></div>
        <nav class="pitch-dots tech-dots" aria-label="Slides">
          ${data.techSlides.map((_, itemIndex) => `<a class="${itemIndex + 1 === index ? "active" : ""}" href="#/tech/${itemIndex + 1}">${itemIndex + 1}</a>`).join("")}
        </nav>
      </main>
    `);
  }
  return shell(`
    <main class="pitch-deck tech-deck">
      <section class="pitch-slide tech-slide">
        <div class="pitch-copy tech-copy">
          <span class="section-kicker">${copy(slide.badge)} · ${index}/${data.techSlides.length}</span>
          <h1>${copy(slide.title)}</h1>
          <p class="pitch-subtitle">${copy(slide.subtitle)}</p>
          <p>${copy(slide.body)}</p>
          <blockquote class="pitch-impact">${copy(slide.quote)}</blockquote>
          <div class="pitch-controls">
            <a class="button secondary ${index === 1 ? "disabled" : ""}" href="#/tech/${prev}">${state.lang === "en" ? "Previous" : "Anterior"}</a>
            ${index === data.techSlides.length
              ? `<a class="button primary" href="#/">${state.lang === "en" ? "Back to portal" : "Voltar ao portal"}</a>`
              : `<a class="button primary" href="#/tech/${next}">${state.lang === "en" ? "Next" : "Próximo"}</a>`}
          </div>
        </div>
        <div class="pitch-visual tech-visual tech-visual-${slide.visual}">
          ${renderTechVisual(slide)}
        </div>
      </section>
      <div class="pitch-progress tech-progress" aria-label="Progresso da apresentação"><span style="width:${progress}%"></span></div>
      <nav class="pitch-dots tech-dots" aria-label="Slides">
        ${data.techSlides.map((_, itemIndex) => `<a class="${itemIndex + 1 === index ? "active" : ""}" href="#/tech/${itemIndex + 1}">${itemIndex + 1}</a>`).join("")}
      </nav>
    </main>
  `);
}

function territoryIndexFromRoute() {
  const raw = Number(routePath().split("/territorio/")[1] || 1);
  return Math.min(Math.max(raw || 1, 1), data.territorySlides.length);
}

function terrIcon(name) {
  const paths = {
    radar: `<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" /><path d="M12 12 18 6" /><path d="M12 12h.01" /><path d="M12 8a4 4 0 0 1 4 4" />`,
    pin: `<path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" /><circle cx="12" cy="11" r="2.4" />`,
    partner: `<circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M3 19a5 5 0 0 1 10 0M11 19a5 5 0 0 1 10 0" />`,
    stage: `<path d="M4 20V9l8-5 8 5v11" /><path d="M4 20h16M9 20v-5h6v5" />`,
    scene: `<path d="M5 18V7M10 18V4M15 18v-8M20 18v-5" /><path d="M3 21h18" />`,
    scale: `<path d="M4 19h16M7 19v-6M12 19V8M17 19v-9" /><path d="m4 9 5-4 5 3 6-5" />`,
    filter: `<path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z" />`,
    data: `<ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />`,
    territory: `<path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" /><path d="M9 4v14M15 6v14" />`,
    spark: `<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />`,
    check: `<path d="M20 6 9 17l-5-5" />`,
    x: `<path d="M6 6l12 12M18 6 6 18" />`,
    brand: `<path d="M5 4h14v4l-5 4v8l-4-2v-6L5 8V4Z" />`
  };
  return `<svg class="terr-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.pin}</svg>`;
}

const terrCities = [
  { id: "fortaleza", name: "Fortaleza", uf: "CE", x: 318, y: 96, phase: 1 },
  { id: "natal", name: "Natal", uf: "RN", x: 506, y: 150, phase: 1 },
  { id: "joaopessoa", name: "João Pessoa", uf: "PB", x: 512, y: 206, phase: 2 },
  { id: "recife", name: "Recife", uf: "PE", x: 506, y: 250, phase: 1 },
  { id: "maceio", name: "Maceió", uf: "AL", x: 472, y: 304, phase: 2 },
  { id: "aracaju", name: "Aracaju", uf: "SE", x: 436, y: 352, phase: 1 },
  { id: "salvador", name: "Salvador", uf: "BA", x: 420, y: 430, phase: 1 },
  { id: "saoluis", name: "São Luís", uf: "MA", x: 150, y: 92, phase: 2 },
  { id: "teresina", name: "Teresina", uf: "PI", x: 224, y: 168, phase: 2 }
];

function renderTerritoryMap() {
  const phase1 = terrCities.filter(c => c.phase === 1);
  // connection lines between active phase-1 nodes (network feel)
  const order = ["fortaleza", "natal", "recife", "aracaju", "salvador"];
  const ordered = order.map(id => phase1.find(c => c.id === id)).filter(Boolean);
  const lines = ordered.slice(1).map((c, i) => {
    const a = ordered[i];
    return `<line x1="${a.x}" y1="${a.y}" x2="${c.x}" y2="${c.y}" />`;
  }).join("");
  const node = city => {
    const active = city.phase === 1;
    const label = active ? `Filtr ${city.name}` : `${city.name} / ${city.uf}`;
    return `
      <g class="terr-node ${active ? "is-active" : "is-expansion"}" transform="translate(${city.x} ${city.y})">
        ${active ? `<circle class="terr-node-pulse" r="22" />` : ""}
        <circle class="terr-node-dot" r="${active ? 9 : 7}" />
        <text class="terr-node-label" x="${city.x > 430 ? 16 : -16}" y="5" text-anchor="${city.x > 430 ? "start" : "end"}">${label}</text>
        ${active ? `<text class="terr-node-uf" x="${city.x > 430 ? 16 : -16}" y="22" text-anchor="${city.x > 430 ? "start" : "end"}">${city.uf} · Fase 1</text>` : ""}
      </g>
    `;
  };
  return `
    <div class="terr-map-wrap">
      <svg class="terr-map" viewBox="0 0 600 520" role="img" aria-label="${state.lang === "en" ? "Strategic map of FILTR presence in the Northeast" : "Mapa estratégico de presença FILTR no Nordeste"}">
        <defs>
          <radialGradient id="terrLand" cx="42%" cy="36%" r="78%">
            <stop offset="0%" stop-color="rgba(255,138,0,0.20)" />
            <stop offset="55%" stop-color="rgba(255,138,0,0.07)" />
            <stop offset="100%" stop-color="rgba(255,138,0,0.02)" />
          </radialGradient>
        </defs>
        <path class="terr-land" d="M120 70 L330 58 L420 70 L515 120 L528 175 L520 235 L488 300 L452 360 L432 430 L398 470 L350 452 L300 462 L250 440 L210 392 L176 330 L150 250 L132 180 L112 120 Z" fill="url(#terrLand)" />
        <g class="terr-lines">${lines}</g>
        <g class="terr-nodes">${terrCities.map(node).join("")}</g>
      </svg>
      <div class="terr-map-overlay">
        <span class="terr-map-phase">${terrIcon("territory")} ${state.lang === "en" ? "Phase 1: Northeast" : "Fase 1: Nordeste"}</span>
        <p>${state.lang === "en" ? "Territorial presence, local partners and scene curation." : "Presença territorial, parceiros locais e curadoria de cena."}</p>
        <div class="terr-map-legend">
          <span><i class="dot-full"></i> ${state.lang === "en" ? "Phase 1 presence" : "Presença fase 1"}</span>
          <span><i class="dot-open"></i> ${state.lang === "en" ? "Expansion / next hubs" : "Expansão / próximos hubs"}</span>
        </div>
      </div>
    </div>
  `;
}

function renderTerritoryVisual(slide) {
  switch (slide.visual) {
    case "thesis-map": {
      const items = [
        { area: "Nordeste", genres: "forró, piseiro, arrocha, brega funk, pagodão, axé" },
        { area: "Norte", genres: "tecnobrega, aparelhagem, pop amazônico" },
        { area: "Centro-Oeste", genres: "sertanejo, agro pop, gospel regional" },
        { area: "Sudeste", genres: "funk, trap, rap, pop, pagode" },
        { area: "Sul", genres: "pop regional, sertanejo, eletrônico, cenas indie" }
      ];
      return `
        <div class="terr-region-list">
          ${items.map((r, i) => `
            <article class="terr-region ${i === 0 ? "is-focus" : ""}">
              <header><span>${terrIcon("scene")}</span><strong>${r.area}</strong>${i === 0 ? `<em>${state.lang === "en" ? "Phase 1" : "Fase 1"}</em>` : ""}</header>
              <p>${r.genres}</p>
            </article>
          `).join("")}
          <p class="terr-region-note">${state.lang === "en" ? "Brazil is a market of regional scenes — not a single center." : "O Brasil é um mercado de cenas regionais — não um único centro."}</p>
        </div>
      `;
    }
    case "noise-signal":
      return `
        <div class="terr-noise">
          <div class="terr-noise-cloud" aria-hidden="true">
            ${Array.from({ length: 42 }).map((_, i) => `<span style="--i:${i}"></span>`).join("")}
          </div>
          <div class="terr-noise-arrow">${terrIcon("filter")}</div>
          <div class="terr-noise-out">
            <span class="terr-noise-badge">${state.lang === "en" ? "Qualified signal" : "Sinal qualificado"}</span>
            <strong>${state.lang === "en" ? "Curation > Access" : "Curadoria > Acesso"}</strong>
          </div>
          <p class="terr-noise-caption">${state.lang === "en" ? "Millions of uploads. The value is in reading what deserves development." : "Milhões de uploads. O valor está em ler o que merece desenvolvimento."}</p>
        </div>
      `;
    case "comparison": {
      const cols = [
        {
          name: "CD Baby / TuneCore", tone: "muted",
          tag: { pt: "Varejo digital", en: "Digital retail" },
          rows: [
            { pt: "Plataforma aberta / semiaberta", en: "Open / semi-open platform" },
            { pt: "Artista faz upload", en: "Artist self-uploads" },
            { pt: "Foco em distribuição digital", en: "Focus on digital distribution" },
            { pt: "Escala por volume", en: "Scale by volume" }
          ]
        },
        {
          name: "FUGA", tone: "muted",
          tag: { pt: "Infraestrutura B2B", en: "B2B infrastructure" },
          rows: [
            { pt: "Tecnologia e serviços para empresas", en: "Tech and services for companies" },
            { pt: "Distribuição e supply chain", en: "Distribution and supply chain" },
            { pt: "Menos presença cultural", en: "Less cultural presence" },
            { pt: "Foco operacional", en: "Operational focus" }
          ]
        },
        {
          name: "FILTR", tone: "accent",
          tag: { pt: "Presença territorial", en: "Territorial presence" },
          rows: [
            { pt: "Entrada por parceiros regionais", en: "Entry through regional partners" },
            { pt: "Curadoria local e inteligência de cena", en: "Local curation and scene intelligence" },
            { pt: "Desenvolvimento de carreira", en: "Career development" },
            { pt: "Oportunidades já filtradas", en: "Pre-filtered opportunities" }
          ]
        }
      ];
      return `
        <div class="terr-compare">
          ${cols.map(col => `
            <article class="terr-compare-col terr-compare-${col.tone}">
              <header>
                <strong>${col.name}</strong>
                <span>${copy(col.tag)}</span>
              </header>
              <ul>
                ${col.rows.map(r => `<li>${terrIcon(col.tone === "accent" ? "check" : "x")}<span>${copy(r)}</span></li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
      `;
    }
    case "value-flow": {
      const steps = [
        { pt: "Cena local", en: "Local scene", icon: "scene" },
        { pt: "Parceiro regional", en: "Regional partner", icon: "partner" },
        { pt: "FILTR", en: "FILTR", icon: "filter" },
        { pt: "Sony / Som Livre", en: "Sony / Som Livre", icon: "brand" },
        { pt: "Escala nacional / global", en: "National / global scale", icon: "scale" }
      ];
      return `
        <div class="terr-flow">
          ${steps.map((s, i) => `
            <div class="terr-flow-node ${s.en === "FILTR" ? "is-core" : ""}">
              <span class="terr-flow-icon">${terrIcon(s.icon)}</span>
              <strong>${copy(s)}</strong>
            </div>
            ${i < steps.length - 1 ? `<span class="terr-flow-arrow" aria-hidden="true"></span>` : ""}
          `).join("")}
          <p class="terr-flow-caption">${state.lang === "en" ? "Where there is a scene, there is opportunity. Where there is a partner, there is FILTR." : "Onde existe cena, existe oportunidade. Onde existe parceiro, existe FILTR."}</p>
        </div>
      `;
    }
    case "process": {
      const steps = [
        { n: "01", t: { pt: "Radar local", en: "Local radar" }, d: { pt: "Parceiro acompanha cena, artistas, produtores, eventos e movimentos.", en: "Partner tracks the scene, artists, producers, events and movements." } },
        { n: "02", t: { pt: "Filtro territorial", en: "Territorial filter" }, d: { pt: "Parceiro identifica oportunidades com potencial real.", en: "Partner identifies opportunities with real potential." } },
        { n: "03", t: { pt: "Qualificação FILTR", en: "FILTR qualification" }, d: { pt: "A FILTR organiza dados, contexto, repertório, público, histórico e oportunidade.", en: "FILTR organizes data, context, repertoire, audience, history and opportunity." } },
        { n: "04", t: { pt: "Desenvolvimento", en: "Development" }, d: { pt: "Estratégia, marketing, distribuição, conteúdo, collabs, repertório e marcas.", en: "Strategy, marketing, distribution, content, collabs, repertoire and brands." } },
        { n: "05", t: { pt: "Escala", en: "Scale" }, d: { pt: "Sony Music / Som Livre ampliam alcance, estrutura e crescimento.", en: "Sony Music / Som Livre amplify reach, structure and growth." } }
      ];
      return `
        <ol class="terr-process">
          ${steps.map(s => `
            <li>
              <span class="terr-process-n">${s.n}</span>
              <div><strong>${copy(s.t)}</strong><p>${copy(s.d)}</p></div>
            </li>
          `).join("")}
        </ol>
      `;
    }
    case "partner": {
      const roles = [
        { icon: "radar", t: { pt: "Radar cultural", en: "Cultural radar" } },
        { icon: "filter", t: { pt: "Curador territorial", en: "Territorial curator" } },
        { icon: "partner", t: { pt: "Conector de artistas e empresários", en: "Connector of artists and managers" } },
        { icon: "check", t: { pt: "Validador de contexto", en: "Context validator" } },
        { icon: "scale", t: { pt: "Ponte cena local → estrutura nacional", en: "Bridge local scene → national structure" } }
      ];
      return `
        <div class="terr-partner">
          <div class="terr-partner-grid">
            ${roles.map(r => `<article><span>${terrIcon(r.icon)}</span><strong>${copy(r.t)}</strong></article>`).join("")}
          </div>
          <blockquote class="terr-partner-quote">${state.lang === "en" ? "FILTR turns regional partners into radars for A&R, business and development." : "A FILTR transforma parceiros regionais em radares de A&R, negócios e desenvolvimento."}</blockquote>
        </div>
      `;
    }
    case "layers": {
      const layers = [
        { name: "Sony Music", d: { pt: "Estrutura global, marketing, distribuição, dados, repertório, conexões.", en: "Global structure, marketing, distribution, data, repertoire, connections." } },
        { name: "Som Livre", d: { pt: "Força no Brasil, repertório, cultura popular, audiovisual, histórico nacional.", en: "Strength in Brazil, repertoire, popular culture, audiovisual, national legacy." } },
        { name: "FILTR", d: { pt: "Presença local, parceiros, curadoria e desenvolvimento territorial.", en: "Local presence, partners, curation and territorial development." }, accent: true }
      ];
      return `
        <div class="terr-layers">
          ${layers.map(l => `
            <article class="terr-layer ${l.accent ? "is-accent" : ""}">
              <strong>${l.name}</strong>
              <p>${copy(l.d)}</p>
            </article>
          `).join("")}
          <p class="terr-layers-note">${state.lang === "en" ? "FILTR does not replace Sony Music or Som Livre. It connects the group to scenes not yet inside the structure." : "A FILTR não substitui a Sony Music ou a Som Livre. Conecta o grupo às cenas que ainda não estão dentro da estrutura."}</p>
        </div>
      `;
    }
    case "scenes": {
      const genres = ["Forró", "Piseiro", "Arrocha", "Brega funk", "Pagodão", "Axé", "Gospel", "Rap / Trap", "Vaquejada", "Paredão", "São João", "Circuitos regionais"];
      return `
        <div class="terr-scenes">
          <div class="terr-scenes-tags">
            ${genres.map(g => `<span>${g}</span>`).join("")}
          </div>
          <ul class="terr-scenes-list">
            <li>${terrIcon("scene")}<span>${state.lang === "en" ? "Strong scenes and mass parties" : "Cenas fortes e festas de massa"}</span></li>
            <li>${terrIcon("stage")}<span>${state.lang === "en" ? "Regional show circuits and São João" : "Circuitos regionais de show e São João"}</span></li>
            <li>${terrIcon("partner")}<span>${state.lang === "en" ? "Producers, songwriters, labels and managers" : "Produtores, compositores, selos e empresários"}</span></li>
            <li>${terrIcon("spark")}<span>${state.lang === "en" ? "Independent artists with real audiences" : "Artistas independentes com público real"}</span></li>
          </ul>
        </div>
      `;
    }
    case "ne-map":
      return renderTerritoryMap();
    case "stage": {
      const activations = ["Palco FILTR São João", "Sessions FILTR Nordeste", "Radar FILTR", "FILTR Collabs", "FILTR Local Heroes", "FILTR Lab", "FILTR na Estrada"];
      const functions = [
        { pt: "Vitrine de artistas regionais", en: "Showcase of regional artists" },
        { pt: "Curadoria e geração de conteúdo", en: "Curation and content generation" },
        { pt: "Conexão com marcas", en: "Brand connection" },
        { pt: "Inteligência de público e dados", en: "Audience intelligence and data" },
        { pt: "Desenvolvimento de carreira ao vivo", en: "Live career development" },
        { pt: "Prova pública da presença Sony / Som Livre", en: "Public proof of Sony / Som Livre presence" }
      ];
      return `
        <div class="terr-stage">
          <div class="terr-stage-hero">
            <span class="terr-stage-kicker">${terrIcon("stage")} Palco FILTR · São João</span>
            <strong>${state.lang === "en" ? "Presence where the audience already is." : "Presença onde o público já está."}</strong>
          </div>
          <ul class="terr-stage-functions">
            ${functions.map(f => `<li>${terrIcon("check")}<span>${copy(f)}</span></li>`).join("")}
          </ul>
          <div class="terr-stage-tags">
            ${activations.map(a => `<span>${a}</span>`).join("")}
          </div>
        </div>
      `;
    }
    case "roadmap": {
      const phases = [
        { n: "Fase 1", t: { pt: "Nordeste", en: "Northeast" }, d: { pt: "Prova de conceito, parceiros, mapa, palcos, curadoria e primeiros cases.", en: "Proof of concept, partners, map, stages, curation and first cases." }, active: true },
        { n: "Fase 2", t: { pt: "Norte + Centro-Oeste", en: "North + Midwest" }, d: { pt: "Expansão para novas cenas e mercados regionais.", en: "Expansion into new scenes and regional markets." } },
        { n: "Fase 3", t: { pt: "Sul + interior do Sudeste", en: "South + Southeast interior" }, d: { pt: "Consolidação nacional fora dos grandes centros.", en: "National consolidation beyond the major centers." } },
        { n: "Fase 4", t: { pt: "Brasil conectado", en: "Connected Brazil" }, d: { pt: "Rede nacional de inteligência musical territorial.", en: "National network of territorial music intelligence." } }
      ];
      return `
        <ol class="terr-roadmap">
          ${phases.map(p => `
            <li class="${p.active ? "is-active" : ""}">
              <span class="terr-roadmap-dot"></span>
              <div>
                <span class="terr-roadmap-phase">${p.n}${p.active ? ` · ${state.lang === "en" ? "Now" : "Agora"}` : ""}</span>
                <strong>${copy(p.t)}</strong>
                <p>${copy(p.d)}</p>
              </div>
            </li>
          `).join("")}
        </ol>
      `;
    }
    case "value": {
      const items = [
        { icon: "scale", t: { pt: "Capilaridade nacional", en: "National reach" } },
        { icon: "filter", t: { pt: "Pipeline qualificado de artistas e projetos", en: "Qualified pipeline of artists and projects" } },
        { icon: "radar", t: { pt: "Inteligência de cena local", en: "Local scene intelligence" } },
        { icon: "partner", t: { pt: "Relação com parceiros regionais", en: "Relationship with regional partners" } },
        { icon: "spark", t: { pt: "Desenvolvimento de carreira com contexto", en: "Career development with context" } },
        { icon: "territory", t: { pt: "Entrada em mercados sub-representados", en: "Entry into under-represented markets" } },
        { icon: "stage", t: { pt: "Conteúdo e ativações territoriais", en: "Territorial content and activations" } },
        { icon: "data", t: { pt: "Fortalecimento da presença Sony / Som Livre", en: "Stronger Sony / Som Livre presence" } }
      ];
      return `
        <div class="terr-value-grid">
          ${items.map(i => `<article><span>${terrIcon(i.icon)}</span><strong>${copy(i.t)}</strong></article>`).join("")}
        </div>
      `;
    }
    case "vision":
      return `
        <div class="terr-vision">
          <div class="terr-vision-statement">
            <span>${state.lang === "en" ? "From RJ–SP axis" : "Do eixo RJ–SP"}</span>
            <em>${terrIcon("scale")}</em>
            <strong>${state.lang === "en" ? "to operating Brazil from its musical territories" : "a operar o Brasil a partir dos seus territórios musicais"}</strong>
          </div>
          <p class="terr-vision-note">${state.lang === "en" ? "The first phase is the Northeast. The vision is Brazil." : "A primeira fase é Nordeste. A visão é Brasil."}</p>
        </div>
      `;
    case "closing":
      return `
        <div class="terr-closing">
          <div class="terr-closing-mark">${terrIcon("territory")}</div>
          <strong class="terr-closing-line">${state.lang === "en" ? "Where the scene meets scale." : "Onde a cena encontra escala."}</strong>
          <div class="terr-closing-flow">
            <span>${state.lang === "en" ? "Northeast" : "Nordeste"}</span>
            <i></i>
            <span>${state.lang === "en" ? "Brazil" : "Brasil"}</span>
            <i></i>
            <span>Sony / Som Livre</span>
          </div>
        </div>
      `;
    default:
      return "";
  }
}

function renderTerritorySources() {
  const sources = [
    "Pro-Música Brasil", "IFPI", "IBGE", "Ministério do Turismo", "ECAD",
    "CD Baby / TuneCore / FUGA", "Sony Music Brasil", "Som Livre"
  ];
  const placeholders = [
    { pt: "[Inserir dado validado: crescimento do mercado brasileiro de música]", en: "[Insert validated data: Brazilian music market growth]" },
    { pt: "[Inserir dado validado: participação do streaming no mercado brasileiro]", en: "[Insert validated data: streaming share of the Brazilian market]" },
    { pt: "[Inserir dado validado: impacto econômico do São João]", en: "[Insert validated data: São João economic impact]" }
  ];
  return `
    <div class="terr-sources">
      <span class="section-kicker">${state.lang === "en" ? "Suggested sources for validation" : "Fontes sugeridas para validação"}</span>
      <div class="terr-sources-tags">${sources.map(s => `<span>${s}</span>`).join("")}</div>
      <ul class="terr-sources-placeholders">
        ${placeholders.map(p => `<li>${copy(p)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderTerritoryCover(slide) {
  return `
    <section class="terr-cover" aria-label="${copy(slide.kicker)}">
      <div class="terr-cover-bg" aria-hidden="true">
        ${renderTerritoryMap()}
      </div>
      <div class="terr-cover-content">
        <div class="terr-cover-badge">${terrIcon("territory")}<span>${copy(slide.kicker)}</span></div>
        <img class="terr-cover-logo" src="assets/pitch/filtr-logo.png" alt="FILTR" />
        <h1>${copy(slide.title)}</h1>
        <p>${copy(slide.subtitle)}</p>
        <blockquote>${copy(slide.quote)}</blockquote>
        <div class="terr-cover-partners">
          <img src="assets/pitch/sony-music-logo.png" alt="Sony Music" />
          <img src="assets/pitch/som-livre-logo.png" alt="Som Livre" />
        </div>
      </div>
    </section>
  `;
}

function renderTerritoryDeck() {
  const index = territoryIndexFromRoute();
  const slide = data.territorySlides[index - 1];
  const prev = Math.max(index - 1, 1);
  const next = Math.min(index + 1, data.territorySlides.length);
  const progress = Math.round((index / data.territorySlides.length) * 100);
  if (slide.visual === "cover") {
    return shell(`
      <main class="pitch-deck terr-deck terr-deck-opening">
        ${renderTerritoryCover(slide)}
        <div class="pitch-opening-controls terr-opening-controls">
          <a class="button primary" href="#/territorio/${next}">${state.lang === "en" ? "Next" : "Próximo"}</a>
        </div>
        <div class="pitch-progress terr-progress" aria-label="Progresso da apresentação"><span style="width:${progress}%"></span></div>
        <nav class="pitch-dots terr-dots" aria-label="Slides">
          ${data.territorySlides.map((_, i) => `<a class="${i + 1 === index ? "active" : ""}" href="#/territorio/${i + 1}">${i + 1}</a>`).join("")}
        </nav>
      </main>
    `);
  }
  const isClosing = slide.visual === "closing";
  return shell(`
    <main class="pitch-deck terr-deck">
      <section class="pitch-slide terr-slide ${isClosing ? "terr-slide-closing" : ""}">
        <div class="pitch-copy terr-copy">
          <span class="section-kicker">${copy(slide.kicker)} · ${index}/${data.territorySlides.length}</span>
          <h1>${copy(slide.title)}</h1>
          ${slide.subtitle ? `<p class="pitch-subtitle">${copy(slide.subtitle)}</p>` : ""}
          ${slide.body ? `<p>${copy(slide.body)}</p>` : ""}
          ${slide.quote ? `<blockquote class="pitch-impact terr-impact">${copy(slide.quote)}</blockquote>` : ""}
          ${isClosing ? renderTerritorySources() : ""}
          <div class="pitch-controls">
            <a class="button secondary ${index === 1 ? "disabled" : ""}" href="#/territorio/${prev}">${state.lang === "en" ? "Previous" : "Anterior"}</a>
            ${index === data.territorySlides.length
              ? `
                <a class="button primary" href="#/">${copy(slide.cta)}</a>
                <a class="button secondary" href="#/territorio/1">${copy(slide.secondaryCta)}</a>
              `
              : `<a class="button primary" href="#/territorio/${next}">${state.lang === "en" ? "Next" : "Próximo"}</a>`}
          </div>
        </div>
        <div class="pitch-visual terr-visual terr-visual-${slide.visual}">
          ${renderTerritoryVisual(slide)}
        </div>
      </section>
      <div class="pitch-progress terr-progress" aria-label="Progresso da apresentação"><span style="width:${progress}%"></span></div>
      <nav class="pitch-dots terr-dots" aria-label="Slides">
        ${data.territorySlides.map((_, i) => `<a class="${i + 1 === index ? "active" : ""}" href="#/territorio/${i + 1}">${i + 1}</a>`).join("")}
      </nav>
    </main>
  `);
}

function experienceModuleFromRoute() {
  const id = routePath().split("/experience/")[1] || "dashboard";
  return data.experienceModules.find(module => module.id === id) || data.experienceModules[0];
}

function renderExperiencePortal() {
  const artist = data.experienceArtist;
  const current = experienceModuleFromRoute();
  return shell(`
    <main class="experience-app">
      <aside class="experience-nav">
        <div class="experience-artist">
          <img src="assets/pitch/artist-pop.png" alt="" />
          <div>
            <strong>${artist.name}</strong>
            <span>${artist.city} · ${artist.genre}</span>
          </div>
        </div>
        <nav aria-label="FILTR Experience">
          ${data.experienceModules.map(module => `
            <a class="${module.id === current.id ? "active" : ""}" href="#/experience/${module.id}">${copy(module.label)}</a>
          `).join("")}
        </nav>
      </aside>
      <section class="experience-content">
        <div class="experience-hero">
          <div>
            <span class="section-kicker">FILTR Experience · ${copy(current.label)}</span>
            <h1>${copy(current.title)}</h1>
            <p>${copy(current.status)}</p>
          </div>
          <div class="score-card">
            <span>${current.id === "release-score" ? "Release Score" : current.id === "intelligence" ? "Growth" : "Score"}</span>
            <strong>${current.score}</strong>
          </div>
        </div>
        <div class="experience-grid">
          <article class="experience-panel large">
            <span class="section-kicker">${state.lang === "en" ? "Recommendation" : "Recomendação"}</span>
            <h2>${copy(artist.recommendation)}</h2>
            <div class="city-row">${artist.cities.map(city => `<span>${city}</span>`).join("")}</div>
          </article>
          <article class="experience-panel">
            <span class="section-kicker">Release Score</span>
            <div class="radial-score"><strong>${artist.releaseScore}</strong><span>/100</span></div>
            <p>${state.lang === "en" ? "Regional traction with clear media and stage potential." : "Tração regional com potencial claro para mídia e palco."}</p>
          </article>
          <article class="experience-panel">
            <span class="section-kicker">Readiness Score</span>
            <div class="radial-score secondary"><strong>${artist.readinessScore}</strong><span>/100</span></div>
            <p>${state.lang === "en" ? "Needs rights, pitch assets and vertical content." : "Precisa fechar direitos, assets de pitch e conteúdo vertical."}</p>
          </article>
          <article class="experience-panel large">
            <span class="section-kicker">${state.lang === "en" ? "Next actions" : "Próximas ações"}</span>
            <div class="action-list">
              ${current.actions.map(action => `<button type="button" data-mock-action="${copy(action)}">${copy(action)}</button>`).join("")}
            </div>
            <p class="mock-feedback" aria-live="polite"></p>
          </article>
        </div>
      </section>
    </main>
  `);
}

function renderArtists() {
  const ranked = [...data.artists].sort((a, b) => b.score - a.score);
  return shell(`
    <main class="page-wrap">
      <section class="page-hero small">
        <span class="section-kicker">${t("Artistas em ascensão")}</span>
        <h1>${t("Radar de artistas e públicos")}</h1>
        <p>${t("Talentos que estão chamando atenção por consumo, engajamento, consistência e potencial de carreira.")}</p>
      </section>
      <div class="artist-grid">${ranked.map(artistCard).join("")}</div>
    </main>
  `);
}

function renderProducts() {
  return shell(`
    <main class="page-wrap">
      <section class="page-hero small">
        <span class="section-kicker">${t("Produtos FILTR")}</span>
        <h1>${t("Conteúdo, playlists, clipes, entrevistas e palcos")}</h1>
        <p>${t("Acesse o melhor do conteúdo e das experiências da FILTR.")}</p>
      </section>
      <div class="product-grid">${data.products.map(productCard).join("")}</div>
    </main>
  `);
}

function renderLogin() {
  return shell(`
    <main class="login-modal-page">
      <section class="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <a class="modal-close" href="#/" aria-label="Fechar login">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </a>
        <div class="login-copy">
          <span class="section-kicker">${t("Acessar Estúdio FILTR")}</span>
          <h1 id="login-title">${t("Entrar no Estúdio")}</h1>
          <p>${t("Acesse o dashboard operacional para gerenciar parceiros, artistas e lançamentos de produto.")}</p>
          <div class="mock-credentials">
            <span>demo@filtr.com</span>
            <span>${t("senha mock")}</span>
          </div>
        </div>
        <form class="login-form" onsubmit="event.preventDefault(); window.location.hash='/studio';">
          <label>${t("E-mail")}<input type="email" value="demo@filtr.com" /></label>
          <label>${t("Senha")}<input type="password" value="filtrdemo" /></label>
          <button class="button primary full" type="submit">${t("Entrar no Estúdio")}</button>
          <a class="text-link center" href="#/">${t("Voltar para o portal")}</a>
        </form>
      </section>
    </main>
  `);
}

function studioShell(content, title, kicker = "Estúdio FILTR", options = {}) {
  const isEn = state.lang === "en";
  const showDisclaimer = options.showDisclaimer === true;
  return shell(`
    <main class="studio-dashboard-page">
      <section class="studio-ops-stage" aria-label="${isEn ? "FILTR Studio workspace" : "Workspace do Estúdio FILTR"}">
        <aside class="studio-ops-stage-sidebar">
          <img src="assets/pitch/filtr-logo.png" alt="FILTR" />
          <small>${isEn ? "FILTR Studio" : "Estúdio FILTR"}</small>
          <nav aria-label="${isEn ? "Studio navigation" : "Navegação do Estúdio"}">
            <a class="${routePath() === "/studio" ? "active" : ""}" href="#/studio">${t("Dashboard")}</a>
            <a class="${active("/studio/selo")}" href="#/studio/selo">${isEn ? "Label profile" : "Perfil do selo"}</a>
            <a class="${active("/studio/artista")}" href="#/studio/artista">${isEn ? "Artist profile" : "Perfil do artista"}</a>
            <a class="${active("/studio/lancamento") || active("/studio/distribuicao")}" href="#/studio/lancamento">${isEn ? "Releases" : "Lançamentos"}</a>
            <a class="${active("/studio/academy")}" href="#/studio/academy">Academy</a>
            <a href="#/studio">${t("Oportunidades")}</a>
            <a class="${active("/studio/media")}" href="#/studio/media">Media Network</a>
          </nav>
          <div class="studio-ops-stage-note">
            <span>${isEn ? "Mock mode" : "Modo mock"}</span>
            <strong>100% visual</strong>
          </div>
          <a class="studio-exit-button" href="#/">${t("Sair")}</a>
        </aside>
        <section class="studio-ops-workspace">
          ${showDisclaimer ? mockDisclaimer() : ""}
          ${content}
        </section>
      </section>
    </main>
  `);
}

function mockDisclaimer() {
  return `
    <div class="mock-alert" role="note">
      <strong>${t("Ambiente 100% mockado")}</strong>
      <p>${t("Nenhuma ação envia arquivos, conecta Supabase, SFTP, Sony, DDEX ou aciona upload real. Tudo aqui é navegação visual com dados locais.")}</p>
    </div>
  `;
}

function renderStudioHome() {
  const isEn = state.lang === "en";
  const partner = data.partners[0];
  const artist = data.artistProfiles[0];
  const studioActions = [
    {
      value: "3",
      title: "Academy",
      detail: isEn ? "career, image, rights and pitch tracks" : "trilhas de carreira, imagem, direitos e pitch"
    },
    {
      value: "5",
      title: isEn ? "Opportunities" : "Oportunidades",
      detail: isEn ? "playlists, interviews, stages and brands" : "playlists, entrevistas, palcos e marcas"
    },
    {
      value: "R$18K",
      title: "Media Network",
      detail: isEn ? "podcasts, radio, TV, creators and campaign plan" : "podcasts, rádio, TV, creators e plano de mídia"
    },
    {
      value: "+31%",
      title: isEn ? "Signals" : "Sinais",
      detail: isEn ? "city, audience, readiness and A&R radar" : "cidade, audiência, prontidão e radar A&R"
    }
  ];
  const feedSteps = isEn
    ? ["Updated profile", "Reviewed release", "Press kit and content", "Generated opportunity"]
    : ["Perfil atualizado", "Lançamento revisado", "Press kit e conteúdo", "Oportunidade gerada"];

  return shell(`
    <main class="studio-dashboard-page">
      <section class="studio-ops-stage" aria-label="${isEn ? "FILTR Studio operational dashboard" : "Dashboard operacional do Estúdio FILTR"}">
        <aside class="studio-ops-stage-sidebar">
          <img src="assets/pitch/filtr-logo.png" alt="FILTR" />
          <small>${isEn ? "FILTR Studio" : "Estúdio FILTR"}</small>
          <nav aria-label="${isEn ? "Studio navigation" : "Navegação do Estúdio"}">
            <a class="active" href="#/studio">${t("Dashboard")}</a>
            <a href="#/studio/selo">${isEn ? "Label profile" : "Perfil do selo"}</a>
            <a href="#/studio/artista">${isEn ? "Artist profile" : "Perfil do artista"}</a>
            <a href="#/studio/lancamento">${isEn ? "Releases" : "Lançamentos"}</a>
            <a href="#/studio/academy">Academy</a>
            <a href="#/studio">${t("Oportunidades")}</a>
            <a href="#/studio/media">Media Network</a>
          </nav>
          <div class="studio-ops-stage-note">
            <span>${isEn ? "Mock mode" : "Modo mock"}</span>
            <strong>${isEn ? "100% visual" : "100% visual"}</strong>
          </div>
          <a class="studio-exit-button" href="#/">${t("Sair")}</a>
        </aside>

        <section class="studio-ops-workspace">
          <div class="studio-ops-hero compact">
            <div class="studio-ops-hero-main">
              <div class="studio-ops-hero-copy">
                <span class="section-kicker">${isEn ? "Operational dashboard" : "Dashboard operacional"}</span>
                <h1>${partner.name}</h1>
                <p>${isEn ? `Label view · ${partner.artists} artists · mocked distribution operation` : `Visão do selo · ${partner.artists} artistas · operação de distribuição mockada`}</p>
              </div>
              <div class="studio-ops-view-toggle" aria-label="${isEn ? "Dashboard view" : "Visão do dashboard"}">
                <b>${isEn ? "Label" : "Selo"}</b>
                <span>${isEn ? "Artist" : "Artista"}</span>
              </div>
            </div>
          </div>

          <div class="studio-ops-panel-grid stage-panels">
            <article class="studio-ops-profile-card label-profile">
              <img src="assets/pitch/local-studio.png" alt="" />
              <div>
                <div class="studio-ops-card-head">
                  <span>${isEn ? "Label profile" : "Perfil do selo"}</span>
                  <a class="text-link" href="#/studio/selo">${t("Abrir perfis →")}</a>
                </div>
                <h3>${partner.name}</h3>
                <p>${isEn ? "Roster, contacts, territory and editorial priorities." : "Roster, contatos, território e prioridades editoriais."}</p>
              </div>
            </article>

            <article class="studio-ops-profile-card artist-profile">
              <img src="assets/pitch/regional-artist.png" alt="" />
              <div>
                <div class="studio-ops-card-head">
                  <span>${isEn ? "Artist profile" : "Perfil do artista"}</span>
                  <a class="text-link" href="#/studio/artista">${isEn ? "View profile" : "Ver perfil"}</a>
                </div>
                <h3>Maya Reis</h3>
                <p>${isEn ? "Bio, releases, videos, press kit and public page." : "Bio, lançamentos, clipes, press kit e página pública."}</p>
              </div>
            </article>
          </div>

          <div class="studio-ops-release-area stage-release-area">
            <article class="studio-ops-release-strip">
              <div>
                <span>${isEn ? "Product releases" : "Lançamentos de produto"}</span>
                <h3>${isEn ? "5 products in preparation" : "5 produtos em preparação"}</h3>
                <p>${isEn ? "Artwork, audio, metadata, rights and mocked review." : "Capa, áudio, metadados, direitos e revisão mockada."}</p>
              </div>
              <div class="studio-ops-release-bars">
                <p><span>Single</span><b style="width:82%"></b><strong>82%</strong></p>
                <p><span>${isEn ? "Video" : "Clipe"}</span><b style="width:68%"></b><strong>68%</strong></p>
                <p><span>${isEn ? "Live session" : "Sessão ao vivo"}</span><b style="width:54%"></b><strong>54%</strong></p>
              </div>
            </article>
          </div>

          <div class="studio-ops-action-grid">
            ${studioActions.map(action => `
              <article>
                <span>${action.value}</span>
                <strong>${action.title}</strong>
                <small>${action.detail}</small>
              </article>
            `).join("")}
          </div>

          <div class="studio-ops-feed stage-feed">
            <div>
              <span class="section-kicker">${isEn ? "Portal feed" : "Alimentação do portal"}</span>
              <h3>${isEn ? "What artists update becomes FILTR positioning." : "O que o artista atualiza vira posicionamento FILTR."}</h3>
            </div>
            <div class="studio-ops-feed-steps">
              ${feedSteps.map((step, index) => `
                <span><b>${String(index + 1).padStart(2, "0")}</b>${step}</span>
              `).join("")}
            </div>
          </div>
        </section>
      </section>

      <section class="studio-distribution-process">
        <div class="studio-section-title">
          <div>
            <span class="section-kicker">${isEn ? "Mocked distribution CMS" : "CMS de distribuição mockado"}</span>
            <h2>${isEn ? "Product release workflow" : "Fluxo de lançamento de produto"}</h2>
          </div>
          <a class="button secondary" href="#/studio/lancamento">${isEn ? "Open release builder" : "Abrir lançamento"}</a>
        </div>
        <div class="studio-distribution-steps">
          ${data.launchSteps.map((step, index) => `
            <article class="${index < 3 ? "done" : index === 3 ? "current" : ""}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${t(step)}</strong>
              <small>${index < 3 ? t("Concluído") : index === 3 ? t("Em revisão") : t("Pendente")}</small>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="studio-ops-lower-grid studio-dashboard-support">
        <article class="panel-card large">
          <div class="section-heading inline">
            <div><span class="section-kicker">${t("Produto em lançamento")}</span><h2>${data.productDraft.title}</h2></div>
            <a class="text-link" href="#/studio/lancamento">${t("Abrir lançamento →")}</a>
          </div>
          ${releaseTable(data.releases.slice(0, 4))}
        </article>
        <article class="panel-card">
          <span class="section-kicker">${t("Pendências operacionais")}</span>
          <h2>${t("Atividades de hoje")}</h2>
          <div class="task-list">
            ${data.tasks.map(task => `
              <div class="task-row">
                <div><strong>${t(task.label)}</strong><small>${t(task.due)}</small></div>
                <span class="status ${currencyClass(task.status)}">${t(task.status)}</span>
              </div>
            `).join("")}
          </div>
        </article>
      </section>
    </main>
  `);
}

function partnerProfile(partner) {
  return `
    <div class="partner-profile">
      <div>
        <span>${t(partner.type)}</span>
        <strong>${partner.name}</strong>
        <small>${partner.document}</small>
      </div>
      <dl>
        <div><dt>${t("Responsável")}</dt><dd>${partner.manager}</dd></div>
        <div><dt>${t("Artistas")}</dt><dd>${partner.artists}</dd></div>
        <div><dt>${t("Produtos")}</dt><dd>${partner.products}</dd></div>
      </dl>
    </div>
  `;
}

function studioProfileCard(profile) {
  return `
    <article class="studio-profile-card">
      <img src="${profile.image}" alt="" />
      <div>
        <span>${t(profile.partner)}</span>
        <strong>${profile.name}</strong>
        <small>${t(profile.genre)} · ${t(profile.city)}</small>
        <p>${t(profile.status)} · ${profile.products} ${t("produtos")}</p>
      </div>
      <a class="text-link" href="#/studio/lancamento">${t("Lançar produto")}</a>
    </article>
  `;
}

function renderProfileCards(items = data.artistProfiles) {
  return items.map(studioProfileCard).join("");
}

function releaseTable(releases) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>${t("Artista")}</th><th>${t("Produto")}</th><th>${t("Data")}</th><th>Status</th><th>${t("Progresso")}</th><th>${t("Parceiro")}</th></tr></thead>
        <tbody>
          ${releases.map(release => `
            <tr>
              <td>${release.artist}</td>
              <td><strong>${release.title}</strong></td>
              <td>${release.date}</td>
              <td><span class="status ${currencyClass(release.status)}">${t(release.status)}</span></td>
              <td><div class="progress"><span style="width:${release.progress}%"></span></div></td>
              <td>${t(release.owner)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function stepper() {
  const statuses = ["Concluído", "Concluído", "Concluído", "Em revisão", "Pendente", "Pendente", "Pendente"];
  return `<div class="release-progress" aria-label="${t("Etapas do produto")}">${data.launchSteps.map((step, index) => `
    <div class="release-step ${index < 3 ? "done" : index === 3 ? "current" : ""}">
      <span>${index + 1}</span>
      <div><strong>${t(step)}</strong><small>${t(statuses[index])}</small></div>
    </div>
  `).join("")}</div>`;
}

function releaseField(label, value, options = {}) {
  const className = options.wide ? "release-field wide" : "release-field";
  return `
    <label class="${className}">
      <span>${t(label)}</span>
      <input value="${t(value)}" />
    </label>
  `;
}

function releaseDetailsForm() {
  const product = data.productDraft;
  return `
    <article class="release-card">
      <div class="release-card-heading">
        <div>
          <span class="section-kicker">${t("Campos principais")}</span>
          <h3>${t("Dados do produto")}</h3>
        </div>
        <span class="validation-pill good">8/8</span>
      </div>
      <div class="release-form-grid">
        ${releaseField("Título do produto", product.title, { wide: true })}
        ${releaseField("Tipo de produto", product.format)}
        ${releaseField("Versão", "Original")}
        ${releaseField("Artista principal", product.artist)}
        ${releaseField("Selo / parceiro", product.partner)}
        ${releaseField("Gênero principal", product.genre)}
        ${releaseField("Idioma", product.language)}
        ${releaseField("Data de lançamento", product.releaseDate)}
        ${releaseField("UPC / EAN", product.upc)}
      </div>
    </article>
  `;
}

function coverUploadPanel() {
  return `
    <article class="release-card side-card">
      <div class="release-card-heading">
        <div>
          <span class="section-kicker">${t("Arte do lançamento")}</span>
          <h3>${t("Capa principal")}</h3>
        </div>
        <button class="icon-button" type="button" data-mock-action="${t("Trocar capa (mock)")}" aria-label="${t("Trocar capa (mock)")}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15.2 5.2 3.6 3.6M4 20l4.4-1 10.2-10.2a2.5 2.5 0 0 0-3.5-3.5L4.9 15.5 4 20Z" /></svg>
        </button>
      </div>
      <div class="cover-preview">
        <img src="assets/pitch/artist-pop.png" alt="" />
      </div>
      <button class="cover-dropzone" type="button" data-mock-action="${t("Selecionar arquivo (mock)")}">
        <strong>${t("Clique ou arraste a arte aqui")}</strong>
        <span>${t("JPG ou PNG, quadrada, 3000x3000 px")}</span>
      </button>
      <div class="requirement-list">
        <strong>${t("Requisitos da capa")}</strong>
        <ul>
          <li>${t("Quadrada, mínimo 3000x3000 px")}</li>
          <li>${t("JPG/PNG em RGB")}</li>
          <li>${t("Sem URL, preço, logos externos ou bordas")}</li>
          <li>${t("Texto legível e sem corte")}</li>
        </ul>
      </div>
    </article>
  `;
}

function trackEditor() {
  return `
    <article class="release-card">
      <div class="release-card-heading">
        <div>
          <span class="section-kicker">${t("Arquivos de áudio mock")}</span>
          <h3>${t("Faixas do produto")}</h3>
        </div>
        <div class="button-row">
          <button class="button secondary compact" type="button" data-mock-action="${t("Importar áudio (mock)")}">${t("Importar áudio (mock)")}</button>
          <button class="button secondary compact" type="button" data-mock-action="${t("Adicionar faixa")}">${t("Adicionar faixa")}</button>
        </div>
      </div>
      <div class="track-editor-list">
        ${data.tracks.map((track, index) => `
          <div class="track-editor-row">
            <div class="track-index">${track.number}</div>
            <div class="track-main">
              <strong>${track.title}</strong>
              <small>${t("Artista principal")}: ${data.productDraft.artist} · ISRC: ${t(track.isrc)}</small>
            </div>
            <div class="track-badges">
              <span>${track.duration}</span>
              <span>${index === 0 ? "WAV 24-bit" : t(track.audio)}</span>
              <span class="status ${currencyClass(track.status)}">${index === 0 ? t("Concluído") : t(track.status)}</span>
            </div>
            <div class="track-actions">
              <button type="button" data-mock-action="${t("Editar metadados")}">${t("Editar metadados")}</button>
              <button type="button" data-mock-action="${t("Substituir áudio (mock)")}">${t("Substituir áudio (mock)")}</button>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="track-footer">
        <span>${t("Duração total")}: 06:56</span>
        <strong>1 de 2 ${t("faixas completas")}</strong>
      </div>
    </article>
  `;
}

function rightsEditor() {
  const product = data.productDraft;
  return `
    <article class="release-card">
      <div class="release-card-heading">
        <div>
          <span class="section-kicker">${t("Metadados da faixa")}</span>
          <h3>${t("Créditos e direitos")}</h3>
        </div>
        <button class="button secondary compact" type="button" data-mock-action="${t("Validar direitos")}">${t("Validar direitos")}</button>
      </div>
      <div class="release-form-grid compact">
        ${releaseField("Compositores", "Maya Luz / Pedro Norte", { wide: true })}
        ${releaseField("Produtor", "Casa Brava Studio")}
        ${releaseField("Editora", "FILTR Publishing")}
        ${releaseField("Linha P", "2026 Selo Aurora")}
        ${releaseField("Linha C", product.copyright)}
        ${releaseField("Split master", "Selo Aurora 70% / Artista 30%")}
        ${releaseField("Explícita", "Não")}
      </div>
    </article>
  `;
}

function readinessPanel() {
  return `
    <article class="release-card side-card">
      <div class="release-card-heading">
        <div>
          <span class="section-kicker">${t("Validação mock")}</span>
          <h3>${t("Prontidão")}</h3>
        </div>
        <span class="validation-pill warn">${t("Revisão interna")}</span>
      </div>
      <div class="readiness-box">
        <div class="readiness-ring"><span>86%</span></div>
        <p>${t("Quase pronto. Complete direitos e revisão antes de simular entrega.")}</p>
      </div>
      <div class="readiness-stats">
        <div><strong>6</strong><span>${t("Itens validados")}</span></div>
        <div><strong>2</strong><span>${t("Pendências mock")}</span></div>
      </div>
    </article>
  `;
}

function storesPanel() {
  return `
    <article class="release-card side-card">
      <div class="release-card-heading">
        <div>
          <span class="section-kicker">${t("Lojas e territórios")}</span>
          <h3>${t("Lojas selecionadas")}</h3>
        </div>
        <button class="text-link" type="button" data-mock-action="${t("Selecionar lojas (mock)")}">${t("Selecionar lojas (mock)")}</button>
      </div>
      <div class="store-grid">${data.deliveryStores.map(store => `<span>${store}</span>`).join("")}<span>+23</span></div>
      <div class="territory-summary">
        <strong>${t("Territórios")}</strong>
        <span>${t("Mundial, exceto territórios restritos")}</span>
        <small>${t("100+ lojas e plataformas simuladas")}</small>
      </div>
    </article>
  `;
}

function mockActionStrip() {
  const actions = [
    "Gerar pacote (mock)",
    "Exportar XML (mock)",
    "Exportar CSV (mock)",
    "Baixar pacote (mock)",
    "Simular envio SFTP",
    "Importar relatório (mock)"
  ];
  return `
    <article class="release-card side-card">
      <div class="release-card-heading">
        <div>
          <span class="section-kicker">${t("Pacote simulado")}</span>
          <h3>${t("Ações simuladas do produto")}</h3>
        </div>
      </div>
      <div class="mock-action-list">
        ${actions.map(action => `
          <button class="mock-action-button" type="button" data-mock-action="${t(action)}">
            <span>${t(action)}</span>
            <small>${t("Ação local sem integração real")}</small>
          </button>
        `).join("")}
      </div>
      <p class="mock-feedback" aria-live="polite"></p>
    </article>
  `;
}

function renderProfiles() {
  return studioShell(`
    <section class="studio-profile-command">
      <div class="studio-section-title">
        <div>
          <span class="section-kicker">${t("Perfis do parceiro")}</span>
          <h2>${t("Buscar artistas por selo, parceiro ou cidade")}</h2>
        </div>
        <button class="button primary" type="button">${t("Novo perfil")}</button>
      </div>
      <div class="profile-search">
        <input id="profile-search" type="search" placeholder="${t("Pesquisar artista, selo ou cidade")}" autocomplete="off" />
      </div>
      <div class="studio-profile-grid" data-profile-results>
        ${renderProfileCards()}
      </div>
    </section>
  `, "Perfis", "Estúdio FILTR", { showDisclaimer: false });
}

function renderLabelProfile() {
  const partner = data.partners[0];
  return studioShell(`
    <section class="entity-profile-page">
      <div class="entity-profile-hero label">
        <div>
          <span class="section-kicker">Perfil do selo</span>
          <h2>${partner.name}</h2>
          <p>Workspace parceiro para organizar roster, dados fiscais, catálogo, prioridades editoriais, lançamentos e oportunidades dos artistas conectados ao selo.</p>
        </div>
        <div class="entity-score-card">
          <span>Prontidão operacional</span>
          <strong>91%</strong>
          <small>documentos, roster e produtos revisados</small>
        </div>
      </div>
      <div class="entity-profile-grid">
        <article>
          <span>Dados do selo</span>
          <h3>${partner.name}</h3>
          <dl>
            <div><dt>${t("Responsável")}</dt><dd>${partner.manager}</dd></div>
            <div><dt>Documento</dt><dd>${partner.document}</dd></div>
            <div><dt>${t("Artistas")}</dt><dd>${partner.artists}</dd></div>
            <div><dt>${t("Produtos")}</dt><dd>${partner.products}</dd></div>
          </dl>
        </article>
        <article>
          <span>Prioridades editoriais</span>
          <h3>Plano do mês</h3>
          <ul class="clean-list">
            <li>Finalizar metadados de Noite Solar</li>
            <li>Selecionar 3 artistas para oportunidades de playlists</li>
            <li>Preparar press kit regional para Recife, Salvador e Fortaleza</li>
            <li>Mapear produtos aptos para Media Network</li>
          </ul>
        </article>
      </div>
      <div class="label-roster-strip">
        ${data.artistProfiles.slice(0, 5).map(profile => `
          <article>
            <img src="${profile.image}" alt="" />
            <div>
              <strong>${profile.name}</strong>
              <span>${t(profile.genre)} · ${t(profile.city)}</span>
              <small>${t(profile.status)}</small>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `, "Perfil do selo", "Estúdio FILTR", { showDisclaimer: false });
}

function renderArtistProfile() {
  const artist = data.artistProfiles[0];
  return studioShell(`
    <section class="entity-profile-page">
      <div class="entity-profile-hero artist">
        <img src="${artist.image}" alt="" />
        <div>
          <span class="section-kicker">Perfil do artista</span>
          <h2>${artist.name}</h2>
          <p>Bio, lançamentos, clipes, entrevistas, press kit, agenda e oportunidades alimentando a página pública e os sinais do Estúdio FILTR.</p>
        </div>
        <div class="entity-score-card">
          <span>Release Score</span>
          <strong>82</strong>
          <small>pronta para aceleração regional</small>
        </div>
      </div>
      <div class="artist-profile-modules">
        <article><span>Publicação</span><strong>2 lançamentos</strong><small>Noite Solar em revisão final</small></article>
        <article><span>Conteúdo</span><strong>6 assets</strong><small>fotos, clipe, cortes e release</small></article>
        <article><span>Oportunidades</span><strong>5 abertas</strong><small>playlists, rádio, podcast e palco</small></article>
        <article><span>Academy</span><strong>3 trilhas</strong><small>Spotify, YouTube e marketing</small></article>
      </div>
      <div class="entity-profile-grid">
        <article>
          <span>Página pública</span>
          <h3>O que o artista alimenta</h3>
          <ul class="clean-list">
            <li>Release e fotos oficiais do single</li>
            <li>Clipes, visualizers e cortes verticais</li>
            <li>Agenda, entrevistas e notícias</li>
            <li>Links oficiais e press kit para imprensa</li>
          </ul>
        </article>
        <article>
          <span>Próximas ações</span>
          <h3>Plano FILTR</h3>
          <ul class="clean-list">
            <li>Abrir plano de lançamento de Noite Solar</li>
            <li>Aplicar para playlists regionais</li>
            <li>Enviar pauta para rádios do Nordeste</li>
            <li>Gerar certificado Academy de estratégia de lançamento</li>
          </ul>
        </article>
      </div>
    </section>
  `, "Perfil do artista", "Estúdio FILTR", { showDisclaimer: false });
}

function renderProductLaunch() {
  const product = data.productDraft;
  const simulationSteps = [
    { label: "Produto", status: "Concluído", detail: "Título, formato, selo, artista e UPC mockado conferidos." },
    { label: "Capa", status: "Concluído", detail: "Arte quadrada, sem bordas e pronta para revisão visual." },
    { label: "Áudios", status: "Concluído", detail: "WAV 24-bit e faixa acústica validados na simulação." },
    { label: "Metadados", status: "Concluído", detail: "ISRC, gênero, idioma, compositores e ficha técnica preenchidos." },
    { label: "Direitos", status: "Concluído", detail: "Splits, editora, linhas P/C e permissões revisados." },
    { label: "Lojas", status: "Concluído", detail: "Spotify, Apple, YouTube, Deezer, Amazon e TikTok selecionados." },
    { label: "Entrega", status: "Pronto para simular", detail: "Pacote visual pronto para gerar recibo mockado." }
  ];
  return studioShell(`
    <section class="release-sim-page" data-release-sim>
      <div class="release-sim-hero">
        <div>
          <span class="section-kicker">Distribuição mockada</span>
          <h2>${product.title}</h2>
          <p>Uma simulação simples do caminho de entrega: produto concluído, capa concluída, áudios e metadados revisados, direitos e lojas aprovados, até a entrega final mockada.</p>
          <div class="release-sim-meta">
            <span>${product.artist}</span>
            <span>${product.partner}</span>
            <span>${product.format}</span>
            <span>${product.releaseDate}</span>
          </div>
        </div>
        <figure>
          <img src="assets/pitch/artist-pop.png" alt="" />
          <figcaption><strong>Produto completo</strong><span>capa + áudio + metadados</span></figcaption>
        </figure>
      </div>

      <div class="release-flow-board">
        <div class="release-flow-steps">
          ${simulationSteps.map((step, index) => `
            <article class="release-flow-step ${index < 6 ? "done" : "ready"}" data-delivery-step="${index}">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>${step.label}</strong>
                <small>${step.status}</small>
                <p>${step.detail}</p>
              </div>
            </article>
          `).join("")}
        </div>

        <aside class="delivery-package-panel">
          <span class="section-kicker">Pacote de entrega</span>
          <h3>Pronto para envio mockado</h3>
          <div class="delivery-score"><strong>100%</strong><span>checklist visual</span></div>
          <ul class="clean-list">
            <li>DDEX XML mockado gerado</li>
            <li>CSV de metadados conferido</li>
            <li>Capa 3000x3000 anexada</li>
            <li>2 WAVs prontos para validação</li>
            <li>6 DSPs selecionadas</li>
          </ul>
          <button class="button primary full" type="button" data-complete-release>Simular entrega</button>
          <p class="release-delivery-feedback" aria-live="polite">Nenhum arquivo será enviado. A ação apenas conclui a simulação visual.</p>
        </aside>
      </div>

      <div class="release-evidence-row">
        <article><span>DSPs</span><strong>Spotify, Apple, YouTube, Deezer, Amazon, TikTok</strong></article>
        <article><span>Direitos</span><strong>Master 70/30 · Publishing FILTR</strong></article>
        <article><span>Revisão</span><strong>Operação FILTR aprovada</strong></article>
        <article><span>Entrega</span><strong data-delivery-status>Pronta para simular</strong></article>
      </div>
    </section>
  `, "Lançamentos", "Estúdio FILTR", { showDisclaimer: false });
}

function renderAcademy() {
  const courses = [
    { platform: "Spotify", title: "Pitch editorial, Campaign Kit e pré-save", level: "Intermediário", lessons: "6 aulas", progress: 82 },
    { platform: "YouTube", title: "Official Artist Channel, Shorts e analytics", level: "Essencial", lessons: "5 aulas", progress: 64 },
    { platform: "TikTok", title: "Creators, pré-release e vídeos curtos", level: "Essencial", lessons: "4 aulas", progress: 48 },
    { platform: "Apple/Shazam", title: "Assets sociais, milestones e descoberta", level: "Essencial", lessons: "4 aulas", progress: 56 },
    { platform: "Marketing", title: "Plano de conteúdo, mídia paga e narrativa", level: "Avançado", lessons: "7 aulas", progress: 34 },
    { platform: "Direitos", title: "ISRC, splits, editora e metadados", level: "Obrigatório", lessons: "5 aulas", progress: 91 }
  ];
  const workshops = [
    "Workshop de lançamento com especialista em DSPs",
    "Clínica de pitch para playlists e imprensa",
    "Aula ao vivo de YouTube Shorts e cortes verticais",
    "Mesa de marketing regional para Nordeste"
  ];
  return studioShell(`
    <section class="academy-studio">
      <div class="academy-studio-hero">
        <div>
          <span class="section-kicker">FILTR Academy</span>
          <h2>Formação para transformar lançamento em carreira.</h2>
          <p>Trilhas mockadas para artista, selo e equipe aprenderem distribuição, marketing, DSPs, conteúdo, dados e direitos dentro do Estúdio.</p>
        </div>
        <aside class="academy-certificate">
          <span>Certificado em andamento</span>
          <strong>Estratégia de lançamento digital</strong>
          <div class="certificate-progress"><b style="width:68%"></b></div>
          <small>68% concluído · certificado FILTR Academy ao finalizar</small>
        </aside>
      </div>
      <div class="academy-course-grid">
        ${courses.map(course => `
          <article>
            <span>${course.platform}</span>
            <h3>${course.title}</h3>
            <p>${course.level} · ${course.lessons}</p>
            <div class="course-progress"><b style="width:${course.progress}%"></b><strong>${course.progress}%</strong></div>
            <button type="button" data-mock-action="Abrir aula">Abrir aula</button>
          </article>
        `).join("")}
      </div>
      <div class="academy-live-panel">
        <div>
          <span class="section-kicker">Workshops e especialistas</span>
          <h3>Agenda simulada da semana</h3>
        </div>
        <div class="academy-workshop-list">
          ${workshops.map((item, index) => `<article><b>${String(index + 1).padStart(2, "0")}</b><span>${item}</span><small>certificado + tarefa prática</small></article>`).join("")}
        </div>
      </div>
    </section>
  `, "Academy", "Estúdio FILTR", { showDisclaimer: false });
}

function renderMediaNetwork() {
  const channels = [
    { label: "Rádios Nordeste", value: "42", detail: "Recife, Fortaleza, Salvador, Caruaru, João Pessoa e Natal" },
    { label: "TV e vídeo", value: "18", detail: "programas musicais, inserts regionais e matérias de bastidor" },
    { label: "Agências", value: "12", detail: "mídia paga, marcas, ativações e campanhas de lançamento" },
    { label: "Podcasts", value: "9", detail: "entrevistas, conversas ao vivo e distribuição de cortes" }
  ];
  const campaigns = [
    { title: "Syndication Rádio Nordeste", status: "Planejada", detail: "áudio de entrevista e faixa foco para rede regional" },
    { title: "Podcast + cortes sociais", status: "Em briefing", detail: "conversa de 35 min, 12 cortes e assets para creators" },
    { title: "TV local e portais", status: "Aberta", detail: "matéria curta, release, fotos e agenda de divulgação" },
    { title: "Campanha creator", status: "Orçamento", detail: "TikTok/Reels com creators de forró e pop regional" }
  ];
  return studioShell(`
    <section class="media-network-page">
      <div class="media-network-hero">
        <div>
          <span class="section-kicker">FILTR Media Network</span>
          <h2>Conexões de mídia para levar artistas a rádio, TV, creators e marcas.</h2>
          <p>Uma central mockada para planejar campanhas, convênios, parcerias, entrevistas, podcasts, rádios regionais e publicidade sem acionar nenhum serviço real.</p>
        </div>
      </div>
      <div class="media-channel-grid">
        ${channels.map(channel => `
          <article>
            <span>${channel.label}</span>
            <strong>${channel.value}</strong>
            <p>${channel.detail}</p>
          </article>
        `).join("")}
      </div>
      <div class="media-network-map">
        <div class="media-hub">FILTR<br />Media</div>
        <span class="node radio">Rádios</span>
        <span class="node tv">TV</span>
        <span class="node agencies">Agências</span>
        <span class="node creators">Creators</span>
        <span class="node brands">Marcas</span>
        <span class="node podcasts">Podcasts</span>
      </div>
      <div class="media-campaign-list">
        ${campaigns.map(item => `
          <article>
            <div>
              <span>${item.status}</span>
              <h3>${item.title}</h3>
              <p>${item.detail}</p>
            </div>
            <button type="button" data-mock-action="Abrir campanha">Abrir campanha</button>
          </article>
        `).join("")}
      </div>
    </section>
  `, "Media Network", "Estúdio FILTR", { showDisclaimer: false });
}

function productSummary() {
  const product = data.productDraft;
  return `
    <dl class="product-summary">
      <div><dt>${t("Título")}</dt><dd>${product.title}</dd></div>
      <div><dt>${t("Artista")}</dt><dd>${product.artist}</dd></div>
      <div><dt>${t("Parceiro")}</dt><dd>${t(product.partner)}</dd></div>
      <div><dt>${t("Formato")}</dt><dd>${t(product.format)}</dd></div>
      <div><dt>${t("Data de lançamento")}</dt><dd>${product.releaseDate}</dd></div>
      <div><dt>Copyright</dt><dd>${t(product.copyright)}</dd></div>
    </dl>
  `;
}

function trackTable() {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>#</th><th>${t("Faixa")}</th><th>ISRC</th><th>${t("Duração")}</th><th>${t("Áudio")}</th><th>Status</th></tr></thead>
        <tbody>
          ${data.tracks.map(track => `
            <tr>
              <td>${track.number}</td>
              <td><strong>${track.title}</strong></td>
              <td>${t(track.isrc)}</td>
              <td>${track.duration}</td>
              <td>${t(track.audio)}</td>
              <td><span class="status ${currencyClass(track.status)}">${t(track.status)}</span></td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderCatalog() {
  return studioShell(`
    <section class="panel-card large">
      <div class="section-heading inline">
        <div>
          <span class="section-kicker">${t("Catálogo")}</span>
          <h2>${t("Produtos cadastrados no workspace")}</h2>
        </div>
        <a class="button primary" href="#/studio/lancamento">${t("Lançar produto")}</a>
      </div>
      ${releaseTable(data.releases)}
    </section>
  `, "Catálogo", "Estúdio FILTR");
}

function render() {
  const path = routePath();
  const route = path.startsWith("/pitch")
    ? { render: renderPitchDeck }
    : path.startsWith("/tech")
      ? { render: renderTechDeck }
    : path.startsWith("/territorio")
      ? { render: renderTerritoryDeck }
    : routes.find(item => item.path === path) || (path.startsWith("/noticias/") ? { render: renderNews } : routes[0]);
  document.documentElement.lang = state.lang === "en" ? "en" : "pt-BR";
  app.innerHTML = route.render();
  bindInteractions();
  const targetId = homeSectionRoutes[path];
  if (targetId) {
    requestAnimationFrame(() => document.querySelector(`#${targetId}`)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  } else {
    window.scrollTo(0, 0);
  }
}

function bindInteractions() {
  const languageToggle = document.querySelector("[data-language-toggle]");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      state.lang = state.lang === "pt" ? "en" : "pt";
      localStorage.setItem("filtr-language", state.lang);
      render();
    });
  }

  const rail = document.querySelector("[data-products-rail]");
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  if (rail && prev && next) {
    const scrollAmount = () => Math.min(420, rail.clientWidth * 0.78);
    prev.addEventListener("click", () => rail.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
    next.addEventListener("click", () => rail.scrollBy({ left: scrollAmount(), behavior: "smooth" }));
  }

  const newsletter = document.querySelector(".newsletter-form");
  if (newsletter) {
    newsletter.addEventListener("submit", event => {
      event.preventDefault();
      const input = newsletter.querySelector("input[name='email']");
      const feedback = newsletter.querySelector(".newsletter-feedback");
      const value = input.value.trim();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!valid) {
        feedback.textContent = t("Informe um e-mail válido para receber novidades da FILTR.");
        feedback.className = "newsletter-feedback error";
        return;
      }
      // Simulação local: nenhuma inscrição é enviada para serviço externo.
      feedback.textContent = t("Inscrição recebida. Você receberá novidades da FILTR neste e-mail.");
      feedback.className = "newsletter-feedback success";
      input.value = "";
    });
  }

  const mockActions = document.querySelectorAll("[data-mock-action]");
  const mockFeedback = document.querySelector(".mock-feedback");
  if (mockActions.length) {
    mockActions.forEach(button => {
      button.addEventListener("click", () => {
        if (mockFeedback) {
          mockFeedback.textContent = t("Simulação registrada localmente. Nenhum arquivo foi enviado e nenhuma integração foi acionada.");
          mockFeedback.className = "mock-feedback success";
        }
      });
    });
  }

  const completeRelease = document.querySelector("[data-complete-release]");
  if (completeRelease) {
    completeRelease.addEventListener("click", () => {
      document.querySelector("[data-release-sim]")?.classList.add("delivery-complete");
      document.querySelectorAll("[data-delivery-step]").forEach(step => {
        step.classList.remove("ready");
        step.classList.add("done");
        const status = step.querySelector("small");
        if (status) status.textContent = "Concluído";
      });
      const deliveryStatus = document.querySelector("[data-delivery-status]");
      if (deliveryStatus) deliveryStatus.textContent = "Entrega simulada concluída";
      const feedback = document.querySelector(".release-delivery-feedback");
      if (feedback) {
        feedback.textContent = "Entrega simulada concluída localmente. Nenhum arquivo foi enviado e nenhuma integração foi acionada.";
        feedback.classList.add("success");
      }
    });
  }

  const profileSearch = document.querySelector("#profile-search");
  const profileResults = document.querySelector("[data-profile-results]");
  if (profileSearch && profileResults) {
    profileSearch.addEventListener("input", event => {
      const query = event.target.value.trim().toLowerCase();
      const filtered = data.artistProfiles.filter(profile => (
        `${profile.name} ${profile.partner} ${profile.genre} ${profile.city} ${profile.status}`.toLowerCase().includes(query)
      ));
      profileResults.innerHTML = filtered.length
        ? renderProfileCards(filtered)
        : `<p class="muted">${t("Nenhum perfil encontrado para esta busca.")}</p>`;
    });
  }

  const search = document.querySelector("#portal-search");
  if (search) {
    search.addEventListener("input", event => {
      state.search = event.target.value;
      const results = document.querySelector(".search-results");
      const q = state.search.trim().toLowerCase();
      const allResults = [
        ...data.portalHighlights.map(item => ({ type: item.type, title: item.title, desc: item.description, href: "#/noticias" })),
        ...data.news.map(n => ({ type: "Notícia", title: n.title, desc: n.excerpt, href: `#/noticias/${n.slug}` })),
        ...data.artists.map(a => ({ type: "Artista", title: a.name, desc: `${a.genre} · score ${a.score}`, href: "#/artistas" })),
        ...data.products.map(p => ({ type: "Produto", title: p.name, desc: p.description, href: "#/produtos" }))
      ];
      const filtered = q ? allResults.filter(item => `${item.title} ${item.desc} ${item.type}`.toLowerCase().includes(q)).slice(0, 6) : [];
      results.innerHTML = filtered.length ? filtered.map(item => `
        <a class="result-row" href="${item.href}">
          <span>${item.type}</span><strong>${item.title}</strong><small>${item.desc}</small>
        </a>`).join("") : `<p class="muted">Digite algo para explorar notícias, artistas e produtos FILTR.</p>`;
    });
  }
}

window.addEventListener("hashchange", render);
window.addEventListener("keydown", event => {
  const path = routePath();
  const isPitch = path.startsWith("/pitch");
  const isTech = path.startsWith("/tech");
  const isTerr = path.startsWith("/territorio");
  if (!isPitch && !isTech && !isTerr) return;
  const activeElement = document.activeElement;
  const isTyping = activeElement && ["INPUT", "TEXTAREA", "SELECT"].includes(activeElement.tagName);
  if (isTyping || event.metaKey || event.ctrlKey || event.altKey) return;

  const index = isPitch ? pitchIndexFromRoute() : isTech ? techIndexFromRoute() : territoryIndexFromRoute();
  const total = isPitch ? data.pitchSlides.length : isTech ? data.techSlides.length : data.territorySlides.length;
  const basePath = isPitch ? "/pitch" : isTech ? "/tech" : "/territorio";
  if (event.key === "ArrowRight" || event.key === "PageDown") {
    event.preventDefault();
    go(index === total ? "/" : `${basePath}/${index + 1}`);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    go(`${basePath}/${Math.max(index - 1, 1)}`);
  }
  if (event.key === "Home") {
    event.preventDefault();
    go(`${basePath}/1`);
  }
  if (event.key === "End") {
    event.preventDefault();
    go(`${basePath}/${total}`);
  }
});
render();
