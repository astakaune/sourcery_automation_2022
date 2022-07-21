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