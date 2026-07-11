// ===== EDU CROSS in 北九州 — interactions =====
document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile nav toggle ---
  var navToggle = document.getElementById('navToggle');
  var gnav = document.getElementById('gnav');
  if (navToggle && gnav) {
    navToggle.addEventListener('click', function () {
      var open = gnav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    gnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        gnav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- FAQ accordion ---
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // close others
      document.querySelectorAll('.faq-item.open').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // --- Back to top button ---
  var toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
  }

  // --- Scroll reveal (控えめ・reduced-motionでは無効) ---
  var reveals = document.querySelectorAll('.reveal');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reveals.length && 'IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }
});
