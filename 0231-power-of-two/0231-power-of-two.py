pow_of_2 = set(2 ** i for i in range(31))

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n in pow_of_2