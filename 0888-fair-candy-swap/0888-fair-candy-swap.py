class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        diff = (sum(aliceSizes) - sum(bobSizes)) // 2
        bobSizes = set(bobSizes)
        for i in aliceSizes:
            if i- diff in bobSizes:
                return [i, i - diff]