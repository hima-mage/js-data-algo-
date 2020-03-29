//  O(1)
function atLeastFive(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
atLeastFive(3)