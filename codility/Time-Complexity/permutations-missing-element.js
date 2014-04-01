function _solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var length = A.length;
    
    if(length === 0) {
        return 1;
    }
    
    var universe = new Array(length + 1);
    universe[0] = true;
    for(var i = 0; i < length; i++){
        universe[A[i]] = true;
    }
    
    length = universe.length;
    for(i = 0; i < length; i++) {
        if(!universe[i]) {
            return i;
        }
    }
    return 0;
}

function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var length = A.length;
    
    if(length === 0) {
        return 1;
    }
    
    var total = (length + 1) * (length + 2) / 2;
    var totalA = 0;
    
    for(var i = 0; i < length; i++){
        totalA += A[i];
    }
    
    return total - totalA;
}