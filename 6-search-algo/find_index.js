//  only sorted 
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    if (arr[end] < val || val < 0) { return -1; }
    let middle = Math.floor((start + end) / 2);
    while (start <= end) {

        if (val == arr[middle]) {
            return middle;
        } else if (val < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);

    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15], 6));