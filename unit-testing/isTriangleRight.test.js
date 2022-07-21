const isTriangleRight = require("./isTriangleRight");

test("3, 4, 5 should be triangle", () => {
	expect(isTriangleRight(3, 4, 5)).toBe(true);
});

test("10, 1, 1 should not be triangle", () => {
	expect(isTriangleRight(10, 1, 1)).toBe(false);
});

test("1, 1, 1 should not be right triangle", () => {
	expect(isTriangleRight(1, 1, 1)).toBe(false);
});

test("-1, 1, 1 should not be triangle", () => {
	expect(isTriangleRight(-1, 1, 1)).toBe(false);
});

test("0, 0, 0 should not be triangle", () => {
	expect(isTriangleRight(0, 0, 0)).toBe(false);
});

test("3.2, 4.2, 5.2 should be triangle", () => {
	expect(isTriangleRight(1, 1, 1)).toBe(false);
});

test("a, b, c should not be triangle", () => {
	expect(isTriangleRight("a", "b", "c")).toBe(false);
});

// // taip dažniausiai darom praktikoje:
// test("a, b, c should not be triangle", () => {
// 	//arange
// 	let a = "a";
// 	let b = "b";
// 	let c = "c";
// 	let expected = false;
// 	// act
// 	let result = isTriangleRight(a, b, c);
// 	// assert
// 	expect(result).toBe(expected);
// });
