/* 
    - divide and conquer
    - this pattern involves dividing data set into smaller chunks , 
      and then repeating process with subset data
      
    - this pattern tremendously decrease time comolexity

    ex : 
    given sorted array find the index of val 
*/

function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        let currentElement = array[middle];
        if (currentElement < val) {
            min = middle + 1
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
//  time compplexity is O(logn) - Binary Search
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));