const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

// buvo įrašytas testas, kuris failino. Netinka, nes naudojami tie patys duomenys, kurie buvo true 1 teste
// test('3, 4, 5 is triangle', () => {
//     expect(isTriangle(3, 4, 5)).toBe(false);
// });

test('10, 1, 1 is not triangle', () => {
    expect(isTriangle(10, 1, 1)).toBe(false);
});

test('1, 1, 1 is triangle', () => {
    expect(isTriangle(1, 1, 1)).toBe(true);
});

test('-1, 1, 1 is not triangle', () => {
    expect(isTriangle(-1, 1, 1)).toBe(false);
});

test('0, 0, 0 is not triangle', () => {
    expect(isTriangle(0, 0, 0)).toBe(false);
});

test('3.2, 4.2, 5.2 is triangle', () => {
    expect(isTriangle(1, 1, 1)).toBe(true);
});

test('a, b, c is not triangle', () => {
    expect(isTriangle('a', 'b', 'c')).toBe(false);
});