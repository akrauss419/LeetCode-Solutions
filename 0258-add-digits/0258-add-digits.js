/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num;
    let digitArray = Array.from(String(num), Number);
    let sum = 0;
    for (i = 0; i < digitArray.length; i++) {
        sum += digitArray[i];
    }
    return addDigits(sum);
};