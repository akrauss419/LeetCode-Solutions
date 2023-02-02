class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        double_str = s + s
        if goal in double_str:
            return True