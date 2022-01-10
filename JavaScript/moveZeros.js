/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

const moveZeros = (arr) => {
  let returnArr = [...arr]
  let zerosArr = []
  for (let i = 0; i < returnArr.length; i++) {
    const element = returnArr[i]
    if (element === 0) {
      returnArr.splice(i, 1)
      zerosArr.push(element)
      i--
    }
  }
  return returnArr.concat(zerosArr)
}

console.log(
  moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])
)
