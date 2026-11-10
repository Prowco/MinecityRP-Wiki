/**
 * Minecity Roleplay - Main Interactive Application Script
 * 100% Full Dynamic Multi-Language Rendering Engine,
 * Reliable Navigation without scroll jumps, GTA Styling,
 * Real-time Filterable Tables & 17-Video Gallery.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Theme Management (Dark by default, GTA styling)
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("minecity_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("minecity_theme", next);
      updateThemeIcon(next);
    });
  }

  function updateThemeIcon(theme) {
    if (themeToggle) {
      themeToggle.innerHTML = theme === "dark" ? "🌙" : "☀️";
    }
  }

  // Mobile Menu Drawer
  const mobileToggle = document.getElementById("mobileToggle");
  const sidebar = document.getElementById("sidebar");
  if (mobileToggle && sidebar) {
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

  // Listen for language changes and re-render everything
  document.addEventListener("minecity:language-changed", (e) => {
    if (langSelect && e.detail && e.detail.locale) {
      langSelect.value = e.detail.locale;
    }
    renderAllContent();
  });

  // =========================================================================
  // RELIABLE NAVIGATION & SCROLL HANDLER (NO JUMP TO TOP!)
  // =========================================================================
  const tabContents = document.querySelectorAll(".tab-content");
  const allSidebarLinks = document.querySelectorAll(".sidebar-link");

  function navigateTo(tabId, sectionId = null) {
    // If no tabId was given but a sectionId was, find its container
    if (!tabId && sectionId) {
      const targetEl = document.getElementById(sectionId);
      if (targetEl) {
        const parentTab = targetEl.closest(".tab-content");
        if (parentTab) {
          tabId = parentTab.id.replace("tab-", "");
        }
      }
    }

    if (!tabId) tabId = "overview";

    // 1. Activate target tab
    tabContents.forEach(tab => tab.classList.remove("active"));
    const activeTabEl = document.getElementById(`tab-${tabId}`);
    if (activeTabEl) {
      activeTabEl.classList.add("active");
    }

    // 2. Highlight active sidebar link
    allSidebarLinks.forEach(l => l.classList.remove("active"));
    let targetLink = null;
    if (sectionId) {
      targetLink = document.querySelector(`.sidebar-link[href="#${sectionId}"]`);
    }
    if (!targetLink) {
      targetLink = document.querySelector(`.sidebar-link[data-tab="${tabId}"][href="#"]`) ||
                   document.querySelector(`.sidebar-link[data-tab="${tabId}"]`);
    }
    if (targetLink) targetLink.classList.add("active");

    // 3. Close mobile drawer if open
    if (sidebar && sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    }

    // 4. Scroll to section accurately or top of tab
    if (sectionId) {
      // Use double requestAnimationFrame to guarantee layout pass after display:block
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const headerHeight = 84;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Intercept all clicks on internal links
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const dataTab = link.getAttribute("data-tab");
    const href = link.getAttribute("href");

    if (dataTab || (href && href.startsWith("#"))) {
      e.preventDefault();
      let sectionId = null;
      let tabId = dataTab;

      if (href && href.startsWith("#") && href.length > 1) {
        sectionId = href.substring(1);
      }

      navigateTo(tabId, sectionId);

      // Clean URL hash update
      const newHash = sectionId ? `#${sectionId}` : (tabId ? `#tab-${tabId}` : "");
      if (newHash && window.location.hash !== newHash) {
        history.pushState(null, null, newHash);
      }
    }
  });

  // Handle URL hash on initial load or popstate
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

  // Initial Content Render
  renderAllContent();
  handleUrlHash();

  // Global Search Setup (Ctrl+K)
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

// =========================================================================
// DYNAMIC 100% CONTENT RENDERING ENGINE
// =========================================================================
function renderAllContent() {
  document.title = I18N.t("siteTitle");

  // 1. Text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = I18N.t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", I18N.t(key));
  });

  // 2. Render Full Player Guide Chapters
  renderPlayerGuide();

  // 3. Render Full Admin Guide Chapters
  renderAdminGuide();

  // 4. Render Dynamic Tables & Video Gallery
  renderCommandsTable();
  renderPermissionsTable();
  renderPlaceholdersTable();
  renderVideoGallery();
}

// Render Player Guide Chapters
function renderPlayerGuide() {
  const container = document.getElementById("playerGuideContainer");
  if (!container) return;

  const chapters = I18N.getGuides("player");

  container.innerHTML = chapters.map(ch => {
    let videoHtml = "";
    if (ch.videoId) {
      const vObj = MINECITY_DATA.videos.find(v => v.youtubeId === ch.videoId);
      const vTitle = vObj ? getLocalized(vObj, "title") : (ch.videoTitle || "");
      videoHtml = `
        <div class="video-card guide-video-embed">
          <div class="video-thumb">
            <iframe src="https://www.youtube.com/embed/${ch.videoId}" allowfullscreen loading="lazy" title="${vTitle}"></iframe>
          </div>
          <div class="video-info" style="padding: 0.8rem 1.1rem;">
            <small style="color: var(--gta-yellow); font-weight: 800; text-transform: uppercase; font-size: 0.75rem;">${I18N.t("videoWalkthrough")}</small>
            <h4 style="font-size: 0.98rem; margin: 4px 0;">${vTitle}</h4>
          </div>
        </div>
      `;
    }

    return `
      <article id="${ch.id}" class="guide-section">
        <h2 class="section-title"><span>${ch.icon}</span> ${ch.title}</h2>
        ${ch.content}
        ${videoHtml}
      </article>
    `;
  }).join("");
}

// Render Admin Guide Chapters
function renderAdminGuide() {
  const container = document.getElementById("adminGuideContainer");
  if (!container) return;

  const chapters = I18N.getGuides("admin");

  container.innerHTML = chapters.map(ch => `
    <article id="${ch.id}" class="guide-section">
      <h2 class="section-title"><span>${ch.icon}</span> ${ch.title}</h2>
      ${ch.content}
    </article>
  `).join("");
}

// Helper to retrieve localized text for any object field
function getLocalized(obj, field = "desc") {
  const lang = I18N.currentLocale;
  if (!obj) return "";
  if (obj[field] && typeof obj[field] === "object") {
    return obj[field][lang] || obj[field].en || obj[field].es || "";
  }
  const plural = field + "s";
  if (obj[plural] && typeof obj[plural] === "object") {
    return obj[plural][lang] || obj[plural].en || obj[plural].es || "";
  }
  if (obj[field + "_" + lang]) {
    return obj[field + "_" + lang];
  }
  return obj[field] || "";
}

// Render Master Commands Table
function renderCommandsTable() {
  const tbody = document.getElementById("commandsTableBody");
  const filterSelect = document.getElementById("cmdCategoryFilter");
  const searchInput = document.getElementById("cmdSearchInput");
  if (!tbody) return;

  const selectedCat = filterSelect ? filterSelect.value : "ALL";
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = MINECITY_DATA.commands.filter(c => {
    const matchesCat = (selectedCat === "ALL" || c.category === selectedCat);
    const desc = getLocalized(c, "desc");
    const matchesSearch = !query ||
      c.command.toLowerCase().includes(query) ||
      c.aliases.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query) ||
      c.plugin.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  tbody.innerHTML = filtered.map(c => {
    const desc = getLocalized(c, "desc");
    return `
      <tr>
        <td>
          <code style="font-weight: 700;">${c.command}</code>
          <button class="copy-btn" data-copy="${c.command.split(' ')[0]}">${I18N.t("copyText")}</button>
        </td>
        <td><code>${c.aliases}</code></td>
        <td><span class="badge badge-plugin">${c.permission}</span></td>
        <td><strong>${c.plugin}</strong></td>
        <td>${desc}</td>
      </tr>
    `;
  }).join("");

  if (filterSelect && !filterSelect.dataset.initialized) {
    filterSelect.dataset.initialized = "true";
    filterSelect.addEventListener("change", renderCommandsTable);
  }
  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = "true";
    searchInput.addEventListener("input", renderCommandsTable);
  }
}

// Render Permissions Table
function renderPermissionsTable() {
  const tbody = document.getElementById("permissionsTableBody");
  if (!tbody) return;

  tbody.innerHTML = MINECITY_DATA.permissions.map(p => {
    const desc = getLocalized(p, "desc");
    return `
      <tr>
        <td>
          <code>${p.node}</code>
          <button class="copy-btn" data-copy="${p.node}">${I18N.t("copyText")}</button>
        </td>
        <td><span class="badge badge-plugin">${p.group}</span></td>
        <td>${p.defaultState}</td>
        <td>${desc}</td>
      </tr>
    `;
  }).join("");
}

// Render Placeholders Table
function renderPlaceholdersTable() {
  const tbody = document.getElementById("placeholdersTableBody");
  if (!tbody) return;

  tbody.innerHTML = MINECITY_DATA.placeholders.map(p => {
    const desc = getLocalized(p, "desc");
    return `
      <tr>
        <td>
          <code>${p.placeholder}</code>
          <button class="copy-btn" data-copy="${p.placeholder}">${I18N.t("copyText")}</button>
        </td>
        <td><strong>${p.plugin}</strong></td>
        <td><code style="color: var(--accent-green); background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3);">${p.example}</code></td>
        <td>${desc}</td>
      </tr>
    `;
  }).join("");
}

// Render Video Gallery (All 17 Real Minecity Videos)
function renderVideoGallery() {
  const container = document.getElementById("videoGallery");
  if (!container) return;

  container.innerHTML = MINECITY_DATA.videos.map(v => {
    const title = getLocalized(v, "title");
    const desc = getLocalized(v, "desc") || getLocalized(v, "description");

    return `
      <div class="video-card">
        <div class="video-thumb">
          <iframe src="https://www.youtube.com/embed/${v.youtubeId}" allowfullscreen loading="lazy" title="${title}"></iframe>
        </div>
        <div class="video-info">
          <span class="badge badge-plugin" style="align-self: flex-start; margin-bottom: 8px;">${v.category}</span>
          <h4>${title}</h4>
          <p>${desc}</p>
          <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size: 0.82rem; padding: 0.5rem 1rem;">
            ▶️ ${I18N.t("watchOnYouTube")}
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Global Live Search Across Tabs
function handleGlobalSearch(q) {
  if (!q) return;
  if (q.startsWith("/")) {
    const cmdLink = document.querySelector('[data-tab="commands"]');
    if (cmdLink) {
      cmdLink.click();
      const cmdSearch = document.getElementById("cmdSearchInput");
      if (cmdSearch) {
        cmdSearch.value = q;
        renderCommandsTable();
      }
    }
  }
}
