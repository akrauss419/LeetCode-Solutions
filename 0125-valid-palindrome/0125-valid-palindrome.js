/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regExPattern = /[^A-Za-z0-9]/g;
    let onlyLowerAlphaNumeric = s.replace(regExPattern, '').toLowerCase();
    let palindrome = onlyLowerAlphaNumeric.split('').reverse().join('');
    if (onlyLowerAlphaNumeric === palindrome) {
        return true;
    } else {
        return false;
    }
};