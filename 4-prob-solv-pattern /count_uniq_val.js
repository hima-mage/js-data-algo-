/*
    - using multiple pointers
    count Unique values
    implement a function call CountUniqueValues which accepts a sorted array 
    and count the unique values in the array there can  be negative numbers 
    in the array , but it will alaways be sorted
    - this will using two pointers .
    - i will use the same array to store the unique values
    - O(n)
*/

function CountUniqueValues(arr) {
    if (arr.length === 0) { return 0; }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(CountUniqueValues([1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8]));