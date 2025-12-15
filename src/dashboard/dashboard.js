const routes = {
  dashboard: "./dashboard/dashboard.html",
  forms: "./forms/forms.html",
  tables: "./tables/tables.html",
};

async function loadPage(page) {
  const host = document.getElementById("view");
  const file = routes[page] ?? routes.dashboard;

  const res = await fetch(file);
  host.innerHTML = await res.text();

  document.querySelectorAll("#sidebarNav .nav-link").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === page);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage("dashboard");

  document.getElementById("sidebarNav").addEventListener("click", (e) => {
    const link = e.target.closest("a[data-page]");
    if (!link) return;

    e.preventDefault();
    loadPage(link.dataset.page);
  });
});
