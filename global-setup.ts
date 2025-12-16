import { chromium, FullConfig } from "@playwright/test"

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://practicesoftwaretesting.com/auth/login")
  await page.getByRole("textbox", {name: "Email address *"}).fill("test@test.com")
  await page
		.getByRole("textbox", { name: "Password *" })
    .fill("Testing!123!!");
  await page.getByRole("button", { name: "Login" }).click()
  
  await page.waitForURL("https://practicesoftwaretesting.com/account")

  await page.context().storageState({ path: "auth.json" })
  await browser.close()

}

export default globalSetup