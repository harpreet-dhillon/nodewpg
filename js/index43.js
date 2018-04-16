const text = 'game of thrones';
const firstChar = text.charAt(0);
const secondChar = text.charAt(5);
const thirdChar = text.charAt(8);
const result = firstChar.concat(secondChar, thirdChar).toUpperCase();
console.log(`the final result is: ${result}`);