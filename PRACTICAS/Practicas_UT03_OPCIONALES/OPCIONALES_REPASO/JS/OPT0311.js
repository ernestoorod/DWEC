function maxSequence( arr ) {
    if (arr.length == 0) {
        return null;
    }

    let maxactual = arr[0];
    let maxglobal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxactual = Math.max(arr[i], maxactual + arr[i]);
        maxglobal = Math.max(maxglobal, maxactual);
    }

    return maxglobal;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

