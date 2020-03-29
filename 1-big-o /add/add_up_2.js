//  time optimize 
//  number of operation = the time required to run
//  here we have 3 operation * , + , /  & doesn't depend on n  
//  this O(constant) 
function addUpTo(n) {
    return n * (n + 1) / 2;
}
let t1 = new Date().getTime(); // time before excute
addUpTo(6000000000) // addup 
let t2 = new Date().getTime(); // time after excute

console.log(t2 - t1) // print time diff