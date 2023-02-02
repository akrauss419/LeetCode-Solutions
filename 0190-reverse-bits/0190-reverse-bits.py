class Solution:
    def reverseBits(self, n: int) -> int:
        n = "{0:032b}".format(n)
        n_reversed = str(n[::-1])
        return int(n_reversed, 2)