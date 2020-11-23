// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let preSum = [0];
    for (let i=0; i<A.length; i++){
        if (i==0 || i == A.length-1 || !(A[i-1] < A[i] && A[i+1] < A[i]) ){
            preSum.push(preSum[preSum.length-1]);
        }else{
            preSum.push(preSum[preSum.length-1]+1)
        }
    }
    
    res = 0
    
    for (let i=2; i<=A.length; i++){
        if (A.length%i !== 0) continue;
        let found = true;
        for (let j=i-1; j < A.length; j+=i){
            if ((preSum[j+1]-preSum[j+1-i]) < 1){
                found = false;
                break;
            }
        }
        if (found){
            res = Math.max(res, A.length/i);            
        }
    }
    return res;
}