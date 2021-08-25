export function areParenthesesBalanced(inputString) {
  // TODO: write your code here

  let result = [];

  // Adds left paranthesis to array, then remove last added one when you see a right parenthesis
  // False if right parenthesis met while result arr empty
  for (let i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) === '(') {
      result.push('(');
    }
    else if (inputString.charAt(i) === ')') {
      if (result.length === 0) {
        return false;
      }
      result.pop();
    }
  }
  
  return result.length === 0 ? true : false;

}