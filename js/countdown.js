function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const eventDate = new Date("2025-10-04T11:00:00").getTime();

  function updateCountdown() {
    const lang = localStorage.getItem("language") || "ne";
    const t = translations[lang];
    const now = Date.now();
    const distance = eventDate - now;

    if (distance <= 0) {
      countdownEl.textContent = t.countdown_started;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `${days} ${t.day}${days !== 1 ? '' : ''} ${hours} ${t.hour} ${minutes} ${t.minute} ${seconds} ${t.second}`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

startCountdown();
