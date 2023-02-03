/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let selfDividingNums = [];
    for (i = left; i <= right; i++) {
        if (eachDigit(i)) {
            selfDividingNums.push(i);
        }
    }
    return selfDividingNums;

    function eachDigit(num) {
        if (num < 10) {
            return true;
        }
        let temp = num;
        while (temp > 0) {
            let cur = temp % 10;
            if (cur === 0 || num % cur !== 0) {
                return false;
            }
            temp = Math.floor(temp / 10);
        }
        return true;
    }
};