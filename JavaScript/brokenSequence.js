/* 
You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

Return:

    0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
    1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
    n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")
*/
function findMissingNumber(sequence) {
  const regexLetter = /[a-zA-Z]/g;
  const regexNumber = /\d*/g;
  const arr = sequence.match(regexNumber);

  // return 1 for non-numeric value in sequence
  if (regexLetter.test(sequence)) return 1;

  // return 0 for empty sequence
  if (sequence.length === 0) return 0;

  // only sorted numbers in array
  let arrOnlyNumbers = arr.filter((element) => regexNumber.test(element));
  arrOnlyNumbers = arrOnlyNumbers.map((element) => parseInt(element));
  arrOnlyNumbers.sort((a, b) => a - b);

  for (let i = 0, temp = 0; i < arrOnlyNumbers.length; i++) {
    const element = arrOnlyNumbers[i];

    if (element == temp + 1) {
      temp = element;
    } else {
      // return lowest missing number
      return temp + 1;
    }
  }

  // retrun 0 for vaild sequence
  return 0;
}

console.log(findMissingNumber("1 2 3 4 5"));
