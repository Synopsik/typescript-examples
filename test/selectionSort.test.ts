import { describe, expect, it } from "vitest";
import { selectionSort } from "../util/algorithms/selectionSort";

describe("selectionSort", () => {
    it("Numbered list is sorted properly", () => {
        expect(selectionSort([4, 2, 8, 5, 1])).toEqual([1, 2, 4, 5, 8])
    });
})



