/**
 * Sticky header: show when user scrolls down past 250px, hide when near top.
 * Matches Angular home component scroll behavior.
 */
(function () {
  var STICKY_THRESHOLD = 250;
  var header = document.getElementById('sticky-header');
  if (!header) return;

  function updateSticky() {
    var shouldShow = window.scrollY > STICKY_THRESHOLD;
    if (shouldShow) {
      header.classList.remove('top--250px');
      header.classList.add('top-0');
    } else {
      header.classList.add('top--250px');
      header.classList.remove('top-0');
    }
  }

  window.addEventListener('scroll', function () {
    window.requestAnimationFrame(updateSticky);
  }, { passive: true });

  updateSticky();
})();
