
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

// ❌ Initial inline test implementation.
// This version directly interacts with page locators inside the test,
// which works but leads to duplicated code and harder maintenance.
// Replaced with Page Object Model (POM) to improve reusability,
// readability, and long-term scalability.

/*
test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // Type username
  await page.getByLabel('Username').fill('tomsmith');

  // Type password
  await page.getByLabel('Password').fill('SuperSecretPassword!');

  // Click login
  await page.getByRole('button', { name: 'Login' }).click();

  // Assert success message
  await expect(page.locator('#flash')).toContainText(
    'You logged into a secure area!'
  );
});
*/

// ✅ Login test using Page Object Model (POM).
// Page interactions are abstracted into LoginPage to keep tests clean
// and make locator changes easier to manage.

test('Login using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.locator('#flash')).toContainText(
    'You logged into a secure area!'
  );
});
