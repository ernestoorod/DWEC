function convertBase(str, baseFrom, baseTo) {
    const base10Number = parseInt(str, baseFrom);

    const convertedNumber = base10Number.toString(baseTo);

    return convertedNumber;
}


