const topbar = document.getElementById("topbar");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const bookingForm = document.getElementById("bookingForm");
const toast = document.getElementById("toast");
const locationAddressWrap = document.getElementById("locationAddressWrap");
const locationAddress = document.getElementById("locationAddress");
const inspoPhotos = document.getElementById("inspoPhotos");
const fileNote = document.getElementById("fileNote");
const portfolioPermission = document.getElementById("portfolioPermission");
const tagPermissionWrap = document.getElementById("tagPermissionWrap");

document.getElementById("year").textContent = new Date().getFullYear();

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

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 80);
});

document.querySelectorAll('input[name="locationType"]').forEach(input => {
  input.addEventListener("change", () => {
    const onLocation = input.checked && input.value === "On Location";
    if (onLocation) {
      locationAddressWrap.classList.remove("hidden");
      locationAddress.required = true;
    } else if (input.checked) {
      locationAddressWrap.classList.add("hidden");
      locationAddress.required = false;
      locationAddress.value = "";
    }
  });
});

inspoPhotos.addEventListener("change", () => {
  const count = inspoPhotos.files.length;

  if (count > 4) {
    inspoPhotos.value = "";
    fileNote.textContent = "Please choose no more than 4 inspiration photos.";
    fileNote.style.color = "#8a2635";
    return;
  }

  fileNote.textContent = count
    ? `${count} inspiration photo${count === 1 ? "" : "s"} selected.`
    : "Style, pose, outfit, location or mood.";
  fileNote.style.color = "";
});

portfolioPermission.addEventListener("change", () => {
  tagPermissionWrap.classList.toggle("hidden", !portfolioPermission.checked);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3600);
}

bookingForm.addEventListener("submit", event => {
  event.preventDefault();

  if (!bookingForm.reportValidity()) return;

  showToast(
    "Booking form looks good ✦ The live submit will work once we connect the database and client accounts."
  );
});

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
  if (event.key === "Escape") {
    closeMobileMenu();

    document.querySelectorAll(".full-view.open").forEach(view => {
      view.classList.remove("open");
      view.setAttribute("aria-hidden", "true");
    });

    document.body.classList.remove("view-open");
  }
});


document.querySelectorAll("[data-select-shoot]").forEach(button => {
  button.addEventListener("click", () => {
    const shootType = button.dataset.selectShoot;
    const select = document.getElementById("shootType");

    if (select) {
      const matchingOption = Array.from(select.options).find(option => option.text === shootType);
      if (matchingOption) {
        select.value = matchingOption.value || matchingOption.text;
      }
    }

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
