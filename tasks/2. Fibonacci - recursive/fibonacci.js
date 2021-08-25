export function getFibonacciUntil(n) {
  //TODO write your code here, remember it should be recursive
  // Can use a memoized solution to be more efficient
  
  // Base cases
  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  // Recursive call and add up the last two elements of Fib(n-1)
  let prevArr = getFibonacciUntil(n-1);
  let prevArrSum = prevArr[prevArr.length-1] + prevArr[prevArr.length-2];
  prevArr.push(prevArrSum);

  return prevArr;
}
