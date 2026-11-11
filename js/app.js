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

  // 4. Populate Dynamic Filters & Render Dynamic Tables, Plugins & Video Gallery
  populateDynamicFilters();
  renderPluginsGrid();
  renderCommandsTable();
  renderPermissionsTable();
  renderPlaceholdersTable();
  renderVideoGallery();
}

function populateDynamicFilters() {
  const orderedCats = (MINECITY_DATA.categories || []).map(c => c.key);

  // 1. System Categories Dropdown
  const pCatFilter = document.getElementById("pluginCategoryFilter");
  if (pCatFilter && !pCatFilter.dataset.populated && MINECITY_DATA.categories) {
    pCatFilter.innerHTML = `<option value="ALL">All Categories (${orderedCats.length})</option>` +
      MINECITY_DATA.categories.map(c => `<option value="${c.key}">${c.icon} ${getLocalized(c, "title")}</option>`).join("");
    pCatFilter.dataset.populated = "true";
  }

  // 2. Command Categories & Plugins
  const cCatFilter = document.getElementById("cmdCategoryFilter");
  if (cCatFilter && !cCatFilter.dataset.populated) {
    const cats = orderedCats.length ? orderedCats : [...new Set(MINECITY_DATA.commands.map(c => c.category))].sort();
    cCatFilter.innerHTML = `<option value="ALL">All Categories (${cats.length})</option>` +
      cats.map(c => `<option value="${c}">${c}</option>`).join("");
    cCatFilter.dataset.populated = "true";
  }
  const cPluginFilter = document.getElementById("cmdPluginFilter");
  if (cPluginFilter && !cPluginFilter.dataset.populated) {
    const plugs = [...new Set(MINECITY_DATA.commands.map(c => c.plugin))].sort();
    cPluginFilter.innerHTML = `<option value="ALL">All Plugins (${plugs.length})</option>` +
      plugs.map(p => `<option value="${p}">${p}</option>`).join("");
    cPluginFilter.dataset.populated = "true";
  }

  // 3. Permission Categories & Plugins
  const permCatFilter = document.getElementById("permCategoryFilter");
  if (permCatFilter && !permCatFilter.dataset.populated) {
    const cats = orderedCats.length ? orderedCats : [...new Set(MINECITY_DATA.permissions.map(p => p.category))].sort();
    permCatFilter.innerHTML = `<option value="ALL">All Categories (${cats.length})</option>` +
      cats.map(c => `<option value="${c}">${c}</option>`).join("");
    permCatFilter.dataset.populated = "true";
  }
  const permPluginFilter = document.getElementById("permPluginFilter");
  if (permPluginFilter && !permPluginFilter.dataset.populated) {
    const plugs = [...new Set(MINECITY_DATA.permissions.map(p => p.plugin || "System"))].sort();
    permPluginFilter.innerHTML = `<option value="ALL">All Plugins (${plugs.length})</option>` +
      plugs.map(p => `<option value="${p}">${p}</option>`).join("");
    permPluginFilter.dataset.populated = "true";
  }

  // 4. Placeholder Categories & Plugins
  const phCatFilter = document.getElementById("phCategoryFilter");
  if (phCatFilter && !phCatFilter.dataset.populated) {
    const cats = orderedCats.length ? orderedCats : [...new Set(MINECITY_DATA.placeholders.map(p => p.category || "Core & Roleplay"))].sort();
    phCatFilter.innerHTML = `<option value="ALL">All Categories (${cats.length})</option>` +
      cats.map(c => `<option value="${c}">${c}</option>`).join("");
    phCatFilter.dataset.populated = "true";
  }
  const phPluginFilter = document.getElementById("phPluginFilter");
  if (phPluginFilter && !phPluginFilter.dataset.populated) {
    const plugs = [...new Set(MINECITY_DATA.placeholders.map(p => p.plugin))].sort();
    phPluginFilter.innerHTML = `<option value="ALL">All Plugins & Expansions (${plugs.length})</option>` +
      plugs.map(p => `<option value="${p}">${p}</option>`).join("");
    phPluginFilter.dataset.populated = "true";
  }
}

// Render Exact 10 System Categories Encyclopedia Grid
function renderPluginsGrid() {
  const container = document.getElementById("pluginsGridContainer");
  const catFilter = document.getElementById("pluginCategoryFilter");
  const searchInput = document.getElementById("pluginSearchInput");
  const countBadge = document.getElementById("pluginsCountBadge");
  if (!container || !MINECITY_DATA.categories) return;

  const selectedCat = catFilter ? catFilter.value : "ALL";
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = MINECITY_DATA.categories.filter(cat => {
    const title = getLocalized(cat, "title");
    const summary = getLocalized(cat, "summary");
    const highlightsStr = (cat.highlights || []).join(" ");
    const matchCat = selectedCat === "ALL" || cat.key === selectedCat;
    const matchQuery = !query ||
      cat.key.toLowerCase().includes(query) ||
      title.toLowerCase().includes(query) ||
      cat.pluginsList.toLowerCase().includes(query) ||
      summary.toLowerCase().includes(query) ||
      highlightsStr.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} / ${MINECITY_DATA.categories.length}`;
  }

  container.innerHTML = filtered.map(cat => {
    const title = getLocalized(cat, "title");
    const summary = getLocalized(cat, "summary");
    const cmdCount = MINECITY_DATA.commands.filter(c => c.category === cat.key).length;
    const permCount = MINECITY_DATA.permissions.filter(p => p.category === cat.key).length;
    const phCount = MINECITY_DATA.placeholders.filter(p => (p.category || "Core & Roleplay") === cat.key).length;
    const pluginPills = cat.pluginsList.split(",").map(s => s.trim()).filter(Boolean)
      .map(name => `<span class="badge badge-plugin" style="font-size:0.74rem; padding:3px 8px;">${name}</span>`).join(" ");
    const highlightsHtml = (cat.highlights || []).map(h => `<li style="margin-bottom:0.35rem; font-size:0.86rem;">${h}</li>`).join("");
    const safeKey = cat.key.replace(/'/g, "\\'");

    return `
      <div class="feature-card" style="display:flex; flex-direction:column;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.65rem;">
          <span style="font-size:1.65rem;">${cat.icon}</span>
          <span class="badge badge-plugin">${cmdCount} Cmds • ${permCount} Perms</span>
        </div>
        <h3 style="margin-bottom:0.55rem; color: var(--gta-yellow);">${title}</h3>
        <p style="font-size:0.91rem; margin-bottom:0.85rem; line-height:1.5;">${summary}</p>
        <div style="margin-bottom:0.85rem;">
          <div style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--text-muted); margin-bottom:0.4rem;">Core Modules Included:</div>
          <div style="display:flex; flex-wrap:wrap; gap:5px;">${pluginPills}</div>
        </div>
        ${highlightsHtml ? `<ul style="margin:0 0 1rem 1.1rem; padding:0; color:var(--text-secondary);">${highlightsHtml}</ul>` : ""}
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:auto; padding-top:0.5rem; border-top:1px solid var(--border-color);">
          <button class="btn btn-secondary" style="font-size:0.78rem; padding:0.42rem 0.8rem;" onclick="jumpToCategoryCommands('${safeKey}')">⚡ Commands (${cmdCount})</button>
          <button class="btn btn-secondary" style="font-size:0.78rem; padding:0.42rem 0.8rem;" onclick="jumpToCategoryPermissions('${safeKey}')">🔐 Perms (${permCount})</button>
          ${phCount > 0 ? `<button class="btn btn-secondary" style="font-size:0.78rem; padding:0.42rem 0.8rem;" onclick="jumpToCategoryPlaceholders('${safeKey}')">🧩 PAPI (${phCount})</button>` : ""}
        </div>
      </div>
    `;
  }).join("");

  if (catFilter && !catFilter.dataset.initialized) {
    catFilter.dataset.initialized = "true";
    catFilter.addEventListener("change", renderPluginsGrid);
  }
  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = "true";
    searchInput.addEventListener("input", renderPluginsGrid);
  }
}

window.jumpToCategoryCommands = function(catKey) {
  const cmdTabLink = document.querySelector('.sidebar-link[data-tab="commands"]');
  if (cmdTabLink) cmdTabLink.click();
  const cmdCategoryFilter = document.getElementById("cmdCategoryFilter");
  const cmdPluginFilter = document.getElementById("cmdPluginFilter");
  const cmdSearch = document.getElementById("cmdSearchInput");
  if (cmdCategoryFilter) cmdCategoryFilter.value = catKey;
  if (cmdPluginFilter) cmdPluginFilter.value = "ALL";
  if (cmdSearch) cmdSearch.value = "";
  renderCommandsTable();
};

window.jumpToCategoryPermissions = function(catKey) {
  const permTabLink = document.querySelector('.sidebar-link[data-tab="permissions"]');
  if (permTabLink) permTabLink.click();
  const permCatFilter = document.getElementById("permCategoryFilter");
  const permGroupFilter = document.getElementById("permGroupFilter");
  const permPluginFilter = document.getElementById("permPluginFilter");
  const permSearch = document.getElementById("permSearchInput");
  if (permCatFilter) permCatFilter.value = catKey;
  if (permGroupFilter) permGroupFilter.value = "ALL";
  if (permPluginFilter) permPluginFilter.value = "ALL";
  if (permSearch) permSearch.value = "";
  renderPermissionsTable();
};

window.jumpToCategoryPlaceholders = function(catKey) {
  const phTabLink = document.querySelector('.sidebar-link[data-tab="placeholders"]');
  if (phTabLink) phTabLink.click();
  const phCatFilter = document.getElementById("phCategoryFilter");
  const phPluginFilter = document.getElementById("phPluginFilter");
  const phSearch = document.getElementById("phSearchInput");
  if (phCatFilter) phCatFilter.value = catKey;
  if (phPluginFilter) phPluginFilter.value = "ALL";
  if (phSearch) phSearch.value = "";
  renderPlaceholdersTable();
};

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
  const pluginSelect = document.getElementById("cmdPluginFilter");
  const searchInput = document.getElementById("cmdSearchInput");
  const countBadge = document.getElementById("commandsCountBadge");
  if (!tbody) return;

  const selectedCat = filterSelect ? filterSelect.value : "ALL";
  const selectedPlugin = pluginSelect ? pluginSelect.value : "ALL";
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = MINECITY_DATA.commands.filter(c => {
    const matchesCat = (selectedCat === "ALL" || c.category === selectedCat);
    const matchesPlugin = (selectedPlugin === "ALL" || c.plugin === selectedPlugin);
    const desc = getLocalized(c, "desc");
    const matchesSearch = !query ||
      c.command.toLowerCase().includes(query) ||
      c.aliases.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query) ||
      c.plugin.toLowerCase().includes(query) ||
      c.permission.toLowerCase().includes(query);
    return matchesCat && matchesPlugin && matchesSearch;
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} / ${MINECITY_DATA.commands.length}`;
  }

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
        <td>
          <span class="badge badge-plugin" style="font-size:0.72rem;">${c.category}</span>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">${c.plugin}</div>
        </td>
        <td>${desc}</td>
      </tr>
    `;
  }).join("");

  if (filterSelect && !filterSelect.dataset.initialized) {
    filterSelect.dataset.initialized = "true";
    filterSelect.addEventListener("change", renderCommandsTable);
  }
  if (pluginSelect && !pluginSelect.dataset.initialized) {
    pluginSelect.dataset.initialized = "true";
    pluginSelect.addEventListener("change", renderCommandsTable);
  }
  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = "true";
    searchInput.addEventListener("input", renderCommandsTable);
  }
}

// Render Permissions Table
function renderPermissionsTable() {
  const tbody = document.getElementById("permissionsTableBody");
  const catSelect = document.getElementById("permCategoryFilter");
  const groupSelect = document.getElementById("permGroupFilter");
  const pluginSelect = document.getElementById("permPluginFilter");
  const searchInput = document.getElementById("permSearchInput");
  const countBadge = document.getElementById("permissionsCountBadge");
  if (!tbody) return;

  const selectedCat = catSelect ? catSelect.value : "ALL";
  const selectedGroup = groupSelect ? groupSelect.value : "ALL";
  const selectedPlugin = pluginSelect ? pluginSelect.value : "ALL";
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = MINECITY_DATA.permissions.filter(p => {
    const plug = p.plugin || "System";
    const cat = p.category || "Core & Roleplay";
    const matchesCat = (selectedCat === "ALL" || cat === selectedCat);
    const matchesGroup = (selectedGroup === "ALL" || p.group === selectedGroup);
    const matchesPlugin = (selectedPlugin === "ALL" || plug === selectedPlugin);
    const desc = getLocalized(p, "desc");
    const matchesSearch = !query ||
      p.node.toLowerCase().includes(query) ||
      p.group.toLowerCase().includes(query) ||
      cat.toLowerCase().includes(query) ||
      plug.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query);
    return matchesCat && matchesGroup && matchesPlugin && matchesSearch;
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} / ${MINECITY_DATA.permissions.length}`;
  }

  tbody.innerHTML = filtered.map(p => {
    const desc = getLocalized(p, "desc");
    return `
      <tr>
        <td>
          <code>${p.node}</code>
          <button class="copy-btn" data-copy="${p.node}">${I18N.t("copyText")}</button>
        </td>
        <td><span class="badge badge-plugin">${p.group}</span></td>
        <td>${p.defaultState}</td>
        <td>
          <span class="badge badge-plugin" style="font-size:0.72rem;">${p.category || "Core & Roleplay"}</span>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">${p.plugin || "System"}</div>
        </td>
        <td>${desc}</td>
      </tr>
    `;
  }).join("");

  if (catSelect && !catSelect.dataset.initialized) {
    catSelect.dataset.initialized = "true";
    catSelect.addEventListener("change", renderPermissionsTable);
  }
  if (groupSelect && !groupSelect.dataset.initialized) {
    groupSelect.dataset.initialized = "true";
    groupSelect.addEventListener("change", renderPermissionsTable);
  }
  if (pluginSelect && !pluginSelect.dataset.initialized) {
    pluginSelect.dataset.initialized = "true";
    pluginSelect.addEventListener("change", renderPermissionsTable);
  }
  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = "true";
    searchInput.addEventListener("input", renderPermissionsTable);
  }
}

// Render Placeholders Table
function renderPlaceholdersTable() {
  const tbody = document.getElementById("placeholdersTableBody");
  const catSelect = document.getElementById("phCategoryFilter");
  const pluginSelect = document.getElementById("phPluginFilter");
  const searchInput = document.getElementById("phSearchInput");
  const countBadge = document.getElementById("placeholdersCountBadge");
  if (!tbody) return;

  const selectedCat = catSelect ? catSelect.value : "ALL";
  const selectedPlugin = pluginSelect ? pluginSelect.value : "ALL";
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = MINECITY_DATA.placeholders.filter(p => {
    const cat = p.category || "Core & Roleplay";
    const matchesCat = (selectedCat === "ALL" || cat === selectedCat);
    const matchesPlugin = (selectedPlugin === "ALL" || p.plugin === selectedPlugin);
    const desc = getLocalized(p, "desc");
    const matchesSearch = !query ||
      p.placeholder.toLowerCase().includes(query) ||
      cat.toLowerCase().includes(query) ||
      p.plugin.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query);
    return matchesCat && matchesPlugin && matchesSearch;
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} / ${MINECITY_DATA.placeholders.length}`;
  }

  tbody.innerHTML = filtered.map(p => {
    const desc = getLocalized(p, "desc");
    return `
      <tr>
        <td>
          <code>${p.placeholder}</code>
          <button class="copy-btn" data-copy="${p.placeholder}">${I18N.t("copyText")}</button>
        </td>
        <td>
          <span class="badge badge-plugin" style="font-size:0.72rem;">${p.category || "Core & Roleplay"}</span>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">${p.plugin}</div>
        </td>
        <td><code style="color: var(--accent-green); background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3);">${p.example}</code></td>
        <td>${desc}</td>
      </tr>
    `;
  }).join("");

  if (catSelect && !catSelect.dataset.initialized) {
    catSelect.dataset.initialized = "true";
    catSelect.addEventListener("change", renderPlaceholdersTable);
  }
  if (pluginSelect && !pluginSelect.dataset.initialized) {
    pluginSelect.dataset.initialized = "true";
    pluginSelect.addEventListener("change", renderPlaceholdersTable);
  }
  if (searchInput && !searchInput.dataset.initialized) {
    searchInput.dataset.initialized = "true";
    searchInput.addEventListener("input", renderPlaceholdersTable);
  }
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
  } else if (q.startsWith("%")) {
    const phLink = document.querySelector('[data-tab="placeholders"]');
    if (phLink) {
      phLink.click();
      const phSearch = document.getElementById("phSearchInput");
      if (phSearch) {
        phSearch.value = q;
        renderPlaceholdersTable();
      }
    }
  } else if (q.includes(".")) {
    const permLink = document.querySelector('[data-tab="permissions"]');
    if (permLink) {
      permLink.click();
      const permSearch = document.getElementById("permSearchInput");
      if (permSearch) {
        permSearch.value = q;
        renderPermissionsTable();
      }
    }
  } else {
    // Check if matches any category or module name
    const matchesCat = MINECITY_DATA.categories && MINECITY_DATA.categories.some(c =>
      c.key.toLowerCase().includes(q) || c.pluginsList.toLowerCase().includes(q)
    );
    if (matchesCat) {
      const plugLink = document.querySelector('[data-tab="plugins"]');
      if (plugLink) {
        plugLink.click();
        const plugSearch = document.getElementById("pluginSearchInput");
        if (plugSearch) {
          plugSearch.value = q;
          renderPluginsGrid();
        }
      }
    } else {
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
}
