export function isPalindrome(inputString) {
  // TODO: write your code here
  
  // compares input to its reverse
  return inputString == inputString.split('').reverse().join('');
}