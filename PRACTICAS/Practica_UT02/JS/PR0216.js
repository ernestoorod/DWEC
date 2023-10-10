function convertToBytes(capacity, from) {
    const units = {
        'Byte': 1,
        'B': 1,
        'Kilobyte': 1000,
        'KB': 1000,
        'Megabyte': 1000000,
        'MB': 1000000,
        'Gigabyte': 1000000000,
        'GB': 1000000000,
        'Terabyte': 1000000000000,
        'TB': 1000000000000,
        'Petabyte': 1000000000000000,
        'PB': 1000000000000000,
        'Exabyte': 1000000000000000000,
        'EB': 1000000000000000000
    };

    if (units[from] !== undefined) {
        return capacity * units[from];
    } else {
        return "Unidad de medida no válida";
    }
}

console.log(convertToBytes(3, 'MB'));          
console.log(convertToBytes(5, 'Terabyte'));    
console.log(convertToBytes(1, 'KB'));          
console.log(convertToBytes(2, 'PB'));          
console.log(convertToBytes(10, 'GB'));         
console.log(convertToBytes(7, 'Bit'));         
