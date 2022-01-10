/* 
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

*/

// Idea: delete elements when pushed to returnArr

const snail = (array) => {
  if (array[0].length === 0) return []
  let returnArr = []
  let turnCounter = 1
  let length = array.length

  for (let i = 0, j = 0; returnArr.length < length * length; ) {
    if (turnCounter % 4 === 1) {
      // to right
      i = 0
      while (j < array[i].length) {
        returnArr.push(array[i][j])
        j++
      }
      array.splice(0, 1)
      turnCounter++
    } else if (turnCounter % 4 === 2) {
      // down
      j--
      while (i < array.length) {
        returnArr.push(array[i][j])
        array[i].splice(j, 1)
        i++
      }
      turnCounter++
    } else if (turnCounter % 4 === 3) {
      // left
      j--
      i--
      while (j >= 0) {
        returnArr.push(array[i][j])
        j--
      }
      array.splice(i, 1)
      turnCounter++
    } else if (turnCounter % 4 === 0) {
      // up
      j++
      i--
      while (i >= 0) {
        returnArr.push(array[i][j])
        array[i].splice(j, 1)
        i--
      }
      turnCounter++
    }
  }

  return returnArr
}

console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
)
