const { test, expect } = require("@playwright/test");

test.describe("Dashboard und Menü Navigation", () => {
  test("lädt standardmäßig das Dashboard und zeigt Menü", async ({ page }) => {
    await page.goto("/src/app.html");

    await expect(page.locator("#sidebarNav")).toBeVisible();
    await expect(page.getByRole("link", { name: "Dashboard" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Forms" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Tables" })).toBeVisible();

    await expect(page.locator("#view")).toContainText("Dashboard (page title)");
    await expect(page.locator("#sidebarNav a.active")).toHaveText("Dashboard");
  });

  test("navigiert über das Menü zwischen allen Views", async ({ page }) => {
    await page.goto("/src/app.html#dashboard");

    await page.getByRole("link", { name: "Forms" }).click();
    await expect(page).toHaveURL(/#forms$/);
    await expect(page.locator("#sidebarNav a.active")).toHaveText("Forms");
    await expect(page.locator("#view")).toContainText(/Forms content/);

    await page.getByRole("link", { name: "Tables" }).click();
    await expect(page).toHaveURL(/#tables$/);
    await expect(page.locator("#sidebarNav a.active")).toHaveText("Tables");
    await expect(page.locator("#view")).toContainText(/BMI|Messungen|Datum/);

    await page.getByRole("link", { name: "Dashboard" }).click();
    await expect(page).toHaveURL(/#dashboard$/);
    await expect(page.locator("#sidebarNav a.active")).toHaveText("Dashboard");
    await expect(page.locator("#view")).toContainText("Dashboard (page title)");
  });

  test("fällt bei ungültiger Route auf Dashboard zurück", async ({ page }) => {
    await page.goto("/src/app.html#does-not-exist");
    await expect(page.locator("#sidebarNav a.active")).toHaveText("Dashboard");
    await expect(page.locator("#view")).toContainText("Dashboard (page title)");
  });
});
