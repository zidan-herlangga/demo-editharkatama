new Typed("#typed", {
  strings: [
    "WE WILL MAKE YOUR MOMENTS UNFORGETTABLE",
    "BE STRONGER, BE BRILLIANT, BE BIGGER, BE GLORY",
  ],
  typeSpeed: 150,
  backSpeed: 90,
  loop: true,
});

(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      all
        ? selectEl.forEach((e) => e.addEventListener(type, listener))
        : selectEl.addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  // Navbar links active state on scroll
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("text-brand-400");
        navbarlink.classList.remove("text-white");
      } else {
        navbarlink.classList.remove("text-brand-400");
        navbarlink.classList.add("text-white");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  // Scroll to element
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;
    if (!header.classList.contains("header-scrolled")) {
      offset -= 20;
    }
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  // Header scroll effect
  let selectHeader = select("#header");
  const selectLogo = select("#logo");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
        selectHeader.classList.remove("header-transparent");
        selectLogo.style.opacity = 1;
      } else {
        selectHeader.classList.remove("header-scrolled");
        selectHeader.classList.add("header-transparent");
        selectLogo.style.opacity = 1;
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  // Mobile nav toggle
  on("click", ".mobile-nav-toggle", function () {
    select("#navbar ul").classList.toggle("open");
    this.classList.toggle("ri-menu-line");
    this.classList.toggle("ri-close-line");
  });

  // Mobile nav dropdowns
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        let menu = this.nextElementSibling;
        if (menu) menu.classList.toggle("open");
      }
    },
    true
  );

  // Scroll on click
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();
        let navbar = select("#navbar ul");
        if (navbar.classList.contains("open")) {
          navbar.classList.remove("open");
          let toggle = select(".mobile-nav-toggle");
          toggle.classList.toggle("ri-menu-line");
          toggle.classList.toggle("ri-close-line");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  // Page load hash
  window.addEventListener("load", () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  // Close mobile menu on outside click
  document.addEventListener("click", function (e) {
    let nav = select("#navbar ul");
    let toggle = select(".mobile-nav-toggle");
    if (nav && nav.classList.contains("open") && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("open");
      toggle.classList.toggle("ri-menu-line");
      toggle.classList.toggle("ri-close-line");
    }
  });
})();
