class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        selfDividingNums = []

        while left <= right:
            is_self_dividing = True

            for d in str(left):
                if int(d) == 0 or int(left) % int(d) != 0:
                    is_self_dividing = False
            
            if is_self_dividing:
                selfDividingNums.append(int(left))
            
            left += 1
        
        return selfDividingNums