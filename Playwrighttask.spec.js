import {firefox,test,expect,} from '@playwright/test';
test.use({viewport:{width:1280,height:720}});
test('simulate firefox',async()=>{
const browser=await firefox.launch({headless:false
 })
 const context1=await browser.newContext()
    //await browser.setViewportSize({width:1280,height:585,}); const context1=await browser.newContext();
 const page1=await context1.newPage();
 await page1.goto ('https://playwright.dev/');
 await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
 const page2=await context1.newPage();
 await page2.goto('https://www.youtube.com/');
 await expect(page2).toHaveTitle('YouTube');

 const incognitobrowser1=await firefox.launch({headless:false
 })
  
 const incognitocontext2=await incognitobrowser1.CreateIncognitoBrowserContext()
 const incognitopage3=await incognitocontext2.newPage();
 await incognitopage3.goto ('https://www.refrens.com/');
 const incognitopage4=await incognitocontext2.newPage();
 await incognitopage4.goto('https://www.amazon.com/');
 const incognitopage5=await incognitocontext2.newPage();
 await incognitopage5.goto('https://www.flipkart.com/');
 });
