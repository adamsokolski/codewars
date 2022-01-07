/* 
Write the function :

function encode(str)

that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'

*/

function encode(str) {
  // create alphabet array
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());

  let stringArr = str.split("");

  for (let i = 0; i < stringArr.length; i++) {
    if (alphabet.findIndex((e) => e === stringArr[i].toLowerCase()) > -1) {
      stringArr[i] =
        alphabet.findIndex((e) => e === stringArr[i].toLowerCase()) + 1;
    }
  }

  return stringArr.join("");
}

console.log(encode("abc-#@5"));
