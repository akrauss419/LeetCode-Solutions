/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let split = string.split('');
    let reverse = split.reverse();
    let backwards = reverse.join('');
    let backwardsNum = parseFloat(backwards);
    if (x === backwardsNum) {
        return true;
    } else {
        return false;
    }
};