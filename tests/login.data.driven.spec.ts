import { test, expect } from "@playwright/test"
import loginData from "../data/loginData.json"

loginData.forEach(({ email, password }) => {
  test(`User can login with Email ${email}`, async ({ page }) => {
    await page.goto("https://binaryville.com/account/")

    await page.getByRole("textbox", { name: "Email" }).fill(email)
    await page.getByRole("textbox", { name: "Password" }).fill(password)
    await page.getByRole("button", { name: "Sign In" }).click()

    await expect(page).toHaveURL(new RegExp(password))
  })
})

/*
test("user can log in with valid credentials (hard-coded)", async ({ page }) => {
  await page.goto("https://binarywheel.com/account");

  await page.getByRole("textbox", { name: "Email" }).fill("test1@example.com");
  await page.getByRole("textbox", { name: "Password" }).fill("pass123");
  await page.getByRole("button", { name: /sign in/i }).click();

  // Example assertion (adjust to whatever your app shows after login)
  await expect(page).toHaveURL(/pass123/);
});

used data driven approach instead
*/