import { test, expect } from '@playwright/test';

test('Wait for dynamic content to load', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await page.getByRole('button', { name: 'Start' }).click();

  // Wait until "Hello World!" appears
 
 /* await expect(
    page.getByText('Hello World!')
  ).toBeVisible();
  */

  // ❌ This approach fails for dynamically loaded content.
// The element exists in the DOM but remains hidden for a short time,
// so toBeVisible() times out.
// Using an explicit wait for visibility is more reliable here.
// await expect(page.getByText('Hello World!')).toBeVisible();

// ✅ Correct approach for dynamic content:
// Wait explicitly until the element becomes visible,
// then assert on its text.
const message = page.locator('#finish h4');
await message.waitFor({ state: 'visible' });
await expect(message).toHaveText('Hello World!');

// Dynamic content appears in the DOM before becoming visible.
// Explicitly waiting for the visible state avoids flaky assertions.


});
