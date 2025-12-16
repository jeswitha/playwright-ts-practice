/*
import { Given, When, Then, Before, After } from '@cucumber/cucumber'
import { chromium, expect, Page, Browser } from '@playwright/test'

let page: Page
let browser: Browser

Before(async () => {
  browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  page = await context.newPage()
})

After(async () => {
  await browser.close()
})
  Moved to browserSetup.ts file
*/

import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { page } from '../browserSetup'
import {LoginPage} from '../page-objects/login-page.bdd.pom'

let loginPage: LoginPage

Given("the user is on the login page", async () => {

    loginPage = new LoginPage(page)
  await loginPage.goto()

  //await page.goto("https://binaryville.com/account/")  --- using POM method instead
})

When("the user enters a valid email and password", async () => {
   
    await loginPage.emailLocator.fill("test@example.com");
    await loginPage.passwordLocator.fill("pass123")

    /*
  await page.getByRole("textbox", { name: "Email" }).fill("test@example.com");
  await page.getByRole("textbox", { name: "Password" }).fill("pass123")
  using POM locators instead
    */
})

Then("the user should see their email and password in the URL", async () => {
  
  await loginPage.signInButtonLocator.click()
   // await page.getByRole("button", { name: "Sign in" }).click()      --- using POM locator instead
  await expect(page).toHaveURL(/test%40example.com/)
  await expect(page).toHaveURL(/pass123/)
})