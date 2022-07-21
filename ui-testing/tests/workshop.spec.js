const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test.describe('Search', () => {
    test('First result should contain devbridge.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');
        let searchResultsPage = new SearchResultsPage(page);
        let text = await searchResultsPage.getMainLinkAttributeFromResult(1);
        expect(text).toContain('devbridge.com');
    });

    //nevisai teisinga, nes keičiasi indexOf
	// test("Fourth result should contain linkedin.com", async ({ page }) => {
	// 	let searchPage = new SearchPage(page);
	// 	await searchPage.navigate();
	// 	await searchPage.search("devbridge");
	// 	let searchResultsPage = new SearchResultsPage(page);
	// 	let text = await searchResultsPage.getMainHrefAttributeFromResult(4);
	// 	expect(text).toContain("linkedin.com");
	// });

    test('First page of results should contain linkedin.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');
        let searchResultsPage = new SearchResultsPage(page);
        let results = searchResultsPage.getResults();
        await results.nth(1).waitFor();
        let count = await results.count();
        let isFound = false;
        for (let index = 0; index < count; index++) {
            const text = await searchResultsPage.getMainLinkAttributeFromResult(index + 1);
            if (text.includes('linkedin.com')) {
                isFound = true;
                break;
            }
        }      
        expect(isFound).toBe(true);
    });

    test('Search query should be auto-populated in Results page', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');
        let searchResultsPage = new SearchResultsPage(page);
        let text = await searchResultsPage.getQueryInputText();
        expect(text).toEqual('devbridge');
    });
});



// const { test, expect } = require("@playwright/test");
// const { SearchPage } = require("../pages/SearchPage");
// const { SearchResultsPage } = require("../pages/SearchResultsPage");

// test.describe("Search", () => {
// 	test("First result should contain devbridge.com", async ({ page }) => {
// 		let searchPage = new SearchPage(page);
// 		await searchPage.navigate();
// 		await searchPage.search("devbridge");

// 		// await page.goto("https://duckduckgo.com/");
// 		// // xPath būtų .//input[@name='q'];
// 		// await page.locator("input[name=q]").fill("devbridge");
// 		// await page.locator("input[name=q]").press("Enter");
// 		let text = await page.locator("#r1-0 h2 a").getAttribute("href");
// 		await expect(text).toContain("devbridge.com");
// 		//ateina iki pause sustabdo testą pause eilutėje. Galime apžiūrėti naršyklę ir apžiūrėti puslapį dėl klaidų ir pan.
// 		// await page.pause();
// 	});
// 	// problema: kaskart keičiasi linkų indexOf.
// 	test("Fourth result should contain linkedin.com", async ({ page }) => {
// 		let searchPage = new SearchPage(page);
// 		await searchPage.navigate();
// 		await searchPage.search("devbridge");
// 		let searchResultsPage = new SearchResultsPage(page);
// 		await searchResultsPage.check("#r1-3 h2 a", "linkedin");
// 		// await page.goto("https://duckduckgo.com/");
// 		// await page.locator("input[name=q]").fill("devbridge");
// 		// await page.locator("input[name=q]").press("Enter");
// 		// let text = await page.locator("#r1-3 h2 a").getAttribute("href");
// 		// await expect(text).toContain("linkedin.com");
// 	});
// });