import { test, expect } from '@playwright/test';

test('Check a checkbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const firstCheckbox = page.locator('input[type="checkbox"]').first();

  // Check it (Playwright checks only if not already checked)
  await firstCheckbox.check();

  // Verify it is checked
  await expect(firstCheckbox).toBeChecked();

  //If a test fails, you want to see what the page looked like.
  await page.screenshot({ path: 'debug-day3.png' });

});

/*
🧠 What you should understand by end of Day 3

If you can say YES to these, Day 3 is complete:

I can handle alerts ✅

I can select dropdown values ✅

I can check/uncheck checkboxes ✅

I know how to take a screenshot for debugging ✅*/