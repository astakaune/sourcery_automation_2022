function isTriangle(a, b, c) {
    return (a < b + c) && (b < a + c) && (c < a + b);
    // return (a < b + c); keičiamas kodas mutacijų testavimui ir žiūrima, ar testai pagaus neteisingą kodą.
}

module.exports = isTriangle;