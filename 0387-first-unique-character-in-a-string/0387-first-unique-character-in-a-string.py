class Solution:
    def firstUniqChar(self, s: str) -> int:
        count_map = {}

        for letter in s:
            count_map.setdefault(letter, 0)
            count_map[letter] += 1
        
        for i in range(len(s)):
            if count_map[s[i]] == 1:
                return i
        
        return -1