/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let length = Math.max(num1.length, num2.length) + 1;
    let result =  new Array(length);
    let carry = 0;

    for (i =0; i < length; i++) {
        let digitOne = parseInt(num1[num1.length - 1 - i] || 0, 10);
        let digitTwo = parseInt(num2[num2.length - 1 - i] || 0, 10);
        let sum = digitOne + digitTwo + carry;
        carry = 0;

        if (sum > 9) {
            carry = 1;
            sum -= 10;
        }

        result[length - 1 - i] = sum;
    }

    if (result[0] === 0) result.shift();
    return result.join('');
};