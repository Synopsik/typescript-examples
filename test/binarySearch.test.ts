import { describe, expect, it } from 'vitest';
import { binarySearch } from "../src/algorithms/binarySearch";

describe("binarySearch", () => {
    it("Finds an existing number", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
    });

    it("Returns null or -1 for a missing number", () => {
        expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
    })
});



