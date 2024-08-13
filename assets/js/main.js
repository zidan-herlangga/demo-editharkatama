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
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
        // selectHeader.classList.add("show");
      } else {
        selectHeader.classList.remove("header-scrolled");
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
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

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
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();
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
const online_or_offline = document.getElementById("online_or_offline");
const wa_active = document.getElementById("wa_active");
const time = new Date();
const nowTime = time.getHours();

if (nowTime >= 22 || nowTime < 7) {
  online_or_offline.innerText = "Offline";
  online_or_offline.style.cssText =
    "font-size: 10px; background: #c03b24; padding: 3px;";
} else {
  online_or_offline.innerText = "Online";
  online_or_offline.style.cssText =
    "font-size: 10px; background: #5dc024; padding: 3px";
}

/**
 * Costume Package Whatsapp
 */

document
  .getElementById("sendPackageCustom")
  .addEventListener("click", function () {
    // Ambil nilai dari formulir
    const productType = document.getElementById("productType").value;
    const customDescription =
      document.getElementById("customDescription").value;
    const quantity = document.getElementById("quantity").value;
    const specifications = document.getElementById("specifications").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    // Buat pesan WhatsApp
    const message =
      `*Halo, saya ingin memesan custom dengan detail berikut:* \n\n` +
      `- Jenis Produk/Layanan: ${productType}\n` +
      `- Deskripsi Kustomisasi: ${customDescription}\n` +
      `- Jumlah Pesanan: ${quantity}\n` +
      `- Spesifikasi: ${specifications}\n` +
      `- Tanggal Pengiriman: ${deliveryDate}`;

    // URL WhatsApp
    const phoneNumber = "+6282298066188"; // Nomor WhatsApp
    const waURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    // Validasi input
    if (
      productType === "" ||
      customDescription === "" ||
      quantity === "" ||
      specifications === "" ||
      deliveryDate === ""
    ) {
      alert("Harap lengkapi semua data yang dibutuhkan!");
      return; // Abort if any field is empty
    } else {
      // Open WhatsApp with the constructed message
      window.open(waURL, "_blank");
    }
  });
/*
 * Set Cookies
 */
// Select the cookie consent box and all buttons
const cookieBox = document.getElementById("cookieBox"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  // Check if the cookie "cookieBy" exists
  if (document.cookie.includes("cookieBy=CV. Edith Arkatama")) return;

  // Show the cookie consent box
  cookieBox.classList.add("show");

  // Add event listeners to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hide the cookie consent box
      cookieBox.classList.remove("show");

      // If the accept button is clicked, set the cookie for 30 days
      if (button.id === "acceptBtn") {
        const oneMonthInSeconds = 60 * 60 * 24 * 30;
        document.cookie = `cookieBy=CV. Edith Arkatama; max-age=${oneMonthInSeconds}; path=/`;
      }
    });
  });
};
// Execute the function when the webpage loads
window.addEventListener("load", executeCodes);
