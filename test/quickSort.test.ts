import { describe, expect, it } from "vitest";
import { quickSort } from "../util/algorithms/quickSort";

describe("quickSort", () => {
    it("Numbered list is sorted properly", () => {
        expect(quickSort([4, 2, 8, 5, 1])).toEqual([1, 2, 4, 5, 8])
    });
})



