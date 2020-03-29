/* 
frequency counter 
Def : 
    - this uses objs or sets to collect values / frequencies of values 
    - this can often avoid the need for nested loops O(N^2) operations with array / strings
*/

//  ex : same - fun to take two array and check if each element in 1st arr has corresponding sqrt element in 2nd arr


function same(arr1, arr2) {
    // one at least will fail 
    if (arr1.length !== arr2.length) {
        return false;
    }
    //  each frequented values converted into key, value array (assco)
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
        //  iterate values in arr1 and calc it's freq and push it into obj as key , value
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    //  iterate values in arr2 and calc it's freq and push it into obj as key , value
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    //  iterate properties in frequencyCounter1   
    for (let key in frequencyCounter1) {
        //  check sqrt exist
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        //  check if number of repeation is the same
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}


console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));