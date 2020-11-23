// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let peakIndex = new Array(A.length).fill(0);
    let peaks = 0
    for (let i=1; i<A.length-1; i++){
        if(A[i-1] < A[i] && A[i] > A[i+1]){
            peakIndex[i] = 1;
            peaks+=1;
        }
    }

// binary serach

    let countPeak = (K)=>{
        let ans = new Array(peakIndex.length).fill(0);
        for (let i=1; i<A.length; i++){
            if (peakIndex[i] === 1){
                if (i-K>=0){
                    ans[i] = ans[i-K] + 1;
                } else{
                    ans[i] = 1;
                }
            }else{
                ans[i] = ans[i-1];
            }
        }
        return ans[ans.length-1] > K ? K:ans[ans.length-1];
    }
    
    let left = 0, right = peaks;  // flags we take
    while (left + 1 < right){
        let mid = left + Math.floor((right-left)/2);
        if (countPeak(mid) !=  mid){
            right = mid
        }else{
            left = mid
        }
    }
    
    if (countPeak(right) === right){
        return right;
    }else{
        return left;
    }
}