const { test, expect } = require("@playwright/test");

const views = [
  {
    name: "Dashboard View",
    hash: "#dashboard",
    activeLink: "Dashboard",
    expectedText: "Dashboard (page title)",
  },
  {
    name: "Forms View",
    hash: "#forms",
    activeLink: "Forms",
    expectedText: /Forms content/,
  },
  {
    name: "Tables View",
    hash: "#tables",
    activeLink: "Tables",
    expectedText: /BMI|Messungen|Datum/,
  },
];

for (const view of views) {
  test(`${view.name} rendert korrekt`, async ({ page }) => {
    await page.goto(`/src/app.html${view.hash}`);

    await expect(page.locator("#sidebarNav a.active")).toHaveText(view.activeLink);
    await expect(page.locator("#view")).toContainText(view.expectedText);
  });
}
