import { ListNode, addTwoNumbers } from ".";
import { describe, expect, test } from "bun:test";

describe("0002 - Add Two Numbers", () => {
  test("should return [7, 0, 8] when given [2, 4, 3] and [5, 6, 4]", () => {
    const listNode1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const listNode2 = new ListNode(5, new ListNode(6, new ListNode(4)));

    const resultList = new ListNode(7, new ListNode(0, new ListNode(8)));

    expect(addTwoNumbers(listNode1, listNode2)).toEqual(resultList);
  });

  test("should return [0] when given [] and []", () => {
    expect(addTwoNumbers(null, null)).toEqual(null);
  });

  test("should return [0] when given [0] and []", () => {
    expect(addTwoNumbers(new ListNode(0, null), null)).toEqual(
      new ListNode(0, null)
    );
  });

  test("should return [1] when given [] and [1]", () => {
    expect(addTwoNumbers(null, new ListNode(1, null))).toEqual(
      new ListNode(1, null)
    );
  });
});
