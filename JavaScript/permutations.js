/* 
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

*/

const permutations = (string) => {
  if (string.length === 1) return [string]
  console.log({ string })
  let arr = string.split('')
  let mutationsArr = []
  let returnArr = []
  console.log(Math.pow(arr.length - 1, 2))
  for (let i = 0; mutationsArr.length < permutationsCount(string.length); i++) {
    for (let j = arr.length - 1; j > 0; j--) {
      mutationsArr.push(arr.join(''))
      let temp = arr.splice(j, 1)
      arr.splice(j - 1, 0, temp[0])
    }
  }
  console.log({ mutationsArr })
  for (const element of mutationsArr) {
    if (returnArr.indexOf(element) === -1) {
      returnArr.push(element)
    }
  }
  console.log({ returnArr })
  return returnArr.sort()
}

const permutationsCount = (numberOfElements) => {
  let returnInt = numberOfElements
  for (let i = numberOfElements - 1; i > 0; i--) {
    returnInt *= i
  }
  return returnInt
}

console.log(permutations('abcd'))
