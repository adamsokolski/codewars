/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str) {
  let wordArr = str.split(" ");
  let pigArr = [];
  let regex = /\W/g;

  wordArr.map((word) => {
    if (!regex.test(word)) {
      word += word[0] + "ay";
      pigArr.push(word.substring(1));
    } else {
      pigArr.push(word);
    }
  });

  return pigArr.join(" ");
}

console.log(pigIt("This is my, string"));
