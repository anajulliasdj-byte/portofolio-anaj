
/* =====================================================
   CURSOR PERSONALIZADO
===================================================== */

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", (e) => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }

  if (blur) {
    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";
  }
});

/* =====================================================
   PARTICLES
===================================================== */

const particles = document.getElementById("particles");

if (particles) {
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.width = Math.random() * 4 + "px";
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration =
      Math.random() * 20 + 10 + "s";
    particle.style.opacity = Math.random();

    particles.appendChild(particle);
  }
}

/* =====================================================
   RELÓGIO
===================================================== */

function updateClock() {
  const clock = document.getElementById("clock");

  if (!clock) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

/* =====================================================
   SCROLL REVEAL
===================================================== */

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
revealElements();

/* =====================================================
   BOTÃO ENTRAR
===================================================== */

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
  enterBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const about = document.querySelector("#about");

    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/* =====================================================
   EFEITO DE LUZ NOS CARDS
===================================================== */

const hoverCards = document.querySelectorAll(
  ".project-card, .course-card, .album-card"
);

hoverCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(168,85,247,0.25),
        rgba(255,255,255,0.03)
      )
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,0.04)";
  });
});

/* =====================================================
   LINKS SUAVES DO MENU
===================================================== */

const navLinks = document.querySelectorAll(".sidebar nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) return;

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =====================================================
   PARALLAX
===================================================== */

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.style.backgroundPositionY =
      window.scrollY * 0.5 + "px";
  }
});

/* =====================================================
   GLOW NAS HABILIDADES
===================================================== */

const tags = document.querySelectorAll(".tags span");

tags.forEach((tag) => {
  tag.addEventListener("mouseenter", () => {
    if (cursor) {
      cursor.style.transform =
        "translate(-50%,-50%) scale(2)";
    }
  });

  tag.addEventListener("mouseleave", () => {
    if (cursor) {
      cursor.style.transform =
        "translate(-50%,-50%) scale(1)";
    }
  });
});

/* =====================================================
   LUZES DE FUNDO
===================================================== */

function createGlow() {
  const glow = document.createElement("div");

  glow.style.position = "fixed";
  glow.style.width = "300px";
  glow.style.height = "300px";
  glow.style.borderRadius = "50%";

  glow.style.background = "rgba(168,85,247,0.05)";
  glow.style.filter = "blur(100px)";
  glow.style.left = Math.random() * 100 + "%";
  glow.style.top = Math.random() * 100 + "%";
  glow.style.zIndex = "-3";
  glow.style.pointerEvents = "none";

  document.body.appendChild(glow);
}

for (let i = 0; i < 8; i++) {
  createGlow();
}

/* =====================================================
   DADOS DOS PROJETOS
===================================================== */

const projectDetails = {
  "Iniciação Banco de dados": {
    label: "Banco de dados",
    description:
      "Projeto de introdução aos fundamentos de banco de dados. A proposta é compreender como as informações podem ser organizadas, estruturadas e gerenciadas para serem utilizadas em sistemas e aplicações.",
    objective:
      "Desenvolver conhecimentos iniciais sobre organização de dados, modelagem de informações e a importância de manter os dados estruturados.",
    learning:
      "A atividade contribuiu para o desenvolvimento do raciocínio lógico e para a compreensão de conceitos fundamentais da área de Tecnologia da Informação.",
    technologies: ["Banco de dados", "Organização de informações", "Modelagem de dados"]
  },

  "Foguete OBAFOG": {
    label: "Ciência e engenharia",
    description:
      "Projeto desenvolvido no contexto da Olimpíada Brasileira de Astronomia e Astronáutica (OBA), envolvendo a construção e o lançamento de um foguete feito com garrafa PET.",
    objective:
      "Aplicar conhecimentos científicos na construção do foguete, considerando planejamento, funcionamento e trabalho em equipe.",
    learning:
      "A experiência permitiu relacionar conceitos de física e engenharia com uma atividade prática, além de exercitar a colaboração e a resolução de problemas.",
    technologies: ["Física", "Astronáutica", "Construção de foguetes", "Trabalho em equipe"]
  },

  "Feira Científica": {
    label: "Conscientização",
    description:
      "Projeto educativo criado para a feira científica, com foco na conscientização sobre os riscos associados ao cigarro eletrônico. O conteúdo procura apresentar informações que contribuam para a prevenção e para escolhas mais conscientes.",
    objective:
      "Compartilhar informações educativas sobre os riscos do cigarro eletrônico e incentivar hábitos de vida mais saudáveis.",
    learning:
      "O projeto envolveu pesquisa, organização de informações e comunicação de um tema de saúde pública por meio de um recurso digital.",
    technologies: ["Pesquisa", "Comunicação digital", "Educação em saúde"],
    links: [
      {
        text: "Ver projeto de conscientização",
        url: "https://sites.google.com/educacao.org.br/cigarroeletronico/in%C3%ADcio"
      }
    ]
  },

  "Arrecadamento para o rio grande do Sul": {
    label: "Projeto solidário",
    description:
      "Iniciativa solidária voltada à arrecadação de doações para apoiar pessoas afetadas pelas enchentes no Rio Grande do Sul.",
    objective:
      "Incentivar a colaboração e contribuir com uma campanha de apoio às famílias atingidas pelas enchentes.",
    learning:
      "A experiência destaca a importância da responsabilidade social, da organização e da participação coletiva em ações solidárias.",
    technologies: ["Organização", "Colaboração", "Responsabilidade social"]
  },

  "Projeto conscientização do racismo": {
    label: "Educação e igualdade",
    description:
      "Projeto educativo desenvolvido para conscientizar sobre o racismo e a discriminação. Reúne informações que promovem o respeito à diversidade, a igualdade e a valorização das pessoas.",
    objective:
      "Ampliar a conscientização sobre o racismo, incentivar o respeito e divulgar informações educativas sobre o tema.",
    learning:
      "O desenvolvimento do projeto envolveu pesquisa, seleção de conteúdo e comunicação de informações relevantes para a sociedade.",
    technologies: ["Pesquisa", "Educação digital", "Comunicação"],
    links: [
      {
        text: "Ver projeto antirracista",
        url: "https://sites.google.com/educacao.org.br/siteantirracista/in%C3%ADcio"
      }
    ]
  },

  "Projeto Juri simulado": {
    label: "Argumentação e pensamento crítico",
    description:
      "Atividade escolar de júri simulado baseada em um caso fictício. A participação foi como advogada de acusação, com análise das informações apresentadas e elaboração de argumentos.",
    objective:
      "Simular uma situação de julgamento para exercitar argumentação, análise crítica, comunicação e participação em equipe.",
    learning:
      "A atividade contribuiu para desenvolver a capacidade de organizar ideias, apresentar argumentos e participar de uma discussão estruturada.",
    technologies: ["Argumentação", "Oratória", "Pensamento crítico", "Trabalho em equipe"]
  }
};

/* =====================================================
   CRIAR A JANELA DE DETALHES
===================================================== */

const projectModal = document.createElement("div");

projectModal.className = "project-modal";
projectModal.id = "projectModal";

projectModal.setAttribute("role", "dialog");
projectModal.setAttribute("aria-modal", "true");
projectModal.setAttribute("aria-labelledby", "projectModalTitle");
projectModal.setAttribute("aria-hidden", "true");

projectModal.innerHTML = `
  <div class="project-modal-content">

    <button
      type="button"
      class="project-modal-close"
      aria-label="Fechar detalhes do projeto"
    >&times;</button>

    <span class="project-modal-label" id="projectModalLabel">
      DETALHES DO PROJETO
    </span>

    <h2 id="projectModalTitle"></h2>

    <img
      class="project-modal-image"
      id="projectModalImage"
      alt=""
    >

    <h3>Sobre o projeto</h3>
    <p id="projectModalDescription"></p>

    <h3>Objetivo</h3>
    <p id="projectModalObjective"></p>

    <h3>Aprendizados e habilidades</h3>
    <p id="projectModalLearning"></p>

    <h3>Tecnologias e conhecimentos</h3>
    <div class="project-modal-tags" id="projectModalTags"></div>

    <div class="project-modal-links" id="projectModalLinks"></div>

  </div>
`;

document.body.appendChild(projectModal);

const modalCloseButton = projectModal.querySelector(
  ".project-modal-close"
);

let lastFocusedElement = null;

/* =====================================================
   ABRIR A JANELA DE UM PROJETO
===================================================== */

function openProjectModal(card) {
  const titleElement = card.querySelector(".project-content h3");

  if (!titleElement) return;

  const title = titleElement.textContent.trim();
  const details = projectDetails[title];

  if (!details) {
    console.warn("Não foram cadastrados detalhes para:", title);
    return;
  }

  lastFocusedElement = card;

  const image = card.querySelector("img");
  const modalImage = document.getElementById("projectModalImage");

  document.getElementById("projectModalTitle").textContent = title;
  document.getElementById("projectModalLabel").textContent =
    details.label || "Detalhes do projeto";

  document.getElementById("projectModalDescription").textContent =
    details.description;

  document.getElementById("projectModalObjective").textContent =
    details.objective;

  document.getElementById("projectModalLearning").textContent =
    details.learning;

  if (image && image.getAttribute("src")) {
    modalImage.src = image.getAttribute("src");
    modalImage.alt = "Imagem do projeto: " + title;
    modalImage.hidden = false;
  } else {
    modalImage.hidden = true;
    modalImage.removeAttribute("src");
  }

  const tagsContainer = document.getElementById("projectModalTags");
  tagsContainer.replaceChildren();

  details.technologies.forEach((technology) => {
    const tag = document.createElement("span");

    tag.textContent = technology;
    tagsContainer.appendChild(tag);
  });

  const linksContainer = document.getElementById("projectModalLinks");
  linksContainer.replaceChildren();

  if (details.links && details.links.length > 0) {
    details.links.forEach((item) => {
      const link = document.createElement("a");

      link.textContent = item.text;
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      linksContainer.appendChild(link);
    });
  }

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modalCloseButton.focus();
}

/* =====================================================
   FECHAR A JANELA
===================================================== */

function closeProjectModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

modalCloseButton.addEventListener("click", closeProjectModal);

/* Fechar ao clicar no fundo escuro */

projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeProjectModal();
  }
});

/* Fechar com a tecla Escape */

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    projectModal.classList.contains("open")
  ) {
    closeProjectModal();
  }
});

/* =====================================================
   TORNAR OS PROJETOS CLICÁVEIS
===================================================== */

const projectCards = document.querySelectorAll(
  "#projects .project-card"
);

projectCards.forEach((card) => {
  const titleElement = card.querySelector(".project-content h3");

  if (!titleElement) return;

  const title = titleElement.textContent.trim();

  if (!projectDetails[title]) return;

  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute(
    "aria-label",
    "Ver detalhes do projeto " + title
  );

  card.addEventListener("click", (e) => {
    // Permite que os links existentes continuem funcionando.
    if (e.target.closest("a")) return;

    openProjectModal(card);
  });

  card.addEventListener("keydown", (e) => {
    // Evita abrir a janela quando o usuário navega pelos links.
    if (e.target.closest("a")) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProjectModal(card);
    }
  });
});

