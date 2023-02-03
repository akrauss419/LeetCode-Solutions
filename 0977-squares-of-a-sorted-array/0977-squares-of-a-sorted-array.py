class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        square_nums = []
        
        for num in nums:
            square_num = num ** 2
            square_nums.append(square_num)
        
        return sorted(square_nums)