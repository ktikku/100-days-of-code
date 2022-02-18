/*
 * Complete the 'vanity' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codes
 *  2. STRING_ARRAY numbers
 */

function convertCode (map, codes) {
    const convertedCodes = codes.map(code => {
        console.log(code);
        let convertedCode = '';
        for(let i = 0; i < code.length; i++) {
            convertedCode = convertedCode + map.get(code[i]);
        }
        return convertedCode; 
    })
    return convertedCodes;
}

function vanity(codes, numbers) {
    const map = new Map();
    map.set("A", 2);
    map.set("B", 2);
    map.set("C", 2);
    map.set("D", 3);
    map.set("E", 3);
    map.set("F", 3);
    map.set("G", 4);
    map.set("H", 4);
    map.set("I", 4);
    map.set("J", 5);
    map.set("K", 5);
    map.set("L", 5);
    map.set("M", 6);
    map.set("N", 6);
    map.set("O", 6);
    map.set("P", 7);
    map.set("Q", 7);
    map.set("R", 7);
    map.set("S", 7);
    map.set("T", 8);
    map.set("U", 8);
    map.set("V", 8);
    map.set("W", 9);
    map.set("X", 9);
    map.set("Y", 9);
    map.set("Z", 9);
    
    const convertedCodes = convertCode(map, codes);
    const vanityNumbers = numbers.filter(number => {
        for(let i = 0; i < convertedCodes.length; i++) {
            if(number.includes(convertedCodes[i])) {
                return number;
            }
        }
    })
    console.log(vanityNumbers)
    return [...new Set(vanityNumbers.sort())];
}
