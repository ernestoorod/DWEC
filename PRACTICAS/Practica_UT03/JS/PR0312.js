function isEqualArr(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(isEqualArr([8, 2, 7],[8, 2, 7]));