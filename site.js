(function () {
  'use strict';

  /* ── Copyright year ── */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Hamburger menu toggle ── */
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Active nav link ── */
  var path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  var navAnchors = document.querySelectorAll('.nav-links li a');
  navAnchors.forEach(function (a) {
    var href = a.getAttribute('href') || '';
    var hpath = href.replace(/\/$/, '');
    if (hpath && hpath !== '/contact.html' && path === hpath) {
      a.classList.add('nav-active');
    }
    if (path === '/' || path === '/index.html') {
      /* home page — no nav link is active */
    }
  });

  /* ── Contact form (Formspree) ── */
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    var ENDPOINT = 'https://formspree.io/f/xaqvrojz';
    var submitBtn = contactForm.querySelector('button[type="submit"]');
    var successMsg = document.getElementById('contact-success');
    var errorMsg = document.getElementById('contact-error');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
      if (errorMsg) errorMsg.style.display = 'none';

      var data = {
        name: contactForm.elements['name'].value,
        company: contactForm.elements['company'] ? contactForm.elements['company'].value : '',
        email: contactForm.elements['email'].value,
        phone: contactForm.elements['phone'] ? contactForm.elements['phone'].value : '',
        state: contactForm.elements['state'] ? contactForm.elements['state'].value : '',
        message: contactForm.elements['message'].value,
        _subject: 'Quote Request from ' + contactForm.elements['name'].value +
          (contactForm.elements['company'] && contactForm.elements['company'].value
            ? ' — ' + contactForm.elements['company'].value : '')
      };

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (res) {
        if (res.ok) {
          if (typeof gtag_report_conversion === 'function') gtag_report_conversion();
          contactForm.style.display = 'none';
          if (successMsg) successMsg.style.display = 'block';
        } else {
          throw new Error('Server error');
        }
      }).catch(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        if (errorMsg) errorMsg.style.display = 'block';
      });
    });
  }

  /* ── Login form (coming soon) ── */
  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    var loginError = document.getElementById('login-error');
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (loginError) loginError.style.display = 'block';
    });
  }
})();
