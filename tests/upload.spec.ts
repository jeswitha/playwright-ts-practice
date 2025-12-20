import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload a file', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  // Pick a file from your project folder (we will create one next)
  const filePath = path.join(__dirname, '../test-data/sample.txt');

  await page.setInputFiles('#file-upload', filePath);
  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
  await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
});
