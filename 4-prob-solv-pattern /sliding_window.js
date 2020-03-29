/*
    Def : 
    - this pattern involves creating a window which can either 
      be an array or number    from one poistion to another 
    
    - depending on certain codition the window either increase ot closes ( create new one )
    - very useful for keep tracking of a subset of data in an array /string etc .
*/

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 7, 2, 1, 6, 7, 5, 5, 4, 1], 3));