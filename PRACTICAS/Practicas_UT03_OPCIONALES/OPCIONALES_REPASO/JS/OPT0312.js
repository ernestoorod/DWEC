function XO(str) {
    let X = 0;
    let O = 0;
  
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            X++;
        } else if (str[i].toLowerCase() === 'o') {
            O++;
        }
    }
  
    return X === O;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
