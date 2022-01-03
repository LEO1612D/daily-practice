/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
    // Write your code here
    const rotatedElements = [];
    const leftElements = [];
    const finalArr = [];
    for(let i=0;i<arr.length;i++){
        if(i<d){
           rotatedElements.push(arr[i]); 
        }
        else{
           leftElements.push(arr[i]); 
        }
    }
    return [...leftElements,...rotatedElements];

}