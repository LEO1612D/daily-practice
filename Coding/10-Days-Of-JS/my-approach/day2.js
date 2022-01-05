function hourglassSum(arr) {
    // Write your code here
    let max_sum;
    for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            
            let fs = arr[i][j]+arr[i][j+1]+arr[i][j+2];
            let fz = arr[i+1][j+1];
            let mm = arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2];
            let hour_glass_sum = (fs)+(fz)+(mm);
             
            if(i==0 && j==0){
                max_sum = hour_glass_sum;
            }

            if(hour_glass_sum > max_sum){
                max_sum = hour_glass_sum;
            }
     
        }

    }
    
    return max_sum;
}