/* ==========================================================================
   MUMTAZ MOTORS (K) LTD — Site Script
   Vanilla JS, no dependencies. Handles: sticky header state, mobile nav,
   scroll-reveal, testimonial carousel, FAQ accordion, and the contact
   form's front-end confirmation state.
   ========================================================================== */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Sticky header state ---------------- */
  var header = document.getElementById("siteHeader");
  var hero = document.getElementById("top");

  function updateHeaderState() {
    if (!header) return;
    var threshold = hero ? Math.min(hero.offsetHeight - 80, window.innerHeight * 0.7) : 80;
    if (window.scrollY > threshold) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", updateHeaderState);

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  function closeNav() {
    document.body.classList.remove("nav-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
  function toggleNav() {
    var isOpen = document.body.classList.toggle("nav-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", String(isOpen));
  }
  if (navToggle) navToggle.addEventListener("click", toggleNav);
  if (mainNav) {
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeNav();
  });

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- Testimonial carousel ---------------- */
  var track = document.getElementById("testimonialTrack");
  var dotsWrap = document.getElementById("testimonialDots");

  if (track && dotsWrap) {
    var slides = Array.prototype.slice.call(track.querySelectorAll(".testimonial-slide"));
    var current = slides.findIndex(function (s) { return s.classList.contains("is-active"); });
    if (current < 0) current = 0;
    var timer = null;

    slides.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.className = "dot" + (i === current ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", "Show testimonial " + (i + 1));
      dot.addEventListener("click", function () { goTo(i); restart(); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function goTo(index) {
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots[current].classList.add("is-active");
    }

    function next() { goTo(current + 1); }

    function start() {
      if (prefersReducedMotion || slides.length < 2) return;
      timer = window.setInterval(next, 6000);
    }
    function stop() { if (timer) window.clearInterval(timer); }
    function restart() { stop(); start(); }

    start();
    var wrap = track.closest(".testimonial-wrap");
    if (wrap) {
      wrap.addEventListener("mouseenter", stop);
      wrap.addEventListener("mouseleave", start);
      wrap.addEventListener("focusin", stop);
      wrap.addEventListener("focusout", start);
    }
  }

  /* ---------------- FAQ accordion ---------------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var q = other.querySelector(".faq-question");
        if (q) q.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------------- Contact form (front-end only) ---------------- */
  var form = document.getElementById("contactForm");
  var success = document.getElementById("formSuccess");
  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      success.classList.add("is-visible");
      form.reset();
    });
  }
})();
