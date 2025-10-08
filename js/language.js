document.addEventListener("DOMContentLoaded", function () {
  const switcher = document.getElementById("languageSwitcher");
  const elements = document.querySelectorAll("[data-i18n]");

  const savedLang = localStorage.getItem("language") || "ne";
  switcher.value = savedLang;
  applyLanguage(savedLang);

  switcher.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem("language", selectedLang);
    applyLanguage(selectedLang);
  });

  function applyLanguage(lang) {
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        // ✅ Use innerHTML instead of textContent to allow HTML tags
        el.innerHTML = translations[lang][key];
      }
    });
  }
});
