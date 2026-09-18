const topbar = document.getElementById("topbar");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const toast = document.getElementById("toast");
const shootMenuGrid = document.getElementById("shootMenuGrid");
const shootView = document.getElementById("shootView");
const shootGallery = document.getElementById("shootGallery");
const galleryDots = document.getElementById("galleryDots");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");
const shootTitle = document.getElementById("shootTitle");
const shootDescription = document.getElementById("shootDescription");
const packageOptions = document.getElementById("packageOptions");
const addonOptions = document.getElementById("addonOptions");
const selectedPackageSummary = document.getElementById("selectedPackageSummary");
const productTotal = document.getElementById("productTotal");
const shootBookingForm = document.getElementById("shootBookingForm");
const productLocationAddressWrap = document.getElementById("productLocationAddressWrap");
const productLocationAddress = document.getElementById("productLocationAddress");
const productInspoPhotos = document.getElementById("productInspoPhotos");
const productFileNote = document.getElementById("productFileNote");
const productPortfolioPermission = document.getElementById("productPortfolioPermission");
const productTagPermissionWrap = document.getElementById("productTagPermissionWrap");
const customRequestWrap = document.getElementById("customRequestWrap");
const shootDate = document.getElementById("shootDate");

// TEMPORARY CATALOG DATA.
// When the admin PWA + database are connected, this exact information will come from the backend
// so the photographer can add shoot types, upload the 3 example photos, edit packages and prices himself.
const shootCatalog = [
  {
    id: "birthday",
    name: "Birthday Shoot",
    badge: "CELEBRATION",
    description: "A polished birthday session built for glam portraits, celebration content and statement looks.",
    cardDescription: "Glam portraits and celebration content.",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=88"
    ],
    packages: [
      { id: "b15", label: "15 photos", details: "1 hour • 6 edited photos", price: 200 },
      { id: "b20", label: "20 photos", details: "1 hour • 8 edited photos", price: 300 },
      { id: "b30", label: "30 photos", details: "90 minutes • 12 edited photos", price: 400 }
    ],
    addons: [
      { id: "extra-edits", label: "Extra edited photos", price: 50 },
      { id: "extra-time", label: "Extra 30 minutes", price: 75 }
    ]
  },
  {
    id: "lifestyle",
    name: "Lifestyle Shoot",
    badge: "RELAXED + NATURAL",
    description: "Natural, relaxed photography for everyday moments, couples, personal content and effortless editorial portraits.",
    cardDescription: "Natural, relaxed photos with an editorial feel.",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1400&q=88"
    ],
    packages: [
      { id: "l15", label: "15 photos", details: "45 minutes • 5 edited photos", price: 200 },
      { id: "l20", label: "20 photos", details: "1 hour • 8 edited photos", price: 300 },
      { id: "l30", label: "30 photos", details: "90 minutes • 12 edited photos", price: 400 }
    ],
    addons: [
      { id: "l-extra-edits", label: "Extra edited photos", price: 50 },
      { id: "l-extra-time", label: "Extra 30 minutes", price: 75 }
    ]
  },
  {
    id: "graduation",
    name: "Graduation Shoot",
    badge: "MILESTONE",
    description: "A graduation session made for cap-and-gown portraits, campus moments and polished celebration images.",
    cardDescription: "Celebrate the milestone with elevated portraits.",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1400&q=88"
    ],
    packages: [
      { id: "g15", label: "15 photos", details: "45 minutes • 6 edited photos", price: 200 },
      { id: "g20", label: "20 photos", details: "1 hour • 8 edited photos", price: 300 },
      { id: "g30", label: "30 photos", details: "90 minutes • 12 edited photos", price: 400 }
    ],
    addons: [
      { id: "g-extra-edits", label: "Extra edited photos", price: 50 },
      { id: "g-second-look", label: "Second outfit/look", price: 75 }
    ]
  },
  {
    id: "maternity",
    name: "Maternity Shoot",
    badge: "MATERNITY",
    description: "Soft, intentional maternity portraits with room for studio, outdoor or styled concepts.",
    cardDescription: "Elegant maternity portraits and styled concepts.",
    images: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1544776193-32d404ae6085?auto=format&fit=crop&w=1400&q=88"
    ],
    packages: [
      { id: "m15", label: "15 photos", details: "1 hour • 6 edited photos", price: 200 },
      { id: "m20", label: "20 photos", details: "75 minutes • 8 edited photos", price: 300 },
      { id: "m30", label: "30 photos", details: "90 minutes • 12 edited photos", price: 400 }
    ],
    addons: [
      { id: "m-extra-edits", label: "Extra edited photos", price: 50 },
      { id: "m-partner", label: "Partner/family add-on", price: 75 }
    ]
  },
  {
    id: "brand",
    name: "Brand / Product Shoot",
    badge: "BUSINESS",
    description: "Clean, intentional visuals for products, personal brands, campaigns and social content.",
    cardDescription: "Content for brands, products and campaigns.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1400&q=88"
    ],
    packages: [
      { id: "br15", label: "15 photos", details: "1 hour • 8 edited photos", price: 250 },
      { id: "br25", label: "25 photos", details: "90 minutes • 12 edited photos", price: 350 },
      { id: "br40", label: "40 photos", details: "2 hours • 20 edited photos", price: 500 }
    ],
    addons: [
      { id: "br-extra-edits", label: "Extra edited photos", price: 50 },
      { id: "br-extra-time", label: "Extra 30 minutes", price: 75 }
    ]
  },
  {
    id: "events",
    name: "Event Coverage",
    badge: "EVENTS",
    description: "Coverage for celebrations, launches, weddings and special events with flexible time-based options.",
    cardDescription: "Celebrations, launches and special events.",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=88"
    ],
    packages: [
      { id: "e1", label: "1 hour coverage", details: "Selected gallery • 15 edited photos", price: 300 },
      { id: "e2", label: "2 hour coverage", details: "Selected gallery • 25 edited photos", price: 500 },
      { id: "e4", label: "4 hour coverage", details: "Selected gallery • 40 edited photos", price: 800 }
    ],
    addons: [
      { id: "e-extra-hour", label: "Extra hour", price: 150 },
      { id: "e-rush", label: "Rush preview gallery", price: 100 }
    ]
  },
  {
    id: "custom",
    name: "Custom Shoot",
    badge: "BUILD YOUR OWN",
    description: "Have something different in mind? Start with a custom request and the photographer can shape the right package around your idea.",
    cardDescription: "A flexible option for ideas outside the preset menu.",
    custom: true,
    images: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1400&q=88",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=88"
    ],
    packages: [
      { id: "c15", label: "15 photos", details: "Timing and edits confirmed after review", price: 200 },
      { id: "c20", label: "20 photos", details: "Timing and edits confirmed after review", price: 300 },
      { id: "cquote", label: "Request a custom quote", details: "For concepts that need a fully tailored package", price: null }
    ],
    addons: []
  }
];

let activeShoot = null;
let activePackage = null;
let activeGalleryIndex = 0;

function money(value) {
  return value === null ? "Custom quote" : `$${value}`;
}

function openMenu() {
  mobileMenu.classList.add("open");
  menuBackdrop.classList.add("show");
  document.body.classList.add("menu-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  menuBackdrop.classList.remove("show");
  document.body.classList.remove("menu-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMobileMenu);
menuBackdrop.addEventListener("click", closeMobileMenu);
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 80);
});

function renderShootMenu() {
  shootMenuGrid.innerHTML = shootCatalog.map(shoot => `
    <article class="shoot-menu-card" data-shoot-id="${shoot.id}" tabindex="0" role="button" aria-label="View ${shoot.name}">
      <div class="shoot-menu-card-image">
        <img src="${shoot.images[0]}" alt="${shoot.name} example placeholder" />
        <span class="shoot-menu-card-badge">${shoot.badge}</span>
      </div>
      <div class="shoot-menu-card-copy">
        <h3>${shoot.name}</h3>
        <p>${shoot.cardDescription}</p>
        <div class="shoot-menu-meta">
          <span>${shoot.packages.length} PACKAGE${shoot.packages.length === 1 ? "" : "S"}</span>
          <span>→</span>
        </div>
      </div>
    </article>
  `).join("");

  shootMenuGrid.querySelectorAll("[data-shoot-id]").forEach(card => {
    card.addEventListener("click", () => openShoot(card.dataset.shootId));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openShoot(card.dataset.shootId);
      }
    });
  });
}

function renderGallery(shoot) {
  shootGallery.innerHTML = shoot.images.map((src, index) => `
    <div class="shoot-gallery-slide" data-gallery-index="${index}">
      <img src="${src}" alt="${shoot.name} example ${index + 1}" />
    </div>
  `).join("");

  galleryDots.innerHTML = shoot.images.map((_, index) => `
    <button class="gallery-dot ${index === 0 ? "active" : ""}" type="button" data-dot-index="${index}" aria-label="View photo ${index + 1}"></button>
  `).join("");

  activeGalleryIndex = 0;
  shootGallery.scrollLeft = 0;

  galleryDots.querySelectorAll(".gallery-dot").forEach(dot => {
    dot.addEventListener("click", () => scrollGalleryTo(Number(dot.dataset.dotIndex)));
  });
}

function scrollGalleryTo(index) {
  if (!activeShoot) return;
  const maxIndex = activeShoot.images.length - 1;
  activeGalleryIndex = Math.max(0, Math.min(index, maxIndex));
  shootGallery.scrollTo({ left: shootGallery.clientWidth * activeGalleryIndex, behavior: "smooth" });
  updateGalleryDots();
}

function updateGalleryDots() {
  galleryDots.querySelectorAll(".gallery-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === activeGalleryIndex);
  });
}

shootGallery.addEventListener("scroll", () => {
  if (!shootGallery.clientWidth) return;
  const index = Math.round(shootGallery.scrollLeft / shootGallery.clientWidth);
  if (index !== activeGalleryIndex) {
    activeGalleryIndex = index;
    updateGalleryDots();
  }
});

galleryPrev.addEventListener("click", () => scrollGalleryTo(activeGalleryIndex - 1));
galleryNext.addEventListener("click", () => scrollGalleryTo(activeGalleryIndex + 1));

function renderPackages(shoot) {
  packageOptions.innerHTML = shoot.packages.map(pkg => `
    <label class="package-choice">
      <input type="radio" name="selectedShootPackage" value="${pkg.id}" />
      <span class="package-choice-card">
        <span class="package-main">
          <strong>${pkg.label}</strong>
          <small>${pkg.details}</small>
        </span>
        <span class="package-price">${money(pkg.price)}</span>
      </span>
    </label>
  `).join("");

  packageOptions.querySelectorAll('input[name="selectedShootPackage"]').forEach(input => {
    input.addEventListener("change", () => {
      activePackage = shoot.packages.find(pkg => pkg.id === input.value) || null;
      updateSelectedSummary();
    });
  });
}

function renderAddons(shoot) {
  if (!shoot.addons.length) {
    addonOptions.innerHTML = `<p class="micro-note">No preset add-ons for this shoot. The photographer can add custom charges after reviewing your request.</p>`;
    return;
  }

  addonOptions.innerHTML = shoot.addons.map(addon => `
    <label class="addon-choice">
      <input type="checkbox" value="${addon.id}" data-price="${addon.price}" />
      <span>${addon.label}</span>
      <small>+${money(addon.price)}</small>
    </label>
  `).join("");

  addonOptions.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.addEventListener("change", updateSelectedSummary);
  });
}

function currentAddonTotal() {
  return [...addonOptions.querySelectorAll('input[type="checkbox"]:checked')]
    .reduce((sum, input) => sum + Number(input.dataset.price || 0), 0);
}

function updateSelectedSummary() {
  if (!activePackage) {
    selectedPackageSummary.textContent = "Select a package to continue.";
    productTotal.textContent = "—";
    return;
  }

  const addonTotal = currentAddonTotal();
  const packagePrice = activePackage.price;

  if (packagePrice === null) {
    selectedPackageSummary.textContent = `${activePackage.label} • Price confirmed after the photographer reviews your request.`;
    productTotal.textContent = "Custom quote";
    return;
  }

  const total = packagePrice + addonTotal;
  selectedPackageSummary.textContent = `${activePackage.label} • ${activePackage.details}${addonTotal ? ` • Add-ons +$${addonTotal}` : ""}`;
  productTotal.textContent = `$${total}`;
}

function resetProductForm() {
  shootBookingForm.reset();
  activePackage = null;
  productLocationAddressWrap.classList.add("hidden");
  productLocationAddress.required = false;
  productFileNote.textContent = "Style, pose, outfit, location or mood.";
  productFileNote.style.color = "";
  productTagPermissionWrap.classList.add("hidden");
  selectedPackageSummary.textContent = "Select a package to continue.";
  productTotal.textContent = "—";
}

function openShoot(shootId) {
  const shoot = shootCatalog.find(item => item.id === shootId);
  if (!shoot) return;

  activeShoot = shoot;
  resetProductForm();
  shootTitle.textContent = shoot.name;
  shootDescription.textContent = shoot.description;
  customRequestWrap.classList.toggle("hidden", !shoot.custom);
  document.getElementById("customRequestText").required = Boolean(shoot.custom);

  renderGallery(shoot);
  renderPackages(shoot);
  renderAddons(shoot);

  shootView.classList.add("open");
  shootView.setAttribute("aria-hidden", "false");
  shootView.scrollTop = 0;
  document.body.classList.add("view-open");
}

function closeShoot() {
  shootView.classList.remove("open");
  shootView.setAttribute("aria-hidden", "true");
  document.body.classList.remove("view-open");
  activeShoot = null;
  activePackage = null;
}

document.getElementById("shootBackButton").addEventListener("click", closeShoot);
document.getElementById("shootCloseButton").addEventListener("click", closeShoot);

document.querySelectorAll(".clickable-card[data-shoot-id]").forEach(card => {
  card.addEventListener("click", () => openShoot(card.dataset.shootId));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openShoot(card.dataset.shootId);
    }
  });
});

document.querySelectorAll('input[name="productLocationType"]').forEach(input => {
  input.addEventListener("change", () => {
    const onLocation = input.checked && input.value === "On Location";
    if (onLocation) {
      productLocationAddressWrap.classList.remove("hidden");
      productLocationAddress.required = true;
    } else if (input.checked) {
      productLocationAddressWrap.classList.add("hidden");
      productLocationAddress.required = false;
      productLocationAddress.value = "";
    }
  });
});

productInspoPhotos.addEventListener("change", () => {
  const count = productInspoPhotos.files.length;
  if (count > 4) {
    productInspoPhotos.value = "";
    productFileNote.textContent = "Please choose no more than 4 inspiration photos.";
    productFileNote.style.color = "#8a2635";
    return;
  }
  productFileNote.textContent = count
    ? `${count} inspiration photo${count === 1 ? "" : "s"} selected.`
    : "Style, pose, outfit, location or mood.";
  productFileNote.style.color = "";
});

productPortfolioPermission.addEventListener("change", () => {
  productTagPermissionWrap.classList.toggle("hidden", !productPortfolioPermission.checked);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 3600);
}

shootBookingForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!activePackage) {
    showToast("Choose a package first ✦");
    packageOptions.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (!shootBookingForm.reportValidity()) return;

  showToast("Shoot request looks good ✦ Live submission will work when we connect accounts and the database.");
});

// Portfolio drawer
// Existing lightweight full-view behavior stays separate from shoot product pages.
document.querySelectorAll("[data-open-view]").forEach(button => {
  button.addEventListener("click", () => {
    const view = document.getElementById(button.dataset.openView);
    if (!view) return;
    view.classList.add("open");
    view.setAttribute("aria-hidden", "false");
    document.body.classList.add("view-open");
  });
});

document.querySelectorAll("[data-close-view]").forEach(button => {
  button.addEventListener("click", () => {
    const view = document.getElementById(button.dataset.closeView);
    if (!view) return;
    view.classList.remove("open");
    view.setAttribute("aria-hidden", "true");
    document.body.classList.remove("view-open");
  });
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  closeMobileMenu();
  if (shootView.classList.contains("open")) closeShoot();
  document.querySelectorAll(".full-view.open").forEach(view => {
    view.classList.remove("open");
    view.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("view-open");
});

// Prevent past dates in the prototype booking form.
if (shootDate) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  shootDate.min = localToday;
}

document.getElementById("year").textContent = new Date().getFullYear();
renderShootMenu();
