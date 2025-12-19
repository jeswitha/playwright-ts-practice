import { test, expect } from '@playwright/test';

test('Handle JavaScript alert', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Listen for alert and accept it
  page.once('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  });

  // Trigger the alert
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  // Verify result text
  await expect(page.locator('#result'))
    .toHaveText('You successfully clicked an alert');
});
