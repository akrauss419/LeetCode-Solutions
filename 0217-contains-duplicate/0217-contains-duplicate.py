class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        distinct = set()
        for i in range(len(nums)):
            if nums[i] not in distinct:
                distinct.add(nums[i])
            else:
                return True
        return False