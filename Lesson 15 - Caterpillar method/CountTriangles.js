// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a,b){
        return a-b;
    });
    let N = A.length;
    let res = 0;
    for (let i=2; i<N; i++){
        let left =0, right = i-1;
        while (left < right){
            if (A[left] + A[right] > A[i]){
                res += right-left;
                right--;
            }else{
                left++;
            }
        }
    }
    return res;
}