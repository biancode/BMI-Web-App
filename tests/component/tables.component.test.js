import { describe, it, expect, beforeEach, vi } from "vitest";

async function loadTablesModule() {
  // ESM modules are cached across dynamic imports in a test file.
  // Reset module cache so the IIFE in tables.js runs fresh per test.
  vi.resetModules();
  delete window.tablesInit;
  delete window.__tablesTestUtils;
  window.__tablesLoaded = false;
  window.__TABLES_TEST__ = true;
  await import("../../src/tables/tables.js");
}

function setupTablesDom() {
  document.body.innerHTML = `
    <select id="filterSelect">
      <option value="all">Alle Einträge</option>
      <option value="week">Letzte Woche</option>
      <option value="month">Letzter Monat</option>
    </select>
    <select id="sortSelect">
      <option value="date-desc">Datum absteigend</option>
      <option value="date-asc">Datum aufsteigend</option>
      <option value="bmi-asc">BMI aufsteigend</option>
      <option value="bmi-desc">BMI absteigend</option>
    </select>
    <table><tbody id="bmiTableBody"></tbody></table>
  `;
}

describe("tables component", () => {
  beforeEach(() => {
    localStorage.clear();
    setupTablesDom();
  });

  it("renders rows from localStorage on init", async () => {
    localStorage.setItem(
      "bmiData",
      JSON.stringify([
        { date: "2026-02-20", weight: 80, height: 180, timestamp: "t1" },
        { date: "2026-02-21", weight: 70, height: 170, timestamp: "t2" },
      ]),
    );

    await loadTablesModule();
    window.tablesInit();

    const rows = document.querySelectorAll("#bmiTableBody tr");
    expect(rows.length).toBe(2);
    // default sort is date-desc -> newest first
    expect(rows[0].textContent).toContain("2026-02-21");
    expect(rows[1].textContent).toContain("2026-02-20");
  });

  it("filters entries to last week", async () => {
    const today = new Date();
    const withinWeek = new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);
    const old = new Date(today.getTime() - 40 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

    localStorage.setItem(
      "bmiData",
      JSON.stringify([
        { date: withinWeek, weight: 80, height: 180, timestamp: "t1" },
        { date: old, weight: 90, height: 180, timestamp: "t2" },
      ]),
    );

    await loadTablesModule();
    window.tablesInit();

    const filter = document.getElementById("filterSelect");
    filter.value = "week";
    filter.dispatchEvent(new Event("change"));

    const rows = document.querySelectorAll("#bmiTableBody tr");
    expect(rows.length).toBe(1);
    expect(rows[0].textContent).toContain(withinWeek);
  });

  it("sorts entries by BMI ascending", async () => {
    localStorage.setItem(
      "bmiData",
      JSON.stringify([
        { date: "2026-02-20", weight: 95, height: 180, timestamp: "t1" },
        { date: "2026-02-20", weight: 60, height: 180, timestamp: "t2" },
      ]),
    );

    await loadTablesModule();
    window.tablesInit();

    const sort = document.getElementById("sortSelect");
    sort.value = "bmi-asc";
    sort.dispatchEvent(new Event("change"));

    const firstRowText = document.querySelector("#bmiTableBody tr").textContent;
    expect(firstRowText).toContain("60");
  });

  it("deletes entry and updates localStorage", async () => {
    localStorage.setItem(
      "bmiData",
      JSON.stringify([
        { date: "2026-02-20", weight: 80, height: 180, timestamp: "t1" },
        { date: "2026-02-21", weight: 82, height: 180, timestamp: "t2" },
      ]),
    );

    await loadTablesModule();
    window.tablesInit();

    const deleteBtn = document.querySelector('button[data-timestamp="t1"]');
    deleteBtn.click();

    const rows = document.querySelectorAll("#bmiTableBody tr");
    expect(rows.length).toBe(1);

    const stored = JSON.parse(localStorage.getItem("bmiData"));
    expect(stored).toHaveLength(1);
    expect(stored[0].timestamp).toBe("t2");
  });
});
