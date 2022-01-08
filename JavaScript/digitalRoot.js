/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


*/

const digital_root = (n) => {
  // Create array of single digit integers
  let arr = n
    .toString()
    .split("")
    .map((number) => parseInt(number));

  // Sum of digits in arr
  let sum = arr.reduce((a, b) => a + b, 0);

  // Check if sum have more than 1 digit, if so sum digits again
  if (sum >= 10) {
    return digital_root(sum);
  } else {
    return sum;
  }
};

console.log(digital_root(123456));
