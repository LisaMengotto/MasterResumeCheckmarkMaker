const STORAGE_KEY = "resume-checkmark-maker-state-v2";

const defaultResumeData = {
  header: {
    name: "First Last",
    headline: "Content Strategist and Venture Fellow",
    phone: "",
    email: "",
    linkedin: "",
  },
  summary: {
    title: "Summary",
    text: "Investor-minded content strategist with a scientific background and 6+ years experience architecting narratives around emerging technologies for sophisticated stakeholders. Using systems-level storytelling to combine fast-moving technical signals and cultural shifts into high-conviction, authoritative messaging rationalizing market dynamics. Deeply embedded in the tech zeitgeist across online platforms and in-person startup communities.",
  },
  sections: [
    {
      id: crypto.randomUUID(),
      title: "Relevant Experience",
      entries: [
        {
          id: crypto.randomUUID(),
          role: "Venture Fellow",
          company: "",
          location: "San Francisco, CA",
          dateRange: "2025 - Present",
          blurb: "",
          bullets: [
            {
              id: crypto.randomUUID(),
              text: "Source investment opportunities through ecosystem engagement and qualify founders",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Support due diligence by evaluating product defensibility, market size, competition, and team",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Conduct thematic research, develop theses and domain expertise on emerging markets, technologies, and business models across multiple growing industry sectors",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Contribute to the firm's broader thought environment by translating investment memos and research into written and visual content for internal reference and external audiences",
              selected: true,
            },
          ],
        },
        {
          id: crypto.randomUUID(),
          role: "Content Strategist",
          company: "",
          location: "New York, NY",
          dateRange: "2024 - 2025",
          blurb: "",
          bullets: [
            {
              id: crypto.randomUUID(),
              text: "Served as a trusted strategic content partner to aspiring and early-stage startup founders recalibrating their professional narrative",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Define category framing, ICPs, value propositions, proof points, pre product-market fit strategy, and founder messaging architecture",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Distilled company vision into cohesive messaging map, focused content, and visibility strategy to strengthen founder-market credibility and inspire belief",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Redesigned content marketing workflows to leverage AI tools for operational efficiency",
              selected: true,
            },
          ],
        },
        {
          id: crypto.randomUUID(),
          role: "Editorial Content Manager",
          company: "",
          location: "New York, NY",
          dateRange: "2023 - 2024",
          blurb: "",
          bullets: [
            {
              id: crypto.randomUUID(),
              text: "Partnered directly with the CSO (Chief Scientific Officer) to oversee comprehensive operations of “Pharma’s Almanac,” an $XMM business unit",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Directed cross-functional teams and achieved a 100% on-time delivery rate for multimedia campaigns including interviews, articles, podcasts, webinars, eblasts, social posts, and digital ads",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Developed project plans for 15+ client accounts, defining scope, objectives, deliverables, timelines, and resource allocations",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Cultivated relationships with a global client base, including high-profile accounts",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Orchestrated organic and paid content calendars for a digital magazine, newsletter, and LinkedIn presence, growing engagement significantly during tenure",
              selected: true,
            },
          ],
        },
        {
          id: crypto.randomUUID(),
          role: "Graduate School Research, Teaching and Scientific Consultant Work 2020 - 2023",
          company: "",
          location: "",
          dateRange: "",
          blurb: "",
          bullets: [],
        },
        {
          id: crypto.randomUUID(),
          role: "Product Marketing Manager",
          company: "",
          location: "Hasbrouck Heights, NJ",
          dateRange: "2019 - 2020",
          blurb: "",
          bullets: [
            {
              id: crypto.randomUUID(),
              text: "Partnered directly with the CEO to develop branding and marketing initiatives, contributing to a successful $9M Series A close",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Bridged collaboration between Engineering and Sales to define product vision and roadmap for new ML-powered SaaS platform",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Conducted in-depth landscape trend and competitive research to craft a distinctive UVP and inform go-to-market GTM strategy",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Authored a 9-part blog series and designed supporting graphics as foundational to multi-channel marketing campaigns (content, social, digital, events)",
              selected: true,
            },
          ],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Education",
      entries: [
        {
          id: crypto.randomUUID(),
          role: "Stevens Institute of Technology",
          company: "",
          location: "Hoboken, NJ",
          dateRange: "",
          blurb: "",
          bullets: [
            {
              id: crypto.randomUUID(),
              text: "Master of Science (MS) in Chemistry, with Honor",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Bachelor of Science (BS) in Chemistry, with Honor",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Academic Honors: Stevens Scholar, President's Scholar, Provost Scholar, Center for Healthcare Innovation Scholar",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Coursework: Differential Equations, Multivariable Calculus, Probability and Statistics, Modern Physics, Thermodynamics, Theoretical Chemistry, Applied Quantum Chemistry, Electricity & Magnetism, Mechanics, Engineering Design Lab, Engineering Graphics, Circuits and Systems, Software Architecture and Component-Based Systems, Programming (C++), Algorithmic Thinking (Python), Applied Machine Learning",
              selected: true,
            },
          ],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Community Involvement",
      entries: [
        {
          id: crypto.randomUUID(),
          role: "",
          company: "",
          location: "",
          dateRange: "",
          blurb: "",
          bullets: [
            { id: crypto.randomUUID(), text: "Founderographies: Writing startup founder biographies", selected: true },
            { id: crypto.randomUUID(), text: "Tavern Community: Founding member of the first investor cohort", selected: true },
            { id: crypto.randomUUID(), text: "Founder’s Brew Mixers: Co-hosting NYC series of Founder’s Brew", selected: true },
            { id: crypto.randomUUID(), text: "Side Quest: Attending biweekly hackathons at Fractal Tech in Brooklyn", selected: true },
            { id: crypto.randomUUID(), text: "Stevens iSTEM / Launchpad: Mentoring undergraduate students starting companies", selected: true },
          ],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Skills",
      entries: [
        {
          id: crypto.randomUUID(),
          role: "",
          company: "",
          location: "",
          dateRange: "",
          blurb: "",
          bullets: [
            {
              id: crypto.randomUUID(),
              text: "Marketing & Content Strategy: Market Research, Competitive Analysis, Brand Messaging & Positioning, Thought Leadership & Narrative Development",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Founder Enablement: Right-Hand Execution & Advisory, Coaching & Clarity Conversations, Prioritization & Accountability Routines, Leadership Gap Coverage",
              selected: true,
            },
            {
              id: crypto.randomUUID(),
              text: "Operational Leadership: Cross-Functional Project Management, Stakeholder Alignment, Team Enablement, Workshop Facilitation, Internal Communications & Meeting Design, Strategic Planning & Roadmapping, Resource Allocation",
              selected: true,
            },
          ],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Software Stack",
      entries: [
        {
          id: crypto.randomUUID(),
          role: "",
          company: "",
          location: "",
          dateRange: "",
          blurb: "",
          bullets: [
            { id: crypto.randomUUID(), text: "Microsoft Office: Word, PowerPoint, Visio, Project, Excel, Access, OneNote, Outlook", selected: true },
            { id: crypto.randomUUID(), text: "Google Workspace: Drive, Docs, Sheets, Slides, Forms, Sites, Analytics, Calendar", selected: true },
            { id: crypto.randomUUID(), text: "Knowledge & Collaboration: Slack, Notion, Zoom, Calendly, Granola", selected: true },
            { id: crypto.randomUUID(), text: "Project Management: Jira, Monday.com, ClickUp, Smartsheets, GanttProject", selected: true },
            { id: crypto.randomUUID(), text: "Web Hosting & Content Publishing: WordPress, HubSpot, Issuu, Framer, beehiiv, Substack, Medium, Mailchimp", selected: true },
            { id: crypto.randomUUID(), text: "CRM: Salesforce Compass, HubSpot, Monday.com", selected: true },
            { id: crypto.randomUUID(), text: "Visual Design: Canva, Adobe Illustrator, Adobe InDesign, Adobe XD, Figma", selected: true },
            { id: crypto.randomUUID(), text: "Programming Languages: Python, C++, HTML/CSS, LaTeX", selected: true },
            { id: crypto.randomUUID(), text: "Generative AI Tools: ChatGPT, Codex, Claude, Cursor, Lovable, Bolt.new, Suno, YouDistro, The Oasis", selected: true },
          ],
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: "Links",
      entries: [
        {
          id: crypto.randomUUID(),
          role: "",
          company: "",
          location: "",
          dateRange: "",
          blurb: "",
          bullets: [],
        },
      ],
    },
  ],
};

let state = loadState();

const headerEditor = document.querySelector("#headerEditor");
const summaryEditor = document.querySelector("#summaryEditor");
const sectionsEditor = document.querySelector("#sectionsEditor");
const resumePages = document.querySelector("#resumePages");
const resumeZoomWrap = document.querySelector("#resumeZoomWrap");
const exportFilenameInput = document.querySelector("#exportFilename");
const splitter = document.querySelector("#splitter");
const zoomRange = document.querySelector("#zoomRange");
const zoomValue = document.querySelector("#zoomValue");
const fieldTemplate = document.querySelector("#fieldTemplate");
const textareaTemplate = document.querySelector("#textareaTemplate");
const zoomOutButton = document.querySelector("#zoomOutButton");
const zoomInButton = document.querySelector("#zoomInButton");

let zoomPercent = 100;
let draggingBulletId = null;

document.querySelector("#addSectionButton").addEventListener("click", () => {
  state.sections.push(createEmptySection());
  saveAndRender();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  state = structuredClone(defaultResumeData);
  saveAndRender();
});

document.querySelector("#exportPdfButton").addEventListener("click", exportPdf);
zoomRange.addEventListener("input", (event) => setZoom(Number(event.target.value)));
zoomOutButton.addEventListener("click", () => setZoom(zoomPercent - 5));
zoomInButton.addEventListener("click", () => setZoom(zoomPercent + 5));

window.addEventListener("beforeprint", syncFilenameToTitle);

initSplitter();
render();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(defaultResumeData);

  try {
    return normalizeState(JSON.parse(saved));
  } catch {
    return structuredClone(defaultResumeData);
  }
}

function saveAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function normalizeState(candidate) {
  const normalized = structuredClone(candidate);

  if (!Array.isArray(normalized.sections)) {
    return structuredClone(defaultResumeData);
  }

  normalized.header = {
    ...defaultResumeData.header,
    ...(normalized.header || {}),
    name: "First Last",
    phone: "",
    email: "",
    linkedin: "",
  };

  const existingTitles = new Set(normalized.sections.map((section) => section.title));

  defaultResumeData.sections.forEach((defaultSection) => {
    if (!existingTitles.has(defaultSection.title)) {
      normalized.sections.push(structuredClone(defaultSection));
    }
  });

  const experienceSection = normalized.sections.find((section) => section.title === "Relevant Experience");
  if (experienceSection && Array.isArray(experienceSection.entries)) {
    experienceSection.entries.forEach((entry) => {
      entry.company = "";
      entry.blurb = "";
      entry.dateRange = removeMonthsFromDateRange(entry.dateRange || "");
    });

    const hasGradLine = experienceSection.entries.some(
      (entry) => entry.role === "Graduate School Research, Teaching and Scientific Consultant Work 2020 - 2023",
    );

    if (!hasGradLine) {
      const defaultExperience = defaultResumeData.sections.find(
        (section) => section.title === "Relevant Experience",
      );
      const gradLine = defaultExperience?.entries.find(
        (entry) => entry.role === "Graduate School Research, Teaching and Scientific Consultant Work 2020 - 2023",
      );

      if (gradLine) {
        const enhatchIndex = experienceSection.entries.findIndex((entry) => entry.company === "Enhatch");
        if (enhatchIndex >= 0) {
          experienceSection.entries.splice(enhatchIndex, 0, structuredClone(gradLine));
        } else {
          experienceSection.entries.push(structuredClone(gradLine));
        }
      }
    }
  }

  const linksSection = normalized.sections.find((section) => section.title === "Links");
  if (linksSection && Array.isArray(linksSection.entries)) {
    linksSection.entries = linksSection.entries.map((entry) => ({
      ...entry,
      role: "",
      company: "",
      location: "",
      dateRange: "",
      blurb: "",
      bullets: [],
    }));
  }

  return normalized;
}

function removeMonthsFromDateRange(value) {
  return value
    .replace(
      /\b(Jan|January|Feb|February|Mar|March|Apr|April|May|Jun|June|Jul|July|Aug|August|Sep|Sept|September|Oct|October|Nov|November|Dec|December)\b\.?/gi,
      "",
    )
    .replace(/\s*[–-]\s*/g, " - ")
    .replace(/\s{2,}/g, " ")
    .replace(/^\s+|\s+$/g, "");
}

function render() {
  exportFilenameInput.value ||= "Lisa-Mengotto-Resume.pdf";
  renderHeaderEditor();
  renderSummaryEditor();
  renderSectionsEditor();
  renderResumePreview();
  syncZoomUI();
}

function renderHeaderEditor() {
  headerEditor.innerHTML = "";

  headerEditor.append(
    createField("Name", state.header.name, (value) => {
      state.header.name = value;
      saveAndRender();
    }),
    createField("Headline", state.header.headline, (value) => {
      state.header.headline = value;
      saveAndRender();
    }),
    createField("Phone", state.header.phone, (value) => {
      state.header.phone = value;
      saveAndRender();
    }),
    createField("Email", state.header.email, (value) => {
      state.header.email = value;
      saveAndRender();
    }),
    createField("LinkedIn", state.header.linkedin, (value) => {
      state.header.linkedin = value;
      saveAndRender();
    }),
  );
}

function renderSummaryEditor() {
  summaryEditor.innerHTML = "";

  summaryEditor.append(
    createField("Section Title", state.summary.title, (value) => {
      state.summary.title = value;
      saveAndRender();
    }),
    createTextarea("Summary Text", state.summary.text, (value) => {
      state.summary.text = value;
      saveAndRender();
    }),
  );
}

function renderSectionsEditor() {
  sectionsEditor.innerHTML = "";

  state.sections.forEach((section) => {
    const sectionCard = document.createElement("article");
    sectionCard.className = "section-card stack";

    const top = document.createElement("div");
    top.className = "section-card__top";

    const title = document.createElement("div");
    title.className = "section-card__title";
    title.textContent = section.title || "Untitled Section";

    const actions = document.createElement("div");
    actions.className = "inline-actions";
    actions.append(
      tinyButton("Add Entry", () => {
        section.entries.push(createEmptyEntry());
        saveAndRender();
      }),
      tinyButton("Delete Section", () => {
        state.sections = state.sections.filter((item) => item.id !== section.id);
        saveAndRender();
      }, "danger"),
    );

    top.append(title, actions);

    sectionCard.append(
      top,
      createField("Section Title", section.title, (value) => {
        section.title = value;
        saveAndRender();
      }),
    );

    const entryList = document.createElement("div");
    entryList.className = "entry-list";

    section.entries.forEach((entry) => {
      entryList.append(createEntryEditor(section, entry));
    });

    sectionCard.append(entryList);
    sectionsEditor.append(sectionCard);
  });
}

function createEntryEditor(section, entry) {
  const card = document.createElement("article");
  card.className = "entry-card stack";

  const top = document.createElement("div");
  top.className = "entry-card__top";

  const title = document.createElement("div");
  title.className = "entry-card__title";
  title.textContent = formatEntryLabel(entry);

  const actions = document.createElement("div");
  actions.className = "inline-actions";
  actions.append(
    tinyButton("Add Bullet", () => {
      entry.bullets.push(createEmptyBullet());
      saveAndRender();
    }),
    tinyButton("Delete Entry", () => {
      section.entries = section.entries.filter((item) => item.id !== entry.id);
      saveAndRender();
    }, "danger"),
  );

  top.append(title, actions);
  card.append(top);

  const metaGrid = document.createElement("div");
  metaGrid.className = "sheet-meta";
  metaGrid.append(
    createSheetInput("Role", entry.role, (value) => {
      entry.role = value;
      saveAndRender();
    }),
    createSheetInput("Company", entry.company, (value) => {
      entry.company = value;
      saveAndRender();
    }),
    createSheetInput("Location", entry.location, (value) => {
      entry.location = value;
      saveAndRender();
    }),
    createSheetInput("Dates", entry.dateRange, (value) => {
      entry.dateRange = value;
      saveAndRender();
    }),
  );

  const blurbRow = createSheetTextarea("Blurb", entry.blurb, (value) => {
    entry.blurb = value;
    saveAndRender();
  });

  card.append(metaGrid, blurbRow);

  const bulletList = document.createElement("div");
  bulletList.className = "bullet-list";

  entry.bullets.forEach((bullet) => {
    const bulletRow = document.createElement("div");
    bulletRow.className = "bullet-row sheet-bullet-row";
    bulletRow.draggable = true;
    bulletRow.dataset.bulletId = bullet.id;
    bulletRow.addEventListener("dragstart", (event) => {
      draggingBulletId = bullet.id;
      bulletRow.classList.add("is-dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", bullet.id);
    });
    bulletRow.addEventListener("dragend", () => {
      draggingBulletId = null;
      bulletRow.classList.remove("is-dragging");
    });
    bulletRow.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (draggingBulletId && draggingBulletId !== bullet.id) {
        bulletRow.classList.add("is-drop-target");
      }
    });
    bulletRow.addEventListener("dragleave", () => {
      bulletRow.classList.remove("is-drop-target");
    });
    bulletRow.addEventListener("drop", (event) => {
      event.preventDefault();
      bulletRow.classList.remove("is-drop-target");
      reorderBullets(entry, draggingBulletId, bullet.id);
    });

    const main = document.createElement("div");
    main.className = "bullet-row__main";

    const dragHandle = document.createElement("button");
    dragHandle.type = "button";
    dragHandle.className = "drag-handle";
    dragHandle.textContent = "⋮⋮";
    dragHandle.tabIndex = -1;

    const check = document.createElement("input");
    check.className = "check";
    check.type = "checkbox";
    check.checked = bullet.selected;
    check.addEventListener("change", (event) => {
      bullet.selected = event.target.checked;
      saveAndRender();
    });

    const textArea = document.createElement("textarea");
    textArea.className = "field__textarea";
    textArea.value = bullet.text;
    textArea.rows = 2;
    textArea.addEventListener("change", (event) => {
      bullet.text = event.target.value;
      saveAndRender();
    });

    main.append(dragHandle, check, textArea);

    const actions = document.createElement("div");
    actions.className = "inline-actions";
    actions.append(
      tinyButton("Duplicate", () => {
        entry.bullets.push({
          id: crypto.randomUUID(),
          text: bullet.text,
          selected: bullet.selected,
        });
        saveAndRender();
      }),
      tinyButton("Delete", () => {
        entry.bullets = entry.bullets.filter((item) => item.id !== bullet.id);
        saveAndRender();
      }, "danger"),
    );

    bulletRow.append(main, actions);
    bulletList.append(bulletRow);
  });

  card.append(bulletList);
  return card;
}

function renderResumePreview() {
  resumePages.innerHTML = "";

  let currentPage = appendNewPage();
  currentPage.body.append(createSummarySection());

  state.sections.forEach((section, sectionIndex) => {
    currentPage = appendSectionTitleToPage(currentPage, sectionIndex);

    section.entries.forEach((entry, entryIndex) => {
      const entryNode = createEntryNode(sectionIndex, entryIndex, entry);
      currentPage.body.append(entryNode);

      if (pageIsOverflowing(currentPage.body)) {
        currentPage.body.removeChild(entryNode);
        currentPage = appendNewPage();
        currentPage = appendSectionTitleToPage(currentPage, sectionIndex);
        currentPage.body.append(entryNode);
      }
    });
  });

  applyBindings();
}

function applyBindings() {
  resumePages.querySelectorAll("[data-binding]").forEach((node) => {
    const value = getValueByBinding(node.dataset.binding) ?? "";
    if (node.textContent !== value) {
      node.textContent = value;
    }

    node.addEventListener("blur", () => {
      setValueByBinding(node.dataset.binding, node.textContent.trim());
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      render();
    });
  });
}

function getValueByBinding(binding) {
  return binding.split(".").reduce((current, key) => {
    if (current == null) return current;
    return /^\d+$/.test(key) ? current[Number(key)] : current[key];
  }, state);
}

function setValueByBinding(binding, value) {
  const keys = binding.split(".");
  const lastKey = keys.pop();
  const target = keys.reduce((current, key) => {
    return /^\d+$/.test(key) ? current[Number(key)] : current[key];
  }, state);

  target[/^\d+$/.test(lastKey) ? Number(lastKey) : lastKey] = value;
}

function exportPdf() {
  syncFilenameToTitle();
  window.print();
}

function setZoom(nextZoom) {
  zoomPercent = Math.max(60, Math.min(140, nextZoom));
  syncZoomUI();
}

function syncZoomUI() {
  const scale = zoomPercent / 100;
  zoomRange.value = String(zoomPercent);
  zoomValue.textContent = `${zoomPercent}%`;
  resumeZoomWrap.style.transform = `scale(${scale})`;
  resumeZoomWrap.style.height = `${resumePages.offsetHeight * scale}px`;
}

function initSplitter() {
  let isDragging = false;

  const updateWidth = (clientX) => {
    const min = 340;
    const max = Math.floor(window.innerWidth * 0.72);
    const width = Math.max(min, Math.min(clientX, max));
    document.documentElement.style.setProperty("--sidebar-width", `${width}px`);
  };

  splitter.addEventListener("mousedown", (event) => {
    isDragging = true;
    document.body.style.userSelect = "none";
    updateWidth(event.clientX);
  });

  window.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    updateWidth(event.clientX);
  });

  window.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    document.body.style.userSelect = "";
  });

  splitter.addEventListener("keydown", (event) => {
    const current = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--sidebar-width"),
      10,
    ) || Math.floor(window.innerWidth * 0.5);

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      updateWidth(current - 24);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      updateWidth(current + 24);
    }
  });
}

function syncFilenameToTitle() {
  const rawName = exportFilenameInput.value.trim() || "Lisa-Mengotto-Resume.pdf";
  const safeName = rawName.toLowerCase().endsWith(".pdf") ? rawName : `${rawName}.pdf`;
  document.title = safeName;
}

function createField(label, value, onChange) {
  const fragment = fieldTemplate.content.firstElementChild.cloneNode(true);
  fragment.querySelector(".field__label").textContent = label;
  const input = fragment.querySelector(".field__input");
  input.value = value ?? "";
  input.addEventListener("change", (event) => onChange(event.target.value));
  return fragment;
}

function createTextarea(label, value, onChange) {
  const fragment = textareaTemplate.content.firstElementChild.cloneNode(true);
  fragment.querySelector(".field__label").textContent = label;
  const input = fragment.querySelector(".field__textarea");
  input.value = value ?? "";
  input.addEventListener("change", (event) => onChange(event.target.value));
  return fragment;
}

function tinyButton(label, onClick, extraClass = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `tiny-button ${extraClass}`.trim();
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function createSheetInput(label, value, onChange) {
  const field = document.createElement("label");
  field.className = "sheet-cell";

  const span = document.createElement("span");
  span.className = "sheet-cell__label";
  span.textContent = label;

  const input = document.createElement("input");
  input.className = "sheet-cell__input";
  input.type = "text";
  input.value = value ?? "";
  input.placeholder = label;
  input.addEventListener("change", (event) => onChange(event.target.value));

  field.append(span, input);
  return field;
}

function createSheetTextarea(label, value, onChange) {
  const field = document.createElement("label");
  field.className = "sheet-cell sheet-cell--wide";

  const span = document.createElement("span");
  span.className = "sheet-cell__label";
  span.textContent = label;

  const input = document.createElement("textarea");
  input.className = "sheet-cell__textarea";
  input.rows = 2;
  input.value = value ?? "";
  input.placeholder = label;
  input.addEventListener("change", (event) => onChange(event.target.value));

  field.append(span, input);
  return field;
}

function createEmptySection() {
  return {
    id: crypto.randomUUID(),
    title: "New Section",
    entries: [createEmptyEntry()],
  };
}

function createEmptyEntry() {
  return {
    id: crypto.randomUUID(),
    role: "New Role",
    company: "Company",
    location: "City, ST",
    dateRange: "Start - End",
    blurb: "Write a one-line descriptor for this company or role.",
    bullets: [createEmptyBullet()],
  };
}

function createEmptyBullet() {
  return {
    id: crypto.randomUUID(),
    text: "New resume bullet",
    selected: true,
  };
}

function formatEntryLabel(entry) {
  const segments = [];

  if (entry.role) segments.push(entry.role);
  if (entry.company) segments.push(`@ ${entry.company}`);
  if (entry.location) segments.push(`(${entry.location})`);
  if (entry.dateRange) segments.push(entry.dateRange);

  return segments.join(" ").trim() || "Untitled Entry";
}

function reorderBullets(entry, sourceId, targetId) {
  if (!sourceId || sourceId === targetId) return;

  const sourceIndex = entry.bullets.findIndex((bullet) => bullet.id === sourceId);
  const targetIndex = entry.bullets.findIndex((bullet) => bullet.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;

  const [moved] = entry.bullets.splice(sourceIndex, 1);
  entry.bullets.splice(targetIndex, 0, moved);
  saveAndRender();
}

function appendNewPage() {
  const page = document.createElement("article");
  page.className = "resume-page";

  page.append(createHeaderNode());

  const body = document.createElement("div");
  body.className = "resume-page__body";
  page.append(body);

  resumePages.append(page);
  return { page, body };
}

function createHeaderNode() {
  const header = document.createElement("header");
  header.className = "resume-header";
  header.innerHTML = `
    <div>
      <h1 class="resume-name" contenteditable="true" spellcheck="false" data-binding="header.name"></h1>
      <p class="resume-headline" contenteditable="true" spellcheck="false" data-binding="header.headline"></p>
    </div>
    <div class="resume-contact">
      <p contenteditable="true" spellcheck="false" data-binding="header.phone"></p>
      <p contenteditable="true" spellcheck="false" data-binding="header.email"></p>
      <p contenteditable="true" spellcheck="false" data-binding="header.linkedin"></p>
    </div>
  `;
  return header;
}

function createSummarySection() {
  const summarySection = document.createElement("section");
  summarySection.className = "resume-summary-section";
  summarySection.innerHTML = `
    <h2 class="resume-section__title" contenteditable="true" spellcheck="false" data-binding="summary.title"></h2>
    <p class="resume-summary" contenteditable="true" spellcheck="false" data-binding="summary.text"></p>
  `;
  return summarySection;
}

function appendSectionTitleToPage(currentPage, sectionIndex) {
  const title = createSectionTitleNode(sectionIndex);
  currentPage.body.append(title);

  if (pageIsOverflowing(currentPage.body)) {
    currentPage.body.removeChild(title);
    currentPage = appendNewPage();
    currentPage.body.append(createSectionTitleNode(sectionIndex));
  }

  return currentPage;
}

function createSectionTitleNode(sectionIndex) {
  const sectionTitle = document.createElement("h2");
  sectionTitle.className = "resume-section__title";
  sectionTitle.contentEditable = "true";
  sectionTitle.spellcheck = false;
  sectionTitle.dataset.binding = `sections.${sectionIndex}.title`;
  sectionTitle.textContent = state.sections[sectionIndex].title;
  return sectionTitle;
}

function createEntryNode(sectionIndex, entryIndex, entry) {
  const entryNode = document.createElement("article");
  entryNode.className = "resume-entry";

  const selectedBullets = entry.bullets.filter((bullet) => bullet.selected && bullet.text.trim());
  const hasHeading = entry.role || entry.company || entry.location || entry.dateRange;
  const hasBlurb = Boolean(entry.blurb);

  if (hasHeading) {
    const heading = document.createElement("div");
    heading.className = "resume-entry__heading";

    const left = document.createElement("div");
    const roleLine = document.createElement("div");
    roleLine.className = "resume-entry__role-line";

    if (entry.role) {
      const role = document.createElement("span");
      role.className = "resume-entry__role";
      role.contentEditable = "true";
      role.spellcheck = false;
      role.dataset.binding = `sections.${sectionIndex}.entries.${entryIndex}.role`;
      role.textContent = entry.role;
      roleLine.append(role);
    }

    if (entry.company) {
      if (entry.role) {
        const at = document.createElement("span");
        at.textContent = "@";
        roleLine.append(at);
      }
      const company = document.createElement("span");
      company.contentEditable = "true";
      company.spellcheck = false;
      company.dataset.binding = `sections.${sectionIndex}.entries.${entryIndex}.company`;
      company.textContent = entry.company;
      roleLine.append(company);
    }

    if (entry.location) {
      if (entry.role || entry.company) {
        const open = document.createElement("span");
        open.textContent = "(";
        roleLine.append(open);
      }
      const location = document.createElement("span");
      location.contentEditable = "true";
      location.spellcheck = false;
      location.dataset.binding = `sections.${sectionIndex}.entries.${entryIndex}.location`;
      location.textContent = entry.location;
      roleLine.append(location);
      if (entry.role || entry.company) {
        const close = document.createElement("span");
        close.textContent = ")";
        roleLine.append(close);
      }
    }

    left.append(roleLine);

    if (hasBlurb) {
      const blurb = document.createElement("p");
      blurb.className = "resume-entry__blurb";
      blurb.contentEditable = "true";
      blurb.spellcheck = false;
      blurb.dataset.binding = `sections.${sectionIndex}.entries.${entryIndex}.blurb`;
      blurb.textContent = entry.blurb;
      left.append(blurb);
    }

    heading.append(left);

    if (entry.dateRange) {
      const date = document.createElement("div");
      date.className = "resume-entry__date";
      date.contentEditable = "true";
      date.spellcheck = false;
      date.dataset.binding = `sections.${sectionIndex}.entries.${entryIndex}.dateRange`;
      date.textContent = entry.dateRange;
      heading.append(date);
    }

    entryNode.append(heading);
  } else if (hasBlurb) {
    const blurb = document.createElement("p");
    blurb.className = "resume-entry__blurb";
    blurb.contentEditable = "true";
    blurb.spellcheck = false;
    blurb.dataset.binding = `sections.${sectionIndex}.entries.${entryIndex}.blurb`;
    blurb.textContent = entry.blurb;
    entryNode.append(blurb);
  }

  if (selectedBullets.length) {
    const list = document.createElement("ul");
    list.className = "resume-entry__bullets";

    selectedBullets.forEach((bullet) => {
      const originalIndex = entry.bullets.findIndex((item) => item.id === bullet.id);
      const listItem = document.createElement("li");
      listItem.contentEditable = "true";
      listItem.spellcheck = false;
      listItem.dataset.binding = `sections.${sectionIndex}.entries.${entryIndex}.bullets.${originalIndex}.text`;
      listItem.textContent = bullet.text;
      list.append(listItem);
    });

    entryNode.append(list);
  }

  return entryNode;
}

function pageIsOverflowing(pageBody) {
  return pageBody.scrollHeight > pageBody.clientHeight;
}
