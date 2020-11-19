// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    let num = 1;
    while (num*num < N){
        if (N%num === 0){
            count += 2;
        }
        num+=1;
    }
    if (num*num === N){
        count += 1;
    }
    return count;
}