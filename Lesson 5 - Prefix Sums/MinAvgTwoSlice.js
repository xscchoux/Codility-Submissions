// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let avg = Number.POSITIVE_INFINITY;
    let index = 0
    for (let i=0; i<=A.length-3; i++){
        let avg2 = (A[i]+A[i+1])/2;
        if (avg2 < avg){
            avg = avg2;
            index = i;
        }
        let avg3 = (A[i]+A[i+1]+A[i+2])/3;
        if (avg3 < avg){
            avg = avg3;
            index = i;
        }
    }
    if ( (A[A.length-1] + A[A.length-2])/2 < avg){
        index = A.length-2;
    }
    return index;
}