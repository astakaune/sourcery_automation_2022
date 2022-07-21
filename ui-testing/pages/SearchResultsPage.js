const { expect } = require("@playwright/test");

class SearchResultsPage {
	constructor(page) {
		this.page = page;
	}

	getResults() {
		//await nereikia, kai dirbam su elementų sąrašu
		return this.page.locator("article[data-testid=result]");
	}

	async getMainLinkAttributeFromResult(resultIndex) {
		return await this.page.locator(`#r1-${resultIndex - 1} h2 a`).getAttribute("href");
	}

	async getQueryInputText() {
		return await this.page.locator("input[name=q]").getAttribute("value");
	}
}

module.exports = { SearchResultsPage };


// class SearchResultsPage {
// 	constructor(page) {
// 		this.page = page;

// 		// this.searchTermInput = page.locator('[aria-label="Enter your search term"]');
// 	}
// 	// async navigate() {
// 	// 	await this.page.goto("https://duckduckgo.com/");
// 	// }
// 	// async check(text1, text2) {
// 	// 	let text = await this.page.locator(text1).getAttribute("href");
// 	// 	await expect(text).toContain(text2);
// 	// }

// }

// module.exports = { SearchResultsPage };