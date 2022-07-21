const isTriangle = require('./isTriangle');
// const isTriangleRight = require('./isTriangleRight');

function isTriangleRight(a, b, c) {
	// return null; visi testai failins
	return isTriangle(a, b, c) && ((c * c == a * a + b * b) || (b * b == a * a + c * c) || (a * a == c * c + b * b));
}

module.exports = isTriangleRight;
