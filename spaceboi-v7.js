
const shootData = {
  birthday: {
    title: "Birthday Shoot",
    description: "A polished birthday session for glam portraits, celebration content and a look that feels special.",
    starting: "$200",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85"
    ],
    packages: [
      {label:"15 photos", price:"$200", photos:"15", edited:"5", duration:"45 min"},
      {label:"20 photos", price:"$300", photos:"20", edited:"8", duration:"1 hr"},
      {label:"30 photos", price:"$400", photos:"30", edited:"12", duration:"1.5 hr"}
    ]
  },
  lifestyle: {
    title: "Lifestyle Shoot",
    description: "Natural, relaxed photography for everyday content, couples, personal branding or just because.",
    starting: "$180",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=85"
    ],
    packages: [
      {label:"15 photos", price:"$180", photos:"15", edited:"5", duration:"45 min"},
      {label:"20 photos", price:"$260", photos:"20", edited:"8", duration:"1 hr"},
      {label:"30 photos", price:"$350", photos:"30", edited:"12", duration:"1.5 hr"}
    ]
  },
  graduation: {
    title: "Graduation Shoot",
    description: "Celebrate the milestone with graduation portraits that feel confident, polished and personal.",
    starting: "$200",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1627556704318-9c5e928e5f8e?auto=format&fit=crop&w=1200&q=85"
    ],
    packages: [
      {label:"15 photos", price:"$200", photos:"15", edited:"6", duration:"45 min"},
      {label:"20 photos", price:"$300", photos:"20", edited:"10", duration:"1 hr"},
      {label:"30 photos", price:"$420", photos:"30", edited:"15", duration:"1.5 hr"}
    ]
  },
  maternity: {
    title: "Maternity Shoot",
    description: "A soft, elegant session designed to document this season beautifully.",
    starting: "$250",
    images: [
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=85"
    ],
    packages: [
      {label:"15 photos", price:"$250", photos:"15", edited:"6", duration:"1 hr"},
      {label:"20 photos", price:"$350", photos:"20", edited:"10", duration:"1.5 hr"},
      {label:"30 photos", price:"$450", photos:"30", edited:"15", duration:"2 hr"}
    ]
  },
  brand: {
    title: "Brand / Product Shoot",
    description: "Clean, intentional content for brands, entrepreneurs, products and campaigns.",
    starting: "$300",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85"
    ],
    packages: [
      {label:"20 photos", price:"$300", photos:"20", edited:"8", duration:"1 hr"},
      {label:"30 photos", price:"$450", photos:"30", edited:"12", duration:"2 hr"},
      {label:"50 photos", price:"$650", photos:"50", edited:"20", duration:"3 hr"}
    ]
  },
  events: {
    title: "Events",
    description: "Coverage for parties, launches, celebrations and special occasions.",
    starting: "$350",
    images: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85"
    ],
    packages: [
      {label:"1 hour", price:"$350", photos:"40+", edited:"15", duration:"1 hr"},
      {label:"2 hours", price:"$550", photos:"70+", edited:"25", duration:"2 hr"},
      {label:"4 hours", price:"$900", photos:"120+", edited:"40", duration:"4 hr"}
    ]
  },
  custom: {
    title: "Custom Shoot",
    description: "Have something specific in mind? Start here and build a request around your own concept.",
    starting: "Custom quote",
    images: [
      "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85"
    ],
    packages: [
      {label:"Request a custom quote", price:"Custom", photos:"Flexible", edited:"Flexible", duration:"Flexible"}
    ]
  }
};

const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const topbar = document.getElementById("topbar");

function openMenu(){
  sideMenu?.classList.add("open");
  menuBackdrop?.classList.add("show");
  document.body.classList.add("locked");
  sideMenu?.setAttribute("aria-hidden","false");
  menuButton?.setAttribute("aria-expanded","true");
}
function closeSideMenu(){
  sideMenu?.classList.remove("open");
  menuBackdrop?.classList.remove("show");
  document.body.classList.remove("locked");
  sideMenu?.setAttribute("aria-hidden","true");
  menuButton?.setAttribute("aria-expanded","false");
}
menuButton?.addEventListener("click", openMenu);
closeMenu?.addEventListener("click", closeSideMenu);
menuBackdrop?.addEventListener("click", closeSideMenu);

window.addEventListener("scroll",()=>{
  topbar?.classList.toggle("scrolled",window.scrollY>60);
});

document.querySelectorAll("#year").forEach(el=>el.textContent=new Date().getFullYear());

const shootCatalog = document.getElementById("shootCatalog");
if(shootCatalog){
  Object.entries(shootData).forEach(([key,shoot])=>{
    const a=document.createElement("a");
    a.className="catalog-card";
    a.href=`shoot.html?type=${encodeURIComponent(key)}`;
    a.innerHTML=`
      <img src="${shoot.images[0]}" alt="${shoot.title} placeholder">
      <div class="catalog-copy">
        <p class="eyebrow">${key==="custom"?"BUILD YOUR OWN":"SHOOT OPTION"}</p>
        <h3>${shoot.title}</h3>
        <p>${shoot.description}</p>
        <strong>${shoot.starting==="Custom quote" ? shoot.starting : `From ${shoot.starting}`}</strong>
        <span>VIEW DETAILS</span>
      </div>`;
    shootCatalog.appendChild(a);
  });
}

const params=new URLSearchParams(location.search);
const type=params.get("type") || "birthday";
const selectedShoot=shootData[type] || shootData.birthday;

const shootTitle=document.getElementById("shootTitle");
if(shootTitle){
  document.title=`${selectedShoot.title} | Shot by Spaceboi`;
  shootTitle.textContent=selectedShoot.title;
  document.getElementById("shootDescription").textContent=selectedShoot.description;

  const galleryTrack=document.getElementById("galleryTrack");
  const galleryDots=document.getElementById("galleryDots");
  let currentSlide=0;

  selectedShoot.images.slice(0,3).forEach((src,i)=>{
    const img=document.createElement("img");
    img.src=src;
    img.alt=`${selectedShoot.title} example ${i+1}`;
    galleryTrack.appendChild(img);

    const dot=document.createElement("button");
    if(i===0) dot.classList.add("active");
    dot.addEventListener("click",()=>goToSlide(i));
    galleryDots.appendChild(dot);
  });

  function goToSlide(index){
    currentSlide=(index+3)%3;
    galleryTrack.style.transform=`translateX(-${currentSlide*100}%)`;
    [...galleryDots.children].forEach((dot,i)=>dot.classList.toggle("active",i===currentSlide));
  }

  document.getElementById("galleryPrev").addEventListener("click",()=>goToSlide(currentSlide-1));
  document.getElementById("galleryNext").addEventListener("click",()=>goToSlide(currentSlide+1));

  let touchStartX=0;
  galleryTrack.addEventListener("touchstart",e=>touchStartX=e.touches[0].clientX,{passive:true});
  galleryTrack.addEventListener("touchend",e=>{
    const diff=e.changedTouches[0].clientX-touchStartX;
    if(Math.abs(diff)>40) goToSlide(currentSlide+(diff<0?1:-1));
  },{passive:true});

  const packageOptions=document.getElementById("packageOptions");
  let activePackage=0;

  function selectPackage(index){
    activePackage=index;
    const pkg=selectedShoot.packages[index];
    [...packageOptions.children].forEach((btn,i)=>btn.classList.toggle("active",i===index));
    document.getElementById("summaryPhotos").textContent=pkg.photos;
    document.getElementById("summaryEdited").textContent=pkg.edited;
    document.getElementById("summaryDuration").textContent=pkg.duration;
    document.getElementById("bookShootButton").href=
      `booking.html?type=${encodeURIComponent(type)}&package=${index}`;
  }

  selectedShoot.packages.forEach((pkg,i)=>{
    const btn=document.createElement("button");
    btn.type="button";
    btn.className="package-option";
    btn.innerHTML=`<span>${pkg.label}</span><strong>${pkg.price}</strong>`;
    btn.addEventListener("click",()=>selectPackage(i));
    packageOptions.appendChild(btn);
  });

  selectPackage(0);
}

const bookingShootTitle=document.getElementById("bookingShootTitle");
if(bookingShootTitle){
  const bookingType=params.get("type") || "birthday";
  const bookingShoot=shootData[bookingType] || shootData.birthday;
  const pkgIndex=Math.max(0,Math.min(Number(params.get("package")||0),bookingShoot.packages.length-1));
  const pkg=bookingShoot.packages[pkgIndex];

  bookingShootTitle.innerHTML=`${bookingShoot.title.replace(" "," <em>")}.</em>`;
  document.getElementById("bookingPackageText").textContent=
    `${pkg.label} • ${pkg.price} • ${pkg.duration}`;

  document.querySelectorAll('input[name="locationType"]').forEach(input=>{
    input.addEventListener("change",()=>{
      const wrap=document.getElementById("locationWrap");
      const field=document.getElementById("locationInput");
      if(input.checked && input.value==="On Location"){
        wrap.classList.remove("hidden");
        field.required=true;
      }else if(input.checked){
        wrap.classList.add("hidden");
        field.required=false;
        field.value="";
      }
    });
  });

  const inspo=document.getElementById("inspoPhotos");
  inspo?.addEventListener("change",()=>{
    if(inspo.files.length>4){
      alert("Please choose no more than 4 inspiration photos.");
      inspo.value="";
    }
  });

  const permission=document.getElementById("portfolioPermission");
  const tagWrap=document.getElementById("tagPermissionWrap");
  permission?.addEventListener("change",()=>tagWrap.classList.toggle("hidden",!permission.checked));
}



// ===== Shot by Spaceboi Supabase client auth =====
const SPACEBOI_SUPABASE_URL = "https://soqpxkdbsddatrouudke.supabase.co";
const SPACEBOI_SUPABASE_KEY = "sb_publishable_O4w_43CQJJXL5sedjwUdeA_J6WbOmO3";

const sbClient =
  window.supabase?.createClient
    ? window.supabase.createClient(SPACEBOI_SUPABASE_URL, SPACEBOI_SUPABASE_KEY)
    : null;

const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const showSignIn = document.getElementById("showSignIn");
const showSignUp = document.getElementById("showSignUp");
const authMessage = document.getElementById("authMessage");
const authCard = document.getElementById("authCard");
const accountCard = document.getElementById("accountCard");
const accountName = document.getElementById("accountName");
const accountEmail = document.getElementById("accountEmail");
const signOutButton = document.getElementById("signOutButton");
const authTitle = document.getElementById("authTitle");
const authIntro = document.getElementById("authIntro");

function setAuthMessage(message = "", type = "") {
  if (!authMessage) return;
  authMessage.textContent = message;
  authMessage.classList.remove("error", "success");
  if (type) authMessage.classList.add(type);
}

function setAuthTab(mode) {
  const signingIn = mode === "signin";
  signInForm?.classList.toggle("hidden", !signingIn);
  signUpForm?.classList.toggle("hidden", signingIn);

  if (authTitle) authTitle.textContent = signingIn ? "Welcome Back" : "Create Account";
  if (authIntro) {
    authIntro.textContent = signingIn
      ? "Sign in to manage your bookings, invoices and photo links."
      : "Create an account before requesting a shoot.";
  }

  setAuthMessage("");
}

showSignIn?.addEventListener("click", () => setAuthTab("signin"));
showSignUp?.addEventListener("click", () => setAuthTab("signup"));

async function showAccount(user) {
  if (!user || !authCard || !accountCard) return;

  let fullName = user.user_metadata?.full_name || "Client";

  if (sbClient) {
    try {
      const { data: profile } = await sbClient
        .from("profiles")
        .select("full_name, role")
        .eq("id", user.id)
        .maybeSingle();

      if (profile?.full_name) fullName = profile.full_name;
    } catch (error) {
      console.warn("Profile lookup skipped:", error);
    }
  }

  if (accountName) accountName.textContent = fullName;
  if (accountEmail) accountEmail.textContent = user.email || "";

  authCard.classList.add("hidden");
  accountCard.classList.remove("hidden");

  await loadMyBookings(user);
}

function showAuthForms() {
  authCard?.classList.remove("hidden");
  accountCard?.classList.add("hidden");
  setAuthTab("signin");
}

signInForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!sbClient) return setAuthMessage("Account connection did not load. Please refresh.", "error");

  const email = document.getElementById("signInEmail").value.trim();
  const password = document.getElementById("signInPassword").value;

  setAuthMessage("Signing in…");

  const { data, error } = await sbClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    setAuthMessage(error.message, "error");
    return;
  }

  setAuthMessage("");

  const returnTo = new URLSearchParams(window.location.search).get("returnTo");
  if (returnTo && !returnTo.includes("://") && !returnTo.startsWith("//")) {
    window.location.href = returnTo;
    return;
  }

  await showAccount(data.user);
});

signUpForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!sbClient) return setAuthMessage("Account connection did not load. Please refresh.", "error");

  const fullName = document.getElementById("signUpName").value.trim();
  const email = document.getElementById("signUpEmail").value.trim();
  const password = document.getElementById("signUpPassword").value;

  setAuthMessage("Creating account…");

  const { data, error } = await sbClient.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: "https://ameastudio.github.io/Shot-by-Spaceboi/login.html"
    }
  });

  if (error) {
    setAuthMessage(error.message, "error");
    return;
  }

  if (data.session && data.user) {
    const returnTo = new URLSearchParams(window.location.search).get("returnTo");
    if (returnTo && !returnTo.includes("://") && !returnTo.startsWith("//")) {
      window.location.href = returnTo;
      return;
    }

    await showAccount(data.user);
    return;
  }

  setAuthMessage("Account created. Check your email to confirm it, then sign in.", "success");
  setAuthTab("signin");
});

signOutButton?.addEventListener("click", async () => {
  if (!sbClient) return;
  await sbClient.auth.signOut();
  showAuthForms();
  setAuthMessage("Signed out.", "success");
});

if (sbClient && authCard && accountCard) {
  (async () => {
    const { data, error } = await sbClient.auth.getSession();

    if (error) {
      showAuthForms();
      setAuthMessage(error.message, "error");
      return;
    }

    if (data.session?.user) {
      await showAccount(data.session.user);
    } else {
      showAuthForms();
    }
  })();

  sbClient.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT") {
      showAuthForms();
      return;
    }

    if (session?.user) {
      setTimeout(() => showAccount(session.user), 0);
    }
  });
}



// ===== Live booking requests + My Bookings =====

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function titleCaseStatus(value = "") {
  return String(value)
    .replaceAll("_", " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

function formatBookingDate(value) {
  if (!value) return "—";
  const date = new Date(`${value}T12:00:00`);
  return date.toLocaleDateString("en-JM", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function formatBookingTime(value) {
  if (!value) return "—";
  const parts = String(value).split(":");
  const date = new Date();
  date.setHours(Number(parts[0] || 0), Number(parts[1] || 0), 0, 0);
  return date.toLocaleTimeString("en-JM", {
    hour: "numeric",
    minute: "2-digit"
  });
}

function money(value) {
  const number = Number(value || 0);
  return `J$${number.toLocaleString("en-JM", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  })}`;
}

function parseDurationMinutes(duration = "") {
  const value = String(duration).toLowerCase().trim();

  if (value.includes("flex")) return 60;
  if (value.includes("min")) {
    const minutes = parseFloat(value);
    return Number.isFinite(minutes) ? Math.round(minutes) : 60;
  }
  if (value.includes("hr")) {
    const hours = parseFloat(value);
    return Number.isFinite(hours) ? Math.round(hours * 60) : 60;
  }

  return 60;
}

function numericPrefix(value) {
  const match = String(value ?? "").match(/\d+/);
  return match ? Number(match[0]) : null;
}

async function findShootTypeId(bookingType) {
  if (!sbClient) return null;

  const slugMap = {
    birthday: "portrait-birthday",
    lifestyle: "studio-creative",
    graduation: "graduation",
    maternity: "maternity",
    brand: "brand-product",
    events: "wedding-event",
    custom: "other"
  };

  const slug = slugMap[bookingType] || "other";

  const { data, error } = await sbClient
    .from("shoot_types")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.warn("Shoot type lookup failed:", error);
    return null;
  }

  return data?.id || null;
}

async function uploadInspirationPhotos(user, bookingId, files) {
  if (!sbClient || !files?.length) return [];

  const savedPaths = [];

  for (let index = 0; index < Math.min(files.length, 4); index += 1) {
    const file = files[index];
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const objectPath = `${user.id}/${bookingId}/${Date.now()}-${index}-${safeName}`;

    const { error: uploadError } = await sbClient.storage
      .from("booking-inspiration")
      .upload(objectPath, file, {
        cacheControl: "3600",
        upsert: false
      });

    if (uploadError) {
      console.warn("Inspiration upload skipped:", uploadError);
      continue;
    }

    const { error: rowError } = await sbClient
      .from("booking_inspiration")
      .insert({
        booking_id: bookingId,
        image_url: objectPath,
        sort_order: index
      });

    if (!rowError) savedPaths.push(objectPath);
  }

  return savedPaths;
}

async function initialiseLiveBookingForm() {
  const bookingForm = document.getElementById("bookingForm");
  if (!bookingForm || !sbClient) return;

  const authNotice = document.getElementById("bookingAuthNotice");
  const loginLink = document.getElementById("bookingLoginLink");
  const submitButton = document.getElementById("bookingSubmitButton");
  const statusEl = document.getElementById("bookingSubmitStatus");

  const { data: sessionData } = await sbClient.auth.getSession();
  const user = sessionData.session?.user;

  if (!user) {
    bookingForm.classList.add("hidden");
    authNotice?.classList.remove("hidden");

    const returnTarget = `${location.pathname.split("/").pop() || "booking.html"}${location.search}`;
    if (loginLink) {
      loginLink.href = `login.html?returnTo=${encodeURIComponent(returnTarget)}`;
    }
    return;
  }

  authNotice?.classList.add("hidden");
  bookingForm.classList.remove("hidden");

  const fullNameInput = document.getElementById("bookingFullName");
  const phoneInput = document.getElementById("bookingPhone");
  const emailInput = document.getElementById("bookingEmail");
  const instagramInput = document.getElementById("bookingInstagram");

  if (emailInput) {
    emailInput.value = user.email || "";
    emailInput.readOnly = true;
  }

  const { data: profile } = await sbClient
    .from("profiles")
    .select("full_name, phone, instagram_handle")
    .eq("id", user.id)
    .maybeSingle();

  if (fullNameInput && profile?.full_name) fullNameInput.value = profile.full_name;
  if (phoneInput && profile?.phone) phoneInput.value = profile.phone;
  if (instagramInput && profile?.instagram_handle) instagramInput.value = profile.instagram_handle;

  bookingForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;

    const bookingType = params.get("type") || "birthday";
    const bookingShoot = shootData[bookingType] || shootData.birthday;
    const pkgIndex = Math.max(
      0,
      Math.min(
        Number(params.get("package") || 0),
        bookingShoot.packages.length - 1
      )
    );
    const pkg = bookingShoot.packages[pkgIndex];

    const preferredDate = document.getElementById("preferredDate")?.value;
    const preferredTime = document.getElementById("preferredTime")?.value;
    const fullName = fullNameInput?.value.trim() || "";
    const phone = phoneInput?.value.trim() || "";
    const instagram = instagramInput?.value.trim() || "";
    const notes = document.getElementById("bookingNotes")?.value.trim() || "";
    const locationType =
      document.querySelector('input[name="locationType"]:checked')?.value || "Studio";
    const locationText =
      locationType === "On Location"
        ? document.getElementById("locationInput")?.value.trim() || ""
        : null;

    const portfolioPermission =
      document.getElementById("portfolioPermission")?.checked || false;
    const tagPermission =
      document.getElementById("tagPermission")?.checked || false;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "SENDING REQUEST…";
    }
    if (statusEl) {
      statusEl.className = "booking-submit-status";
      statusEl.textContent = "Saving your request…";
    }

    const { error: profileError } = await sbClient
      .from("profiles")
      .update({
        full_name: fullName,
        phone,
        instagram_handle: instagram || null
      })
      .eq("id", user.id);

    if (profileError) {
      console.warn("Profile update skipped:", profileError);
    }

    const shootTypeId = await findShootTypeId(bookingType);

    const { data: booking, error: bookingError } = await sbClient
      .from("bookings")
      .insert({
        client_id: user.id,
        shoot_type_id: shootTypeId,
        custom_shoot_name: bookingType === "custom" ? bookingShoot.title : null,
        status: "requested",
        preferred_date: preferredDate,
        preferred_time: preferredTime,
        duration_minutes: parseDurationMinutes(pkg.duration),
        photos_received: numericPrefix(pkg.photos),
        edited_photos: numericPrefix(pkg.edited),
        location_type: locationType,
        location_text: locationText,
        notes,
        instagram_handle: instagram || null,
        portfolio_permission: portfolioPermission,
        tag_permission: tagPermission
      })
      .select("id")
      .single();

    if (bookingError) {
      if (statusEl) {
        statusEl.className = "booking-submit-status error";
        statusEl.textContent = bookingError.message;
      }
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "SEND BOOKING REQUEST";
      }
      return;
    }

    const inspirationFiles = document.getElementById("inspoPhotos")?.files;
    const uploaded = await uploadInspirationPhotos(
      user,
      booking.id,
      inspirationFiles ? Array.from(inspirationFiles) : []
    );

    if (statusEl) {
      statusEl.className = "booking-submit-status success";
      statusEl.innerHTML =
        `Request sent successfully${inspirationFiles?.length && !uploaded.length
          ? ". Your request was saved, but the inspiration photos could not be uploaded yet."
          : "!"} <a href="login.html">View My Bookings →</a>`;
    }

    if (submitButton) {
      submitButton.textContent = "REQUEST SENT ✓";
    }

    bookingForm.querySelectorAll("input, textarea, button").forEach(field => {
      if (field !== submitButton) field.disabled = true;
    });
  });
}

function invoicePdfName(invoice) {
  const number = invoice.invoice_number || invoice.id || "invoice";
  return `Shot-by-Spaceboi-${String(number).replace(/[^a-zA-Z0-9_-]/g, "-")}.pdf`;
}

function downloadInvoicePdf(invoice, booking) {
  const jsPDF = window.jspdf?.jsPDF;
  if (!jsPDF) {
    alert("Invoice download is still loading. Please try again.");
    return;
  }

  const doc = new jsPDF();
  let y = 22;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("SHOT BY SPACEBOI", 20, y);
  y += 9;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("shotbyspaceboi@gmail.com", 20, y);
  y += 5;
  doc.text("(876) 481-1489  |  2 Majestic Pen Road", 20, y);
  y += 13;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(invoice.invoice_type === "final" ? "FINAL INVOICE" : "BOOKING INVOICE", 20, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Invoice: ${invoice.invoice_number || "—"}`, 20, y);
  y += 6;
  doc.text(`Shoot: ${booking.shoot_types?.name || booking.custom_shoot_name || "Photography Session"}`, 20, y);
  y += 6;
  doc.text(`Date: ${formatBookingDate(booking.preferred_date)} at ${formatBookingTime(booking.preferred_time)}`, 20, y);
  y += 10;

  const rows = [
    ["Subtotal", money(invoice.subtotal)],
    ["Travel / Location", money(invoice.travel_fee)],
    ["Extras", money(invoice.extras_total)],
    ["Discount", `-${money(invoice.discount_amount)}`],
    ["Total", money(invoice.total)],
    ["Paid", money(invoice.amount_paid)],
    ["Balance", money(invoice.balance)]
  ];

  rows.forEach(([label, value], index) => {
    if (index === 4) y += 3;
    doc.setFont("helvetica", index >= 4 ? "bold" : "normal");
    doc.text(label, 20, y);
    doc.text(value, 190, y, { align: "right" });
    y += 7;
  });

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.text(`Status: ${invoice.status || "—"}`, 20, y);

  y += 14;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Thank you for choosing Shot by Spaceboi.", 20, y);

  doc.save(invoicePdfName(invoice));
}

function bookingStatusClass(status) {
  const safe = String(status || "requested").toLowerCase();
  if (["booked", "completed"].includes(safe)) return "good";
  if (["cancelled", "declined"].includes(safe)) return "bad";
  if (safe === "confirmed") return "confirmed";
  return "pending";
}



// ===== Confirmed booking payment proof flow =====

let paymentInstructionsCache = null;

async function getPaymentInstructions() {
  if (paymentInstructionsCache) return paymentInstructionsCache;
  if (!sbClient) return {};

  const { data, error } = await sbClient
    .from("site_content")
    .select("value")
    .eq("key", "payment_instructions")
    .maybeSingle();

  if (error) {
    console.warn("Payment instructions lookup skipped:", error);
    return {};
  }

  paymentInstructionsCache = data?.value || {};
  return paymentInstructionsCache;
}

function paymentStatusLabel(status = "none") {
  const labels = {
    none: "Not submitted",
    submitted: "Proof submitted",
    accepted: "Payment accepted",
    rejected: "Proof rejected"
  };
  return labels[status] || titleCaseStatus(status);
}

function paymentStatusClass(status = "none") {
  if (status === "accepted") return "accepted";
  if (status === "rejected") return "rejected";
  if (status === "submitted") return "submitted";
  return "none";
}

function renderPaymentInstructions(instructions = {}) {
  const lines = [];

  if (instructions.bank_name) {
    lines.push(`<div><span>BANK</span><strong>${escapeHtml(instructions.bank_name)}</strong></div>`);
  }
  if (instructions.account_name) {
    lines.push(`<div><span>ACCOUNT NAME</span><strong>${escapeHtml(instructions.account_name)}</strong></div>`);
  }
  if (instructions.account_number) {
    lines.push(`<div><span>ACCOUNT NUMBER</span><strong>${escapeHtml(instructions.account_number)}</strong></div>`);
  }
  if (instructions.branch) {
    lines.push(`<div><span>BRANCH</span><strong>${escapeHtml(instructions.branch)}</strong></div>`);
  }

  if (!lines.length) {
    return `
      <p class="payment-instructions-note">
        Payment details will be added by Shot by Spaceboi. Once you receive the payment details,
        upload your proof here.
      </p>
    `;
  }

  return `
    <div class="payment-instructions-grid">${lines.join("")}</div>
    ${instructions.note
      ? `<p class="payment-instructions-note">${escapeHtml(instructions.note)}</p>`
      : ""}
  `;
}

async function uploadPaymentProof(user, booking, file, amount) {
  if (!sbClient || !user || !booking || !file) {
    throw new Error("Payment proof could not be submitted.");
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const objectPath =
    `${user.id}/${booking.id}/${Date.now()}-${safeName}`;

  const { error: uploadError } = await sbClient.storage
    .from("payment-proofs")
    .upload(objectPath, file, {
      cacheControl: "3600",
      upsert: false
    });

  if (uploadError) throw uploadError;

  const { data, error } = await sbClient.rpc("submit_payment_proof", {
    p_booking_id: booking.id,
    p_amount: Number(amount),
    p_proof_url: objectPath,
    p_payment_type: "deposit"
  });

  if (error) {
    // Remove the uploaded file if the database submission failed.
    await sbClient.storage
      .from("payment-proofs")
      .remove([objectPath]);
    throw error;
  }

  return data;
}

function attachPaymentProofHandler(card, booking, user) {
  const form = card.querySelector(".payment-proof-form");
  if (!form) return;

  form.addEventListener("submit", async event => {
    event.preventDefault();

    const fileInput = form.querySelector('input[type="file"]');
    const amountInput = form.querySelector('input[name="paymentAmount"]');
    const message = form.querySelector(".payment-proof-message");
    const button = form.querySelector('button[type="submit"]');

    const file = fileInput?.files?.[0];
    const amount = Number(amountInput?.value || 0);

    if (!file) {
      message.textContent = "Choose your payment proof first.";
      message.className = "payment-proof-message error";
      return;
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      message.textContent = "Enter the amount you paid.";
      message.className = "payment-proof-message error";
      return;
    }

    button.disabled = true;
    button.textContent = "UPLOADING…";
    message.textContent = "Uploading your proof…";
    message.className = "payment-proof-message";

    try {
      await uploadPaymentProof(user, booking, file, amount);
      message.textContent = "Payment proof submitted. It is now waiting for review.";
      message.className = "payment-proof-message success";
      button.textContent = "PROOF SUBMITTED ✓";

      setTimeout(() => loadMyBookings(user), 450);
    } catch (error) {
      console.error(error);
      message.textContent = error?.message || "Could not submit payment proof.";
      message.className = "payment-proof-message error";
      button.disabled = false;
      button.textContent = "UPLOAD PAYMENT PROOF";
    }
  });
}


let myBookingsLoadSequence = 0;

async function loadMyBookings(user) {
  const thisLoad = ++myBookingsLoadSequence;
  const list = document.getElementById("bookingsList");
  const loading = document.getElementById("bookingsLoading");
  const empty = document.getElementById("bookingsEmpty");

  if (!list || !sbClient || !user) return;

  loading?.classList.remove("hidden");
  empty?.classList.add("hidden");
  list.innerHTML = "";

  const { data: bookings, error } = await sbClient
    .from("bookings")
    .select(`
      id,
      custom_shoot_name,
      status,
      preferred_date,
      preferred_time,
      duration_minutes,
      location_type,
      location_text,
      payment_proof_status,
      final_total,
      deposit_required,
      amount_paid,
      download_url,
      created_at,
      shoot_types(name),
      payments(
        id,
        payment_type,
        amount,
        proof_url,
        status,
        admin_note,
        created_at
      ),
      invoices(
        id,
        invoice_type,
        invoice_number,
        subtotal,
        travel_fee,
        extras_total,
        discount_amount,
        total,
        amount_paid,
        balance,
        status,
        created_at
      )
    `)
    .eq("client_id", user.id)
    .order("created_at", { ascending: false });

  if (thisLoad !== myBookingsLoadSequence) return;

  loading?.classList.add("hidden");

  if (error) {
    list.innerHTML =
      `<div class="booking-list-state error">Could not load bookings: ${escapeHtml(error.message)}</div>`;
    return;
  }

  if (!bookings?.length) {
    empty?.classList.remove("hidden");
    return;
  }

  const uniqueBookings = Array.from(
    new Map(bookings.map(booking => [booking.id, booking])).values()
  );

  const paymentInstructions = await getPaymentInstructions();

  if (thisLoad !== myBookingsLoadSequence) return;

  list.innerHTML = "";

  uniqueBookings.forEach(booking => {
    const card = document.createElement("article");
    card.className = "account-booking-card";

    const shootName =
      booking.shoot_types?.name ||
      booking.custom_shoot_name ||
      "Photography Session";

    const balance =
      Math.max(0, Number(booking.final_total || 0) - Number(booking.amount_paid || 0));

    const invoices = Array.isArray(booking.invoices) ? booking.invoices : [];
    const payments = Array.isArray(booking.payments) ? booking.payments : [];
    const latestPayment = payments
      .slice()
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];

    const effectivePaymentStatus =
      latestPayment?.status ||
      booking.payment_proof_status ||
      "none";

    const canUploadDeposit =
      booking.status === "confirmed" &&
      !["submitted", "accepted"].includes(effectivePaymentStatus);

    const depositAmount =
      Number(booking.deposit_required || 0) > 0
        ? Number(booking.deposit_required)
        : "";

    card.innerHTML = `
      <div class="account-booking-top">
        <div>
          <span class="booking-status-chip ${bookingStatusClass(booking.status)}">
            ${escapeHtml(titleCaseStatus(booking.status))}
          </span>
          <h4>${escapeHtml(shootName)}</h4>
        </div>
        <span class="booking-date-mini">${escapeHtml(formatBookingDate(booking.preferred_date))}</span>
      </div>

      <div class="booking-meta-grid">
        <div><span>TIME</span><strong>${escapeHtml(formatBookingTime(booking.preferred_time))}</strong></div>
        <div><span>LOCATION</span><strong>${escapeHtml(booking.location_type || "—")}</strong></div>
        <div><span>PAYMENT</span><strong>${escapeHtml(paymentStatusLabel(effectivePaymentStatus))}</strong></div>
        <div><span>BALANCE</span><strong>${money(balance)}</strong></div>
      </div>

      ${booking.status === "confirmed" || effectivePaymentStatus !== "none"
        ? `
          <div class="client-payment-panel">
            <div class="client-payment-head">
              <div>
                <p class="eyebrow">PAYMENT</p>
                <h5>Deposit Payment</h5>
              </div>
              <span class="payment-review-chip ${paymentStatusClass(effectivePaymentStatus)}">
                ${escapeHtml(paymentStatusLabel(effectivePaymentStatus))}
              </span>
            </div>

            ${effectivePaymentStatus === "accepted"
              ? `<p class="payment-state-copy success">Your payment has been accepted. This booking is secured.</p>`
              : effectivePaymentStatus === "submitted"
                ? `<p class="payment-state-copy">Your proof has been submitted and is waiting for the photographer to review it.</p>`
                : effectivePaymentStatus === "rejected"
                  ? `<p class="payment-state-copy rejected">The last proof was rejected${latestPayment?.admin_note ? `: ${escapeHtml(latestPayment.admin_note)}` : "."} You can upload a new proof below.</p>`
                  : `
                    <div class="payment-instructions-box">
                      <p class="payment-instructions-title">
                        ${escapeHtml(paymentInstructions.heading || "Payment Instructions")}
                      </p>
                      ${renderPaymentInstructions(paymentInstructions)}
                    </div>
                  `
            }

            ${canUploadDeposit
              ? `
                <form class="payment-proof-form">
                  <label>
                    Amount paid (JMD)
                    <input
                      name="paymentAmount"
                      type="number"
                      min="1"
                      step="1"
                      value="${depositAmount}"
                      placeholder="${depositAmount ? "" : "Enter amount paid"}"
                      required
                    >
                  </label>

                  <label>
                    Upload payment proof
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/heic,image/heif,application/pdf"
                      required
                    >
                  </label>

                  <p class="payment-proof-message" aria-live="polite"></p>
                  <button class="gold-btn full-width" type="submit">UPLOAD PAYMENT PROOF</button>
                </form>
              `
              : ""
            }
          </div>
        `
        : ""}

      <div class="invoice-area">
        <p class="invoice-heading">Invoices</p>
        <div class="invoice-buttons"></div>
      </div>

      ${booking.download_url
        ? `<a class="photo-download-btn" href="${escapeHtml(booking.download_url)}" target="_blank" rel="noopener">DOWNLOAD YOUR PHOTOS ↗</a>`
        : ""}
    `;

    const invoiceButtons = card.querySelector(".invoice-buttons");

    if (!invoices.length) {
      invoiceButtons.innerHTML =
        '<span class="no-invoice-yet">No invoice available yet.</span>';
    } else {
      invoices
        .sort((a, b) => String(a.invoice_type).localeCompare(String(b.invoice_type)))
        .forEach(invoice => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "invoice-download-btn";
          button.textContent =
            invoice.invoice_type === "final"
              ? "DOWNLOAD FINAL INVOICE"
              : "DOWNLOAD BOOKING INVOICE";
          button.addEventListener("click", () => downloadInvoicePdf(invoice, booking));
          invoiceButtons.appendChild(button);
        });
    }

    attachPaymentProofHandler(card, booking, user);
    list.appendChild(card);
  });
}

initialiseLiveBookingForm();
