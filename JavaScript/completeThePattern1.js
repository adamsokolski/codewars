/* 
Task:

You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.

Rules/Note:

    If n < 1 then it should return "" i.e. empty string.
    There are no whitespaces in the pattern.
*/

function pattern(n) {
  if (n < 1) return "";
  if (n === 1) return "1";

  let output = "";
  for (let i = 1; i <= n; i++) {
    output += `${i.toString().repeat(i)}${n !== i ? "\n" : ""}`;
  }

  return output;
}

console.log(pattern(5));
