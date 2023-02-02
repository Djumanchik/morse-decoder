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
    let space = '**********';
    let words = expr.split(space); //разбивка на слова
    let newWords = words.map(word => { // слова в слово
        let letters = word.match(/.{10}/g);// разбивка на десятизачные буквы
        let newWord = ''; // формирую новое слово
        for (let i = 0; i < letters.length; i++) {
            let symbols = letters[i].match(/.{2}/g).map(i => { // разбивка на пары для поиска точек и тире
                i = Number(i); // отброс лишних нулей
                if (i === 10) {
                    return '.';
                } else if (i === 11) {
                    return '-';
                } else {
                    return '';
                }
            }).join(''); // цифры стали точками и тире
            newWord = newWord + MORSE_TABLE[symbols] || ''; // поиск в объекте морзе значения нужной буквы
        }
        return newWord; // возвращаю слово
    }).join(' '); // собираю предложение через пробелы
    console.log(newWords);

};

module.exports = {
    decode
}