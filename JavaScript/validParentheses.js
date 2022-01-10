/* 
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

const validParentheses = (parens) => {
  const regex = /\(\)/

  // delete '()' from string until there is no '()'
  while (regex.test(parens)) {
    parens = parens.replace(regex, '')
  }

  return parens.length === 0 ? true : false
}

console.log(validParentheses('()()()(((())))'))
