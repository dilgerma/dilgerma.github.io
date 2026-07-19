document.addEventListener('DOMContentLoaded', function () {

  // Element cards — click to expand full definition
  document.querySelectorAll('.cs-element-card').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('open');
    });
  });

  // Pattern tabs
  var tabBtns = document.querySelectorAll('.cs-tab-btn');
  var tabPanels = document.querySelectorAll('.cs-tab-panel');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Information-flow diagram — click a node to see what it does
  var flowNodes = document.querySelectorAll('.cs-flow-node');
  var flowDesc = document.getElementById('csFlowDesc');
  flowNodes.forEach(function (node) {
    node.addEventListener('click', function () {
      flowNodes.forEach(function (n) { n.classList.remove('active'); });
      node.classList.add('active');
      if (flowDesc) {
        flowDesc.innerHTML = node.getAttribute('data-desc');
      }
    });
  });

  // Checklist — persist checked state per item and update progress bars
  document.querySelectorAll('.cs-checklist').forEach(function (list) {
    var key = 'cs-checklist-' + list.getAttribute('data-key');
    var stored = {};
    try { stored = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) { stored = {}; }

    var items = list.querySelectorAll('.cs-check-item');
    var progressFill = document.querySelector('[data-progress-for="' + list.getAttribute('data-key') + '"] .cs-progress-fill');
    var progressCount = document.querySelector('[data-progress-for="' + list.getAttribute('data-key') + '"] .cs-progress-count');

    function updateProgress() {
      var checked = list.querySelectorAll('input:checked').length;
      var total = items.length;
      if (progressFill) progressFill.style.width = (total ? (checked / total * 100) : 0) + '%';
      if (progressCount) progressCount.textContent = checked + ' / ' + total;
    }

    items.forEach(function (item) {
      var input = item.querySelector('input');
      var id = input.getAttribute('data-id');
      if (stored[id]) {
        input.checked = true;
        item.classList.add('checked');
      }
      item.addEventListener('click', function (e) {
        if (e.target !== input) {
          input.checked = !input.checked;
        }
        item.classList.toggle('checked', input.checked);
        stored[id] = input.checked;
        localStorage.setItem(key, JSON.stringify(stored));
        updateProgress();
      });
    });

    updateProgress();
  });

  // Lightbox for figures (click to zoom)
  var lightbox = document.createElement('div');
  lightbox.className = 'cs-lightbox';
  lightbox.innerHTML = '<span class="cs-lightbox-close">&times;</span><img alt="">';
  document.body.appendChild(lightbox);
  var lightboxImg = lightbox.querySelector('img');

  function closeLightbox() {
    lightbox.classList.remove('open');
  }

  document.querySelectorAll('img.cs-fig').forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  lightbox.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Copy-to-clipboard for install commands
  document.querySelectorAll('.cs-copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(function () {
        var original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1800);
      });
    });
  });

});
