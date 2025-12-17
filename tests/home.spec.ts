import {test, expect} from '@playwright/test';

test('OOpen The Internet home page', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle(/The Internet/i);
    await expect(page.getByRole('heading', {name: 'Welcome to the-internet'})).toBeVisible();
});