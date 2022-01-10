/* 
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
*/

const dirReduc = (arr) => {
  let returnArr = [...arr]
  const opposite = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  }

  for (let i = 0; i < returnArr.length; i++) {
    if (returnArr[i + 1] === opposite[returnArr[i]]) {
      returnArr.splice(i, 2)
      i > 0 ? (i -= 2) : i--
    }
  }

  return returnArr
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
)
