(function () {
  'use strict';

  var nav = document.querySelector('.main-nav');
  var list = document.getElementById('main-nav-list') || (nav && nav.querySelector('ul'));
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      list.classList.toggle('is-open', !expanded);
    });
  }

  // Optional: close mobile menu when a nav link is clicked (in-page anchor)
  if (list) {
    list.addEventListener('click', function (e) {
      if (e.target.matches('a[href^="#"]') && window.matchMedia('(max-width: 52rem)').matches) {
        toggle.setAttribute('aria-expanded', 'false');
        list.classList.remove('is-open');
      }
    });
  }
})();
