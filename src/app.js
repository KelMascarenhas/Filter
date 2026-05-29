const data = window.FILTR_DATA;
const app = document.querySelector("#app");
const state = { search: "" };

const routes = [
  { path: "/", label: "Portal", render: renderHome },
  { path: "/noticias", label: "Notícias", render: renderNews },
  { path: "/artistas", label: "Artistas", render: renderArtists },
  { path: "/produtos", label: "Produtos", render: renderProducts },
  { path: "/login", label: "Login", render: renderLogin },
  { path: "/studio", label: "Studio", render: renderStudioHome },
  { path: "/studio/distribuicao", label: "Distribuição", render: renderDistribution },
  { path: "/studio/academy", label: "Academy", render: renderAcademy }
];

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
  const isStudio = routePath().startsWith("/studio");
  return `
    <header class="topbar">
      <a class="brand" href="#/" aria-label="Voltar para o portal Filtr">
        <span class="brand-mark">F</span>
        <span><strong>FILTR</strong><small>Portal + Studio</small></span>
      </a>
      <nav class="nav-links" aria-label="Navegação principal">
        <a class="${active("/")}" href="#/">Portal</a>
        <a class="${active("/noticias")}" href="#/noticias">Notícias</a>
        <a class="${active("/artistas")}" href="#/artistas">Artistas</a>
        <a class="${active("/produtos")}" href="#/produtos">Produtos</a>
        <a class="nav-cta ${isStudio ? "active" : ""}" href="#/studio">Entrar no Studio</a>
      </nav>
    </header>
    ${content}
    <footer class="footer">
      <div>
        <strong>FILTR mock MVP</strong>
        <span>Protótipo navegável sem banco, sem autenticação real e com dados fictícios.</span>
      </div>
      <a href="#/login">Acesso mockado</a>
    </footer>
  `;
}

function heroVisual() {
  return `
    <div class="hero-visual" aria-hidden="true">
      <img src="assets/hero-system.svg" alt="" />
      <div class="floating-card card-a">
        <span>Distribuição</span>
        <strong>7 etapas</strong>
      </div>
      <div class="floating-card card-b">
        <span>Relevância</span>
        <strong>94 score</strong>
      </div>
      <div class="floating-card card-c">
        <span>Academy</span>
        <strong>24 aulas</strong>
      </div>
    </div>
  `;
}

function metricCards() {
  return `<div class="metrics-grid">${data.metrics.map(item => `
    <article class="metric-card">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <small><b>${item.delta}</b> ${item.hint}</small>
    </article>
  `).join("")}</div>`;
}

function newsCard(item) {
  return `
    <article class="news-card">
      <img src="${item.image}" alt="Arte editorial: ${item.kicker}" />
      <div class="news-card-body">
        <div class="eyebrow-row"><span>${item.kicker}</span><small>${item.date} · ${item.readTime}</small></div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <a class="text-link" href="#/noticias/${item.slug}">Ler mock →</a>
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
        <small>${artist.genre} · ${artist.city}</small>
        <p>${artist.insight}</p>
        <div class="tag-row"><span>${artist.stage}</span><span>${artist.growth} crescimento</span></div>
      </div>
    </article>
  `;
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-icon">${product.icon}</div>
      <span class="pill">${product.tag}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <small>Status: ${product.status}</small>
    </article>
  `;
}

function renderHome() {
  const allResults = [
    ...data.news.map(n => ({ type: "Notícia", title: n.title, desc: n.excerpt, href: `#/noticias/${n.slug}` })),
    ...data.artists.map(a => ({ type: "Artista", title: a.name, desc: `${a.genre} · score ${a.score}`, href: "#/artistas" })),
    ...data.products.map(p => ({ type: "Produto", title: p.name, desc: p.description, href: "#/produtos" }))
  ];
  const q = state.search.trim().toLowerCase();
  const filtered = q ? allResults.filter(item => `${item.title} ${item.desc} ${item.type}`.toLowerCase().includes(q)).slice(0, 6) : [];

  return shell(`
    <main>
      <section class="hero-section">
        <div class="hero-copy">
          <span class="section-kicker">Portal de notícias + produtos + inteligência</span>
          <h1>Um ecossistema Filtr para apresentar artistas, distribuir lançamentos e formar equipes.</h1>
          <p>Este MVP é 100% mockado e navegável para apresentação: portal público, login simulado, Studio interno, distribuição e Academy.</p>
          <div class="hero-actions">
            <a class="button primary" href="#/studio">Abrir Studio mockado</a>
            <a class="button secondary" href="#/noticias">Ver portal</a>
          </div>
        </div>
        ${heroVisual()}
      </section>

      ${metricCards()}

      <section class="search-panel">
        <div>
          <span class="section-kicker">Busca interna mockada</span>
          <h2>Busque por artistas, produtos, notícias ou processos</h2>
        </div>
        <label class="search-box">
          <span>⌕</span>
          <input id="portal-search" type="search" placeholder="Ex.: Academy, Lua Mota, distribuição..." value="${state.search}" autocomplete="off" />
        </label>
        <div class="search-results">
          ${filtered.length ? filtered.map(item => `
            <a class="result-row" href="${item.href}">
              <span>${item.type}</span>
              <strong>${item.title}</strong>
              <small>${item.desc}</small>
            </a>
          `).join("") : `<p class="muted">Digite algo para simular a busca dentro do portal.</p>`}
        </div>
      </section>

      <section class="split-section">
        <div>
          <div class="section-heading">
            <span class="section-kicker">Destaques editoriais</span>
            <h2>Notícias e narrativas do portal</h2>
          </div>
          <div class="stack-list">${data.news.slice(0, 2).map(newsCard).join("")}</div>
        </div>
        <aside class="panel-card">
          <span class="section-kicker">Roteiro da demo</span>
          <h3>Fluxo de apresentação sugerido</h3>
          <ol class="demo-list">
            <li>Mostrar o portal público e a busca.</li>
            <li>Entrar no Studio com login fake.</li>
            <li>Abrir Distribuição e explicar o pipeline.</li>
            <li>Abrir Academy como primeiro produto educacional.</li>
          </ol>
          <a class="button primary full" href="#/login">Simular login</a>
        </aside>
      </section>

      <section class="section-block">
        <div class="section-heading inline">
          <div>
            <span class="section-kicker">Radar de artistas</span>
            <h2>Relevância artística mockada</h2>
          </div>
          <a class="text-link" href="#/artistas">Ver todos →</a>
        </div>
        <div class="artist-grid compact">${data.artists.slice(0, 3).map(artistCard).join("")}</div>
      </section>
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
        <span class="section-kicker">Portal editorial</span>
        <h1>Notícias, cases e inteligência Filtr</h1>
        <p>Área pública para apresentar o conceito, a cultura, artistas em destaque e produtos do ecossistema.</p>
      </section>
      <div class="news-grid">${data.news.map(newsCard).join("")}</div>
    </main>
  `);
}

function renderNewsDetail(slug) {
  const item = data.news.find(news => news.slug === slug) || data.news[0];
  return shell(`
    <main class="article-page">
      <a class="back-link" href="#/noticias">← Voltar para notícias</a>
      <article class="article-card">
        <img src="${item.image}" alt="Arte editorial: ${item.kicker}" />
        <div class="article-content">
          <span class="section-kicker">${item.kicker} · ${item.date}</span>
          <h1>${item.title}</h1>
          <p class="lead">${item.excerpt}</p>
          ${item.body.map(paragraph => `<p>${paragraph}</p>`).join("")}
          <div class="article-actions">
            <a class="button primary" href="#/studio">Ver no Studio</a>
            <a class="button secondary" href="#/produtos">Conhecer produtos</a>
          </div>
        </div>
      </article>
    </main>
  `);
}

function renderArtists() {
  const ranked = [...data.artists].sort((a, b) => b.score - a.score);
  return shell(`
    <main class="page-wrap">
      <section class="page-hero small">
        <span class="section-kicker">Artist relevance</span>
        <h1>Radar de artistas</h1>
        <p>Uma camada visual para mostrar relevância, momento, praça, gênero e oportunidade de desenvolvimento.</p>
      </section>
      <div class="artist-grid">${ranked.map(artistCard).join("")}</div>
    </main>
  `);
}

function renderProducts() {
  return shell(`
    <main class="page-wrap">
      <section class="page-hero small">
        <span class="section-kicker">Produtos Filtr</span>
        <h1>Do portal ao Studio: produtos atuais e futuros</h1>
        <p>Para a demo, Distribution e Academy aparecem como módulos iniciais. Os demais produtos ficam como visão de roadmap.</p>
      </section>
      <div class="product-grid">${data.products.map(productCard).join("")}</div>
    </main>
  `);
}

function renderLogin() {
  return shell(`
    <main class="login-page">
      <section class="login-card">
        <div class="login-copy">
          <span class="section-kicker">Acesso mockado</span>
          <h1>Entre no Filtr Studio</h1>
          <p>Login apenas visual para apresentação. O botão leva direto ao Studio, sem autenticação real.</p>
          <div class="mock-credentials">
            <span>demo@filtr.com</span>
            <span>qualquer senha</span>
          </div>
        </div>
        <form class="login-form" onsubmit="event.preventDefault(); window.location.hash='/studio';">
          <label>E-mail<input type="email" value="demo@filtr.com" /></label>
          <label>Senha<input type="password" value="filtrdemo" /></label>
          <button class="button primary full" type="submit">Entrar no Studio</button>
          <a class="text-link center" href="#/">Voltar para o portal</a>
        </form>
      </section>
    </main>
  `);
}

function studioShell(content, title, kicker = "Filtr Studio") {
  return shell(`
    <main class="studio-layout">
      <aside class="studio-sidebar">
        <div class="studio-user">
          <div class="avatar">F</div>
          <div><strong>Filtr Team</strong><small>Demo workspace</small></div>
        </div>
        <nav aria-label="Navegação do Studio">
          <a class="${routePath() === "/studio" ? "active" : ""}" href="#/studio">Dashboard</a>
          <a class="${active("/studio/distribuicao")}" href="#/studio/distribuicao">Distribuição</a>
          <a class="${active("/studio/academy")}" href="#/studio/academy">Academy</a>
          <a href="#/artistas">Radar de artistas</a>
          <a href="#/produtos">Produtos</a>
        </nav>
        <div class="sidebar-note">
          <span>Modo apresentação</span>
          <strong>Mock navegável</strong>
        </div>
      </aside>
      <section class="studio-content">
        <div class="studio-heading">
          <div>
            <span class="section-kicker">${kicker}</span>
            <h1>${title}</h1>
          </div>
          <a class="button secondary" href="#/">Sair para portal</a>
        </div>
        ${content}
      </section>
    </main>
  `);
}

function renderStudioHome() {
  return studioShell(`
    ${metricCards()}
    <section class="studio-grid">
      <article class="panel-card large">
        <div class="section-heading inline">
          <div><span class="section-kicker">Pipeline</span><h2>Lançamentos em andamento</h2></div>
          <a class="text-link" href="#/studio/distribuicao">Abrir distribuição →</a>
        </div>
        ${releaseTable(data.releases.slice(0, 4))}
      </article>
      <article class="panel-card">
        <span class="section-kicker">Pendências</span>
        <h2>Atividades de hoje</h2>
        <div class="task-list">
          ${data.tasks.map(task => `
            <div class="task-row">
              <div><strong>${task.label}</strong><small>${task.due}</small></div>
              <span class="status ${currencyClass(task.status)}">${task.status}</span>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="panel-card">
        <span class="section-kicker">Academy</span>
        <h2>Trilhas em progresso</h2>
        ${data.academy.slice(0, 3).map(courseMini).join("")}
        <a class="button primary full" href="#/studio/academy">Abrir Academy</a>
      </article>
    </section>
  `, "Dashboard operacional");
}

function releaseTable(releases) {
  return `
    <div class="table-wrap">
      <table>
        <thead><tr><th>Artista</th><th>Lançamento</th><th>Data</th><th>Status</th><th>Progresso</th><th>Dono</th></tr></thead>
        <tbody>
          ${releases.map(release => `
            <tr>
              <td>${release.artist}</td>
              <td><strong>${release.title}</strong></td>
              <td>${release.date}</td>
              <td><span class="status ${currencyClass(release.status)}">${release.status}</span></td>
              <td><div class="progress"><span style="width:${release.progress}%"></span></div></td>
              <td>${release.owner}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function stepper() {
  return `<div class="stepper">${data.distributionSteps.map((step, index) => `
    <div class="step ${index < 4 ? "done" : index === 4 ? "current" : ""}">
      <span>${index + 1}</span>
      <strong>${step}</strong>
    </div>
  `).join("")}</div>`;
}

function renderDistribution() {
  return studioShell(`
    <section class="panel-card large">
      <div class="section-heading inline">
        <div>
          <span class="section-kicker">Processo principal</span>
          <h2>Distribuição guiada</h2>
        </div>
        <button class="button primary" type="button">Novo lançamento mock</button>
      </div>
      ${stepper()}
    </section>
    <section class="studio-grid two">
      <article class="panel-card large">
        <span class="section-kicker">Release board</span>
        <h2>Fila de lançamentos</h2>
        ${releaseTable(data.releases)}
      </article>
      <article class="panel-card">
        <span class="section-kicker">Checklist padrão</span>
        <h2>O que a operação valida</h2>
        <ul class="check-list">
          <li>Metadados completos e consistentes</li>
          <li>Capa, Canvas e arquivos em formato correto</li>
          <li>ISRC, UPC, compositores e splits revisados</li>
          <li>Plano de marketing e pitch preparados</li>
          <li>Calendário de creators e conteúdo aprovado</li>
          <li>Monitoramento pós-lançamento ativado</li>
        </ul>
      </article>
    </section>
  `, "Distribuição", "Studio / Operações");
}

function courseMini(course) {
  return `
    <div class="course-mini">
      <div><strong>${course.title}</strong><small>${course.level} · ${course.duration}</small></div>
      <div class="progress"><span style="width:${course.progress}%"></span></div>
    </div>
  `;
}

function courseCard(course) {
  return `
    <article class="course-card">
      <span class="pill">${course.level}</span>
      <h3>${course.title}</h3>
      <p>${course.modules} módulos · ${course.duration}</p>
      <div class="progress"><span style="width:${course.progress}%"></span></div>
      <small>${course.progress}% concluído</small>
    </article>
  `;
}

function renderAcademy() {
  return studioShell(`
    <section class="academy-hero panel-card large">
      <div>
        <span class="section-kicker">Produto inicial</span>
        <h2>Academy como porta de entrada para padronizar operação e formar mercado</h2>
        <p>Trilhas mockadas para explicar como a Filtr educa artistas, managers, creators e times internos.</p>
      </div>
      <div class="certificate-card">
        <span>Certificado mock</span>
        <strong>Filtr Distribution Ready</strong>
        <small>Emitido após conclusão da trilha essencial</small>
      </div>
    </section>
    <div class="course-grid">${data.academy.map(courseCard).join("")}</div>
  `, "Academy", "Studio / Educação");
}

function render() {
  const path = routePath();
  const route = routes.find(item => item.path === path) || (path.startsWith("/noticias/") ? { render: renderNews } : routes[0]);
  app.innerHTML = route.render();
  bindInteractions();
  window.scrollTo(0, 0);
}

function bindInteractions() {
  const search = document.querySelector("#portal-search");
  if (search) {
    search.addEventListener("input", event => {
      state.search = event.target.value;
      const results = document.querySelector(".search-results");
      const q = state.search.trim().toLowerCase();
      const allResults = [
        ...data.news.map(n => ({ type: "Notícia", title: n.title, desc: n.excerpt, href: `#/noticias/${n.slug}` })),
        ...data.artists.map(a => ({ type: "Artista", title: a.name, desc: `${a.genre} · score ${a.score}`, href: "#/artistas" })),
        ...data.products.map(p => ({ type: "Produto", title: p.name, desc: p.description, href: "#/produtos" }))
      ];
      const filtered = q ? allResults.filter(item => `${item.title} ${item.desc} ${item.type}`.toLowerCase().includes(q)).slice(0, 6) : [];
      results.innerHTML = filtered.length ? filtered.map(item => `
        <a class="result-row" href="${item.href}">
          <span>${item.type}</span><strong>${item.title}</strong><small>${item.desc}</small>
        </a>`).join("") : `<p class="muted">Digite algo para simular a busca dentro do portal.</p>`;
    });
  }
}

window.addEventListener("hashchange", render);
render();
