/* 
    frequency counter 
    given two strings , write a function to determine if the second string 
    is anagram of the first , an anagram is a word , phrase , or name formed 
    by rearranging the letters of another , such cinema and iceman

*/

function anagram(str1, str2) {
    if (str1.length !== str2.length) { return false; }
    let freqCounter1 = {};

    for (let val1 of str1) {
        freqCounter1[val1] = (freqCounter1[val1] || 0) + 1;
    }

    //  iterate properties in frequencyCounter1   
    for (let val2 of str2) {
        //  check sqrt exist
        if (!freqCounter1[val2]) {
            return false;
        } else {
            freqCounter1[val2] -= 1
        }

    }
    return true;
}

console.log(anagram('cinema', 'iceman'));