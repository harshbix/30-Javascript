const input = 'hi mom';
const wordArray = input.split(" ");
var newWord = 'a';

wordArray.forEach((word) => {
    if (word.length > newWord.length) {
        newWord = word; 
    }
});

console.log(newWord);
