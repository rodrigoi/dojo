import { describe, expect, test } from "bun:test";

import { findMedianSortedArrays } from ".";

describe("0004 - Median of Two Sorted Arrays", () => {
  test("should return 2.0 when given nums1 = [1, 3] and nums2 = [2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
  });

  test("should return 2.5 when given nums1 = [1, 2] and nums2 = [3, 4]", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
  });

  test("should return 0.0 when given nums1 = [0, 0] and nums2 = [0, 0]", () => {
    expect(findMedianSortedArrays([0, 0], [0, 0])).toEqual(0.0);
  });

  test("should return 1.0 when given nums1 = [] and nums2 = [1]", () => {
    expect(findMedianSortedArrays([], [1])).toEqual(1.0);
  });

  test("should return 2.0 when given nums1 = [2] and nums2 = []", () => {
    expect(findMedianSortedArrays([2], [])).toEqual(2.0);
  });
});
