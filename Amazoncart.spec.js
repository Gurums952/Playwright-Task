import{chromium,test,expect} from '@playwright/test'
test('Amazon cart',async()=>{
 const browser= await chromium.launch({headless:false})
 const context=await browser.newContext()
 const page=await context.newPage()
 await page.goto('https://www.amazon.in/')
 const dropdown=await page.getByTitle('Search in').selectOption('Electronics')
 const searchamazon=await page.getByLabel('search Amazon.in').fill('Moto G45 5G')
await page.waitForTimeout(3000)
const searchbtn=await page.locator('input#nav-search-submit-button')
await expect(searchbtn.isVisible()).toBeTruthy()
await searchbtn.click()
await page.waitForTimeout(3000)
const cart=await page.locator('span#nav-cart-count')
await cart.click()
await page.waitForTimeout(10000)
})