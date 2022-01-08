/* 
Given a list of integers, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

*/

function unusedDigits(...arr) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numbersArr = [];

  for (const element of arr) {
    for (const number of element.toString().split("")) {
      numbersArr.push(number);
    }
  }

  numbersArr = numbersArr.map((e) => parseInt(e)).sort((a, b) => a - b);
  for (const number of numbersArr) {
    const index = digits.indexOf(number);
    if (index !== -1) {
      digits.splice(index, 1);
    }
  }

  return digits.join("");
  // ...
}

console.log(unusedDigits(2015, 8, 26));
