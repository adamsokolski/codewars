/* 
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

function digitize(n) {
  return n
    .toString()
    .split("")
    .map((e) => parseInt(e))
    .reverse();
}

console.log(digitize(35231));
