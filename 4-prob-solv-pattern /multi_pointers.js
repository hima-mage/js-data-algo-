/*
    multiple pointers
    Def : 
    creating pointers or values that correspond to an index or position and move toward the 
    beginning or end or  middle , based on certain condition 

    - very efficient for solving problems with minimal space complexity as well  
*/

/*
    write function called sumZero , which accepts a sorted array of integers , 
    the function should find the first pair where sum is 0 , return an array that includes 
    both values that sum to zero or undefined if a pair does not exit 

    # a sorted array of integers -> from low value to high value
*/

function sumZero(arr) {
    let left = 0; // first pointer 
    let right = arr.length - 1 // second pointer
        // console.log({ left, right })
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, 0]));