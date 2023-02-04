/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i = 1;
    let gotIt = false;
    while (!gotIt) {
        if (i * i === num) {
            return true;
        } else if (i * i < num) {
            i++;
        } else {
            return false;
        }
    }
};