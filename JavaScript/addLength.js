/* 
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]

*/
function addLength(str) {
  return str.split(" ").map((e) => `${e} ${e.length}`);
}

console.log(addLength("you will win"));
