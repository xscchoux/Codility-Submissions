// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let end = Math.floor(Math.sqrt(N))
    
    if (end*end === N){
        return 4*end;
    }
    
    res = 0
    
    for (let i=end; i>=1; i--){
        if (N%i === 0){
            res = 2*i + 2*(N/i);
            break;
        }
    }
    
    return res;
}