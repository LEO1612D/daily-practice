// LINK : https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let p=0;
    let n=0;
    let e=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            p=p+1;
        }
        else if(arr[i]<0){
            n=n+1;
        }
        else if(arr[i]===0){
            e=e+1;
        }
    }

    p=(p/arr.length).toFixed(6);
    n=(n/arr.length).toFixed(6);
    e=(e/arr.length).toFixed(6);
    
    console.log('',p,'\n',n,'\n',e)

}


// LINK https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((a, b) => a + b, 0);

    console.log(`${sum-max} ${sum-min}`);


}


