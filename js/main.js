document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const opening = menu.classList.contains("hidden");
      menu.classList.toggle("hidden");
      toggle.setAttribute("aria-expanded", String(opening));
      toggle.setAttribute("aria-label", opening ? "Close navigation menu" : "Open navigation menu");
      toggle.innerHTML = opening
        ? '<i data-lucide="x" class="h-5 w-5"></i>'
        : '<i data-lucide="menu" class="h-5 w-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menu.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      toggle.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
      if (window.lucide) window.lucide.createIcons();
    }));
  }

  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const open = !item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(row => {
        row.classList.remove("open");
        row.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      });
      if (open) {
        item.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add("is-visible"));

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
      );
    }), { rootMargin: "-25% 0px -65% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }
});
