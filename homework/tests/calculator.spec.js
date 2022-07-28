const { test, expect } = require("@playwright/test");

const data = [
	"Prototype", // viskas gerai
	"1", // 
	"2", // negerai Add, Concatenate
	"3", // 
	"4", // pažymėta "Integers only" ir nėra galimybės pasirinkti.
	"5", // 'Clear' mygtukas aktyvus tik po 'Calculate' mygtuko paspaudimo.
	"6", // dalyba iš 0 negalima, duoda atsakymą - begalybė ir nemeta klaidos
	"7", // negerai Add, Subtract, Multiply, Divide, Concatenate.
	"8", // negerai Subtract, Divide, Concatenate, sumaišyti 1 ir 2 skaičių inputai.
	"9", // neveikia visi matematiniai veiksmai, nes nėra "Second number" inputo laukelio ir 'Calculate' mygtuko.
];

data.forEach((version) => {

	//bugs in versions: 2, 7, 9.
	test.describe(version + ": Add", () => {
		test("Adding 2 to 3 results in 5", async ({ page }) => {
			await page.goto("https://testsheepnz.github.io/BasicCalculator");
			await page.selectOption("#selectBuild", { label: version });
			await page.locator("#number1Field").type("2");
			await page.locator("#number2Field").type("3");
			await page.selectOption("#selectOperationDropdown", { label: "Add" });
			await page.locator("#calculateButton").click();
			await expect(page.locator("#numberAnswerField")).toHaveValue("5");
		});
	});

	//bugs in versions: 7, 8, 9.
	test.describe(version + ": Subtract", () => {
		test("Substracting 5 to 2 results in 3", async ({ page }) => {
			await page.goto("https://testsheepnz.github.io/BasicCalculator");
			await page.selectOption("#selectBuild", { label: version });
			await page.locator("#number1Field").type("5");
			await page.locator("#number2Field").type("2");
			await page.selectOption("#selectOperationDropdown", { label: "Subtract" });
			await page.locator("#calculateButton").click();
			await expect(page.locator("#numberAnswerField")).toHaveValue("3");
		});
	});

	//bugs in versions: 7, 9.
	test.describe(version + ": Multiply", () => {
		test("Multiplying 2 and 3 results in 6", async ({ page }) => {
			await page.goto("https://testsheepnz.github.io/BasicCalculator");
			await page.selectOption("#selectBuild", { label: version });
			await page.locator("#number1Field").type("2");
			await page.locator("#number2Field").type("3");
			await page.selectOption("#selectOperationDropdown", { label: "Multiply" });
			await page.locator("#calculateButton").click();
			await expect(page.locator("#numberAnswerField")).toHaveValue("6");
		});
	});

	//bugs in versions: 7, 8, 9.
	test.describe(version + ": Divide", () => {
			test("Dividing 10 and 2 results in 5", async ({ page }) => {
				await page.goto("https://testsheepnz.github.io/BasicCalculator");
				await page.selectOption("#selectBuild", { label: version });
				await page.locator("#number1Field").type("10");
				await page.locator("#number2Field").type("2");
				await page.selectOption("#selectOperationDropdown", { label: "Divide" });
				await page.locator("#calculateButton").click();
				await expect(page.locator("#numberAnswerField")).toHaveValue("5");
			});
		});

	// bugs in versions: 2, 7, 8, 9.
	test.describe(version + ": Concatenate", () => {
		test("Concatenating 2 and 3 results in 23", async ({ page }) => {
			await page.goto("https://testsheepnz.github.io/BasicCalculator");
			await page.selectOption("#selectBuild", { label: version });
			await page.locator("#number1Field").type("2");
			await page.locator("#number2Field").type("3");
			await page.selectOption("#selectOperationDropdown", { label: "Concatenate" });
			await page.locator("#calculateButton").click();
			await expect(page.locator("#numberAnswerField")).toHaveValue("23");
		});
	});
});
