let strings = ['hola', 'victor', 'villabalter', 'IES'];

function maxString(arr) {
    if (arr.length == 0) {
        return null;
    }

    let maxLength = 0;
    let longestString = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
            longestString = arr[i];
        }
    }

    return longestString;
}

console.log(maxString(strings));
