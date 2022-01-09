/* 
Write

function wordStep(str)

that takes in a string and creates a step with that word.

E.g

wordStep('SNAKES SHOE EFFORT TRUMP POTATO') ===

[['S','N','A','K','E','S',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','H',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','O',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ','E','F','F','O','R','T',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','R',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','U',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','M',' ',' ',' ',' ',' '],
 [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','P','O','T','A','T','O']]

Every word will end with the character that the next word will start with. You will 
start top left of the array and end bottom right. All cells that are not occupied by a 
letter needs to be a space ' '
*/

function wordStep(str) {
  let strArr = str.split(" ");
  let returnArr = [];
  let height = calculateLength(strArr, false);
  let width = calculateLength(strArr, true);

  // generate 'table' with calculated width and height
  for (let i = 0; i < height; i++) {
    returnArr[i] = [];
    for (let j = 0; j < width; j++) {
      returnArr[i][j] = " ";
    }
  }

  for (let i = 0, x = 0, y = 0, word = 0; word < strArr.length; i++) {
    const tempArr = strArr[word].split("");

    if (i % 2 === 0) {
      // horizontal

      if (y !== 0) tempArr.shift();
      for (
        let letterIndex = 0;
        letterIndex < tempArr.length;
        x++, letterIndex++
      ) {
        // shift letters higher depending on index
        let lift = parseInt(i / 2);
        returnArr[y - lift][x] = tempArr[letterIndex];
      }
      y++;
      word++;
    } else {
      // vertical
      tempArr.shift();

      for (
        let letterIndex = 0;
        letterIndex < tempArr.length;
        y++, letterIndex++
      ) {
        // shift letters higher depending on index
        let lift = parseInt(i / 2);
        returnArr[y - lift][x - 1] = tempArr[letterIndex];
      }
      word++;
    }
  }

  return returnArr;
}

// calculate width/height of 'table'
const calculateLength = (arr, ifEven) => {
  let modulo = ifEven ? 0 : 1;
  let returnLength = arr
    .map((e, i) => e.length)
    .filter((e, i) => (i % 2 === modulo ? e : 0));
  return returnLength.reduce((a, b) => a + b, 0) - returnLength.length + 1;
};

// Display returned Array
let wordArr = wordStep("SNAKES SHOE EFFORT TRUMP POTATO");
for (const element of wordArr) {
  let temp = "";
  for (const iterator of element) {
    temp += `'${iterator}', `;
  }
  console.log(temp);
}
