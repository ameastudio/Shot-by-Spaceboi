
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

  document.getElementById("bookingForm")?.addEventListener("submit",e=>{
    e.preventDefault();
    if(!e.currentTarget.reportValidity()) return;
    alert("The booking form is ready visually. Live submission will work after the database is connected.");
  });
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
