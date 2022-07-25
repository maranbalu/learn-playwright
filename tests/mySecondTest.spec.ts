import { test, expect } from "@playwright/test";

test("My Second Test", async ({ browser }) => {
  // The following 2 steps are required, since I'm passing the browser fixture
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to http://automationpractice.com/index.php
  await page.goto("http://automationpractice.com/index.php");

  // Click text=Sign in
  await page.locator("text=Sign in").click();

  // Click input[name="email_create"]
  await page.locator('input[name="email_create"]').click();

  // Fill input[name="email_create"]
  await page.locator('input[name="email_create"]').fill("manimaranb@gmail.com");

  // Click button:has-text("Create an account")
  await page.locator('button:has-text("Create an account")').click();
  await expect(page).toHaveURL(
    "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
  );
});
