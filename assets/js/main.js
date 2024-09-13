// Animasi typing repeat
let typing = new Typed("#typed", {
  strings: [
    "WE WILL MAKE YOUR MOMENTS UNFORGETTABLE",
    "BE STRONGER, BE BRILIANT, BE BIGGER, BE GLORY",
  ],
  typeSpeed: 150,
  backSpeed: 90,
  loop: true,
});

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
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
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
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

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  const selectLogo = select("#logo");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
        selectLogo.style.opacity = 1;
      } else {
        selectHeader.classList.remove("header-scrolled");
        selectLogo.style.opacity = 0;
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function (direction) {
        let progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  /**
   * Testimonials slider
  //  */
  // new Swiper(".testimonials-slider", {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   slidesPerView: "auto",
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  // });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  // new Swiper(".portfolio-details-slider", {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "bullets",
  //     clickable: true,
  //   },
  // });

  /**
   * Initiate Pure Counter
   */
  // new PureCounter();
})();

/**
 * Music Background
 */
document.addEventListener("DOMContentLoaded", function () {
  const musicButton = document.getElementById("musicButton");
  const backgroundMusic = document.getElementById("backgroundMusic");

  musicButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
      backgroundMusic.pause();
      musicButton.innerHTML = '<i class="bi bi-music-player-fill"></i>';
    }
  });
});

/**
 * Status Whatsapp
 */
// const online_or_offline = document.getElementById("online_or_offline");
// const wa_active = document.getElementById("wa_active");
// const time = new Date();
// const nowTime = time.getHours();

// if (nowTime >= 22 || nowTime < 7) {
//   online_or_offline.innerText = "Offline";
//   online_or_offline.style.cssText =
//     "font-size: 10px; background: #c03b24; padding: 3px;";
// } else {
//   online_or_offline.innerText = "Online";
//   online_or_offline.style.cssText =
//     "font-size: 10px; background: #5dc024; padding: 3px";
// }

document
  .getElementById("sendPackageCustom")
  .addEventListener("click", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const productType = document.getElementById("productType").value;
    const customDescription =
      document.getElementById("customDescription").value;
    const quantity = document.getElementById("quantity").value;
    const specifications = document.getElementById("specifications").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    // Create WhatsApp message
    const message =
      `*Halo, saya ingin memesan custom dengan detail berikut:* \n\n` +
      `- Jenis Produk/Layanan: ${productType}\n` +
      `- Deskripsi Kustomisasi: ${customDescription}\n` +
      `- Jumlah Pesanan: ${quantity}\n` +
      `- Spesifikasi: ${specifications}\n` +
      `- Tanggal Pengiriman: ${deliveryDate}`;

    // WhatsApp URL
    const phoneNumber = "6282298066188"; // WhatsApp number
    const waURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Validate input
    if (
      productType === "" ||
      customDescription === "" ||
      quantity === "" ||
      specifications === "" ||
      deliveryDate === ""
    ) {
      alert("Harap lengkapi semua data yang dibutuhkan!");
    } else {
      window.open(waURL, "_blank");
    }
  });

// == Set Cookies ==
document.addEventListener("DOMContentLoaded", function () {
  const cookiesNotice = document.getElementById("cookies-notice");
  const acceptButton = document.getElementById("accept-button");
  const declineButton = document.getElementById("decline-button");

  // Function to set a cookie with a name, value, and expiration days
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get a cookie by name
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  // Function to check if the cookies have been accepted
  function checkCookies() {
    return getCookie("cookiesAccepted") === "true";
  }

  // Show the cookies notice if not accepted
  if (!checkCookies()) {
    cookiesNotice.classList.add("show");
  }

  // Handle accept button click
  acceptButton.addEventListener("click", function () {
    setCookie("cookiesAccepted", "true", 365); // Cookie expires in 365 days
    cookiesNotice.classList.remove("show");
  });

  // Handle decline button click
  declineButton.addEventListener("click", function () {
    cookiesNotice.classList.remove("show");
  });
});
