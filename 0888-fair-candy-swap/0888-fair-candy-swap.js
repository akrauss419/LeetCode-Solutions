/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let swappedCandies = new Array(2);
    let candyMap = {};
    let aliceTotal = 0;
    let bobTotal = 0;

    for (i = 0; i < aliceSizes.length; i++) {
        aliceTotal += aliceSizes[i];
    }
    
    for (i = 0; i < bobSizes.length; i++) {
        bobTotal += bobSizes[i];
        candyMap[bobSizes[i]] = true;
    }

    let change = (bobTotal - aliceTotal) / 2;

    for (i = 0; i < aliceSizes.length; i++) {
        if (candyMap[aliceSizes[i] + change]) {
            swappedCandies[0] = aliceSizes[i];
            swappedCandies[1] = aliceSizes[i] + change;
            return swappedCandies;
        }
    }
};