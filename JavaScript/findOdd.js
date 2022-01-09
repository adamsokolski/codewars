/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

function findOdd(A) {
  let arr = [];

  // Add number to arr if it doesn't contain it and if it does (even) delete it.
  // arr contains number occuring odd times.
  A.map((number) => {
    if (arr.indexOf(number) === -1) {
      arr.push(number);
    } else {
      arr.splice(arr.indexOf(number), 1);
    }
  });
  return arr[0];
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
