//PROBLEM
//https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/


function lonelyinteger(a) {
    // Write your code here
    const temp = [];
    let lonely = 0;
    for(let i=0;i<a.length;i++){
        temp[a[i]] = temp[a[i]]?temp[a[i]] + 1 : 1;
        
    }
    for(let i=0;i<a.length;i++){
        if(temp[a[i]]===1){
            lonely = a[i];
            break;
        }
    }
   return lonely;

}













