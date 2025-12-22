import { test, expect } from '@playwright/test';

test('Handle new tab', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const newPagePromise = context.waitForEvent('page');
  await page.getByRole('link', { name: 'Click Here' }).click();

  const newPage = await newPagePromise;
  await newPage.waitForLoadState();

  await expect(newPage.getByRole('heading', { name: 'New Window' })).toBeVisible();
});
