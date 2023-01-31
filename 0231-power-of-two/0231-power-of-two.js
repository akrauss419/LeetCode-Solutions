/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 536870912) return true;
    if ((Math.log(n) / Math.log(2)) % 1 === 0) {
        return true;
    } else {
        return false;
    }
};