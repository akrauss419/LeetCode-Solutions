/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) return head;

    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = slow.next;
    let tail = prev.next;
    while (tail) {
        const next = tail.next;
        tail.next = prev;
        prev = tail;
        tail = next;
    }
    slow.next.next = null;
    slow.next = prev;

    let left = head;
    let right = slow.next;
    slow.next = null;
    while (left && right) {
        const ln = left.next;
        const rn = right.next;
        left.next = right;
        right.next = ln;
        left = ln;
        right = rn;
    }

    return head;
};