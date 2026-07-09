/* flow.js — scroll-reveal system
   Auto-tags common components with .reveal, staggers siblings,
   and toggles .in-view via IntersectionObserver. */
(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Elements that participate in the reveal flow
  var selectors = [
    'main > section > h2',
    'main > section > .eyebrow',
    'main > section > p',
    '.dest-tile',
    '.proj-card',
    '.scroll-card',
    '.media-card',
    '.img-slide',
    '.cv-item',
    '.course-group',
    '.skill-row',
    '.news-list li',
    '.module-grid > *',
    '.rep-block',
    '.cta-row'
  ];

  var nodes = document.querySelectorAll(selectors.join(','));
  if (!nodes.length || !('IntersectionObserver' in window)) return;

  // Stagger siblings that share a parent (capped so late items don't lag)
  var parentCounts = new Map();
  nodes.forEach(function (el) {
    el.classList.add('reveal');
    var p = el.parentElement;
    var n = parentCounts.get(p) || 0;
    el.style.setProperty('--stagger', Math.min(n, 6));
    parentCounts.set(p, n + 1);
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  nodes.forEach(function (el) { io.observe(el); });
})();
