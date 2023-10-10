function convertCapacity(n, from, to) {
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

    if (units[from] !== undefined && units[to] !== undefined) {
        const bytes = n * units[from];
        return bytes / units[to];
    } else {
        return "Unidad de medida no válida";
    }
}

console.log(convertCapacity(5, 'GB', 'Megabyte'));  
console.log(convertCapacity(500, 'B', 'KB'));      
console.log(convertCapacity(1000, 'KB', 'B'));    
console.log(convertCapacity(2, 'EB', 'GB'));       
console.log(convertCapacity(10, 'GB', 'Terabyte')); 
console.log(convertCapacity(5, 'Bit', 'KB'));