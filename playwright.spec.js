const { chromium, test } = require('@playwright/test');

test('Simulate Opera Mini', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    userAgent: 'Opera/9.80 (Android; Opera Mini/36.2.2254/191.277; U; en) Presto/2.12.423 Version/12.16',
  });
  const page = await context.newPage();
  
  await page.goto('https://youtube.com.com');
  await browser.close();
});