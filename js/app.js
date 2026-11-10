/**
 * Minecity Roleplay - Main Interactive Application Script
 * Router, live search, tables filter, multi-language dynamic rendering, and clipboard actions.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Theme Management
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("minecity_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("minecity_theme", next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(theme) {
    themeToggle.innerHTML = theme === "dark" ? "🌙" : "☀️";
  }

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const sidebar = document.getElementById("sidebar");
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Language Selector
  const langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.value = I18N.currentLocale;
    langSelect.addEventListener("change", (e) => {
      I18N.setLocale(e.target.value);
    });
  }

  document.addEventListener("minecity:language-changed", () => {
    applyTranslations();
  });

  // Enhanced Tab & Anchor Navigation
  const tabContents = document.querySelectorAll(".tab-content");
  const allSidebarLinks = document.querySelectorAll(".sidebar-link");

  function navigateTo(tabId, sectionId = null) {
    // Determine the tab if not explicitly given
    if (!tabId && sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const parentTab = targetElement.closest(".tab-content");
        if (parentTab) {
          tabId = parentTab.id.replace("tab-", "");
        }
      }
    }

    if (!tabId) tabId = "overview";

    // Switch tab visibility
    tabContents.forEach(tab => tab.classList.remove("active"));
    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) {
      targetTab.classList.add("active");
    }

    // Update active highlight in sidebar
    allSidebarLinks.forEach(l => l.classList.remove("active"));
    let activeLink = null;
    if (sectionId) {
      activeLink = document.querySelector(`.sidebar-link[href="#${sectionId}"]`);
    }
    if (!activeLink) {
      activeLink = document.querySelector(`.sidebar-link[data-tab="${tabId}"][href="#"]`) ||
                   document.querySelector(`.sidebar-link[data-tab="${tabId}"]`);
    }
    if (activeLink) activeLink.classList.add("active");

    // Close mobile drawer if opened
    if (sidebar && sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    }

    // Smooth scroll to the specific target section or top
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Intercept all internal navigation clicks
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const dataTab = link.getAttribute("data-tab");
    const href = link.getAttribute("href");

    // Check if this is an in-app navigation link
    if (dataTab || (href && href.startsWith("#"))) {
      e.preventDefault();
      let sectionId = null;
      let tabId = dataTab;

      if (href && href.startsWith("#") && href.length > 1) {
        sectionId = href.substring(1);
      }

      navigateTo(tabId, sectionId);

      // Update URL hash cleanly
      const newHash = sectionId ? `#${sectionId}` : (tabId ? `#tab-${tabId}` : "");
      if (newHash && window.location.hash !== newHash) {
        history.pushState(null, null, newHash);
      }
    }
  });

  // Handle URL hash on initial load or browser back/forward
  function handleUrlHash() {
    if (!window.location.hash || window.location.hash.length <= 1) return;
    const hash = window.location.hash.substring(1);
    if (hash.startsWith("tab-")) {
      navigateTo(hash.replace("tab-", ""), null);
    } else {
      const el = document.getElementById(hash);
      if (el) {
        if (el.classList.contains("tab-content")) {
          navigateTo(hash.replace("tab-", ""), null);
        } else {
          const parentTab = el.closest(".tab-content");
          const tabId = parentTab ? parentTab.id.replace("tab-", "") : null;
          navigateTo(tabId, hash);
        }
      } else if (document.getElementById(`tab-${hash}`)) {
        navigateTo(hash, null);
      }
    }
  }

  window.addEventListener("popstate", handleUrlHash);
  handleUrlHash();

  // Render Dynamic Tables
  renderCommandsTable();
  renderPermissionsTable();
  renderPlaceholdersTable();
  renderVideoGallery();
  applyTranslations();

  // Global Search Setup
  const searchInput = document.getElementById("globalSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      handleGlobalSearch(e.target.value.toLowerCase().trim());
    });
  }

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  // Copy to clipboard helper
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("copy-btn")) {
      const text = e.target.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(() => {
        const original = e.target.innerText;
        e.target.innerText = I18N.t("copiedText");
        setTimeout(() => {
          e.target.innerText = original;
        }, 1500);
      });
    }
  });
});

// Render Commands Table
function renderCommandsTable() {
  const container = document.getElementById("commandsTableBody");
  const filterCategory = document.getElementById("cmdCategoryFilter");
  const searchInput = document.getElementById("cmdSearchInput");
  if (!container) return;

  function update() {
    const cat = filterCategory ? filterCategory.value : "ALL";
    const q = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = MINECITY_DATA.commands.filter(cmd => {
      const matchCat = cat === "ALL" || cmd.category === cat;
      const matchQuery = !q || cmd.command.toLowerCase().includes(q) || 
                         cmd.aliases.toLowerCase().includes(q) || 
                         cmd.desc.toLowerCase().includes(q) ||
                         cmd.plugin.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    container.innerHTML = filtered.map(cmd => `
      <tr>
        <td>
          <code>${cmd.command}</code>
          <button class="copy-btn" data-copy="${cmd.command}">${I18N.t("copyText")}</button>
        </td>
        <td><small>${cmd.aliases}</small></td>
        <td><span class="badge badge-perm">${cmd.permission}</span></td>
        <td><span class="badge badge-plugin">${cmd.plugin}</span></td>
        <td>${cmd.desc}</td>
      </tr>
    `).join("");
  }

  if (filterCategory) filterCategory.addEventListener("change", update);
  if (searchInput) searchInput.addEventListener("input", update);
  update();
}

// Render Permissions Table
function renderPermissionsTable() {
  const container = document.getElementById("permissionsTableBody");
  const filterGroup = document.getElementById("permGroupFilter");
  const searchInput = document.getElementById("permSearchInput");
  if (!container) return;

  function update() {
    const group = filterGroup ? filterGroup.value : "ALL";
    const q = searchInput ? searchInput.value.toLowerCase().trim() : "";

    const filtered = MINECITY_DATA.permissions.filter(p => {
      const matchGroup = group === "ALL" || p.group.includes(group);
      const matchQuery = !q || p.node.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return matchGroup && matchQuery;
    });

    container.innerHTML = filtered.map(p => `
      <tr>
        <td>
          <code>${p.node}</code>
          <button class="copy-btn" data-copy="${p.node}">${I18N.t("copyText")}</button>
        </td>
        <td><span class="badge badge-perm">${p.group}</span></td>
        <td><span class="badge ${p.default === 'op' ? 'badge-op' : 'badge-true'}">${p.default}</span></td>
        <td>${p.desc}</td>
      </tr>
    `).join("");
  }

  if (filterGroup) filterGroup.addEventListener("change", update);
  if (searchInput) searchInput.addEventListener("input", update);
  update();
}

// Render Placeholders Table
function renderPlaceholdersTable() {
  const container = document.getElementById("placeholdersTableBody");
  const searchInput = document.getElementById("papiSearchInput");
  if (!container) return;

  function update() {
    const q = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const filtered = MINECITY_DATA.placeholders.filter(p => {
      return !q || p.placeholder.toLowerCase().includes(q) || 
             p.desc.toLowerCase().includes(q) || 
             p.plugin.toLowerCase().includes(q);
    });

    container.innerHTML = filtered.map(p => `
      <tr>
        <td>
          <code>${p.placeholder}</code>
          <button class="copy-btn" data-copy="${p.placeholder}">${I18N.t("copyText")}</button>
        </td>
        <td><span class="badge badge-plugin">${p.plugin}</span></td>
        <td><strong>${p.example}</strong></td>
        <td>${p.desc}</td>
      </tr>
    `).join("");
  }

  if (searchInput) searchInput.addEventListener("input", update);
  update();
}

// Render Video Gallery
function renderVideoGallery() {
  const container = document.getElementById("videoGallery");
  if (!container) return;

  container.innerHTML = MINECITY_DATA.videos.map(v => `
    <div class="video-card">
      <div class="video-thumb">
        <iframe src="https://www.youtube.com/embed/${v.youtubeId}" allowfullscreen loading="lazy" title="${v.title}"></iframe>
      </div>
      <div class="video-info">
        <span class="badge badge-plugin" style="align-self: flex-start; margin-bottom: 8px;">${v.category}</span>
        <h4>${v.title}</h4>
        <p>${v.description}</p>
        <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.82rem; padding: 0.5rem 1rem;">
          ▶️ ${I18N.t("watchOnYouTube")}
        </a>
      </div>
    </div>
  `).join("");
}

// Apply Multi-Language Translations to DOM
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = I18N.t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", I18N.t(key));
  });

  // Refresh dynamic table translations
  renderCommandsTable();
  renderPermissionsTable();
  renderPlaceholdersTable();
}

// Global Live Search Across Tabs
function handleGlobalSearch(q) {
  if (!q) return;
  // If user searches for a command starting with slash
  if (q.startsWith("/")) {
    const cmdLink = document.querySelector('[data-tab="commands"]');
    if (cmdLink) {
      cmdLink.click();
      const cmdSearch = document.getElementById("cmdSearchInput");
      if (cmdSearch) {
        cmdSearch.value = q;
        cmdSearch.dispatchEvent(new Event("input"));
      }
    }
  }
}
