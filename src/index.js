const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = "";
    let morseSymbols = "";
    let counter = 0;
    const arrayOfMorseSymbols = [];

    const exprLength = expr.length;

    for (let i = 0; i < exprLength; i += 2) {
        const currentSymbol = expr[i];
        const nextSymbol = expr[i + 1];
        const currentCoupleSymbols = currentSymbol + nextSymbol;

        if (currentCoupleSymbols === "10") {
            morseSymbols += ".";
        } else if (currentCoupleSymbols === "11") {
            morseSymbols += "-";
        }

        if ((i + 2) % 10 === 0) {
            arrayOfMorseSymbols[counter] = morseSymbols;
            morseSymbols = "";
            counter++;
        }
    }

    const arrayOfMorseSymbolsLength = arrayOfMorseSymbols.length;

    for (let i = 0; i < arrayOfMorseSymbolsLength; i++) {
        const currentCodedCharacter = arrayOfMorseSymbols[i];

        if(MORSE_TABLE[currentCodedCharacter] === undefined) {
            result += " ";
        } else {
            result += MORSE_TABLE[currentCodedCharacter];
        }
    }

    return result
}

module.exports = {
    decode
};
