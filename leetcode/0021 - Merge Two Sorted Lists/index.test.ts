import { ListNode, mergeLists } from "./index";
import { describe, expect, test } from "bun:test";

describe("0021 - Merge Two Sorted Lists", () => {
  test("should return [1, 1, 2, 3, 4, 4] when given [1, 2, 4] and [1, 3, 4]", () => {
    const listNode1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    const listNode2 = new ListNode(1, new ListNode(3, new ListNode(4)));

    const resultList = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    );

    expect(mergeLists(listNode1, listNode2)).toEqual(resultList);
  });

  test("should return [] when given [] and []", () => {
    expect(mergeLists(null, null)).toEqual(null);
  });

  test("should return [0] when given [] and [0]", () => {
    const listNode = new ListNode(0, null);
    expect(mergeLists(null, listNode)).toEqual(new ListNode(0, null));
  });

  test("should return [1] when given [1] and []", () => {
    expect(mergeLists(new ListNode(1, null), null)).toEqual(
      new ListNode(1, null)
    );
  });
});
