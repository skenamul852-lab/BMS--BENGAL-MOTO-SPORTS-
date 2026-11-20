const languageSwitch = document.getElementById("languageSwitch");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-en][data-bn]").forEach((element) => {
    element.innerHTML = element.dataset[language];
  });
  languageSwitch.textContent = language === "en" ? "বাংলা" : "English";
  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((field) => {
    const translations = {
      "Your full name": "আপনার পুরো নাম",
      "+91 XXXXX XXXXX": "+91 XXXXX XXXXX",
      "Your location": "আপনার অবস্থান",
      "e.g. Your motorcycle model": "যেমন: মোটরসাইকেলের মডেল",
      "Tell us a little about yourself": "আপনার সম্পর্কে কিছু লিখুন"
    };
    const reverse = Object.fromEntries(Object.entries(translations).map(([a,b]) => [b,a]));
    if (language === "bn" && translations[field.placeholder]) field.placeholder = translations[field.placeholder];
    else if (language === "en" && reverse[field.placeholder]) field.placeholder = reverse[field.placeholder];
  });
}
languageSwitch.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "bn" : "en"));

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("membershipForm").addEventListener("submit", event => {
  event.preventDefault();
  const note = document.getElementById("formNote");
  note.textContent = currentLanguage === "en"
    ? "This is a visual starter form. Connect a secure backend before collecting or storing applications."
    : "এটি প্রাথমিক ডেমো ফর্ম। আবেদন সংগ্রহ বা সংরক্ষণের আগে নিরাপদ ব্যাকএন্ড যুক্ত করতে হবে।";
});
