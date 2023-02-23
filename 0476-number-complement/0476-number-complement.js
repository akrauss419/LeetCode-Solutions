/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = (num >>> 0).toString(2).split('');
    for (i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            binary[i] = '0';
        } else {
            binary[i] = '1';
        }
    }
    return parseInt(binary.join(''), 2);
};