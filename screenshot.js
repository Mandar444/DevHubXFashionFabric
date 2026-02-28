
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = (await browser.pages())[0];
    await page.setViewport({width: 1920, height: 1080});
    await page.goto('http://localhost:8080');
    // Wait for the hero section button to load
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: 'hero_check.png'});
    
    // Scroll to heritage section
    await page.evaluate(() => {
        window.scrollBy(0, document.body.scrollHeight * 0.4);
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({path: 'heritage_check.png'});
    
    await browser.close();
})();