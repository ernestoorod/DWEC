let strings = ['aBc', 'BE', 'hfa', 'AEO'];

function getUpperCase(strings) {
    return strings.filter(str => str == str.toUpperCase());
}

console.log(getUpperCase(strings));
