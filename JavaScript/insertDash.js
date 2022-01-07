/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
*/

function insertDash(num) {
  let arr = num.toString().split("");
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] % 2 !== 0 && arr[i] % 2 !== 0 && arr[i] !== "0" && i > 0) {
      returnArr.push("-");
    }
    returnArr.push(arr[i]);
  }
  return returnArr.join("");
}

console.log(insertDash(1003567));
