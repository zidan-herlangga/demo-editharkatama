document.addEventListener("DOMContentLoaded", () => {
  const packagesContainer = document.getElementById("packages");
  const modalElement = document.getElementById("exampleModal");
  const closeBtn = document.querySelector(".btn-close");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalVenue = document.getElementById("modal-venue");
  const modalPrice = document.getElementById("modal-price");
  const modalDescription = document.getElementById("modal-description");
  const modalActionBtn = document.getElementById("modal-action-btn");

  const modal = new bootstrap.Modal(modalElement);
  let currentPackage = null;

  const packages = [
    {
      name: "Paket A",
      venue: "venue1",
      price: 10000000,
      description:
        "",
      image: "/assets/img/event-organizer-image/paket-eo-1.jpeg", // Ensure this path is correct
    },
    {
      name: "Paket B",
      venue: "venue2",
      price: 20000000,
      description:
        "",
      image: "/assets/img/event-organizer-image/paket-eo.jpg", // Ensure this path is correct
    },
    {
      name: "Paket C",
      venue: "venue3",
      price: 15000000,
      description:
        "",
      image: "/assets/img/event-organizer-image/paket-eo-1.jpeg", // Ensure this path is correct
    },
    {
      name: "Paket D",
      venue: "venue1",
      price: 25000000,
      description:
        "",
      image: "/assets/img/event-organizer-image/paket-eo.jpg", // Ensure this path is correct
    },
    {
      name: "Paket E",
      venue: "venue2",
      price: 18000000,
      description:
        " ",
      image: "/assets/img/event-organizer-image/paket-eo-1.jpeg", // Ensure this path is correct
    },
  ];

  function renderPackages(packages) {
    packagesContainer.innerHTML = packages
      .map(
        (pkg) => `
        <div class="package" data-name="${pkg.name}" data-venue="${
          pkg.venue
        }" data-price="${pkg.price}" data-description="${
          pkg.description
        }" data-image="${pkg.image}">
          <img src="${pkg.image}" alt="${pkg.name}"> 
          <h3>${pkg.name}</h3>
          <p>${pkg.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}</p>
          <p><i class='bi bi-pin-map'></i> ${pkg.venue}</p>
        </div>
      `
      )
      .join("");
  }

  function filterAndSort() {
    const sortPrice = document.getElementById("sort-price").value;
    const sortVenue = document.getElementById("sort-venue").value;

    let filteredPackages = packages.filter((pkg) => {
      return sortVenue === "all" || pkg.venue === sortVenue;
    });

    if (sortPrice === "asc") {
      filteredPackages.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "desc") {
      filteredPackages.sort((a, b) => b.price - a.price);
    }

    renderPackages(filteredPackages);
  }

  function onSearch() {
    filterAndSort();
  }

  packagesContainer.addEventListener("click", (event) => {
    const packageElem = event.target.closest(".package");
    if (packageElem) {
      const name = packageElem.getAttribute("data-name");
      const venue = packageElem.getAttribute("data-venue");
      const price = parseFloat(packageElem.getAttribute("data-price"));
      const description = packageElem.getAttribute("data-description");
      const image = packageElem.getAttribute("data-image");

      currentPackage = { name, venue, price, description, image };
      modalImage.src = image;
      modalTitle.textContent = name;
      modalVenue.textContent = `📍 Venue: ${venue}`;
      modalPrice.textContent = `Harga: ${price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`;
      modalDescription.textContent = description;

      modal.show(); // Show the modal using Bootstrap API
    }
  });

  document
    .getElementById("sort-price")
    .addEventListener("change", filterAndSort);
  document
    .getElementById("sort-venue")
    .addEventListener("change", filterAndSort);
  document.getElementById("search-btn")?.addEventListener("click", onSearch); // Ensure button exists

  closeBtn.addEventListener("click", () => modal.hide()); // Hide the modal using Bootstrap API

  modalActionBtn.addEventListener("click", () => {
    if (currentPackage) {
      const message = `Saya ingin membeli ${
        currentPackage.name
      }. Harga ${currentPackage.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}.`;
      const phoneNumber = "628123456789"; // Ganti dengan nomor WhatsApp yang sesuai
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    }
  });

  renderPackages(packages);
});
