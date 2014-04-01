function solution(X, Y, D) {
  // you can use console.log for debugging purposes, i.e.
  // console.log('this is debug message');
  // write your code in JavaScript (ECMA-262, 5th edition)
  if (X == Y) {
    return 0;
  }
  if(D >= Y) {
    return 1;
  }
  
  return Math.ceil((Y - X)/D);
}