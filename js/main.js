/* Main interactions: navigation, counters, theme, birthday and scroll effects. */

/* EDIT THESE SETTINGS: relationship start date uses YYYY-MM-DD.
   Birthday format is MM-DD. Set the names and dates for both partners. */
const coupleSettings = {
  relationshipStart: "2026-07-15",
  partnerOne: { Soni: "MM-DD", birthday: "03-28" },
  partnerTwo: { Sherly: "MM-DD", birthday: "06-02" },
};

function updateRelationshipCounter() {
  const start = new Date(`${coupleSettings.relationshipStart}T00:00:10`);
  const today = new Date();
  const days = Math.max(
    0,
    Math.floor(
      (new Date(today.getFullYear(), today.getMonth(), today.getDate()) -
        start) /
        86400000,
    ),
  );
  document.getElementById("dayCounter").textContent =
    days.toLocaleString("id-ID");
  document.getElementById("startDateLabel").textContent =
    start.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
}
function checkBirthday() {
  const today = new Date();
  const mmdd = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const birthdayPerson = [
    coupleSettings.partnerOne,
    coupleSettings.partnerTwo,
  ].find((person) => person.birthday === mmdd);
  if (!birthdayPerson) return;
  const banner = document.getElementById("birthdayBanner");
  document.getElementById("birthdayTitle").textContent =
    `Happy Birthday, ${birthdayPerson.name}!`;
  document.getElementById("birthdayMessage").textContent =
    "Semoga tahun ini membawa banyak kebahagiaan, kesehatan, dan hal-hal baik. You deserve all the lovely things! ♡";
  banner.classList.remove("hidden");
  const confetti = document.getElementById("birthdayConfetti");
  confetti.innerHTML = Array.from(
    { length: 28 },
    (_, i) =>
      `<i style="left:${(i * 37) % 100}%;animation-delay:${(i % 8) * -0.45}s">✦</i>`,
  ).join("");
}
function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  elements.forEach((el) => observer.observe(el));
}
function setupNavigation() {
  const menu = document.getElementById("mainNav"),
    toggle = document.getElementById("menuToggle");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }),
  );
  const sections = document.querySelectorAll("main section[id]");
  const navObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          menu
            .querySelectorAll("a")
            .forEach((a) =>
              a.classList.toggle(
                "active",
                a.getAttribute("href") === `#${entry.target.id}`,
              ),
            );
        }
      }),
    { rootMargin: "-35% 0px -55% 0px" },
  );
  sections.forEach((section) => navObserver.observe(section));
}
function setupTheme() {
  const button = document.getElementById("themeToggle");
  const saved = SiteStorage.get("olm-theme", "light");
  if (saved === "dark") document.documentElement.dataset.theme = "dark";
  const update = () =>
    (button.textContent =
      document.documentElement.dataset.theme === "dark" ? "☀" : "☾");
  update();
  button.addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme !== "dark";
    if (dark) document.documentElement.dataset.theme = "dark";
    else delete document.documentElement.dataset.theme;
    SiteStorage.set("olm-theme", dark ? "dark" : "light");
    update();
  });
}
function setupFloatingDecor() {
  const container = document.getElementById("floatingDecor");
  const symbols = ["♡", "✦", "✧", "·"];
  for (let i = 0; i < 15; i++) {
    const bit = document.createElement("span");
    bit.className = "float-bit";
    bit.textContent = symbols[i % symbols.length];
    bit.style.left = `${(i * 29) % 100}%`;
    bit.style.animationDuration = `${14 + (i % 6) * 3}s`;
    bit.style.animationDelay = `${-i * 1.7}s`;
    bit.style.fontSize = `${12 + (i % 4) * 5}px`;
    container.appendChild(bit);
  }
}
function setupBackToTop() {
  const button = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => button.classList.toggle("visible", window.scrollY > 500),
    { passive: true },
  );
  button.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}
function setupLightbox() {
  document
    .getElementById("lightboxClose")
    .addEventListener("click", closeLightbox);
  document
    .getElementById("lightboxPrev")
    .addEventListener("click", () => moveLightbox(-1));
  document
    .getElementById("lightboxNext")
    .addEventListener("click", () => moveLightbox(1));
  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (document.getElementById("lightbox").classList.contains("hidden"))
      return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") moveLightbox(-1);
    if (event.key === "ArrowRight") moveLightbox(1);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  updateRelationshipCounter();
  checkBirthday();
  setupNavigation();
  setupTheme();
  setupFloatingDecor();
  setupBackToTop();
  setupLightbox();
  setupMusic();
  renderTimeline();
  renderGallery();
  renderVideos();
  renderLetters();
  observeReveals();
  document.getElementById("footerYear").textContent =
    `© ${new Date().getFullYear()} Our Little Memories`;
});
