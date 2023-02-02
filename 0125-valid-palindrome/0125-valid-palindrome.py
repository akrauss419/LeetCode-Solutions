class Solution:
    def isPalindrome(self, s: str) -> bool:
        back_str = ''
        for char in s:
            if char.isalnum():
                back_str += char.lower()
        return back_str == back_str[::-1]
        