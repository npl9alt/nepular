const themes = {
  regular: {
    name: "Regular",
    colors: {
      "--bg-primary": "#08080d",
      "--bg-secondary": "rgba(8, 8, 13, 0.8)",
      "--bg-tertiary": "rgba(139, 92, 246, 0.10)",
      "--border-color": "rgba(255, 255, 255, 0.08)",
      "--text-primary": "white",
      "--text-secondary": "#777",
      "--text-muted": "#888",
      "--accent-color": "#9b6cff",
      "--accent-light": "rgba(155, 108, 255, 0.15)",
      "--glow-1": "rgba(125, 70, 255, 0.18)",
      "--glow-2": "rgba(50, 100, 255, 0.12)",
      "--glow-3": "rgba(140, 40, 255, 0.10)",
      "--shadow": "rgba(0, 0, 0, 0.25)",
    }
  },
  ocean: {
    name: "Ocean",
    colors: {
      "--bg-primary": "#0a1628",
      "--bg-secondary": "rgba(10, 22, 40, 0.9)",
      "--bg-tertiary": "rgba(70, 130, 180, 0.10)",
      "--border-color": "rgba(100, 180, 220, 0.15)",
      "--text-primary": "#e0f2ff",
      "--text-secondary": "#7ba3c0",
      "--text-muted": "#5a8aaa",
      "--accent-color": "#00d9ff",
      "--accent-light": "rgba(0, 217, 255, 0.15)",
      "--glow-1": "rgba(0, 150, 200, 0.20)",
      "--glow-2": "rgba(0, 100, 150, 0.12)",
      "--glow-3": "rgba(0, 180, 220, 0.10)",
      "--shadow": "rgba(0, 20, 40, 0.35)",
    }
  },
  violet: {
    name: "Violet Light",
    colors: {
      "--bg-primary": "#f5f0ff",
      "--bg-secondary": "rgba(245, 240, 255, 0.95)",
      "--bg-tertiary": "rgba(200, 150, 255, 0.08)",
      "--border-color": "rgba(150, 100, 200, 0.15)",
      "--text-primary": "#2d1b4e",
      "--text-secondary": "#6b4d85",
      "--text-muted": "#8b6ba8",
      "--accent-color": "#a855ff",
      "--accent-light": "rgba(168, 85, 255, 0.15)",
      "--glow-1": "rgba(168, 85, 255, 0.15)",
      "--glow-2": "rgba(150, 100, 200, 0.10)",
      "--glow-3": "rgba(180, 120, 220, 0.08)",
      "--shadow": "rgba(0, 0, 0, 0.08)",
    }
  },
  space: {
    name: "Space",
    colors: {
      "--bg-primary": "#0d0221",
      "--bg-secondary": "rgba(13, 2, 33, 0.9)",
      "--bg-tertiary": "rgba(100, 50, 150, 0.12)",
      "--border-color": "rgba(150, 100, 200, 0.12)",
      "--text-primary": "#e6d5ff",
      "--text-secondary": "#a890c8",
      "--text-muted": "#8870a8",
      "--accent-color": "#ff00ff",
      "--accent-light": "rgba(255, 0, 255, 0.15)",
      "--glow-1": "rgba(255, 0, 255, 0.20)",
      "--glow-2": "rgba(100, 50, 150, 0.12)",
      "--glow-3": "rgba(150, 100, 200, 0.10)",
      "--shadow": "rgba(0, 0, 0, 0.40)",
    }
  },
  blinding: {
    name: "Blinding Fucking Lite",
    colors: {
      "--bg-primary": "#ffffff",
      "--bg-secondary": "rgba(255, 255, 255, 0.98)",
      "--bg-tertiary": "rgba(200, 150, 255, 0.15)",
      "--border-color": "rgba(0, 0, 0, 0.10)",
      "--text-primary": "#000000",
      "--text-secondary": "#333333",
      "--text-muted": "#666666",
      "--accent-color": "#ff0000",
      "--accent-light": "rgba(255, 0, 0, 0.10)",
      "--glow-1": "rgba(255, 100, 100, 0.10)",
      "--glow-2": "rgba(255, 150, 150, 0.08)",
      "--glow-3": "rgba(255, 200, 200, 0.06)",
      "--shadow": "rgba(0, 0, 0, 0.10)",
    }
  },
  cyberpunk: {
    name: "Cyberpunk",
    colors: {
      "--bg-primary": "#0a0e27",
      "--bg-secondary": "rgba(10, 14, 39, 0.9)",
      "--bg-tertiary": "rgba(255, 0, 127, 0.08)",
      "--border-color": "rgba(0, 255, 200, 0.20)",
      "--text-primary": "#00ffff",
      "--text-secondary": "#ff00ff",
      "--text-muted": "#ffff00",
      "--accent-color": "#ff0080",
      "--accent-light": "rgba(255, 0, 128, 0.15)",
      "--glow-1": "rgba(255, 0, 128, 0.25)",
      "--glow-2": "rgba(0, 255, 200, 0.15)",
      "--glow-3": "rgba(255, 255, 0, 0.10)",
      "--shadow": "rgba(255, 0, 128, 0.20)",
    }
  },
  amoled: {
    name: "AMOLED",
    colors: {
      "--bg-primary": "#000000",
      "--bg-secondary": "rgba(0, 0, 0, 0.95)",
      "--bg-tertiary": "rgba(255, 255, 255, 0.05)",
      "--border-color": "rgba(255, 255, 255, 0.08)",
      "--text-primary": "#ffffff",
      "--text-secondary": "#999999",
      "--text-muted": "#666666",
      "--accent-color": "#00ff00",
      "--accent-light": "rgba(0, 255, 0, 0.10)",
      "--glow-1": "rgba(0, 255, 0, 0.15)",
      "--glow-2": "rgba(0, 200, 100, 0.08)",
      "--glow-3": "rgba(0, 150, 100, 0.06)",
      "--shadow": "rgba(0, 0, 0, 0.50)",
    }
  },
  sunset: {
    name: "Sunset",
    colors: {
      "--bg-primary": "#2d1810",
      "--bg-secondary": "rgba(45, 24, 16, 0.9)",
      "--bg-tertiary": "rgba(255, 150, 100, 0.10)",
      "--border-color": "rgba(255, 200, 100, 0.15)",
      "--text-primary": "#ffe8cc",
      "--text-secondary": "#d9a574",
      "--text-muted": "#b8845a",
      "--accent-color": "#ff6b35",
      "--accent-light": "rgba(255, 107, 53, 0.15)",
      "--glow-1": "rgba(255, 107, 53, 0.20)",
      "--glow-2": "rgba(255, 200, 100, 0.12)",
      "--glow-3": "rgba(255, 150, 100, 0.08)",
      "--shadow": "rgba(0, 0, 0, 0.30)",
    }
  },
  matrix: {
    name: "Matrix",
    colors: {
      "--bg-primary": "#000000",
      "--bg-secondary": "rgba(0, 0, 0, 0.95)",
      "--bg-tertiary": "rgba(0, 100, 50, 0.08)",
      "--border-color": "rgba(0, 255, 100, 0.15)",
      "--text-primary": "#00ff00",
      "--text-secondary": "#00cc00",
      "--text-muted": "#008800",
      "--accent-color": "#00ff00",
      "--accent-light": "rgba(0, 255, 0, 0.15)",
      "--glow-1": "rgba(0, 255, 100, 0.25)",
      "--glow-2": "rgba(0, 200, 80, 0.12)",
      "--glow-3": "rgba(0, 150, 100, 0.08)",
      "--shadow": "rgba(0, 255, 0, 0.10)",
    }
  },
  windows95: {
    name: "Windows 95",
    colors: {
      "--bg-primary": "#c0c0c0",
      "--bg-secondary": "rgba(192, 192, 192, 0.95)",
      "--bg-tertiary": "rgba(100, 100, 100, 0.10)",
      "--border-color": "rgba(0, 0, 0, 0.30)",
      "--text-primary": "#000000",
      "--text-secondary": "#333333",
      "--text-muted": "#666666",
      "--accent-color": "#000080",
      "--accent-light": "rgba(0, 0, 128, 0.15)",
      "--glow-1": "rgba(100, 100, 100, 0.10)",
      "--glow-2": "rgba(80, 80, 80, 0.08)",
      "--glow-3": "rgba(100, 100, 100, 0.06)",
      "--shadow": "rgba(0, 0, 0, 0.20)",
    }
  },
  redblack: {
    name: "Red/Black",
    colors: {
      "--bg-primary": "#1a0000",
      "--bg-secondary": "rgba(26, 0, 0, 0.9)",
      "--bg-tertiary": "rgba(200, 50, 50, 0.10)",
      "--border-color": "rgba(255, 100, 100, 0.15)",
      "--text-primary": "#ffcccc",
      "--text-secondary": "#ff8888",
      "--text-muted": "#cc5555",
      "--accent-color": "#ff3333",
      "--accent-light": "rgba(255, 51, 51, 0.15)",
      "--glow-1": "rgba(255, 51, 51, 0.20)",
      "--glow-2": "rgba(200, 50, 50, 0.12)",
      "--glow-3": "rgba(150, 40, 40, 0.08)",
      "--shadow": "rgba(0, 0, 0, 0.40)",
    }
  },
  rainbow: {
    name: "Rainbow",
    colors: {
      "--bg-primary": "#1a1a2e",
      "--bg-secondary": "rgba(26, 26, 46, 0.9)",
      "--bg-tertiary": "rgba(255, 100, 200, 0.10)",
      "--border-color": "rgba(255, 150, 200, 0.15)",
      "--text-primary": "#ffffff",
      "--text-secondary": "#ffaaff",
      "--text-muted": "#ff88ff",
      "--accent-color": "#ff00ff",
      "--accent-light": "rgba(255, 0, 255, 0.15)",
      "--glow-1": "rgba(255, 0, 255, 0.20)",
      "--glow-2": "rgba(255, 100, 200, 0.12)",
      "--glow-3": "rgba(200, 0, 200, 0.08)",
      "--shadow": "rgba(255, 0, 255, 0.15)",
    }
  }
};

const settingsState = {
  theme: "regular",
  accentColor: "#9b6cff",
  font: "'Arial', Helvetica, sans-serif",
  cursor: "standard",
  blur: true,
  compact: false,
  clock: true
};

const apps = [
  {
    name: "Dogeub",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg8q3uAn_tDtzM13Fe946jX40xUfzMyxG5x0-_Yq-RHw&s=10",
    url: "https://storage.googleapis.com/grammarly/index.html"
  },
  {
    name: "Aether",
    image: "https://cdn.discordapp.com/banners/1545549081823281313/afb50387abe13bafdb52636668fda6bc.webp?size=1024",
    url: "https://s3.amazonaws.com/apbio/study.html"
  },
  {
    name: "Fern",
    image: "https://cdn.discordapp.com/icons/1353774986258808932/2c1b577f08fd3d673a5214d5985a772a.webp?size=1024",
    url: "https://s3.us-east-1.amazonaws.com/sk7v/index.html"
  },
  {
    name: "Lucide",
    image: "https://cdn.discordapp.com/icons/1477428318423879843/a_7aa24351e117877488b0f28d9f7788df.webp?animated=true&size=1024",
    url: "https://s3.amazonaws.com/kahootmath/study"

  }
];


const CURSOR_TYPES = ["standard", "pointer", "blob", "retro"];

function getPage() {
  return document.body.dataset.page || "home";
}

document.addEventListener("DOMContentLoaded", () => {
  // Ensure overlays never start open / blocking
  document.getElementById("settingsOverlay")?.classList.remove("active");
  document.getElementById("secretPage")?.classList.remove("active");

  const page = getPage();
  if (page === "home") initializeGames();
  if (page === "sites") initializeSites();

  initializeThemes();
  initializeCursors();
  initializeAccentPicker();
  initializeFontSelect();
  initializeClock();
  loadSettings();
});

function loadSettings() {
  const saved = localStorage.getItem("nepularSettings");
  if (saved) {
    Object.assign(settingsState, JSON.parse(saved));
  }
  applySettings();
}

function saveSettings() {
  localStorage.setItem("nepularSettings", JSON.stringify(settingsState));
}

function initializeSites() {
  const sitesGrid = document.getElementById("sites-grid");
  const appPages = document.getElementById("app-pages");
  if (!sitesGrid || !appPages) return;

  apps.forEach((app, index) => {
    const pageId = "app-" + index;

    const siteBox = document.createElement("button");
    siteBox.className = "site-box";
    siteBox.type = "button";
    siteBox.innerHTML = `<img src="${app.image}" alt="${app.name}"><span>${app.name}</span>`;
    siteBox.onclick = () => showPage(pageId);
    sitesGrid.appendChild(siteBox);

    const page = document.createElement("main");
    page.id = pageId;
    page.className = "page";
    page.innerHTML = `
      <div class="app-wrapper">
        <button class="back-btn" type="button" onclick="showSitesGrid()">← Back to Sites</button>
        <div class="app-title">
          <img class="app-title-icon" src="${app.image}" alt="${app.name}">
          <span>${app.name}</span>
        </div>
        <div class="iframe-container">
          <iframe src="${app.url}" title="${app.name}" allow="fullscreen"></iframe>
        </div>
      </div>
    `;
    appPages.appendChild(page);
  });
}

function showSitesGrid() {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  const sites = document.getElementById("sites");
  if (sites) sites.classList.add("active");
}

function initializeGames() {
  if (typeof Lumin === "undefined") {
    console.error("Lumin SDK failed to load");
    return;
  }

  Lumin.init({
    container: "#games",
    theme: "dark",
    columns: 8,
    rows: 4,
    gamesPerPage: 32,
    onReady: () => console.log("Nepular ready!"),
    onGameStart: (game) => console.log("Playing:", game.name),
    onGameEnd: () => console.log("Game closed."),
    onError: (err) => console.error("Lumin error:", err)
  });
}

function initializePlayables() {
  playablesPage = 0;
  renderPlayables();
}



function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function initializeThemes() {
  const selector = document.getElementById("themeSelector");
  if (!selector) return;

  Object.keys(themes).forEach(key => {
    const btn = document.createElement("div");
    btn.className = "settings-option";
    if (key === settingsState.theme) btn.classList.add("active");
    btn.textContent = themes[key].name;
    btn.onclick = () => changeTheme(key);
    selector.appendChild(btn);
  });
}

function changeTheme(themeName) {
  settingsState.theme = themeName;
  applyTheme(themeName);
  saveSettings();
  updateThemeUI();
}

function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  if (settingsState.accentColor) {
    document.documentElement.style.setProperty("--accent-color", settingsState.accentColor);
    document.documentElement.style.setProperty("--accent-light", settingsState.accentColor + "26");
  }
}

function updateThemeUI() {
  const keys = Object.keys(themes);
  document.querySelectorAll("#themeSelector .settings-option").forEach((btn, i) => {
    btn.classList.toggle("active", keys[i] === settingsState.theme);
  });
}

function initializeCursors() {
  const selector = document.getElementById("cursorSelector");
  if (!selector) return;

  const cursors = [
    { id: "standard", name: "Standard" },
    { id: "pointer", name: "Crosshair" },
    { id: "blob", name: "Blob" },
    { id: "retro", name: "Retro" }
  ];

  cursors.forEach(cursor => {
    const btn = document.createElement("div");
    btn.className = "settings-option";
    if (cursor.id === settingsState.cursor) btn.classList.add("active");
    btn.textContent = cursor.name;
    btn.onclick = () => changeCursor(cursor.id);
    selector.appendChild(btn);
  });
}

function changeCursor(cursorType) {
  settingsState.cursor = cursorType;
  CURSOR_TYPES.forEach(type => document.body.classList.remove("cursor-" + type));
  document.body.classList.add("cursor-" + cursorType);
  saveSettings();
  updateCursorUI();
}

function updateCursorUI() {
  document.querySelectorAll("#cursorSelector .settings-option").forEach((btn, i) => {
    btn.classList.toggle("active", CURSOR_TYPES[i] === settingsState.cursor);
  });
}

function initializeBackgrounds() {
  const selector = document.getElementById("backgroundSelector");
  if (!selector) return;

  const backgrounds = [
    { id: "default", name: "Default Glow" },
    { id: "particles", name: "Particles" },
    { id: "stars", name: "Stars" },
    { id: "grid", name: "Grid" },
    { id: "none", name: "None" }
  ];

  backgrounds.forEach(bg => {
    const btn = document.createElement("div");
    btn.className = "settings-option";
    if (bg.id === settingsState.background) btn.classList.add("active");
    btn.textContent = bg.name;
    btn.onclick = () => changeBackground(bg.id);
    selector.appendChild(btn);
  });
}

function changeBackground(bgType) {
  settingsState.background = bgType;
  createBackgroundAnimation();
  saveSettings();
  updateBackgroundUI();
}

function updateBackgroundUI() {
  document.querySelectorAll("#backgroundSelector .settings-option").forEach((btn, i) => {
    btn.classList.toggle("active", BG_TYPES[i] === settingsState.background);
  });
}

function createBackgroundAnimation() {
  stopBackgroundLoop();

  BG_TYPES.forEach(type => document.body.classList.remove("bg-" + type));
  document.body.classList.add("bg-" + settingsState.background);

  // Default / none: no overlay element at all (prevents click blocking)
  const existing = document.getElementById("bgParticles");
  if (settingsState.background === "none" || settingsState.background === "default") {
    if (existing) existing.remove();
    return;
  }

  const container = ensureBackgroundContainer();
  container.innerHTML = "";
  container.className = "bg-particles";
  container.style.pointerEvents = "none";
  container.style.zIndex = "-1";
  container.style.position = "fixed";
  container.style.left = "0";
  container.style.top = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.backgroundImage = "";
  container.style.backgroundSize = "";
  container.style.animation = "";

  if (settingsState.background === "particles") {
    startCanvasBackground(container, "particles");
  } else if (settingsState.background === "stars") {
    startCanvasBackground(container, "stars");
  } else if (settingsState.background === "grid") {
    paintGridBackground(container);
  }
}

function paintGridBackground(container) {
  container.classList.add("grid-mode");
  const accent = settingsState.accentColor || "#9b6cff";
  container.style.pointerEvents = "none";
  container.style.zIndex = "-1";
  container.style.backgroundImage =
    `linear-gradient(0deg, ${accent}22 1px, transparent 1px),` +
    `linear-gradient(90deg, ${accent}22 1px, transparent 1px)`;
  container.style.backgroundSize = "48px 48px";
  if (!settingsState.animations) {
    container.style.animation = "none";
  }
}

function startCanvasBackground(container, mode) {
  const canvas = document.createElement("canvas");
  canvas.style.pointerEvents = "none";
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  container.appendChild(canvas);
  const ctx = canvas.getContext("2d", { alpha: true });

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  bgResizeHandler = resize;
  window.addEventListener("resize", resize, { passive: true });

  const count = mode === "stars" ? 50 : 24;
  const dots = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: mode === "stars" ? 0.8 + Math.random() * 1.4 : 1.2 + Math.random() * 1.5,
    speed: mode === "stars" ? 0 : 0.15 + Math.random() * 0.35,
    drift: (Math.random() - 0.5) * 0.2,
    phase: Math.random() * Math.PI * 2,
    twinkle: 0.5 + Math.random() * 1.5
  }));

  const accent = settingsState.accentColor || "#9b6cff";

  const draw = (time) => {
    if (!settingsState.animations) return;
    if (!document.body.contains(canvas)) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const dot of dots) {
      if (mode === "particles") {
        dot.y -= dot.speed;
        dot.x += dot.drift;
        if (dot.y < -4) {
          dot.y = canvas.height + 4;
          dot.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.45;
      } else {
        const alpha = 0.25 + Math.abs(Math.sin((time / 1000) * dot.twinkle + dot.phase)) * 0.75;
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = alpha;
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    bgAnimFrame = requestAnimationFrame(draw);
  };

  if (settingsState.animations) {
    bgAnimFrame = requestAnimationFrame(draw);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const dot of dots) {
      ctx.globalAlpha = mode === "stars" ? 0.5 : 0.4;
      ctx.fillStyle = mode === "stars" ? "#ffffff" : accent;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}

function initializeAccentPicker() {
  const picker = document.getElementById("accentPicker");
  if (!picker) return;

  const colors = [
    "#9b6cff", "#00d9ff", "#ff0080", "#ff6b35", "#00ff00",
    "#ffff00", "#ff0000", "#00ffff", "#ff00ff", "#ffffff"
  ];

  colors.forEach(color => {
    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    swatch.dataset.color = color;
    if (color === settingsState.accentColor) swatch.classList.add("active");
    swatch.style.backgroundColor = color;
    swatch.onclick = () => changeAccentColor(color);
    picker.appendChild(swatch);
  });
}

function changeAccentColor(color) {
  settingsState.accentColor = color;
  document.documentElement.style.setProperty("--accent-color", color);
  document.documentElement.style.setProperty("--accent-light", color + "26");
  if (settingsState.background === "grid" || settingsState.background === "particles") {
    createBackgroundAnimation();
  }
  saveSettings();
  updateAccentUI();
}

function updateAccentUI() {
  document.querySelectorAll(".color-swatch").forEach(swatch => {
    swatch.classList.toggle("active", swatch.dataset.color === settingsState.accentColor);
  });
}

function initializeFontSelect() {
  const fontSelect = document.getElementById("fontSelect");
  if (!fontSelect) return;

  fontSelect.value = settingsState.font;
  fontSelect.addEventListener("change", (e) => {
    settingsState.font = e.target.value;
    document.documentElement.style.setProperty("--font-family", settingsState.font);
    saveSettings();
  });
}

function initializeClock() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const clock = document.getElementById("clock");
  if (!clock) return;

  if (!settingsState.clock) {
    clock.style.display = "none";
    return;
  }

  clock.style.display = "block";
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const day = now.toLocaleDateString("en-US", { weekday: "short" });
  clock.textContent = `${day} ${hours}:${minutes}`;
}

function toggleSetting(setting) {
  settingsState[setting] = !settingsState[setting];

  if (setting === "animations") {
    const toggle = document.getElementById("animToggle");
    if (toggle) toggle.classList.toggle("active", settingsState.animations);
    document.body.classList.toggle("no-animations", !settingsState.animations);
    createBackgroundAnimation();
  }

  if (setting === "blur") {
    const toggle = document.getElementById("blurToggle");
    if (toggle) toggle.classList.toggle("active", settingsState.blur);
    document.body.classList.toggle("no-blur", !settingsState.blur);
  }

  if (setting === "compact") {
    const toggle = document.getElementById("compactToggle");
    if (toggle) toggle.classList.toggle("active", settingsState.compact);
    document.body.classList.toggle("compact-mode", settingsState.compact);
  }

  if (setting === "clock") {
    const toggle = document.getElementById("clockToggle");
    if (toggle) toggle.classList.toggle("active", settingsState.clock);
    updateClock();
  }

  saveSettings();
}

function applySettings() {
  applyTheme(settingsState.theme);
  document.documentElement.style.setProperty("--font-family", settingsState.font);
  document.documentElement.style.setProperty("--accent-color", settingsState.accentColor);
  document.documentElement.style.setProperty("--accent-light", settingsState.accentColor + "26");

  CURSOR_TYPES.forEach(type => document.body.classList.remove("cursor-" + type));
  document.body.classList.add("cursor-" + settingsState.cursor);

  createBackgroundAnimation();

  document.body.classList.toggle("no-animations", !settingsState.animations);
  document.body.classList.toggle("no-blur", !settingsState.blur);
  document.body.classList.toggle("compact-mode", settingsState.compact);

  const animToggle = document.getElementById("animToggle");
  if (animToggle) animToggle.classList.toggle("active", settingsState.animations);

  const blurToggle = document.getElementById("blurToggle");
  if (blurToggle) blurToggle.classList.toggle("active", settingsState.blur);

  const compactToggle = document.getElementById("compactToggle");
  if (compactToggle) compactToggle.classList.toggle("active", settingsState.compact);

  const clockToggle = document.getElementById("clockToggle");
  if (clockToggle) clockToggle.classList.toggle("active", settingsState.clock);

  const fontSelect = document.getElementById("fontSelect");
  if (fontSelect) fontSelect.value = settingsState.font;

  updateThemeUI();
  updateCursorUI();
  updateBackgroundUI();
  updateAccentUI();
  updateClock();
}

function toggleSettings() {
  document.getElementById("settingsOverlay").classList.toggle("active");
}

function closeSettings(event) {
  if (event.target === document.getElementById("settingsOverlay")) {
    toggleSettings();
  }
}

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  const target = document.getElementById(pageId);
  if (target) target.classList.add("active");
}

function goHome() {
  window.location.href = "index.html";
}

function logoClicked() {
  goHome();
}

function triggerEasterEgg() {
  const secret = document.getElementById("secretPage");
  if (secret) secret.classList.add("active");
}

function closeSecret() {
  const secret = document.getElementById("secretPage");
  if (secret) secret.classList.remove("active");
}
