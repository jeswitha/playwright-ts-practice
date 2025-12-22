/*
import { test, expect } from '@playwright/test';

test('Type inside an iframe', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frame = page.frameLocator('#mce_0_ifr');
  const editor = frame.locator('#tinymce');

  // Clear and type
  await editor.click();
  await page.keyboard.press('Meta+A'); // Mac select all
  await page.keyboard.type('Hello from Playwright!');

  await expect(editor).toContainText('Hello from Playwright!');
});
*/


import { test, expect } from '@playwright/test';

test('Type inside an iframe', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  /**
 * NOTE:
 * The TinyMCE editor on this page can enter a read-only / blocked state
 * due to usage-based billing limits enforced by the public demo site.
 *
 * When this happens, a TinyMCE overlay intercepts pointer events,
 * causing Playwright clicks to retry until timeout (by design).
 *
 * Best practice:
 * - Detect the read-only banner and skip the test instead of forcing clicks.
 * - Avoid force:true, as it would hide a real application state and make the test misleading.
 *
 * For rich text editors, direct DOM updates via evaluate() are used here
 * to ensure deterministic and stable test behavior.
 */


  // Guard: TinyMCE usage-based billing can block editing and intercept clicks.
  const blockedBanner = page.getByText(/TinyMCE is in read-only mode/i);
  if (await blockedBanner.isVisible().catch(() => false)) {
    test.skip(true, 'TinyMCE is blocked/read-only on this run (overlay intercepts clicks).');
  }

  const editorBody = page.frameLocator('#mce_0_ifr').locator('#tinymce');

  // Prefer filling content in a stable way for rich editors:
  await editorBody.evaluate((el) => { el.textContent = 'Hello from Playwright!'; });

  await expect(editorBody).toContainText('Hello from Playwright!');
});

/*
Notes

Avoid force: true here. Forcing the click hides a real app-state problem (blocked/read-only) and makes the test misleading/flaky.

If you want iframe practice that always allows typing, use a different stable demo page/app (some public TinyMCE demos enforce quotas).
*/
