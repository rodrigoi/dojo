function _solution(A) {
  // you can use console.log for debugging purposes, i.e.
  // console.log('this is debug message');
  // write your code in JavaScript (ECMA-262, 5th edition)
  var lenght = A.length;
  var parts = lenght - 1;
  var difference = 0;
  
  for(var part = 0; part < parts; part++) {
    var left = 0;
    var right = 0;
    for(var item = 0; item < lenght; item++) {
      if(item  <= part) {
        left += A[item];
      } else {
        right += A[item];
      }
    }
    if(left - right < difference) {
      difference = Math.abs(left - right);
    }
  }
  
  return difference;
}

function solution(A) {
  // you can use console.log for debugging purposes, i.e.
  // console.log('this is debug message');
  // write your code in JavaScript (ECMA-262, 5th edition)
  
  
  var lenght = A.length;
  var left = A[0];
  var right = 0;
  for(var item = 1; item < lenght; item++){
    right += A[item];
  }
  var difference = Math.abs(left - right);
  
  var parts = lenght - 1;
  var partialDifference = 0;

  for(var part = 1; part < parts; part++) {
    left += A[part];
    right -= A[part];
    partialDifference = Math.abs(left - right);
    if(partialDifference < difference) {
      difference = partialDifference;
    }
  }

  return difference;
}