import{test,chromium} from  "@playwright/test" 
test('AmazonSearch',async()=>{
const browser=await chromium.launch({headless:false})
const context=await browser.newContext()
const page=await context.newPage()
await page.goto('https://www.amazon.in/')
const search=await page.getByLabel('Search Amazon').fill('motorcycle helmets')
await page.click('input[value="Go"]')
})