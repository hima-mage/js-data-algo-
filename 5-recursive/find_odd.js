//  find odd numbers in array using recursive
function findOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) { return newArr; }
    if (arr[0] % 2 !== 0) { newArr.push(arr[0]) }
    return newArr.concat(findOddValues(arr.slice(1)));
}


console.log(findOddValues([1, 2, 3, 4, 5, 6, 7, 8]));