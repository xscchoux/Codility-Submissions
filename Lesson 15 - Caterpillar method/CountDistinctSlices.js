// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let visited = new Array(M+1).fill(-1);
    let left = 0;
    let res = 0;
    for (let i=0; i<A.length; i++){
        if (visited[A[i]] !== -1){
            left = Math.max(left, visited[A[i]] + 1);
            visited[A[i]] = -1;
        }
        visited[A[i]] = i;
        res += i-left+1
        if (res > 1000000000){
            return 1000000000;
        }
    }
    return res;
}