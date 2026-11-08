/**
 * STAT 2251: Inferential Statistics for Development Studies
 * Main Application Logic & Interactive Controller
 */

(function () {
  "use strict";

  // Application State
  const state = {
    chapters: [],
    currentView: "ch1", // "ch1"..."ch10", "tracker", "model-tests"
    currentTab: "book",  // "book", "handnotes", "videos", "questions"
    questionFilter: "all", // "all", 2, 5, 10
    activeModelTestId: "midterm",
    timer: {
      intervalId: null,
      secondsRemaining: 90 * 60,
      isRunning: false
    },
    progress: {},
    notes: {},
    theme: "light"
  };

  // LocalStorage Keys
  const STORAGE_KEYS = {
    PROGRESS: "stat2251_progress_v1",
    NOTES: "stat2251_notes_v1",
    THEME: "stat2251_theme_v1",
    SOLVED_QUESTIONS: "stat2251_solved_q_v1"
  };

  // DOM Elements cache
  let dom = {};

  // Initialize Application
  function init() {
    loadStoredData();
    cacheDOMElements();
    state.chapters = window.getCompleteChapters ? window.getCompleteChapters() : [];

    setupTheme();
    renderSidebarNav();
    updateOverallProgress();
    setupEventListeners();

    // Check hash for direct route
    handleHashRouting();
    window.addEventListener("hashchange", handleHashRouting);
  }

  function loadStoredData() {
    try {
      state.progress = JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS) || "{}");
      state.notes = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTES) || "{}");
      state.theme = localStorage.getItem(STORAGE_KEYS.THEME) || "light";
    } catch (e) {
      console.warn("Could not read from localStorage:", e);
      state.progress = {};
      state.notes = {};
      state.theme = "light";
    }
  }

  function saveStoredData(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn("Could not write to localStorage:", e);
    }
  }

  function cacheDOMElements() {
    dom = {
      app: document.getElementById("app"),
      sidebar: document.getElementById("sidebar"),
      sidebarNav: document.getElementById("sidebarNav"),
      sidebarOverlay: document.getElementById("sidebarOverlay"),
      btnToggleSidebar: document.getElementById("btnToggleSidebar"),
      btnThemeToggle: document.getElementById("btnThemeToggle"),
      themeIcon: document.getElementById("themeIcon"),
      searchInput: document.getElementById("globalSearchInput"),
      searchResultsDropdown: document.getElementById("searchResultsDropdown"),
      overallProgressBar: document.getElementById("overallProgressBar"),
      overallProgressPercent: document.getElementById("overallProgressPercent"),
      mainContent: document.getElementById("mainContent"),
      // Modals
      tablesModal: document.getElementById("tablesModal"),
      notesModal: document.getElementById("notesModal"),
      btnCloseTablesModal: document.getElementById("btnCloseTablesModal"),
      btnCloseNotesModal: document.getElementById("btnCloseNotesModal"),
      btnOpenTables: document.getElementById("btnOpenTables"),
      chapterNotesTextarea: document.getElementById("chapterNotesTextarea"),
      notesModalTitle: document.getElementById("notesModalTitle"),
      btnSaveNotes: document.getElementById("btnSaveNotes"),
      btnClearNotes: document.getElementById("btnClearNotes"),
      toastNotification: document.getElementById("toastNotification")
    };
  }

  function setupTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    updateThemeIcon();
  }

  function toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
    updateThemeIcon();
    showToast(`Switched to ${state.theme} mode`);
  }

  function updateThemeIcon() {
    if (!dom.themeIcon) return;
    dom.themeIcon.innerHTML = state.theme === "dark" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  function renderSidebarNav() {
    if (!dom.sidebarNav) return;

    let html = "";

    // Section A
    html += `<div class="nav-section-title">Section A (Chapters 1 - 4)</div>`;
    const secA = state.chapters.filter(ch => ch.section === "Section A");
    secA.forEach(ch => {
      const isCompleted = !!state.progress[`ch_${ch.id}`];
      const isActive = state.currentView === `ch${ch.id}`;
      html += `
        <a class="nav-chapter-item ${isActive ? "active" : ""}" data-view="ch${ch.id}" href="#chapter-${ch.id}">
          <span class="chapter-number-pill">${ch.id}</span>
          <span class="nav-chapter-title-text" title="${ch.title}">${ch.title}</span>
          <span class="chapter-status-check ${isCompleted ? "completed" : ""}">✓</span>
        </a>
      `;
    });

    // Section B
    html += `<div class="nav-section-title" style="margin-top: 14px;">Section B (Chapters 5 - 10)</div>`;
    const secB = state.chapters.filter(ch => ch.section === "Section B");
    secB.forEach(ch => {
      const isCompleted = !!state.progress[`ch_${ch.id}`];
      const isActive = state.currentView === `ch${ch.id}`;
      html += `
        <a class="nav-chapter-item ${isActive ? "active" : ""}" data-view="ch${ch.id}" href="#chapter-${ch.id}">
          <span class="chapter-number-pill">${ch.id}</span>
          <span class="nav-chapter-title-text" title="${ch.title}">${ch.title}</span>
          <span class="chapter-status-check ${isCompleted ? "completed" : ""}">✓</span>
        </a>
      `;
    });

    // Tools & Practice
    html += `
      <div class="nav-section-title" style="margin-top: 14px;">Exam & Tools</div>
      <a class="nav-chapter-item ${state.currentView === "tracker" ? "active" : ""}" data-view="tracker" href="#progress-tracker">
        <span class="chapter-number-pill">📊</span>
        <span class="nav-chapter-title-text">Progress Dashboard</span>
      </a>
      <a class="nav-chapter-item ${state.currentView === "model-tests" ? "active" : ""}" data-view="model-tests" href="#model-tests">
        <span class="chapter-number-pill">🎓</span>
        <span class="nav-chapter-title-text">Model Practice Tests</span>
      </a>
    `;

    dom.sidebarNav.innerHTML = html;

    // Attach click handlers to nav items
    dom.sidebarNav.querySelectorAll(".nav-chapter-item").forEach(item => {
      item.addEventListener("click", e => {
        const view = item.getAttribute("data-view");
        if (view) {
          switchView(view);
          closeSidebarMobile();
        }
      });
    });
  }

  function handleHashRouting() {
    const hash = window.location.hash;
    if (hash.startsWith("#chapter-")) {
      const chNum = parseInt(hash.replace("#chapter-", ""), 10);
      if (chNum >= 1 && chNum <= 10) {
        switchView(`ch${chNum}`, false);
        return;
      }
    } else if (hash === "#progress-tracker") {
      switchView("tracker", false);
      return;
    } else if (hash === "#model-tests") {
      switchView("model-tests", false);
      return;
    }
    // Default
    switchView(state.currentView, false);
  }

  function switchView(viewName, updateHash = true) {
    state.currentView = viewName;
    if (updateHash) {
      if (viewName.startsWith("ch")) {
        window.location.hash = `#chapter-${viewName.replace("ch", "")}`;
      } else if (viewName === "tracker") {
        window.location.hash = "#progress-tracker";
      } else if (viewName === "model-tests") {
        window.location.hash = "#model-tests";
      }
    }

    renderSidebarNav();

    if (viewName.startsWith("ch")) {
      const chId = parseInt(viewName.replace("ch", ""), 10);
      renderChapterView(chId);
    } else if (viewName === "tracker") {
      renderTrackerView();
    } else if (viewName === "model-tests") {
      renderModelTestsView();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Chapter View Renderer
  function renderChapterView(chapterId) {
    const ch = state.chapters.find(c => c.id === chapterId);
    if (!ch) {
      dom.mainContent.innerHTML = `<div class="content-section"><h2>Chapter not found</h2></div>`;
      return;
    }

    const isCompleted = !!state.progress[`ch_${ch.id}`];

    let html = `
      <div class="chapter-hero">
        <div class="chapter-meta-tags">
          <span class="badge badge-primary">${ch.section}</span>
          <span class="badge badge-secondary">${ch.code}</span>
          <span class="badge badge-warning">${ch.readTime}</span>
          <span class="badge badge-success">Syllabus Aligned</span>
        </div>
        <h1 class="chapter-hero-title">Chapter ${ch.id}: ${ch.title}</h1>
        <div class="chapter-hero-subtitle">${ch.subtitle}</div>
        <div class="chapter-hero-overview">${ch.overview}</div>

        <div class="chapter-hero-actions">
          <button class="btn-primary-sm" id="btnToggleChapterStatus">
            ${isCompleted ? "✓ Completed (Click to Undo)" : "○ Mark as Completed"}
          </button>
          <button class="btn-sidebar-action" style="width: auto;" id="btnOpenChapterNotes">
            📝 Chapter Notes
          </button>
          <button class="btn-sidebar-action" style="width: auto;" onclick="window.print()">
            🖨️ Print / Save PDF
          </button>
        </div>
      </div>

      <!-- Quick Topic Jump -->
      <div style="margin-bottom: 20px; display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
        <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Topics:</span>
        ${ch.topics.map((t, idx) => `
          <button class="btn-filter topic-pill-btn" data-topic-idx="${idx}" style="font-size: 12px; padding: 4px 10px;">
            ${t.title}
          </button>
        `).join("")}
      </div>

      <!-- Tab Navigation -->
      <div class="tabs-navigation">
        <button class="tab-btn ${state.currentTab === "book" ? "active" : ""}" data-tab="book">
          📖 1. Book Explanation
        </button>
        <button class="tab-btn ${state.currentTab === "handnotes" ? "active" : ""}" data-tab="handnotes">
          📝 2. Handnotes & Key Formulas
        </button>
        <button class="tab-btn ${state.currentTab === "videos" ? "active" : ""}" data-tab="videos">
          🎥 3. Video Lectures (${ch.videos.length})
        </button>
        <button class="tab-btn ${state.currentTab === "questions" ? "active" : ""}" data-tab="questions">
          🎯 4. Graded Exam Questions (${ch.questions.length})
        </button>
      </div>

      <!-- Tab 1: Book Explanation -->
      <div class="tab-content ${state.currentTab === "book" ? "active" : ""}" id="tabContentBook">
        ${ch.explanation}
      </div>

      <!-- Tab 2: Handnotes & Formulas -->
      <div class="tab-content ${state.currentTab === "handnotes" ? "active" : ""}" id="tabContentHandnotes">
        ${renderHandnotesTab(ch)}
      </div>

      <!-- Tab 3: Video Lectures -->
      <div class="tab-content ${state.currentTab === "videos" ? "active" : ""}" id="tabContentVideos">
        ${renderVideosTab(ch)}
      </div>

      <!-- Tab 4: Graded Exam Questions -->
      <div class="tab-content ${state.currentTab === "questions" ? "active" : ""}" id="tabContentQuestions">
        ${renderQuestionsTab(ch)}
      </div>

      <!-- Chapter Bottom Navigation -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-color);">
        ${ch.id > 1 ? `
          <button class="btn-sidebar-action" style="width: auto; padding: 10px 18px;" onclick="window.STAT_APP.switchView('ch${ch.id - 1}')">
            ← Previous: Chapter ${ch.id - 1}
          </button>
        ` : `<div></div>`}
        ${ch.id < 10 ? `
          <button class="btn-primary-sm" style="padding: 10px 20px;" onclick="window.STAT_APP.switchView('ch${ch.id + 1}')">
            Next: Chapter ${ch.id + 1} →
          </button>
        ` : `
          <button class="btn-primary-sm" style="padding: 10px 20px;" onclick="window.STAT_APP.switchView('model-tests')">
            Take Final Model Test →
          </button>
        `}
      </div>
    `;

    dom.mainContent.innerHTML = html;

    // Attach Tab Switching
    dom.mainContent.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        switchTab(tab);
      });
    });

    // Attach Chapter Status Toggle
    const btnToggleStatus = document.getElementById("btnToggleChapterStatus");
    if (btnToggleStatus) {
      btnToggleStatus.addEventListener("click", () => {
        toggleChapterCompletion(ch.id);
      });
    }

    // Attach Notes opener
    const btnOpenNotes = document.getElementById("btnOpenChapterNotes");
    if (btnOpenNotes) {
      btnOpenNotes.addEventListener("click", () => {
        openNotesModal(ch.id, ch.title);
      });
    }

    // Attach Solution Toggles
    attachQuestionHandlers();

    // Trigger KaTeX math rendering
    renderKaTeX(dom.mainContent);
  }

  function switchTab(tabName) {
    state.currentTab = tabName;
    document.querySelectorAll(".tab-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tabName);
    });
    document.querySelectorAll(".tab-content").forEach(tc => {
      tc.classList.remove("active");
    });
    const activeContent = document.getElementById(`tabContent${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    if (activeContent) {
      activeContent.classList.add("active");
      renderKaTeX(activeContent);
    }
  }

  function renderHandnotesTab(ch) {
    if (!ch.handnotes || ch.handnotes.length === 0) {
      return `<div class="content-section"><p>No specific handnotes recorded for this chapter yet.</p></div>`;
    }

    return ch.handnotes.map(hn => `
      <div class="handnote-card">
        <div class="handnote-header">
          <h3 style="font-size: 17px; font-weight: 700; margin: 0;">${hn.title}</h3>
          <span class="badge badge-primary">${hn.category || "Class Handnote"}</span>
        </div>
        <pre class="handnote-pre">${escapeHtml(hn.content.trim())}</pre>
        <div style="margin-top: 12px; display: flex; justify-content: flex-end;">
          <button class="btn-sidebar-action" style="width: auto; font-size: 12px;" onclick="navigator.clipboard.writeText(\`${escapeForAttribute(hn.content.trim())}\`); window.STAT_APP.showToast('Handnote copied to clipboard!');">
            📋 Copy Formulas
          </button>
        </div>
      </div>
    `).join("");
  }

  function renderVideosTab(ch) {
    if (!ch.videos || ch.videos.length === 0) {
      return `<div class="content-section"><p>No video lectures available for this chapter.</p></div>`;
    }

    return `
      <div class="callout callout-note" style="margin-bottom: 24px;">
        <strong>📺 Curated Video Lectures:</strong> Selected specifically for clarity, conceptual depth, and mathematical rigor. If an embedded video does not load in your local browser sandbox, click the red <strong>"Watch on YouTube"</strong> button below it to view directly in a new tab.
      </div>
      <div class="video-grid">
        ${ch.videos.map(v => `
          <div class="video-card">
            <div class="video-embed-container">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/${v.videoId}" 
                title="${escapeHtml(v.title)}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy">
              </iframe>
            </div>
            <div class="video-details">
              <div>
                <div class="video-title">${v.title}</div>
                <div class="video-meta">
                  <span>📺 ${v.channel}</span> • <span>⏱️ ${v.duration}</span>
                </div>
                <div class="video-desc">${v.summary}</div>
              </div>
              <div style="margin-top: 14px;">
                <a href="https://www.youtube.com/watch?v=${v.videoId}" target="_blank" rel="noopener noreferrer" class="video-fallback-btn">
                  ▶ Watch on YouTube (Direct Link)
                </a>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderQuestionsTab(ch) {
    if (!ch.questions || ch.questions.length === 0) {
      return `<div class="content-section"><p>No practice questions added yet.</p></div>`;
    }

    const filtered = state.questionFilter === "all" 
      ? ch.questions 
      : ch.questions.filter(q => q.marks === Number(state.questionFilter));

    return `
      <div class="callout callout-tip" style="margin-bottom: 20px;">
        <strong>🎯 Exam Scoring Strategy:</strong> Questions are organized into <strong>2 Marks</strong> (Easy / Conceptual definitions), <strong>5 Marks</strong> (Medium / Formulas & Derivations), and <strong>10 Marks</strong> (Hard / Critical Analytical problems). Try solving each problem on paper before revealing the model answer!
      </div>

      <!-- Question Filter Bar -->
      <div class="question-filter-bar">
        <button class="btn-filter ${state.questionFilter === "all" ? "active" : ""}" data-q-filter="all">
          All Questions (${ch.questions.length})
        </button>
        <button class="btn-filter ${state.questionFilter === 2 ? "active" : ""}" data-q-filter="2">
          2 Marks (Easy Concepts)
        </button>
        <button class="btn-filter ${state.questionFilter === 5 ? "active" : ""}" data-q-filter="5">
          5 Marks (Medium Derivations)
        </button>
        <button class="btn-filter ${state.questionFilter === 10 ? "active" : ""}" data-q-filter="10">
          10 Marks (Hard Analytical)
        </button>
      </div>

      <!-- Question Cards List -->
      <div id="questionsContainer">
        ${filtered.map(q => {
          const badgeClass = q.marks === 2 ? "badge-success" : (q.marks === 5 ? "badge-warning" : "badge-danger");
          return `
            <div class="question-card" id="qcard-${q.id}">
              <div class="question-header">
                <div class="question-title-group">
                  <div class="question-badges">
                    <span class="badge ${badgeClass}">${q.marks} Marks</span>
                    <span class="badge badge-secondary">${q.difficulty}</span>
                    <span class="badge badge-primary">Q-ID: ${q.id}</span>
                  </div>
                  <div class="question-title-text">${q.title}</div>
                </div>
              </div>
              <div class="question-body">
                ${q.question}
              </div>
              <button class="btn-reveal-solution" data-target="sol-${q.id}">
                <span>👁️ Show Model Answer & Rubric</span>
              </button>
              <div class="solution-container" id="sol-${q.id}">
                ${q.solution}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function attachQuestionHandlers() {
    // Solution toggles
    dom.mainContent.querySelectorAll(".btn-reveal-solution").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const container = document.getElementById(targetId);
        if (container) {
          const isVisible = container.classList.toggle("visible");
          btn.innerHTML = isVisible 
            ? `<span>🙈 Hide Solution</span>`
            : `<span>👁️ Show Model Answer & Rubric</span>`;
          if (isVisible) {
            renderKaTeX(container);
          }
        }
      });
    });

    // Question filter buttons
    dom.mainContent.querySelectorAll("[data-q-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-q-filter");
        state.questionFilter = val === "all" ? "all" : parseInt(val, 10);
        if (state.currentView.startsWith("ch")) {
          const chId = parseInt(state.currentView.replace("ch", ""), 10);
          const ch = state.chapters.find(c => c.id === chId);
          if (ch) {
            const container = document.getElementById("tabContentQuestions");
            if (container) {
              container.innerHTML = renderQuestionsTab(ch);
              attachQuestionHandlers();
              renderKaTeX(container);
            }
          }
        }
      });
    });
  }

  // Progress Tracker View
  function renderTrackerView() {
    const totalChapters = 10;
    let completedCount = 0;
    for (let i = 1; i <= totalChapters; i++) {
      if (state.progress[`ch_${i}`]) completedCount++;
    }
    const percent = Math.round((completedCount / totalChapters) * 100);

    let examReadiness = "Just Starting 🌱";
    if (percent >= 80) examReadiness = "Exam Ready! 🏆 Top Marks";
    else if (percent >= 50) examReadiness = "Proficient & Prepared 🚀";
    else if (percent >= 20) examReadiness = "Making Good Progress 📈";

    let html = `
      <div class="chapter-hero">
        <div class="chapter-meta-tags">
          <span class="badge badge-primary">STAT 2251</span>
          <span class="badge badge-success">Live Tracking</span>
        </div>
        <h1 class="chapter-hero-title">Course Study Progress & Exam Readiness</h1>
        <div class="chapter-hero-subtitle">Interactive checklist and curriculum milestone monitor</div>
      </div>

      <!-- Stats Grid -->
      <div class="dashboard-grid">
        <div class="stat-widget">
          <div class="stat-icon">📊</div>
          <div>
            <div class="stat-value">${percent}%</div>
            <div class="stat-label">Total Course Completion</div>
          </div>
        </div>

        <div class="stat-widget">
          <div class="stat-icon">📚</div>
          <div>
            <div class="stat-value">${completedCount} / ${totalChapters}</div>
            <div class="stat-label">Chapters Fully Mastered</div>
          </div>
        </div>

        <div class="stat-widget">
          <div class="stat-icon">🎯</div>
          <div>
            <div class="stat-value">${examReadiness}</div>
            <div class="stat-label">Exam Readiness Level</div>
          </div>
        </div>
      </div>

      <!-- Interactive Checklist -->
      <div class="checklist-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h3 style="font-size: 18px; font-weight: 700; margin: 0;">Chapter-by-Chapter Checklist</h3>
          <button class="btn-sidebar-action" style="width: auto; font-size: 12px; color: var(--danger);" id="btnResetProgress">
            ↺ Reset All Progress
          </button>
        </div>

        <div class="checklist-list">
          ${state.chapters.map(ch => {
            const isDone = !!state.progress[`ch_${ch.id}`];
            return `
              <div class="checklist-item">
                <label class="checklist-label">
                  <input type="checkbox" class="checklist-checkbox" data-ch-id="${ch.id}" ${isDone ? "checked" : ""}>
                  <span style="${isDone ? "text-decoration: line-through; color: var(--text-muted);" : ""}">
                    <strong>Ch ${ch.id}:</strong> ${ch.title}
                  </span>
                </label>
                <div style="display: flex; gap: 8px; align-items: center;">
                  <span class="badge ${ch.section === "Section A" ? "badge-primary" : "badge-warning"}">${ch.section}</span>
                  <button class="btn-sidebar-action" style="width: auto; padding: 4px 10px; font-size: 12px;" onclick="window.STAT_APP.switchView('ch${ch.id}')">
                    Open Chapter →
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- Recommended Study Schedule -->
      <div class="content-section">
        <h3>📅 Suggested 4-Week Study Schedule</h3>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Week</th>
              <th>Target Scope</th>
              <th>Key Mastery Focus</th>
              <th>Exam Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Week 1</strong></td>
              <td>Chapters 1 & 2</td>
              <td>Probability laws, Bayes' theorem, Binomial, Poisson, Normal distributions</td>
              <td>Master 2M definitions & joint PMF calculations</td>
            </tr>
            <tr>
              <td><strong>Week 2</strong></td>
              <td>Chapters 3 & 4</td>
              <td>Central Limit Theorem, finite population multiplier, OLS regression derivation</td>
              <td>Complete 6-student study hour dataset & Midterm Model Test</td>
            </tr>
            <tr>
              <td><strong>Week 3</strong></td>
              <td>Chapters 5, 6 & 7</td>
              <td>Neyman-Pearson lemma, BCR, 1/2-sample t-tests, Chi-square independence & goodness</td>
              <td>Solve all 5M & 10M hypothesis testing case studies</td>
            </tr>
            <tr>
              <td><strong>Week 4</strong></td>
              <td>Chapters 8, 9 & 10</td>
              <td>One-way ANOVA derivation, time series 4-component trend, Fisher's index proofs</td>
              <td>Simulate Full 3-Hour Final Comprehensive Model Test</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    dom.mainContent.innerHTML = html;

    // Attach checklist change listeners
    dom.mainContent.querySelectorAll(".checklist-checkbox").forEach(cb => {
      cb.addEventListener("change", e => {
        const chId = parseInt(cb.getAttribute("data-ch-id"), 10);
        state.progress[`ch_${chId}`] = cb.checked;
        saveStoredData(STORAGE_KEYS.PROGRESS, state.progress);
        updateOverallProgress();
        renderSidebarNav();
        renderTrackerView(); // re-render to update percentages
      });
    });

    const btnReset = document.getElementById("btnResetProgress");
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all your chapter completion progress?")) {
          state.progress = {};
          saveStoredData(STORAGE_KEYS.PROGRESS, state.progress);
          updateOverallProgress();
          renderSidebarNav();
          renderTrackerView();
          showToast("Progress successfully reset.");
        }
      });
    }
  }

  // Model Practice Tests View
  function renderModelTestsView() {
    const tests = window.MODEL_TESTS || [];
    const activeTest = tests.find(t => t.id === state.activeModelTestId) || tests[0];

    if (!activeTest) {
      dom.mainContent.innerHTML = `<div class="content-section"><h2>No model tests loaded.</h2></div>`;
      return;
    }

    let html = `
      <div class="chapter-hero">
        <div class="chapter-meta-tags">
          <span class="badge badge-danger">Exam Simulator</span>
          <span class="badge badge-primary">${activeTest.timeAllowed}</span>
          <span class="badge badge-success">${activeTest.totalMarks} Total Marks</span>
        </div>
        <h1 class="chapter-hero-title">Model Practice Examination Simulator</h1>
        <div class="chapter-hero-subtitle">Timed mock exam based strictly on departmental patterns and past papers</div>
      </div>

      <!-- Test Selector Tabs -->
      <div class="tabs-navigation" style="margin-bottom: 24px;">
        ${tests.map(t => `
          <button class="tab-btn ${t.id === activeTest.id ? "active" : ""}" data-test-id="${t.id}">
            📝 ${t.title} (${t.totalMarks} Marks)
          </button>
        `).join("")}
      </div>

      <!-- Interactive Exam Timer -->
      <div class="model-test-card" style="margin-bottom: 24px;">
        <div class="model-test-header">
          <div>
            <div class="test-title">${activeTest.title}</div>
            <div class="test-meta">
              <span>Scope: ${activeTest.scope}</span> • <span>Time: ${activeTest.timeAllowed}</span>
            </div>
          </div>

          <div class="timer-box">
            <span>⏱️ Remaining:</span>
            <span class="timer-display" id="examTimerDisplay">01:30:00</span>
            <button class="btn-timer" id="btnTimerToggle">Start</button>
            <button class="btn-timer" style="background: var(--bg-tertiary); color: var(--text-main);" id="btnTimerReset">Reset</button>
          </div>
        </div>

        <div class="callout callout-warning">
          <strong>Exam Instructions:</strong> ${activeTest.instructions}
        </div>
      </div>

      <!-- Question Groups -->
      ${activeTest.sections.map((sec, secIdx) => `
        <div class="content-section" style="margin-bottom: 24px;">
          <h3 style="border-bottom: 2px solid var(--border-color); padding-bottom: 8px;">
            ${sec.group}
          </h3>

          ${sec.questions.map((q, qIdx) => `
            <div class="question-card" style="margin-top: 18px;">
              <div class="question-header">
                <div class="question-title-group">
                  <div class="question-badges">
                    <span class="badge badge-primary">${q.marks} Marks</span>
                    <span class="badge badge-secondary">Q-${q.qId}</span>
                  </div>
                  <div class="question-title-text" style="font-size: 15px;">
                    ${q.text}
                  </div>
                </div>
              </div>

              <!-- Interactive Scratchpad for student -->
              <div style="padding: 0 20px 14px;">
                <textarea 
                  class="notes-textarea" 
                  style="height: 90px; font-size: 13px;" 
                  placeholder="Type your notes / rough calculations here before checking the model solution..."
                  data-scratch-id="${q.qId}"
                ></textarea>
              </div>

              <button class="btn-reveal-solution" data-target="test-sol-${q.qId}">
                <span>👁️ Reveal Model Answer & Grading Scheme</span>
              </button>

              <div class="solution-container" id="test-sol-${q.qId}">
                <div class="answer-box">
                  ${q.solution}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `).join("")}
    `;

    dom.mainContent.innerHTML = html;

    // Test selector tabs
    dom.mainContent.querySelectorAll("[data-test-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeModelTestId = btn.getAttribute("data-test-id");
        // Reset timer based on test length
        if (state.activeModelTestId === "midterm") {
          resetExamTimer(90 * 60);
        } else {
          resetExamTimer(180 * 60);
        }
        renderModelTestsView();
      });
    });

    // Timer controls
    setupTimerControls();

    // Solution toggles
    dom.mainContent.querySelectorAll(".btn-reveal-solution").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const container = document.getElementById(targetId);
        if (container) {
          const isVisible = container.classList.toggle("visible");
          btn.innerHTML = isVisible 
            ? `<span>🙈 Hide Answer</span>`
            : `<span>👁️ Reveal Model Answer & Grading Scheme</span>`;
          if (isVisible) {
            renderKaTeX(container);
          }
        }
      });
    });

    renderKaTeX(dom.mainContent);
  }

  // Timer logic
  function setupTimerControls() {
    const btnToggle = document.getElementById("btnTimerToggle");
    const btnReset = document.getElementById("btnTimerReset");
    const display = document.getElementById("examTimerDisplay");

    updateTimerDisplay(display);

    if (btnToggle) {
      btnToggle.textContent = state.timer.isRunning ? "Pause" : "Start";
      btnToggle.addEventListener("click", () => {
        if (state.timer.isRunning) {
          pauseTimer();
          btnToggle.textContent = "Start";
        } else {
          startTimer(display);
          btnToggle.textContent = "Pause";
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", () => {
        const defaultSecs = state.activeModelTestId === "midterm" ? 90 * 60 : 180 * 60;
        resetExamTimer(defaultSecs);
        updateTimerDisplay(display);
        if (btnToggle) btnToggle.textContent = "Start";
      });
    }
  }

  function startTimer(displayElem) {
    if (state.timer.isRunning) return;
    state.timer.isRunning = true;
    state.timer.intervalId = setInterval(() => {
      if (state.timer.secondsRemaining > 0) {
        state.timer.secondsRemaining--;
        updateTimerDisplay(displayElem);
      } else {
        pauseTimer();
        alert("⏰ Time is up! Review your answers against the model keys.");
      }
    }, 1000);
  }

  function pauseTimer() {
    state.timer.isRunning = false;
    if (state.timer.intervalId) {
      clearInterval(state.timer.intervalId);
      state.timer.intervalId = null;
    }
  }

  function resetExamTimer(totalSeconds) {
    pauseTimer();
    state.timer.secondsRemaining = totalSeconds;
  }

  function updateTimerDisplay(displayElem) {
    if (!displayElem) return;
    const hours = Math.floor(state.timer.secondsRemaining / 3600);
    const minutes = Math.floor((state.timer.secondsRemaining % 3600) / 60);
    const seconds = state.timer.secondsRemaining % 60;
    displayElem.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  }

  function padZero(num) {
    return num < 10 ? "0" + num : num;
  }

  // Completion toggles
  function toggleChapterCompletion(chapterId) {
    const key = `ch_${chapterId}`;
    state.progress[key] = !state.progress[key];
    saveStoredData(STORAGE_KEYS.PROGRESS, state.progress);
    updateOverallProgress();
    renderSidebarNav();

    // Re-render button state
    const btn = document.getElementById("btnToggleChapterStatus");
    if (btn) {
      btn.innerHTML = state.progress[key] 
        ? "✓ Completed (Click to Undo)" 
        : "○ Mark as Completed";
    }

    showToast(state.progress[key] ? `Chapter ${chapterId} marked complete! 🎉` : `Chapter ${chapterId} marked incomplete.`);
  }

  function updateOverallProgress() {
    let completedCount = 0;
    for (let i = 1; i <= 10; i++) {
      if (state.progress[`ch_${i}`]) completedCount++;
    }
    const percent = Math.round((completedCount / 10) * 100);

    if (dom.overallProgressBar) {
      dom.overallProgressBar.style.width = `${percent}%`;
    }
    if (dom.overallProgressPercent) {
      dom.overallProgressPercent.textContent = `${percent}%`;
    }
  }

  // Search Functionality
  function performSearch(query) {
    if (!dom.searchResultsDropdown) return;
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) {
      dom.searchResultsDropdown.style.display = "none";
      return;
    }

    const results = [];

    state.chapters.forEach(ch => {
      // Chapter Title match
      if (ch.title.toLowerCase().includes(q) || ch.subtitle.toLowerCase().includes(q)) {
        results.push({
          type: "Chapter",
          title: `Ch ${ch.id}: ${ch.title}`,
          subtitle: ch.subtitle,
          targetView: `ch${ch.id}`,
          targetTab: "book"
        });
      }

      // Topic match
      ch.topics.forEach(t => {
        if (t.title.toLowerCase().includes(q)) {
          results.push({
            type: "Topic",
            title: t.title,
            subtitle: `In Chapter ${ch.id}: ${ch.title}`,
            targetView: `ch${ch.id}`,
            targetTab: "book"
          });
        }
      });

      // Question match
      ch.questions.forEach(ques => {
        if (ques.title.toLowerCase().includes(q) || ques.question.toLowerCase().includes(q)) {
          results.push({
            type: `Question (${ques.marks}M)`,
            title: ques.title,
            subtitle: `In Chapter ${ch.id} • ${ques.difficulty}`,
            targetView: `ch${ch.id}`,
            targetTab: "questions"
          });
        }
      });
    });

    if (results.length === 0) {
      dom.searchResultsDropdown.innerHTML = `
        <div style="padding: 16px; font-size: 13.5px; color: var(--text-muted); text-align: center;">
          No matching topics or questions found for "<strong>${escapeHtml(query)}</strong>"
        </div>
      `;
    } else {
      dom.searchResultsDropdown.innerHTML = `
        <div style="padding: 8px 12px; font-size: 11px; font-weight: 700; color: var(--text-subtle); text-transform: uppercase;">
          Found ${results.length} results
        </div>
        ${results.slice(0, 8).map(r => `
          <div class="search-result-item" data-view="${r.targetView}" data-tab="${r.targetTab}">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="badge badge-primary" style="font-size: 10px;">${r.type}</span>
              <span style="font-weight: 700; font-size: 13.5px; color: var(--text-main);">${escapeHtml(r.title)}</span>
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;">${escapeHtml(r.subtitle)}</div>
          </div>
        `).join("")}
      `;

      dom.searchResultsDropdown.querySelectorAll(".search-result-item").forEach(item => {
        item.addEventListener("click", () => {
          const view = item.getAttribute("data-view");
          const tab = item.getAttribute("data-tab");
          dom.searchResultsDropdown.style.display = "none";
          dom.searchInput.value = "";
          switchView(view);
          if (tab) switchTab(tab);
        });
      });
    }

    dom.searchResultsDropdown.style.display = "block";
  }

  // Modals
  function openTablesModal() {
    if (!dom.tablesModal) return;
    renderStatisticalTables();
    dom.tablesModal.classList.add("active");
  }

  function closeTablesModal() {
    if (dom.tablesModal) dom.tablesModal.classList.remove("active");
  }

  function renderStatisticalTables() {
    const meta = window.COURSE_METADATA || {};
    const tables = meta.statisticalTables || {};
    const body = document.getElementById("tablesModalBody");
    if (!body) return;

    body.innerHTML = `
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 16px; margin-bottom: 8px;">1. Standard Normal Distribution (Z-Table Critical Values)</h4>
        <table class="styled-table text-center">
          <thead>
            <tr>
              <th>Confidence Level</th>
              <th>Significance Level (α)</th>
              <th>One-Tailed Critical Z</th>
              <th>Two-Tailed Critical Z</th>
            </tr>
          </thead>
          <tbody>
            ${(tables.zTable || []).map(r => `
              <tr>
                <td><strong>${r.conf}</strong></td>
                <td>${r.alpha}</td>
                <td>${r.oneTail}</td>
                <td><strong>${r.twoTail}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 16px; margin-bottom: 8px;">2. Student's t-Distribution Critical Values</h4>
        <table class="styled-table text-center">
          <thead>
            <tr>
              <th>Degrees of Freedom (df)</th>
              <th>One-Tailed (α = 0.05)</th>
              <th>Two-Tailed (α = 0.05)</th>
              <th>Two-Tailed (α = 0.01)</th>
            </tr>
          </thead>
          <tbody>
            ${(tables.tTable || []).map(r => `
              <tr>
                <td><strong>df = ${r.df}</strong></td>
                <td>${r.t_05_one}</td>
                <td><strong>${r.t_025_two}</strong></td>
                <td>${r.t_01_two}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 16px; margin-bottom: 8px;">3. Chi-Square (χ²) Critical Values</h4>
        <table class="styled-table text-center">
          <thead>
            <tr>
              <th>Degrees of Freedom (df)</th>
              <th>α = 0.05</th>
              <th>α = 0.01</th>
            </tr>
          </thead>
          <tbody>
            ${(tables.chiSquareTable || []).map(r => `
              <tr>
                <td><strong>df = ${r.df}</strong></td>
                <td><strong>${r.alpha_05}</strong></td>
                <td>${r.alpha_01}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div>
        <h4 style="font-size: 16px; margin-bottom: 8px;">4. Snedecor's F-Distribution Critical Values (α = 0.05)</h4>
        <table class="styled-table text-center">
          <thead>
            <tr>
              <th>Numerator df (k - 1)</th>
              <th>Denominator df (N - k)</th>
              <th>Critical F (α = 0.05)</th>
            </tr>
          </thead>
          <tbody>
            ${(tables.fTable || []).map(r => `
              <tr>
                <td>df₁ = ${r.df1}</td>
                <td>df₂ = ${r.df2}</td>
                <td><strong>${r.f_05}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;

    renderKaTeX(body);
  }

  function openNotesModal(chId, chTitle) {
    if (!dom.notesModal) return;
    dom.notesModalTitle.textContent = `Notes: Chapter ${chId} (${chTitle})`;
    dom.chapterNotesTextarea.value = state.notes[`ch_${chId}`] || "";
    dom.chapterNotesTextarea.setAttribute("data-active-ch", chId);
    dom.notesModal.classList.add("active");
  }

  function closeNotesModal() {
    if (dom.notesModal) dom.notesModal.classList.remove("active");
  }

  function saveCurrentNotes() {
    const chId = dom.chapterNotesTextarea.getAttribute("data-active-ch");
    if (!chId) return;
    state.notes[`ch_${chId}`] = dom.chapterNotesTextarea.value;
    saveStoredData(STORAGE_KEYS.NOTES, state.notes);
    showToast("Notes saved successfully! 📝");
    closeNotesModal();
  }

  function clearCurrentNotes() {
    if (confirm("Are you sure you want to clear your notes for this chapter?")) {
      dom.chapterNotesTextarea.value = "";
      const chId = dom.chapterNotesTextarea.getAttribute("data-active-ch");
      if (chId) {
        delete state.notes[`ch_${chId}`];
        saveStoredData(STORAGE_KEYS.NOTES, state.notes);
      }
      showToast("Notes cleared.");
    }
  }

  function showToast(message) {
    if (!dom.toastNotification) return;
    dom.toastNotification.textContent = message;
    dom.toastNotification.classList.add("show");
    setTimeout(() => {
      dom.toastNotification.classList.remove("show");
    }, 2800);
  }

  function openSidebarMobile() {
    if (dom.sidebar) dom.sidebar.classList.add("open");
    if (dom.sidebarOverlay) dom.sidebarOverlay.classList.add("active");
  }

  function closeSidebarMobile() {
    if (dom.sidebar) dom.sidebar.classList.remove("open");
    if (dom.sidebarOverlay) dom.sidebarOverlay.classList.remove("active");
  }

  // KaTeX Auto-Render Helper
  function renderKaTeX(targetElement) {
    if (!targetElement) return;
    if (typeof renderMathInElement === "function") {
      try {
        renderMathInElement(targetElement, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\[", right: "\\]", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false,
          errorColor: "#dc2626"
        });
      } catch (err) {
        console.warn("KaTeX render error:", err);
      }
    }
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Theme toggle
    if (dom.btnThemeToggle) {
      dom.btnThemeToggle.addEventListener("click", toggleTheme);
    }

    // Mobile sidebar
    if (dom.btnToggleSidebar) {
      dom.btnToggleSidebar.addEventListener("click", () => {
        if (dom.sidebar.classList.contains("open")) {
          closeSidebarMobile();
        } else {
          openSidebarMobile();
        }
      });
    }

    if (dom.sidebarOverlay) {
      dom.sidebarOverlay.addEventListener("click", closeSidebarMobile);
    }

    // Global Search Input
    if (dom.searchInput) {
      let debounceTimer = null;
      dom.searchInput.addEventListener("input", e => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          performSearch(e.target.value);
        }, 200);
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", e => {
        if (!e.target.closest(".search-box-wrapper") && dom.searchResultsDropdown) {
          dom.searchResultsDropdown.style.display = "none";
        }
      });
    }

    // Tables modal
    if (dom.btnOpenTables) {
      dom.btnOpenTables.addEventListener("click", openTablesModal);
    }
    if (dom.btnCloseTablesModal) {
      dom.btnCloseTablesModal.addEventListener("click", closeTablesModal);
    }
    if (dom.tablesModal) {
      dom.tablesModal.addEventListener("click", e => {
        if (e.target === dom.tablesModal) closeTablesModal();
      });
    }

    // Notes modal
    if (dom.btnCloseNotesModal) {
      dom.btnCloseNotesModal.addEventListener("click", closeNotesModal);
    }
    if (dom.btnSaveNotes) {
      dom.btnSaveNotes.addEventListener("click", saveCurrentNotes);
    }
    if (dom.btnClearNotes) {
      dom.btnClearNotes.addEventListener("click", clearCurrentNotes);
    }
    if (dom.notesModal) {
      dom.notesModal.addEventListener("click", e => {
        if (e.target === dom.notesModal) closeNotesModal();
      });
    }

    // Keyboard Shortcuts
    document.addEventListener("keydown", e => {
      // Escape closes modals
      if (e.key === "Escape") {
        closeTablesModal();
        closeNotesModal();
        if (dom.searchResultsDropdown) dom.searchResultsDropdown.style.display = "none";
      }
      // Ctrl + / focuses search
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        if (dom.searchInput) {
          dom.searchInput.focus();
        }
      }
    });
  }

  // Utilities
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeForAttribute(str) {
    if (!str) return "";
    return str.replace(/`/g, "\\`").replace(/\\/g, "\\\\");
  }

  // Expose global controller
  window.STAT_APP = {
    init,
    switchView,
    switchTab,
    toggleChapterCompletion,
    showToast,
    openTablesModal,
    openNotesModal
  };

  // Run on DOM load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
