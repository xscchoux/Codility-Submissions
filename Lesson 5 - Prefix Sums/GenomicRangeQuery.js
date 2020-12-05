// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let initial = [0,0,0,0]
    let preSum = [];
    preSum.push([...initial]);

    for (let i=0; i<S.length; i++){
        if (S[i] === 'A'){
            initial[0] += 1;
        }else if (S[i] === 'C'){
            initial[1] += 1;
        }else if (S[i] === 'G'){
            initial[2] += 1;
        }else{
            initial[3] += 1;
        }
        preSum.push([...initial])
    }
    let res = [];
    // console.log(preSum);
    for (let i=0; i<P.length; i++){
        for (let j=0; j<4; j++){
            if (preSum[Q[i]+1][j] - preSum[P[i]][j] > 0){
                res.push(j+1);
                break;
            }
        }
    }
    return res;
}