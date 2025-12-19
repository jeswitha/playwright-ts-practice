import { test, expect } from '@playwright/test';

test('Select value from dropdown', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');

  // Select option with value "2"
  await dropdown.selectOption('2');

  // Verify selected value
  await expect(dropdown).toHaveValue('2');
});
