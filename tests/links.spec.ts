import { test, expect } from '@playwright/test';

test('Click Form Authentication link', async ({ page }) => {
  // Open the homepage
  await page.goto('https://the-internet.herokuapp.com/');

  // Click the "Form Authentication" link
  await page.getByRole('link', { name: 'Form Authentication' }).click();

  // Check we navigated to login page
  await expect(page).toHaveURL(/login/);

  // Check heading is visible                                                                                               
  await expect(
    page.getByRole('heading', { name: 'Login Page' })
  ).toBeVisible();
});
