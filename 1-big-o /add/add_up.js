//  time optimize 
//  number of operation = the time required to run
//  this is linear O(n)
function addUpTo(n) {
    let total = 0; // accumlator  - 1 operation 
    for (let i = 1; i <= n; i++) { // n ( + , = ) opertion for i++,  1 = , n comparison
        total += i; // n (+, =) operation 
    }
    return total;
}
let t1 = new Date().getTime(); // time before excute
addUpTo(6000000000) // addup 
let t2 = new Date().getTime(); // time after excute
//  1 * 2 * 3 * 4 * 5 => n!
console.log((t2 - t1))