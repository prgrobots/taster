/* checklist.js
   Persists MkDocs Material tasklist checkboxes in localStorage.
   Resets automatically at midnight (new session each day).
   No dependencies. */

(function () {
  const DAY_KEY = 'taster-day-' + new Date().toISOString().slice(0, 10);

  function getState() {
    try {
      return JSON.parse(localStorage.getItem(DAY_KEY) || '{}');
    } catch {
      return {};
    }
  }

  function saveState(state) {
    /* clear any old days first */
    Object.keys(localStorage)
      .filter(k => k.startsWith('taster-day-') && k !== DAY_KEY)
      .forEach(k => localStorage.removeItem(k));
    localStorage.setItem(DAY_KEY, JSON.stringify(state));
  }

  function getPageKey() {
    return location.pathname;
  }

  function initCheckboxes() {
    const state = getState();
    const pageKey = getPageKey();
    const saved = state[pageKey] || {};

    /* MkDocs Material renders tasklist items as <li class="task-list-item">
       with a hidden <input type="checkbox"> inside */
    const checkboxes = document.querySelectorAll('.task-list-item input[type="checkbox"]');

    checkboxes.forEach(function (cb, i) {
      /* restore saved state */
      if (saved[i]) {
        cb.checked = true;
        cb.closest('li').classList.add('task-done');
      }

      /* make checkboxes interactive (Material marks them disabled by default) */
      cb.removeAttribute('disabled');
      cb.style.cursor = 'pointer';

      cb.addEventListener('change', function () {
        const current = getState();
        if (!current[pageKey]) current[pageKey] = {};
        current[pageKey][i] = cb.checked;
        if (cb.checked) {
          cb.closest('li').classList.add('task-done');
        } else {
          cb.closest('li').classList.remove('task-done');
        }
        saveState(current);
        updateProgress();
      });
    });

    updateProgress();
  }

  function updateProgress() {
    const checkboxes = document.querySelectorAll('.task-list-item input[type="checkbox"]');
    if (checkboxes.length === 0) return;

    const total = checkboxes.length;
    const done = Array.from(checkboxes).filter(cb => cb.checked).length;

    let bar = document.getElementById('taster-progress-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'taster-progress-bar';
      bar.innerHTML = `
        <div style="
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          background: white;
          border: 2px solid #1565C0;
          border-radius: 12px;
          padding: 0.6rem 1rem;
          font-family: Nunito, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #1565C0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          z-index: 999;
          min-width: 120px;
          text-align: center;
        ">
          <div id="taster-progress-label">✅ 0 / 0</div>
          <div style="
            margin-top: 0.4rem;
            background: #E3F2FD;
            border-radius: 6px;
            height: 8px;
            overflow: hidden;
          ">
            <div id="taster-progress-fill" style="
              height: 100%;
              background: #1565C0;
              border-radius: 6px;
              width: 0%;
              transition: width 0.4s ease;
            "></div>
          </div>
        </div>`;
      document.body.appendChild(bar);
    }

    document.getElementById('taster-progress-label').textContent =
      '✅ ' + done + ' / ' + total + ' done';
    document.getElementById('taster-progress-fill').style.width =
      Math.round((done / total) * 100) + '%';
  }

  /* MkDocs Material uses instant navigation — re-init on page change */
  document.addEventListener('DOMContentLoaded', initCheckboxes);
  document$.subscribe(function () { initCheckboxes(); });
})();
